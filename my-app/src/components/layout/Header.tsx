import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/titleLogo.png';
const Header = () : JSX.Element => {
  // ul태그 class변경에 사용하기 위한 state
  const [active_li_Class, setActive_li_Class] = useState('css-bibrta');
  // ul태그 class변경에 사용하기 위한 함수
  const handleNavClick = () => {
    setActive_li_Class(active_li_Class === 'css-bibrta' ? 'css-16mln42' : 'css-bibrta');
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
              <li className={active_li_Class} onClick={handleNavClick}>
              <Link to="/others">백 테스트</Link>
              </li>
              <li>
              <Link to="/alloc">자산 배분</Link>
              </li>
              <li>
              <Link to="/others">포토폴리오 추출</Link>
              </li>
              <li>
              <Link to="/others">실전 투자</Link>
              </li>
              <li>
              <Link to="/others">전략 예시</Link>
              </li>
              <li>
              <Link to="/others">사용권 구매</Link>
              </li>
              <li>
              <Link to="/others">파트너십</Link>
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