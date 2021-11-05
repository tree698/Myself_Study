{
	interface Stack {
		readonly size: number;
		push(value: string): void;
		pop(): string;
	}

	type StackNode = {
		readonly value: string;
		readonly next?: StackNode;
	};

	class StackImpl implements Stack {
		private _size: number = 0;
		private head?: StackNode;

		constructor(private capacity: number) {}
		get size() {
			return this._size;
		}

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