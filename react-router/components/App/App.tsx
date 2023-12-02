import styled from "@emotion/styled";
import { DataView } from "Pages/DataView";
import { ToDoInput } from "Pages/ToDoInput";
import { ToDoListContextProvider } from "contexts/ToDoList";
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from "components/Header";


const Container = styled.div`
  background-color: #eeeeee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFound = styled.div`
  text-align: center;
`;


function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Header />
        {/* path="특정 URL" element={url에 해당하는 컴포넌트}  */}
        <Routes> 
          <Route path="/" element={<DataView />}/>
          <Route path="/add" element={<ToDoInput />}/>
          <Route path="*"  element={
              <NotFound>
                404
                <br />
                NOT FOUND
              </NotFound>
            }
          />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  ); 
}

export default App;
