import React, { useReducer, useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {
  // const [person, setPerson] = useState(initialState);
  const [person, dispatch] = useReducer(personReducer, initialState);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    // solution 1.
    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.map((mentor) => {
    //     if (mentor.name === prev) {
    //       return { ...mentor, name: current };
    //     }
    //     return mentor;
    //   }),
    // }));

    // solution 2.
    // const update = person.mentors.map((mentor) =>
    //   mentor.name === prev ? { ...mentor, name: current } : mentor
    // );
    // setPerson((person) => ({ ...person, mentors: update }));

    dispatch({ type: 'update', prev, current });
  };
  const handleAdd = () => {
    const newName = prompt('추가할 이름은?');
    const newTitle = prompt('추가할 타이틀은?');
    // setPerson((prev) => ({
    //   ...prev,
    //   mentors: [...prev.mentors, { name: newName, title: newTitle }],
    // }));
    dispatch({ type: 'add', newName, newTitle });
  };
  const handleDelete = () => {
    const deleteMentor = prompt('삭제할 이름은?');
    // const filteredMentor = person.mentors.filter(
    //   (mentor) => mentor.name !== deleteMentor
    // );
    // setPerson((prev) => ({
    //   ...prev,
    //   mentors: filteredMentor,
    // }));
    dispatch({ type: 'delete', deleteMentor });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialState = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
