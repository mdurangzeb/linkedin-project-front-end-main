import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Jobs from './components/Jobs'
import Home from './components/Home'
import Network from './components/Network'
import Notifications from './components/Notifications'
import Messages from './components/Messages'
import MainProfile from './components/profileComponents/MainProfile';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/profileComponents/profileComp.css'
import './networkmedia.css'
import './components/jobsComponent/jobsMedia.css'
import Connections from './components/networkComponent/Connections';
import FollowersPage from './components/networkComponent/FollowersPage';
import GroupsPage from './components/networkComponent/GroupsPage';
import EventsPage from './components/networkComponent/EventsPage';
import Pages from './components/networkComponent/Pages';
import './homeMedia.css'
import axios from 'axios'
import DiscoverGroups from './components/networkComponent/DiscoverGroups';
// import Myjobs from './components/jobsComponent/Myjobs';
// import InterviewPrepComp from './components/jobsComponent/InterviewPrepComp';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Myjobs from './components/jobsComponent/Myjobs';
import InterviewPrepComp from './components/jobsComponent/InterviewPrepComp';
import JobSeekPage from './components/jobsComponent/JobSeekPage';
import ResumeBuilderpage from './components/jobsComponent/ResumeBuilderpage';
function App() {
  const [usersData, setUsersData] = useState([]);
  const [users, setUsers] = useState([]);
  // console.log(users)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8080/users');
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        setUsersData(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, []);

  // console.log(usersData);
  const [user,setUser] = useState(false)
  

  useEffect(() => {
  }, [])
  return (
    <div>
      <Router>
        {/* <NavBar user={user} setUser={setUser}/> */}
        <Routes>
          <Route exact path='/' element={user ? <Home  user={user} setUser={setUser} users={users} /> : <Login  user={user} setUser={setUser}/>} />
          {/* <Route exact path='/login' element={user ? <Home users={users} /> : <Login />} /> */}
          <Route exact path='/network' element={user?<Network user={user} setUser={setUser} usersData={usersData} />:<Login  user={user} setUser={setUser}/>} />
          
          <Route exact path='/jobs' element={user?<Jobs user={user} setUser={setUser} />:<Login  user={user} setUser={setUser}/>} />
          <Route exact path='/jobs/myjobs' element={user?<Myjobs user={user} setUser={setUser} />:<Login  user={user} setUser={setUser}/>} />

          <Route exact path='/IntrerviewPrepComp' element={user?<InterviewPrepComp user={user} setUser={setUser} />:<Login  user={user} setUser={setUser}/>} />

          <Route exact path='/ResumeBuilderpage' element={user?<ResumeBuilderpage user={user} setUser={setUser} />:<Login  user={user} setUser={setUser}/>} />


          <Route exact path='/JobSeekPage' element={user?<JobSeekPage user={user} setUser={setUser} />:<Login  user={user} setUser={setUser}/>} />

          <Route exact path='/messages' element={user?<Messages user={user} setUser={setUser} />:<Login  user={user} setUser={setUser}/>} />
          <Route exact path='/notifications' element={ user? <Notifications user={user} setUser={setUser} />: <Login  user={user} setUser={setUser}/> } />
          <Route exact path='/MainProfile' element={<MainProfile users={users} />} />
          <Route exact path='/connections/network' element={<Connections user={user} setUser={setUser} usersData={usersData} />} />
          <Route exact path='/Followerspage/network' element={<FollowersPage user={user} setUser={setUser}usersData={usersData} />} />
          <Route exact path='/groups/network' element={<GroupsPage user={user} setUser={setUser} />} />
          <Route exact path='/events/network' element={<EventsPage  user={user} setUser={setUser}/>} />
          <Route exact path='/pages/network' element={<Pages user={user} setUser={setUser} />} />
          <Route exact path='/discoverGropus/network' element={<DiscoverGroups  user={user} setUser={setUser}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
