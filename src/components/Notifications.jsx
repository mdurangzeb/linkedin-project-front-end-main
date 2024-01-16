
import NavBar from './NavBar'
{/* <NavBar /> */}

import React from 'react';
import './Notifications.scss';
import { BsThreeDots } from "react-icons/bs";

const jobNotif = [
  {
    id: 1,
    des: "full stack engineer",
    opportunity: '2',
    location: "Delhi, India"
  },
  {
    id: 2,
    des: "frontend React engineer",
    opportunity: '3',
    location: "Pune, India"
  },
  {
    id: 3,
    des: "Node backend engineer",
    opportunity: '1',
    location: "Noida, India"
  },

]
const jobPost = [
  {
    id: 4,
    name: "Saurabh kumar",
    desc: 'I’m #hiring. Know anyone who might be interested?',
    location: "Delhi, India"
  },
  {
    id: 5,
    name: "Numetry Technology",
    desc: 'Join Numetry Technologies as a BDM for Digital Marketing. We have 4 open positions. Contact and meet clients worldwide, plan and execute marketing, find and develop opportunities, increase sales, attend events, train and lead team. Degree and experience in sales/marketing required. Send resume and cover letter to hr@numetry.in  ',
    location: "Pune, India"
  },
  {
    id: 4,
    name: "Orage Technologies Private Limited",
    desc: 'The power of content to achieve marketing goals https://lnkd.in/d7S299Yw #ContentMarketingSuccess #MarketingGoalsAchieved #ContentPower #MarketingStrategy #DigitalContent ',
    location: "Noida, India"
  },


]



const Notifications = ({user,setUser}) => {
  console.log(user,setUser)
  return (<>
  <NavBar user={user} setUser={setUser}/>
  <br /><br /><br />
    <div className='notif__div'>
      <section className="left">
        <h4>Manage your notifications</h4>
        <br />
        <br />
        <a href="">View Settings</a>
      </section>
      <section className="mid">
        <div className="notifics">
          {jobNotif.map((notif) => (
            <div key={notif.id} className="notif">
              <div className="notif__left">

                <p><span>{notif.des}</span>: <span>{notif.opportunity}</span> job opportunity in <span>{notif.location}</span></p>
                <br />
                <button>View Jobs</button>
              </div>
              <div className="notif__right">
                <div className="time">2h</div>
                <BsThreeDots />
              </div>
              
            </div>
          ))}
        </div><br />
        <div className="notifics">
          {jobPost.map((notif) => (
            <div key={notif.id} className="notif">
              <p className='notif__left'><span>{notif.name}</span> posted:  <>{notif.desc}</></p>
              <div className="notif__right">
                <div className="time">2h</div>
                <BsThreeDots />
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="notifics">
          {jobNotif.map((notif) => (
            <div key={notif.id} className="notif">
              <div className='notif__left'>
              <p ><span>{notif.des}</span>: <span>{notif.opportunity}</span> job opportunity in <span>{notif.location}</span></p>
              <br />
              <button>View Jobs</button>
              </div>
              <div className="notif__right">
                <div className="time">2h</div>
                <BsThreeDots />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="right">
        <div className='ad'>Ad <BsThreeDots /></div>
        <span className='small'>Keep up with interesting, relevant updates</span>
        <div className="img">
          <img src="https://media.licdn.com/dms/image/C4E0BAQHI9ATKrp3GJw/company-logo_100_100/0/1637345110214?e=1712793600&v=beta&t=P8J6LjrtaRTXHqDMmZBwv3lgsF_TE6-omRL_lLGpv18" alt="" />
        </div>
        <span className='desc'>Md Aurangzeb, grow your career by following ETS India</span>
        <button>Follow</button>
      </section>
    </div>
    </>
  )
}

export default Notifications