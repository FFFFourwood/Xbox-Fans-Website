import { getContract } from '../api/contract';
import React from 'react';
import web3 from 'web3';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { injected } from '../api/connectors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';




const Mint = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [connect, setConnect] = useState(false);
    const [progress, setProgress] = useState('请先链接钱包');
    const [mintedNum, setMintedNum] = useState('请先链接钱包');
    const [price, setPrice] = useState(0);
    const [mint, setMint] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('erroe');
    const web3reactContext = useWeb3React()

    const handleValueChange = (e) => {
        let price = e.target.value;
        price = price > 0 ? price : 0;
        setPrice(price);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseMessage = () => {
        setShowAlert(false);
    };
    
    const handleMintClose = () => {
        setMint(false);
    };
    const checkProgress = async () => {
        let myContract = getContract(web3reactContext.library, web3reactContext.account);
        let num = (await myContract.totalSupply()).toString()
        setProgress(num)
    };
    const checkMintedNum = async () => {
        let myContract = getContract(web3reactContext.library, web3reactContext.account);
        let num = (await myContract.balanceOf(web3reactContext.account)).toString()
        setMintedNum(num)
    };
    const connectWalletBtn = async () => {
        try {
            await web3reactContext.activate(injected).then(() => {
                console.log(web3reactContext)
                if (web3reactContext.chainId !== 137) {
                    setOpen(true);
                    setConnect(false);
                } else {
                    console.log('connected to Polygon')
                    setConnect(web3reactContext.account)
                    checkProgress()
                    checkMintedNum()
                }
            }).catch((e) => {
                console.log(e)
                setOpen(true);
                setConnect(false);
            })
        } catch (ex) {
            console.log(ex);
            setOpen(true);
            setConnect(false);
        }
    };
    const mintText = () => {
        return connect ? 'MINT' : '请先链接钱包'
    }
    const mintNFT = () => {
        setMint(true);
    }

    const toMint = async () => {
        console.log(price)
        try {
            const myContract = getContract(web3reactContext.library, web3reactContext.account);
            const response = await myContract.mintXboxFans(1, {
                value: web3.utils.toWei(price.toString(), 'ether'),
            })
            setLoading(true)
            const res = await response.wait();
            console.log('-----------------res-----------------');
            console.log(res);
            setLoading(false)
            setShowAlert(true);
            setAlertMessage('Mint Success!');
        } catch (e) {
            setShowAlert(true);
            setAlertMessage('Mint失败')
        }
    }
    return (
        <div className="mint wrapper">
            <h2>MINT</h2>
            <h2>合约owner钱包被盗！ 停止Mint！</h2>
            {/* <div className="mint-wrap">
                <Card className='mint-card'>
                    <Button variant="contained" onClick={connectWalletBtn} className='connect-btn'>{connect ? connect : 'Connect Wallet'}</Button>
                    <div className='opensea-wrap'>
                        请移步在{" "}
                        <a
                            href="https://opensea.io/collection/xbox-fans"
                            target="_blank"
                            rel="noreferrer"
                        >
                            OpenSea
                        </a>{" "}
                        上查看。
                    </div>
                    <Button variant="contained" onClick={mintNFT} className='mint-btn' disabled={(progress <= 2000 || mintedNum <= 3) ? false : true} >{mintText()}</Button>
                    <div className='mint-status' >
                        铸造进度：{progress} / 2000，为防止bot刷!mint价格0.1MATIC起！！ <br />
                        已铸造：{mintedNum} / 3 个
                    </div>
                </Card>
            </div> */}
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"连接错误！"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        请使用MateMask连接到Polygon网络
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={mint}
                onClose={handleMintClose}
                aria-labelledby="alert-dialog-title1"
                aria-describedby="alert-dialog-description1"
            >
                <DialogTitle id="alert-dialog-title1">
                    {"MINT!!！"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description1">
                        请输入赞助并支付的Mint费用，本来免费Mint请输入0就可以了，但我发现合约在被bot刷，所以改成0.1MATIC起了，还请理解。
                    </DialogContentText>
                </DialogContent>
                <div className="input-wrap">
                    <TextField
                        id="price"
                        label="Mint费用，单位Matic"
                        type="number"
                        variant="standard"
                        fullWidth={true}
                        required
                        onChange={handleValueChange}
                    />
                </div>
                <DialogActions>
                    <Button onClick={handleMintClose} disabled={loading}>Cancel</Button>
                    <LoadingButton onClick={toMint} loading={loading}>Mint</LoadingButton>
                </DialogActions>
            </Dialog>
            <Dialog
                open={showAlert}
                onClose={handleClose}
                aria-describedby="alert-dialog-description3"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description3">
                        {alertMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseMessage}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}


export default Mint;
