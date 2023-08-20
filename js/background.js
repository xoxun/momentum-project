const colors = [
    "#FFE0C6",
    "#FFD9E4",
    "#FFC0CB",
    "#FFB0CF",
    "#FFDCFF",
    "#FFBEFF",
    "#FFB9F0",
    "#FFAAFF",
    "#F0FFF0",
    "#AFFFEE",
    "#EBFFEB",
    "#46D2D2",
    "#A2E9FF",
    "#96FFFF",
    "#C8FFFF",
    "#E8F5FF",
    "#AECDFF",
    "#B8D7FF",
    "#B4E5FF",
    "#AECDFF",
    "#CAB2DB",
    "#F3D1FD",
    "#E9A2FD",
    "#E2D2F1",
    "#D1CBF6",
    "#C8D5EF",

  ];
  const body = document.querySelector("body");

  const colorL = Math.floor(Math.random()*colors.length);
  let colorR = colorL;
  while(colorL === colorR){
      colorR = Math.floor(Math.random()*colors.length);
  }
  console.log(colorL,colorR);

 body.style.backgroundImage = `linear-gradient( ${colors[colorL]}, ${colors[colorR]})`;
  
  
