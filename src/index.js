import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './img/1.jpg';

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
                        <span>首页</span>
                        <span>产品介绍</span>
                        <span>服务</span>
                        <span>关于我们</span>
                    </div>
                </div>
                <div className="banner">
                    <h1>数字资产交易专业解决方案</h1>
                    <p>场外、币币交易、合约期货全支持，轻松构建您自己的交易所</p>
                </div>
            </div>
        );
    }
}

class Product extends React.Component {
    render(){
        return (
            <div className="part1">
                <div className="p-h">
                    <h2 className="we">我们的产品优势</h2>
                </div>
           
                <div className="content">
                    <div>
                        <div>
                            <img src="https://d5bygqdtbohob.cloudfront.net/wp-content/themes/vwo/images/home/process-driven-optimization.svg" alt="Optimization Process - VWO" />
                        </div>
                        <div>
                            <h3>场外交易</h3>
                            <p>拥有全球最极速便捷的交易流程体验</p>
                            <p>功能全面，自由配置认证商家，自由配置交易币种，买卖自由</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://d5bygqdtbohob.cloudfront.net/wp-content/themes/vwo/images/home/process-driven-optimization.svg" alt="Optimization Process - VWO" />
                        </div>
                        <div>
                            <h3>现货交易</h3>
                            <p>拥有全球最极速便捷的交易流程体验</p>
                            <p>功能全面，自由配置认证商家，自由配置交易币种，买卖自由</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://d5bygqdtbohob.cloudfront.net/wp-content/themes/vwo/images/home/process-driven-optimization.svg" alt="Optimization Process - VWO" />
                        </div>
                        <div>
                            <h3>保证金交易</h3>
                            <p>拥有全球最极速便捷的交易流程体验</p>
                            <p>功能全面，自由配置认证商家，自由配置交易币种，买卖自由</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://d5bygqdtbohob.cloudfront.net/wp-content/themes/vwo/images/home/process-driven-optimization.svg" alt="Optimization Process - VWO" />
                        </div>
                        <div>
                            <h3>场外交易</h3>
                            <p>拥有全球最极速便捷的交易流程体验</p>
                            <p>功能全面，自由配置认证商家，自由配置交易币种，买卖自由</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://d5bygqdtbohob.cloudfront.net/wp-content/themes/vwo/images/home/process-driven-optimization.svg" alt="Optimization Process - VWO" />
                        </div>
                        <div>
                            <h3>现货交易</h3>
                            <p>拥有全球最极速便捷的交易流程体验</p>
                            <p>功能全面，自由配置认证商家，自由配置交易币种，买卖自由</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://d5bygqdtbohob.cloudfront.net/wp-content/themes/vwo/images/home/process-driven-optimization.svg" alt="Optimization Process - VWO" />
                        </div>
                        <div>
                            <h3>保证金交易</h3>
                            <p>拥有全球最极速便捷的交易流程体验</p>
                            <p>功能全面，自由配置认证商家，自由配置交易币种，买卖自由</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

class Service extends React.Component {
    render(){
        return (
            <div>多种部署模式快速输出</div>
        )
    }
}

class AboutUs extends React.Component {
    render(){
        return (
            <div>为什么选择 51EX</div>
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

