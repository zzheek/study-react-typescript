import { useContext, useState } from "react";
import styled from "@emotion/styled";
import { TextInput } from "components/TextInput";
import { Title } from "components/Title";
import { Button } from "components/Button";
import { ToDoListContext } from "contexts/ToDoList";
import { useNavigate } from 'react-router-dom';
import { ShowInputButton } from "components/ShowInputButton";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


interface Props {
    readonly onClose: () => void;
}

export const ToDoInput = () => {
    const navigate = useNavigate();
    const { onAdd } = useContext(ToDoListContext); 
    const [toDo, setToDo] = useState('');

    const onAddToDo = () => {
        if(toDo === '') return;

        onAdd(toDo);
        setToDo('');
        navigate('/');
    };

    return (
        <Container>
            <Background />
            <Contents>
                <Title label="할 일 추가" />
                <InputContainer>
                    <TextInput value={toDo} onChange={setToDo} />
                    <Button label="추가" color="#304FFE" onClick={onAddToDo} />
                </InputContainer>
            </Contents>
            {/* 할일이 추가될 때와 닫기 버튼인 Show~컴포넌트를 클릭했을 때에 할일 목록 페이지로 이동 */}
            <ShowInputButton show={true} onClick={() => navigate('/')} />
        </Container>
    );
};