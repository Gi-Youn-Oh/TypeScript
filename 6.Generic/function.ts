{
    // generic
    // 유연함, 타입 보장, 재사용성 

    // 1. 문제는 숫자만 확인가능 ... 타입별로 다만들어? xxx
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw new Error('Not valid Number')
        }
        return arg;
    }

    const result = checkNotNullBad(123);
    console.log(result);
    checkNotNullBad(null);

    // 2. 그렇다면 any로 ? => type 보장이 안됨... => 안정성 떨어짐
    function checkNotNullAnyBad(arg: any | null): any {
        if (arg == null) {
            throw new Error('Not valid Number')
        }
        return arg;
    }

    // 3. 이럴 때 제네릭! = 통상적, 포용적
    // 인자가 어떤 타입이든 null이 아닐 때만 리턴 
    // 통상적으로 T 로 사용
    // T 또는 null을 받아서 T 타입을 리턴
    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error('Not valid Number')
        }
        return arg;
    }

    const number = checkNotNull(123); // 코드 치는 이순간에 number 로 결정 타입 보장
    const bool: boolean = checkNotNull(true); // 코드 치는 순간 boolean 로 결정 타입 보장

}