import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
  

function FollowersPage({usersData}) {
    const [activeTab, setActiveTab] = useState('following');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    console.log(usersData)
    
  return (
    <div className='mt-5 pt-4 ' style={{backgroundColor:"#f4f2ee"}}>
      <NavBar />
      <div class="row follow container-xl mx-auto pt-4 py-5">
            <div class="col-9">
                <div className="card p-3">
                    <h6>Ashok Kumar's Network</h6> <hr />
                    <div>
            <div className='d-flex flex-wrap border-bottom' style={{cursor:"pointer"}}>
                <h6
                    className={`cursor-pointer ${activeTab === 'following' ? 'border-bottom border-success p-2 border-5' : 'p-2'}`}
                    onClick={() => handleTabChange('following')}
                >
                    Following
                </h6>
                <h6
                    className={`mx-5 cursor-pointer ${activeTab === 'followers' ? 'border-bottom border-success p-2 border-5' : 'p-2'}`}
                    onClick={() => handleTabChange('followers')}
                >
                    Followers
                </h6>
            </div>

                    
            {/* Content based on activeTab */}
            {activeTab === 'following' && (
                <div>
                    
                    <div className='mt-3'>
                     <p>You are following below people out of your network</p>
                    </div>
                    {
                        usersData.slice(23, 30).map((user) => {
                            return (
                                <>
                                 <div className='d-flex justify-content-between my-4'>
                                    <div className='d-flex'>


                                    <img style={{width:"60px"}} className='rounded-circle mx-3' src={user.avatar_url} alt="" />
                                        <div>
                                    <h6>{user.login}</h6>
                                    <h6><Link>
                                    {user.following_url}
                                    </Link>
                                    </h6>
                                        </div>
                                    </div>
                                    <div>

                                    <button className='btn btn-outline-secondary rounded-pill'>Following</button>
                                    </div>

                                 </div>
                                </>
                            )
                        })
                     }
                </div>
            )}

            {activeTab === 'followers' && (
                <div>
                    <div className='mt-3'>
                     <p>You are followers below people out of your network</p>
                    </div>
                      {
                        usersData.slice(15, 24).map((user) => {
                            return (
                                <>
                                 <div className='d-flex justify-content-between my-4'>
                                    <div className='d-flex'>


                                    <img style={{width:"60px"}} className='rounded-circle mx-3' src={user.avatar_url} alt="" />
                                        <div>
                                    <h6>{user.login}</h6>
                                    <h6><Link>
                                    {user.followers_url}
                                    </Link>
                                    </h6>
                                        </div>
                                    </div>
                                    <div>

                                    <button className='btn btn-outline-secondary rounded-pill'>Followers</button>
                                    </div>

                                 </div>
                                </>
                            )
                        })
                     }
                </div>
            )}
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
          <Footer />
            </div>
        </div>
    </div>
  )
}

export default FollowersPage;
