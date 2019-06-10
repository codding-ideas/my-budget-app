import axios from 'axios'


//We want this action to be called with all the values from our form 


export  const createUserss = (values) => {
    return function(dispatc) {
        axios.post('/api/users', values)
        .then((res) => {
            console.log(res)
            return dispatc({
                type: 'CTREATE_USER',
                payload: res.data
            })
        })
  
    }
    
  }