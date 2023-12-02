import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.h1`
  margin-top: 0;
`;

// 인터페이스를 통해 label이라는 필수 Props를 정의
interface Props {
    readonly label: string;
}

export const Title = ({ label }: Props ) => {
    return (
        <Container>
            <Label>{label}</Label>
        </Container>
    );
};