import React from 'react'
import "./formInput.css"

const FormInput = (props) =>  {
  const {label, errorMessage,onChange, id, ...inputProps } = props;
  return (
    <div className='gradient'>
      <label> {label}</label> 
        <input {...inputProps} onChange ={onChange} required />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput

// const FormInput= (props) => {
//   return (
//     <div className='FormInptu'>
//         <label> UserName</label>
//         <input placeholder={props.placeholder}/>
//     </div>
//   )
// }

// export default FormInput