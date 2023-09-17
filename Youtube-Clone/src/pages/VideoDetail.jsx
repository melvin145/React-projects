import React from 'react'
import ReactPlayer from 'react-player'
import {useEffect,useState} from 'react'
import { useParams ,Link} from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
//import {Woman} from '../assets/img/woman-holding-weights-near-barbells.jpg'
export const VideoDetail = () => {
  const params=useParams()
  const id=params.videoid;
  const[data,setData]=useState([]);
  const[suggested,setSuggested]=useState([]);
  useEffect(()=>{
    getData();
    getSuggested() 
  },[])
  const getSuggested=async()=>{
    const data=await fetchFromAPI(`/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`);

    setSuggested(data.items)
  }
  const getData=async()=>{
    const data=await fetchFromAPI(`/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`);
    setData(data.items[0])
  }
  return (
    <div className='video__container'>
        <div className='flex__container'>
          <div className='left__container'>
            <div className='video'>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' height={'100%'} width={'100%'} controls={true} />
            </div>
            <div className='video__details-2'>
              <h1 className='video__title-2'>{data.snippet?.title}</h1>
              <div className='channel__details'>
                <div className='channel__img'>
                  <img src={data.snippet?.thumbnails.medium.url} alt="" />
                </div>
                <div className='channel__name'>
                  <h3>{data.snippet?.channelTitle}</h3>
                  <span>555k</span> <span>subscribers</span>
                </div>
                <button className='subscribe__button'>Subscribe</button>
              </div>
            </div>
          </div>
          <div className='right__container'>
          {suggested?.map((video)=>{
            return(
          <Link to={`/video/${video.id.videoId}`} style={{textDecoration:'none',color:'inherit'}}>
            <div className='sug__video'>
            <div className='img_box'>
              <img src={video.snippet?.thumbnails?.medium.url} alt="" />
            </div>
            <div className='sug__video__detail'>
                <h3 className='sug__title'>
                  {video.snippet?.title}
                </h3>
                <h5 className='sug__channel'>{video.snippet?.channelTitle}</h5>
                <span>2.6M views . 6 years ago</span>
            </div>
          </div>
        </Link>
          )
          })}
            
          </div>
        
        </div>
    </div>
  )
}
