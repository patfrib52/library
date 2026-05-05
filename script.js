

let myLibrary = [];


class Books {
    constructor(name, title, author, pages) {
        this.name = name;
        this.title = title;
        this.author = author;
        this.pages = pages;
       
    }
}

Books.prototype.addBookToLibrary = function() {

        this.id = crypto.randomUUID();
        myLibrary.push({name: this.name, title: this.title, author: this.author, pages: this.pages, id: this.id});
        
    console.log(myLibrary);  
}

const book1 = new Books("Harry Potter", "The prisoner of Azcabane", "JK Rowling", 200, "");
const book2 = new Books("Lord of the Rings", "The Fellowship of the Ring", "J.R.R. Tolkein", 300, "");


book1.addBookToLibrary();
book2.addBookToLibrary();

