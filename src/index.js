import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="navbar">
                    <a href="#" className="navbar--logo">
                        <svg width="67px" height="30px" viewBox="0 0 67 30" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <title>logo</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Home-page" transform="translate(-140.000000, -15.000000)" fill="#FFFFFF">
                                    <g id="Navigation" transform="translate(120.000000, 0.000000)">
                                        <g id="logo" transform="translate(20.000000, 15.000000)">
                                            <polygon id="Fill-1" points="25.2953118 0 17.8517442 6.11031768 19.671097 8.17493674 24.9641944 3.67454456 24.9641944 29.2307692 27.9418605 29.2307692 27.9418605 0"></polygon>
                                            <polygon id="Fill-2" points="62.0968238 0 54.0061742 11.8080099 45.8734159 0 42.1005867 0 52.0358449 13.8723306 41.1366279 29.2307692 44.9094571 29.2307692 53.9222595 16.0604688 62.9771708 29.2307692 66.75 29.2307692 55.850783 13.9135036 65.7021265 0"></polygon>
                                            <polygon id="Fill-3" points="31.0465116 15.3846154 45.0174419 15.3846154 45.0174419 13.0769231 31.0465116 13.0769231"></polygon>
                                            <polygon id="Fill-4" points="31.0465116 2.30769231 45.7936047 2.30769231 45.7936047 0 31.0465116 0"></polygon>
                                            <polygon id="Fill-5" points="31.0465116 29.2307692 45.0174419 29.2307692 45.0174419 26.9230769 31.0465116 26.9230769"></polygon>
                                            <path d="M17.91981,16.4885404 C17.447948,15.3591265 16.7818078,14.3882216 15.9213894,13.5752241 C15.0606669,12.7634296 14.047319,12.1366125 12.8816496,11.6953741 C11.7156762,11.2553388 10.4384261,11.0342684 9.05111542,11.0342684 C8.38467118,11.0342684 7.69724854,11.089912 6.99006364,11.1996952 C6.28196664,11.31008 5.5027255,11.510096 4.86455649,11.7302641 L4.86455649,2.70698402 L17.500546,2.64652804 L17.500546,0.00210543201 L2.12824346,0 L2.12824346,15.0388001 L2.13006767,15.0369954 L2.13006767,15.0839165 C3.07652795,14.5879369 4.07193782,14.1951234 5.11629729,13.9060777 C6.16035273,13.6170319 7.21140096,13.4723587 8.26974603,13.4723587 C9.32778707,13.4723587 10.3019145,13.6374847 11.1933445,13.9680375 C12.0844704,14.2985904 12.8570228,14.7675002 13.5116097,15.3729622 C14.1652845,15.9790259 14.6809275,16.7156263 15.0567144,17.5836659 C15.4328055,18.4511038 15.620699,19.4220088 15.620699,20.4963807 C15.620699,21.4880391 15.446487,22.4111207 15.0986712,23.2644222 C14.7502474,24.1192276 14.2698724,24.8555273 13.6578504,25.4754266 C13.0449163,26.0953259 12.3140167,26.5774699 11.4648475,26.9215576 C10.6150703,27.2665477 9.68989249,27.43799 8.68718579,27.43799 C7.37831606,27.43799 6.18801989,27.0806681 5.11629729,26.3639189 C4.04396662,25.6474705 3.24313901,24.6840849 2.71472656,23.4716569 L0,24.6696477 C0.807212343,26.295342 1.94855891,27.5898819 3.4249518,28.553869 C4.90012856,29.5178561 6.70974357,30 8.85440492,30 C10.3019145,30 11.6320667,29.7521606 12.8430372,29.2561809 C14.0543118,28.7602013 15.087726,28.0786429 15.9438879,27.2106034 C16.7991378,26.3431654 17.4604134,25.3103006 17.9277149,24.112009 C18.3944083,22.9137174 18.627907,21.6122596 18.627907,20.2070341 C18.627907,18.8580538 18.391672,17.6182551 17.91981,16.4885404" id="Fill-6"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
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
                <div className="ad1">
                    <h1>为什么选择 51EX</h1>
                    <p>采用HTML5、SSL技术打造流畅的WEB端交易平台，同时专注塑造全平台交易系统，覆盖iOS、Android、Windows、Mac多个平台，具有全业务、全平台交付能力，选择您想要的模板和皮肤。</p>
                </div>
                <div className="ad2">
                    <div className="ad2-1">
                        <p className="ad2-2">专心定制</p>
                        <p className="ad2-3">根据您的产品定位以及我们基于交易所生态的能力，为您量体裁衣，打造专属的交易所生态产品。</p>
                    </div> 
                    <div className="ad2-1">
                        <p className="ad2-2">专注生态</p>
                        <p className="ad2-3">我们寻找能够和51EX生态产生正向协同作用的生态伙伴，共享资源，协力共赢，共建区块链的完整生态系统。</p>
                    </div> 
                    <div className="ad2-1">
                        <p className="ad2-2">贴心服务</p>
                        <p className="ad2-3">我们为客户提供7*24小时技术响应，为您的系统保驾护航。我们为您提供全面的培训，直到您可以独立使用。</p>
                    </div> 
                </div>
            </div>
        )
    }
}

class AboutUs extends React.Component {
    render() {
        return (
            <div className="aboutus" id="aboutus">
                <div className="left">
                    <h3>联系我们，洽谈合作</h3>
                    <button>马上联络</button>
                </div>
                <div className="right">
                   <div className="r1 r3">
                        <span className="num">1</span>
                        <div className="x">
                            <p>说出您的合作意向</p>
                            <p className="sup">support@51ex.com</p>
                        </div>
                   </div>
                   <div className="r1 r4">
                        <span className="num">2</span>
                        <div className="x">
                            <p>根据您的需求</p>
                            <p>评估产品方案</p>
                        </div>
                   </div>
                   <br/>
                   <div className="r1 r2">
                        <span className="num">3</span>
                        <div className="x">
                            洽谈合作<br/>签订合同
                        </div>
                   </div>
                   <div className="r1">
                        <span className="num">4</span>
                        <div className="x">
                            部署产品，请您验收<br/>培训到您会使用为止
                        </div>
                   </div>
                </div>
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

