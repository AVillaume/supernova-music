import intro from '../assets/Intro_Supernova-Music.mp4'
import React from 'react'
import ReactPlayer from 'react-player'
import '../styles/Video.css'



function VideoIntro() {


    return (
        <div className='videoIntro'>
            <ReactPlayer url={intro}
            config
            controls
            playing
            loop
            muted
            width='60%'
            height='60%'
            />
        </div>
    )
}
export default VideoIntro

 /*               <video className='videoIntro' autoPlay loop muted>
                    <source url={introExternal} type='video/mp4'/>
                </video>*/