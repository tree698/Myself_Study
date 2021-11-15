'use strict';

export default class Field {
  constructor(carrotCount, bugcount) {
    this.field = document.querySelector('.game__field');
    this.field.addEventListener('click', this.onClick);
  }

  setItemClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  onClick(event) {
    const target = event.target;
    if (target.matches('.carrot')) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick('carrot');
    } else if (target.matches('.bug')) {
      this.onItemClick && this.onItemClick('bug');
    }
  }
}

// 어떤 클래스 안에 있는 함수를 this.함수의 향태로 다른 콜백으로 전달할때는 그 함수가 포함하고 있는 클래스 정보가 사라짐
// 클래스(this)와 함수를 바인딩해야 함
// (this.onClick) 함수를 인자로 전달할때 class 정보는 함께 전달되지 않음 => onItemClick은 undefined가 됨

// 첫째 방법 => 직접 묶어 준다
this.onClick = this.onClick.bind(this);
this.field.addEventListener('click', this.onClick);

// 둘째 방법 => arrow function으로 감싸준다
this.field.addEventListener('click', (event) => this.onclick(event));

// 셋째 방법 => (클래스 안의 함수를 콜백으로 전달할때는) 변수로 전달
onClick = (event) => {
  const target = event.target;
  if (target.matches('.carrot')) {
    target.remove();
    sound.playCarrot();
    this.onItemClick && this.onItemClick('carrot');
  } else if (target.matches('.bug')) {
    this.onItemClick && this.onItemClick('bug');
  }
};
