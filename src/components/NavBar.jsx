import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import home from './navImages/home.png';
import bell from './navImages/bell.png';
import downarrow from './navImages/down-arrow.png';
import menu from './navImages/menu.png';
import profile from './navImages/profile.png';
import chat from './navImages/chat.png';
import suitcase from './navImages/suitcase.png';
import teamwork from './navImages/teamwork.png';
import search from './navImages/search.svg';


const NavBar = ({user,setUser}) => {

    const [active, setActive] = useState(false)
    const [profileCard, setprofileCard] = useState(false)
    const [showlayer, setShowLayer] = useState(false)
    const [businesscard, setbusinesscard] = useState(false)
    const handletoggle =() => {
        setActive(!active)
    }

    const nav = useNavigate()
    console.log(setUser)


    const logout= ()=>{
      console.log('hii')
      setUser(false)
      localStorage.removeItem('profile')

    }
    
  return (
    <>
     
    <div className="shadow " style={{ backgroundColor: 'white', borderBottom: '2px solid lightgrey', fontFamily: 'Roboto, sans-serif', position:"fixed", width:"100%", top:"0", zIndex:"1"}}>
      <div className="container-xl p-1">
        <style>
          {`
            input[type="text"].navbaronly {
              width: 350px;
              box-sizing: border-box;
              border-radius: 4px;
              font-size: 14px;
              border: none;
              background-color: #edf3f8 ;
              background-image: url('${search}');
              background-position: 10px 10px;
              background-repeat: no-repeat;
              padding: 5px 20px 5px 40px;
              outline: none;
              transition: width 0.55s ease; /* Transition for width change */
            //   border: 1px solid lightgrey; /* Default border color */
            }

            input[type="text"].navbaronly:focus {
                width: 550px; /* Change width when focused */
              border: 3px solid black; /* Change border color when focused */
            
            }
        
          `}
        </style>
        <nav className="d-flex mainNavbar justify-content-between align-items-center" style={{fontSize:"12px", }}>
          <div className="navbar-brand d-flex">
            <img style={{ width: '50px' }} className="mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="" />
            <input type="text" name="search" onClick={() => setShowLayer(!showlayer)} className='fs-5 rounded-3 navbarinput navinput navbaronly' placeholder="search" />
          </div>
          <div className="navbar-links icons d-flex justify-content-around ">
              <div className="mx-3 text-center ">
            <NavLink to="/" className={active ? 'active' : 'nav-link'} onClick={handletoggle} >
                <img src={home} className='p-1' style={{ width: '30px' }} alt="" /> <br />
                <p>Home</p>
            </NavLink>
              </div>

              <NavLink to="/network" className={active ? 'active' : 'nav-link'} onClick={handletoggle} >
              <div className="mx-3 text-center">
                <img className='p-1' src={teamwork} style={{ width: '30px' }} alt="" /> <br />
<p>                My Network
</p>              </div>
            </NavLink>

            <NavLink to="/jobs" className={active ? 'active' : 'nav-link'} onClick={handletoggle} >
              <div className="mx-4 text-center">
                <img className='p-1' src={suitcase} style={{ width: '30px' }} alt="" /> <br />
<p>                Jobs
</p>
              </div>
            </NavLink>

            <NavLink to="/messages" className={active ? 'active' : 'nav-link'} onClick={handletoggle} >
              <div className="mx-3 text-center">
                <img className='p-1' src={chat} style={{ width: '30px' }} alt="" /> <br />
<p>                Messaging
</p>              </div>
            </NavLink>

            <NavLink to="/notifications" className={active ? 'active' : 'nav-link'} onClick={handletoggle} >

              <div className="mx-3 text-center">
                <img className='p-1' src={bell} style={{ width: '30px' }} alt="" /> <br />
<p>                Notifications
</p>              </div>
            </NavLink>

                    <button onClick={logout}>Logout</button>
            <div  className='nav-link lastIcons' onClick={() => setprofileCard(!profileCard)} style={{cursor:"pointer"}}>
              <div className=" text-center border-end px-3">
                <img className='' src={profile} style={{ width: '30px' }} alt="" /> <br />
             Me
               <span><img src={downarrow} className="mx-1" style={{ width: '15px' }} alt="" /></span>
              </div>
            </div>

            <div  className='nav-link lastIcons' onClick={() => setbusinesscard(!businesscard)} style={{cursor:"pointer"}}>
              <div className="mx-3 text-center">
                <img src={menu} style={{ width: '30px' }} alt="" /> <br />
             For Business
                <span><img src={downarrow} className="mx-2" style={{ width: '15px' }} alt="" /></span>
              </div>

              <div className='nav-link lastIcons'>
                  <div className="mx-3 text-center">

                  </div>
                </div>
            </div>
          </div>
        </nav>
        </div>
      
      
    </div>    
    {
      showlayer ? <><div>
            <div style={{
                position:"absolute",
                width:"100%",
                height:"100%",
                backgroundColor:"black",top:"0",
                left:"0",
                opacity:"0.65",
                zIndex:"1"
            }} onClick={() => setShowLayer(!showlayer)}></div>
        </div></> : <><div>{null}</div></>
    }
{/* setprofileCard */}
      {
        profileCard ? 
        (<div className='scale-in-top' style={{position:"absolute", top:"10px", left:"55%",zIndex:"1" }}>
          <div class="card w-50 p-2">
            <div className='d-flex align-items-center'>

                <img src={profile} class="card-img-top w-25" alt="..." />
                <div className='fw-bold fs-5 w-100 '>
                    <h5 className='fw-bold'>User Name </h5>
                    <h6>Worked in Previous Company </h6>
                </div>
            </div>
            <Link to="/MainProfile" style={{width:'100%'}}>
                    <button style={{width:'100%'}} onClick={() => setprofileCard(false)} className='btn btn-outline-primary rounded-5 text-primary'>View Profile</button> <hr />
            </Link>
                <div class="card-body fs-6">
                    <h5 class="card-title fw-bold text-secondary">Account</h5>
                    <p>Settings & privacy</p>
                    <p>Help</p>
                    <p>Language</p> <hr />
                    <h5 className='fw-bold text-secondary'>Manage</h5>
                    <p>post & Activity</p>
                    <p>Job posting Account</p> <hr />
                    <p>Sign Out</p>
                </div>

                </div>
        </div>) : null
    }
    
    {
        businesscard ? (
               <div className={`card h-100 w-25 slide-in-right  p-4`}  style={{position:"absolute", top:"10px", left:"73.5%", zIndex:"1" }}>
                  <div className='d-flex justify-content-between'>
                    <h3>For Business</h3>
                    <svg onClick={() => setbusinesscard(false)} xmlns="http://www.w3.org/2000/svg" className='' width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                  </div>
                  <div style={{overflow:"scroll"}}>

                  <div class="card my-3">
                    <div class="card-header">
                      <h5 className='fw-bold p-2'>Visit More LinkedIn Products</h5>
                    </div>
                    <div class="card-body d-flex flex-wrap p-2">
                        <div className="card m-3 p-2">icons</div>
                        <div className="card m-3 p-2">icons</div>
                        <div className="card m-3 p-2">icons</div>
                        <div className="card m-3 p-2">icons</div>
                        <div className="card m-3 p-2">icons</div>
                        <div className="card m-3 p-2">icons</div>
                    </div>
                    </div>
                    <div class="card">
                        <h5 class="card-header fw-bold">Explore more for business</h5>
                        <div class="card-body">
                            <div>
                            <h6 class="card-title">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a naturalcontent.</p>
                            </div>
                            <div>
                            <h6 class="card-title">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a naturalcontent.</p>
                            </div>
                            <div>
                            <h6 class="card-title">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a naturalcontent.</p>
                            </div>
                            <div>
                            <h6 class="card-title">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a naturalcontent.</p>
                            </div>
                            <div>
                            <h6 class="card-title">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a naturalcontent.</p>
                            </div>
                            <div>
                            <h6 class="card-title">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a naturalcontent.</p>
                            </div>
                            <div>
                            <h6 class="card-title">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a naturalcontent.</p>
                            </div>
                            <div>
                            <h6 class="card-title">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a naturalcontent.</p>
                            </div>
                            
                        </div>
                        </div>
                        </div>

                </div>
        ) : null
    }
    </>

  );
  
};

export default NavBar;
