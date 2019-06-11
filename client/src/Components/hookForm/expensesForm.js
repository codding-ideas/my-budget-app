import React from "react";
import useForm from "react-hook-form";

import { connect } from 'react-redux'

function ExpensesForm(props) {
console.log('Hook form', props)


    //QUIC START


//     const { register, handleSubmit, watch, errors } = useForm()

//     const onSubmit = datas => { console.log('datas') }
  
   
  
//     return (
     
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* register your input into Hook by invoking the register function */}
//         <input type="text" name="firstName"  ref={register} />
        
//         {/* include validation with required or other standard HTML validation rules */}
//         <input type="text" name="lastName" ref={register({ required: true })} />
//         {/* errors will return when field validation fails  */}
//         <div className='text-danger'>
//         {errors.lastName && 'This field is required'}
//         </div>
        
//         <input type="submit" />
//       </form>
//     )


//REGSISTER FIEDLS


// const { register, handleSubmit } = useForm()
//   const onSubmit = (data) => console.log(data)
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="firstName" ref={register} />
//       <input name="lastName" ref={register} />
//       <select name="gender" ref={register}>
//         <option value="male">male</option>
//         <option value="female">female</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );


//==APPLYING VALIDATION

const { register, handleSubmit, reset, errors } = useForm();
const onSubmit = (data, e) => {
  e.target.reset(); // reset after form submit
  console.log(data.firstName)
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>First name</label>
      <input
        type="text"
        name="firstName"
        ref={register({ required: true })}
      />
    </div>
    {errors.firstName && "This is required"}
    <div>
      <label>Last name</label>
      <input type="text" name="lastName" ref={register} />
    </div>


    <div>
      <label>email</label>
      <input type="text" name="email" ref={register} />
    </div>


    <div>
      <label>password</label>
      <input type="text" name="password" ref={register} />
    </div>

    <input type="submit" />
    <input
      style={{ display: "block", marginTop: 20 }}
      type="reset"
      value="Standard Reset Field Values"
    />
    <input
      style={{ display: "block", marginTop: 20 }}
      type="button"
      onClick={reset}
      value="Custom Reset Field Values & Errors"
    />
  </form>
);

 }

function mapStateToProps (state){
  return state
}

  

export default connect(mapStateToProps, null) (ExpensesForm);