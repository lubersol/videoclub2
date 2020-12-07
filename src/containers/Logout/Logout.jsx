import React from 'react';
import axios from 'axios'
//import './Logout.css';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router";
import { notification } from 'antd';

const Logout = ({setUser}) =>{
  const history = useHistory();

  const profile = async () =>{
    try{
      let token= localStorage.getItem('token')
      const options = {
        headers: {Authorization: token}
      }
      console.log(token)
      await axios.post('https://heroku-mongo-mi-atlas.herokuapp.com/api/user/:id',{}, options)
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      setUser(null)
      notification.success({message:'Hasta pronto!',description:'Esperamos que vuelvas!'})
         setTimeout(() => {
            history.push('/')
        }, 1000); 
    }catch (error) {
      console.log(error);
  }
  }
        return (
        <div className='profile'>
          <div className='header'>
              <div className='icon'></div>
          </div>
          <div className='buttons'>
              <Link to='/orders'>Mostrar alquiler</Link>
              <div className='hole1'></div>
              <Link to='/alquilar'>Crear alquiler</Link>
          </div>
          <div className='logout'>
            <div>
              <button className='logout-button' onClick={profile}>Logout</button>
            </div>
          </div>
        </div>
        )
}

export default Logout;
