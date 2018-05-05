import React, { Component } from 'react';
import i18n from './i18n';
import './App.css';
import logo from './img/logo.svg';
import logoApple from './img/logo-apple.svg';
import logoAndroid from './img/logo-android.svg';
import logoMS from './img/logo-ms.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'zh',
      isOpen: false
    }
  }

  toggleMenu() {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen
      }
    })
  }

  selectLanguage(lan) {
    this.setState({
      language: lan,
      isOpen: false
    })
  }

  render() {
    const lan = i18n[this.state.language];
    return (
      <div className="app">
        <div className="app-banner">
          <header className="app-header">
            <img src={logo} alt="logo" className="app-logo"/>
            <nav className="app-nav">
              <ul>
                <li><a href="#product">{lan['product intro']}</a></li>
                <li><a href="#service">{lan['product service']}</a></li>
                <li><a href="#aboutus">{lan['aboutus']}</a></li>
              </ul>
            </nav>
            <div className="lan-dropdown">
              <i
                onClick={this.toggleMenu.bind(this)}
                className={[
                  'lan-dropdown-toggle',
                  'lan-icon',
                  `lan-${this.state.language}`,
                  this.state.isOpen ? 'is-open' : ''
                ].join(' ')} />
              <ul className={`lan-dropdown-menu ${this.state.isOpen ? 'is-open' : ''}`}>
                  <li onClick={() => this.selectLanguage('zh')}>
                      中文
                      <i className="lan-icon lan-zh"></i>
                  </li>
                  <li onClick={() => this.selectLanguage('en')}>
                      English
                      <i className="lan-icon lan-en"></i>
                  </li>
              </ul>
            </div>
          </header>
          <div className="app-banner-title">
            <p className="title">数字资产交易专业解决方案</p>
            <p className="subtitle">轻松构建您自己的交易所</p>
          </div>
        </div> 
        <div className="app-product" id="product">
          <div className="row">
            <div className="column">
              <div className="title">场外交易</div>
              <div className="desc">拥有全球最极速便捷的交易流程体验，功能全面，自由配置认证商家，自由配置交易币种，买卖自由</div>
            </div> 
            <div className="column">
              <div className="title">现货交易</div>
              <div className="desc">基于多层分布式体系的内存撮合机制，具有超高的交易处理能力，支撑功能完善，自由设置数字资产模板，上下币极速</div>
            </div> 
            <div className="column">
              <div className="title">保证金交易</div>
              <div className="desc">通过分仓机制严格控制投资者的爆仓风险，灵活交易，可融资，可融币</div>
            </div> 
          </div> 
          <div className="row">
            <div className="column">
              <div className="title">标准化远期合约</div>
              <div className="desc">拥有自动化风控系统，有效抵制重大系统性风险，动态杠杆，币种丰富</div>
            </div> 
            <div className="column">
              <div className="title">基金理财</div>
              <div className="desc">灵活的投票机制，公平决定发行的基金，精选的数字资产加入基金，最大限度降低投资风险，稳定收入</div>
            </div> 
            <div className="column">
              <div className="title">钱包产品</div>
              <div className="desc">利用分层来高效的管理和生成私钥, 离线签名保证钱包的安全, 高效和安全尽在掌控之中</div>
            </div> 
          </div> 
        </div>
        <div className="app-service" id="service">
          <div className="container">
            <div className="left bg1">
              <div className="title">Devops部署方案</div>
            </div>
            <div className="right">
              <div className="item">
                <div className="title">安全</div>
                <div className="desc">安全的运维解决方案</div>
              </div>
              <div className="item">
                <div className="title">高效</div>
                <div className="desc">高效的devops运维平台</div>
              </div>
              <div className="item">
                <div className="title">无缝</div>
                <div className="desc">无缝对接主流云平台阿里云和AWS</div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="left bg2">
              <div className="title">全平台客户端接入<br/>支持全业务</div>
            </div>
            <div className="right ph4">
              <div className="caption">
                采用HTML5、SSL技术打造流畅的WEB端交易平台，同时专注塑造 全平台交易系统，覆盖iOS、Android、Windows、Mac多个平台， 具有全业务、全平台交付能力，选择您想要的模板和皮肤。
              </div>
              <div className="logos">
                <img src={logoMS} alt="logo"/>
                <img src={logoApple} alt="logo"/>
                <img src={logoAndroid} alt="logo"/>
              </div>
            </div>
          </div>
          <div className="showme">
            <div className="title">为什么选择 51EX</div>
            <div className="desc">采用HTML5、SSL技术打造流畅的Web端交易平台，专注塑造全平台交易系统，覆盖iOS、Android、Windows、Mac 多个平台，具有全业务、全平台交付能力，选择您想要的模板和皮肤。</div>
            <div className="hr"></div>
            <div className="row">
              <div className="column">
                <div className="title">专心定制</div>
                <div className="desc">根据您的产品定位以及我们基于交易所生态的能力，为您量体裁衣，打造专属的交易所生态产品。</div>
              </div>
              <div className="column">
                <div className="title">专注生态</div>
                <div className="desc">我们寻找能够和51EX生态产生正向协同作用的生态伙伴，共享资源，协力共赢，共建区块链的完整生态系统。</div>
              </div>
              <div className="column">
                <div className="title">贴心服务</div>
                <div className="desc">我们为客户提供7*24小时技术响应，为您的系统保驾护航。我们为您提供全面的培训，直到您可以独立使用。</div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-footer" id="aboutus">
          <div className="contact">
            <div className="left">
              <div>
                <div className="contact-text">联系我们，洽谈合作</div>
                <div className="contact-phone">小宇：15600052862</div>
              </div>
            </div>
            <div className="right">
              <div className="row">
                <div className="column">
                  <div className="number">1</div>
                  <div className="text">说出您的合作意向</div>
                </div>
                <div className="column">
                  <div className="number">2</div>
                  <div className="text">根据您的需求，评估产品方案</div>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <div className="number">3</div>
                  <div className="text">洽谈合作，签订合同</div>
                </div>
                <div className="column">
                  <div className="number">4</div>
                  <div className="text">部署产品，请您验收培训到您会使用为止</div>
                </div>
              </div>
            </div>
          </div>
          <div className="address">
            <div className="info">商务合作：bd@51ex.com技术支持：support@51ex.pro公司地址：北京市望京SOHO</div>
            <div className="copyright">2017-2018 51ex.pro 北京智链科技有限责任公司 版权所有</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
