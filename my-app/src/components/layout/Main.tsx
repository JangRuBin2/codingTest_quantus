import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  // 자산 추가에 사용하기 위한 state
  const [assetClassState, setAssetClassState] = useState(false);
  // 자산 추가 div을 저장할 상태 배열
  const [assetDiv, setAssetDiv] = useState<JSX.Element[]>([]);
  // 자산 배분 알고리즘 state
  const [allocationModalState, setAllocationModalState] = useState(false);
  // 주기 리밸런싱 state
  const [rebalancingModalState, setRebalancingModalState] = useState(false);
  // 주기 리밸런싱 모달 className state
  const [rebalancingModalClassNameState, setRebalancingModalClassNameState] = useState<null | number>(null);
  // 주기 리밸런싱 모달 className state
  const [assetTypeModalClassNameState, setAssetTypeModalClassNameState] = useState<null | number>(null);
  // 주기 리밸런싱 모달 className state
  const [assetClassModalClassNameState, setAssetClassModalClassNameState] = useState<null | number>(null);
  // 자산 배분 알고리즘 모달 className state
  const [allocationModalClassNameState, setAllocationModalClassNameState] = useState<null | number>(null);
  // 전략 이름 입력 input태그 value state
  const [allocationInputValue, setAllocationInputValue] = useState<any>('전략배분 (정적자산배분)');
  // 자산 추가 부분 '종류' input 태그 value State
  const [assetTypeInputValue, setAssetTypeInputValue] = useState<string>('한국 자산군');
  const [assetTypeModalState, setAssetTypeModalState] = useState(false);
  // 자산 추가 부분 '자산군' input 태그 value State
  const [assetClassInputValue, setAssetClassInputValue] = useState<string>('');
  const [assetClassModalState, setAssetClassModalState] = useState<boolean>(false);
  // 자산군 추가 비중 input value
  const [assetProportionInputValue, setAssetProportionInputValue] = useState<string | number>(0);
  // const [assetProportionState, setAssetProportionState] = useState<boolean>(false);
  // 전략 이름 입력 input태그 value state
  const [rebalancingInputValue, setrebalancingInputValue] = useState<any>('주기 리밸런싱을 선택해주세요.');
  // input 태그 이벤트에 사용함
  const inputRef = useRef<HTMLInputElement | null>(null);
  // input 태그에 숫자 입력에 활용할 state
  const [initialInvestmentValue, setInitialInvestmentValue] = useState<number | string>('');
  const [rebalancingValue, setRebalancingValue] = useState<number | string>('');
  // 전략 이름 입력 부분 state
  const [strategyName, setStrategyName] = useState<string>('전략 이름을 입력해주세요.');
  // 전략 자산 '접기, 펼치기'
  const [foldingState, setFoldingState] = useState(true);
  const allocationModalValues = ['전략 배분 (정적 자산배분)', '듀얼 모멘텀', 'VAA', 'DAA', 'BAA 공격형', 'BAA 중도형', 'LAA', 'HAA', '변형듀얼모멘텀', '가속듀얼모멘텀'];
  const rebalancingModalValues = ['월별', '분기별', '반기별', '매년', '시즈널리티', '하지 않음(Buy-and-Hold)'];
  const assetTypeModalValues = ['한국 자산군', '미국 자산군', '전략', '한국 ETF', '미국 ETF', '한국 주식', '미국 주식'];
  const korean_AssetClass = ['코스닥 (코스닥)', '코스닥 인버스 (코스닥 인버스)', '코스피 (코스피)', '코스피 인버스 (코스피 인버스)', '한국10년국채 (한국10년국채)'];
  const USA_AssetClass = ['S&P500', 'S&P500인버스', '금', '나스닥', '나스닥 인버스', '미국10년국채', '미국2년국채', '미국30년국채', '미국단기채', '원자재', '전세계 주식'];
  const strategy_AssetClass = ['신마법 공식', '무작정따라하기_정상가치(소형주)', '무작정따라하기_성장가치(소형주, 미국)', '강환국_울트라전략', '켄피셔_대형주전략(미국)', '소형주 10팩터(성장가치+시총+종가)', '한,미 롱숏 영구포트폴리오', '퀀터스 베타 중립 전략', '소형주70-인버스30 전략(백테스트)', '소형주70-인버스30 전략(실전투자)'];
  const resetAllInputData = () => {
    setAssetDiv([]);
    setAllocationInputValue('전략배분 (정적자산배분)');
    setAssetTypeInputValue('한국 자산군');
    setAssetClassInputValue('');
    setAssetProportionInputValue(0);
    setrebalancingInputValue('주기 리밸런싱을 선택해주세요.')
    setInitialInvestmentValue('');
    setRebalancingValue('');
    setStrategyName('전략 이름을 입력해주세요.');
  }
  const AssetSimulationInvestment = (assetType : any) => {
    switch (assetType) {
      case '한국 자산군':
        console.log(korean_AssetClass);
        return korean_AssetClass;
      case '미국 자산군':
        console.log(USA_AssetClass);
        return USA_AssetClass
      case '전략':
        console.log(strategy_AssetClass);
        return strategy_AssetClass
      default:
        return korean_AssetClass;
    }
  };
  const showModalValues = ( modalType: 'allocation' | 'rebalancing' | 'addAsset' | 'assetClass' | 'assetType' ) => {
    // 입력 받은 문자에 맞는 모달을 활성화하게 함
    console.log('모달 활성화 버튼 눌림');
    if (modalType === 'allocation') {
    setAssetTypeModalState(false);
    setAllocationModalState(!allocationModalState);
    } else if (modalType === 'rebalancing') {
    setAssetTypeModalState(false);
    setRebalancingModalState(!rebalancingModalState);
    } else if (modalType === 'addAsset') {
    setFoldingState(!foldingState);
    } else if (modalType === 'assetClass') {
    setAssetClassModalState(!assetClassModalState);
    console.log(assetClassModalState);
    } else if (modalType === 'assetType') {
    setAssetTypeModalState(!assetTypeModalState);
    console.log(assetTypeModalState);
    }
  };
  // 클릭하면 자산군 div 추가
  const addAssetDivs = () => {
    console.log('Adding new div');
    setAssetDiv((prevDivs) => [
      ...prevDivs,
      <div key={prevDivs.length} className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r'>
        <div className='"MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-17ciadl'>
          <div className='css-1sg2lsz'>
            <div className='css-1y6kizi'>
              <div className='MuiBox-root css-plq0ok' id ={`자산 ${prevDivs.length + 1}`}>
                <img src="https://quantus.kr/static/media/close.07f49c968bc3e6f2992869fcb645f8db.svg
" alt="closeIcon" style={{cursor : 'pointer', width : '13px', filter : 'invert(47%) sepia(4%) saturate(8%) hue-rotate(329deg) brightness(100%) contrast(89%)', }} />
              </div>
              <div className='css-10kte4f'>자산 {prevDivs.length + 1}</div>
              <div className='MuiStack-root css-5qklr4'>
                <div className='css-1k9uakg'>
                  <div>
                    <div className='css-osjlk'>종류</div>
                    <div className='css-29wi6k' onClick={() => showModalValues('assetType')}>
                      <input type="text" readOnly autoComplete='off' value={assetTypeInputValue} className='select_container css-mxr2pk' />
                    </div>
                  </div>
                  <div className='open_option css-ppidyn'>
                    <div>
                      <img className={assetTypeModalState ? 'css-1evlre2' : 'css-egzwes' } src="https://quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg
" alt="arrowDown" />
                    </div>
                  </div>
                  {assetTypeModalState && (<div className='css-13ggkmh'>
                  {assetTypeModalValues.map((item, index) => (
                    <div key={index} onClick={() => {
                       // 모달 활성화
                      showModalValues('assetType');
                       // inpu value 변경
                      changeInputValue('assetType', item);
                    }} >
                      <div id='staticRebalancing' className='css-29wi6k'>
                        <input id='staticRebalancing' className={assetTypeModalClassNameState === index ? 'css-1b9fiqz' : 'css-ip1zrc'} type="text" readOnly autoComplete='off' value={item} onClick={() => {
                          // className 변경 함수
                          changeModalClassName('assetType', index);
                          // input value 변경 함수
                          changeInputValue('assetType', item);}}/>
                      </div>
                    </div>
                    ))}
                  </div>)}
                </div>
                <div className='css-17n4kgf'>자산군</div>
                <div className='css-1bp4bsu' style={{marginTop : '28px'}}>
                  <div className='' style={{position: 'relative'}}>
                    <div className='css-cpdvyf'>
                      <div id={`자산 ${prevDivs.length+1}.option`} className={assetClassModalClassNameState ? 'css-uhw29b' : 'css-26tdca'}>
                        <div className='css-10wwlpq'></div>
                      </div>
                    </div>
                    <div onClick={()=> {showModalValues('assetClass');
                  }} id={`자산 ${prevDivs.length+1}.option`} className={assetClassModalClassNameState ? 'css-n7bws2' :'css-62v0aq'}>
                      <img src="https://quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg" alt="arrowDown" />
                    </div>
                  </div>
                  {assetClassModalState && <div style={{zIndex : '3', position : 'absolute', top: '35px', width : '312px'}}>
                    <div>
                      <div className='css-3ut2hf'>
                        <input type="text" placeholder='검색어를 입력하세요.' className='css-1n1ciy6' autoComplete='off' />
                      </div>
                    </div>
                    <div className='css-1l59oyi'>
                      <img src="https://quantus.kr/static/media/search.9478e73e81517344a63859a557b85c6e.svg" alt="search" />
                    </div>
                    <div className='css-rubi'>
                      <div style={{height : '0px', width : '100%'}}>
                        {/* 자산군 리스트 */}
                        {AssetSimulationInvestment(assetTypeInputValue).map((item, index) => (
    <div key={index}>{item}</div>
  ))}
                      </div>
                    </div>
                    </div>}
                </div>
              </div>
              {/* 비중 */}
              <div>
                <div className='css-zp7i86'>비중</div>
                <div id={`자산 ${prevDivs.length+1}.value`} className='css-3ut2hf'>
                  <input onChange={(e) => inputValueSensor(e, 'proportion')} type="text" id={`자산 ${prevDivs.length+1}.value`} className='css-qc8k2' autoComplete='off'value={assetProportionInputValue}/>
                  <p className='css-1226vig'>%</p>
                </div>
                <p className='css-l1mo21'>0 ~ 100 까지 입력할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>,
    ]);
  };
  
  const changeStrategyName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrategyName(event.target.value);
  }
  // modal창의 요소 클릭하면 input tag value속성 변경 이벤트
  const changeInputValue = (modalType : 'allocation' | 'rebalancing' | 'assetClass' | 'assetType' ,item : string) => {
    if (modalType === 'allocation') {
      setAllocationInputValue(item);
    } else if (modalType === 'rebalancing') {
      setrebalancingInputValue(item);
    } else if (modalType === 'assetClass') {
      setAssetClassInputValue(item);
    } else if (modalType === 'assetType') {
      setAssetTypeInputValue(item);
      console.log(assetTypeInputValue, '에셋 타입 밸류');
    }
  };
// 입력된 값이 타입과 일치하는지 확인해주는 함수
  const inputValueSensor = (event: React.ChangeEvent<HTMLInputElement>, output : 'Investment' | 'rebalancing' | 'proportion') => {
    // 입력된 값이 숫자인지 확인
    const numericValue = Number(event.target.value);
    // 숫자인 경우에만 state 업데이트
    if (!isNaN(numericValue)) {
      if (output === 'Investment') {
        setInitialInvestmentValue(numericValue);
      } else if (output === 'rebalancing') {
        setRebalancingValue(numericValue);
      } else if (output === 'proportion') {
        setAssetProportionInputValue(numericValue);
      }
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
  
  
  const changeModalClassName = (modalType: 'allocation' | 'rebalancing' | 'arrow' | 'assetType' | 'assetClass',index : number) => {
    // 모달 className 변경 함수
    // 자산 배분 알고리즘
    if (modalType === 'allocation') {
    setAllocationModalClassNameState(index);
    // 주기 리밸런싱
    } else if (modalType === 'rebalancing') {
    setRebalancingModalClassNameState(index);
    } else if (modalType === 'assetType') {
      setAssetTypeModalClassNameState(index);
    } else if (modalType === 'assetClass') {
      setAssetClassModalClassNameState(index);
    }
  };
  
  
  // 하단으로 이동 이벤트 함수
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    console.log('inputValue changed:', allocationInputValue);
  }, [allocationInputValue]);
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
                  <div className={strategyName !== '전략 이름을 입력해주세요.' ? 'css-efe8wa' : 'css-1mvfl8k' }>
                    <div className={strategyName !== '전략 이름을 입력해주세요.' ? 'css-1jbl1jl' : 'css-reou0t'}>저장</div>
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
                <div onClick={resetAllInputData}>설정 값 초기화</div>
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
                      <img id='StaticAlog' src="https://quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg" alt="arrowDown" className={assetTypeInputValue ? 'css-1evlre2' : 'css-egzwes' }/>
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
                  <input type="text" value={initialInvestmentValue} placeholder='초기 투자 금액을 입력해주세요.' className='css-q4pyu0' onChange={(e) => inputValueSensor(e, 'Investment')} autoComplete='off'/>
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
              {/* 밴드 리밸런싱 입력부분 */}
              <div>
                <div className='css-1yqaytz'>밴드 리밸런싱</div>
                <div className='css-cy3vpx'>
                  <input type="text" onChange={(e) => inputValueSensor(e, 'rebalancing')} className='css-q4pyu0' value={rebalancingValue} placeholder='밴드 리밸런싱 기준을 입력해주세요.' autoComplete='off' />
                  <p className='css-1226vig'>%</p>
                </div>
                <p className='css-l1mo21'>0 ~ 100까지 입력할 수 있습니다. (0 입력시 비활성화)</p>
              </div>
              {/* 전체 환율 반영 선택 부분 */}
              <div className='css-12qy42s'>
                <div className='css-18ru846'>
                  <div className='css-1j8i7mp'>
                    <div className='css-192m3r6'>
                      {/* onclick 하면 이미지 	https://www.quantus.kr/static/media/clickCheckBox.eb67ac97b1bde3053a63997d27658439.svg로 바뀌어야함 */}
                      <img src="https://www.quantus.kr/static/media/checkBoxDefault.c07524e01b9d604f81a0269a5fd614f0.svg" alt="" className='css-1xsl7pa' style={{cursor :'pointer'}}/>
                      <div>전체 환율 반영</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 자산군 추가 부분 */}
              <div className={foldingState ? 'css-1gtil7u' : 'css-1kjuv0i'}>
                <div className='css-5bbky6'>
                  {/* 자산 추가 버튼눌렀을 때 보여줄 UI */}
                  {assetClassState ?
                  // assetClassState가 true 때 보여줄 내용
                  (<><div className='css-zay56g'>
                    <div className='css-2fefu9' style={foldingState ?
                    // 펼쳐져 있을 때
                    ({ display : 'flex', alignItems : 'center', justifyContent : 'space-between'})
                    // 접혀 있을 때
                    :({display : 'flex', alignItems :'center', justifyContent : 'space-between', marginBottom : '10px'})
                    }>
                    <p>자산군 추가</p>
                    <div className='css-14slbl7' onClick={() => showModalValues('addAsset')}>{foldingState ? '펼치기' : '접기'}<img src="https://quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg" alt="arrowIcon" className={foldingState ? 'css-1gn5vo1': 'css-6d3iyv'}/>
                    </div>
                  </div>
                  {/* 자산 추가되있을 때 생길 div foldingState가 true일 때 나옴*/}
                  {foldingState && <div className='css-rtde4j'>
                    div만큼 생김
                    <div className='css-3k5dqj'>
                      <p className='css-zrc6se'>자산 01</p>
                      <div className='css-j63mwv'>예시 ) 무작정 따라하기</div>
                    </div>
                  </div>}
                  {/* 자산 추가 버튼 -> 추가 요소 생기기 전 */}
                  </div>
                  <div className='css-0'></div>
                  <div className='MuiBox-root css-1z0pfhy'>
                    {/* grid 템플릿 */}
                    {assetClassState && <><div className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-8 css-yyszln'>
                    {/* div이 추가될 곳 */}
                    {assetDiv.map((div) => (
          <>{div}</>
        ))}
        {/* 추가 버튼 */}
        <div className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r' onClick={() => {
        addAssetDivs();
                  console.log('클릭 됨?', assetClassState) }
                }>
                      <div className='MuiPaper-root MuiGrid-rounded MuiPaper-elevation1 css-yaj938'>
                        <div className='MuiBor-root css-79elbk'>
                          <img src="https://quantus.kr/static/media/assetAddIcon.5c650e6cec8030c8302335ae8189dc48.svg" alt="addIcon" style={{width : '55px'}} />
                        </div>
                      </div>
                    </div>
                    </div>
                    
                    </>
                    }
                    
                  </div>
                  </>
                  ) :
                  // false일 때 보여줄 내용
                  (<div className='css-2fefu9' style={foldingState ? ({ display : 'flex', alignItems : 'center', justifyContent : 'space-between'}) : ({display : 'flex', alignItems :'center', justifyContent : 'space-between', marginBottom : '10px'})}>
                  <p>자산군 추가</p>
                  <div className='css-14slbl7' onClick={() => showModalValues('addAsset')}>{foldingState ? '펼치기' : '접기'}<img src="https://quantus.kr/static/media/group.e794b5854ffcc5cc4efdbba4e5477147.svg" alt="arrowIcon" className={foldingState ? 'css-6d3iyv' : 'css-1gn5vo1'}/></div>
                </div>)}
                  {/* 폴더는 열려있지만 자산 추가부분이 활성화 되지 않았을 때 보여줄 컴포넌트 */}
                  {!foldingState && !assetClassState && (
                  <div className={assetClassState ? 'MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-yaj938' : 'MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-185r4pm'} onClick={() => {setAssetClassState(true);
                  console.log('클릭 됨?', assetClassState) }
                }>
                    <div className='MuiBox-root css-79elbk' onClick={addAssetDivs}>
                      <img src="https://quantus.kr/static/media/assetAddIcon.5c650e6cec8030c8302335ae8189dc48.svg" alt="addIcon" style={assetTypeModalState ? ({width : '55px'}) : ({marginLeft :'157px', marginTop : '73px', width : '55px'})}/>
                    </div>
                  </div>)}
                </div>
              </div>
              <div style={{marginTop : '80px', fontSize : '18px', fontWeight : '500'}}>마켓 타이밍 설정</div>
              <div className='css-1lytgsp'>
                <div className='css-ecd9gd'>
                  <div className='css-18ru846'>
                    <div className='css-1j8i7mp' style={{marginBottom :'18px'}}>
                      <div className='css-192m3r6'>
                        <img src="https://quantus.kr/static/media/checkBoxDefault.c07524e01b9d604f81a0269a5fd614f0.svg" className='css-1xsl7pa' style={{cursor : 'default'}} />
                        <div>매크로 마켓 타이밍</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='css-o74kr2' style={{top : '6px', left : '-61px'}}>
                  <i className='default unedfined css-1lk0sc2 '></i>
                </div>
                <div className='css-wfteg6'></div>
                <div className='css-o74kr2' style={{top : '6px', right : '670px'}}></div>
              </div>
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
