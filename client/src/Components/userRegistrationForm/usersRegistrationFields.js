import React from 'react';

export default ({input, label, meta: {error, touched}}) => {
 
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom:'5px'}}/>
            <div className='text-danger' style={{marginBottom:'20px'}}>
            {touched && error }
            </div>
            
        </div>
    )
}