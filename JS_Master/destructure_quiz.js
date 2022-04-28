// quiz

const prop = {
  name: 'button',
  stvles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ stvles: { size, color } }) {
  console.log(color);
}
changeColor(prop);
