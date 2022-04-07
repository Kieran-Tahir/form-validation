# Form Validation

## Setup 
<details> 
<summary>🏁</summary>

- Clone the repo onto your machine by opening the terminal at your workspace folder and typing `git clone` followed the 'SSH key'.
- Create a new branch with `git checkout -b YOUR_NAME`
- Open the repo with `code .`
- Open this readme file in VS Code and click `ctrl+shft+v`. This file will open in PREVIEW mode and will be a whole lot nicer to read...💥

</details>
<br>

## Overview

This repo is designed to teach you how to validate a form using regular expressions. First we are going to write regexes that match a valid email and password. Then we are going to create a form that allows a user to input an email and password and validate those with our regexes. This kind of 'form validation' is a common feature in many web applications. It is essential for preventing invalid, junk or malicious inputs in our app. 🐱‍💻

### Step 1

- Create a file called ```regex.js```
- In this file you are going to create two variables - one called validEmail and one called validPassword. Each of these will be defined as ```new RegExp()```
- Inside the brackets you will write your own regexes for each of the variables.
- Export these variables

### Step 2

- Create a file called ```Form.jsx```
- Add the ```Form.jsx``` component to ```App.jsx```
- In ```Form.jsx```:
    - Import React and useState.
    - Import your regexes from ```regex.js```
    - Add state for email, password, emailError and passwordError.
    - Create two input fields that take an email address and a password.
    - In each input field add an ```onChange``` that sets the input value as the state for the email or password.
    - Create a function called ```validate``` that checks the input value against the regexes you wrote in ```regex.js```. Try this yourself first, and if you are having trouble - check the hint below.

<details> 
<summary>Hint...</summary>

```
function validate () {
      if (!validEmail.test(email)) {
         setEmailErr(true)
      }
      if (!validPassword.test(password)) {
         setPwdError(true)
      }
   }
```

</details>

### Step 3

- Create a button that calls the validate function when clicked.
- If the email or password is not valid then display 'This email / password is invalid'

### Step 4

Now it is time for you to apply this concept to your personal project! 