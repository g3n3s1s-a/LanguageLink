import "./chats.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const apiKey ="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"

export default function Chats() {

    useEffect(() => {
        // Add an initial message from the bot when component mounts
        setChatLog(prevChatLog => [
          ...prevChatLog,
          { role: "assistant", content: "Hello! I'm a language tutor. What language would you like to learn?" }
        ]);
      }, []);

    const [inputValue, setInputValue] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
   

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setChatLog((prevChatLog) => [...prevChatLog, { role: 'user', content: inputValue }])
    
        sendMessage(inputValue);
        
        setInputValue('');
      }

    const sendMessage = async (message) => {
        const url = "https://api.openai.com/v1/chat/completions";
        const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    const messages = [{ role: "system", content: "Act like a language tutor. Your first prompt is to ask the user what language they are interested in learning. Be concise and try "}];
    for (const log of chatLog){
        messages.push(log)
    }

    messages.push({
        role: "user", content: message
    })
    console.log(messages)
    const data = {
      model: "gpt-3.5-turbo",
      messages: messages
      //  { role: "assistant", content: " " },

        
    };

    setIsLoading(true);

    try {
      const response = await axios.post(url, data, { headers });
      const botMessage = response.data.choices[0].message.content;
      setChatLog((prevChatLog) => [...prevChatLog, { role: "assistant", content: botMessage }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
    }

    return (
      <>
        <Topbar />
        <div className="charsContainer">
          <Sidebar />
        </div>
        <div className="wholebot">
            <h1>ChatBot</h1>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {chatLog.map((message, index) => (
                    <div
                        key={index}
                        className= 'message'
                        style={{
                            marginTop: '16px'
                        }}
                    >
                        <div className={`${
                        message.role === 'user' ? 'bg-purple-500' : 'bg-gray-800'
                        } rounded-lg p-4 text-white max-w-sm`}>
                        {message.content}
                        </div>
                    </div>
                ))}
            </div>
            
        


            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type your message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </form>
        </div>

      </>
    );
  }
  