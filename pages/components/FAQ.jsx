import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
const FAQ = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="faq wrapper">
            <h2>FAQ</h2>
            <div className='faq-wrap'>

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>什么是 NFT？如何购买本项目的 NFT？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            朋友您还需要多多学习，暂时不适合参与本项目，别买了。
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>这个项目有什么用？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            是一个好看的无损的svg格式的xbox logo。购买之后您将拥有对您持有 NFT的无限使用权
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>供应量以及价格和铸造规则？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            限量 <strong>2000</strong> 个。每个售价{" "}
                            <strong>0.1</strong> Matic。每个钱包地址可以铸造最多{" "}
                            <strong>3</strong> 个。每个人每天最多 <strong>1</strong> 个钱包。
                            如果想免费mint只需{" "}<strong>联系我给我留个地址就行了</strong> 。
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>为什么每个地址可以铸造 3 个？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            一个两个有点少，万一盲盒开了以后自己不是很满意，多一个还能再多一个选择。
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>如何实现每个人最多铸造 3 个的限制？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            技术上我们是搞不定的，所以只能通过道德绑架的方式。
                            <strong>今天，我们都是良心铸造人！</strong>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>官方的运营策略？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            我暂时没制定任何运营策略，想买就买，毕竟是自己作为学习和兴趣爱好开发的第一个web3项目。
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>本项目是否有 OpenSea 下架风险？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            应该不会吧，我只是作为一个Xbox粉丝发起的社区活动，而且还是免费mint，没有任何商业成分。
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>对持有者有什么要求吗？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            1. 钱包里至少需要在Polygon主网下有0.15 Matic 余额，以保证mint及所花费的gas。
                        </Typography>
                        <Typography>
                            2. 最好是xbox爱好者，而不是为了mint而mint。
                        </Typography>
                        <Typography>
                            3. 如果觉得好看，希望多分享给身边的人。
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>项目方是否会保留或者持有稀有作品？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            不会，因为没有稀有的，2000个完全是随机的。
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>项目方对收益有什么打算？会回馈社区吗？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            我几乎没啥收益，暂时也没有社区，如果真的有收益，少的话可以roll个xbox游戏的key，多的话可以roll 手柄 甚至 XSX主机。
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            为什么 OpenSea 上面设置 10% 的版税？这么高？
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>能捞多少算多少。</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} className='faq-item'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>什么时候可以铸造？</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <strong>就是现在！</strong>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>

    );
}

export default FAQ;
