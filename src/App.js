import React, { Component } from 'react';
import i18n from './i18n';
import './App.css';
import logo from './img/logo.svg';
import logoApple from './img/logo-apple.svg';
import logoAndroid from './img/logo-android.svg';
import logoMS from './img/logo-ms.svg';
import productFiatLogo from './img/fiat.png';
import productSpotLogo from './img/spot.png';
import productMarginLogo from './img/margin.png';
import productForwardsLogo from './img/forwards.png';
import productFundsLogo from './img/funds.png';
import productWalletLogo from './img/wallet.png';

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
      <div className={["app", this.state.language].join(' ')}>
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
            <p className="title">{lan['solution']}</p>
            <p className="subtitle">{lan['build']}</p>
          </div>
        </div> 
        <div className="app-product" id="product">
          <div className="row">
            <div className="column">
              <img src={productFiatLogo} alt="fiat" className="logo" />
              <div className="title">{lan['fiat']}</div>
              <div className="desc">{lan['f1']}</div>
            </div> 
            <div className="column">
              <img src={productSpotLogo} alt="spot" className="logo" />
              <div className="title">{lan['spot']}</div>
              <div className="desc">{lan['f2']}</div>
            </div> 
            <div className="column">
              <img src={productMarginLogo} alt="margin" className="logo" />
              <div className="title">{lan['margin']}</div>
              <div className="desc">{lan['f3']}</div>
            </div> 
          </div> 
          <div className="row">
            <div className="column">
              <img src={productForwardsLogo} alt="forwards" className="logo" />
              <div className="title">{lan['forwards']}</div>
              <div className="desc">{lan['f4']}</div>
            </div> 
            <div className="column">
              <img src={productFundsLogo} alt="funds" className="logo" />
              <div className="title">{lan['funds']}</div>
              <div className="desc">{lan['f5']}</div>
            </div> 
            <div className="column">
              <img src={productWalletLogo} alt="wallet" className="logo" />
              <div className="title">{lan['wallet']}</div>
              <div className="desc">{lan['f6']}</div>
            </div> 
          </div> 
        </div>
        <div className="app-service" id="service">
          <div className="container">
            <div className="left bg1">
              <div className="title">{lan['deploy']}</div>
            </div>
            <div className="right">
              <div className="item">
                <div className="title">{lan['security']}</div>
                <div className="desc">{lan['s1']}</div>
              </div>
              <div className="item">
                <div className="title">{lan['e']}</div>
                <div className="desc">{lan['e1']}</div>
              </div>
              <div className="item">
                <div className="title">{lan['s']}</div>
                <div className="desc">{lan['s11']}</div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="left bg2">
              <div className="title">{lan['all']}<br/><span>{lan['all0']}</span></div>
            </div>
            <div className="right ph4">
              <div className="caption">
                {lan['all1']}
              </div>
              <div className="logos">
                <img src={logoMS} alt="logo"/>
                <img src={logoApple} alt="logo"/>
                <img src={logoAndroid} alt="logo"/>
              </div>
            </div>
          </div>
          <div className="showme">
            <div className="title">{lan['choose']}</div>
            <div className="desc">{lan['c1']}</div>
            <div className="hr"></div>
            <div className="row">
              <div className="column">
                <div className="title">{lan['choose']}</div>
                <div className="desc">{lan['cus1']}</div>
              </div>
              <div className="column">
                <div className="title">{lan['ecosys']}</div>
                <div className="desc">{lan['e2']}</div>
              </div>
              <div className="column">
                <div className="title">{lan['ser']}</div>
                <div className="desc">{lan['ser1']}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-footer" id="aboutus">
          <div className="contact">
            <div className="left">
              <div>
                <div className="contact-text">{lan['contact']}</div>
                <div className="contact-phone">{lan['phone1']}<span>：15600052862</span></div>
              </div>
            </div>
            <div className="right">
              <div className="row">
                <div className="column">
                  <div className="number">1</div>
                  <div className="text">{lan['t1']}</div>
                </div>
                <div className="column">
                  <div className="number">2</div>
                  <div className="text">{lan['t2']}</div>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <div className="number">3</div>
                  <div className="text">{lan['t3']}</div>
                </div>
                <div className="column">
                  <div className="number">4</div>
                  <div className="text">{lan['t4']}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="address">
            <div className="info"><span>{lan['x1']}<span>：bd@51ex.pro</span></span><span className='lala'>{lan['x2']}:<span> support@51ex.pro</span></span><span>{lan['x3']}</span></div>
            <div className="copyright"><span>2017-2018 51ex.pro</span><span className='company'>{lan['x4']}</span><span>{lan['x5']}</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
