import { useState } from "react";
import { Answer, QuestionButton, QuestionHeader, Wrapper } from "../Styles/Accordion.style";

interface Props {
  title: string;
  info: string;
}
const Question = ({ title, info }: Props) => {
  const [showAnswer, setShowAnswer] = useState<Boolean>(false);
  return (
    <Wrapper className="question">
      <QuestionHeader>
        <h4>{title}</h4>
        <QuestionButton className="btn" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <span>❌</span> : <span>➕</span>}
        </QuestionButton>
      </QuestionHeader>
      {showAnswer && <Answer>{info}</Answer>}
    </Wrapper>
  );
};

export default Question;
