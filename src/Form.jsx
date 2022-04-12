import React, { useState } from 'react'
import { validEmail } from './regex.js'

function Form () {
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [DOB, setDOB] = useState(Date)
   const [email, setEmail] = useState('')
   const [donation, setDonation] = useState(Number)

   const [firstErr, setfirstErr] = useState(false)
   const [lastErr, setLastErr] = useState(false)
   const [DOBErr, setDOBErr] = useState(false)
   const [emailErr, setEmailErr] = useState(false)
   const [donationErr, setDonationErr] = useState(false)
   
   function validate () {
      if (!validEmail.test(email)) {
         setEmailErr(true)
      } else {
         alert('Your form is valid!')
      }
   }

   return (
      <div className="form">
         <h2>Please enter your details</h2>
         <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
         />
         <br></br>     
         <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
         />
         <br></br>     
         <input
            type="date"
            placeholder="Date of Birth"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
         />
         <br></br>      
         <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <h3>Donation Amount in $NZD</h3>
         <input
            type="number"
            placeholder="Donation"
            value={donation}
            onChange={(e) => setDonation(e.target.value)}
         />
         <br></br>      
         <div>
            <button onClick={validate}> Validate </button>
         </div>
         {emailErr && <p>Your email is invalid</p>}
      </div>
   )
}

export default Form
