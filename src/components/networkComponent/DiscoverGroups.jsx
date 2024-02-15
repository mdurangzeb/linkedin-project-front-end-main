import React from 'react'
import NavBar from '../NavBar'

function DiscoverGroups() {
    const itAndSoftwareGroups = [
        {
          name: "Tech Innovators Network",
          members: "5M members",
          description: "Connecting tech enthusiasts and innovators from around the world. Share your insights, latest projects, and collaborate on groundbreaking ideas.",
          image: "https://example.com/tech_group.jpg",
        },
        {
          name: "Software Developers Hub",
          members: "2.5M members",
          description: "A community for software developers and engineers. Discuss coding challenges, share solutions, and explore the latest trends in software development.",
          image: "https://example.com/software_developers_group.jpg",
        },
        {
          name: "IT Professionals Club",
          members: "3.8M members",
          description: "Connecting IT professionals globally. Discuss IT strategies, network with industry experts, and stay updated on the latest advancements in technology.",
          image: "https://example.com/it_professionals_group.jpg",
        },
        {
          name: "Data Science Enthusiasts",
          members: "1.5M members",
          description: "For data science professionals and enthusiasts. Explore the latest trends, tools, and projects in the field of data science and analytics.",
          image: "https://example.com/data_science_group.jpg",
        },
        {
          name: "Cybersecurity Warriors Network",
          members: "4M members",
          description: "Bringing together cybersecurity experts and enthusiasts. Discuss the latest cybersecurity threats, share best practices, and collaborate on securing digital environments.",
          image: "https://example.com/cybersecurity_warriors_group.jpg",
        },
        {
          name: "AI and Machine Learning Explorers",
          members: "1.2M members",
          description: "A community for AI and machine learning enthusiasts. Discuss AI algorithms, share research findings, and explore the applications of machine learning.",
          image: "https://example.com/ai_ml_explorers_group.jpg",
        },
        {
          name: "Tech Startups Collective",
          members: "3.5M members",
          description: "For entrepreneurs and professionals in the tech startup ecosystem. Discuss startup strategies, seek mentorship, and stay updated on the latest startup trends.",
          image: "https://example.com/tech_startups_group.jpg",
        },
        {
          name: "DevOps Masters Society",
          members: "2M members",
          description: "Connecting DevOps professionals and enthusiasts. Discuss DevOps practices, share automation techniques, and collaborate on achieving continuous integration and delivery.",
          image: "https://example.com/devops_masters_group.jpg",
        },
        {
          name: "Cloud Computing Experts Circle",
          members: "2.7M members",
          description: "A community for cloud computing enthusiasts and experts. Discuss cloud architecture, share experiences with cloud platforms, and explore the future of cloud technology.",
          image: "https://example.com/cloud_computing_experts_group.jpg",
        },
        {
          name: "Software Architecture Guild",
          members: "2.3M members",
          description: "For software architects and design enthusiasts. Discuss software architecture patterns, share best practices, and explore innovative approaches to software design.",
          image: "https://example.com/software_architecture_group.jpg",
        },
        {
          name: "Blockchain Innovators Forum",
          members: "1.8M members",
          description: "A space for blockchain enthusiasts and innovators. Discuss blockchain technology, share insights on cryptocurrency, and explore decentralized applications.",
          image: "https://example.com/blockchain_innovators_group.jpg",
        },
        {
          name: "UX/UI Designers Collective",
          members: "1.4M members",
          description: "Bringing together UX/UI designers from around the world. Discuss user experience design, share design principles, and explore the intersection of creativity and technology.",
          image: "https://example.com/ux_ui_designers_group.jpg",
        },
        {
          name: "Mobile App Developers Guild",
          members: "3.2M members",
          description: "For mobile app developers and enthusiasts. Discuss mobile app development, share coding tips, and explore the latest trends in mobile technology.",
          image: "https://example.com/mobile_app_developers_group.jpg",
        },
        {
          name: "IT Governance Experts Network",
          members: "2.6M members",
          description: "A community for IT governance professionals and experts. Discuss IT governance frameworks, share compliance strategies, and explore best practices in IT management.",
          image: "https://example.com/it_governance_experts_group.jpg",
        },
        {
          name: "Open Source Contributors Club",
          members: "2.9M members",
          description: "For open source enthusiasts and contributors. Discuss open source projects, share coding contributions, and explore the collaborative world of open source development.",
          image: "https://example.com/open_source_contrib"
        }
    ]
  return (
    <div className=''>
        <NavBar />
        <div className='row container-xl mx-auto p-3' style={{top:"80px", position:"relative"}}>
            <div className='p-3'>See All Results</div>
          <div className="col-9 ">
            <div className="card border shadow p-3">
      {
        itAndSoftwareGroups.map((data) => {
            return (
                <>
                 <div>
                 <div className='d-flex justify-content-between my-1'>
                                    <div className='d-flex lh-base'>


                                    <img  className='mx-3' style={{width:"120px", height:"80px"}} src="https://www.closingthegap.com/wp-content/uploads/2020/05/generic-logo.png" alt="image" />
                                    <div>
                                        <div className='fw-bold'>{data.name}</div>
                                        <div>{data.members}</div>
                                        <p className='text-secondary' style={{fontSize:"12px"}}>
                                        {data.description}
                                        </p>
                                        <hr />
                                    </div>
                                    </div>
                                    <div>

                                    <button className='btn btn-outline-secondary rounded-pill'>Join</button>
                                    </div>

                                 </div>
                 </div>
                </>
            )
        })
      }
          </div>
          </div>
          <div class="col-3">
            <div className="card p-3 text-center">
            <p>Get the latest jobs and industry news</p>
            <div className="d-flex align-self-center">

            <img className='' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1713398400&v=beta&t=i2JaXwNnlt970SJCQcsxbfRD32tcXmFQSA8FbxlLImo" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
            </div>
            <p>Md Aurangzeb, explore relevant opportunities with Mavenir</p>
            <button className='btn btn-primary fw-bold'>Follow</button>
          </div>
            </div>
        </div>
    </div>
  )
}

export default DiscoverGroups
