import React from 'react';
import ReactDOM from 'react-dom';
import './index2.css';

import logo from './img2/logo.svg';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState((prevState) => {
            return {
                isMenuOpen: !prevState.isMenuOpen
            }
        })
    }

    render() {
        return (
            <div className="header-wrapper">
                <header className="header">
                    <img src={logo} className="logo" />
                </header>
                <nav className={`menu ${this.state.isMenuOpen ? 'is-open' : ''}`}>
                    <button className="menu-toggle" onClick={this.toggleMenu}>toggle menu</button>
                    <div className="menu-dropdown">
                        <ul className="nav-menu">
                            <li><a href="#product">产品介绍</a></li>
                            <li><a href="#service">服务</a></li>
                            <li><a href="#aboutus">关于我们</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="banner">
                    <div className="banner-title">数字资产交易专业解决方案</div>
                    <div className="banner-subtitle">轻松构建您自己的交易所</div>
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
                            <p>利用分层来高效的管理和生成私钥, 离线签名保证钱包的安全, 高效和安全尽在掌控之中</p>
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
                    <div className="left a1">
                        <h3>Devops部署方案</h3>
                    </div>
                    <div className="right">
                        <div className="items">
                            <div className="item">
                                <div className="label">安全</div>
                                <div className="description">
                                    <p>安全的运维解决方案</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="label">高效</div>
                                <div className="description">
                                    <p>高效的devops运维平台</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="label">无缝</div>
                                <div className="description">
                                    <p>无缝对接主流云平台阿里云和AWS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service--section">
                    <div className="left a2">
                        <h3>全平台客户端接入<br/>支持全业务</h3>
                    </div>
                    <div className="right">
                        <p className="info2">采用HTML5、SSL技术打造流畅的WEB端交易平台，同时专注塑造<br/>全平台交易系统，覆盖iOS、Android、Windows、Mac多个平台，<br/>具有全业务、全平台交付能力，选择您想要的模板和皮肤。</p>
                        <div className="logo-container">
                            <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                <title>Group 9</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" >
                                    <g id="Home-page" transform="translate(-820.000000, -1793.000000)">
                                        <g id="Group-9" transform="translate(816.000000, 1789.000000)">
                                            <rect id="Rectangle-11" opacity="0.200000003" x="0" y="0" width="48" height="48"></rect>
                                            <path d="M4,22.8666047 L20.4287845,22.8666047 L20.4287845,6.77072125 L4,8.70190227 L4,22.8666047 Z M22.7707366,6.49545398 L22.7707366,22.8666496 L44,22.8666496 L44,4 L22.7707366,6.49545398 Z M4,39.3826848 L20.4287845,41.2790701 L20.4287845,25.219913 L4,25.219913 L4,39.3826848 Z M22.7707366,41.5494884 L44,44 L44,25.219913 L22.7707366,25.219913 L22.7707366,41.5494884 Z" id="Shape" fill="#A4BFF0" ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg width="40px" height="48px" viewBox="0 0 40 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                <title>Group 4</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
                                    <g id="Home-page" transform="translate(-906.000000, -1789.000000)">
                                        <g id="Group-4" transform="translate(902.000000, 1789.000000)">
                                            <rect id="Rectangle-11" opacity="0.200000003" x="0" y="0" width="48" height="48"></rect>
                                            <path d="M43.5294118,35.1818086 C43.468523,35.3638776 42.5156136,38.6502239 40.1744399,42.0306392 C38.1468436,44.9467784 36.0492251,47.8871934 32.7399198,47.9387797 C29.4823701,47.9964349 28.4411719,46.0179513 24.7239118,46.0179513 C21.0127406,46.0179513 19.8467205,47.8871935 16.7687926,47.9964349 C13.5873538,48.1238832 11.1365803,44.8102266 9.10593951,41.9092598 C4.94419131,35.9647055 1.74448588,25.0648386 6.03714492,17.7608354 C8.15303005,14.1042821 11.9494455,11.7829017 16.0837938,11.7161431 C19.2012993,11.6584879 22.166583,13.8038681 24.0602241,13.8038681 C26.0056206,13.8038681 29.5919698,11.2093842 33.3762076,11.5977982 C34.9593159,11.6645569 39.3920191,12.2502123 42.2477029,16.3437313 C42.0254589,16.4954555 36.9442901,19.457112 37.0021345,25.4896664 C37.0782455,32.7693937 43.4624342,35.1575327 43.5294118,35.1818086 M30.9010786,7.69545168 C32.6059645,5.63807147 33.7293625,2.80993231 33.4340519,0 C30.9985007,0.0940690065 28.0271282,1.59917311 26.264398,3.64744987 C24.7026007,5.43172651 23.3295587,8.30538293 23.713158,11.0819359 C26.4196643,11.2427636 29.2022816,9.68000427 30.8980342,7.69545168" id="Shape" fill="#A4BFF0" ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg width="40px" height="48px" viewBox="0 0 40 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                <title>Group 4</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
                                    <g id="Home-page" transform="translate(-992.000000, -1789.000000)">
                                        <g id="Group-4" transform="translate(988.000000, 1789.000000)">
                                            <rect id="Rectangle-11" opacity="0.200000003" x="0" y="0" width="48" height="48"></rect>
                                            <path d="M40.4705297,32.6715723 C38.9963221,32.6715723 37.8025979,31.421894 37.8025979,29.883789 L37.8025979,17.96147 C37.8025979,16.4212032 38.9963221,15.1736867 40.4705297,15.1736867 C41.9447373,15.1736867 43.1384615,16.4212032 43.1384615,17.96147 L43.1384615,29.883789 C43.1384615,31.421894 41.9447373,32.6715723 40.4705297,32.6715723 Z M33.2059894,38.5551923 L31.1729667,38.5551923 C31.2403416,38.8020901 31.2795209,39.0598536 31.2795209,39.3285968 L31.2795209,45.2122167 C31.2795209,46.7524835 30.0835886,48 28.6094376,48 C27.1373815,48 25.9414492,46.7524835 25.9414492,45.2122167 L25.9414492,39.3285968 C25.9414492,39.0598536 25.9805719,38.8020901 26.0480034,38.5551923 L21.0904581,38.5551923 C21.157833,38.8020901 21.1991638,39.0598536 21.1991638,39.3285968 L21.1991638,45.2122167 C21.1991638,46.7524835 20.0032881,48 18.5290805,48 C17.0548729,48 15.8589972,46.7524835 15.8589972,45.2122167 L15.8589972,39.3285968 C15.8589972,39.0598536 15.8980633,38.8020901 15.9654948,38.5551923 L13.9324721,38.5551923 C12.3800191,38.5551923 11.1166552,37.2355975 11.1166552,35.6123298 L11.1166552,15.1736867 L36.0218063,15.1736867 L36.0218063,35.612273 C36.0218063,37.2355975 34.7606505,38.5551923 33.2059894,38.5551923 Z M17.4462134,4.02039174 L16.9461106,3.23384591 L16.4503674,2.46044141 L15.3414563,0.721347963 C15.2066499,0.509436838 15.2610593,0.221067041 15.4654487,0.0790723649 C15.669838,-0.065140978 15.9459051,-0.00614719631 16.0829196,0.207925707 L17.2722843,2.07160583 L17.7723871,2.85371433 L18.2790008,3.64674549 C19.8858633,2.99792767 21.6775254,2.63304231 23.5692308,2.63304231 C25.4609361,2.63304231 27.2547497,2.99792767 28.8616122,3.64680238 L29.3682259,2.85371433 L29.8683287,2.07154894 L31.05775,0.207925707 C31.1924998,-0.00614719631 31.4686802,-0.065140978 31.6752209,0.079015476 C31.8774588,0.221067041 31.9339631,0.509436838 31.7970053,0.721347963 L30.6880941,2.46044141 L30.1945024,3.23384591 L29.6922481,4.02039174 C33.4690912,5.85562742 36.0218063,9.33381431 36.0218063,13.3166057 L11.1166552,13.3166057 C11.1166552,9.33381431 13.6715218,5.85562742 17.4462134,4.02039174 Z M28.9073025,9.60033878 C29.6444063,9.60033878 30.2401361,8.97547118 30.2401361,8.20644713 C30.2401361,7.43736619 29.6444063,6.81471726 28.9073025,6.81471726 C28.1701421,6.81471726 27.5722609,7.43736619 27.5722609,8.20644713 C27.5722609,8.97547118 28.1701421,9.60033878 28.9073025,9.60033878 Z M18.2333671,9.60033878 C18.9704709,9.60033878 19.5662573,8.97547118 19.5662573,8.20644713 C19.5662573,7.43736619 18.9704709,6.81471726 18.2333671,6.81471726 C17.4962067,6.81471726 16.8983254,7.43736619 16.8983254,8.20644713 C16.8983254,8.97547118 17.4962067,9.60033878 18.2333671,9.60033878 Z M6.66793184,32.6715723 C5.19372427,32.6715723 4,31.4218371 4,29.8837321 L4,17.96147 C4,16.4212032 5.19372427,15.1736867 6.66793184,15.1736867 C8.14213941,15.1736867 9.33801514,16.4212032 9.33801514,17.96147 L9.33801514,29.883789 C9.33801514,31.421894 8.14213941,32.6715723 6.66793184,32.6715723 Z" id="Shape" fill="#A4BFF0" fillRule="nonzero"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
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
                    <p>采用HTML5、SSL技术打造流畅的Web端交易平台，专注塑造全平台交易系统，覆盖iOS、Android、Windows、Mac 多个平台，具有全业务、全平台交付能力，选择您想要的模板和皮肤。</p>
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
                <div className="aboutus-wrapper">
                    <div className="left">
                        <div className="h1">联系我们，洽谈合作</div>
                        <p className="sup">小宇：15600052862</p>
                    </div>
                    <div className="right">
                        <div className="r1 r3">
                                <span className="num">1</span>
                                <div className="x">
                                    <p>说出您的合作意向</p>
                                </div>
                        </div>
                        <div className="r1 r4">
                                <span className="num">2</span>
                                <div className="x y">
                                    <p>根据您的需求<br/>评估产品方案</p>
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
                
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-wrapper">
                    <div className="y1"></div>
                    <div className="n1">
                        <span>商务合作：bd@51ex.com</span>
                        <span className="ts">技术支持：support@51ex.pro</span>
                        <span>公司地址：北京市望京SOHO</span>
                    </div>
                    <div className="n2">2017-2018 51ex.pro 北京智链科技有限责任公司 版权所有</div>
                    <div className="y2"></div>
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
                {/* <Product /> */}
                {/* <Service /> */}
                {/* <Advantage /> */}
                {/* <AboutUs /> */}
                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

