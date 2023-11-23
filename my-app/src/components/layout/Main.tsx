// Main.tsx
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  // input태그 안내문구 value활성화 state
  const [inputActivate, setInputActivate] = useState(true);
  // 자산 배분 알고리즘 state
  const [allocationModalState, setAllocationModalState] = useState(false);
  // 주기 리밸런싱 state
  const [rebalancingModalState, setRebalancingModalState] = useState(false);
  // 자산 배분 알고리즘 모달 className state
  const [allocationModalClassNameState, setAllocationModalClassNameState] = useState<null | number>(null);
  // 주기 리밸런싱 모달 className state
  const [rebalancingModalClassNameState, setrRbalancingModalClassNameState] = useState<null | number>(null);
  // 전략 이름 입력 input태그 value state
  const [allocationInputValue, setAllocationInputValue] = useState<any>('전략배분 (정적자산배분)');
  // 전략 이름 입력 input태그 value state
  const [rebalancingInputValue, setrebalancingInputValue] = useState<any>('주기 리밸런싱을 선택해주세요.');
  // input 태그 이벤트에 사용함
  const inputRef = useRef<HTMLInputElement | null>(null);
  // input 태그에 숫자 입력에 활용할 state
  const [initialInvestmentValue, setInitialInvestmentValue] = useState<number | string>('');
  // 전략 이름 입력 부분 state
  const [strategyName, setStrategyName] = useState<string>('전략 이름을 입력해주세요.');
  const changeStrategyName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrategyName(event.target.value);
  }
  // modal창의 요소 클릭하면 input tag value속성 변경 이벤트
  const changeInputValue = (modalType : 'allocation' | 'rebalancing' ,item : string) => {
    if (modalType === 'allocation') {
      setAllocationInputValue(item);
    } else if (modalType === 'rebalancing') {
      setrebalancingInputValue(item);
    }
  };
// 입력된 값이 타입과 일치하는지 확인해주는 함수
  const inputValueSensor = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 입력된 값이 숫자인지 확인
    const numericValue = Number(event.target.value);
    // 숫자인 경우에만 state 업데이트
    if (!isNaN(numericValue)) {
      setInitialInvestmentValue(numericValue);
    }
  };
  // 전략 이름 입력부분 변경 함수

  // 전략 이름 입력부분input태그 외의 영역 클릭했을 때 이벤트
  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current!.contains(event.target as Node) && strategyName ==='') {
      // setInputActivate(true);
      setStrategyName('전략 이름을 입력해주세요.');
    }
  };

  // input 태그 외의 영역을 클릭했을 때 전략 이름 입력부분의 조건에 따라서 값을 초기화
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [strategyName]);
  // 모달 활성화 함수
  const showModalValues = ( modalType: 'allocation' | 'rebalancing' ) => {
    // 입력 받은 문자에 맞는 모달을 활성화하게 함
    if (modalType === 'allocation') {
    setRebalancingModalState(false);
    setAllocationModalState(!allocationModalState);
    } else if (modalType === 'rebalancing') {
    setAllocationModalState(false);
    setRebalancingModalState(!rebalancingModalState);
    }
  };
  
  const changeModalClassName = (modalType: 'allocation' | 'rebalancing' ,index : number) => {
    // 모달 className 변경 함수
    // 자산 배분 알고리즘
    if (modalType === 'allocation') {
    setAllocationModalClassNameState(index);
    // 주기 리밸런싱
    } else if (modalType === 'rebalancing') {
    setrRbalancingModalClassNameState(index);
    }
  };
  const allocationModalValues = ['전략 배분 (정적 자산배분)', '듀얼 모멘텀', 'VAA', 'DAA', 'BAA 공격형', 'BAA 중도형', 'LAA', 'HAA', '변형듀얼모멘텀', '가속듀얼모멘텀'];
  const rebalancingModalValues = ['월별', '분기별', '반기별', '매년', '시즈널리티', '하지 않음(Buy-and-Hold)'];
  // 하단으로 이동 이벤트 함수
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };
  return (
  <div className='css-ov1ktg'>
    <div className='css-boa882'></div>
    <div className='css-1v1xjc8'>
      <div className='css-10000pf'>
        {/* 여기서 부터는 라우터 path에 따라서 내용물 바뀌어야 함 */}
        <div className='css-1hkbw9e'>
          {/* 전략 이름 입력하는 곳 */}
          <div className='css-17ratg8'>
            <div className='css-ggj8yl'>
              <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                <div className='css-bmd2y5'>
                <input
      ref={inputRef}
      type="text"
      value={strategyName}
      maxLength={30}
      onClick={() => {
        if (strategyName === '전략 이름을 입력해주세요.') {
          setStrategyName('');
        }
      }}
      onChange={changeStrategyName}
      autoComplete='off'
    />
                </div>
                {/* 저장 버튼 */}
                <div className='css-10p2e9r'>
                  <div className='css-1mvfl8k'>
                    <div className='css-reou0t'>저장</div>
                  </div>
                </div>
                {/* 하단으로 이동 버튼 */}
                <div className='css-10p2e9r'>
                  <div className='css-12i4wy'>
                    <div className='css-72wevi' onClick={scrollToBottom}>하단으로 이동</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='css-7t04d'>
            <div className='button_wrap'>
              <div className='button'>
                <div className='icon'>
                  <img src="https://www.quantus.kr/static/media/reset.c583168b8c7b6e9b10892a3c70674e59.svg" alt="reset" />
                </div>
                <div>설정 값 초기화</div>
              </div>
            </div>
          </div>
          <div className='css-xayx94'>
            {/* 자산 배분 설정 부분 탭 */}
            <div className='css-rzre68'>
              <div className='alloc_title css-14zzzkc'>자산배분 설정</div>
              {/* 자산 배분 알고리즘 설정 부분 */}
              <div className='css-n07pe0'>
                <div>
                  <div className='css-xu7bpf'>자산배분 알고리즘</div>
                  {/* 밑의 모달창 선택 값에 따라서 value 변경되야하는 부분 */}
                  <div id='StaticAlog' className='css-cy3vpx' onClick={() =>showModalValues('allocation')}>
                    <input id='StaticAlog' type="text" name="" readOnly className='select_container css-1jxlxru' autoComplete='off' value={allocationInputValue}/>
                  </div>
                </div>
                  {/* 모달창 토글 버튼 */}
                  <div id='StaticAlog' className='open_option css-ppidyn' onClick={() =>showModalValues('allocation')}>
                    <div id='StaticAlog'>
                      <img id='StaticAlog' src="https://quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg" alt="arrowDown" className='css-1evlre2' />
                    </div>
                  </div>
                
                {/* 모달창 보일 때 */}
                {allocationModalState && (
                  <div className='css-1g43kch'>
                  {allocationModalValues.map((item, index) => (
                    <div key={index} onClick={() => showModalValues('allocation')}>
                      <div id={`${index}`} className='css-cy3vpx'>
                        <input id={`${index}`} className={allocationModalClassNameState === index ? 'css-1ufv36b' : 'css-1uubgwg'} type="text" readOnly autoComplete='off' value={item} onClick={() => {
                          // className 변경 함수
                          changeModalClassName('allocation', index);
                          // input value 변경 함수
                          changeInputValue('allocation', item);}}/>
                      </div>
                    </div>
                    ))}
                  </div>
                  )}
              </div>
              {/* 초기 금액 투자 입력 부분 */}
              <div>
                <div className='css-1yqaytz'>초기 투자 금액</div>
                <div className='css-cy3vpx'>
                  <input type="text" value={initialInvestmentValue} placeholder='초기 투자 금액을 입력해주세요.' className='css-q4pyu0' onChange={inputValueSensor} autoComplete='off'/>
                  <p className='css-1226vig'>만원</p>
                </div>
              </div>
              {/* 주기 리밸런싱 입력 부분 */}
              <div className='css-n07pe0'>
                <div>
                  <div className='css-r80uh2'>주기 리밸런싱</div>
                  <div id='staticRebalancing' className='css-cy3vpx' onClick={() => showModalValues('rebalancing')}>
                    <input type="text" value={rebalancingInputValue} readOnly autoComplete='off' id="staticRebalancing" className='css-1jxlxru' />
                  </div>
                </div>
                <div id='staticRebalancing' className='open_option css-ppidyn'>
                  <div id='staticRebalancing'>
                    <img src="	https://www.quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg" alt="arrowDown" className='css-egzwes' />
                  </div>
                </div>
                {rebalancingModalState && (
                  <div className='css-1g43kch'>
                  {rebalancingModalValues.map((item, index) => (
                    <div key={index} onClick={() => {
                      // 모달 활성화
                      showModalValues('rebalancing');
                      // inpu value 변경
                      changeInputValue('rebalancing', item);
                    }}>
                      <div id={`${index}`} className='css-cy3vpx'>
                        <input id={`${index}`} className={rebalancingModalClassNameState === index ? 'css-1ufv36b' : 'css-1uubgwg'} type="text" readOnly autoComplete='off' value={item} onClick={() => changeModalClassName('rebalancing', index)}/>
                      </div>
                    </div>
                    ))}
                  </div>
                  )}
              </div>
              <div className='ss-12qy42s'></div>
              <div className='css-1gtil7u'></div>
              <div className='css-1kjuv0i'></div>
              <div>마켓 타이밍 설정</div>
              <div className='css-1lytgsp'></div>
              <div className='css-y4fv1w'></div>
              <div style={{marginTop : '15px'}}></div>
              <div className='css-1qorevd'>기간 설정</div>
              <div className='css-mjhumy'></div>
              <div className='css-1a5xcom'></div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
    <div className='css-boa882'></div>
  </div>
    );
}

export default Main;
