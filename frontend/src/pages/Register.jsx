
import { useRef, useState } from "react";
import styled, { createGlobalStyle } from 'styled-components'
import{Link}  from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 

const Register =()=> {
  const [errors, setErrors] = useState({});

  const emailInput = useRef();
  const nameInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput=useRef()



  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleValidation = () => {
      
    if (passwordInput.current.value !== confirmPasswordInput.current.value) {
     
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (nameInput.current.value.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (passwordInput.current.value.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (emailInput.current.value === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }
    return true
  }

  const handlerSubmit = (e)=>{
    
    e.preventDefault();
   handleValidation()
    const registerData = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
      confirmPasswordInput:confirmPasswordInput.current.value
    };
    console.log("data",registerData)
      let config = {
        headers:{"Content-Type":"application/json"},
        method:"POST",
        body : JSON.stringify(registerData)
      };

      // fetch('/api/v1/users/register', config).then(response =>{
      //   response.json().then(d=>{
      //     console.log(d)
      //   }).catch(err=>{
      //     console.log(err)
      //   })
      // }).catch(err=>{
      //   console.log(err)
      // })
      
      fetch("/api/v1/users/register",config).then(response=>{
        console.log(response,'response')
          if(!response.ok){
      
              return response.json().then(err=>{
                  console.log(err);
                  setErrors({ email: 'Email is invalid' })
              })
          }
          return response.json()
      }).then(result=>{
      
          console.log(result);
      }).catch(err=>{
          setErrors({email:'Email is invalid' })
          console.log(err);
      })
   
  };
  
  return (
    <>
    
 <FormContainer>
  <form onSubmit ={ handlerSubmit}>
    <div className='brand'>
  
      <h1>E.Scanner</h1>
    </div>



    <input type="text" 
    placeholder='UserName'
    name ='username'
    ref={nameInput}/>



    <input type="email" 
     placeholder='Email'
     name ='email'
     ref={emailInput}/>


      <input type="password" 
     placeholder='Password'
     name ='password'
     ref={passwordInput}/>


      <input type="password" 
     placeholder='confirm password'
     name ='confirmPassword'
     ref={confirmPasswordInput}/>
     <button type ="submit">Create User</button>
     <span>Already have an account ? <Link to="/login">Login</Link></span>
  </form>
</FormContainer>
<ToastContainer /> 
    </>
  )
}
const FormContainer = styled.div`
height: 100vh;
width: 100vw;
 display:flex;
 padding:4rem;
 justify-content : center;
 gap:1rem;
 align-item:center;
      color:white;
      background-color: #033E3E;
 .brand{
   display: flex;
   align-item:center;
   gap:1rem;
   justify-content:center;
   
   h1{
     color:white;
     text-transform:uppercase;
     
    }
  }
  form{
    display:flex;
    flex-direction:column;
    gap:2rem;
     background-color:#00000076;
     border-radius:2rem;
     padding: 3rem 5rem;
     input{
       background-color:transparent;
       padding:1rem;
       border:0.1rem solid #50C878;
       border-radius:0.4rem;
       color:white;
       width:100%;
       font-size:1rem;
       &:focus{
         border:0.1rem solid #3CB371;
         outline:none;
        }
        
      }
      button {
        background-color:#3CB371;
        color:white;
        padding:1rem 2rem;
        border:none;
        font-weight:bold;
        cursor:pointer;
        border-radius:0.4rem;
        font-size:1rem;
        text-transform:uppercase;
        transition:0.5s ease-in-out;
        &:hover{
          background-color:#2E8B57;
          
        }

        
     }
     span{
       color:white;
       text-transform:uppercase;
       a{
         color:#2E8B57;
         text-transform:none;
         font-weight:bold;
       }
     }
  

 `;
 
 export default Register;