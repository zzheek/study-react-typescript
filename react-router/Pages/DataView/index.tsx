import styled from "@emotion/styled";
import { ShowInputButton } from "components/ShowInputButton";
import { Title } from "components/Title";
import { ToDoList } from "components/ToDoList";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justiry-content: center;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;
`;


export const DataView = () => {

    // JS로 페이지 전화을 하기위해 사용
    const navigate = useNavigate();

    return (
        <Container>
            <Title label="할 일 목록" />
            <ToDoList />
            <ShowInputButton show={false} onClick={() => navigate('/add')} />
        </Container>
    );
};