import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./MessageBox.css";
import { useState } from 'react';

export default function MessageBox({updateMessage}) {
    let [info, setInfo] = useState({
        from:"",
        to:"",
        mssg:"",
    });

    let handleChange = (event) => {
        setInfo((currData)=>{
            return {...currData, [event.target.name]:event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setInfo({
            from:"",
            to:"",
            mssg:"",
        });
        updateMessage(info);
        console.log(info);
    }

    return ( 
        <div className="MessageBox">
            <form onSubmit={handleSubmit}>
                <TextField id="from" label="From" variant="outlined" name="from" value={info.from} onChange={handleChange} required/>
                <br></br>
                <br></br>
                <TextField id="to" label="To" variant="outlined" name="to" value={info.to} onChange={handleChange} required/> 
                <br></br>
                <br></br>
                <textarea placeholder="write your message here" 
                type="text" rows="5" cols="25" style={{border:"5px solid pink"}} name="mssg"
                value={info.mssg} onChange={handleChange} required/>
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>Send</Button>
                <br></br>
                <br></br>
            </form> 
        </div>  
    )        
    
}