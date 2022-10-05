import '../css/MovingDots.css';

import React, { useEffect, useState } from "react";
import shows from "./ObjectShow.js";

const pageHeight = document.documentElement.scrollHeight;
const pageWidth = document.documentElement.scrollWidth;

export default function MovingDots(){
    const CurrentShow = shows[new Date().getSeconds() % shows.length]; //Pseudo-random function
    //const CurrentShow = shows[2];
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

    function find_angle(A,B,C, asRadians = false) { /* https://stackoverflow.com/questions/17763392/how-to-calculate-in-javascript-angle-between-3-points */
        var AB = Math.pow(B.x-A.x,2)+ Math.pow(B.y-A.y,2);    
        var BC = Math.pow(B.x-C.x,2)+ Math.pow(B.y-C.y,2); 
        var AC = Math.pow(C.x-A.x,2)+ Math.pow(C.y-A.y,2);
        if(asRadians){
            return Math.acos((AB + BC - AC)/(4*BC*AB));
        }
        return (Math.acos((AB + BC - AC)/Math.sqrt(4*BC*AB)));
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

    const MoveCircle = (targetIndex, event) => { //Could use easing function for seconds when not going full width because of 
        if(event.propertyName !== 'top') return;
        let newOptions = [...dotOptions];
        let tempObj = {...newOptions[targetIndex]};

        let tempAngle = tempObj.objectOptions.currentAngle;
        let startX = tempObj.objectOptions.leftPixel;
        let startY = tempObj.objectOptions.topPixel;
        let changeX =  startX + (circleVelocity * getCircleTransform(true, tempObj.objectOptions.currentAngle));
        let changeY =  startY + (circleVelocity * getCircleTransform(false, tempObj.objectOptions.currentAngle));

        if(changeX+circleDiameter > pageWidth){
            let angle = (90*Math.PI/180)-(find_angle({x: startX, y: startY}, {x: changeX, y: changeY}, {x: (pageWidth-circleDiameter), y: changeY})); //Gets unknown angle
            if(startY < changeY){ //Dampens vertical movement if horizontal is changed
                changeY = changeY - Math.round((changeX-(pageWidth-circleDiameter))/Math.tan(angle));
            } else if(startY > changeY){
                changeY = changeY + Math.round((changeX-(pageWidth-circleDiameter))/Math.tan(angle));
            }

            changeX = pageWidth - circleDiameter;
            tempAngle = 180 - (tempAngle%360);
        } else if( 0 >= changeX){
            let angle = (90*Math.PI/180)-(find_angle({x: startX, y: startY}, {x: changeX, y: changeY}, {x: 0, y: changeY})); //Gets unknown angle
            if(startY < changeY){ //Dampens vertical movement if horizontal is changed
                changeY = changeY + Math.round((changeX)/Math.tan(angle));
            } else if(startY > changeY){
                changeY = changeY - Math.round((changeX)/Math.tan(angle));
            }

            changeX = 0;
            tempAngle = 180 - (tempAngle%360);
        }

        if(changeY+circleDiameter > pageHeight){
            let angle = (90*Math.PI/180)-(find_angle({x: startX, y: startY}, {x: changeX, y: changeY}, {x: changeX, y: (pageHeight-circleDiameter)})); //Gets unknown angle
            if(startX < changeX){ //Dampens horizontal movement if vertical is changed
                changeX = changeX - Math.round((changeY-(pageHeight-circleDiameter))/Math.tan(angle));
            } else if(startX > changeX){
                changeX = changeX + Math.round((changeY-(pageHeight-circleDiameter))/Math.tan(angle));
            }

            changeY = pageHeight - circleDiameter;
            tempAngle = 360 - (tempAngle%360);
        } else if( 0 >= changeY){
            let angle = (90*Math.PI/180)-(find_angle({x: startX, y: startY}, {x: changeX, y: changeY}, {x: changeX, y: 0})); //Gets unknown angle
            if(startX < changeX){ //Dampens horizontal movement if vertical is changed
                changeX = changeX + Math.round(changeY/Math.tan(angle));
            } else if(startX > changeX){
                changeX = changeX - Math.round(changeY/Math.tan(angle));
            }

            changeY = 0;
            tempAngle = 360 - (tempAngle%360);
        }
        newOptions[targetIndex] = {objectOptions: {...tempObj.objectOptions, currentAngle: tempAngle, leftPixel: changeX, topPixel: changeY}, styleOptions: {...tempObj.styleOptions, left: changeX + 'px', top: changeY + 'px'}};
        setDotOptions(newOptions);
    }

    const MovingObjects =
                    dotOptions.map((element, index) => {
                        return <div key={"movingObj"+index} className="movingDot" style={element.styleOptions} onTransitionEndCapture={(e) => {e.preventDefault(); MoveCircle(index, e)}}/>
                    });

    return(
        <div className='MovementPlatform'>
            {MovingObjects}
        </div>
    )
}