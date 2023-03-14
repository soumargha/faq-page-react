import "./App.css";
import Questions from "./Questions";

function App() {
  return (
    <>
      <h1>FAQ page: your Questions solved</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => 
            <Questions key={question.id} question={question} />
            
          )}
          

        </div>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "what are its benifits",
    info:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias velit aperiam quam, odit quibusdam tempora accusamus ullam expedita modi eos nisi maiores eius, repudiandae, dolorem enim id at veritatis ipsum ab eligendi. Illum, perferendis tenetur pariatur a inventore repudiandae. Molestias provident quisquam accusamus quas reiciendis. Debitis sint deleniti voluptatibus quidem reprehenderit, iure perspiciatis tenetur totam culpa laborum inventore! Dicta.",
  },

  {
    id: 2,
    title: "how to use",
    info:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias velit aperiam quam, odit quibusdam tempora accusamus ullam expedita modi eos nisi maiores eius, repudiandae, dolorem enim id at veritatis ipsum ab eligendi. Illum, perferendis tenetur pariatur a inventore repudiandae. Molestias provident quisquam accusamus quas reiciendis. Debitis sint deleniti voluptatibus quidem reprehenderit, iure perspiciatis tenetur totam culpa laborum inventore! Dicta.",
  },
  {
    id: 3,
    title: "who can use it",
    info:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias velit aperiam quam, odit quibusdam tempora accusamus ullam expedita modi eos nisi maiores eius, repudiandae, dolorem enim id at veritatis ipsum ab eligendi. Illum, perferendis tenetur pariatur a inventore repudiandae. Molestias provident quisquam accusamus quas reiciendis. Debitis sint deleniti voluptatibus quidem reprehenderit, iure perspiciatis tenetur totam culpa laborum inventore! Dicta.",
  },
  {
    id: 4,
    title: "dosage",
    info:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestias velit aperiam quam, odit quibusdam tempora accusamus ullam expedita modi eos nisi maiores eius, repudiandae, dolorem enim id at veritatis ipsum ab eligendi. Illum, perferendis tenetur pariatur a inventore repudiandae. Molestias provident quisquam accusamus quas reiciendis. Debitis sint deleniti voluptatibus quidem reprehenderit, iure perspiciatis tenetur totam culpa laborum inventore! Dicta.",
  }
  
];



export default App;
