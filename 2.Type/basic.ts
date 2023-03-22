{
    /*
    JavaScript
    Primitive: number, string, null, undefined, symbol, boolean, bigint
    Object: function, array ...
     */

    // number
    const num:number = 6;

    // string
    const str:string = 'hello';

    // boolean
    const bool:boolean = false;

    // undefined 값이 있다 or 없다 정해지지 x
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null 없다!
    let person: string | null;
    person = 'giyoun';
    person = null;

    //unknown 가능하면 사용 x
    let notSure: unknown = 0;
    notSure = 'giyoun';
    notSure = true;

    // any 가능하면 사용 x
    let anything: any = 0;
    anything = 'hello';

    // void 함수에서 아무것도 return 하지 않을 때 생략 가능
    function print(): void {
        console.log('hello');
        // return; 생략되어져 있는 것과 같다.
    }

    // never 절대 리턴할 수 없다.
    function throwError(message: string): never { // never를 리턴
        // message -> server (log)
        throw new Error(message);
        while(true) {

        }
        // return;  리턴 불가!
    }

    // object 원시타입 제외 모든 객체 사용하지 않는 것 권장 명확히 명시하는 것이 좋다!
    let obj: object;
    function acceptSomeObject(obj: object){

    }
    acceptSomeObject({name: 'giyoun'});
    acceptSomeObject({animal: 'cat'});
}