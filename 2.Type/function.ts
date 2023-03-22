{
    // JavaScript
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }
    //
    // // TypeScript
    // function Add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }
    //
    // // JavaScript
    // function jsFetch(id){
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }
    // // TypeScript
    // function fetching(id: string): Promise <number> { // promise return 그리고 promise함수는 number 를 return
    //     // code ...
    //     // code ...
    //     return new Promise ((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // JavaScript => TypeScript
    // Optional parameter
    // ? -> 전달 받을 수도 안 받을 수도
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }
    printName('Oh', 'Giyoun');
    printName('Oh');
    printName('Oh', undefined);

    // Default parameter
    // 인자 전달 없이 default 값 사용
    function printMessage(message: string = 'default message'){
        console.log(message);
    }
    printMessage();

    // Rest parameter
    function addNumber (...numbers: number[]): number{ // 숫자 타입의 배열
        return numbers.reduce((a,b) => a + b);
    }
    console.log(addNumber(1,2));
    console.log(addNumber(1,2,3,4));
    console.log(addNumber(1,2,3,4,5,0));
}