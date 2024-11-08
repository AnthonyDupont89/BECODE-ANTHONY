const body = document.querySelector("body");

const bgColor = (color) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        body.style.backgroundColor = color
        resolve()
      }, 2000)
  });
};

bgColor("yellow")
.then(() => bgColor("red"))
.then(() => bgColor("cyan"))
.then(() => bgColor("violet"))
.then(() => bgColor("green"))
.then(() => bgColor("purple"))

