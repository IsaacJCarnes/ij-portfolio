import '../css/MovingDots.css';

import React, { useEffect, useState } from "react";

const pageHeight = window.innerHeight;
const pageWidth = window.innerWidth;

export default function MovingDots(){
    console.log(window.innerHeight, window.innerWidth);
    const circleDiameter = 20; //pixels
    const circleVelocity = 80; //pixels
    const [dotOptions, setDotOptions] = useState([{objectOptions: {currentAngle: 30, leftPixel: 5, topPixel: 5}, styleOptions: {left: "5px", top:"5px", width: circleDiameter+"px", height: circleDiameter+"px"}}]);

    const getCircleTransform = (isX, targetIndex) => { //Change second parametyer to be angle
        let piRatio = Math.PI/180;
        if(isX){
            return Math.cos(dotOptions[targetIndex].objectOptions.currentAngle * piRatio);
        }else{
            return Math.sin(dotOptions[targetIndex].objectOptions.currentAngle * piRatio);
        }
    }

    useEffect(() => {
        let newOptions = [...dotOptions];
        newOptions.forEach((movingObj, index) => {
            let changeX = movingObj.objectOptions.leftPixel + (circleVelocity * getCircleTransform(true, index));
            let changeY =  movingObj.objectOptions.topPixel + (circleVelocity * getCircleTransform(false, index));
            newOptions[index] = {objectOptions: {...movingObj.objectOptions, leftPixel: changeX, topPixel: changeY}, styleOptions: {...movingObj.styleOptions, left: changeX + 'px', top: changeY + 'px'}};
        });
        setDotOptions(newOptions);
    }, []);

    const MoveCircle = (targetIndex) => { //Could use easing function for seconds when not going full width because of 
        let newOptions = [...dotOptions];
        let tempObj = {...newOptions[targetIndex]};

        let tempAngle = tempObj.objectOptions.currentAngle;
        let changeX =  tempObj.objectOptions.leftPixel + (circleVelocity * getCircleTransform(true, targetIndex));
        let changeY =  tempObj.objectOptions.topPixel + (circleVelocity * getCircleTransform(false, targetIndex));
        console.log(getCircleTransform(false, targetIndex), getCircleTransform(true, targetIndex));

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
        newOptions[targetIndex] = {objectOptions: {...tempObj.objectOptions, currentAngle: tempAngle, leftPixel: changeX, topPixel: changeY}, styleOptions: {...tempObj.styleOptions, left: changeX + 'px', top: changeY + 'px'}};
        setDotOptions(newOptions);
    }

    const MovingObjects =
                    dotOptions.map((element, index) => {
                        return <div key={"movingObj"+index} className="movingDot" style={element.styleOptions} onTransitionEndCapture={(e) => {e.preventDefault(); MoveCircle(index)}}/>
                    });

    return(
        <div className='MovementPlatform'>
            {MovingObjects}
        </div>
    )
}