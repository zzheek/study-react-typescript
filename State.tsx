import { useState } from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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
const Lable = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;
const Button = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;


function App() {
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
        <Button onClick={sub}>-</Button>
        <Lable>{counter}</Lable>
        <Button onClick={add}>+</Button>
      </Contents>
  </Container>
  );
}

export default App;





////////////////////////// components/Button/index.tsx
import styled from "@emotion/styled";

const Container = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

// label이라는 읽기전용 문자열 데이터를 필수로 전달받아야 함
// onClick이라는 이름의 반환값을 가지지 않는 함수를 선택적으로 전달받을수 있음
// (?는 해당 변수가 필수가 아닐때 사용됨)
interface Props {
  readonly label: string;
  readonly onClick?: () => void;
}
// 실무에서는 이런 식으로 구조 분해 할당을 사용
// export const Button = ({ label, onClick }: Props) => {
//     return <Container onClick={onClick}>{label}</Container>;
// };
export const Button = (props: Props) => {
  return <Container onClick={props.onClick}>{props.label}</Container>;
};


