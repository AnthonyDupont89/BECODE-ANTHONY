const fetchData = async () => {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  console.log(data);
};

fetchData();


// const fetchData2 = async () => {
//   const res = await fetch("https://catfact.ninja/fact", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }, // etc.
//   });;
//   const data = await res.json();
//   console.log(data);
// };

// fetchData2();
