import { Component } from 'react';
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

// 함수형 -> 클래스 컴포넌트로 리팩토링
export class Button extends Component<Props> {
  render() {
    const { label, onClick } = this.props;
    return <Container onClick={onClick}>{label}</Container>;
  }
}