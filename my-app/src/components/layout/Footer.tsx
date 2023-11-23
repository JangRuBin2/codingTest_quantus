import '../../App.css';
import title from '../images/title2.png';
const Footer = () : JSX.Element => {
  return (
  <div className='css-1c6t4tg'>
    <div className='css-v4mbwx'>
      <div className='css-1yzjtqd'>
          <div>
            <img src={title} alt="logo" style={{width :'191px', height :'37px'}}/>
            <p className='title'>주식회사 퀀터스테크놀로지스</p>
            <p>지원자 명 : 장루빈 | 열정 넘치는 신입 개발자</p>
            <p>e-mail : wkdfnqls2465@gmail.com</p>
            <p className='right_text'>오늘도 좋은 하루 되세요~ 2024년도 화이팅</p>
          </div>
          <div className='css-7360bc'></div>
      </div>
    </div>
  </div>)
}
export default Footer;