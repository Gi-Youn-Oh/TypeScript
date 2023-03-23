{
    // a or b
    interface Either<L, R> {
        left: () => L;
        right: () => R;
    }

    // class SimpleEither implements Either{
    //     constructor(private leftValue: number, private rightValue: number) {}
    //     left(): number {
    //         return this.leftValue;
    //     }
    //     right(): number {
    //         return this.rightValue;
    //     }
    // }

    // 왼쪽 타입이 같을수도 다를수도
    class SimpleEither<L, R> implements Either<L, R>{
        constructor(private leftValue: L, private rightValue: R) {}
        left(): L {
            return this.leftValue;
        }
        right(): R {
            return this.rightValue;
        }
    }

    const either: Either<number, number>  = new SimpleEither(4, 5);
    either.left(); // 4
    either.right(); // 5
    
    const best = new SimpleEither({name: 'giyoun'}, 'hello');


}