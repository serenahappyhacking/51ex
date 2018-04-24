import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="navbar">
                    <a href="#" className="navbar--logo"></a>
                    <a href="#product" className="navbar--menu">产品介绍</a>
                    <a href="#service" className="navbar--menu">服务</a>
                    <a href="#aboutus" className="navbar--menu">关于我们</a>
                </div>
                <div className="banner">
                    <div className="banner--title">数字资产交易专业解决方案</div>
                    <div className="banner--subtitle">轻松构建您自己的交易所</div>
                </div>
            </div>
        );
    }
}

class Product extends React.Component {
    render() {
        return (
            <div className="product" id="product">
                <div className="product--row">
                    <div className="product--block">
                        <div>
                            <h3>场外交易</h3>
                            <p>拥有全球最极速便捷的交易流程体验，功能全面，自由配置认证商家，自由配置交易币种，买卖自由</p>
                        </div>
                    </div>
                    <div className="product--block">
                        <div>
                            <h3>现货交易</h3>
                            <p>基于多层分布式体系的内存撮合机制，具有超高的交易处理能力，支撑功能完善，自由设置数字资产模板，上下币极速</p>
                        </div>
                    </div>
                    <div className="product--block">
                        <div>
                            <h3>保证金交易</h3>
                            <p>通过分仓机制严格控制投资者的爆仓风险，灵活交易，可融资，可融币</p>
                        </div>
                    </div>
                </div>
                <div className="product--row">
                    <div className="product--block">
                        <div>
                            <h3>标准化远期合约</h3>
                            <p>拥有自动化风控系统，有效抵制重大系统性风险，动态杠杆，币种丰富</p>
                        </div>
                    </div>
                    <div className="product--block">
                        <div>
                            <h3>基金理财</h3>
                            <p>灵活的投票机制，公平决定发行的基金，精选的数字资产加入基金，最大限度降低投资风险，稳定收入</p>
                        </div>
                    </div>
                    <div className="product--block">
                        <div>
                            <h3>钱包产品</h3>
                            <p>采用冷钱包、私钥离线化的热钱包等先进的技术保证安全，丰富的第三方工具接入，发现更有趣的产品</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Service extends React.Component {
    render() {
        return (
            <div className="service" id="service">
                <div className="service--section">
                    <div className="left">
                        <h3>多种部署模式快速输出</h3>
                    </div>
                    <div className="right">
                        <div className="items">
                            <div className="item">
                                <div className="label">公有云</div>
                                <div className="description">
                                    <p>提供高级功能和免费基础功能<br/>自助开通，即注册即用<br/>用接入成本低，集成快</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="label">专有云</div>
                                <div className="description">
                                    <p>独立部署的服务集群<br/>资源隔离，更高性能和可靠性<br/>专人维护和监控，业务参数可定制调整</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="label">私有云</div>
                                <div className="description">
                                    <p>服务集群部署在私有基础设施上<br />安全指数高，数据可控<br/>资源规模自主调配</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service--section">
                    <div className="left">
                        <h3>全平台客户端接入<br/>支持全业务</h3>
                    </div>
                    <div className="right">
                        <p className="info2">采用HTML5、SSL技术打造流畅的WEB端交易平台，同时专注塑造<br/>全平台交易系统，覆盖iOS、Android、Windows、Mac多个平台，<br/>具有全业务、全平台交付能力，选择您想要的模板和皮肤。</p>
                        <div className="logo-container">
                            <div className="logo"></div>
                            <div className="logo"></div>
                            <div className="logo"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Advantage extends React.Component {
    render() {
        return (
            <div className="advantage">

            </div>
        )
    }
}

class AboutUs extends React.Component {
    render() {
        return (
            <div className="aboutus" id="aboutus">
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Product />
                <Service />
                <Advantage />
                <AboutUs />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

