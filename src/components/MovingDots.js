import '../css/MovingDots.css';

import React, { useEffect, useState } from "react";
import shows from "./ObjectShow.js";

const pageHeight = window.innerHeight;
const pageWidth = window.innerWidth;

export default function MovingDots(){
    const CurrentShow = shows[Math.floor(Math.random() * shows.length)];
    const circleDiameter = CurrentShow.ShowParameters['objectWidth']; //vmin to pixels
    const circleVelocity = CurrentShow.ShowParameters['objectVelocity']; //pixels
    const [dotOptions, setDotOptions] = useState(CurrentShow.ShowObjects);

    const getCircleTransform = (isX, angle) => { //Change second parametyer to be angle
        let piRatio = Math.PI/180;
        if(isX){
            return Math.cos(angle * piRatio);
        }else{
            return Math.sin(angle * piRatio);
        }
    }

    useEffect(() => {
        let newOptions = [...dotOptions];
        newOptions.forEach((movingObj, index) => {
            let changeX = movingObj.objectOptions.leftPixel + (circleVelocity * getCircleTransform(true, movingObj.objectOptions.currentAngle));
            let changeY =  movingObj.objectOptions.topPixel + (circleVelocity * getCircleTransform(false, movingObj.objectOptions.currentAngle));
            newOptions[index] = {objectOptions: {...movingObj.objectOptions, leftPixel: changeX, topPixel: changeY}, styleOptions: {...movingObj.styleOptions, left: changeX + 'px', top: changeY + 'px'}};
        });
        setDotOptions(newOptions);
    }, []);

    const MoveCircle = (targetIndex) => { //Could use easing function for seconds when not going full width because of 
        let newOptions = [...dotOptions];
        let tempObj = {...newOptions[targetIndex]};

        let tempAngle = tempObj.objectOptions.currentAngle;
        let changeX =  tempObj.objectOptions.leftPixel + (circleVelocity * getCircleTransform(true, tempObj.objectOptions.currentAngle));
        let changeY =  tempObj.objectOptions.topPixel + (circleVelocity * getCircleTransform(false, tempObj.objectOptions.currentAngle));

        if(changeX+circleDiameter > pageWidth){
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