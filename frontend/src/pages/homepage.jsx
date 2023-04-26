import React, { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();
  const handleClick = () => {
    if (token) {
      navigate("/");
    } else {
      alert("You need to login!!!!");
    }
  };
  return (
    <div>
      <FormContainer>
        here is home page for scanner
        <span>
          <Link to="/camera">Camera</Link>
        </span>
        <span>
          <Link to="/video">Video</Link>
        </span>
        <span>
          <Link to="/chat">Chat</Link>
        </span>
        <span>
          <Link to="/position">Position</Link>
        </span>
      </FormContainer>
    </div>
  );
};

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display:flex;
padding:4rem;
justify-content : center;
gap:1rem;
align-item:center;
background-color: #033E3E;

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
  }
  `;

export default Homepage;
