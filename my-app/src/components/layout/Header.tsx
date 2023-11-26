import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/titleLogo.png';
const Header = () : JSX.Element => {
  // 배너 state
  const [bannerState, setBannerState] = useState(true);
  // li태그 className변경에 사용하기 위한 state
  const [activeLink, setActiveLink] = useState('/others');
  // 초급, 중급, 고급 버튼 className변경에 사용하기 위한 state
  const [levelBtnState, setLevelBtnState] = useState('easy');
  // 배너를 닫기 위한 함수
  const bannerClose = () => {
    setBannerState(false);
  }
  // li태그 class변경에 사용하기 위한 함수
  const changeClassName = (to: string) => {
    setActiveLink(to);
  };
  // 초급, 중급, 고급 버튼 className변경에 사용하기 위한 함수
  const changeLevelBtn = (level: string) => {
    setLevelBtnState((prevLevel) => {
      // 현재 레벨이 이전 레벨과 같다면 변경 없음
      return prevLevel === level ? prevLevel : level;
    });
  };
  
  return (<div className='css-crgeb6'>
    <div className='ss-1ago99h'>
      {/* 상단 영역 */}
      {bannerState && (<div className='css-1e2pywg'>
        <div className='css-h4ylub'>
          <div className='text_wrap'>
            <div>제 1회 한국퀀트 챔피언십 개최합니다!!</div>
            <div className='img_wrap'>
              <img src="https://www.quantus.kr/static/media/bannerClick.fddcebe1e55feacf35c7ffb413be7bd2.svg" alt="link"/>
            </div>
          </div>
          <div className='close_btn' onClick={bannerClose}>
            <img src="https://quantus.kr/static/media/close.07f49c968bc3e6f2992869fcb645f8db.svg" alt="close" />
          </div>
        </div>
      </div>)}
      {/* 중단 영역 */}
      <div className='css-j1yknm'>
        <div className='css-jhvj32'>
          <img className='logo' src={Logo} alt="" style={{width : '191px', height : '37px'}} onClick={()=> {window.location.href ='/'}}/>
          <h2>풀스택 개발자 장루빈</h2>
          <div className='css-1gf2x3a'>
            <div className='css-ov1ktg'>
              <div className='css-kenvdg'>
                <div id='easy'className={`${levelBtnState === 'easy' ? 'easy' : ''} css-1h5x3dy`} onClick={() => changeLevelBtn('easy')}>초급</div>
                <div id='intermediate'className={`${levelBtnState === 'intermediate' ? 'intermediate' : ''} css-1h5x3dy`} onClick={() => changeLevelBtn('intermediate')}>중급</div>
                <div id='advanced'className={`${levelBtnState === 'advanced' ? 'advanced' : ''} css-1h5x3dy`} onClick={() => changeLevelBtn('advanced')}>고급</div>
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
            <Link to="/backtest" onClick={() => changeClassName('/backtest')}>
              <li className={activeLink === '/backtest' ? 'css-bibrta' : 'css-16mln42'}>
              백 테스트
              </li>
              </Link>
              <li className={activeLink === '/alloc' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/alloc" onClick={() => changeClassName('/alloc')}>
                자산 배분
                </Link>
              </li>
              <li className={activeLink === '/port' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/port" onClick={() => changeClassName('/port')}>
                포토폴리오 추출
                </Link>
              </li>
              <li className={activeLink === '/invest' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/invest" onClick={() => changeClassName('/invest')}>
                실전 투자
                </Link>
              </li>
              <li className={activeLink === '/strategy' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/strategy" onClick={() => changeClassName('/strategy')}>
                전략 예시
                </Link>
              </li>
              <li className={activeLink === '/products' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/products" onClick={() => changeClassName('/products')}>
                사용권 구매
                </Link>
              </li>
              <li className={activeLink === '/partnership' ? 'css-bibrta' : 'css-16mln42'}>
                <Link to="/partnership" onClick={() => changeClassName('/partnership')}>
                파트너십
                </Link>
              </li>
            </ul>
            <div className='css-12hft1s'>
              <img src="	https://www.quantus.kr/static/media/newNotice.a8a37ea207d96eed07258fc1448ff7dd.svg" alt="공지사항" />
              <p>공지사항</p>
            </div>
          </nav>
        </div>
        <div className='css-v4mbwx'></div>
      </div>
    </div>
  </div>)
}
export default Header;