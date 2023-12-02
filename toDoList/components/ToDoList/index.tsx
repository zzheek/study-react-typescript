import { useContext } from 'react';
import styled from '@emotion/styled';
import { ToDoItem } from 'components/ToDoItem';
import { ToDoListContext } from 'contexts/ToDoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToDoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);

// map을 통해 동일한 컴포넌트를 반복적으로 표시할 때에는 key값 필수 설정
// 그렇지 않으면 중복된 key값의 컴포넌트를 동일한 컴포넌트로 간주하여 리렌더링함
  return (
    <Container>
      {toDoList.map((todo) => (
        <ToDoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

