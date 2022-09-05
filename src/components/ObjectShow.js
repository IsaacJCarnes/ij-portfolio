const vminToPx = (width) => {
    let min = Math.min(window.innerHeight, window.innerWidth);
    return Math.ceil((width * min) / 100);
}


const Show1Params = {objectWidth: vminToPx(13), objectVelocity: vminToPx(20)};
const Show1 = { //Rainbow Dot Show
  ShowParameters: { objectWidth: Show1Params.objectWidth, objectVelocity: Show1Params.objectVelocity },
  ShowObjects: [
    {
      objectOptions: { currentAngle: 20, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "px",
        height: Show1Params.objectWidth + "px",
        backgroundColor: 'rgba(148, 0, 211, .45)',
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
      },
    },
  ],
};

const colorArray = ["rgba(255, 0, 0, .45)", "rgba(255, 127, 0, .45)", "rgba(255, 255, 0, .45)", "rgba(0, 255, 0, .45)", "rgba(0, 0, 255, .45)", 'rgba(75, 0, 130, .45)', 'rgba(148, 0, 211, .45)'].sort(() => (Math.random() > .5) ? 1 : -1);
const Show2Params = {objectWidth: vminToPx(25), objectVelocity: vminToPx(15), startingPx: vminToPx(30)};
const Show2 = { //Rainbow Dot Show
  ShowParameters: { objectWidth: Show2Params.objectWidth, objectVelocity: Show2Params.objectVelocity },
  ShowObjects: [
    {
      objectOptions: { currentAngle: 250, leftPixel: Show2Params.startingPx, topPixel: Show2Params.startingPx },
      styleOptions: {
        left: Show2Params.startingPx+ "px",
        top: Show2Params.startingPx + "px",
        width: Show2Params.objectWidth + "px",
        height: Show2Params.objectWidth + "px",
        backgroundColor: colorArray[0],
        borderRadius: '0%',
      },
    },
    {
        objectOptions: { currentAngle: 340, leftPixel: (Show2Params.startingPx+Show2Params.objectWidth), topPixel: Show2Params.startingPx },
        styleOptions: {
          left: (Show2Params.startingPx+Show2Params.objectWidth)+ "px",
          top: Show2Params.startingPx + "px",
          width: Show2Params.objectWidth + "px",
          height: Show2Params.objectWidth + "px",
          backgroundColor: colorArray[1],
          borderRadius: '0%',
        },
      },
      {
        objectOptions: { currentAngle: 70, leftPixel: (Show2Params.startingPx+Show2Params.objectWidth), topPixel: (Show2Params.startingPx+Show2Params.objectWidth) },
        styleOptions: {
          left: (Show2Params.startingPx+Show2Params.objectWidth)+ "px",
          top: (Show2Params.startingPx+Show2Params.objectWidth) + "px",
          width: Show2Params.objectWidth + "px",
          height: Show2Params.objectWidth + "px",
          backgroundColor: colorArray[2],
          borderRadius: '0%',
        },
      },
      {
        objectOptions: { currentAngle: 160, leftPixel: Show2Params.startingPx, topPixel: (Show2Params.startingPx+Show2Params.objectWidth) },
        styleOptions: {
          left: Show2Params.startingPx+ "px",
          top: (Show2Params.startingPx+Show2Params.objectWidth) + "px",
          width: Show2Params.objectWidth + "px",
          height: Show2Params.objectWidth + "px",
          backgroundColor: colorArray[3],
          borderRadius: '0%',
        },
      },
  ],
};
const Shows = [Show1, Show2];

export default Shows;
