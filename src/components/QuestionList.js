import React,{useEffect, useState} from "react";
// import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";


function QuestionList({onUpdate}) {
  const [questions,setQuestions]= useState ([])
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((r)=>r.json())
    .then((data)=>setQuestions(data));
  },[]);

  function handleDeleteQuestion(deletedQuestion){
    const updateQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updateQuestions);
   
  }

  function addQuestion(item){
    setQuestions([...questions, item]);
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      {/* <QuestionForm onAddItem={addQuestion}/> */}
      <ul>{/* display QuestionItem components here after fetching */}
        {questions.map((data)=> 
        <QuestionItem
        key={data.id}
        question={data}
        onAddItem ={addQuestion}
        onDeleteQuestion ={handleDeleteQuestion}
        onUpdate={onUpdate}
        />
        
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
