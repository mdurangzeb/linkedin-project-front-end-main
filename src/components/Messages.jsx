import React, { useEffect, useState } from 'react'
import './Messages.scss';
import { FaRegEdit } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidVideoPlus } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { TbGif } from "react-icons/tb";
import { MdInsertEmoticon } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoSearch } from 'react-icons/io5';
import NavBar from './NavBar';


const conversations = [
  {
    id: 1,
    name: "Rahul Kumar",
    selectedFile: 'https://media.licdn.com/dms/image/D5603AQEMyM5vgSSYRg/profile-displayphoto-shrink_100_100/0/1702924642918?e=1710374400&v=beta&t=HuC7tuu22N8mZsUzJC0bMbWLyY8dF_NFFxdMhOJTpQY'
  },


  // users
// --------------------
  {
    id: 2,
    name: "Numan Ali",
    selectedFile: 'https://media.licdn.com/dms/image/D4D35AQHrCYRH4JYDRg/profile-framedphoto-shrink_100_100/0/1691070606087?e=1705406400&v=beta&t=TGu9CRGJloGum5Cax9P-q1pjce_eEOYHmrOzoqvb3_8'
  },

  {
    id: 3,
    name: "Payal Rajput ",
    selectedFile: 'https://media.licdn.com/dms/image/D4D03AQH7eMC7sThBGQ/profile-displayphoto-shrink_400_400/0/1703787336610?e=1710374400&v=beta&t=ouOfNTo33kLtpvuvlEdfQHBr6c9uUmeSuTPzy5LHt64'
  },

  {
    id: 4,
    name: "Numetry Technologies",
    selectedFile: 'https://media.licdn.com/dms/image/D560BAQH5YHtpxAHvDA/company-logo_100_100/0/1694512590827/numetry_technologies_logo?e=1712793600&v=beta&t=RLOZymvnXgTgVcyhvw7S60l60TqfQME-90AzlAxKzUU'
  },

  {
    id: 5,
    name: "Bharti Sarawgi",
    selectedFile: 'https://media.licdn.com/dms/image/D4D03AQGEs6QQ9mgt-w/profile-displayphoto-shrink_100_100/0/1687499266456?e=1705536000&v=beta&t=KIoaY0xfOdszVlQUDIquuG5iin-rtK2NsX36wfvzQwg'
  },

  // -------
]
const current_conversation = {
  id: 6,
  name: "Rahul kumar",
  selectedFile: 'https://media.licdn.com/dms/image/D5603AQEMyM5vgSSYRg/profile-displayphoto-shrink_100_100/0/1702924642918?e=1710374400&v=beta&t=HuC7tuu22N8mZsUzJC0bMbWLyY8dF_NFFxdMhOJTpQY'

}

const current_messages = [
  {
    id: 7,
    name: "Md Aurangeb",
    message: "Hii",
    sent: true,
    selectedFile: 'https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw',
    time: "9:00 PM"
  },

  {
    id: 8,
    name: "Rahul Kumar",
    message: "hello",
    sent: false,
    selectedFile: 'https://media.licdn.com/dms/image/D5603AQEMyM5vgSSYRg/profile-displayphoto-shrink_100_100/0/1702924642918?e=1710374400&v=beta&t=HuC7tuu22N8mZsUzJC0bMbWLyY8dF_NFFxdMhOJTpQY',
    time: "9:01 PM"
  },

  {
    id: 9,
    name: "Md Aurangeb",
    message: "How are You?",
    sent: true,
    selectedFile: 'https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw',
    time: "9:06 PM"
  },

  {
    id: 10,
    name: "Rahul Kumar",
    message: "I am good",
    sent: false,
    selectedFile: 'https://media.licdn.com/dms/image/D5603AQEMyM5vgSSYRg/profile-displayphoto-shrink_100_100/0/1702924642918?e=1710374400&v=beta&t=HuC7tuu22N8mZsUzJC0bMbWLyY8dF_NFFxdMhOJTpQY',
    time: "9:09 PM"
  },

  {
    id: 11,
    name: "Md Aurangeb",
    message: "where do you live?",
    sent: true,
    selectedFile: 'https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw',
    time: "9:10 PM"
  },

  {
    id: 12,
    name: "Rahul Kumar",
    message: "In Pune",
    sent: false,
    selectedFile: 'https://media.licdn.com/dms/image/D5603AQEMyM5vgSSYRg/profile-displayphoto-shrink_100_100/0/1702924642918?e=1710374400&v=beta&t=HuC7tuu22N8mZsUzJC0bMbWLyY8dF_NFFxdMhOJTpQY',
    time: "9:11 PM"
  },

  {
    id: 13,
    name: "Md Aurangeb",
    message: "Good",
    sent: true,
    selectedFile: 'https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1707955200&v=beta&t=d0fMsj_bFzNBzvVUoaNv191BTMsWBNoilt-20s4uqrw',
    time: "9:15 PM"
  },

  {
    id: 14,
    name: "Rahul Kumar",
    message: "Bye",
    sent: false,
    selectedFile: 'https://media.licdn.com/dms/image/D5603AQEMyM5vgSSYRg/profile-displayphoto-shrink_100_100/0/1702924642918?e=1710374400&v=beta&t=HuC7tuu22N8mZsUzJC0bMbWLyY8dF_NFFxdMhOJTpQY',
    time: "9:20 PM"
  },

]




const Messages = () => {
  const [text, setText] = useState(null)
  // const [current, set] = useState(null)

  return (<>
      <NavBar/>
      <br />
      <br />
      <br />

    <div className='messaging_cont'>
      <section className='left'>
        <div className="conversaions__div">

          <div className="conv__headers">
            <span>Messaging</span>
            <BsThreeDots />
            <FaRegEdit />
          </div>

         

          <div className="conversations">
            {conversations.map((conv) => (
              <div className="conversation" key={conv.id} >
                <img src={conv.selectedFile} alt="" />
                {conv.name}
              </div>
            ))}
          </div>

        </div>

        <div className="chat__box">
          <div className="chat__header">
            <p className='header__left'>
              <span>{current_conversation?.name}</span>
            </p>
            <div className="header__right">
              <BsThreeDots /><BiSolidVideoPlus /><FaRegStar />
            </div>
          </div>

          <div className="message__box">
            {1 == 1 ? (
              <div className="messages">
                <div className="chats">
                  {current_messages.map((msg) => (
                    <div className='chat' key={msg.id}>
                      <img src={msg.selectedFile} alt="" />
                      <div className="msg__right">
                        <div className="descr">
                          <span className='name'>{msg.name}{" "}</span>
                          <span className='time'>{msg.time}</span>
                        </div>
                        <span>{msg.message}</span>
                      </div>

                    </div>
                  ))}
                </div>

                <form action="">
                  <textarea type="text" placeholder='Write a message...' value={text} onChange={(e) => setText(e.target.value)} />
                  <div className="form__elements">
                    <MdOutlineAddPhotoAlternate />
                    <GrAttachment />
                    <TbGif />
                    <MdInsertEmoticon />

                    <button onClick={(e) => {
                      e.preventDefault()
                      console.log(text)


                      setText('')
                    }} disabled={!text} className={`${!text == "" ? "post__btn" : "disable__btn"}`}>send</button>

                    <HiOutlineDotsHorizontal />
                  </div>
                </form>
              </div>

            ) : (
              <div className="select__chat">Select the user you want to chat with.</div>
            )}
          </div>


        </div>

      </section>

      <section className="right">
        <span className='small'>Keep up with interesting, relevant updates</span>
        <div className="img">
          <img src="https://media.licdn.com/dms/image/C4E0BAQE1YYIyi95KOw/company-logo_100_100/0/1630648839769?e=1712793600&v=beta&t=cS9iYvoAiO9RZPttfVc0r25GEyDAq6nMRT2d7uYrzSA" alt="" />
        </div>
        <span className='desc'> Md Aurangzeb, grow your career by following IRPC Public Company</span>
        <button>Follow</button>
      </section>
    </div>
    </>
  )
}

export default Messages