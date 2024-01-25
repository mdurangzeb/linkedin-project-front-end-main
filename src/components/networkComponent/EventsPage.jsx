import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
// import Footer from '../../Footer'
import EventComponent from './EventComponent'

function EventsPage() {
  const [event, setEvent] = useState(false)
  return (
    <div className='mt-5 pt-4' style={{backgroundColor:"#f4f2ee", height:"100vh"}}>
      <NavBar />
      <div className='row event container-xl mx-auto pt-5'>
       <div className="col-9">
        <div className="card p-3">
            <div className="d-flex justify-content-between border-bottom p-2">
                <h5>Events</h5>
                <Link to='' className='fw-bold' onClick={() => setEvent(!event) }>
                  <button className='btn btn-outline-primary rounded-pill'>Create</button>
                </Link>
                {/* <Link className='fw-bold'>Create</Link> */}
            </div>
            <div className='d-flex justify-content-center'>
                <div className='text-center'>

                <img className='' src="https://media.istockphoto.com/id/1430871384/vector/event-planner-template-hand-drawn-cartoon-flat-illustration-with-planning-schedule-time.jpg?s=612x612&w=0&k=20&c=Aa-8uNDJCHmiilHB5A9-VYrbUmy5GhYG4VIfEtr9hmE=" alt="" />
                <p className='fw-bold fs-3'>Events</p>
                <p>Looks like you are not attending any events.</p>
                </div>
            </div>
        </div>
       </div>
       <div class="col-3">
            <div className="card p-3 text-center ">
            <p>Get the latest jobs and industry news</p>
            <div className="d-flex align-self-center">

            <img className='' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
            </div>
            <p>Md Aurangzeb, explore relevant opportunities with Mavenir</p>
            <button className='btn btn-primary fw-bold'>Follow</button>
          </div>
          <div className=" mt-3 p-1">
              {/* <Footer />     */}
            </div>
            </div> 
                  
         </div>

         {event && 
         <>
         
          <div style={{
            position:"fixed",
            width:"100%",
            height:"100%",
            backgroundColor:"black",
            top:"0",
            left:"0",
            opacity:"0.65"
          }}  onClick={() => setEvent(!event)}>

            </div>
         <EventComponent />

            </>
         }


    </div>
  )
}

export default EventsPage
