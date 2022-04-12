import React, { useState } from 'react'
import { validFirst, validLast, validEmail } from './regex.js'

function Form () {
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [DOB, setDOB] = useState(Date)
   const [email, setEmail] = useState('')
   const [donation, setDonation] = useState(Number)

   const [firstErr, setFirstErr] = useState(false)
   const [lastErr, setLastErr] = useState(false)
   const [DOBErr, setDOBErr] = useState(false)
   const [emailErr, setEmailErr] = useState(false)
   
   function validate () {
      setEmailErr(false)
      setFirstErr(false)

      if (!validEmail.test(email)) {
         setEmailErr(true)
      } 
      
      if (!validFirst.test(firstName)) {
         setFirstErr(true)
      } 
      
   }

   function showSignUpButton () {
      //test here
   }

   return (
      <div className="form">
         <h2>Please enter your details</h2>
         {firstErr && <p>Please enter a valid first name</p>}
         <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
         />
         <br></br>
         {lastErr && <p>Please enter a valid last name</p>}     
         <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
         />
         <br></br>
         {DOBErr && <p>Please enter a valid Date of Birth</p>}    
         <input
            type="date"
            placeholder="Date of Birth"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
         />
         <br></br>      
         {emailErr && <p>Please enter a valid email address</p>}
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
            <button onClick={() => validate()}> Validate </button>
         </div>
         {emailErr === false && firstErr === false &&
         <div>
            <button> Sign Up </button>
         </div>
         }
      </div>
   )
}

export default Form
