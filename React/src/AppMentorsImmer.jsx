import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorImmer() {
  const [person, updatePerson] = useImmer(initialState);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const newName = prompt(`추가할 이름은?`);
    const newTitle = prompt(`추가할 타이틀은?`);

    updatePerson((person) => {
      person.mentors.push({ name: newName, title: newTitle });
    });
  };
  const handleDelete = () => {
    const deleteMentor = prompt('삭제할 이름은?');

    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === deleteMentor);
      if (index < 0) return;
      person.mentors.splice(index, 1);
    });
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
