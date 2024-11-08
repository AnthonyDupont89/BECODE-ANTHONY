const  input = document.querySelector("input");
const button = document.querySelector("button");


button.addEventListener("click", (event)=> {
  event.preventDefault();
  const inputValue = input.value;
  
  const fetchData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
    const data = await response.json();
    console.log(data);
  };
  fetchData().forEach(element => {
    
  });
})






