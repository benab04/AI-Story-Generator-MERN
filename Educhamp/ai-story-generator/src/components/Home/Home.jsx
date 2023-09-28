import React, { useEffect, useState } from "react";
import "./Home.css";
import { BiSend, BiSolidShareAlt, BiSave, BiSolidSave } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Typewriter } from 'react-simple-typewriter'
import { TypeAnimation } from 'react-type-animation';
import Text from 'react-text-typing';
import RealTyper from "@real-typer/react";
import axios from 'axios';
function Home() {
  const [upvote, setUpvote] = useState(false);
  const [save, setSave] = useState(false);
  const [data, setData] = useState({});
  const [prompt, changePrompt] = useState('');
  const baseURl = `http://localhost:${process.env.PORT}/info`;
  const [message, setMessage] = useState("");

  const [Fullstory,changefullstory]=useState("");
  
  async function GenerateStory(e) {
    e.preventDefault();


    const res = await fetch(baseURl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ prompt }), // Send the prompt as JSON data
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data.story)
      setMessage(data.story); // Assuming the response contains a 'story' property
      changefullstory(prompt+" "+message);
    } else {
      // Handle errors here
      console.error('Request failed with status:', res.status);
      const data = await res.json();
      console.log(data.story)
      setMessage(data.story); // Assuming the response contains a 'story' property
      changefullstory(prompt+" "+data.story);
    }

  }

  return (
    <div className="home">
      <div>
        <h2><span style={{ color: "#FF9F1C" }}>EasyAI</span> helps you create short stories based on prompts given to it.<br />
          Try typing:  ""Once upon a time in a digital world..."</h2></div>
      <form action="POST" onSubmit={GenerateStory}>
        <label>
          <input className="prompt" type="text" placeholder="Type something" name="prompt" onChange={(e) => { changePrompt(e.target.value) }}>
          </input><button onClick={GenerateStory} className="send-icon" type="submit"><BiSend /></button>
        </label>
        <div>
          {
            upvote ? <AiFillHeart style={{ color: "red" }} className="heart" onClick={() => { setUpvote(false) }} /> : <AiOutlineHeart className="heart" onClick={() => { setUpvote(true) }} />
          }
          {/* <textarea
            name="message"
            className="response"
            value={Fullstory}
            
          ></textarea> */}
          {save ? <BiSolidSave style={{ color: "#6184D8" }} className="save" onClick={() => { setSave(false) }} /> : <BiSave className="save" onClick={() => { setSave(true) }} />}            <BiSolidShareAlt className="share" />

          <div className="response" ><p>
          {Fullstory}
          </p></div>
        </div>
      </form>
    </div>

  );
}

export default Home;