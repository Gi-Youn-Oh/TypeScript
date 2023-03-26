// 모듈화 하지 않으면 window(browser) or global(node) 객체에 속한다.
// 모듈화 하여 각각의 공통 변수명에 대한 충돌을 방지한다.

// export default function add(a, b) {
//     return a + b;
// }
// 하나의 파일에 default는 하나만 존재할 수 있다.
export function print() {
    console.log('print');
}

export function add(a, b) {
    return a + b;
}

//변수도 가능
export const name = 'Lee';
