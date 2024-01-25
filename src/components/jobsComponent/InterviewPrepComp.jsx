import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import hrInterviewQuestions from '../jobsComponent/jobsQ&A';
// import Footer from '../../Footer';
// import { ToastContainer, toast } from "react-toastify";


function InterviewPrepComp() {
  const [selectedQuestionId, setSelectedQuestionId] = useState(0);

  const handleQuestionClick = (questionId) => {
    setSelectedQuestionId(questionId);
  };
  // const showToastMessage = () => {
  //   toast.success(`Question changed Succesfully`, {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

  useEffect(() => {
    // Set the initial question to display when the component mounts
    handleQuestionClick(0);
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div style={{ backgroundColor: "#f4f2ee" }} className='mt-5 pt-5 py-5 h-100'>
      <NavBar />
      <div className="row interviewPrep container-xl mx-auto">
      <div className="toast-container">
                      {/* <ToastContainer /> */}

                    </div>
        <div className="col-4 ">
          <div className="border card">
            <div className='d-flex justify-content-between align-items-start p-3 border-bottom'>
              <div>
                <h5>Common Question</h5>
                <p className=''>Total 21 questions</p>
              </div>
              <button className='btn btn-success rounded-pill'>Categories</button>
            </div>
            {hrInterviewQuestions.map((data, index) => (
              <div
                key={index}
                className='border-bottom'
                style={{ fontSize: "14px", cursor: "pointer" }}
                onClick={() => handleQuestionClick(index)}
              >
                <div className="p-3 d-flex justify-content-between" >
                  <p><span>{index + 1}.</span> {' '}{data.question}</p>
                  <i className={`bi ${selectedQuestionId === index ? 'bi-check-circle-fill' : ''}`}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            {selectedQuestionId !== null && (
                <>
                
              <div className="p-5 bg-light">
                <h5 className='fw-bold'>{hrInterviewQuestions[selectedQuestionId].question}</h5>
                <div className="d-flex align-items-center">

                <button className='btn btn-primary rounded-pill  my-3'>Pratice and get feefback</button>
                <div>15,252,556 people answerd this questions</div>
                </div>
              </div>
                <div className='p-3' style={{fontSize:"14px"}}>
                   <h6>Overview</h6>
                <p><strong></strong> {hrInterviewQuestions[selectedQuestionId].overview} Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem reprehenderit temporibus deleniti ipsum fugiat blanditiis quod, neque placeat facilis, ex beatae velit, ea aliquid id cum architecto quos adipisci.</p>
                </div>
           
                </>
            )}
          </div>
          <div className="card mt-3 p-3">
                    <h5 className='my-3 fw-bold'>Answer FrameWork</h5>
            <div className="d-flex border rounded-5 align-items-center justify-content-between">
                <div className='d-flex'>

                <img className='tutorimg' style={{width:"150px", objectFit:"cover"}} src="https://career.guru99.com/wp-content/uploads/2014/11/performance-testing-interview-questions.png" alt="" />
                <div className='mx-3 fw-bold p-3'>
                 <div>{hrInterviewQuestions[selectedQuestionId].reference.name}</div>
                 <div>{hrInterviewQuestions[selectedQuestionId].reference.videoLink}</div>
                </div>
                </div>
                <div>

                <button className='btn btn-outline-primary mx-3 rounded-pill'>view</button>
                </div>
            </div>
            <div className='my-5'>

            <p><span className='fw-bold'>Answer</span> : {hrInterviewQuestions[selectedQuestionId].answer}</p>
            <p><span className='fw-bold'>Explanation</span>  : {hrInterviewQuestions[selectedQuestionId].explanation}</p>
            <p><span className='fw-bold'>Summary</span>  : {hrInterviewQuestions[selectedQuestionId].summary}</p>
            </div>
          </div>
          <div className="card p-3 mt-3">
            <h5>Tips    </h5>
                <ul>
                  {hrInterviewQuestions[selectedQuestionId].tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                      ))}
                </ul>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default InterviewPrepComp;