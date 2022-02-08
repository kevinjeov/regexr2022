import _ from 'lodash'
// 이름을 지정해야할 경우 중괄호 안에 객체, 함수 등을 적어준다.
// import {getType, user as kevin} from './getType'
// * 사용목적 => 여러 내용을 한번에 지정할 목적으로 사용
import * as R from './getType'
import getRandom from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(R)
console.log(R.default)
console.log(R.getType([1,2,3]))
console.log(getRandom(), getRandom())
console.log(R.user)
