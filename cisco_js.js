let books = [
    {title: "Speaking JavaScript",
     author: "Axel Rauschmayer",
     pages: "460",
    },

    {title: "Programming JavaScript Applications",
     author: "Eric Elliott",
     pages: "254",
    },

    {title: "Understanding ECMAScript 6",
     author: "Nicholas C. Zakas",
     pages: "352",
    }    
];

//2
books.push({title: "Learning JavaScript Design Patterns", author: "Addy Osmani", pages:"254"});
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);

//3
let last_two = books.slice(-2);
console.log(last_two[0].title);
console.log(last_two[1].title);

//4
books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);