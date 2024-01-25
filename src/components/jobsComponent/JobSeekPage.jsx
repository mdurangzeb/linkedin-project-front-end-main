import React, { useState } from 'react'
import NavBar from '../NavBar'
// import Footer from '../../Footer';
// import { ToastContainer, toast } from "react-toastify";


function JobSeekPage() {
//   const showToastMessage = () => {
//     toast.success(`Guideline changed Succesfully`, {
//       position: toast.POSITION.TOP_CENTER,
//     });
//   };
    const linkedInJobSeekingQuestions = [
        {
          id: 1,
          question: "How can I optimize my LinkedIn profile to attract recruiters and hiring managers?",
          answer: "To optimize your LinkedIn profile, focus on a professional headline, a compelling summary, and showcase your key skills and achievements. Also, add a professional-looking photo to enhance your profile's visibility.",
          keyTakeaways: ["Professional headline", "Compelling summary", "Showcasing key skills", "Adding a professional photo"],
          references: ["LinkedIn Profile Optimization Guide", "Recruiter Preferences Survey"],
          videos: ["LinkedIn Profile Tips: Attracting Recruiters (Video Link)"],
          likes: 25,
          name: "LinkedInExpert123",
          image: "https://media.licdn.com/dms/image/C5612AQHAqiJNywYUcQ/article-cover_image-shrink_720_1280/0/1617901387206?e=2147483647&v=beta&t=onEs3ou8y-xOlcHIr5zd08dPwrTCcxljKaUH2UNiWZU"
        },
        {
          id: 2,
          question: "What are the key elements that make a resume stand out to potential employers on LinkedIn?",
          answer: "A standout LinkedIn resume includes a clear and concise summary, relevant work experience, quantifiable achievements, and the use of industry-related keywords. Formatting and design are also crucial for visual appeal.",
          keyTakeaways: ["Clear and concise summary", "Relevant work experience", "Quantifiable achievements", "Keywords and formatting"],
          references: ["Effective Resume Writing Guide", "LinkedIn Resume Examples"],
          videos: ["Crafting a Standout LinkedIn Resume (Video Link)"],
          likes: 31,
          name: "ResumeMaster456",
          image: "https://media.licdn.com/dms/image/D560DAQEw__ievRq3XA/learning-public-crop_288_512/0/1680545969223?e=2147483647&v=beta&t=1Fk1hqcz9cBajCU_RneNqlXzwR-BvEO7sbIOMBM0dzk"
        },
        {
          id: 3,
          question: "Could you provide tips for tailoring my resume to different job positions effectively?",
          answer: "When tailoring your resume, focus on aligning your skills and experiences with the specific requirements of the job. Customize your objective, highlight relevant achievements, and use keywords from the job description.",
          keyTakeaways: ["Aligning skills with job requirements", "Customizing objectives", "Highlighting relevant achievements", "Using job-specific keywords"],
          references: ["Tailoring Your Resume for Success", "Job Description Analysis Techniques"],
          videos: ["Effective Resume Tailoring Strategies (Video Link)"],
          likes: 20,
          name: "CareerAdvisor789",
          image: "https://images.ctfassets.net/lzny33ho1g45/qTh5u9kBN4HbMQ9V7FyN4/a3f71fc950913c540b4350f4e1d0ad54/Group_12547.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760"
        },
        {
          id: 4,
          question: "What role does a compelling summary play in a LinkedIn profile, and how can it enhance my job search?",
          answer: "A compelling summary provides a snapshot of your professional journey, showcases your unique value proposition, and captivates the reader's interest. Craft a concise and impactful summary that reflects your career goals.",
          keyTakeaways: ["Snapshot of professional journey", "Showcasing unique value proposition", "Captivating the reader's interest", "Concise and impactful writing"],
          references: ["Crafting a Compelling LinkedIn Summary", "Effective Personal Branding"],
          videos: ["Building an Impactful LinkedIn Summary (Video Link)"],
          likes: 18,
          name: "BrandBuilderXYZ",
          image: "https://media.licdn.com/dms/image/D4D12AQHhv8RFYMIgBw/article-cover_image-shrink_600_2000/0/1693216034125?e=2147483647&v=beta&t=sGIY1NgHAHKVh3n7bEnA3CVz6HdqqAdh1NWygW9bHcI"
        },
        {
          id: 5,
          question: "Are there specific keywords or skills that recruiters commonly look for in resumes on LinkedIn, and how can I incorporate them effectively?",
          answer: "Recruiters often search for specific keywords and skills relevant to the job. Identify these by analyzing job descriptions in your target industry. Incorporate them strategically in your resume to enhance discoverability.",
          keyTakeaways: ["Identifying relevant keywords", "Analyzing job descriptions", "Strategic incorporation in resume", "Enhancing discoverability"],
          references: ["Keywords That Attract Recruiters", "Industry-Specific Skill Sets"],
          videos: ["Optimizing Your Resume with Keywords (Video Link)"],
          likes: 23,
          name: "RecruitmentInsiderABC",
          image: "https://media.licdn.com/dms/image/C4E12AQHDTrU3Iwi9ZQ/article-cover_image-shrink_600_2000/0/1520153002175?e=2147483647&v=beta&t=HcUCjRwbWP2-9vRCOONRD_4tmU7AAweqUL2EcUFx4pM"
        },
      ];

      const [selectedId, setSelectedId] = useState(1)
      const singleQuestinon = linkedInJobSeekingQuestions[selectedId -1]
      
      
  return (
    <div className='jobseker'>
        <div style={{position:"relative", zIndex:"2"}}>

      <NavBar />
        </div>
        <div className='border-bottom p-3 pt-5 mt-5 bg-light text-bold w-100' style={{position:"fixed", zIndex:"1"}}>
            <div className="container-xl mx-auto d-flex justify-content-end align-items-end">
            <h4 className=' fw-bold'>Learning</h4>
            <img style={{ width: '50px' }} className="mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="" />
            </div>
        </div>
        <div className='' style={{position:"relative", top:"165px", zIndex:""}}>
            <div style={{backgroundColor:"#f4f2ee"}}>
                <div className="container-xl p-5">
                    <h1 className='w-75 fw-bold my-3' style={{fontSize:"40px"}}>Md Aurangzeb, we’re here to help you land your next job</h1>
                    <p>Let industry experts guide you with concrete steps you can take to land your next job.</p>
                </div>
                <div>
                </div>
            </div>
                <div class="row container-xl mx-auto my-3">
                    <div class="col-4">
                    <div className="">
                      {/* <ToastContainer /> */}
                    </div>
                        <div className="border rounded-4" >
                        {linkedInJobSeekingQuestions.map((data) => {
                            return (<>
                                <div
                                    className={`border-bottom p-4 ${selectedId === data.id ? 'active' : ''}`}
                                    key={data.id}
                                    onClick={() => setSelectedId(data.id)
                                      
                                    }
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: selectedId === data.id ? '#e6e6e6' : 'transparent',
                                    }}
                                    >        
                                <h5>{data.id}. {data.question}</h5>
                            </div>
                            </>)
                        })}
                        </div>
                    </div>
                    <div class="col-8">
                        <div className="border rounded-4  p-4">
                        <h2 className='fw-bold p-3'>{singleQuestinon.question}</h2>
                        <p className='p-3'>{singleQuestinon.answer}</p>
                        <img className='img-fluid w-100' src={singleQuestinon.image} alt="" />
                        <p className='mt-4 fw-bold'>key Takeways</p>
                        <div className=''>{singleQuestinon.keyTakeaways.map((data) => <><li className='mx-4'>{data}.</li></>)}</div>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div> 

        </div>
    </div>
  )
}

export default JobSeekPage