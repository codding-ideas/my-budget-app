//Fields contains logic to render a single label and text input


import React from 'react';

//Since this method is rendering by Field tag we have bunch of method on this function so we can destructure what we want, the input contains important method that we want to pass to the input field so we will use a spread to add all to it .  <input {...input} /> this will prevent us writting this onBlur ={input.onBlur}
export default ({ input}) => {
    
    return (
        <div>
         <input {...input} />
        </div>
    )
}