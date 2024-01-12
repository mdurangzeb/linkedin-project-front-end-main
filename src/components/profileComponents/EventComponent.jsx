import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function EventComponent({eventComponent, seteventComponent, setShowMediaComponent, showMediaComponent, onSubmit }) {

  const [formDataevent, setFormDataevent] = useState({
    eventType: '',
    firstName: '',
    lastName: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    description: ''
  });
  // console.log(formDataevent)

  const handleChangeevent = (e) => {
    setFormDataevent({
      ...formDataevent,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitevent = async (e) => {
    e.preventDefault();
  
    try {
      // Assuming you have a server endpoint for handling the form data
      const response = await axios.post('http://localhost:9099/create/an/event/event', formDataevent);
  
      // Handle success, e.g., show a success message or redirect
      setFormDataevent(response.data);
      console.log(response.data);
      setShowMediaComponent(!showMediaComponent)
      seteventComponent(!eventComponent)
      onSubmit(formDataevent);

    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error submitting form:', error);
    }
  };
  
   



  return (
    <div className='' style={{
        position:"fixed",
        top:"100px",
        left:"25%",
    }}>
      <div class="card  eventcard p-3 " style={{height:"auto", width:"1000px"}}>
  <div class="card-header fw-bold d-flex justify-content-between">
    <h2>Create an event</h2>
    <button className='btn btn-primary px-3 ' onClick={() => seteventComponent(!eventComponent)}>close</button>
  </div>
  <div class="card-body">
    {/* ......event form.......... */}
      <form class="row g-3" onSubmit={handleSubmitevent}>
      <div className="col-12">
        <h5>Event Type</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="online"
            name="eventType"
            value="online"
            onChange={handleChangeevent}
          />
          <label className="form-check-label" htmlFor="online">
            Online
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="inPerson"
            name="eventType"
            value="inPerson"
            onChange={handleChangeevent}
          />
          <label className="form-check-label" htmlFor="inPerson">
            In-Person
          </label>
        </div>
      </div>

      <div className="col-md-6">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          onChange={handleChangeevent}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          onChange={handleChangeevent}
        />
      </div>

      <div className="col-6">
        <label htmlFor="startDate" className="form-label">Start Date</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          name="startDate"
          onChange={handleChangeevent}
        />
      </div>

      <div className="col-6">
        <label htmlFor="startTime" className="form-label">Start Time</label>
        <input
          type="time"
          className="form-control"
          id="startTime"
          name="startTime"
          onChange={handleChangeevent}
        />
      </div>

      <div className="col-6">
        <label htmlFor="endDate" className="form-label">End Date</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          name="endDate"
          onChange={handleChangeevent}
        />
      </div>

      <div className="col-6">
        <label htmlFor="endTime" className="form-label">End Time</label>
        <input
          type="time"
          className="form-control"
          id="endTime"
          name="endTime"
          onChange={handleChangeevent}
        />
      </div>

      <div className="col-12">
        <label htmlFor="description" className="form-label">Description</label>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="description"
            name="description"
            style={{ height: "100px" }}
            onChange={handleChangeevent}
          ></textarea>
          <label htmlFor="description">Ex: topics, schedules, etc</label>
        </div>
      </div>
  
 
      <p className='mt-4'>By continuing, you agree with  <Link>LinkedIn’s event policy.</Link> </p>
    
  <div class="card-footer text-body-secondary d-flex justify-content-end">
    <button className='btn btn-primary px-3 ' type='submit'>next</button>
  </div>
      </form>
  </div>
</div>

    </div>
  )
}

export default EventComponent
