{
    //Type Inference
    // 타입 자동 지정, 너무 당연한 것이 아니면 명시적으로 지정해주는 것이 좋음
    let text = 'hello'; // 선언동시 할당하면 string 타입 지정
    function print(message = 'typescript') { // 타입없이 사용하면 any로 타입 -> 명시적으로 지정해주는 것이 좋다!
        console.log(message);
    }
    print ('hello');
    // print (23);

    function add(x: number, y: number) { // 인자 두 타입이 숫자이기 때문에 함수의 return값도 숫자로 추론
        return x + y;
    }

    const result = add(1, 2); // result 는 자동으로 숫자 지정
}