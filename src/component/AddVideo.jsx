import '../style/AddVideo.css'
import Image from '../images/dream1.jpg'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddVideo = () => {
let navigate=useNavigate() // hook use to navigate to other page

    let thumbnail=useRef(null)
    let title=useRef(null)
    let channel=useRef(null)
    let views=useRef(null)

    let upload=(x)=>{
        x.preventDefault()
        let data={
            thumbnail:thumbnail.current.value,
            title:title.current.value,
            channel:channel.current.value,
            views:views.current.value
        }
        fetch('http://localhost:2001/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('video uploaded successfully')
        navigate('/') // navigate to home page automatically after we upload the video
    }

    return ( <div className="addVideo">
{
    <div className="forms">
        <div className='image'>
            <img src={Image} alt="" />
        </div>
        <div className='form'>
        <h1>Add Video</h1>
        <form action="" onSubmit={upload}>
            <div className='label'>
            <label htmlFor="" >Thumbnail</label><br />
<input ref={thumbnail} type="text" placeholder="enter the thumbnail" />
</div>
<div className='label'>
    <label htmlFor="">Title</label><br />
    <input ref={title} type="text" placeholder="enter the title" />
</div>
<div className='label'>
    <label htmlFor="">Channel</label><br />
    <input ref={channel} type="text" placeholder="enter the channel name" />
</div>
<div className='label'>
    <label htmlFor="">Views</label><br />
    <input ref={views} type="text" placeholder="enter the no. of views" />
</div>
<button>Upload Video</button>
        </form>
        </div>
    </div>
}
    </div> );
}
 
export default AddVideo;