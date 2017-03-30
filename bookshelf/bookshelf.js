// Bookshelf Challenge JS
//Use the array of books that will be given to you to console.log the following outputs as a string:

//The Little Library of Learn contains <n> books: <book_title_1>, <book_title_2>, ... <book_title_n>

//The Little Library of Learn has <n> owners who have contributed books, here is a list of 
//all of the owners: <owner_1>, <owner_2>, ... <owner_n>

//The Little Library of Learn is returning the books to their owners, and it is up to you to 
//sort out which books belong to which owner and create a separate array for each owner and the books they own. 
//Your output for successfully doing this should have the following structures:
//{ "John": [ {<book_1>}, ... ], "Alex": [ ... ], ... }

//Giving <owner_name_1> their books back which include:
//<book_title_1>
//...
//<book_title_n>
//Giving <owner_name_n> their books back which include:
//...

var bookshelf =[{
"owner": "John",
"title": "Statistics: Third Edition",
"author": "David Freedman/Robert Pisani/Roger Purves",
"description": "useful for learning about statistics."
},{
"owner": "Zach",
"title": "Programming Python: First Edition",
"author": "Mark Lutz",
"description": "great for learning python"
},{
"owner": "Alex",
"title": "Bio Chemistry: Fifth Edition",
"author": "Jeremy M. Berg/John L. Tymoczko/Lubert Stryer",
"description": ""
},{
"owner": "Michael",
"title": "Developing Mobile Apps with Ionic2",
"author": "Josh Morony",
"description": ""
},{
"owner": "Alex",
"title": "Lehninger Principles of Biochemistry",
"author": "David L. Nelson/Michael M. Cox",
"description": ""
},{
"owner": "Zach",
"title": "JavaScript: The Good Parts",
"author": "Douglas Crockford",
"description": ""
}];
//start making the Title collection string
var bookTitleString = "The Little Library of Learn contains "+bookshelf.length+" books: ";
var bookOwnersArray = [];
var bookOwnersString = "";
for (var i = 0; i < bookshelf.length; i++){
    //check if the owner exists in the owner array, if not add them
    if (bookOwnersArray.includes(bookshelf[i].owner)=== false){
        bookOwnersArray.push(bookshelf[i].owner);
    }
    //add each title with comma space, unless it's the last title
    if (i <bookshelf.length - 1){
    bookTitleString += bookshelf[i].title +", ";
    }
    else {
    bookTitleString += bookshelf[i].title +".";
    }
}
//add each owner to the owners String
for (var j = 0; j < bookOwnersArray.length; j++){
    if(j <bookOwnersArray.length -1){
        bookOwnersString += bookOwnersArray[j]+", "
    }
    else{
        bookOwnersString += bookOwnersArray[j]+"."
    }
}
console.log(bookTitleString);
console.log("The Little Library of Learn has "+bookOwnersArray.length+
            " owners who have contributed books, here is a list of all of the owners: "
            +bookOwnersString);


var ownersReference = {};
//populate my ownersReference object with empty arrays for each owner as a key
/* first, inefficient solution
for (var i = 0; i < bookOwnersArray.length; i++){
    ownersReference[bookOwnersArray[i]] = [];
    for (var book in bookshelf){
        console.log(bookshelf[book]);
        if (bookshelf[book].owner == bookOwnersArray[i])
            ownersReference[bookOwnersArray[i]].push(bookshelf[book]);
    }
}
//this goes though each book for each owner - inefficient
*/
//go though each book only once
for (var book in bookshelf){
    //if the owners name isn't in my new ownerReference object, add them
    if(!ownersReference[bookshelf[book].owner]){
        ownersReference[bookshelf[book].owner] = [];
    }
    //add each book to their respective owner
    ownersReference[bookshelf[book].owner].push(bookshelf[book]);
}
//take each owner, and list their books
for (var owner in ownersReference){
    console.log("Giving " + owner +" their books back, which include:\n")
    //for each book of each owner, list the title
    for (var book in ownersReference[owner]){
        console.log("\t"+ownersReference[owner][book].title);
    }
}

