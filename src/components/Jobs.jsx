// import React from 'react'
import NavBar from './NavBar'
// import network from './navImages/teamwork.png'
import checkperson from './networkimages/person-check.svg'
import calender from './networkimages/calendar2-event.svg'
import file from './networkimages/file-earmark.svg'
// import hash from './networkimages/hash.svg'
import paper from './networkimages/newspaper.svg'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import { Carousel } from 'react-bootstrap';
import test from '../assets/test.png'
import { useState } from 'react'
import ResumeBuilderpage from './jobsComponent/ResumeBuilderpage'



function Jobs({user,setUser}) {
  const [showPreferenceComponent, setshowPreferenceComponent] = useState(false)

  const [showResumeCard, setshowResumeCard]  = useState(false)
  return (
    <div style={{backgroundColor:"#f4f2ee"}} className='mt-5'>
      <NavBar user={user} setUser={setUser} />
      <div class="row job container-xl mx-auto py-5">
        <div class="col-2">
          <div className="card p-1 shadow  " style={{fontSize:"14px"}}>
          <div className='d-flex mt-3'>
          <i class="bi bi-bookmark-fill mx-2"  style={{width:"20px", height:"20px"}}></i>
                <Link to="myjobs">My jobs</Link>
              </div>
              <br />
               <div className='d-flex'>
                <img src={checkperson} className='mx-2' style={{width:"20px", height:"20px"}} alt="" />
                <Link onClick={() => setshowPreferenceComponent(!showPreferenceComponent)}>

                <p>Preference</p>
                </Link>
              </div>
              <div className='d-flex'>
              <i class="bi bi-journal-check mx-2" style={{width:"20px", height:"20px"}}></i>
              <p>Skill Assessment</p>
              </div>
              <div className='d-flex'>
               <img src={calender} className='mx-2' style={{width:"20px", height:"20px"}} alt="" />
                <Link to="/IntrerviewPrepComp">Intrerview Prep</Link>
              </div>
              <br />
              <div className='d-flex'>
                <img src={file} className='mx-2' style={{width:"20px", height:"20px"}} alt="" />
                <Link onClick={() => setshowResumeCard(!showResumeCard)}  to="">Resume Builder</Link>
              </div>
              <br />
              <div className='d-flex'>
                <img src={paper} className='mx-2' style={{width:"20px", height:"20px"}} alt="" />
                <Link to="/JobSeekPage">Job seeker guidance</Link>
              </div>
              <br />
              <div className='d-flex'>
              <i class="bi bi-gear-fill mx-2" style={{width:"20px", height:"20px"}}></i>
                              <p>Application settings</p>
              </div>
              
          </div>
          <button className='btn btn-outline-primary w-100 py-3 rounded-pill  fw-bold mt-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square mx-2 " viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
            post a free job</button>
        </div>
        {/* center card............... */}
        <div class="col-7">
          <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div className="d-flex justify-content-between mt-3">
                  <h5 className='fw-bold'>Recent job searches</h5>
                  <p>Clear</p>
                </div>
                  <p>Front-End Developer <br />india Remote Search jobs</p>
              </li>
              <li class="list-group-item">
                <p>infanion <br />india</p>
              </li>
              <li class="list-group-item">
                <p>Freelance Jobs as frontend developer <br />india</p>
              </li>
            </ul>
          </div>
          {/* recommanded jobs........ */}
          <div className="card p-3 mt-3">
            <h5 className='fw-bold'>Recent job searches <br /></h5>
            <span>Based on your profile and search history</span>
          </div>
          {/* Hybrid opportunites...... */}
          <div className="card p-3 mt-3">
            <h5 className='fw-bold'>Hybrid opportunities <br /></h5>
            <span>Because you expressed interest in hybrid work</span>
          </div>
          {/* ..Explore collection of obs........ */}
          <div className="card p-3 mt-3">
            <h5 className='fw-bold'>Explore with job collections <br /></h5>
            <span>Broaden your job search with curated collections</span>
            <Carousel>
      <Carousel.Item className=''>
        <div className="d-flex justify-content-around h-100 my-3 text-center fw-bold ">
        <div className="card w-50 mx-1 border" style={{height:"200px"}}>
          <div className='h-50 d-flex align-self-center my-4 rounded-circle bg-primary-subtle w-50'>
            <img src={test} style={{width:"65px", height:"65px", top:"10px",left:"25px", position:"relative"}} alt="" />
          </div>
          <p>Bio-Technologie</p>
        </div>
        <div className="card w-50 mx-1 border" style={{height:"200px"}}>
          <div className='h-50 d-flex align-self-center my-4 rounded-circle bg-primary-subtle w-50'>
            <img src={test} style={{width:"65px", height:"65px", top:"10px",left:"25px", position:"relative"}} alt="" />
          </div>
          <p>IT-Sector</p>
        </div>
        <div className="card w-50 mx-1 border" style={{height:"200px"}}>
          <div className='h-50 d-flex align-self-center my-4 rounded-circle bg-primary-subtle w-50'>
            <img src={test} style={{width:"65px", height:"65px", top:"10px",left:"25px", position:"relative"}} alt="" />
          </div>
          <p>Medical-sector</p>
        </div>
        </div>
     
      </Carousel.Item>


      <Carousel.Item>
        <div className="d-flex justify-content-around h-100 my-3 text-center fw-bold">
        <div className="card w-50 mx-1 border" style={{height:"200px"}}>
          <div className='h-50 d-flex align-self-center my-4 rounded-circle bg-primary-subtle w-50'>
            <img src={test} style={{width:"65px", height:"65px", top:"10px",left:"25px", position:"relative"}} alt="" />
          </div>
          <p>Bio-Technologie</p>
        </div>
        <div className="card w-50 mx-1 border" style={{height:"200px"}}>
          <div className='h-50 d-flex align-self-center my-4 rounded-circle bg-primary-subtle w-50'>
            <img src={test} style={{width:"65px", height:"65px", top:"10px",left:"25px", position:"relative"}} alt="" />
          </div>
          <p>Remote</p>
        </div>
        <div className="card w-50 mx-1 border" style={{height:"200px"}}>
          <div className='h-50 d-flex align-self-center my-4 rounded-circle bg-primary-subtle w-50'>
            <img src={test} style={{width:"65px", height:"65px", top:"10px",left:"25px", position:"relative"}} alt="" />
          </div>
          <p>Governement</p>
        </div>
        </div>
     
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-start h-100 my-3 text-center fw-bold">
        <div className="card w-25 mx-1 border" style={{height:"200px"}}>
          <div className='h-50 d-flex align-self-center my-4 rounded-circle bg-primary-subtle w-50'>
            <img src={test} style={{width:"60px", height:"60px", top:"10px",left:"15px", position:"relative"}} alt="" />
          </div>
          <p>Enginerring</p>
        </div>
        <div className="card w-25 mx-1 border" style={{height:"200px"}}>
          <div className='h-50 d-flex align-self-center my-4 rounded-circle bg-primary-subtle w-50'>
            <img src={test} style={{width:"60px", height:"60px", top:"10px",left:"15px", position:"relative"}} alt="" />
          </div>
          <p>show all</p>
        </div>
      
        </div>
     
      </Carousel.Item>
    </Carousel>
    </div>


            {/* remote opportunites...... */}
            <div className="card p-3 mt-3">
            <h5 className='fw-bold'>Remote opportunities <br /></h5>
            <span>Because you expressed interest in remote work</span>
          </div>
        </div>
        <div class="col-3">
          <div className="card" style={{fontSize:"12px"}}>
            <div className='p-3'>

            <p className='fw-bold fs-6'>Job seeker guidance</p>
            <div>Recommended based on your activity</div>
            </div>
            <div className='d-flex border align-items-center py-2 p-2 fs-6' style={{backgroundColor:"#f8fafd"}}>
              <p>i want improve my resume</p>
              <img src="https://image.pngaaa.com/928/1143928-small.png" style={{width:"80px", height:"80px"}} alt="" />
            </div>
            <p className='p-2'>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
             <Link className='fw-bold fs-5 p-3'>show more</Link>
          </div>
          <div className='' style={{fontSize:"12px"}}>

          {showPreferenceComponent ?
       <>
          <div style={{
            position:"fixed",
            width:"100%",
            height:"100%",
            backgroundColor:"black",
            top:"0",
            left:"0",
            opacity:"0.65"
          }}  onClick={() => setshowPreferenceComponent(!showPreferenceComponent)}>

            </div>
            <div className="card w-25 h-auto preferenceCard" style={{position:"fixed", top:"120px", left:"35.5%"}}>
              <div className="d-flex justify-content-between p-3 border-bottom px-4">
                <h5 className='fw-bold'>preference</h5>
                <i class="bi bi-x-lg"></i>
              </div>
              <div className="d-flex justify-content-between px-4 p-3 border-bottom " style={{fontSize:"12px"}}>
                <div>

                <h6 className='fw-bold'>Open to work</h6>
                <div>Job preferences to see all the Linkedin Members</div>
                </div>
                <i class="bi bi-arrow-right"></i>
                </div>
                <div className="d-flex justify-content-between px-4 p-3 border-bottom " style={{fontSize:"12px"}}>
                <div>

                <h6 className='fw-bold'>Job alerts</h6>
                <div>Javascript developer and other</div>
                </div>
                <i class="bi bi-arrow-right"></i>
                </div>
                <div className="d-flex justify-content-between px-4 p-3 " style={{fontSize:"12px"}}>
                <div>

                <h6 className='fw-bold'>pay</h6>
                <div>privately indicate desired pay details</div>
                </div>
                <i class="bi bi-arrow-right"></i>
                </div>
            </div>
      </> : <><div>{null}</div></>}

      {showResumeCard ?
       <>
          <div style={{
            position:"fixed",
            width:"100%",
            height:"100%",
            backgroundColor:"black",
            top:"0",
            left:"0",
            opacity:"0.65"
          }}  onClick={() => setshowResumeCard(!showResumeCard)}>

            </div>
            <div className="">
              <ResumeBuilderpage  setshowResumeCard={setshowResumeCard} showResumeCard={showResumeCard}  />
            </div>
      </> : <><div>{null}</div></>}

          <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
