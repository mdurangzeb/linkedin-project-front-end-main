import React, { useEffect, useRef, useState } from 'react'
import NavBar from './NavBar'
import imge from './homeImages/image.png'
import write from './homeImages/writting.png'
import calender from './homeImages/calendar.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import MediaComponent from './profileComponents/MediaComponent'
import EventComponent from './profileComponents/EventComponent'
import axios from 'axios'
import {post} from './post.js'
import Posts from './Posts'
function Home({ users,user,setUser }) {
  const [showAll, setShowAll] = useState(false);
  const [showpost, setShowpost] = useState('');
  const [showMediaComponent, setShowMediaComponent] = useState(false)
  const [eventComponent, seteventComponent] = useState(false)


  const handleReadMore = () => {
    setShowAll(!showAll);
    setShowpost('slide-bottom')
  };
  const leftArryData = [
    {
      hire: '15 Big deals',
      time: '2 days ago'
    },
    {
      hire: 'IT hiring',
      time: '1 days ago'
    },
    {
      hire: 'Hiring Intent to steady',
      time: '15 minutes ago'
    },
    {
      hire: 'Frontend Developer Position at XYZ Corp',
      time: '3 hours ago'
    },
    {
      hire: 'Senior Software Engineer Needed - ABC Tech Solutions',
      time: '1 week ago'
    },

    {
      hire: 'Project Manager Role - Project Dynamics Inc.',
      time: '5 hours ago'
    },
    {
      hire: 'HR Coordinator Job - Human Resources Hub',
      time: '3 days ago'
    },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const stickyCardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const stickyCard = stickyCardRef.current;

      if (stickyCard) {
        const stickyOffset = stickyCard.offsetTop;

        if (window.pageYOffset >= stickyOffset) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cardData = Array.from({ length: 5 }, (_, index) => index); // Creates an array [0, 1, 2, 3, 4]
  const [followclick, setfollowclick] = useState(false)

  const [childImages, setChildImages] = useState([]);
  // console.log(childImages)

  const handleSetImages = (newImages) => {
    setChildImages(newImages);
  };

  const [dataFromEventComp, setDataFromEventComp] = useState([])

  const handleFormSubmit = (formDataevent) => {
    setDataFromEventComp([...dataFromEventComp, formDataevent])
  };
  // ......data from get api event form data base to display as a post...........
  const [eventDetails, setEventDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:9099/create/an/event/eventdetails');
  //       setEventDetails(response.data);
  //     } catch (error) {
  //       console.error('Error fetching event details:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this effect will only run once after the initial render.

  // if (loading) {
  //   return <p>Loading...</p>;
  // }







  return (
    <div className='mt-5' style={{ backgroundColor: "#f4f2ee" }}>
      <NavBar user={user} setUser={setUser}/>
      <div className="row home container-xl mx-auto pt-5 py-5" style={{ position: "relative", zIndex: "0", height: "auto" }}>
        {/* left side content user details card......... */}
        <div className="col-3">
          <div className="card shadow ">
            <Link to='/MainProfile'>
              <img className='avatar' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw" className="rounded-circle" style={{
                width: "100px",
                position: "absolute",
                top: "30px",
                right: "100px"
              }}
                alt="Avatar" />
              <img className='' style={{ height: "100px" }} src="https://img.freepik.com/free-photo/gray-smooth-textured-paper-background_53876-101833.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=ais" className="card-img-top" alt="..." />
            </Link>
            {
              users.slice(0, 1).map((user) => {
                return (
                  <div className="card-body text-center my-2 fw-bold">
                    <Link to='MainProfile'>
                      <p className="card-title fs-5">{user.firstName} {user.lastName} {user.additionalName}</p>
                    </Link>
                    <p className="card-text" style={{ fontSize: "14px" }}>Worked in {user.industry} sector as a {user.headline}</p>
                  </div>
                )
              })
            }
            <hr />
            <ul className="list-group homelist list-group-flush fw-bold" >
              <h6 style={{ 'margin': 'auto' }}><Link>Md Aurangzeb</Link></h6>
              <p style={{ 'margin': 'auto' }}> Front-End Developer || React.Js ||

                <br /> Working as Software Developer <br />Trainee at Numetry Technology.</p>
              <h5 className="list-group-item">
                <Link to='/network'>
                  connections
                </Link>

                <br /><span style={{ fontSize: "14px" }}>Grow our Network </span></h5>
              <li className="list-group-item">Try For Free $/-</li>
              <li className="list-group-item">My Items</li>
            </ul>
          </div>

          <div className="card shadow mt-3">
            <ul className="list-group homelist list-group-flush mt-4 fw-bold" >
              <h5 className="list-group-item"><Link to='/groups/network'>Groups</Link></h5>
              <li className="list-group-item"><Link to='/events/network'>Events</Link></li>
              <li className="list-group-item"><Link to='/Followerspage/network'>Followed by</Link></li>
            </ul>
            <ul className="list-group list-group-flush fw-bold fs-6">
              <li className="list-group-item"></li>
              <li className="list-group-item"></li>

            </ul>

            <p className='text-center text-secondary fw-bold'>Dicover More</p>
          </div>
        </div>

        {/* middle card content */}
        <div className="col-6">
          {/* post search card  */}
          <div className="card postcard shadow rounded-4 p-3">
            <div className="d-flex  align-items-center">

              <img src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw" className="rounded-circle" style={{
                width: "70px",

              }}
                alt="Avatar" />
              <input type="" className='form-control mx-3 rounded-5 p-3 rounded-pill' onClick={() => setShowMediaComponent(!showMediaComponent)} placeholder='Start a Post' />

            </div>
            <div className="d-flex centercard  justify-content-around  mt-4 fw-bold text-secondary " style={{ cursor: "pointer" }}>
              <div className="d-flex align-items-center rounded-4  px-4 " onClick={() => setShowMediaComponent(!showMediaComponent)}>
                <img src={imge} style={{ width: "30px" }} alt="" />
                <p className=' mx-2' style={{ top: "10px", position: "relative" }}>Media</p>
              </div>
              <div className="d-flex align-items-center p-2 rounded-4 px-4 " onClick={() => seteventComponent(!eventComponent)}>
                <img src={calender} style={{ width: "30px" }} alt="" />
                <p className='mx-2' style={{ top: "10px", position: "relative" }}>Event</p>
              </div>
              <div className="d-flex align-items-center p-2 rounded-4 px-4  ">
                <img src={write} style={{ width: "30px" }} alt="" />
                <p className='mx-2' style={{ top: "10px", position: "relative" }}>Write articles</p>
              </div>

            </div>
          </div>
          <hr />
          <Posts />

          {/* ........ posted list cards*/}
          <div>
            {
              childImages.map((postedimages) => {
                return (

                  <div className="card postedcard text-center mt-2 ">
                    <div className="card-header p-4">
                      <div className="d-flex justify-content-between">
                        <h6>Suggested</h6>
                        <div>
                          <i className="bi mx-4 bi-three-dots"></i>
                          <i className="bi bi-x-lg"></i>
                        </div>

                      </div>
                    </div>

                    <div className="">
                      <div>
                        {/* posted user details */}
                        <div className="d-flex postedUser justify-content-between p-3">
                          <div className='d-flex '>

                            <img style={{ width: "70px", height: "70px" }} className='user' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw" alt="" />
                            <div className='text-start mx-2' style={{ fontSize: "12px" }}>
                              <h6 className='fw-bold'>
                                <Link to='/MainProfile'>
                                  Md Aurangzeb
                                </Link>
                              </h6>
                              <h6>It Sector || Front End Developer</h6>
                              <h6>6d. <img src="https://i.pinimg.com/564x/cc/8c/bc/cc8cbc0443d2f033fe6a457cb383601c.jpg" style={{ width: "15px" }} alt="" /> </h6>
                            </div>
                          </div>
                          <div>

                            {
                              followclick ? <>

                                <div className='text-secondary  d-flex  align-items-center followinghover px-3' onClick={() => setfollowclick(!followclick)} style={{ cursor: "pointer" }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" className="bi bi-check-lg mx-2" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                                  </svg>
                                  <p className='fw-bold fs-5  my-2 '>Following</p>
                                </div>
                              </> : <>
                                <div className='text-primary  d-flex followhover align-items-center   px-2' onClick={() => setfollowclick(!followclick)} style={{ cursor: "pointer" }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" className="bi  bi-plus-lg mx-2 " viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                  </svg>
                                  <p className='fw-bold fs-5  my-2 '>Follow</p>
                                </div>

                              </>
                            }
                          </div>
                        </div>
                        {/* image */}
                        <div className=''>
                          <h5 className='d-flex align-self-start mx-4'>{postedimages.text}</h5>
                          <img className='w-100 my-4' src={postedimages.image} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-body-secondary">
                      <div className="d-flex plate justify-content-between">
                        <div className="d-flex iconshover  p-2 px-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-hand-thumbs-up mx-1" viewBox="0 0 16 16">
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                          </svg>
                          <h6 className='pt-1'>Like</h6>
                        </div>
                        <div className="d-flex iconshover  p-2 px-3 ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-text mx-1" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                            <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
                          </svg>
                          <h6 className='pt-1'>Comment</h6>
                        </div>
                        <div className="d-flex iconshover  p-2 px-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-recycle mx-1" viewBox="0 0 16 16">
                            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                          </svg>
                          <h6 className='pt-1'>Repote</h6>
                        </div>
                        <div className="d-flex iconshover  p-2 px-3 ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill mx-1" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                          </svg>
                          <h6 className='pt-1'>Send</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {/* ........event post cards list..... */}
          <div>
            {eventDetails && eventDetails.map((data) => {
              return (
                <div className="card postedcard text-center mt-2 ">
                  <div className="card-header p-4">
                    <div className="d-flex justify-content-between">
                      <h6>Suggested</h6>
                      <div>
                        <i className="bi mx-4 bi-three-dots"></i>
                        <i className="bi bi-x-lg"></i>
                      </div>

                    </div>
                  </div>

                  <div className="">
                    <div>
                      {/* posted user details */}
                      <div className="d-flex postedUser justify-content-between p-3">
                        <div className='d-flex '>

                          <img style={{ width: "70px", height: "70px" }} className='user' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw" alt="" />
                          <div className='text-start mx-2' style={{ fontSize: "12px" }}>
                            <h6 className='fw-bold'>
                              <Link to='/MainProfile'>
                                Md Aurangzeb
                              </Link>
                            </h6>
                            <h6>It Sector || Front End Developer</h6>
                            <h6>6d. <img src="https://i.pinimg.com/564x/cc/8c/bc/cc8cbc0443d2f033fe6a457cb383601c.jpg" style={{ width: "15px" }} alt="" /> </h6>
                          </div>
                        </div>
                        <div>

                          {
                            followclick ? <>

                              <div className='text-secondary  d-flex  align-items-center followinghover px-3' onClick={() => setfollowclick(!followclick)} style={{ cursor: "pointer" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" className="bi bi-check-lg mx-2" viewBox="0 0 16 16">
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                                </svg>
                                <p className='fw-bold fs-5  my-2 '>Following</p>
                              </div>
                            </> : <>
                              <div className='text-primary  d-flex followhover align-items-center   px-2' onClick={() => setfollowclick(!followclick)} style={{ cursor: "pointer" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" className="bi  bi-plus-lg mx-2 " viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                </svg>
                                <p className='fw-bold fs-5  my-2 '>Follow</p>
                              </div>

                            </>
                          }
                        </div>
                      </div>
                      {/* image */}
                      <div className="card h-75 p-4 border w-auto m-3 text-start">
                        <p className='text-danger fw-bold'>Meeting Will Be Held Between from {data.startDate} to {data.endDate}</p>
                        <div className=''>

                          <div className=''>Mentor : <span className='text-bark'>{data.firstName} {data.lastName}</span> </div>
                          <div>Mode of Meeting : {data.eventType}</div>
                          <div>Meeting Aganda Description : {data.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-body-secondary">
                    <div className="d-flex plate justify-content-between">
                      <div className="d-flex iconshover  p-2 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-hand-thumbs-up mx-1" viewBox="0 0 16 16">
                          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                        </svg>
                        <h6 className='pt-1'>Like</h6>
                      </div>
                      <div className="d-flex iconshover  p-2 px-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-text mx-1" viewBox="0 0 16 16">
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                          <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
                        </svg>
                        <h6 className='pt-1'>Comment</h6>
                      </div>
                      <div className="d-flex iconshover  p-2 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-recycle mx-1" viewBox="0 0 16 16">
                          <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                        </svg>
                        <h6 className='pt-1'>Repote</h6>
                      </div>
                      <div className="d-flex iconshover  p-2 px-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill mx-1" viewBox="0 0 16 16">
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                        </svg>
                        <h6 className='pt-1'>Send</h6>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
















        
        {/* right side hoome page */}
        <div className="col-3">
          <div className="card p-3 shadow ">
            <div className="d-flex justify-content-between fw-bold">
              <p>LinkedIn News</p>
              <h6> <span className="badge bg-dark">i</span></h6>
            </div>
            <div>
              {showAll ? (
                <div className=''>
                  {

                    leftArryData.map((data, index) => (
                      <div key={index} className=''>
                        <li className='fw-bold fs-6'>{data.hire}</li>
                        <p className='text-secondary mx-4' style={{ fontSize: "14px" }}>{data.time}</p>
                      </div>
                    )
                    )
                  }
                  <button onClick={handleReadMore} className='btn btn-secondary'>
                    Show less
                  </button>
                </div>
              ) : (
                <>
                  {leftArryData.slice(0, 5).map((data, index) => (
                    <div key={index} className='' >
                      <li className='fw-bold fs-6'>{data.hire}</li>
                      <p className='text-secondary mx-4' style={{ fontSize: "14px" }}>{data.time}</p>
                    </div>
                  ))}
                  {leftArryData.length > 5 && (
                    <button onClick={handleReadMore} className='btn btn-secondary'>
                      Show More
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          {/* sticky card........... */}

          <div ref={stickyCardRef} className={` ${isSticky ? 'sticky-top' : ''}`}>
            <div className='card  p-4 text-center my-2'>
              <p>Get the latest jobs and industry news</p>
              <div className="d-flex align-self-center">

                <img className='' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw" className="rounded-circle" style={{ width: "80px", }} alt="Avatar" />
              </div>
              <p>Md Aurangzeb, explore relevant opportunities with Mavenir</p>
              <button className='btn btn-primary fw-bold'>Follow</button>
            </div>
            {/* .......footer......... */}
            <Footer />
          </div>
        </div>
      </div>

      {/* mediaComponenet,............. */}
      {showMediaComponent ?
        <>
          <div style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            top: "0",
            left: "0",
            opacity: "0.65"
          }} onClick={() => setShowMediaComponent(!showMediaComponent)}>

          </div>
          <MediaComponent setChildImages={handleSetImages} dataFromEventComp={dataFromEventComp} setShowMediaComponent={setShowMediaComponent} seteventComponent={seteventComponent} eventComponent={eventComponent} showMediaComponent={showMediaComponent} />
        </> : <><div>{null}</div></>}

      {/* .....events componenet.................. */}
      {eventComponent ?
        <>
          <div style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            top: "0",
            left: "0",
            opacity: "0.65"
          }}>
          </div>
          <EventComponent seteventComponent={seteventComponent} onSubmit={handleFormSubmit} setShowMediaComponent={setShowMediaComponent} showMediaComponent={showMediaComponent} eventComponent={eventComponent} />
        </> : <><div>{null}</div></>}


    </div>
  )
}

export default Home
