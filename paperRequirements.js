
function paperRequirements(book1, book2, book3){
    const book1PageNeed  = 100;
    const book2PageNeed = 200;
    const book3PageNeed = 300;
    var book1pages = book1 * book1PageNeed;
    var book2pages = book2 * book2PageNeed;
    var book3pages = book3 * book3PageNeed;
    return book1pages + book2pages + book3pages;
}

const bookPages = paperRequirements(2, 1, 4);
console.log("Total page needed", bookPages);