import React,{ useCallback, useRef, useState} from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useHistory } from "react-router";
import "./WebcamCapture.css";
const videoConstranits = {
    width: 250,
    height: 400,
    facingMode: "user",
};


function WebcamCapture(){

    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const capture = useCallback(()=>{
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push("/preview")
        // console.log(imageSrc);
        // setImage(imageSrc);
    },[webcamRef])
    return (
        <div className="webcamCapture">
            <Webcam 
            audio = {false}
            height={videoConstranits.height}
            ref = {webcamRef}
            screenshotFormat = "image/jpeg"
            width = {videoConstranits.width}
            videoConstraints = {videoConstranits}
            />
            <RadioButtonUncheckedIcon
            className="webcamCapture__button"
            onClick={capture}
            fontSize="large"
            />
            {/* <img src={image} alt="" /> */}
        </div>
    );
}

export default WebcamCapture;