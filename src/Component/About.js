import React from 'react'

export const About = () => {
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title text-center">Prepare your test <br /> with TestFellow</h5>
                    <img src="online.jpg" className="card-img-top" alt="..." style={{ width: "100%", height: 350 }} />
                    <p className="card-text mt-5"><ul>
                        <li>Free Practice Test</li>
                        <li>Study Material</li>
                        <li>Exam Tips</li>
                        <li>Online Quizzes</li>
                    </ul></p>
                    <p className="card-text text-center"><small className="text-muted text-center">Online test fellow.com</small></p>
                </div>
            </div>
            <div className="container">
                <h3 className='text-center'>About</h3>
                <p style={{textAlign:"justify"}}>Online quizzes have become increasingly popular as a form of interactive learning and assessment in the digital age. These quizzes provide an engaging platform for individuals to test their knowledge and skills on a wide range of topics. Whether it's academic subjects, general knowledge, or even pop culture, there seems to be an online quiz available for just about any interest.

One of the significant advantages of online quizzes is their accessibility. With the advent of the internet, anyone with a computer or smartphone and an internet connection can participate in quizzes from the comfort of their own homes. This convenience has made online quizzes a go-to option for students, professionals, and enthusiasts alike who want to gauge their understanding of a subject or challenge themselves intellectually.

Another benefit of online quizzes is their versatility. They can be designed in various formats, such as multiple-choice questions, fill-in-the-blanks, true or false, or even interactive puzzles. This flexibility allows quiz creators to tailor their assessments to specific learning objectives, making them a valuable tool in educational settings. Online quizzes can be used as formative assessments during the learning process, helping learners identify areas of strength and weakness while providing immediate feedback.</p>
            </div>
        </>
    )
}

export default About;
