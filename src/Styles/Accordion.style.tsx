import styled from "styled-components";

export const Wrapper = styled.article`
  padding: 1rem 1.5rem;
  border: 2px solid #eae6eb;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const QuestionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionButton = styled.button`
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
`;

export const Answer = styled.p`
  color: hsl(209, 34%, 30%);
  margin-bottom: 0;
  margin-top: 0.5rem;
`;
