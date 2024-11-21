const  input = document.querySelector("input");
const button = document.querySelector("button");
const search = document.querySelector(".search")


button.addEventListener("click", (event)=> {
  event.preventDefault();
  const inputValue = input.value;
  
  const fetchData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
    const data = await response.json();
    // console.log(data);
    
    data.meals.forEach(meal => {
      console.log(meal.strMeal)
      const para = document.createElement("p");
      para.innerHTML = meal.strMeal;
      search.appendChild(para);
      const img = document.createElement("img");
      img.src = meal.strMealThumb
      search.appendChild(img);
    });
    
  };
  fetchData()
})
