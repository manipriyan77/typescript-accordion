import "./App.css";
import data from "./data";
import Question from "./Components/Question";

function App() {
  const questions: { id: number; title: string; info: string }[] = data;
  return (
    <div className="container">
      <section className="info">
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
}

export default App;
