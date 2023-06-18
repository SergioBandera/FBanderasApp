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
      <form onSubmit={handleSubmit}>
        <label>Usuario</label>
        <InputText name='username' value={employeeCredentials.username} onChange={changeValueForm} />
        <label>contraseña</label>
        <Password name='password' value={employeeCredentials.password} onChange={changeValueForm} toggleMask feedback={false}/>
        <Button value={employeeCredentials.username} label='Entrar' type='submit' />
      </form>
        
    </div>
  )
}

export default Login