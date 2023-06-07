import { useState } from "react";
import '../style/videos.css'
const Videos = () => {
    let [video, setVideo]=useState([
        {
            id:1,
            thumbnail:"https://i.ytimg.com/vi/MHr8-ak13rQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI2FkPc9cBiVjRImwLifLSTQC7LQ",
            title:"TAPOICA For Lunch || Maravalli Kizhangu Cooking In Village || Kappa Recipe || The Traditional Life",
            channel:"The Traditional Life ",
            views:"1M"
        },
        {
            id:2,
            thumbnail:"https://i.ytimg.com/vi/KDr68OjO1uc/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhlIF4oSzAP&rs=AOn4CLBhXoYEJ6bDSUoZTBSwquIc6GfW4g",
            title:"Mr Bean: The Artist | Full Episodes | Classic Mr Bean",
            channel:"Classic Mr Bean",
            views:"27M"
        },
        {
            id:3,
            thumbnail:"https://i.ytimg.com/vi/JXeLF09Zml8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMQhCn7iCZ20GYDvJGoEAtbNLKmQ",
            title:"Arrange Marriage | Javari Junction | Tamada Media | Mallya Bagalkot",
            channel:"Javari Junction",
            views:"625"
        },
        {
            id:4,
            thumbnail:"https://i.ytimg.com/vi/tAddHFQsUF8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRK7apljnvfvmqUOQ8lHBkdNyz_w",
            title:"Warm Home For Yourself. With His Own Hands. Build a House Out of Wood, Stone and Clay (Part 1)",
            channel:"Primitive Villa",
            views:"3.3M"
        },
        {
            id:5,
            thumbnail:"https://i.ytimg.com/an_webp/5oH9Nr3bKfw/mqdefault_6s.webp?du=3000&sqp=CMiH96MG&rs=AOn4CLANpsRLwltf1YIixAERlBE_9JH52Q",
            title:"Tom & Jerry | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
            channel:"WB Kids",
            views:"203M"
        },
        {
            id:6,
            thumbnail:"https://i.ytimg.com/vi/SuWf4jen8jc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu4e9WZdCBXyRJIl3KDm_v47Su5g",
            title:"Tharle Box | Nithin Kamath | Kannada Stand Up Comedy | Mann Tinno Kelsa",
            channel:"Tharle Box",
            views:"11k"
        },
        {
            id:7,
            thumbnail:"https://i.ytimg.com/vi/UU9U4_S4plc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKoxRgqD0CnMGU3w5lpzHLzr4i6A",
            title:"FULL VIDEO: Ending 2 Month of Survival - Building Houses Of Wood, Stone And Clay - Winter Camping",
            channel:"Primitive Villa",
            views:"329K"
        },
        {
            id:8,
            thumbnail:"https://i.ytimg.com/vi/kMUcwWWmWug/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASQR9QSIDsDByXK3I6oi8Rn7DUyg",
            title:"What Level is Your English? — TEST with ZOOTOPIA",
            channel:"Learn English With Tv Series",
            views:"584K"
        },
        {
            id:9,
            thumbnail:"https://i.ytimg.com/vi/aW5WtB6vjU4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADBRhYLMQ3qOWn0hnOZPXWM3OAnQ",
            title:"BREAD OMELETTE | Eggs with Bread | Quick Simple Easy Egg Recipe Cooking in Village | Fastest Omelet",
            channel:"Village Cooking Channel",
            views:"22M"
        },
        {
            id:10,
            thumbnail:"https://i.ytimg.com/vi/qNtxJmQoxA4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWZQsP26vZlRtmAgLOTRExx0KIfA",
            title:"LIFE OF TENDER COCONUT | Tender Coconut Recipes | Kerala Traditional Lifestyle.",
            channel:"Life in Wetland",
            views:"89K"
        },
        {
            id:11,
            thumbnail:"https://i.ytimg.com/vi/bi2OPrRwSTk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcr4BmK69VsdUfliKBHro8gew66Q",
            title:"King Kong | V. rex Fight in 4K HDR",
            channel:"Universal Pictures",
            views:"130M"
        },
        {
            id:12,
            thumbnail:"https://i.ytimg.com/vi/Ak34skdOeNI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbOH3LBkD0U69cMcnIXRcw8bzXTg",
            title:"Whole Chicken Prepared in the Forest Relaxing Cooking",
            channel:"Men With The Pot",
            views:"9.5M"
        }
    ])
    let [short,setShort]=useState
    ([
        {
thumbnail:"https://i.ytimg.com/vi/mU1sGtF05Io/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAnisAECAId1Sw2ErPoAJX7_mcj_g",
title:"Jack Sparrow",
views:"20M views"
        },
        {
            thumbnail:"https://i.ytimg.com/vi/gNfA3XIfu4Y/hq720.jpg?sqp=-oaymwEdCMAEENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCD-UnyG36tq11-XnLdB6wvGF5gcg",
            title:"Dr Bro",
            views:"438K views"
        },
        {
            thumbnail:"https://i.ytimg.com/vi/nk-64mJhSwg/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLC-a4uORTPHfhk--pmanANr4H-D3Q",
            title:"The Power Lies",
            views:"1M views"
        },
        {
            thumbnail:"https://i.ytimg.com/vi/T3xQVFITVMM/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCukO9onO63EY4v2XM6tZDkAJjXaA",
            title:"Worlds most Dangerous Knot",
            views:"28M views"
        },
        {
            thumbnail:"https://i.ytimg.com/vi/ElWsGY027go/oar2.jpg",
            title:"Harry Potter 2001 vs 2021",
            views:"20M views"
        },
        {
            thumbnail:"https://i.ytimg.com/vi/TUBxNmiT8xw/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLByeQlcFjyvDkvEzwwnVe5bM7RpMg",
            title:"Royal Entry IAS vs IPS Officer",
            views:"1.1M views"
        }

    ])
    let Delete = (id,channel)=>{
        let res=video.filter((x)=> x.id !== id
        )
        setVideo(res)
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