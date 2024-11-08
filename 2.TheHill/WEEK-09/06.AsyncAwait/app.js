const body = document.body;

const generateBG = (color, delay) => {
  let randomNumber = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber < 0.6) {
        body.style.backgroundColor = color;
        resolve(`The background color was successfully set to ${color}`);
      } else {
        const imgError = document.createElement("img");
        imgError.src = "image/Missingno.png";
        body.appendChild(imgError);
        reject("oh no, a wild error appeared!")
      }
    }, delay)
  })
}

const rainbow = async () => {
  try {
    console.log(await generateBG("blue", 1000));
    console.log(await generateBG("yellow", 1000));
    console.log(await generateBG("red", 1000));
    console.log(await generateBG("cyan", 1000));
    console.log(await generateBG("violet", 1000));
    console.log(await generateBG("green", 1000));
    console.log(await generateBG("purple", 1000));

  } catch (error) {
    console.log(error);
  }
};

rainbow()