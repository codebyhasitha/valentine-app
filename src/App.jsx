import { useState } from 'react'
import './App.css'

function App() {
  const [showLoveMessage, setShowLoveMessage] = useState(false)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })

  const handleNoHover = () => {
    const maxX = window.innerWidth - 100
    const maxY = window.innerHeight - 50
    
    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)
    
    setNoPosition({ x: randomX, y: randomY })
  }

  const handleYesClick = () => {
    setShowLoveMessage(true)
  }

  return (
    <div className="container">
      {showLoveMessage ? (
        <div className="love-page">
          <h1 className="love-message">I Love You! ❤️</h1>
          <div className="images-grid">
            <div className="image-card">
              <img src={`${import.meta.env.BASE_URL}Image 1.jpeg`} alt="Memory 1" className="love-image" />
            </div>
            <div className="image-card">
              <img src={`${import.meta.env.BASE_URL}Image 2.jpeg`} alt="Memory 2" className="love-image" />
            </div>
            <div className="image-card">
              <img src={`${import.meta.env.BASE_URL}Image 3.jpeg`} alt="Memory 3" className="love-image" />
            </div>
            <div className="image-card">
              <img src={`${import.meta.env.BASE_URL}Image 4.jpeg`} alt="Memory 4" className="love-image" />
            </div>
          </div>
          <p className="subtitle">Thank you for being my Valentine! 💕</p>
        </div>
      ) : (
        <div>
          <h1>💝 Will You Be My Valentine? 💝</h1>
          <div className="buttons">
            <button id="yesBtn" className="yes-btn" onClick={handleYesClick}>
              Yes! 💕
            </button>
            <button
              id="noBtn"
              className="no-btn"
              onMouseEnter={handleNoHover}
              style={{
                position: noPosition.x !== 0 ? 'fixed' : 'relative',
                left: noPosition.x !== 0 ? `${noPosition.x}px` : 'auto',
                top: noPosition.y !== 0 ? `${noPosition.y}px` : 'auto',
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
