// ===== 문구 상수: '겹침 점수' 대체 문구가 정해지면 여기만 바꾸면 됩니다 =====
const LABEL={overlap:'겹침',overlapScore:'겹침 점수',realPin:'진짜맛집'};
const IMG=['p0_gukbap','p1_udon','p2_jjamppong','p3_pasta','p4_baekban','p5_tteokbokki','p6_latte'];
const C0={lat:35.2215,lng:128.6815};// 창원 성산구 상남동
const MENU={0:['돼지국밥','순대국밥','수육'],1:['우동','튀김우동','유부우동'],2:['짬뽕','짜장면','탕수육'],3:['파스타','카르보나라','리조또'],4:['백반','된장찌개','제육볶음'],5:['떡볶이','순대','튀김'],6:['라떼','아메리카노','디저트']};
const raw=[['성산 돼지국밥','한식',0,24,1,['가성비','혼밥']],['반림 우동집','일식',1,15,1,['혼밥']],['상남 짬뽕','중식',2,11,0,['매운맛']],['파스타 오늘','양식',3,6,0,['데이트']],['혼밥식당 한그릇','한식',4,1,0,['혼밥','가성비']],['용호 분식','분식',5,2,0,['가성비']],['카페 모래','카페',6,3,0,['데이트']],
['중앙동 국밥골목','한식',0,18,1,['가성비']],['사파 수제우동','일식',1,4,0,['혼밥']],['가음정 홍짬뽕','중식',2,9,1,['매운맛']],['트라토리아 성산','양식',3,13,0,['데이트']],['토월 백반집','한식',4,7,1,['가성비','혼밥']],['남양동 떡볶이','분식',5,1,0,['매운맛']],['용지호수 카페','카페',6,8,0,['데이트']],
['대방동 순대국','한식',0,5,0,['혼밥']],['상남 이자카야 우동','일식',1,2,0,['데이트']],['신월 차이나','중식',2,1,0,[]],['봉곡 파스타랩','양식',3,2,0,['데이트']],['성산 한상','한식',4,10,1,['가성비']],['외동 분식왕','분식',5,6,0,['가성비','혼밥']],['반송 로스터리','카페',6,1,0,[]],['상남시장 칼국수','한식',4,20,1,['가성비','혼밥']]];
let _s=7;const _r=()=>(_s=(_s*9301+49297)%233280)/233280;
const P=raw.map((r,i)=>({id:i,n:r[0],c:r[1],img:IMG[r[2]],menu:MENU[r[2]],k0:r[3],m:r[4],t:r[5],lat:C0.lat+(_r()-.5)*.03,lng:C0.lng+(_r()-.5)*.04}));
// localStorage 저장소 (백엔드 없는 프로토타입)
const DB={get(k,d){try{return JSON.parse(localStorage.getItem('masitdo_'+k))??d}catch(e){return d}},set(k,v){localStorage.setItem('masitdo_'+k,JSON.stringify(v))}};
const likes=()=>DB.get('likes',[]);const kOf=p=>p.k0+(likes().includes(p.id)?1:0);
const lvOf=p=>{const k=kOf(p);return k>=15?3:k>=8?2:k>=2?1:0};
const top10=()=>[...P].sort((a,b)=>kOf(b)-kOf(a)).slice(0,10).map(p=>p.id);
const MISSIONS=[{id:'top10',e:'🔥',t:`이번 주 ${LABEL.overlap} Top 10 중 2곳 방문하기`,goal:2,r:'+300P',calc:()=>DB.get('visits',[]).filter(id=>top10().includes(id)).length},
 {id:'like5',e:'👍',t:'맛집 5곳 추천(공감)하기',goal:5,r:'특별 아이콘',calc:()=>likes().length},
 {id:'visit3',e:'📍',t:'방문 인증 3회',goal:3,r:'스티커 1장',calc:()=>DB.get('visits',[]).length}];
function toast(msg){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;left:50%;top:128px;transform:translateX(-50%);background:rgba(29,31,36,.92);color:#fff;padding:12px 18px;border-radius:999px;font-size:14px;z-index:999;box-shadow:0 6px 20px rgba(0,0,0,.25);pointer-events:none;transition:opacity .3s;max-width:90%;text-align:center';document.body.appendChild(t)}t.textContent=msg;t.style.opacity=1;clearTimeout(t._h);t._h=setTimeout(()=>t.style.opacity=0,2200)}
