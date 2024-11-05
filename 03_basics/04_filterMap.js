const names = ["nitu","devam","arpit","sweety","mansa","utsav"];

const values = names.forEach((item) =>{
    console.log(item);
    return item // No use of this statement, not going to return
})

// console.log(values); --> forEach don't return any values // undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.filter((num)=>{
    return num>4;
})

console.log(newNum);

const books = [
    {
      title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960, edition: 2004
    },
    { 
      title: "1984",genre: "Dystopian",publish: 1949,edition: 2008
    },
    {
      title: "The Great Gatsby",genre: "Classic",publish: 1925,edition: 2006
    },
    {
      title: "Pride and Prejudice",genre: "Romance",publish: 1813,edition: 2019
    },
    {
      title: "The Catcher in the Rye",genre: "Fiction",publish: 1951,edition: 2024
    }
  ];
  
    let reqBooks = books.filter((book)=> book.genre == "Fiction");

    reqBooks = books.filter((book)=> book.publish>2000);
    console.log(reqBooks); // Using same name because frontened using single name

    let mapArr = myNums.map((num)=> num+10);
    console.log(mapArr);

    // Chaining :

    mapArr = myNums.map((num)=> num*10).map((num)=>num+1).filter((num)=> num>31);

    console.log(mapArr);

    const myTotal = myNums.reduce(function(accumulate,currVal){
        return accumulate+currVal;
    },0); // In terms of function

    const totalSecond = myNums.reduce((accumulate,currVal)=> accumulate+currVal); // In terms of array function

    console.log(myTotal);
    console.log(totalSecond);

    // Q: Add the publish year of books

    cos