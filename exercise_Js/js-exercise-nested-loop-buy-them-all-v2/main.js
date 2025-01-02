function buyThemAll(books, budget) {
  let splitBooks = books.split(",");

  let totalBuyBook = 0;
  let listBuyBook = [];
  let totalBuy = 0;
  let startBudget = budget;

  for (let i = 0; i < splitBooks.length; i++) {
    let book = splitBooks[i].split(":");
    let bookName = book[0];
    let bookPrice = book[1];

    if (startBudget >= bookPrice) {
      listBuyBook.push(bookName);
      totalBuy += Number(bookPrice);
      totalBuyBook += 1;
      startBudget -= Number(bookPrice);
    }
  }

  if (totalBuy === 0) {
    return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${startBudget}.`;
  } else {
    return `Afista membeli ${totalBuyBook} buku yaitu ${listBuyBook.join(
      ", "
    )}. Total belanja ${totalBuy}, sisa uang Afista adalah ${startBudget}.`;
  }
}

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobit:20000,The Power of Habit:10000",
    100000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
