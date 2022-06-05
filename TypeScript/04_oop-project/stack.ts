{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
    // readonly next: StackNode | undefined;
  };

  class StackImpl implements Stack {
    // 내부에서 사용하는 size, 여기에 readonly 붙이면 내부에서 수정 불가
    private _size: number = 0;
    private head?: StackNode;
    // private head: StackNode | undefined; => undefined 체크를 해야 함

    // 외부에서 호출하는 size <= 함수지만 변수 취급
    get size() {
      return this._size;
    }

    constructor(private capacity: number) {}

    push(value: string): void {
      if (this.size === this.capacity) {
        throw new Error('Stack is full');
      }
      // 타입 추론 StackNode<T> 생략
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    // this.head === undefined  =>  null일 경우 통과됨
    // null == undefined  <==>  null !== undefined
    // 여기서는 this.head == null  or  this.head == undefined
    // 만일, this._size === 0 사용하면, this.head가 undefined일 경우를 걸러내지 못함
    pop(): string {
      if (this.head == null) {
        throw new Error('Stack is empty');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push('ellie 1');
  stack.push('steve 2');
  stack.push('Bob 3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
