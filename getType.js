// 외부에서도 사용하게 하는 함수를 만들 시
// export 를 이용

export function getType(data) {
  // 특정한 데이터를 문자화 시켜줌
  return "type : "+Object.prototype.toString.call(data).slice(8,-1)
}

export const user = {
  name: 'kevin',
  age:39,
  telephone: '010-9884-0808',
  address: '광주광역시 서구 치평동'
}

export default 123