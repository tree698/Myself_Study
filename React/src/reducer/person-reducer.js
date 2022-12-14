export default function personReducer(person, action) {
  switch (action.type) {
    case 'update':
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) =>
          mentor.name === prev ? { ...mentor, name: current } : mentor
        ),
      };
    case 'add':
      const { newName, newTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: newName, title: newTitle }],
      };
    case 'delete':
      const { deleteMentor } = action;
      return {
        ...person,
        mentors: person.mentors.filter(
          (mentor) => mentor.name !== deleteMentor
        ),
      };
  }
}
