import React from 'react'
import data from 'D:/React/OnlineTest/my-app/src/QuizData/GsData.json';

export const Result = () => {
 let selectAns = ["Hydrogen sulphid","Phosphorous","Magnesium","Graphite","Tin"]
 let correct = data.map(x => x.correctAns);
 const check = () => {
  for(let i = 0 ; i<selectAns.length; i++){
    for(let a = 0; a<correct.length; a++){
      if(selectAns[i] === correct[a]){
        <p>{"Correct Ans"}</p>
      }
      else{
        <p>{"Wrong Ans"}</p>
      }
    }
  }
 }
  return (
    <>
    {
      <check/>
    }
    <div>
      {

      }
    </div>
    
    <div>
       {

        //<p>{correct}</p>
        <p>{selectAns[0].toString() === correct[0].toString()? "CorectAns" :"WrongAns" } <br /></p>
       }
    </div>
    <div>
       {
        //<p>{correct}</p>
        <p>{selectAns[1].toString() === correct[1].toString()? "CorectAns" :"WrongAns" } <br /></p>
       }
    </div>
    <div>
       {
        //<p>{correct}</p>
        <p>{selectAns[2].toString() === correct[2].toString()? "CorectAns" :"WrongAns" } <br /></p>
       }
    </div>
    <div>
       {
        //<p>{correct}</p>
        <p>{selectAns[3].toString() === correct[3].toString()? "CorectAns" :"WrongAns" } <br /></p>
       }
    </div>
    <div>
       {
        //<p>{correct}</p>
        <p>{selectAns[4].toString() === correct[4].toString()? "CorectAns" :"WrongAns" } <br /></p>
       }
    </div>
    <div>
    </div>
    </>
  )
}
export default Result;
