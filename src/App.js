
import { useState } from 'react';
import './App.css';
import FormInput from './component/FormInput';

const App =()=> {
  // creating user datails inputs
   const [values, setValues] =  useState({
     userName:"",
     email:"",
     birthday:"",
     password:"",
     confirmPassword:""
   });
   //creating an array input for user details
   const inputs = [
     {
       id: 1,
       name: "userName",
       type: "text",
       placeholder :"userName",
       errorMessage:"UserName should be 3-16 and should not contain any special character!",
       label: "userName"
     },
     {
      id: 2,
      name: "email",
      type: "text",
      placeholder :"email",
      errorMessage:"Enter a valid email address",
      label: "email"
    

    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder :"birthday",
      label: "birthday"

    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder :"Password",
      errorMessage:"Passord should be 8-20 characters and include at least 1, 1 number and 1 special character",
      label: "Password"

    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder :"Confirm Password",
      errorMessage:"Password does not match!",
      label: "Confirm Password"

    }
   ]

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  };
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }
  console.log(values);
  return (
    <div className="app">
   <form onSubmit={handleSubmit}>
     <h1>Regsiter</h1>
     {inputs.map((input) =>(
        <FormInput key ={input.id}{...input} 
        value ={values[input.name]} onChange={onChange}/>
     ))}
     <button>Submit</button>
   </form>
    </div>
  );
}

export default App;
