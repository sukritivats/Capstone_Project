
import React,{useState} from 'react';
import "./cal.css"

const Cal=()=> {
 
 const [weight,setWeight]=useState(0);
 const [height,setHeight]=useState(0);
 const [bmi,setBmi]=useState('');
 const [message,setMessage]=useState('');

 let calBMI = (e) => {
   
    e.preventDefault();
    if(weight===0 || height===0)
    {
      alert('please enter a valid height and weight')
    }
    else
    {
      let bmi=(weight/(height*height));
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage("You are underweight")
      }
      else if(bmi>=25 && bmi<30){
        setMessage("You are healthy")
      }
      else{
        setMessage("You are overweight")
      }
    }
 }

 let reload = () =>{
      window.location.reload()
 }

  return (
    
    <div className="App">
      
      <div className='container'>
      
      <p id='name'>SUKRITI VATS</p>
             
          <h2>BMI Calculator</h2>

          <form onSubmit={calBMI}>

            <div>
              <label>Weight (kg)</label>&nbsp;&nbsp;
              <input type='text' placeholder='Enter weight in kg' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>

            <div id='np'>
              <label>Height (m)</label>&nbsp;&nbsp;&nbsp;
              <input type='text' placeholder='Enter height in meter' value={height} onChange={(event)=>setHeight(event.target.value)}/>
            </div>

            <div id="sp">
              <button className='btn' type='submit'>Submit</button>
              <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
            </div>

            <div className='center'>
               <h3>Your BMI is : {bmi}</h3>
               <p>{message}</p>
            </div>

          </form>
          

      </div>
    </div>

     
  );
}

export default Cal;
