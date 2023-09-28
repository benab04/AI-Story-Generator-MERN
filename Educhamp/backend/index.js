import 'dotenv/config'
import express from "express";
import axios from "axios";
import cors from "cors";
const app=express();
app.use(express.json())
const port =process.env.PORT;
app.use(cors());

const url= 'https://api.textcortex.com/v1/texts/completions';
const headers={
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`
      }
}
app.get('/',cors(),async (req,res) =>{
    res.json({story:''})    
    
})
app.post('/info',cors(),async (req,res) => {
    try{
    console.log(req.body.prompt)
    const prompt=req.body.prompt;
    const options = {
        method: 'POST',
        url: 'https://api.textcortex.com/v1/texts/completions',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_KEY}`
        },
        data: {
          max_tokens: 512,
          model: 'chat-sophos-1',
          n: 1,
          source_lang: 'en',
          target_lang: 'en',
          temperature: 0.65,
          text: `${prompt}`
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data.data.outputs[0].text);
        res.json({story:(response.data.data.outputs[0].text)});

      }).catch(function (error) {
        console.error(error);
      });

    }
    catch(error){
        console.error("Failed to make request:", error.message);
    }
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
})