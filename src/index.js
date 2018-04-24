import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import header from './img/header_img.png';
import logo from './img/reliability.svg';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="top">
                    <a href="https://vwo.com/" title="Visual Website Optimizer" className="col-auto relative">
                        {/* <svg width="82" height="28" viewBox="0 0 82 28" alt="Visual Website Optimizer" class="top-vwo-logo valign-middle" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd"><path d="M66.822 0c7.91 0 14.32 6.182 14.32 13.808 0 7.626-6.41 13.808-14.32 13.808-6.66 0-12.26-4.386-13.86-10.326l1.27.795.658-.977c1.486 5.004 6.265 8.667 11.932 8.667 6.854 0 12.41-5.358 12.41-11.967 0-6.61-5.556-11.967-12.41-11.967-.586 0-1.163.04-1.728.116l1.2-1.782-.247-.154c.257-.013.515-.02.775-.02z" fill="#BF3078"/>
                                <path fill="#802050" d="M52.503 0h14.32L47.73 27.616 40.57 17.26l-7.16 10.356-7.24-10.473 1.133-1.68 6.108 8.834 5.572-8.058 1.59-2.3 1.587 2.3 5.57 8.057L63.255 1.84H36.476L37.716 0"/>
                                <path d="M19.092 27.616L0 0h38.184L19.092 27.616zm0-3.32L34.617 1.842H3.567l15.525 22.457z" fill="#26134D"/>
                            </g>
                        </svg> */}
                        <svg width="82" height="28" alt="Visual Website Optimizer" className="top-vwo-logo--white valign-middle" viewBox="0 0 82 28" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#FFF" fill-rule="evenodd"><path d="M66.822 0c7.91 0 14.32 6.182 14.32 13.808 0 7.626-6.41 13.808-14.32 13.808-6.66 0-12.26-4.386-13.86-10.326l1.27.795.658-.977c1.486 5.004 6.265 8.667 11.932 8.667 6.854 0 12.41-5.358 12.41-11.967 0-6.61-5.556-11.967-12.41-11.967-.586 0-1.163.04-1.728.116l1.2-1.782-.247-.154c.257-.013.515-.02.775-.02z"/>
                                <path d="M52.503 0h14.32L47.73 27.616 40.57 17.26l-7.16 10.356-7.24-10.473 1.133-1.68 6.108 8.834 5.572-8.058 1.59-2.3 1.587 2.3 5.57 8.057L63.255 1.84H36.476L37.716 0"/>
                                <path d="M19.092 27.616L0 0h38.184L19.092 27.616zm0-3.32L34.617 1.842H3.567l15.525 22.457z"/>
                            </g>
                        </svg>
		  	        </a>
                    <div className="tabs">
                        <span>产品介绍</span>
                        <span>服务</span>
                        <span>关于我们</span>
                    </div>
                </div>
                <div className="banner">
                    <h1>数字资产交易专业解决方案</h1>
                    <p className="t2">轻松构建您自己的交易所</p>
                </div>
            </div>
        );
    }
}

class Product extends React.Component {
    render(){
        return (
            <div className="part1">
                <div className="c1">
                    <div className="block">
                        <h3>场外交易</h3>
                        <p className="t1">拥有全球最极速便捷的交易流程体验</p>
                        <p className="t1">功能全面，自由配置认证商家</p>
                        <p className="t1">自由配置交易币种，买卖自由</p>
                    </div>
                    <div className="block">
                        <h3>现货交易</h3>
                        <p className="t1">基于多层分布式体系的内存撮合机制</p>
                        <p className="t1">具有超高的交易处理能力</p>
                        <p className="t1">支撑功能完善，自由设置数字资产模板，上下币极速</p>
                    </div>
                    <div className="block">
                        <h3>保证金交易</h3>
                        <p className="t1">通过分仓机制严格控制投资者的爆仓风险</p>
                        <p className="t1">灵活交易，可融资，可融币</p>
                    </div>
                </div>
                <div className="c2">
                    <div className="block">
                        <h3>标准化远期合约</h3>
                        <p className="t1">拥有自动化风控系统，有效抵制重大系统性风险</p>
                        <p className="t1">动态杠杆，币种丰富</p>
                    </div>
                    <div className="block">
                        <h3>基金理财</h3>
                        <p className="t1">灵活的投票机制，公平决定发行的基金</p>
                        <p className="t1">精选的数字资产加入基金，最大限度降低投资风险，稳定收入</p>
                    </div>
                    <div className="block">
                        <h3>钱包产品</h3>
                        <p className="t1">采用冷钱包、私钥离线化的热钱包等先进的技术保证安全</p>
                        <p className="t1">丰富的第三方工具接入，发现更有趣的产品</p>
                    </div>
                </div>
            </div>
        )
    }
}

class Service extends React.Component {
    render(){
        return (
            <div className="part2">

                <span className="left2">
                    <p className="m">多种部署模式快速输出</p>
                </span>
                <ul className="right2">
                    <li>
                        <span>公有云</span>
                        <p>提供高级功能和免费基础功能</p>
                        <p>自助开通，即注册即用</p>
                        <p>用接入成本低，集成快</p>
                    </li>
                    <li>
                        <span>专有云</span>
                        <p>独立部署的服务集群</p>
                        <p>资源隔离，更高性能和可靠性</p>
                        <p>专人维护和监控，业务参数可定制调整</p>
                    </li>
                    <li>
                        <span>私有云</span>
                        <p>服务集群部署在私有基础设施上</p>
                        <p>安全指数高，数据可控 </p>
                        <p>资源规模自主调配</p>
                    </li>
                </ul>
            </div>
        )
    }
}

class AboutUs extends React.Component {
    render(){
        return (
            <div className="part3">
                <div className="p-h">
                    {/* <h2 className="we">全平台客户端接入，支持全业务</h2> */}
                </div>
            </div>
        )
    }
}


class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="app">
                <Header />
                <Product />
                <Service />
                <AboutUs />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

