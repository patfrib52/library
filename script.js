
const displayBooks = document.getElementById("displayBooks");
const bookId = document.getElementById("bookId");




let myLibrary = [
    {name: "Harry Potter",   
    title: "The prisoner of Azcabane",
    author: "JK Rowling",
    pages: 200},   

    {name: "Lord of the Rings",
    title: "The Fellowship of the Ring" ,
    author: "J.R.R. Tolkein",
        pages: 300},
        {name: "Harry Potter",   
    title: "The prisoner of Azcabane",
    author: "JK Rowling",
    pages: 200},
    {name: "Lord of the Rings",
    title: "The Fellowship of the Ring" ,
    author: "J.R.R. Tolkein",
        pages: 300}
];

class Books {
    constructor(name, title, author, pages) {
        this.name = name;
        this.title = title;
        this.author = author;
        this.pages = pages;
        
    }
}

 function addBookToLibrary() {

    displayBooks.innerHTML = "";
    
    for (let i = 0; i < myLibrary.length; i++) {
        
        if (!myLibrary[i].id){
            myLibrary[i].id = crypto.randomUUID();
        }

        displayBooks.innerHTML +=

           ` <tr>

                <td>${myLibrary[i].name}</td>
                <td>${myLibrary[i].title}</td>
                <td>${myLibrary[i].author}</td>
                <td>${myLibrary[i].pages}</td>
                <td>${myLibrary[i].id}</td>


            </tr>`
        ;
    }

}


// const book1 = new Books("Harry Potter", "The prisoner of Azcabane", "JK Rowling", 200);
// const book2 = new Books("Lord of the Rings", "The Fellowship of the Ring", "J.R.R. Tolkein", 300);


addBookToLibrary();
// book2.addBookToLibrary();

