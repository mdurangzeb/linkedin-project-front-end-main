import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import pen from '../../assets/pen.svg'
import axios from 'axios'
import Footer from '../../Footer'
function MainProfile({users}) {
    const [layer, setLayer] = useState(false)
    const [usercard, setusercard] = useState(false)
    const [JobPreference, setJobPreference] = useState(false)
    const [userProfile, setUserProfile] = useState(false)
    const [AboutCard, setAboutCard] = useState(false)
    const [languagecard, setlanguagecard] = useState(false)

    const handleuserCard = () => {setusercard(!usercard)}
    const handleCard =() => {
      setLayer(!layer)
    }
    
    const layerClass = {
        position: 'relative',
        zIndex: 3,
      };

      const [selectedImage, setSelectedImage] = useState(null);

      
      const fileInputRef = useRef(null);
    

      const openFile = () => {
        fileInputRef.current.click();
      };

      const handleFileChange = (event) => {
        const file = event.target.files[0];
            setSelectedImage(file);
      };

      const [inputValue, setInputValue] = useState('');
      const [names, setNames] = useState([]);

      const [inputLocation, setinputLocation] = useState('');
      const [Location, setLocation] = useState([]);
      
      const handleChange = (event) => {
        setInputValue(event.target.value);
      };
      const handleChangeLocation = (event) => {
        setinputLocation(event.target.value);
      };
    
      const handleAddName = () => {
        if (inputValue.trim() !== '') {
          setNames([...names, inputValue]);
          setInputValue('');
        }
      };
      const handleAddLocation = () => {
        if (inputLocation.trim() !== '') {
          setLocation([...Location, inputLocation]);
          setinputLocation('');
        }
      };

    //   handle for dara card......
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        additionalName: '',
        pronouns: '',
        headline: '',
        currentPosition: '',
        industry: '',
        countryRegion: '',
        city: ''
      });
    
      const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

 

      const [submitted, setSubmitted] = useState(false);


      const handleSubmitFormData = async (e) => {
    e.preventDefault();

    if (submitted) {
      console.log('Form already submitted');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user', formData);
      console.log('Form submitted successfully:', response.data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

      const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleAddSkill = () => {
    if (skills.length < 5) {
      setSkills([...skills, newSkill]);
      setNewSkill('');

      // Disable the button if the count of skills is now 5
      if (skills.length + 1 === 5) {
        setIsButtonDisabled(true);
      }
    } }

    const [language, setLanguage] = useState('');
    const [languages, setLanguages] = useState([]);
    const maxLanguages = 3;

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleAddLanguage = () => {
        if (languages.length < maxLanguages) {
            // Only add language if not reached the maximum
            setLanguages([...languages, language]);
            setLanguage('');
        }
    };

    const handlecardjobprofile =  () =>{
        setJobPreference(!JobPreference)
        setUserProfile(!userProfile)
      }
     
    
  return (
    <>
      <div style={layer ? layerClass : {
        backgroundColor:"#f4f2ee"
      }} className='profilecard '>
      {/* <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div> */}

        <div className='layerClass' style={{backgroundColor:"#f4f2ee"}}></div>
            <NavBar />
       
        <div class="row mainprofiles container-xl mx-auto mt-5 pt-3 py-5" style={{position:"relative", top:"30px", zIndex:"0", overflowY:"hidden"}}>
            <div class="  col-9">
                {/* main card.......... */}
                <div className={`card my-2 shadow rounded-5`}>
                    <div className=''  onClick={handleCard} style={{position:"absolute", left:"93%", top:"20px", cursor:"pointer"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue"  class="bi bi-camera-fill  bg-white border p-2 rounded-circle" viewBox="0 0 16 16">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
                    </svg>
                    </div>

                    {selectedImage ? (
        <div>
          <img style={{width:"100%", height:"250px", objectFit:"cover"}} src={URL.createObjectURL(selectedImage)} alt="Selected" />
        </div>) : <>
        
        <img className='' style={{height:"300px", width:"100%"}} src="https://img.freepik.com/free-photo/gray-smooth-textured-paper-background_53876-101833.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=ais" alt="" />
        </>
      }

                 <div className='' style={{
                    backgroundImage:"url(https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_800_800/0/1679043758636?e=1710374400&v=beta&t=Tyr7PyCDlb4YD9KURksVrMbGM0NL2WOMUFKEREZtsSo)",
                    backgroundRepeat:"no-repeat",
                    height:"250px",
                    width:"250px",
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    objectFit:"contain",
                    top:"-150px",
                    left:"50px",
                    position:"relative",
                    border:"5px solid white",
                    borderRadius:"50%"
                 }}>

                  {/* img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar" style={{width: "200px",
                    position:"static",
                    top:"100px",
                    right:"600px",
                    border:"5px solid white" 
                
                alt="Avatar"  */}
                </div>
                <div className='p-5' style={{position:"relative", top:"-100px"}}>
                    <div className="d-flex justify-content-end " onClick={handleuserCard}>
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>

                    
                    <img className='' style={{ cursor:"pointer"}} src={pen} alt="" />
                    </div>
                    </div>
                    {
                      users.slice(0, 1).map ((user) =>{
                         return (
                          <div key={user.id}>
                          
                          <h3 className='fw-bold mainName'>{user.firstName} {user.lastName} ({user.firstName} {user.lastName}) {user.additionalName} </h3>
                          {/* <p>Worked in Think Core Technologies</p> */}
                          <p>{user.headline} {user.currentPosition}</p>
                          {/* <p>Andhra Pradesh, India  <Link className='fw-bold'>Contact info</Link></p> */}
                          <p>{user.countryRegion},{user.city} <Link className='fw-bold'>Contact info</Link></p>
                          
                          </div>
                         )
                      })
                    }

                            <div className="profilebtn">
                            <div className="btn btn-primary">Open to</div>
                            <div className="btn fw-bold btn-outline-primary mx-3">Add Profile section</div>
                            <div className="btn fw-bold btn-outline-primary">More</div>
                            </div>
                            <div className='border userCard mt-4 fw- p-3 w-50 bg-secondary rounded-5 fs-5'>
                            <div className='d-flex  justify-content-between'>
                                <div className='fw-bold'>open to work</div>
                                <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>
                                <img src={pen} onClick={() => setJobPreference(!JobPreference)} style={{cursor:"pointer"}} alt="" />
                               </div>
                                </div>     
                                <><Link>
                                <h6 className='fw-bold' onClick={() => setUserProfile(!userProfile)}>
                                Show Details
                                </h6>
                                </Link></>
                </div>

                </div>
                </div>
                {/* about card........... */}
                <div className="card p-4 my-2 shadow ">

                    <div className='d-flex my-3  justify-content-between'>
                    <h5 className='fw-bold'>About</h5>
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>

                     <img src={pen} alt="" style={{cursor:"pointer"}} onClick={() => setAboutCard(!AboutCard)} />
                    </div>
                    </div>
                    <p>Highly skilled Front-End Developer with 3 years of experience translating design concepts into seamless and responsive web experiences. Proficient in HTML, CSS, JavaScript, and modern front-end frameworks like React js and Redux.</p>
                     <div className="border rounded-5 p-3 my-3">
                        <p>Top skills</p>
                     </div>
                </div>
                {/* experience card......... */}
                <div className="card p-4 shadow">
                <div className='d-flex my-3  justify-content-between'>
                    <h5 className='fw-bold'>Experience</h5>
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>
                     <img src={pen} alt="" />
                     </div>
                    </div>
                    <h6>Frontend Developer</h6>
                    <p>Think Core · Full-time</p>
                    <p>Jun 2020 - Present · 3 yrs 7 mos</p>
                    <p>Bengaluru, Karnataka, India · Remote</p>
                    <p>Highly skilled Front-End Developer with 3 years of experience translating design concepts into seamless and responsive web experiences. Proficient in HTML, CSS, JavaScript, and modern front-end frameworks like React js and Redux.</p>
                    <p>Skills: ......</p>
                </div>
                {/* education card......... */}
                <div className="card p-4 my-2 shadow">
                <div className='d-flex my-3  justify-content-between'>
                    <h5 className='fw-bold'>Education</h5>
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>     
                <img src={pen} alt="" />
                </div>
                    </div>
                    <p>B.Tech Computer Science; enginerring</p>
                    <p>2017-2021</p>
                </div>
            </div>

            {/* right side............. */}
            <div class="col-3 ">
            <div className="card p-4 shadow">
                <div className='d-flex  justify-content-between'>
                    <div className='fw-bold'>Profile language</div>
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>

                     <img src={pen} alt="" style={{cursor:"pointer"}} onClick={() => setlanguagecard(!languagecard)} />
                    </div>
                    </div>
                    <p>English</p> <hr />
                    <div className='d-flex  justify-content-between'>
                    <div className='fw-bold'>Public profile & URL</div>
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>
                     <img src={pen} alt="" />
                     </div>
                    </div>
                </div>
                {/* user card...... */}
                <div className="card p-3 text-center my-2 shadow">
                    <p>Get the latest jobs and industry news</p>
                    <div className="d-flex align-self-center">
                    <div className='penhover  d-flex align-items-center justify-content-center ' style={{width:"50px", height:"50px"}}>
                    <img className='' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
                    </div>
                    </div>
                    <p>Md Aurangzeb, explore relevant opportunities with Mavenir</p>
                    <button className='btn btn-primary fw-bold'>Follow</button>
                </div>
                {/* people viewed...... */}
                <div className="card p-3 my-2">
                  <p>People Aslo Viewed</p>                    
                </div>
                <Footer />
            </div>
        </div>
    </div>

    {
        layer ? (
            <>
                 
        
                 <div class="card backgroundimagecard text showCard  h-75 shadow" style={{position:"fixed", top:"15%",zIndex:"3", left:"30%", height:"auto", width:"750px"}}>
                <div class="card-header">
                    <div className="d-flex justify-content-between p-2">

                    <h3 className='fw-bold'>Add background photo</h3>
                    <button className='btn btn-primary' onClick={handleCard}>Close</button>
                    </div>

                </div>
                <div class="card-body" onClick={() => setLayer(!layer)}>
                     <img className='w-50' src="https://static.vecteezy.com/system/resources/previews/004/491/046/original/design-studio-concept-for-web-banner-woman-and-man-designers-team-create-website-layout-and-draw-elements-modern-person-scene-illustration-in-flat-cartoon-design-with-people-characters-vector.jpg" alt="" />
                    <h5 class="card-text">Showcase your personality, interests, team moments or notable milestones</h5>
                    <p class="">A good background photo will help you stand out.<Link>Learn more</Link> </p>
                </div> <hr />
                   <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <button
                        className="m-3 fs-6 shadow btn btn-primary text-center d-flex align-self-end fw-bold"
                        onClick={openFile}
                    >
                        Edit Profile Background
                    </button>
                </div>
            </>
        ) : (<>
            <div>{null}</div>
        </>)
    }

    {/* ......user card details form .......... */}
    {
      usercard ?
       <>
         <div>
         <div style={{
                position:"fixed",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65"
            }}></div>
         <div class="card showCard editCard shadow-lg p-3 mb-5 rounded" style={{position:"fixed", top:"15%",zIndex:"3",width:"900px", left:"30%", height:"740px"}}>
         <div class="card-header">
                    <div className="d-flex justify-content-between p-2">

                    <h3 className='fw-bold'>Edit Info</h3>
                    <button className='btn btn-primary' onClick={handleuserCard}>Close</button>
                    </div>

                </div>
                {/* form............. */}
            <div class="card-body" style={{overflowY:"scroll"}}>
            <p>* Indicates required</p>
      <form className="">
        <label htmlFor="firstName" className="fs-6 mb-1 mt-3">
          First name*
        </label>
        <input
          type="text"
          className="form-control p-1 fs-5"
          name="firstName"
          value={formData.firstName}
          onChange={handleFormData}
        />

        <label htmlFor="lastName" className="fs-6 mb-1 mt-3">
          Last name*
        </label>
        <input
          type="text"
          className="form-control p-1 fs-5"
          name="lastName"
          value={formData.lastName}
          onChange={handleFormData}
        />

        <label htmlFor="additionalName" className="fs-6 mb-1 mt-3">
          Additional name
        </label>
        <input
          type="text"
          className="form-control p-1 fs-5"
          name="additionalName"
          value={formData.additionalName}
          onChange={handleFormData}
        />

        <p className="mt-4">Name pronunciation</p>
        <p>
          <span className="badge bg-dark">i</span> This can only be added
          using our mobile app
        </p>

        <label htmlFor="pronouns" className="fs-6 mb-1 mt-3">
          Pronouns
        </label>
        <select
          name="pronouns"
          id="pronouns"
          className="fs-6 mb-1 form-control fs-5 p-2"
          value={formData.pronouns}
          onChange={handleFormData}
        >
          <option value="">Select option</option>
          <option value="He">He</option>
          <option value="She">She</option>
          <option value="They/Them">They/Them</option>
          <option value="Others">Others</option>
        </select>

        <p>Let others know how to refer to you.</p>

        <label htmlFor="headline" className="fs-6 mb-1 mt-3">
          Headline*
        </label>
        <input
          type="text"
          className="form-control p-1 fs-5"
          name="headline"
          value={formData.headline}
          onChange={handleFormData}
        />

        <h3 className="mt-5">Current Position</h3>

        <label htmlFor="currentPosition" className="fs-6 mb-1 mt-3">
          Current position*
        </label>
        <input
          type="text"
          className="form-control p-1 fs-5"
          name="currentPosition"
          value={formData.currentPosition}
          onChange={handleFormData}
        />

        <label htmlFor="industry" className="fs-6 mb-1 mt-3">
          Industry*
        </label>
        <input
          type="text"
          className="form-control p-1 fs-5"
          name="industry"
          value={formData.industry}
          onChange={handleFormData}
        />

        <h3 className="mt-5">Location</h3>

        <label htmlFor="countryRegion" className="fs-6 mb-1 mt-3">
          Country/Region*
        </label>
        <input
          type="text"
          className="form-control p-1 fs-5"
          name="countryRegion"
          value={formData.countryRegion}
          onChange={handleFormData}
        />

        <label htmlFor="city" className="fs-6 mb-1 mt-3">
          City*
        </label>
        <input
          type="text"
          className="form-control p-1 fs-5"
          name="city"
          value={formData.city}
          onChange={handleFormData}
        />

        <h3 className="mt-5">Contact Info</h3>
        <p>Add or edit your profile URL, email, and more</p>
                    <Link className='mt-3 fs-6 fw-bold'>Edit contact info</Link>

                </form>
            </div> <hr />


            <button
                        className="m-3 fs-6 shadow btn btn-primary text-center d-flex align-self-end fw-bold"
                        onClick={handleSubmitFormData}
                        type='submit'
                    >
                        save
                    </button>
            </div>
         </div>
       </> : <>{null}</>

    }

    {JobPreference ? <>
      <div>
      <div style={{
                position:"fixed",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65"
            }}></div>
      <div class="card showCard editCard shadow-lg p-3 mb-5 rounded" style={{position:"fixed", top:"15%",zIndex:"3",width:"500px", left:"35%", height:"740px"}}>
      <div class="card-header">
                    <div className="d-flex justify-content-between p-2">
                    <h3 className='fw-bold'>Edit job preferences</h3>
                    <button className='btn btn-primary' onClick={() => setJobPreference(!JobPreference)}>Close</button>
                    </div>

                </div>
            <div class="card-body" style={{overflowY:"scroll"}}>
                
                <p>* Indicates required</p>
                <div>
                <label for="username" class="fs-6 mb-1 mt-3 ">job titles*</label>
                {names.length > 0 && (
                        <div>
                        <div className='d-flex flex-wrap '>
                            {names.map((name, index) => (
                            <p className='btn btn-success rounded-pill mx-2' key={index}>{name} <span className='fw-bold mx-2'>X</span></p>
                            ))}
                        </div>
                        </div>
                    )}
                    <input
                        className='form-control my-2'
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Add title"
                    />
                    <button className='btn btn-primary' onClick={handleAddName}>Add Title</button>
                    </div>
                    <div className='mt-4'>
                        <p>Location type*</p>
                        <button className='btn btn-outline-primary mx-2' >on-site </button>
                        <button className='btn btn-outline-primary mx-2' >Hybrid</button>
                        <button className='btn btn-outline-primary mx-2' >Remote</button>
                    </div>
                    <div>
                    <div>
                        <label for="username" class="fs-6 mb-1 mt-3 ">job titles*</label>
                        {Location.length > 0 && (
                                <div>
                                <div className='d-flex flex-wrap '>
                                    {Location.map((name, index) => (
                                    <p className='btn btn-success rounded-pill mx-2' key={index}>{name} <span className='fw-bold mx-2'>X</span></p>
                                    ))}
                                </div>
                                </div>
                            )}
                            <input
                                className='form-control my-2'
                                type="text"
                                value={inputLocation}
                                onChange={handleChangeLocation}
                                placeholder="Add Location"
                            />
                            <button className='btn btn-primary' onClick={handleAddLocation}>Add Location</button>
                    </div>
                    {/* immidate join or not ......... */}
                        <div className='mt-4 p-1'>
                            <div>Start date*</div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                Immediately, I am actively applying                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                                <label class="form-check-label" for="flexRadioDefault2">
                                Flexible, I am casually looking                                </label>
                                </div>
                        </div>
                        {/* Employee type...... */}
                        <div className='mt-4'>
                        <p>Employee type*</p>
                        <button className='btn btn-outline-primary m-2' >Full-time </button>
                        <button className='btn btn-outline-primary m-2' >Part-time</button>
                        <button className='btn btn-outline-primary m-2' >Contract</button>
                        <button className='btn btn-outline-primary m-2' >InternShip</button>
                        <button className='btn btn-outline-primary m-2' >Temporary</button>
                    </div>
                    </div>

            </div><hr />
            <button className="m-3 fs-6 shadow btn btn-primary text-center d-flex align-self-end fw-bold"
                        type='submit'
                    >
                        save
                    </button>
            </div>
      </div>
    </> : <><div>{null}</div></>}
        
        {
            userProfile ? <>
            <div style={{
                position:"fixed",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65"
            }}></div>
             <div>
             <div class="card showCard editCard shadow-lg p-3 mb-5 rounded" style={{position:"fixed", top:"15%",zIndex:"3",width:"650px", left:"35%", height:"740px"}}>
             <div class="card-header">
                    <div className="d-flex justify-content-between p-2">
                    <h3 className='fw-bold'>job preferences</h3>
                    <button className='btn btn-primary' onClick={() => setUserProfile(!userProfile)}>Close</button>
                    </div>

                    </div>
                    <div class="card-body" style={{overflowY:"scroll"}}>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center ">
                          <img className='avatar' src="https://img.freepik.com/free-photo/gray-smooth-textured-paper-background_53876-101833.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=ais" class="rounded-circle" style={{width: "80px" }} alt="Avatar" /> 
                          <div className='mx-3'>
                            <h5>Md Aurangzeb</h5>
                            <p>Open to Work</p>
                          </div>
                         </div>
                         <div className='penhover  d-flex align-items-center justify-content-center ' onClick={handlecardjobprofile} style={{width:"50px", height:"50px"}}>
                          <img className='' style={{ cursor:"pointer"}} src={pen} alt="" />
                          </div>
                        </div>
                        <div className='p-2'>
                          <div className='my-5'>
                            <p className='fw-bold'>Job Title</p>
                            <h5>Frontend Developer · Javascript Developer</h5>
                          </div>
                          <div className='my-5'>
                            <p className='fw-bold'>Location types</p>
                            <h5>On-site · Hybrid · Remote</h5>
                          </div>
                          <div className='my-5'>
                            <p className='fw-bold'>Locations (on-site)</p>
                            <h5>Uttar Pradesh, India</h5>
                          </div>
                          <div className='my-5'>
                            <p className='fw-bold'>Locations (remote)</p>
                            <h5>Uttar Pradesh, India</h5>
                          </div>
                          <div className='my-5'>
                            <p className='fw-bold'>Start date</p>
                            <h5>Immediately, I am actively applying</h5>
                          </div>
                          <div className='my-5'>
                            <p className='fw-bold'>Employee Type</p>
                            <h5>Full-time </h5>
                          </div>
                        </div>
                    </div>
                    <div class="card-footer text-body-secondary">
                    <i class="bi bi-eye-fill mx-2"></i>
                       All LinkedIn members
                    </div>
                    </div>
             </div>
            </> : <><div>{null}</div></>
        }
        {/* about card........... */}
        {
            AboutCard ? <>
            <div style={{
                position:"fixed",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65"
            }}></div>
             <div>
             <div class="card aboutcard showCard shadow-lg p-3 mb-5 rounded" style={{position:"fixed", top:"10%",zIndex:"3",width:"850px", left:"35%", height:"auto"}}>
             <div class="card-header">
                    <div className="d-flex justify-content-between p-2">
                    <h3 className='fw-bold'>Edit about</h3>
                    <button className='btn btn-primary' onClick={() => setAboutCard(!AboutCard)}>Close</button>
                    </div>

                    </div>
                    <div class="card-body">
                        <p>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</p>
                        <textarea name="" id="" cols="90" rows="10"></textarea>
                        <div>
                            <h3>Skills</h3>
                            <p>Show your top skills — add up to 5 skills you want to be known for. They’ll also appear in your Skills section.</p>
                            <div className="mt-3">
                                    <strong>Skills:</strong>
                                    <div className='d-flex flex-wrap'>
                                    {skills.map((skill, index) => (
                                        <p className='btn btn-success mx-1' key={index}>{skill}</p>
                                    ))}
                                    </div>
                                </div>
                            <div className="d-flex justify-content-start">
                            <input
                                type="text"
                                placeholder="Enter Skills"
                                className="form-control"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                            />
                            <button
                                className="btn btn-primary w-25 mx-2"
                                onClick={handleAddSkill}
                                disabled={isButtonDisabled}
                            >
                                Add skill
                            </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-body-secondary">
                        2 days ago
                    </div>
                    </div>
             </div>
            </> : <><div>{null}</div></>
        }
        {/* language card....... */}
        {
            languagecard ? <>
            <div style={{
                position:"fixed",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65"
            }}></div>
             <div>

             <div class="card editCard  showCard shadow-lg p-3 mb-5 rounded" style={{position:"fixed", top:"15%",zIndex:"3",width:"850px", left:"35%", height:"auto"}}>
             <div class="card-header">
                    <div className="d-flex justify-content-between p-2">
                      <h3 className='fw-bold'>Profile language settings</h3>
                      <button className='btn btn-primary' onClick={() => setlanguagecard(!languagecard)}>Close</button>
                    </div>
                    </div>
                  <div className="card-body lang bg-light">
                  <div className="d-flex justify-content-around">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-globe mx-2" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472M3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                    </svg>                  
                    <p className='w-50'>Add more than one language on your profile to make finding you easier.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-sunglasses mx-2" viewBox="0 0 16 16">
                      <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1"/>
                    </svg>
                   <p className='w-50'>We will match viewers’ language to your available language profile. If there’s no match, your default profile will be shown.</p>
                  </div>
        </div><hr />
            <div className="d-flex lang2 justify-content-start mt-3">
                <input
                    type="text"
                    placeholder="Enter Language"
                    className="form-control"
                    value={language}
                    onChange={handleLanguageChange}
                />
                <button
                    className="btn btn-primary w-25 mx-2"
                    onClick={handleAddLanguage}
                    disabled={languages.length >= maxLanguages}
                >
                    Add Language
                </button>
            </div>

            <div className="mt-3">
                <h5>Added Languages:</h5>
                <div>
                    {languages.map((lang, index) => (
                        <p className='btn btn-success mx-2' key={index}>{lang}</p>
                    ))}
                </div>
                <p>You can only have 1 profile per language. When you switch your primary language profile, empty sections will be filled using your previous primary language. Learn more about creating profiles in another language.</p>
            </div>
                    </div>

                    <div class="card-footer text-body-secondary">
                        2 days ago
                    </div>
                    </div>
            </> : <><div>{null}</div></>
        }

         </>
      )
}

export default React.memo(MainProfile);
