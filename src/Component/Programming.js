import React, { useState } from 'react'
import ProData from '../QuizData/ProgrammingData.json';

export const Programming = () => {


  let [currentQuiz, setCurrentQuiz] = useState('')

  let [currentIndex, setCurrentIndex] = useState(0);

  let [show, setShow] = useState('true');

  let [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  let [result, setResult] = useState(null);

  let [showResultCard, setShowResultCard] = useState(null);

  let [correct , setCorrect] = useState(0);

  const Quiz = () => {
    currentQuiz = 'ProQuiz';
    setCurrentQuiz(currentQuiz)
    show = 'false';
    setShow(show);
  }

  const onOptionSelected = (selectedOptionIndex) => {
    setSelectedOptionIndex(selectedOptionIndex);

    //   if(selectedOptionIndex === questions[currentIndex].correctOptionIndex )
    //     alert("active");
    //   else
    //     alert("Wrong");
};

  const next = () => {
    
    if (selectedOptionIndex === ProData[currentIndex].correctAns) {
      //Correct.push(selectedOptionIndex)
       //alert(selectedOptionIndex)
       correct = correct + 1
       setCorrect(correct)
       console.log(correct)
    }
    // else {
    //   //Wrong.push('false')
    //    alert(Wrong.length)
    // }
    setCurrentIndex(currentIndex + 1)
    setSelectedOptionIndex(null);
    if (currentIndex === ProData.length - 1) {
      result = 'true';
      setResult(result);
      currentQuiz = '';
      setCurrentQuiz(currentQuiz);
    }
  }

  const Result = () => {
    showResultCard = 'true';
    setShowResultCard(showResultCard);
    setResult(null)

}

const Retake = () => {
    setCurrentIndex(0)
    currentQuiz = 'ProQuiz';
    setCurrentQuiz(currentQuiz);
    setShowResultCard(false);
    
}

  return (
    <>
      {
        show === 'true' &&

        <div className="container text-center mt-2">
          <div className="card" style={{ width: "100%" }}>
            <img src="Pro.avif" className="card-img-top startImg" alt="..." style={{ height: 400 }} />
            <div className="card-body">
              <h5 className="card-title">Programming Quiz</h5>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              {/* <a href="#" className="btn btn-primary">Quiz Start</a> */}
              <a className="btn btn-primary startQuiz" onClick={Quiz}>Quiz Start</a>
            </div>
          </div>
        </div>
      }

      {
        currentQuiz === 'ProQuiz' &&

        <div className="container-fluid d-block cardDiv">
          <div className="card mb-2 mt-2" style={{ width: "75%" }}>
            <h5 className="card-title text-center">Programming Quiz</h5>

            <div className="card-body" id='card1'>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: ProData[currentIndex].Id * 200 }} aria-valuenow="" aria-valuemin="0" aria-valuemax="100" >{ProData[currentIndex]?.Id}/5</div>
              </div>
              <h5 className="card-title ques">Question {ProData[currentIndex]?.Question}</h5>
              {
                ProData[currentIndex]?.Options.map((opt,index) => (
                  <ul className="list-group list-group-flush">
                  <li
                      className={selectedOptionIndex === index ? "list-group-item active" : "list-group-item"}
                      key={index}
                      text={opt}
                      onClick={() => onOptionSelected(index)}
                      //onChange={e => setSelectedOptionIndex(e.target.text)}
                      >
                      {opt}
                  </li>
              </ul>
                  // <div className="form-check" >
                  //   <input className="form-check-input" name='group' type="radio" value={opt} id="defaultCheck1" />
                  //   <label className="form-check-label" for="defaultCheck1">
                  //     {opt}
                  //   </label>
                  // </div>
                ))
              }
              <a href='#' id='next' className="btn" onClick={next}>Next</a>
            </div>
          </div>
        </div>
      }

{
                result === 'true' &&

                <div className="container">
                    <div className="row">
                        <a onClick={Result} id='sbt' className="btn">Show Result</a>
                    </div>
                </div>
            }

            {
                showResultCard === 'true' &&

                <div className="container-fluid d-block cardDiv text-center">
                    <div className="card mb-2 mt-2" style={{ width: "75%" }}>
                        <h5 className="card-title">Programming Quiz</h5>
                        <div className="card-body" id='card1'>
                            <h5 className="card-title ques"> Result </h5>
                            <p className="card-text">Correct Question: {correct}</p>
                            <p className="card-text">Total Questions: {ProData.length}</p>
                            <p className="card-text">Remark: {(correct/ProData.length)*100 > 80? "Excellent" :"Try again for better result"}</p>
                            <a id='next' className="btn" onClick={Retake}>Try Again</a>
                        </div>
                    </div>
                </div>
            }
    </>
  )
}
export default Programming;
