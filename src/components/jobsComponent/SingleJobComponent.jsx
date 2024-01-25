import React, { useState } from 'react'
import compaines from './RecomdedJobsData'
import { Link } from 'react-router-dom'
// import Footer from '../../Footer'
import companies from './RecomdedJobsData'
import { ToastContainer, toast } from "react-toastify";

    function SingleJobComponent({singlejob, setsinglejob, handleId, selectedId, showmyApplied, setShowApplied,showSinglejobPage, selectedid,setShowSingleJobpage}) {
      // const [selectedid, setselectedid] = useState(null) 
      const jobData =  compaines[selectedId - 1] || compaines[selectedid -1] 
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 4;
        const showToastMessage = () => {
          toast.success(`job profile changed Succesfully`, {
            position: toast.POSITION.TOP_CENTER,
          });
        };

       
      
        const handlePageChange = (page) => {
          setCurrentPage(page);
        };
      
        const paginatedCompanies = companies.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );


      return (
        <div className='pt-3 singleJobComponent container-xl mx-auto fs-5 '>
    
           
            <div class="row  pb-5" >
            <div className="">
                      <ToastContainer />

                    </div>
                <div class="col-4">
                    <div className="card rounded-4" style={{height:"auto"}}>
                    <div className='bg-primary px-4  py-4 text-white fw-bold fs-5'>
                        <h4>Jobs based on your profile</h4>
                        <p>24 results</p>
                    </div>
                    <div className='my-3' >
                    {paginatedCompanies.map((data) => {
                        return(<>
                        <div className=" rounded-4 d-flex justify-content-between  m-1 p-2" key={data.name} onClick={() => handleId(data.id)}>
                        <div className='d-flex'>

                        <img style={{width:"70px"}} src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/09183937/denside-logo-design-d-letter-logo-concept-by-abdul-gaffar-dribbble.png" alt="" />
                        <div className='mx-3' style={{fontSize:"12px"}} onClick={showToastMessage}>
        
                        <h6 className='fw-bold'>
                            <Link >
                            
                            {data.position}
                            </Link>
                            </h6>
                        <div><i class="bi bi-buildings-fill mx-2"></i>{data.name}</div>
                        <div><i class="bi bi-person-workspace mx-2"></i>{data.location}</div>
                        </div>
                        </div>
                        <div>
                        <i class="bi bi-x-lg"></i>
                        </div>
                        </div> <hr />
                        </>)
                    })}
                     <nav aria-label="...">
        <ul className="pagination pagination-lg d-flex justify-content-center">
          {Array.from({ length: Math.ceil(companies.length / itemsPerPage) }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              aria-current="page"
            >
              <span className="page-link" style={{cursor:"pointer"}} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </span>
            </li>
          ))}
        </ul>
      </nav>
                         <hr />
                    </div>
                 </div>
                    <Footer />
                </div>
                <div class="col-8">
                 <div className="card p-3 py-4 px-4"style={{height:"85vh", overflowY:"scroll"}}>
                 <img className='img-fluid' src={jobData.logoImage} alt="" />

                    <div className='d-flex justify-content-between mt-5'>
                        <h1 className='fw-bold'>{jobData.position}</h1>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="mx-4 bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"/>
                            </svg>
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
        </div>
      )
    }
    
    export default SingleJobComponent
    