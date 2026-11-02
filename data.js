// ===== 문구 상수: '겹침 점수' 대체 문구가 정해지면 여기만 바꾸면 됩니다 =====
const LABEL={overlap:'겹침',overlapScore:'겹침 점수',realPin:'진짜맛집'};
const IMG=['p0_gukbap','p1_udon','p2_jjamppong','p3_pasta','p4_baekban','p5_tteokbokki','p6_latte'];
const C0={lat:35.2215,lng:128.6815};// 창원 성산구 상남동
const MENU={0:['돼지국밥','순대국밥','수육'],1:['우동','튀김우동','유부우동'],2:['짬뽕','짜장면','탕수육'],3:['파스타','카르보나라','리조또'],4:['백반','된장찌개','제육볶음'],5:['떡볶이','순대','튀김'],6:['라떼','아메리카노','디저트']};
const raw=[['성산 돼지국밥','한식',0,36,1,['가성비','혼밥']],['반림 우동집','일식',1,15,1,['혼밥']],['상남 짬뽕','중식',2,11,0,['매운맛']],['파스타 오늘','양식',3,6,0,['데이트']],['혼밥식당 한그릇','한식',4,1,0,['혼밥','가성비']],['용호 분식','분식',5,2,0,['가성비']],['카페 모래','카페',6,3,0,['데이트']],
['중앙동 국밥골목','한식',0,18,1,['가성비']],['사파 수제우동','일식',1,4,0,['혼밥']],['가음정 홍짬뽕','중식',2,9,1,['매운맛']],['트라토리아 성산','양식',3,13,0,['데이트']],['토월 백반집','한식',4,7,1,['가성비','혼밥']],['남양동 떡볶이','분식',5,1,0,['매운맛']],['용지호수 카페','카페',6,8,0,['데이트']],
['대방동 순대국','한식',0,5,0,['혼밥']],['상남 이자카야 우동','일식',1,2,0,['데이트']],['신월 차이나','중식',2,1,0,[]],['봉곡 파스타랩','양식',3,2,0,['데이트']],['성산 한상','한식',4,10,1,['가성비']],['외동 분식왕','분식',5,6,0,['가성비','혼밥']],['반송 로스터리','카페',6,1,0,[]],['상남시장 칼국수','한식',4,105,1,['가성비','혼밥']]];
let _s=7;const _r=()=>(_s=(_s*9301+49297)%233280)/233280;
// 테스트용 실제 가게 (카카오 장소검색으로 좌표 확인, 2026-11-02). 사진은 자유 라이선스 예시 사진 재사용
const REAL=[
{n:"승리돼지국밥",c:'한식',img:IMG[0],menu:MENU[0],k0:64,m:1,t:["가성비", "혼밥"],lat:35.158336,lng:128.685481,addr:"경남 창원시 진해구 진해대로 640",url:"http://place.map.kakao.com/9225938",rg:'진해'},
{n:"박영수콩짜장짬뽕",c:'중식',img:IMG[2],menu:MENU[2],k0:12,m:1,t:["매운맛"],lat:35.152012,lng:128.657893,addr:"경남 창원시 진해구 중원로85번길 19",url:"http://place.map.kakao.com/24124007",rg:'진해'},
{n:"면돈 본점",c:'일식',img:IMG[1],menu:MENU[1],k0:7,m:0,t:["혼밥"],lat:35.150854,lng:128.661882,addr:"경남 창원시 진해구 중원동로 70",url:"http://place.map.kakao.com/2098751320",rg:'진해'},
{n:"알로파스타",c:'양식',img:IMG[3],menu:MENU[3],k0:9,m:0,t:["데이트"],lat:35.155798,lng:128.714304,addr:"경남 창원시 진해구 냉천로 164",url:"http://place.map.kakao.com/1155530214",rg:'진해'},
{n:"남도밥상",c:'한식',img:IMG[4],menu:MENU[4],k0:5,m:1,t:["가성비"],lat:35.144148,lng:128.670339,addr:"경남 창원시 진해구 태평로 103",url:"http://place.map.kakao.com/2114740480",rg:'진해'},
{n:"강남떡볶이",c:'분식',img:IMG[5],menu:MENU[5],k0:3,m:0,t:["매운맛"],lat:35.102042,lng:128.810296,addr:"경남 창원시 진해구 안골로 348",url:"http://place.map.kakao.com/1045901398",rg:'진해'},
{n:"스위트랩",c:'카페',img:IMG[6],menu:MENU[6],k0:8,m:0,t:["데이트"],lat:35.14115,lng:128.671233,addr:"경남 창원시 진해구 속천로 73-1",url:"http://place.map.kakao.com/1644730395",rg:'진해'},
{n:"동부회센타",c:'한식',img:IMG[4],menu:['모둠회','물회','매운탕'],k0:128,m:1,t:["데이트"],lat:35.15227,lng:128.693937,addr:"경남 창원시 진해구 천자로 5",url:"http://place.map.kakao.com/1492586965",rg:'진해'},
{n:"진해이창민밀면",c:'한식',img:IMG[1],menu:['밀면','비빔밀면','만두'],k0:33,m:1,t:["가성비", "혼밥"],lat:35.136198,lng:128.705407,addr:"경남 창원시 진해구 충장로597번길 17",url:"http://place.map.kakao.com/1884300337",rg:'진해'},
{n:"삼대전통고기국수",c:'한식',img:IMG[0],menu:['고기국수','비빔국수','돔베고기'],k0:19,m:1,t:["혼밥"],lat:33.492958,lng:126.498582,addr:"제주특별자치도 제주시 신대로5길 17",url:"http://place.map.kakao.com/9810778",rg:'제주'},
{n:"늘봄흑돼지",c:'한식',img:IMG[4],menu:['흑돼지 오겹','목살','김치찌개'],k0:14,m:1,t:["데이트"],lat:33.479479,lng:126.472867,addr:"제주특별자치도 제주시 한라대학로 12",url:"http://place.map.kakao.com/8856076",rg:'제주'},
{n:"그시절그짬뽕",c:'중식',img:IMG[2],menu:MENU[2],k0:10,m:0,t:["매운맛"],lat:33.415892,lng:126.26363,addr:"제주특별자치도 제주시 한림읍 한림북동길 7",url:"http://place.map.kakao.com/282533483",rg:'제주'},
{n:"연돈",c:'일식',img:IMG[1],menu:['돈까스','치즈까스','우동'],k0:22,m:1,t:["혼밥"],lat:33.25885,lng:126.406108,addr:"제주특별자치도 서귀포시 색달로 10",url:"http://place.map.kakao.com/1890778114",rg:'제주'},
{n:"그릉그릉파스타가게",c:'양식',img:IMG[3],menu:MENU[3],k0:6,m:0,t:["데이트"],lat:33.523594,lng:126.854872,addr:"제주특별자치도 제주시 구좌읍 구좌로 31",url:"http://place.map.kakao.com/27597395",rg:'제주'},
{n:"애향백반",c:'한식',img:IMG[4],menu:MENU[4],k0:9,m:1,t:["가성비"],lat:33.495768,lng:126.439987,addr:"제주특별자치도 제주시 테우해안로 46",url:"http://place.map.kakao.com/1270700086",rg:'제주'},
{n:"서문떡볶이 시청점",c:'분식',img:IMG[5],menu:MENU[5],k0:4,m:0,t:["가성비"],lat:33.50015,lng:126.529076,addr:"제주특별자치도 제주시 광양8길 2",url:"http://place.map.kakao.com/9821772",rg:'제주'},
{n:"더클리프",c:'카페',img:IMG[6],menu:MENU[6],k0:12,m:0,t:["데이트"],lat:33.244329,lng:126.41492,addr:"제주특별자치도 서귀포시 중문관광로 154-17",url:"http://place.map.kakao.com/1378746048",rg:'제주'},
{n:"우진해장국",c:'한식',img:IMG[0],menu:['고사리육개장','몸국','빙떡'],k0:17,m:1,t:["가성비", "혼밥"],lat:33.511517,lng:126.520001,addr:"제주특별자치도 제주시 서사로 11",url:"http://place.map.kakao.com/11547525",rg:'제주'}
,{n:"진해반점",c:'중식',img:IMG[2],menu:['짬뽕','짜장면','탕수육'],k0:18,m:0,t:["매운맛"],lat:35.148339,lng:128.691373,addr:"경남 창원시 진해구 이동 598-5",url:"http://place.map.kakao.com/660318081",rg:'진해'},
{n:"원조이동아구찜",c:'한식',img:IMG[4],menu:['아구찜','아구탕','해물찜'],k0:152,m:1,t:["매운맛"],lat:35.150977,lng:128.697445,addr:"경남 창원시 진해구 이동로 50-1",url:"http://place.map.kakao.com/24123616",rg:'진해'},
{n:"도유칼국수",c:'한식',img:IMG[1],menu:['칼국수','수제비','김밥'],k0:12,m:1,t:["가성비", "혼밥"],lat:35.146217,lng:128.66118,addr:"경남 창원시 진해구 태평로 17",url:"http://place.map.kakao.com/285922266",rg:'진해'},
{n:"서광장어구이",c:'한식',img:IMG[4],menu:['장어구이','장어탕'],k0:6,m:0,t:["데이트"],lat:35.142663,lng:128.669044,addr:"경남 창원시 진해구 속천로 48-3",url:"http://place.map.kakao.com/21462215",rg:'진해'},
{n:"원돼지집",c:'한식',img:IMG[0],menu:MENU[0],k0:47,m:1,t:["가성비", "혼밥"],lat:35.220129,lng:128.679612,addr:"경남 창원시 성산구 상남로 67",url:"http://place.map.kakao.com/10699537",rg:'창원'},
{n:"스시창",c:'일식',img:IMG[1],menu:['모둠초밥','연어초밥','우동'],k0:25,m:0,t:["데이트"],lat:35.221613,lng:128.682054,addr:"경남 창원시 성산구 마디미로38번길 11",url:"http://place.map.kakao.com/12734107",rg:'창원'},
{n:"토도스",c:'양식',img:IMG[3],menu:MENU[3],k0:3,m:0,t:["데이트"],lat:35.23802,lng:128.683817,addr:"경남 창원시 성산구 용호로 116",url:"http://place.map.kakao.com/26798365",rg:'창원'},
{n:"형제생갈비",c:'한식',img:IMG[4],menu:['생갈비','양념갈비','냉면'],k0:72,m:1,t:[],lat:35.232211,lng:128.651242,addr:"경남 창원시 성산구 대원로33번길 23",url:"http://place.map.kakao.com/1695011826",rg:'창원'}];
const P=[...raw.map(r=>({n:r[0],c:r[1],img:IMG[r[2]],menu:MENU[r[2]],k0:r[3],m:r[4],t:r[5],lat:C0.lat+(_r()-.5)*.03,lng:C0.lng+(_r()-.5)*.04,rg:'성산'})),...REAL]
 .map((p,i)=>({...p,id:i,v0:Math.floor(p.k0/3)+Math.floor(_r()*6),at:Date.now()-Math.floor(_r()*60)*864e5}));
// 사용자가 등록한 맛집(로컬 저장) 합치기
(function(){try{(JSON.parse(localStorage.getItem('masitdo_myplaces'))||[]).forEach(q=>P.push({...q,id:P.length}))}catch(e){}})();
// localStorage 저장소 (백엔드 없는 프로토타입)
const DB={get(k,d){try{return JSON.parse(localStorage.getItem('masitdo_'+k))??d}catch(e){return d}},set(k,v){localStorage.setItem('masitdo_'+k,JSON.stringify(v))}};
const likes=()=>DB.get('likes',[]);
// 기능 스위치 (되돌리기용)
const FEATURE={favorites:true};const CLUSTER_STYLE='egg';// 'egg' | 'photo'
const favs=()=>DB.get('favs',[]);
// 겹침 = 등록한 사람 수. 이미 있는 가게를 내가 또 등록하면 +1 (찜은 점수에 영향 없음)
const myRegs=()=>DB.get('myregs',[]);const kOf=p=>p.k0+(myRegs().includes(p.id)?1:0);
// 프로필 사진
const AV=()=>DB.get('avatar',null)||'img/p0_gukbap.jpg';
function avatarPick(file,cb){const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(im.width,im.height),c=document.createElement('canvas');c.width=c.height=256;c.getContext('2d').drawImage(im,(im.width-s)/2,(im.height-s)/2,s,s,0,0,256,256);const u=c.toDataURL('image/jpeg',.82);DB.set('avatar',u);cb&&cb(u)};im.src=r.result};r.readAsDataURL(file)}
// 핀 색 구간: 1~9 노랑 · 10~29 주황 · 30~99 빨강 · 100+ 빨강+레전드 링 (lv0=새 등록 1명)
const lvOf=p=>{const k=kOf(p);return k>=100?4:k>=30?3:k>=10?2:k>=2?1:0};
const top10=()=>[...P].sort((a,b)=>kOf(b)-kOf(a)).slice(0,10).map(p=>p.id);
const MISSIONS=[{id:'top10',e:'🔥',t:`이번 주 ${LABEL.overlap} Top 10 중 2곳 방문하기`,goal:2,r:'+300P',calc:()=>DB.get('visits',[]).filter(id=>top10().includes(id)).length},
 {id:'like5',e:'♥',t:'맛집 5곳 찜하기',goal:5,r:'특별 아이콘',calc:()=>favs().length},
 {id:'visit3',e:'📍',t:'방문 인증 3회',goal:3,r:'스티커 1장',calc:()=>DB.get('visits',[]).length}];
function toast(msg){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;left:50%;top:128px;transform:translateX(-50%);background:rgba(29,31,36,.92);color:#fff;padding:12px 18px;border-radius:999px;font-size:14px;z-index:999;box-shadow:0 6px 20px rgba(0,0,0,.25);pointer-events:none;transition:opacity .3s;max-width:90%;text-align:center';document.body.appendChild(t)}t.textContent=msg;t.style.opacity=1;clearTimeout(t._h);t._h=setTimeout(()=>t.style.opacity=0,2200)}
