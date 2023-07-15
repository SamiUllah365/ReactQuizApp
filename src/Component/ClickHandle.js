import data from '../QuizData/GsData.json';
//import data from 'D:/React/OnlineTest/my-app/src/QuizData/GsData.json';
import Result from './Result.js';
import React, { useState } from 'react'

export const ClickHandle = () => {

    const [check, setCheck] = useState('');
    // const checkTextInput = () => {
    //     //Check for the Name TextInput
    //     if (textInputName.length === 0) {
    //       alert('Please Select a option');
    //       return;
    //     }
    //     alert("Check box value is :")
    // }
        
    return (
        <>

            <div className="container-fluid d-block cardDiv">
                <div className="card mb-2 mt-2" style={{ width: "75%" }}>

                    {   
                        data.map((x, index) => (
                            <div className="card-body" id='card1'>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: ++index * 175 }} aria-valuenow="" aria-valuemin="0" aria-valuemax="100" >{index}/5</div>
                                </div>
                                <h4>{check}</h4>
                                <h5 className="card-title ques">Question {x.Question}</h5>
                                {
                                    x.Options.map(opt => (
                                        <div className="form-check" >
                                            <input className="form-check-input" name='group' type="radio" value="" id="defaultCheck1" onChange={e => setCheck(e.target.name)} />
                                            <label className="form-check-label" for="defaultCheck1">
                                                {opt}
                                            </label>
                                        </div>
                                    ))
                                }
                                <a href='#' id='next' className="btn" >Next</a>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <a href="Submit" id='sbt' onClick={Result} className="btn">Quiz Submit</a>
                </div>
            </div>
        </>
    )

    }

export default ClickHandle;