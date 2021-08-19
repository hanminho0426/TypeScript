let isDone: boolean = false;

isDone = true;

console.log(typeof isDone); // 'boolean'

let isOk: Boolean = true;

//소문자 boolean은 primitive타입 대문자 Boolean은 object타입이믈 실행X
let isNotOk: boolean = new Boolean(true);

