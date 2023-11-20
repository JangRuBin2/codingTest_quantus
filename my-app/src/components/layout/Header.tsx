import { Link } from 'react-router-dom';
import Logo from '../images/titleLogo.png';
const Header = () : JSX.Element => {
  return (<div className="header_container">
    <div className="header_box">
      {/* 상단 영역 */}
      <div>
        <div>
          <div>제 1회 한국퀀트 챔피언십 개최합니다!!</div>
          <div><img src="https://www.quantus.kr/static/media/bannerClick.fddcebe1e55feacf35c7ffb413be7bd2.svg" alt="link"/></div>
        </div>
      </div>
      {/* 중단 영역 */}
      <div>
        <div>
          <img src={Logo} alt="" style={{width : '50px', height : '50px'}}/>
          <h2>광고 창</h2>
          <div>
            <div>
              <div>고급</div>
              <div>개발자님 환영합니다!</div>
            </div>
          </div>
        </div>
      </div>
      {/* 하단 영역 */}
      <div>
        <div>
          <nav>
            <ul>
              <li>
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
        <div></div>
      </div>
    </div>
  </div>)
}
export default Header;