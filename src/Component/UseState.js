import React, { useState } from 'react'
import data from '../QuizData/GsData.json'
const UseState = () => {

    let [Mobile, setMobile] = useState(data)
    console.log(Mobile[0].Id + 1)
    const incre = (i) => {
        setMobile([{ ...Mobile, Id: Mobile[i].Id + 1 }])
    }



    return (
        <>
            {
                data.map((x, index) => (
                    <>
                            <h3>ID: {x.Id}</h3>
                            <h3>Question: {x.Question}</h3>
                            <h3>CorrectAns: {x.correctAns}</h3>
                            <button onClick={() => incre(index)}>Price Increase</button> <hr />
                    </>


                ))

            }
        </>
    )









    //     let [Count , setCount] = useState(0)

    //     const incre = () =>{
    //         setCount(Count + 1)
    //     }
    //     const deccre = () =>{
    //         setCount(Count - 1)
    //     }

    //   return (
    //     <>
    //     <h1> Counter: {Count}</h1>
    //     <button onClick={incre}>Increment</button>
    //     <button onClick={deccre}>deccrement</button>
    //     </>
    //   )
}

export default UseState