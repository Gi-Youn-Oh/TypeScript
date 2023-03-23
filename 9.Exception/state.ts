{
    class TimeoutError extends Error { }
    class OfflineError extends Error { }

    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    }

    type SuccessState = {
        result: 'success'
    }
    type ResultState = SuccessState | NetworkErrorState;
    class NetworkClient {
        tryConnect(): ResultState { }
    }

    class UserService {
        // dependency injection 필요한 것을 외부에서 받아옴
        constructor(private client: NetworkClient) {
        }

        login() {
            this.client.tryConnect();
            // try {
            //     this.client.tryConnect();
            // } catch (error) {
            //     console.log('catched'); // 에러를 제대로 처리 할 수 없으면 안하는 것이 좋다. 처리할 수 있는 곳에서 처리
            // }
        }
    }

    class App {
        constructor(private userService: UserService) { }
        run() {
            try {
                this.userService.login();
            } catch (error) { // error = any type
                // show dialog to user 의미 있는 에러 처리
                if (error instanceof OfflineError) { // any type이라 사용 못함

                }
            }
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run()
}