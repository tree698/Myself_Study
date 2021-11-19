{
  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    // 여기서 error를 잡으면 최종소비자에게 해줄것이 없음
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      // error를 의미있게 처리할 수 있는 곳에서 handling해야 함
      // 여기서는 프로그램이 죽지 않고 최종 소비자에게 의미있는 메세지 or 다른 행위를 전달/유도할 수 있음
      try {
        this.userService.login();
      } catch (error) {
        console.log('네트워크가 없습니다.');
        // show dialog to user 등 의미 있는 처리가 가능함
      } finally {
        console.log('done!');
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
