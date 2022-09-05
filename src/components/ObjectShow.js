const Show1Params = {objectWidth: 13, objectVelocity: 45}; //objectWidth is in vmin, objectVelocity is pixels 

const Show1 = { //Rainbow Dot Show
  ShowParameters: { objectWidth: Show1Params.objectWidth, objectVelocity: Show1Params.objectVelocity },
  ShowObjects: [
    {
      objectOptions: { currentAngle: 20, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "vmin",
        height: Show1Params.objectWidth + "vmin",
        backgroundColor: 'rgba(148, 0, 211, .45)',
      },
    },
    {
      objectOptions: { currentAngle: 30, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "vmin",
        height: Show1Params.objectWidth + "vmin",
        backgroundColor: 'rgba(75, 0, 130, .45)',
      },
    },
    {
      objectOptions: { currentAngle: 40, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "vmin",
        height: Show1Params.objectWidth + "vmin",
        backgroundColor: "rgba(0, 0, 255, .45)",
      },
    },
    {
      objectOptions: { currentAngle: 50, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "vmin",
        height: Show1Params.objectWidth + "vmin",
        backgroundColor: "rgba(0, 255, 0, .45)",
      },
    },
    {
      objectOptions: { currentAngle: 60, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "vmin",
        height: Show1Params.objectWidth + "vmin",
        backgroundColor: "rgba(255, 255, 0, .45)",
      },
    },
    {
      objectOptions: { currentAngle: 70, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "vmin",
        height: Show1Params.objectWidth + "vmin",
        backgroundColor: "rgba(255, 127, 0, .45)",
      },
    },
    {
      objectOptions: { currentAngle: 80, leftPixel: 5, topPixel: 5 },
      styleOptions: {
        left: "5px",
        top: "5px",
        width: Show1Params.objectWidth + "vmin",
        height: Show1Params.objectWidth + "vmin",
        backgroundColor: "rgba(255, 0, 0, .45)",
      },
    },
  ],
};
const Shows = [Show1];

export default Shows;
