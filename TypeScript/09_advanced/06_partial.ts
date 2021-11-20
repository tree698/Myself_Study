{
  type ToDo = {
    title: string;
    description: string;
    year: number;
    priority: 'heigh' | 'low';
  };

  function updateToDo(todo: ToDo, fieldToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldToUpdate };
  }

  const todo: ToDo = {
    title: 'Family Business',
    description: 'Doing Business',
    year: 2019,
    priority: 'heigh',
  };

  const updated = updateToDo(todo, { priority: 'low' });
  console.log(updated);
}
