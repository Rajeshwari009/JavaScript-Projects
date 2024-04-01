import React, { useState } from 'react';
import './Contacs.module.css'

const Contact = () => {

  const[formData, setFromData]= useState({
    name:'',
    email:'',
    phoneNumber:'',
  })


  const handleInputChanges= (e)=> {
    const {name,value} = e.target
   const updatedData= {...formData, [name]:value}
    setFromData(updatedData)
   
  }


  async function submitHandler(e){
    e.preventDefault();
    const response =await fetch('https://e-commerce-website-dbe60-default-rtdb.firebaseio.com/ecommerce.json', {
      method:'POST',
      body: JSON.stringify(formData),
      headers:{
        'Content-Type': 'application/Json'
      }
    })
    const data= await response.json();
    console.log(data)
    setFromData({
      name: '',
      email: '',
      phoneNumber: ''
    });
  }

  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <label className="label">
          Name:<input type='text' className="input-text" value={formData.name} name='name' onChange={handleInputChanges}></input>
        </label>
        <label className="label">
          Email:<input type='email' className="input-email" value={formData.email}  name='email' onChange={handleInputChanges}></input>
        </label>
        <label className="label">
          Phone Number<input type='tel' className="input-number" value={formData.phoneNumber}  name='phoneNumber' onChange={handleInputChanges}></input>
        </label>
        <button type='submit' className="button-submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
