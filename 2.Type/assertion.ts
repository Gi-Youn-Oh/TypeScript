{
    // Type assertions 비추천

    function jsStrFunc(): any { // 항상 문자열을 리턴하는 함수 
        return 'hello'; // return 2; 를 해도 코딩중에 오류 표시 x 런타임 시에 오류
    }

    const result = jsStrFunc();
    // result.length; 타입스크립트에서는 any type이기 때문에 문자열 api를 사용할 수 없다.
    console.log((result as string).length); // 확신할 때는 assertion으로 지정해주어 사용할 수 있다.
    console.log((<string>result).length);  // 동일

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // error

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    // numbers.push(2); //  error undefined일 수도 있기 때문에 push를 사용할 수 없다.
    numbers!.push(2); // ! -> 무조건 있을거라고 확신할 때 사용


    const button = document.querySelector('class');
    if(button){
        button.nodeValue;
    }

    const button1 = document.querySelector('class')!; // ! -> 무조건 있을거라고 확신할 때 사용

}