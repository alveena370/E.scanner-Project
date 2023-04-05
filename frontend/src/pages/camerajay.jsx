import React, { useRef } from "react";
import Quagga from "quagga";

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// const image = new Image();
// image.src = "oculto3.jpeg";
// image.addEventListener("load", () => {
//   ctx.drawImage(image, 0, 0, 233, 320);

//   const imageData = ctx.getImageData(10, 20, 80, 230);
//   ctx.putImageData(imageData, 260, 0);
//   ctx.putImageData(imageData, 380, 50);
//   ctx.putImageData(imageData, 500, 100);
// });

const Scanner = () => {
  const videoRef = useRef(null);

  const startScan = () => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: videoRef.current,
        },
        decoder: {
          readers: ["code_128_reader"],
        },
      },
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        Quagga.start();
      }
    );
  };

  const stopScan = () => {
    Quagga.stop();
  };

  return (
    <div>
      <button onClick={startScan}>Start Scan</button>
      <button onClick={stopScan}>Stop Scan</button>
      <video ref={videoRef}></video>
      <canvas id="canvas" width="700" height="400"></canvas>
    </div>
  );
};

export default Scanner;
