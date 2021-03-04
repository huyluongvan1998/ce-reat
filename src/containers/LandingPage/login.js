import React, {  useState } from 'react'
import Button from '../../components/Button/button';
import FormInput from '../../components/FormInput/formInput';


  



const LoginPage = () => {
    const [isValid, setIsValid] = useState(true);
    const [formData, setFormData]= useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value  })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    }

    const checkValidity = (e) => {
        console.log(e.target.value);
        console.log(isValid);
        if(e.target.value) {
            setIsValid(true)
        }
        else { setIsValid(false)}
    }

    

    

    return (
        <div className='login'>
            <h1>Login Page</h1>
            <div className='login-form'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <FormInput 
                        name='username'
                        type='text'
                        label='Username'
                        helper='insert your name'
                        changed={(e) => handleChange(e)}
                        value={formData.username}
                        clicked={(e)=>checkValidity(e)}
                        isValid={isValid}
                    />
                    
                    <FormInput 
                        name='password'
                        type='password'
                        label='Password'
                        helper='insert your Password'
                        changed={(e) => handleChange(e)}
                        value={formData.password}
                    />
                    <Button content='Submit' colorType='primary' 
                        type='submit'
                    />
                </form>
            </div>

            
        </div>
    )
}

export default LoginPage
