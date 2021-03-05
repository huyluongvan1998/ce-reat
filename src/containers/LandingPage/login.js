import React, {  useState } from 'react'
import Button from '../../components/Button/button';
import FormInput from '../../components/FormInput/formInput';
import { produce } from "immer";

  



const LoginPage = () => {
    const [isFormValid, setIsFormValid] = useState(true);
    const [formData, setFormData]= useState({
        username: {
            value: '',
            isValid: ''
        },
        password: {
            value: '',
            isValid: ''
        }
    })

    const handleChange = (e) => {
        setFormData(produce(prev => prev[e.target.name].value))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    }

    const checkValidity = (e) => {
        console.log(e.target.value);
        
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
                        
                    />
                    
                    <FormInput 
                        name='password'
                        type='password'
                        label='Password'
                        helper='insert your Password'
                        changed={(e) => handleChange(e)}
                        value={formData.password}
                        clicked={(e)=>checkValidity(e)}
                        
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
