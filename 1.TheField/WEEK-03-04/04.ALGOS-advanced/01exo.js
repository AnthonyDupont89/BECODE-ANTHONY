let ransomeNote = (noteText, magazineText) => {
    noteText = noteText.split(" ");
    magazineText = magazineText.split(" ");

    let sameWord;
    for (noteWord in noteText) {
        sameWord = magazineText.indexOf(noteText[noteWord]);
        if (noteText[noteWord] == magazineText[sameWord]){
            magazineText.splice(sameWord, 1)
        } else {
            console.log(noteText[noteWord] == magazineText[sameWord]);
            break;
        }
    }
    if (noteWord == noteText.length-1)
    console.log(noteWord == noteText.length-1);
}

ransomeNote("this is a secret note to you from a secret admirer", "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you")
ransomeNote("this is a note to you from a secret admirer", "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you")
