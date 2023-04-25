// import React, { useEffect, useRef, useState } from "react";
// import Webcam from "react-webcam";
// import styled, { createGlobalStyle } from "styled-components";

// const videoConstraints = {
//   width: 640,
//   height: 640,
//   facingMode: "user",
// };

// const initialList = [];

// const List = () => {
//   const [list, setList] = React.useState(initialList);
// };

// const camera = () => {
//   const webcamRef = useRef(null);
//   const [list, setList] = React.useState(initialList);
//   const [imgSrc, setImgSrc] = useState(null);
//   const capture = (e) => {
//     e.preventDefault();
//     const imageSrc = webcamRef.current.getScreenshot();
//     setImgSrc(imageSrc);
//   };

//   return (
//     <>
//       <Container>
//         <Webcam
//           audio={false}
//           height={480}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={480}
//           videoConstraints={videoConstraints}
//         />
//         <form>
//           <button onClick={capture}>Capture photo</button>
//           <button onClick={capture}>TEst photo</button>
//           <input type="text" />
//         </form>
//         <div>
//           <ul>
//             {list.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//         console.log(list);
//         {imgSrc && <img src={imgSrc} />}
//       </Container>
//     </>
//   );
// };

// const Container = styled.div`
// height: 100vh;
// width: 100vw;
// display:flex;
// padding:4rem;
// justify-content : center;
// gap:1rem;
// align-item:center;
// background-color: #033E3E;

//   h1{
//     color:white;
//     text-transform:uppercase;

//   }
// }
//   form{
//     display:flex;
//     flex-direction:column;
//     gap:2rem;
//     background-color:#00000076;
//     border-radius:2rem;
//     padding: 3rem 5rem;
//     input{
//       background-color:transparent;
//       padding:1rem;
//       border:0.1rem solid #50C878;
//       border-radius:0.4rem;
//       color:white;
//       width:100%;
//       font-size:1rem;
//       &:focus{
//         border:0.1rem solid #3CB371;
//         outline:none;
//       }

//     }
//     button {
//       background-color:#3CB371;
//       color:white;
//       padding:1rem 2rem;
//       border:none;
//       font-weight:bold;
//       cursor:pointer;
//       border-radius:0.4rem;
//       font-size:1rem;
//       text-transform:uppercase;
//       transition:0.5s ease-in-out;
//       &:hover{
//         background-color:#2E8B57;

//       }

//     }
//     span{
//       color:white;
//       text-transform:uppercase;
//       a{
//         color:#2E8B57;
//         text-transform:none;
//         font-weight:bold;
//       }
//     }
//   }

// `;

// export default camera;
// ---------------------------------------------------------------------
// import React, { useEffect, useRef, useState } from "react";
// import Webcam from "react-webcam";
// import styled, { createGlobalStyle } from "styled-components";
// const videoConstraints = {
//   width: 480,
//   height: 480,
//   facingMode: "user",
// };
// const initialList = [];
// const Camera = () => {
//   const webcamRef = useRef(null);
//   const [list, setList] = useState(initialList);
//   const [imgSrc, setImgSrc] = useState(null);
//   const capture = (e) => {
//     e.preventDefault();
//     const imageSrc = webcamRef.current.getScreenshot();
//     setImgSrc(imageSrc);
//   };
//   return (
//     <>
//       <Container>
//         <Webcam
//           audio={false}
//           height={480}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={480}
//           videoConstraints={videoConstraints}
//         />
//         <form>
//           <button onClick={capture}>Capture photo</button>
//           <input type="text" />
//         </form>
//         <div>
//           <ul>
//             {list.map((item) => (
//               <li key={item.imageSrc}>{item.imageSrc}</li>
//             ))}
//           </ul>
//         </div>
//         {imgSrc && <img src={imgSrc} />}
//       </Container>
//     </>
//   );
// };
// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   padding: 4rem;
//   justify-content: center;
//   gap: 1rem;
//   align-item: center;
//   background-color: #033e3e;
//   h1 {
//     color: white;
//     text-transform: uppercase;
//   }
//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     background-color: #00000076;
//     border-radius: 2rem;
//     padding: 3rem 5rem;
//     input {
//       background-color: transparent;
//       padding: 1rem;
//       border: 0.1rem solid #50c878;
//       border-radius: 0.4rem;
//       color: white;
//       width: 100%;
//       font-size: 1rem;
//       &:focus {
//         border: 0.1rem solid #3cb371;
//         outline: none;
//       }
//     }
//     button {
//       background-color: #3cb371;
//       color: white;
//       padding: 1rem 2rem;
//       border: none;
//       font-weight: bold;
//       cursor: pointer;
//       border-radius: 0.4rem;
//       font-size: 1rem;
//       text-transform: uppercase;
//       transition: 0.5s ease-in-out;
//       &:hover {
//         background-color: #2e8b57;
//       }
//     }
//     span {
//       color: white;
//       text-transform: uppercase;
//       a {
//         color: #2e8b57;
//         text-transform: none;
//         font-weight: bold;
//       }
//     }
//   }
// `;
// export default Camera;

//_____________________________________________

import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled, { createGlobalStyle } from "styled-components";
import OverlayImage from "./Overlay.jsx";
import { Container, Row, Col, Button } from "react-bootstrap";

const videoConstraints = {
  width: 640,
  height: 640,
  facingMode: "user",
};
const Camera = () => {
  const webcamRef = useRef(null);
  const [imageList, setImageList] = useState([]);
  // const [selectedPhoto, setSelectedPhoto] = useState();
  // useEffect(() => {
  //   console.log(selectedPhoto);
  // }, [selectedPhoto]);

  const capture = (e) => {
    e.preventDefault();
    const imageSrc = webcamRef.current.getScreenshot();
    setImageList([...imageList, imageSrc]);
    //console.log(imageList);
  };
  const uploadImage = (image) => {
    const formData = new FormData();
    formData.append("name", "avatar");
    formData.append("img", image);
    formData.append("user", "64469a01915942426ab587a2");
    fetch("/camera/upload", {
      method: "POST",
      body: formData,
    })
      .then((result) => {
        result
          .json()
          .then((res) => {
            console.log(res);
            if (res.success) {
              setImageList([]);
              alert("upload done!");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Row>
        <Col xl={4}>
          <Webcam
            audio={false}
            height={480}
            ref={webcamRef}
            screenshotFormat="image/png"
            width={480}
            videoConstraints={videoConstraints}
          />
        </Col>
        <Col xl={4}>
          <form onSubmit={capture}>
            <button type="submit">Capture photo</button>
            {/* <button type="submit">Upload photo</button> */}
          </form>
        </Col>
        <Col xl={4}>
          <Row>
            {imageList &&
              imageList.map((imageSrc, index) => (
                <Col xl={3} key={index}>
                  <OverlayImage
                    src={imageSrc}
                    alt="Overlay image"
                    show={false}
                    // onClick={(e) => (e.target.show = !e.target.show)}
                    // target={/* the target element for the overlay */}
                    placement="bottom"
                    overlayText={
                      <Button onClick={(e) => uploadImage(imageSrc)}>
                        Upload
                      </Button>
                    }
                  />
                  {/* <img
                  onClick={(e) => uploadImage(imageSrc)}
                  src={imageSrc}
                  alt={`captured image ${index}`}
                /> */}
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   padding: 4rem;
//   justify-content: center;
//   gap: 1rem;
//   align-item: center;
//   background-color: #033e3e;
//   h1 {
//     color: white;
//     text-transform: uppercase;
//   }
//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     background-color: #00000076;
//     border-radius: 2rem;
//     padding: 3rem 5rem;
//     button {
//       background-color: #3cb371;
//       color: white;
//       padding: 1rem 2rem;
//       border: none;
//       font-weight: bold;
//       cursor: pointer;
//       border-radius: 0.4rem;
//       font-size: 1rem;
//       text-transform: uppercase;
//       transition: 0.5s ease-in-out;
//       &:hover {
//         background-color: #2e8b57;
//       }
//     }
//   }
// `;
export default Camera;
