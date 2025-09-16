import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/context'

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  const cards = [
    { text: "Suggest me the best place", icon: assets.compass_icon },
    { text: "Briefly summarise this concept: Urban Planning", icon: assets.bulb_icon },
    { text: "Brainstorm team bonding activities for our work retreat", icon: assets.message_icon },
    { text: "Improve the readability of the following code", icon: assets.code_icon },
  ];

  return (
    <div className="main">
      {/* Navbar */}
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>

      {/* Main Container */}
      <div className="main-container">
        {!showResult
        ?<>
         <div className="greet">
          <p><span>Hello,</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <p>{card.text}</p>
              <img src={card.icon} alt="card-icon" />
            </div>
          ))}
        </div>
        </>
        :<div className='result'>
            <div className="result-title">
                <img src = {assets.user_icon} alt = "" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ? <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
               
            </div>
        </div>
        
}
        
        

       
        <div className="main-bottom">
          <div className="search-box">
           
            <input 
              onChange={(e) => setInput(e.target.value)} 
              value={input} 
              type="text" 
              placeholder="Enter a prompt here" 
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
            
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="Send" />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. 
            Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
