import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
  

function GroupsPage() {
    const [activeTab, setActiveTab] = useState('following');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div className='mt-5 pt-4 ' style={{backgroundColor:"#f4f2ee", height:"100vh"}}>
      <NavBar />
      <div class="row group container-xl mx-auto pt-4 py-5">
            <div class="col-9">
                <div className="card p-3" style={{height:"750px"}}>
                    <div>
            <div className='d-flex grps justify-content-between border-bottom'>
                <div className='d-flex fw-bold' style={{cursor:"pointer"}}>
                <p
                    className={`cursor-pointer ${activeTab === 'following' ? 'border-bottom text-success border-success p-2 border-3' : 'p-2'}`}
                    onClick={() => handleTabChange('following')}
                    >
                    Your groups
                </p>
                <p
                    className={`mx-3 cursor-pointer ${activeTab === 'followers' ? 'border-bottom text-success border-success p-2 border-3' : 'p-2'}`}
                    onClick={() => handleTabChange('followers')}
                    >
                    Requested
                </p>
                    </div>
                    <div>
                        <button className='btn btn-outline-primary rounded-pill'>Create group</button>
                    </div>
            </div>

                 
            {/* Content based on activeTab */}
            {activeTab === 'following' && (
                
                <div className='d-flex justify-content-center'>
                   
                    <div className='text-center'>

                    <img className='w-50' src="https://www.shutterstock.com/image-vector/business-person-working-on-computer-600nw-465214358.jpg" alt="" />
                    {/* Content for Following */}
                    <h4>Discover groups</h4>
                    <p>Find other trusted communities that share and support your goals.</p>
                    <button className='btn btn-outline-primary fw-bold rounded-pill'><Link to='/discoverGropus/network'>
                        Discover
                       </Link></button>
                    </div>
                    {/* ... */}
                </div>
            )}

            {activeTab === 'followers' && (
                <div className='p-3'>
                     <div className='border w-100  p-2 rounded-4'>
                      <p className='w-75'>To help you focus on the best communities for you, we limit your total number of pending requests to join.
                        <a href="https://www.linkedin.com/help/linkedin/answer/a544801" target="_blank">Learn More</a>
                         </p>
                     </div>
                      <div className='d-flex justify-content-center'>
                    <div className='text-center'>

                    <img className='w-50' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw" alt="" />
                    {/* Content for Following */}
                    <h4>Discover groups</h4>
                    <p>Find other trusted communities that share and support your goals.</p>
                    <button className='btn btn-outline-primary fw-bold rounded-pill'
                    >
                       <Link to='/discoverGropus/network'>
                        Discover
                       </Link>
                    </button>
                    </div>
                    {/* ... */}
                </div>
                </div>
            )}
        </div>
                </div>
               
            </div>
            <div class="col-3">
                <div className="card p-3 fw-bold ">
                    <p>Groups you might be interested in</p>
                </div>
            <div className="card p-3 text-center mt-3">
            <p>Get the latest jobs and industry news</p>
            <div className="d-flex align-self-center">

            <img className='' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1713398400&v=beta&t=i2JaXwNnlt970SJCQcsxbfRD32tcXmFQSA8FbxlLImo" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
            </div>
            <p>Md Aurangzeb, explore relevant opportunities with Mavenir</p>
            <button className='btn btn-primary fw-bold '>Follow</button>
          </div>
            <Footer />
            </div>
        </div>
    </div>
  )
}

export default GroupsPage;
