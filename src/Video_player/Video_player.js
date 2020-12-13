import React from 'react'
import './Video_player.css'
import ReactPlayer from 'react-player'
function Video_player() {
    
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=UqyD2PgOw9Q'
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      )
    }

  export default Video_player;