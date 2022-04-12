import * as React from 'react';
import Image from 'next/image'
import MyAvatar from '../../public/xbox.png'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const emoDays = () => {
    let now = new Date().getTime()
    let past = new Date('2022-03-12').getTime()
    let days = Math.floor((now - past) / (1000 * 60 * 60 * 24)) + 1
    return days
}

const About = ()=> {
    return (
        <div className="about">
            <h2>ABOUT</h2>
            <div className="about-wrap">
                <Card className='about-card'>
                    <div className="my-avatar-wrap">
                        <Image alt="Arthur" src={MyAvatar} className="my-avatar" />
                    </div>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Arthur{bull}Li
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            web developer | xbox gamer | web3 noob buidler
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" className='about-des'>
                            本来想做这个是收到了 “国产良心NFT”的启发，再加上自己喜欢xbox，于是在国产良心上线那天就有了这个想法，结果因为离职+疫情+搬家+换城市耽误了很多时间，，现在已经在长春隔离了{emoDays()}天了，前几天抽空把这个想法实现了，我是第一次写合约，自己看教程一点一点写，前前后后一共花了大概一周时间，其中网站部分还大量参考了 “国产良心NFT” ，最终时间成本是1周，金钱成本 域名0.98刀，部署智能合约0.13Matic，如果可以的话后面再去eth主网继续！最后，希望我的的NFT受到大家喜欢，xbox fans DAO也能真正DAO起来！！!
                        </Typography>
                        <Typography variant="body2">
                            捐赠地址{'"FFFFourwood.bit"'}谢谢！
                        </Typography>
                    </CardContent>
                </Card>


            </div>

        </div>
    )
}

export default About;
