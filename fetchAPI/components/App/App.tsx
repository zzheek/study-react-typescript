import styled from "@emotion/styled";
import { BlogPost } from "components/BlogPost";
import { Header } from "components/Header";
import { useState, useEffect } from "react";
// import mockPosts from 'mock/posts.json';
import { Button } from "components/Button";
import { Form } from 'components/Form';


const Container = styled.div`
  background-color: #eeeeee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

interface Post {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}



function App() {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setPosts(json))
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <Container>
        <Header />  
        {posts.map((post) => (
          <BlogPost key={post.id} title={post.title} body={post.body} />
        ))}
        <ButtonContainer>
          <Button label="등록" onClick={() => setShowForm(true)} />
        </ButtonContainer>
        {showForm && <Form onClose={() => setShowForm(false)} />}
    </Container>
  ); 
}

export default App;
