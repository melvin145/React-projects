import React, { useEffect,useState } from 'react'
import {fetchFromAPI} from '../utils/fetchFromAPI'
import {Link} from 'react-router-dom'
export const Home=()=>{
      const[data,setData]=useState([])
      useEffect(()=>{
            getData(); 
      },[])
      const getData= async ()=>{
            const data=await fetchFromAPI('/search?part=id%2Csnippet&type=video');
            console.log(data.items);
            setData(data.items)
      }
      return(
            <div className='main__container'>
                  <div className='grid__container'>
                  {data.map((data)=>{
                        return(
                        <Link to={`/video/${data.id.videoId}`} style={{textDecoration:'none',color:'inherit'}} >
                        <div className='container'>
                              <div className='image'>
                                    <img src={data.snippet.thumbnails.high.url} alt="" />
                              </div>
                              <div className='video__details'>
                                    <div className='video__profile'>
                                          <img src={data.snippet.thumbnails.default.url} alt="" />
                                    </div>
                                    <div className='video__description'>
                                          <h3 className='video__title'>
                                                {data.snippet.title}
                                          </h3>
                                          <h4 className='video__channel'>
                                                {data.snippet.channelTitle}
                                          </h4>
                                          <span className='views'>3M views</span>.<span className='time'>3 months ago</span>
                                    </div>
                              </div>
                        </div>
                        </Link>
                        )
                  })}
                  </div>
            </div>
      )
}