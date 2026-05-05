


class Books {
    constructor(name, title, author, pages, ids) {
        this.name = name;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = ids;
    }
}

Books.prototype.bookLibrary = function() {
    let bookEntry = [];
    for(let id in bookEntry) {
        bookEntry.push(this.id) = cripto.randomUUID;
    }
    
    bookEntry.push(`name: ${this.name}`, `title: ${this.title}`, `author: ${this.author}`, `pages: ${this.pages}`, `id: ${this.id}`);
    
    console.log(bookEntry);
    console.log(bookEntry);

}

const book1 = new Books("Harry Potter", "The prisoner of Azcabane", "JK Rowling", 200, this.id);


book1.bookLibrary();
