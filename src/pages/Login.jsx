import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css'


const Login = () => {
  const [employeeCredentials, setEmployeeCredentials] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const changeValueForm = (e) => {
    const { name, value } = e.target;
    setEmployeeCredentials({ ...employeeCredentials, [name]: value });
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log('te estas logeando:' , employeeCredentials.username, employeeCredentials.password)
    navigate('/clients/table')
  }
  

  return (
    <div className='login-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='user-container'>
        <label className='user-label'>Usuario</label>
        <InputText className='user-input' name='username' value={employeeCredentials.username} onChange={changeValueForm} />
        </div>
        <div className='password-container'>
        <label className='password-label'>Contraseña</label>
        <Password className='password-input' name='password' value={employeeCredentials.password} onChange={changeValueForm} toggleMask feedback={false}/>
        </div>
        <Button className='btn-submit' value={employeeCredentials.username} label='Entrar' type='submit'  severity="success"/>
      </form>
        
    </div>
  )
}

export default Login