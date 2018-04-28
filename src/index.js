import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="navbar">
                    <a className="navbar--logo">
                        <svg width="67px" height="30px" viewBox="0 0 67 30" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <title>logo</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" >
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
                <div className="left">
                    <h3>联系我们，洽谈合作</h3>
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
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="y1"></div>
                <div>
                    <span>商务合作：bd@51ex.com</span>
                    <span className="ts">技术支持：support@51ex.pro</span>
                    <span>公司地址：北京市望京SOHO</span>
                </div>
                <div>2017-2018 51ex.pro 北京智链科技有限责任公司 版权所有</div>
                <div className="y2"></div>
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
                <Footer />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

