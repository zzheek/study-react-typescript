import styled from "@emotion/styled";
import { DataView } from "components/DataView";
import { InputContainer } from "components/InputContainer";
import { ToDoListContextProvider } from "contexts/ToDoList";


const Container = styled.div`
  background-color: #eeeeee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function App() {

  // 기본값 false, 처음엔 ToDoInput 컴포넌트가 보이지 않게 설정
  // const [showToDoInput, setShowToDoInput] = useState(false);

  // const onDelete = (todo: string) => {
  //   setToDoList(toDoList.filter((item) => item != todo ));
  // };

  // const [toDo, setToDo] = useState('');

  // const onAdd = (toDo: string) => {
  //   setToDoList([...toDoList, toDo]);
  //   setShowToDoInput(false);
  // };

  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <InputContainer />
      </ToDoListContextProvider>
    </Container>
  ); 
}

export default App;
