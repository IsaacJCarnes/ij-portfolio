const vminToPx = (width) => {
    let min = Math.min(window.innerHeight, window.innerWidth);
    return Math.ceil((width * min) / 100);
}


const Show1Params = {showStyle: 'bounce', objectWidth: vminToPx(13), objectVelocity: vminToPx(20)};
const Show1 = { //Rainbow Dot Show
  ShowParameters: { showStyle: Show1Params.showStyle, objectWidth: Show1Params.objectWidth, objectVelocity: Show1Params.objectVelocity },
  ShowObjects: [
    {
      objectOptions: { currentAngle: 20, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "px",
        height: Show1Params.objectWidth + "px",
        backgroundColor: 'rgba(148, 0, 211, .45)',
        background: "radial-gradient(circle at 100%, rgba(148, 0, 211, .65) 0%, rgba(148, 0, 211, .45) 40%, rgba(229, 236, 233, 0) 85%)",
      },
    },
    {
      objectOptions: { currentAngle: 30, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "px",
        height: Show1Params.objectWidth + "px",
        backgroundColor: 'rgba(75, 0, 130, .45)',
        background: "radial-gradient(circle at 100%, rgba(75, 0, 130, .65) 0%, rgba(75, 0, 130, .45) 40%, rgba(229, 236, 233, 0) 85%)",
      },
    },
    {
      objectOptions: { currentAngle: 40, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "px",
        height: Show1Params.objectWidth + "px",
        backgroundColor: "rgba(0, 0, 255, .45)",
        background: "radial-gradient(circle at 100%, rgba(0, 0, 255, .65) 0%, rgba(0, 0, 255, .45) 40%, rgba(229, 236, 233, 0) 85%)",
      },
    },
    {
      objectOptions: { currentAngle: 50, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "px",
        height: Show1Params.objectWidth + "px",
        backgroundColor: "rgba(0, 255, 0, .45)",
        background: "radial-gradient(circle at 100%, rgba(0, 255, 0, .65) 0%, rgba(0, 255, 0, .45) 40%, rgba(229, 236, 233, 0) 85%)",
      },
    },
    {
      objectOptions: { currentAngle: 60, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "px",
        height: Show1Params.objectWidth + "px",
        backgroundColor: "rgba(255, 255, 0, .45)",
        background: "radial-gradient(circle at 100%, rgba(255, 255, 0, .65) 0%, rgba(255, 255, 0, .45) 40%, rgba(229, 236, 233, 0) 85%)",
      },
    },
    {
      objectOptions: { currentAngle: 70, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "px",
        height: Show1Params.objectWidth + "px",
        backgroundColor: "rgba(255, 127, 0, .45)",
        background: "radial-gradient(circle at 100%, rgba(255, 127, 0, .65) 0%, rgba(255, 127, 0, .45) 40%, rgba(229, 236, 233, 0) 85%)",
      },
    },
    {
      objectOptions: { currentAngle: 80, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "px",
        height: Show1Params.objectWidth + "px",
        backgroundColor: "rgba(255, 0, 0, .45)",
        background: "radial-gradient(circle at 100%, rgba(255, 0, 0, .65) 0%, rgba(255, 0, 0, .45) 56%, rgba(229, 236, 233, 0) 85%)",
      },
    },
  ],
};

const colorArray = ["rgba(255, 0, 0,", "rgba(255, 127, 0,", "rgba(255, 255, 0,", "rgba(0, 255, 0,", "rgba(0, 0, 255,", 'rgba(75, 0, 130,', 'rgba(148, 0, 211,'].sort(() => (Math.random() > .5) ? 1 : -1);
const Show2Params = {showStyle: 'bounce', objectWidth: vminToPx(25), objectVelocity: vminToPx(15), startingPx: vminToPx(30), backSuffix: " .65)", backColorSuffix: " .45)"};
const Show2 = { //Random Color Squares
  ShowParameters: { showStyle: Show2Params.showStyle, objectWidth: Show2Params.objectWidth, objectVelocity: Show2Params.objectVelocity },
  ShowObjects: [
    {
      objectOptions: { currentAngle: 250, leftPixel: Show2Params.startingPx, topPixel: Show2Params.startingPx },
      styleOptions: {
        left: Show2Params.startingPx+ "px",
        top: Show2Params.startingPx + "px",
        width: Show2Params.objectWidth + "px",
        height: Show2Params.objectWidth + "px",
        backgroundColor: colorArray[0] + Show2Params.backColorSuffix,
        background: "radial-gradient(farthest-corner at 0% 0%, " + colorArray[0] + Show2Params.backSuffix + " 0%, rgba(229, 236, 233, 0) 86%)",
        borderRadius: '0%',
        borderTopLeftRadius: vminToPx(5) + "px " + vminToPx(5) + "px", 
      },
    },
    {
        objectOptions: { currentAngle: 340, leftPixel: (Show2Params.startingPx+Show2Params.objectWidth), topPixel: Show2Params.startingPx },
        styleOptions: {
          left: (Show2Params.startingPx+Show2Params.objectWidth)+ "px",
          top: Show2Params.startingPx + "px",
          width: Show2Params.objectWidth + "px",
          height: Show2Params.objectWidth + "px",
          backgroundColor: colorArray[1] + Show2Params.backColorSuffix,
          background: "radial-gradient(farthest-corner at 100% 0%, " + colorArray[1] + Show2Params.backSuffix + " 0%, rgba(229, 236, 233, 0) 86%)",
          borderRadius: '0%',
          borderTopRightRadius: vminToPx(5) + "px " + vminToPx(5) + "px", 
        },
      },
      {
        objectOptions: { currentAngle: 70, leftPixel: (Show2Params.startingPx+Show2Params.objectWidth), topPixel: (Show2Params.startingPx+Show2Params.objectWidth) },
        styleOptions: {
          left: (Show2Params.startingPx+Show2Params.objectWidth)+ "px",
          top: (Show2Params.startingPx+Show2Params.objectWidth) + "px",
          width: Show2Params.objectWidth + "px",
          height: Show2Params.objectWidth + "px",
          backgroundColor: colorArray[2] + Show2Params.backColorSuffix,
          background: "radial-gradient(farthest-corner at 100% 100%, " + colorArray[2] + Show2Params.backSuffix + " 0%, rgba(229, 236, 233, 0) 86%)",
          borderRadius: '0%',
          borderBottomRightRadius: vminToPx(5) + "px " + vminToPx(5) + "px", 
        },
      },
      {
        objectOptions: { currentAngle: 160, leftPixel: Show2Params.startingPx, topPixel: (Show2Params.startingPx+Show2Params.objectWidth) },
        styleOptions: {
          left: Show2Params.startingPx+ "px",
          top: (Show2Params.startingPx+Show2Params.objectWidth) + "px",
          width: Show2Params.objectWidth + "px",
          height: Show2Params.objectWidth + "px",
          backgroundColor: colorArray[3] + Show2Params.backColorSuffix,
          background: "radial-gradient(farthest-corner at 0% 100%, " + colorArray[3] + Show2Params.backSuffix + " 0%, rgba(229, 236, 233, 0) 86%)",
          borderRadius: '0%',
          borderBottomLeftRadius: vminToPx(5) + "px " + vminToPx(5) + "px", 
        },
      },
  ],
};

const randomSpeeds = [(Math.random() * vminToPx(2)) + vminToPx(3), (Math.random() * vminToPx(2)) + vminToPx(3) ,(Math.random() * vminToPx(2)) + vminToPx(3), (Math.random() * vminToPx(2)) + vminToPx(3), (Math.random() * vminToPx(2)) + vminToPx(3), (Math.random() * vminToPx(2)) + vminToPx(3), (Math.random() * vminToPx(2)) + vminToPx(3), (Math.random() * vminToPx(2)) + vminToPx(3), (Math.random() * vminToPx(2)) + vminToPx(3)];
const Show3Params = {showStyle: 'rain', objectWidth: vminToPx(1.5), objectHeight: vminToPx(6), objectVelocity: randomSpeeds, startX: vminToPx(11), startY: '0'};
const Show3 = { //Raining Xs
  ShowParameters: { showStyle: Show3Params.showStyle, objectWidth: Show3Params.objectWidth, objectHeight: Show3Params.objectHeight, objectVelocity: Show3Params.objectVelocity },
  ShowObjects: [
    {
      objectOptions: { currentAngle: 90, leftPixel: Show2Params.startingPx, topPixel: Show2Params.startingPx },
      styleOptions: {
        left: Show3Params.startX+ "px",
        top: Show3Params.startY + "px",
        width: "0px",
        height: "0px",
        borderRadius: '0%',
        borderLeft: Show3Params.objectWidth + 'px solid transparent', 
        borderRight:Show3Params.objectWidth + 'px solid transparent',
        borderBottom: Show3Params.objectHeight + 'px solid rgba(0, 0, 0, .35)',

        borderBottomRightRadius: '50%',
        borderBottomLeftRadius: '50%',
      },
    }
  ],
};

const Shows = [Show1, Show2];

export default Shows;
