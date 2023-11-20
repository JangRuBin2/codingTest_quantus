import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/titleLogo.png';
const Header = () : JSX.Element => {
  // ul태그 class변경에 사용하기 위한 state
  const [activeLink, setActiveLink] = useState('/others');
  // ul태그 class변경에 사용하기 위한 함수
  const handleLinkClick = (to: string) => {
    setActiveLink(to);
  };
  return (<div className='css-crgeb6'>
    <div className='ss-1ago99h'>
      {/* 상단 영역 */}
      <div className='css-1e2pywg'>
        <div className='css-h4ylub'>
          <div className='text_wrap'>제 1회 한국퀀트 챔피언십 개최합니다!!</div>
          <div className='img_wrap'><img src="https://www.quantus.kr/static/media/bannerClick.fddcebe1e55feacf35c7ffb413be7bd2.svg" alt="link"/></div>
        </div>
      </div>
      {/* 중단 영역 */}
      <div className='css-j1yknm'>
        <div className='css-jhvj32'>
          <img className='logo' src={Logo} alt="" style={{width : '191px', height : '37px'}}/>
          <h2>풀스택 개발자 장루빈</h2>
          <div className='css-1gf2x3a'>
            <div className='css-ov1ktg'>
              <div className='css-kenvdg'>
                <div className='easy'>초급</div>
                <div className='intermediate'>중급</div>
                <div className='advanced'>고급</div>
              </div>
                <p>로그인 하러가기</p>
            </div>
          </div>
        </div>
      </div>
      {/* 하단 영역 */}
      <div className='css-d2epat'>
        <div className='css-ocv3tk'>
          <nav className='css-18sjzx1'>
            <ul className='css-h57cwe'>
              <li className={activeLink === '/backtest' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/backtest" onClick={() => handleLinkClick('/backtest')}>
                백 테스트
                </Link>
              </li>
              <li className={activeLink === '/alloc' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/alloc" onClick={() => handleLinkClick('/alloc')}>
                자산 배분
                </Link>
              </li>
              <li className={activeLink === '/port' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/port" onClick={() => handleLinkClick('/port')}>
                포토폴리오 추출
                </Link>
              </li>
              <li className={activeLink === '/invest' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/invest" onClick={() => handleLinkClick('/invest')}>
                실전 투자
                </Link>
              </li>
              <li className={activeLink === '/strategy' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/strategy" onClick={() => handleLinkClick('/strategy')}>
                전략 예시
                </Link>
              </li>
              <li className={activeLink === '/products' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/products" onClick={() => handleLinkClick('/products')}>
                사용권 구매
                </Link>
              </li>
              <li className={activeLink === '/partnership' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/partnership" onClick={() => handleLinkClick('/partnership')}>
                파트너십
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='css-v4mbwx'></div>
      </div>
    </div>
  </div>)
}
export default Header;