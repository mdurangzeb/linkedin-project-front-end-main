import React from 'react'
import NavBar from '../NavBar'
import Footer from '../../Footer'

function Pages() {
  const itCompanies = [
    {
      name: "Microsoft",
      followers: "10M followers",
      logoUrl: "https://example.com/microsoft_logo.jpg",
    },
    {
      name: "Google",
      followers: "15M followers",
      logoUrl: "https://example.com/google_logo.jpg",
    },
    {
      name: "Apple",
      followers: "20M followers",
      logoUrl: "https://example.com/apple_logo.jpg",
    },
    {
      name: "Amazon",
      followers: "18M followers",
      logoUrl: "https://example.com/amazon_logo.jpg",
    },
    {
      name: "IBM",
      followers: "8M followers",
      logoUrl: "https://example.com/ibm_logo.jpg",
    },
    {
      name: "Intel",
      followers: "5M followers",
      logoUrl: "https://example.com/intel_logo.jpg",
    },
    {
      name: "Cisco",
      followers: "3M followers",
      logoUrl: "https://example.com/cisco_logo.jpg",
    },
    {
      name: "Oracle",
      followers: "6M followers",
      logoUrl: "https://example.com/oracle_logo.jpg",
    },
    {
      name: "Dell",
      followers: "4M followers",
      logoUrl: "https://example.com/dell_logo.jpg",
    },
    {
      name: "HP",
      followers: "7M followers",
      logoUrl: "https://example.com/hp_logo.jpg",
    },
    {
      name: "SAP",
      followers: "2M followers",
      logoUrl: "https://example.com/sap_logo.jpg",
    },
    {
      name: "NVIDIA",
      followers: "1M followers",
      logoUrl: "https://example.com/nvidia_logo.jpg",
    },
    {
      name: "VMware",
      followers: "1.5M followers",
      logoUrl: "https://example.com/vmware_logo.jpg",
    },
    {
      name: "Adobe",
      followers: "12M followers",
      logoUrl: "https://example.com/adobe_logo.jpg",
    },
    {
      name: "Accenture",
      followers: "9M followers",
      logoUrl: "https://example.com/accenture_logo.jpg",
    },
    {
      name: "Infosys",
      followers: "3.5M followers",
      logoUrl: "https://example.com/infosys_logo.jpg",
    },
    {
      name: "TCS",
      followers: "5.5M followers",
      logoUrl: "https://example.com/tcs_logo.jpg",
    },
    {
      name: "Wipro",
      followers: "2.5M followers",
      logoUrl: "https://example.com/wipro_logo.jpg",
    },
    {
      name: "Capgemini",
      followers: "4.5M followers",
      logoUrl: "https://example.com/capgemini_logo.jpg",
    },
    {
      name: "Cognizant",
      followers: "6.5M followers",
      logoUrl: "https://example.com/cognizant_logo.jpg",
    },
    {
      name: "HCL Technologies",
      followers: "1.8M followers",
      logoUrl: "https://example.com/hcl_logo.jpg",
    },
    {
      name: "Tech Mahindra",
      followers: "2.8M followers",
      logoUrl: "https://example.com/tech_mahindra_logo.jpg",
    },
    {
      name: "NTT Data",
      followers: "1.2M followers",
      logoUrl: "https://example.com/ntt_data_logo.jpg",
    },
    {
      name: "Mindtree",
      followers: "800K followers",
      logoUrl: "https://example.com/mindtree_logo.jpg",
    },
    {
      name: "L&T Infotech",
      followers: "1.3M followers",
      logoUrl: "https://example.com/lt_infotech_logo.jpg",
    },
  ];
  
  // Use itCompanies array as needed in your application
  
  return (
    <div className='mt-5 pt-4' style={{backgroundColor:"#f4f2ee"}}>
    <NavBar />
    <div className='row page container-xl mx-auto pt-5 py-5'>
     <div className="col-9">
      <div className="card p-3 shadow border">
          <div className=" p-3">
              <h5 className='border-bottom py-3'>Pages</h5>
              {
                itCompanies.map((data) => {
                  return (

              <div className='d-flex justify-content-between my-3 border-bottom p-2'>
                                    <div className='d-flex lh-base'>


                                    <img  className='mx-1' style={{width:"80px", height:"50px"}} src="https://www.closingthegap.com/wp-content/uploads/2020/05/generic-logo.png" alt="image" />
                                    <div>
                                        <h5 className='fw-bold'>{data.name}</h5>
                                        <div className='text-secondary'>{data.followers}</div>
                                        {/* <p className='text-secondary' style={{fontSize:"12px"}}>
                                        {data.description}
                                        </p> */}
                                    </div>
                                    </div>
                                    <div>

                                    <button className='btn btn-outline-secondary rounded-pill'>Following</button>
                                    </div>

                                 </div> 
                  )
                })
              }

          </div>
        {/* .......pages maping code here......... */}

        
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
        <div className=" mt-3 p-2">
            <Footer />   
          </div>
          </div> 


       </div>
  </div>
  )
}

export default Pages
