const userLocalStorage = {
  name : 'kevin',
  age : 18,
  emails : [
    'bottleofsoju@gmail.com',
    'kevin_jeong@ymail.com'
  ]
}
// 로컬스토리지에 JSON 오브젝트 저장 => 오브젝트는 저장이 안되므로 문자열 치환
localStorage.setItem('user',JSON.stringify(userLocalStorage))
// 로컬스토리지 가져오기
console.log(JSON.parse(localStorage.getItem('user')))
// 로컬스토리지 제거하기
// localStorage.removeItem('user')
// 로컬스토리지 내용 변경하기
const strLocalStorage = localStorage.getItem('user')
const objLocalStorage = JSON.parse(strLocalStorage)
objLocalStorage.age = 39
console.log(objLocalStorage)
// 로컬스토리지 덮어쓰기
localStorage.setItem('user',JSON.stringify(objLocalStorage))
// Lowdb를 이용하여 스토리지 사용하기 (Lodash 이용)