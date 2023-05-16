function Books(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.bookinfo = function () {
    let statement = `${this.author} have a book called ${this.title} with ${this.pages} number of pages`;
    return statement;
  };
}
const book = new Books("Chinuecbe", "things fall apart", 122);

console.log(book.pages);
console.log(book.bookinfo());
