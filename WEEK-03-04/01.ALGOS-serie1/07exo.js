let profitableGamble = (probability, prize, pay) => {
    console.log(probability * prize > pay);
}

profitableGamble(0.2, 50, 9)
profitableGamble(0.9, 1, 2)
profitableGamble(0.9, 3, 2)