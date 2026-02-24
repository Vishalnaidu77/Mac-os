import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = () => {
  return (
    <div>
      <MacWindow width='25vw'>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:12}} src="https://open.spotify.com/embed/playlist/5vGMsjreMahQxS4tk6wLi6?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </MacWindow>
    </div>
  )
}

export default Spotify
