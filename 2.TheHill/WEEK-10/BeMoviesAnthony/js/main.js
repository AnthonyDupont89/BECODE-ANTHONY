document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});




const input = document.querySelector("#inputSearch");
const button = document.querySelector("#buttonSearch");
const poster = document.querySelector(".swiper-wrapper")

button.addEventListener("click", (event)=> {
  event.preventDefault();

  const query = input.value;

  const fetchData = async () => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjA0ZmU4NzE2ZTgxMGEyMTQ3OGUyMzhlOGM5YzdkMiIsIm5iZiI6MTczMTc2Njc5MS44MDA4NTM3LCJzdWIiOiI2NzI4Yzk5ZDJlMWI3OTc4ZGJiMzlkMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xzpo0CGv-IyVm6gNMWpWoWfhwWwl22H05qlMVZRpmt0'
      }
    };

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options);
    const data = await response.json();
    console.log(data);

    data.results.forEach(result => {
      // const para = document.createElement("p");
      // para.innerHTML = result.original_title;
      // result.appendChild(para);

      const div = document.createElement('div');
      div.className = 'swiper-slide';
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w185${result.poster_path}`;
      div.appendChild(img)
      poster.appendChild(div);
    });
    
  };
  fetchData()
})


