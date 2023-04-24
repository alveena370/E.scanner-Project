import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled, { createGlobalStyle } from "styled-components";

const videoConstraints = {
  width: 640,
  height: 720,
  facingMode: "user",
};

const camera = () => {
  const webcamRef = useRef();
  const [imgSrc, setImgSrc] = useState(null);
  const capture = (e) => {
    e.preventDefault();
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    console.log(imageSrc);
  };
  return (
    <>
      <Container>
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          videoConstraints={videoConstraints}
        />
        <form>
          <button onClick={capture}>Capture photo</button>
          <button onClick={capture}>Capture photo</button>
          <input type="text" />
        </form>
        {imgSrc && <img src={imgSrc} />}
      </Container>
    </>
  );
};

// const WebcamComponent = () => <Webcam />;

//   return (
//     <div>
//       <button onClick={startScan}>Start Scan</button>
//       <button onClick={stopScan}>Stop Scan</button>
//       <video ref={videoRef}></video>
//       <canvas id="canvas" width="700" height="400"></canvas>
//     </div>
//   );
// };

const Container = styled.div`
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

export default camera;
