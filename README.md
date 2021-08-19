# TypeScript

 ## Primitive Type
 - 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형이다.   
 - 프리미티브 형의 내장 함수를 사용 가능한것은 자바스크립트 처리 방식 덕분    
 - (ES2015 기준) 6가지  
    - boolean  
    - number  
    - string  
    - symbol  
    - null  
    - undefined  

```bash
let name = 'mark';
name.toString();
```
- literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.  
```bash
true; //Primitive타입 boolean의 서브타입
'hello'; //string의 서브타입
3.14; //number의 서브타입
null; //null의 서브타입
undefined;//undefined의 서브타입
```
-  래퍼 객체로 만들 수 있다.  
```bash
new Boolaen(false); // typeof new Boolean(false) : 'object'
new String('world'); // typeof new String('world') : 'object'
new Number(42); // typeof new Number(42) : 'object'
//위와 같이 만든 것은 Primitive타입이 아니다.
```
## Type Casing
- TypeScript의 핵심 Primitive type은 모두 소문자이다.
- Number, String Boolean, Symbol 또는 Object 유형이 위에서 권장한 소문자 버전과 동일하다고 생각할 수 있지만 이런 유형은 Primitives를 나타내지 않으며, 타입으로 사용해서는 안된다.




