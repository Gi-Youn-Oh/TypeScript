// 문자열 stack 구현 & typescript 단일 연결리스트로 구현

{
    // 1. 규격 정하기 (스택을 변경하거나 다른 종류의 스택을 도입하더라도 인터페이스만 사용하도록 추상화)
    interface Stack {
        readonly size: number;

        push(value: string): void;

        pop(): string;
    }

    // 2. 노드는 해당 값과 다음 노드를 가리키는 간선으로 구성 값을 한번 감싸준다.
    type StackNode = {
        readonly value: string;
        readonly next?: StackNode;
    };

    // 3.
    class StackImpl implements Stack {
        private _size: number = 0;
        private head?: StackNode
        
        get size(): number {
            return this._size;
        }
        
        // 보통 사이즈 정해 둠
        constructor(private capacity: number) { } // 스택 최대 크기 
        

        push(value: string) {
            if(this._size === this.capacity){
                throw new Error('Stack is already full');
            }
            const NewNode:StackNode = {value, next: this.head};
            this.head = NewNode;
            this._size ++; 
        }

        // null == undefined
        // null !== undefined

        pop(): string {
            if(this.head == null){ 
                throw new Error('Stack is already empty');
            }
            const PopNode = this.head;
            this.head = PopNode.next;
            this._size --; 
            return (
                PopNode.value
            )
        }
    }

    // const stack = new StackImpl();

    const stack = new StackImpl(10);

    stack.push('giyoun 1');
    stack.push('oh 2');
    stack.push('typescript 3');

    while(stack.size !== 0){
        console.log('현재 스택은',stack,"\n");
        console.log('stack pop!', stack.pop(),'\n');
    }

    stack.pop();
}