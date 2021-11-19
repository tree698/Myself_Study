{
  /**
   *  exception & error => 예상 x
   *  error state => 예상 0
   */

  // 예상되는 error를 명시해 줌 => 실패 이유에 따라 적절한 대응 가능
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type SuccessState = {
    result: 'success';
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      this.userService.login();
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
