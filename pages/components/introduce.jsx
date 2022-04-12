import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const Introduce = () =>{
    return (
        <div className="introduce wrapper">
            <h2>INTRODUCTION</h2>
            <Box className="introduce-box">
                <Paper elevation={3} className="introduce-box-item">
                    我也是是良心NFT，希望通过通过web3 通过xbox去认识更多的朋友
                </Paper>
                <Paper elevation={3} className="introduce-box-item">
                    这个活动是我自己一个人作为一名xbox粉丝所做的社区活动
                </Paper>
                <Paper elevation={3} className="introduce-box-item">
                    首批做了2000个，希望大家喜欢，并在polygon网络mint，只需支付0.1MATIC，本来是免费的，但是发现合约被bot疯狂刷。。。也可以即刻或者推特联系我，我免费转给你。
                </Paper>
                <Paper elevation={3} className="introduce-box-item">
                    这2000个是盲盒，里面是各种漂亮的绚丽的自制xbox logo
                </Paper>
                <Paper elevation={3} className="introduce-box-item">
                    目前没有白名单，没有discord，没有tg，只有我的一个小号twitter，因为是免费福利活动，暂时没有运营的需求，如果后面受到大家的喜欢，我再去创建相对应的频道
                </Paper>
                <Paper elevation={3} className="introduce-box-item">
                    开发时间成本用了不到一周，也算是自己学习入门web3的一个纪念
                </Paper>
                <Paper elevation={3} className="introduce-box-item">
                    同时抄袭了部分 <a href="https://gclx.xyz/" style={{textDecoration:'underline'}}>国产良心NFT</a> 的文字和逻辑。
                </Paper>
            </Box>
        </div>
    )
}

export default Introduce;
