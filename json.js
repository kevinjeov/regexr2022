// JavaScript Object Notation (JSON) => J속성-값 쌍 또는 "키-값 쌍"으로 이루어진
// 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷
// 비동기 브라우저/서버 통신 (AJAX)을 위해, 넓게는 XML(AJAX가 사용)을 대체하는 주요 데이터 포맷
// 외부 JSON IMPORT => js 파일이 아니므로 확장자를 써줘야 함
import myData from './myData.json'
// JSON 예시
const jsonExample = {
  "이름공간(키)": "값",
  "값 구분자": "각각의 값들은 ',' (콤마)로 구분되어야 합니다.",
  "이스케이프": "키나 값에서 큰따옴표를 쓰고 싶으면-특정 문자를 이스케이프 하려면- \" 처럼 문자 앞에 역슬래시를 붙입니다.",
  "자료형": "표현 가능한 자료형은 문자열, 숫자, 불리언, 널, 객체, 배열 6개입니다.",
  "문자열 값": "나무위키, 여러분이 가꾸어 나가는 지식의 나무",
  "숫자 값": 19721121,
  "불리언 값": true,
  "널 값": null,
  "객체 값": {
    "값1": 3.141592653589793,
    "값2": false,
    "값3": {
      "객체 안에": "객체를 넣는것도 가능하지요",
      "구분자": "또한 키와 값은 ':' 로 구분됩니다"
    }
  },
  "배열 값": [
    "이것은 배열입니다.",
    {
      "현재 값의 인덱스": 1,
      "이런 식으로": "배열 안에 여러 값을 넣을 수 있습니다."
    },
    [ "배열", "안에", "배열을", "넣는것도", "가능하지요" ]
  ],
  "값의 개수가 적을때는": "다음과 같이 한 줄로도 객체와 배열 표현이 가능합니다.",
  "한 줄 객체": { "김두한": "개소리 집어쳐", "심영": "내가 고자라니", "의사양반": "전화는 없어요" },
  "한 줄 배열": [ "나무위키는", "누구나", "기여할", "수", "있는", "위키입니다." ]
}
console.log('jsonExample',jsonExample)
console.log(typeof jsonExample)
// JSON.stringify(JSON) => JSON을 문자열로 바꿔줌
const strJson = JSON.stringify(jsonExample)
console.log(typeof strJson)
console.log(`strJson`, strJson)
// JSON.parse(문자열) => 문자열 형태의 객체를 JSON으로 바꿔줌
const objJson = JSON.parse(strJson)
console.log(`objJson`, objJson)
console.log(typeof objJson)
console.log(myData)
console.log(typeof myData)