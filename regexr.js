const strRegexr = `
010-9884-0808
kevin_jeong@ymail.com
https://www.omdbapi.com/?apikey=72363711&s=matrix
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234/
동해물과 백두산이 마르고 닳도록
하느님이_보우하사_우리나라_만세
`
// g => 모든 문자와 여러줄 일치, i => 대소문자 구분하지 않음
// 생성자 방식
const regexp1 = new RegExp('the', 'gi')
console.log(strRegexr.match(regexp1))
// 리터럴 방식
const regexp2 = /the/gi
console.log(strRegexr.match(regexp2))
const regexp3 = /fox/gi
console.log(`정규식.test(문자열)`,regexp3.test(strRegexr))
console.log(`문자열.match(정규식)`,strRegexr.match(regexp3))
console.log(`문자열.search(정규식)`,strRegexr.search(regexp3))
console.log(`문자열.replace(정규식,대체문자)`,
strRegexr.replace(/fox/gi,'cat'))
// 이스케이프 문자 => 백슬래시 기호를 통해 본래 기능을 벗어나 상태가 바뀌게해주는 문자
// \. => 백슬래시 없는 .는 문자를 뜻하지만 \.일 경우에는 .을 의미함
// multiline 옵션을 이용하여 줄바꿈마다 확인을 함
console.log(strRegexr.match(/\.$/gim))
// ^문자 => 줄 시작부분이 일치
console.log(`strRegexr.match(/^k/gim)`,strRegexr.match(/^k/gim))
// 문자$ => 줄 끝부붙이 일치
console.log(`strRegexr.match(/d$/gim)`,strRegexr.match(/d$/gim))
// . => 임의의 한 문자와 일치 (\.의 경우는 문자 . 와 동일)
console.log(`strRegexr.match(/./g)`,strRegexr.match(/./g))
// a|b => a 또는 b와 일치 (| 문자사용 : &verbar;)
console.log(`strRegexr.match(/fox|dog/gm)`,strRegexr.match(/fox|dog/gm))
// g 옵션이 안들어갈 경우 먼저 오는 값만 반환됨
console.log(`strRegexr.match(/dog|fox/)`,strRegexr.match(/dog|fox/))
// ab? => b가 없거나 b와 일치
console.log(`strRegexr.match(/https?/g)`,strRegexr.match(/https?/g))
// {3}, {3,5}, {3,} => 3개 연속 일치, 3개이상 연속 일치, 3개이상 5개 이하 일치
console.log(`strRegexr.match(/\\d{4}/g)`,strRegexr.match(/\d{4}/g))
console.log(`strRegexr.match(/\\d{3,5}/g)`,strRegexr.match(/\d{3,5}/g))
console.log(`strRegexr.match(/\\d{5,}/g)`,strRegexr.match(/\d{5,}/g))
// [abc], [A-Z] => 범위 그룹화
console.log(`strRegexr.match(/[fox]/g)`,strRegexr.match(/[fox]/g))
console.log(`strRegexr.match(/[0-9]{1,}/g)`,strRegexr.match(/[0-9]{1,}/g))
console.log(`strRegexr.match(/[가-힣]{1,}/g)`,strRegexr.match(/[가-힣]{1,}/g))
console.log(`strRegexr.match(/\\bf\\w{1,}\\b/g)`,strRegexr.match(/\bf\w{1,}\b/g))
// (?=)	앞쪽 일치(Lookahead)
console.log(`strRegexr.match(/.{1,}(?=@)/g)`,strRegexr.match(/.{1,}(?=@)/g))
// (?<=)	앞쪽 일치(Lookahead)
console.log(`strRegexr.match(/(?<=@).{1,}/g)`,strRegexr.match(/(?<=@).{1,}/g))