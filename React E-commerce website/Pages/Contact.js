import React, { useState } from 'react';
import './Contacs.css'
import { Prompt } from 'react-router-dom';

const Contact = () => {
  const [isEntering, setIsEntering] = useState(false);
  const [formData, setFromData] = useState({
    name:'',
    email:'',
    phoneNumber:'',
  })

  const handleInputChanges= (e)=> {
    const {name,value} = e.target
    const updatedData= {...formData, [name]:value}
    setFromData(updatedData)
  }

  const formFocusHandler= ()=> {
    setIsEntering(true)
  }

  async function submitHandler(e){
    e.preventDefault();
    const response = await fetch('https://e-commerce-website-dbe60-default-rtdb.firebaseio.com/ecommerce.json', {
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
    setIsEntering(false)
    alert("Thank you for submitting your details, we will get back to you in next 24 Hours")
  }

  return (
    <div className='bodyy'>
      <div className="video-container">
        <video autoPlay loop muted className="bg-video">
          <source src="https://cdn.pixabay.com/video/2024/02/25/201947-916877801_tiny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="contact-container">
          <Prompt
            when={isEntering}
            message={(location) => "Are you sure you want to leave? You will lose the existing details."}
          />
          <form className="contact-form" onSubmit={submitHandler} onFocus={formFocusHandler}>
            <label className="contact-label">
              Name:
              <input
                type='text'
                className="contact-input"
                value={formData.name}
                name='name'
                onChange={handleInputChanges}
                placeholder='Enter Your Name'
              />
            </label>
            <label className="contact-label">
              Email:
              <input
                type='email'
                className="contact-input"
                value={formData.email}
                name='email'
                onChange={handleInputChanges}
                placeholder='Enter Your E-mail'
              />
            </label>
            <label className="contact-label">
              Contact No.:
              <input
                type='tel'
                className="contact-input"
                value={formData.phoneNumber}
                name='phoneNumber'
                onChange={handleInputChanges}
                placeholder='Enter Your contact Number'
              />
            </label>
            <button type='submit' className="contact-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
