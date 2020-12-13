import axios from 'axios'


export const isUserValid = (signUpDetails) => {
    
    return (dispatch) => {
        return axios.post('https://counsellinggurus.in:3001/auth/signup/', signUpDetails)
            .then(res => {
                console.log(res)
                if (res.data.status ) {
                    dispatch({
                        type: 'signUp',
                        payload: res.data.status
                        
                    });
                console.log(res.data.status)
                    
                }
                else {
                    alert(res.data.responseEntity);
                }
            })
    }
}
