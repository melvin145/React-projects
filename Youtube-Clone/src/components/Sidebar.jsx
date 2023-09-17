import React from 'react'
import YoutubeLogo from '../assets/img/yt-logo.svg'  
import YoutubeLogoText from '../assets/img/yt-logo-text.svg'

export const Sidebar = () => {
      const links=document.querySelectorAll('.sidebar__link');
      links.forEach((link)=>{
            link.addEventListener("click",AddActive)
            console.log('helo')
      })
      function AddActive(){
            links.forEach((link)=>{
                  link.classList.remove("active");
            })
            this.classList.add("active");
      }
  return (
    <div className='sidebar'  id='sidebar'>
      <nav className='sidebar__container'>
        
            <div className='sidebar__content'>
                  <div className='sidebar__lists'>
                        <a className='sidebar__link active'>
                              <i class='bx bx-home-alt-2'></i>
                              <span className='sidebar__link-text '>Home</span>
                        </a>
                        <a className='sidebar__link'>
                              <i class='bx bx-compass' ></i>
                              <span className='sidebar__link-text'>Explore</span>
                        </a>
                        <a className='sidebar__link'>
                              <i class='bx bx-play-circle' ></i>
                              <span className='sidebar__link-text'>Shorts</span>
                        </a>
                        <a className='sidebar__link'>
                              <i class='bx bxs-alarm-add' ></i>
                              <span className='sidebar__link-text'>Subscription</span>
                        </a>
                  </div>
                  <div className='sidebar__lists'>
                        <a className='sidebar__link'>
                              <i class='bx bx-library' ></i>
                              <span className='sidebar__link-text'>Library</span>
                        </a>
                        <a className='sidebar__link'>
                              <i class='bx bx-history' ></i>
                              <span className='sidebar__link-text'>History</span>
                        </a>
                        <a className='sidebar__link'>
                              <i class='bx bx-movie-play' ></i>
                              <span className='sidebar__link-text'>Your Videos</span>
                        </a>
                        <a className='sidebar__link'>
                              <i class='bx bxs-playlist' ></i>
                              <span className='sidebar__link-text'>Playlists</span>
                        </a>
                        <a className='sidebar__link'>
                              <i class='bx bx-heart'></i>
                              <span className='sidebar__link-text'>Liked Videos</span>
                        </a>
                  </div>
                  <div className='sidebar__lists'>
                        <a className='sidebar__link'>
                              <i class='bx bxs-bell-ring' ></i>
                              <span className='sidebar__link-text'>Notifications</span>
                        </a>
                        <a className='sidebar__link'>
                              <i class='bx bx-cog' ></i>
                              <span className='sidebar__link-text'>Settings</span>
                        </a>
                        <a className='sidebar__link'>
                              <i class='bx bx-log-out' ></i>
                              <span className='sidebar__link-text'>Logout</span>
                        </a>
                  </div>
            </div>
      </nav>
    </div>
  )
}
