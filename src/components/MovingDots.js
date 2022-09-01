import '../css/MovingDots.css';

import React, { useEffect, useState } from "react";

const pageHeight = window.innerHeight;
const pageWidth = window.innerWidth;

export default function MovingDots(){
    console.log(window.innerHeight, window.innerWidth);
    const circleDiameter = 20; //pixels
    const circleVelocity = 80; //pixels
    const [dotOptions, setDotOptions] = useState({objectOptions: {currentAngle: 30, leftPixel: 5, topPixel: 5}, styleOptions: {left: "5px", top:"5px", width: circleDiameter+"px", height: circleDiameter+"px"}});

    const getCircleTransform = (isX) => {
        let piRatio = Math.PI/180;
        if(isX){
            return Math.cos(dotOptions.objectOptions.currentAngle * piRatio);
        }else{
            return Math.sin(dotOptions.objectOptions.currentAngle * piRatio);
        }
    }

    useEffect(() => {
        let changeX =  dotOptions.objectOptions.leftPixel + (circleVelocity * getCircleTransform(true));
        let changeY =  dotOptions.objectOptions.topPixel + (circleVelocity * getCircleTransform(false));
        setDotOptions({objectOptions: {...dotOptions.objectOptions, leftPercent: changeX, topPercent: changeY}, styleOptions: {...dotOptions.styleOptions, left: changeX+"px", top:changeY+"px"}});
    }, []);

    const MoveCircle = () => { //Could use easing function for seconds when not going full width because of 
        let tempAngle = dotOptions.objectOptions.currentAngle;
        let changeX =  dotOptions.objectOptions.leftPixel + (circleVelocity * getCircleTransform(true));
        let changeY =  dotOptions.objectOptions.topPixel + (circleVelocity * getCircleTransform(false));
        console.log(getCircleTransform(false), getCircleTransform(true));

        if(changeX > pageWidth){
            changeX = pageWidth - circleDiameter;
            tempAngle = 180 - (tempAngle%360);
        } else if( 0 >= changeX){
            changeX = 0;
            tempAngle = 180 - (tempAngle%360);
        }

        if(changeY+circleDiameter > pageHeight){
            changeY = pageHeight - circleDiameter;
            tempAngle = 360 - (tempAngle%360);
        } else if( 0 >= changeY){
            changeY = 0;
            tempAngle = 360 - (tempAngle%360);
        }

        setDotOptions({objectOptions: {...dotOptions.objectOptions, currentAngle: tempAngle, leftPixel: changeX, topPixel: changeY}, styleOptions: {...dotOptions.styleOptions, left: changeX+"px", top:changeY+"px"}});
    }
    return(
        <div className="movingDot" style={dotOptions.styleOptions} onTransitionEndCapture={(e) => {e.preventDefault(); MoveCircle()}}/>
    )
}