import React from 'react'

function ResumeBuilderpage({setshowResumeCard, showResumeCard}) {
  return (
    <div className='resumebuilder'>
      <div className="card h-75 border" style={{position:"fixed", top:"120px", left:"35.5%", width:"700px", fontSize:"14px"}}> 
      <div className="p-3">
        <div className="d-flex justify-content-between ">
            <div>
            <h4 className='fw-bold'>Select a resume</h4>
            <div>Get insights for formatting issues, keywords, and more.</div>
            </div>
            <div onClick={() => setshowResumeCard(!showResumeCard)} style={{cursor:"pointer"}}><i class="bi bi-x-lg"></i></div>
        </div>
      </div>
        <div style={{backgroundColor:"#edf3f8"}}>
            <p className='p-3'>Supported upload formats: 5MB max in .DOCX or .PDF</p>
        </div>
        <div className="p-3 h-75 border-bottom bottom-3">
        <div className="d-flex justify-content-between ">
            <div>
            <div className='fw-bold'>Resume-Md Aurangzeb-pdf.</div>
            <div>Edited on January 11, 2024 at 11:51 AM</div>
            </div>
            <div><i class="bi bi-three-dots"></i></div>
        </div>
      </div>
      <div className='d-flex align-items-end justify-content-end  p-3'>
        <button className='btn btn-primary rounded-pill mx-3'>create a profile</button>
        
      </div>
        
      </div>
    </div>
  )
}

export default ResumeBuilderpage