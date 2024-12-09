
document.addEventListener("DOMContentLoaded", () => {
  swiper = new Swiper(".movieSwiper", { 
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjA0ZmU4NzE2ZTgxMGEyMTQ3OGUyMzhlOGM5YzdkMiIsIm5iZiI6MTczMTc2Njc5MS44MDA4NTM3LCJzdWIiOiI2NzI4Yzk5ZDJlMWI3OTc4ZGJiMzlkMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xzpo0CGv-IyVm6gNMWpWoWfhwWwl22H05qlMVZRpmt0",
  },
};

const getGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  );
  const data = await response.json();  
  return data.genres;
};

const addHoverEffects = () => {
  const slides = document.querySelectorAll(".movieSlide");
  slides.forEach((slide) => {
    const movieInfo = slide.querySelector(".movieInfo");
    slide.addEventListener("mouseover", () => {
      movieInfo.classList.remove("hidden");
    });
    slide.addEventListener("mouseout", () => {
      movieInfo.classList.add("hidden");
    });
  });
};

// SWIPERSLIDE
const fetchMoviesSlide = async (url, section, genres) => {  
  const movieResponse = await fetch(url, options);
  const movieData = await movieResponse.json();

  const sectionWrapper = document.querySelector(section);
  sectionWrapper.innerHTML = "";

  movieData.results.forEach((movie) => {
      // movieSlide
    const movieSlide = document.createElement('div');
    movieSlide.classList.add("swiper-slide", "movieSlide");
    // moviePoster
    const moviePoster = document.createElement('img');
    moviePoster.classList.add("moviePoster");
    moviePoster.src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    // movieInfo
    const movieInfo = document.createElement('div');
    movieInfo.classList.add("movieInfo", "hidden");
    // title
    const title = document.createElement('h3');
    title.classList.add("title");
    title.innerText = movie.title;
    // year
    const year = document.createElement('p');
    year.classList.add("year");
    year.innerText = new Date(movie.release_date).getFullYear();
    // genres
    const genreNames = movie.genre_ids.map((id) => {
      return genres.find((genre) => genre.id == id).name;
    });
    const genresText = document.createElement("p");
    genresText.classList.add("genresText");
    genresText.innerText = genreNames.join("/ ");
    // star
    const star = document.createElement('img');
    star.classList.add("star");
    star.src = `../assets/icons/star.svg`;
    // vote
    const vote = document.createElement('p');
    vote.classList.add("vote");
    vote.innerText = movie.vote_average.toFixed(1);
    
    movieInfo.append(title, year, genresText, star, vote);
    movieSlide.append(moviePoster, movieInfo);
    sectionWrapper.append(movieSlide)
  });
  addHoverEffects();
};


const searchButton = document.querySelector(".searchBar button");
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const searchInput = document.querySelector(".searchBar input");
  const query = searchInput.value.trim();
  if (!query) return;
  const searchSwiper = async () => {
    const genres = await getGenres();
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
    const section = ".search .swiper-wrapper";
    fetchMoviesSlide(url, section, genres);
  };
  searchSwiper();
});


const latestSwiper = async () => {
  const genres = await getGenres();
  const url = "https://api.themoviedb.org/3/movie/now_playing";
  const section = ".latest .swiper-wrapper";
  fetchMoviesSlide(url, section, genres);
}
latestSwiper();


const genresSlide = async () => {
  const genres = await getGenres();
  const id = genres[0].id;
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`;
  const section = ".genres .swiper-wrapper";
  fetchMoviesSlide(url, section, genres) 
}
genresSlide();








// const slides = document.querySelectorAll('.movieSlide');
// const infos = document.querySelectorAll('.movieInfo');

// slides.forEach((slide, index) => {
//     slide.addEventListener('mouseover', () => {
//         infos[index].classList.remove('hidden');
//     });

//     slide.addEventListener('mouseout', () => {
//         infos[index].classList.add('hidden');
//     });
// });