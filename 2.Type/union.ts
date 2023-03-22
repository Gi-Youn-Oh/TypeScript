{
    // Union Types: OR

    type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction: Direction) {
        console.log(direction);
    }

    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16; // 해당 숫자만

    // function: login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        }
    }
    type Failure = {
        reason: string;
    }
    type LoginState = SuccessState | Failure
    function LoginAPI(id: string, password: string): LoginState{
        return {
            response: {
                body: 'log in',
            },
        }
    }

    // printLoginState(state: LoginState)
    // success -> 'good', body
    // fail -> 'fail', reason
    function printLoginState(state: LoginState): void {
        // console.log(response.body); // 이렇게 하면 안됨!
        if ('response' in state){ // response 가 있다면 접근 가능
            console.log(`good ${state.response.body}`);
        }else{
            console.log(`bad ${state.reason}`);
        }
    }
}
