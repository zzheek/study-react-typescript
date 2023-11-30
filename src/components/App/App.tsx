import { useState } from 'react'; // State를 사용하기 위한 리액트 훅. 클래스컴포넌트에서 사용 불가
import { Button } from 'components/Button';
import { Component } from 'react';
import { Label } from 'components/Label';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { count } from 'console';
import { IScriptSnapshot } from 'typescript';


const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  `;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spinAnimation} infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #61afb;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = Record<string, never>;
interface State {
  readonly counter: number;
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }
  private sub = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
  };

  private add = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  };

  render() {
    const { counter } = this.state;
  

    return (
      <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label='-' onClick={this.sub}/>
          <Label data={counter}/>
          <Button label='+' onClick={this.add}/>
          
        </Contents>
    </Container>
    );

    
  }
}
// function App() {
//   const [counter, setCounter] = useState(0);

//   const sub = () => {
//     setCounter(counter - 1);
//   };
//   const add = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <Container>
//       <Title>Counter App</Title>
//       <Contents>
//         <Button label='-' onClick={sub}/>
//         <Label data={counter}/>
//         <Button label='+' onClick={add}/>
//       </Contents>
//   </Container>
//   );
// }

export default App;
