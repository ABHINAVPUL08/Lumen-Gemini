import React, { createContext, useState } from "react";
import runChat from "../config/gemini";

// Create context
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const delayPara = (index , nextWord)=>{
    setTimeout(function(){
        setResultData(prev=>prev+nextWord);
    },75*index)
  }
  const newChat = () =>{
    setLoading(false)
    setShowResult(false)
  }  

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt!==undefined){
        response = await runChat(prompt)
        setRecentPrompt(prompt)
    }
    else{
        setPrevPrompts(prev=>[...prev,input])
        setRecentPrompt(input)
        response = await runChat(input)
    }

    try {
      // 🔹 Call API only once
    

      // 🔹 Convert **bold** into <b>...</b>
      let responseArray = response.split("**");
      let newResponse = "";

      for (let i = 0; i < responseArray.length; i++) {
        if (i % 2 === 1) {
          newResponse += `<b>${responseArray[i]}</b>`;
        } else {
          newResponse += responseArray[i];
        }
      }
      let formattedResponse = newResponse.split("*").join("<br/>");

      // 🔹 Typing effect (word by word)
      let words = formattedResponse.split(" ");
      words.forEach((word, i) => {
        delayPara(i, word + " ");
      });

      setResultData(newResponse);
    } catch (error) {
      console.error("Error in onSent:", error);
    }

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
