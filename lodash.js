import _ from 'lodash'
// .uniq(배열) => 중복되는 배열 내 값을 없애 유일 값으로만 구성되게 해줌
const uniqLodash = _.uniq([2,1,2])
console.log(`const uniqLodash = _.uniq([2,1,2])`,uniqLodash)
const userA = [
  {userId: '1', name: 'Kevin'},
  {userId: '2', name: 'Neo'}
]
const userB = [
  {userId: '1', name: 'Kevin'},
  {userId: '3', name: 'Ggang'}
]
console.log(`userA`,userA)
console.log(`userB`,userB)
const userC = userA.concat(userB)
console.log(`userC`,userC)
// .uniqBy(배열, 중복검증기준) => 기준의 값을 검증하여 중복된 값을 제거
console.log(`.uniqBy(userC,'userId')`, _.uniqBy(userC,'userId'))
const userD = _.unionBy(userA,userB,'userId')
// .unionBy(배열, 중복검증기준) => 합치기 전에 기준의 값을 검증하여 중복된 값을 제거한 후 합침
console.log(`_.unionBy(userA,userB,'userId')`,userD)
// 얕은 복사 상태
console.log(`userA[0]===userD[0] :`,userA[0]===userD[0])
// .cloneDeep(배열) => 깊은복사를 위해 사용되어짐
const userE = _.cloneDeep(userD)
console.log(`userE[0]===userD[0] :`,userE[0]===userD[0])
const userF = [
  {userId: '1', name: 'Kevin'},
  {userId: '2', name: 'Neo'},
  {userId: '3', name: 'Ggang'},
  {userId: '4', name: 'Amy'},
  {userId: '5', name: 'John'},
  {userId: '6', name: 'Jessica'},
]
// .find(배열, 검색기준) => 검색 기준을 기초로 해당객체를 찾아 반환
const foundUser = _.find(userF, {name:'Jessica'})
console.log(`const foundUser = _.find(userF, {name:'Jessica'}) :`, foundUser)
const foundUserIndex = _.findIndex(userF, {name:'Jessica'})
// .find(배열, 검색기준) => 검색 기준을 기초로 해당객체를 찾아 인덱스 번호를 반환
console.log(`const foundUserIndex = _.findIndex(userF, {name:'Jessica'}) :`, foundUserIndex)
_.remove(userF, {name: 'John'})
// .remove(배열, 검색기준) =>  검색 기준을 기초로 해당객체를 찾아 객체 삭제
console.log(`_.remove(userF, {name: 'John'}) :\n`,userF)
console.log(``)
console.log(``)
console.log(``)
console.log(``)
console.log(``)
console.log(``)
console.log(``)
console.log(``)