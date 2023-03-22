{ // 동일한 변수 값을 두고 차별화를 두어 직관적 코드 작성 가능
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        }
    }
    type Failure = {
        result: 'fail';
        reason: string;
    }
    type LoginState = SuccessState | Failure

    function LoginAPI(id: string, password: string): LoginState {
        return {
            result: 'success',
            response: {
                body: 'log in',
            },
        }
    }

// printLoginState(state: LoginState)
// success -> 'good', body
// fail -> 'fail', reason
    function printLoginState(state: LoginState): void {
        // state.result // success or fail 바로 접근 가능
        if (state.result === 'success') { // response 가 있다면 접근 가능
            console.log(`good ${state.response.body}`);
        } else {
            console.log(`bad ${state.reason}`);
        }
    }
}