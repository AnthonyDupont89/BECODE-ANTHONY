let possibleBonus = (myTile, friendTile) => {
    let gap = friendTile - myTile;
    gap >= 0 ? console.log(gap <= 6) : console.log(gap > 0) ;
}

possibleBonus(3, 7) // true
possibleBonus(1, 9) // false
possibleBonus(5, 3) // false