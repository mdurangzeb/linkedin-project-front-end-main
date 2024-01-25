import React, { useState } from 'react'
import companies from './RecomdedJobsData'
// import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
// import Footer from './Footer';
// import SingleJobComponent from './SingleJobComponent';
   
function Myjobs() {
  const [showmyApplied, setShowApplied] = useState(true)
  const [selectedId, setSelectedId]  = useState(null)
  // console.log( `id from jobs ${selectedId}`)
  const handletoggles = () => {
    setShowApplied(!showmyApplied)
}
  const handleId = (id) => {
    setSelectedId(id)
  }
  const jobData =  companies[selectedId - 1]

    const interviewQuestions = [
        {
          question: 'What is the significance of RESTful API in web development?',
          answer: 'RESTful API (Representational State Transfer) is a standard architectural style for designing networked applications. It relies on a stateless communication between client and server, making it scalable and suitable for distributed systems. RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) for communication and are commonly employed in web development to facilitate interoperability between different systems.',
        },
        {
          question: 'Explain the differences between var, let, and const in JavaScript.',
          answer: 'In JavaScript, var, let, and const are used to declare variables. The main differences are in their scope and mutability. var has function scope, let has block scope, and const also has block scope but cannot be reassigned after initialization. Variables declared with var are hoisted to the top of their scope, which may lead to unexpected behavior. let and const, introduced in ECMAScript 6, provide more predictable scoping and prevent accidental reassignments.',
        },
        {
          question: 'What is the significance of version control, and which version control systems have you used?',
          answer: 'Version control is crucial in software development for tracking changes, collaborating with team members, and maintaining code history. It helps manage codebase versions, rollback changes, and merge contributions seamlessly. Some commonly used version control systems include Git, Mercurial, and SVN. Git is widely adopted due to its distributed nature, branching capabilities, and compatibility with platforms like GitHub and GitLab.',
        },
      ];

      const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 7;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const visibleCompanies = companies.slice(
    (currentPage - 1) * companiesPerPage,
    currentPage * companiesPerPage
  );
      
      
  return (
    <div style={{backgroundColor:"#f4f2ee"}} className='py-5'>
        {/* <NavBar /> */}
        <NavBar/>
        {showmyApplied ? 
        (<div class="row myjobspage container-xl mx-auto pt-5" >

            <div class="col-3 ">
             <div className="card border ">
                <div className='p-3 '>
                <i class="bi bi-bookmark-fill"></i> {' '}
                My items
                </div>
                <div className="border">

                <div className=" p-3  d-flex justify-content-between border-start border-primary border-5">
                    <div>My Jobs</div>
                    <div>25</div>
                </div>
                </div>
             </div>
             {/* <Footer /> */}
            </div>
            <div class="col-6">
              <div className="card border">
              <img src="https://media.licdn.com/dms/image/C4E12AQHvIPoBFYjKqw/article-cover_image-shrink_600_2000/0/1520161446460?e=2147483647&v=beta&t=OMVbZrP3aOZBK-O6Risxlt_8tmPCeH20Sf43xxmB_JQ" style={{height:"250px", objectFit:"cover"}} alt="" />

                <div className="border-bottom p-3">

                <div className='d-flex justify-content-between'>

                <h4>My Jobs</h4>
                <button className='btn btn-success fw-bold rounded-pill'>Applied</button>
                </div>
              </div>
                <div className='border-bottom'>
                    {visibleCompanies.map((data) => {
                        return(<>
                         <div className='d-flex p-2' onClick={() => handleId(data.id)}>
                            <div>

                            <img style={{width:"100px", height:"70px", objectFit:"contain"}} className='img-fluid' src={data.logoImage} alt="" />
                            </div>
                            <div className='d-flex justify-content-between border-bottom  w-100'>
                                 <div style={{fontSize:"12px"}} className='p-2'>
                                    <h6 className='fw-bold'><Link onClick={() => setShowApplied(!showmyApplied)}>{data.position}</Link></h6>
                                    <div>{data.name}</div>
                                    <div>{data.location}</div>
                                 </div>

                            <div>
                            <i class="bi bi-three-dots p-3 my-3"></i>
                            </div>
                            </div>

                         </div>
                        </>)
                    })}
                </div>
                <div className='p-3'>
        <div className='d-flex justify-content-between' style={{cursor:"pointer"}}>
          <div onClick={handlePrevPage}>
            <i className="bi bi-caret-left-fill"></i> Previous
          </div>
          <div>
            {/* Display page numbers dynamically */}
            {Array.from({ length: Math.ceil(companies.length / companiesPerPage) }, (_, index) => (
              <span
                key={index}
                className={currentPage === index + 1 ? 'mx-3 active' : 'mx-3'}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <div onClick={handleNextPage}>
            Next <i className="bi bi-caret-right-fill"></i>
          </div>
        </div>
        </div>
                </div>
            </div>
            <div class="col-3">
            <div className="card p-3  border">
                <div>Md Aurangzeb, learn what hiring managers look for in answers to top interview questions</div>
                <div className='my-3'>
                    {interviewQuestions.map((data) => {
                        return(<>
                         <div className='d-flex mt-3 h-25 align-items-start' style={{fontSize:"12px"}}>
                            <img style={{width:"100px", objectFit:"contain"}} src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,c_pad,q_auto,f_auto/v1704349419/1704349419_351x351.jpg" alt="" />
                              <div className='border-bottom p-1'>{data.question}</div>
                         </div>
                        </>)
                    })}
                <div className='text-center mt-3'>
                  <Link to='/interview-preparation/jobs'>See all question</Link>
                  </div>
                </div>
            </div>
            </div>
        </div>) : 
        (  <div className='pt-5 singleJobComponent container-xl mx-auto fs-5 '>
        <div className=' d-flex justify-content-end'>
            <button className='btn btn-success ' onClick={handletoggles}>back to MyJobs</button>
        </div>
        <div class="row py-3 pb-5" >
           
            <div class="col-12">
             <div className="card p-3 py-4 px-4"style={{height:"85vh", overflowY:"scroll"}}>
             <img style={{height:"300px", objectFit:"contain"}} src={jobData.logoImage} alt="" />
                <div className='d-flex justify-content-between mt-5'>
                    <h1 className='fw-bold'>{jobData.position}</h1>
                    <div>
                    <div title='GO Back'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={handletoggles} width="30" style={{cursor:"pointer"}} height="30" fill="currentColor" class="mx-4 bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"/>
                        </svg>
                    </div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                        </svg>
                    </div>
                </div>
                <div><i class="bi bi-building-fill mx-2"></i>{jobData.name}-{jobData.offices[0].city}, {jobData.offices[0].country} 1 week ago - {jobData.foundedYear}</div>
                <div className='my-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suitcase-lg-fill mx-2" viewBox="0 0 16 16">
                    <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z"/>
                    </svg>
                    <button className='btn btn-secondary btn-sm mx-2'>Remote</button>{'- '}
                    <button className='btn btn-secondary btn-sm'>Full-time</button>
                </div>
                <p><i class="bi bi-people-fill mx-2"></i>{jobData.employees}-250 Empolyees</p>
                <p><i class="bi bi-person-vcard-fill mx-2"></i>{jobData.founders[0]} is hiring for this job</p>
                <ul>{jobData.aboutValues.map((data) => <li className='d-flex'>{data}, is skills match your profile - you may be a good fit</li>)}</ul>
                <p><i class="bi bi-mailbox-flag mx-2"></i>Job poster joined LinkedIn in {jobData.foundedYear}</p>
                <div className='my-3 insidebtn '>
                    <button className='fs-5 btn btn-primary rounded-pill'><i class="bi bi-linkedin mx-2"></i>Easy Apply</button>
                    <button className='btn fs-5 btn-outline-primary rounded-pill mx-3'>Save</button>
                </div>
                {/* about............... */}
                <div className='border p-3 my-3 rounded-4 aboutjob'>
                    <h4 className='fw-bold'>About the job</h4>
                    <p>{jobData.name} as a {jobData.position} JD</p>
                    <p>{jobData.about}</p>
                    <p>Are you passionate about bringing concepts to real life? </p>
                    <p>{jobData.aboutCulture}</p>
                    <p className='d-flex flex-wrap'>{jobData.aboutValues.map((data) => <><div>{data } { ' ,  '} </div></>)}</p>
                    <p className='d-flex flex-wrap'>{jobData.aboutPerks.map((data) => <><div>{data} { " , " } </div></>)}</p>
                </div>
                <div>
                    <div className='my-4'>

                    <h4><i class="bi bi-list-check mx-2"></i>Roles & Resposibilites</h4>
                    <p className='mx-5'>{jobData.responsibilities.map((data) => <><li>{data}.</li></>)}</p>
                    <h4><i class="bi bi-list-check mx-2"></i>Qualifications & Requirements</h4>
                    <p className='mx-5'>{jobData.qualifications.map((data) => <><li>{data}.</li></>)}</p>
                    <p className='mx-5'>{jobData.technologiesUsed.map((data) => <><li>{data}.</li></>)}</p>
                    </div>
                </div>
                <div className='border rounded-4 p-3'>
                    <h4 className='fw-bold my-2'>Details of the Company</h4>
                    <p><i class="bi bi-building-fill mx-2"></i>Company Name : {jobData.name}</p>
                    <p><i class="bi bi-people-fill mx-2"></i>{jobData.employees} Employees & {jobData.companySize} scale Industry</p>
                    <p><i class="bi bi-globe2 mx-2"></i>Company Website : {jobData.website}</p>
                    <p className='mb-5'><i class="bi bi-envelope-fill mx-2"></i>Company E-mail : {jobData.contactEmail}</p>
                    <h4 className=''><i class="bi bi-cast mx-2"></i>Projects</h4>
                    <ol className='border-bottom mx-5'>{jobData.projects.map((data) => <><div><li>{data}</li></div></>)}</ol>
                    <h4><i class="bi bi-person-raised-hand mx-2"></i>Our Parterns</h4>
                    <p className='border-bottom mx-5'>{jobData.partnerships.map((data) => <><li>{data}</li></>)}</p>
                    <h4><i class="bi bi-award-fill mx-2"></i>Achivements and Awards</h4>
                    <p className='mx-5'>
                    <div>{jobData.awards.map((data) => <><li>{data}</li></>)}</div>
                    <div>{jobData.achievements.map((data) => <><li>{data}</li></>)}</div>
                    </p>
                    <p>{jobData.about}</p>

                </div>
                
             </div>
            </div>
        </div>
    </div>)}


    </div>
  )
}

export default Myjobs