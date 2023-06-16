import { useEffect, useState } from "react";
import '../style/videos.css'
const Videos = () => {
    let [video, setVideo]=useState([])
    let [short,setShort]=useState([])
    useEffect(()=>{
    let fetchdata=async()=>{
// let response= await fetch("http://localhost:2001/video")
let response1= await fetch("http://localhost:2001/videos")
let response2=await fetch("http://localhost:2001/shorts")
let data1= await response1.json()
let data2=await response2.json()
setVideo(data1)
setShort(data2)
// let result=await  response.json()
// setVideo(result.videos)
// setShort(result.shorts)
    }
    fetchdata()
})

    // let Delete = (id,channel)=>{
    //     let res=video.filter((x)=> x.id !== id
    //     )
    //     setVideo(res)
    //     alert(`video of ${channel} got deleted`)
    // } // this will delete but after reload video will be there
    let Delete = (id,channel)=>{
       let data= fetch(`http://localhost:2001/videos/${id}`,{
            method: 'DELETE'
        })
        alert(`video of ${channel} got deleted`)
    }


    return ( 
        <div className="main">
    <div className="video">
        <h1>Featured Videos</h1>
        <div className="mapping">
{
    video.map((data)=>{
        return(
            <div className="map">
            <img src={data.thumbnail} alt="" />
            <div className="heading">
            <h3>{data.title}</h3>
            <p>{data.channel}</p>
            <p>{data.views}</p>
            <a  onClick={()=>Delete(data.id,data.channel)}>Remove</a>
            </div>
            </div>
        );
    })
}
</div>
</div>
<h1>Shorts</h1>
<div className="shorts">
    {
        short.map((data)=>{
            return(
<div className="shortdata">
    <img src={data.thumbnail} alt="" />
    <div className="short">
    <h3>{data.title}</h3>
    <p>{data.views}</p>
    </div>
</div>
            );
        })
    }
</div>
    </div>
    
    );
}

 
export default Videos;

// to run the json server the following command need to be write in terminal
// npx json-server --watch (path of file(ex:src/data/DB.json)) --port (ex:2001
//(except 3000 which runs the project))
// to create the server create the file with extension of json and that should be in object form
// within that object stores the data in the form of key values of object and key should be in 
//double quotes