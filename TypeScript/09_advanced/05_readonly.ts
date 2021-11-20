{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    todo.title = 'down'; // readonly 이므로 에러
  }
}
