import React, { useEffect, useRef, useState } from 'react'


function MediaComponent({setChildImages, setShowMediaComponent, showMediaComponent, seteventComponent, eventComponent, dataFromEventComp}) {
    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [image, setImage] = useState('');
    const [text, setText] = useState('');

    const updateParentImages = () => {
      setChildImages(images);
    };

    console.log(dataFromEventComp)
    

    const openfile = () => {
      fileInputRef.current.click();
    };



    const handleMediaComponent =() => {
      setShowMediaComponent(!showMediaComponent)
      seteventComponent(!eventComponent)
    }

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      
  
      if (file) {
        const reader = new FileReader();
  
        reader.onloadend = () => {
          setImagePreview(reader.result);
          setImage(reader.result);
        };
  
        reader.readAsDataURL(file);
      }
    };

    const handleTextChange = (e) => {
      setText(e.target.value);
    };

    const handleSave = () => {
      const newImage = { image, text };
      const updatedImages = [...images, newImage];
      updateParentImages();
      setImages(updatedImages);
      setShowMediaComponent(!showMediaComponent)
      
  
      // Reset input fields
      setImage('');
      setText('');
    };

    return (
    <div className='' style={{
        position:"fixed",
        top:"100px",
        left:"25%",
        
    }}>
      <div class="card mediacard  p-3 " style={{height:"700px", width:"1000px"}}>
        <div class="card-header plaincard d-flex justify-content-between">
            <div className='d-flex'>


        <img className='avatar' src="https://media.licdn.com/dms/image/D4D03AQHfYpkhzSu5ew/profile-displayphoto-shrink_100_100/0/1679043758635?e=1713398400&v=beta&t=i2JaXwNnlt970SJCQcsxbfRD32tcXmFQSA8FbxlLImo" class="rounded-circle " style={{width: "80px", height:"80px"
     
    }}
    alt="Avatar" />
      <div className='text-start mx-3 mt-2'>

      <h3 className='fw-bold'>Md Aurangzeb</h3>
      <p>post any one !</p>
    </div>
      </div>
      <div>

      <button className='btn btn-primary px-3' onClick={() => setShowMediaComponent(!showMediaComponent)}>close</button>
      </div>

        </div>
        <div class="card-body ">

           
            <input type="text" placeholder='what do you want to talk about ?' value={text} onChange={handleTextChange} className='form-control p-3 fs-4' style={{border:"none", outlineStyle:"none"}}  />
            <div style={{width:"500px", height:"300px"}} className='my-4  rounded-4'>
                       

            {imagePreview && (
        <div className='my-3 selectedimage'>
          <img src={imagePreview} alt="Profile Preview" style={{width:"500px", height:"300px", objectFit:"contain"}} />
        </div>
      )}

      {dataFromEventComp && (
        <>
        {dataFromEventComp.map((data) => {
          return (
          <div className="card h-75 p-4 fw-bold fs-5 border" style={{width:"850px"}}>
            <p className='text-danger'>Meeting Will Be Held Between from {data.startDate} to {data.endDate}</p>
            <p>Mentor : {data.firstName} {data.lastName}</p>
            <p>Mode of Meeting : {data.eventType}</p>
            <p>Meeting Aganda Description : {data.description}</p>
          </div>
          )
        })}
        </>
      )}
            </div>
          <div className=' h-auto d-flex  align-items-end'>
               <div>
               <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none', }}            
                        id="profileImageInput" accept="image/*" 
                        onChange={handleImageChange}
                    />

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" onClick={openfile}
            style={{cursor:"pointer"}} fill="currentColor"  class="bi bi-image mx-3" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" style={{cursor:"pointer"}} onClick={handleMediaComponent} 
                   
                         class="bi bi-calculator mx-3" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clock-fill mx-3" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots mx-3" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
               </div>
          </div>

        </div>
        <div class="card-footer text-body-secondary d-flex justify-content-end">
        <button className='btn btn-success px-4' onClick={handleSave}>post</button>
        </div>
        </div>
    </div>
  )
}

export default MediaComponent
