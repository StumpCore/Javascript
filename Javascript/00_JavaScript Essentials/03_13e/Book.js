class Book{
    constructor(
        author,
        title,
        date,
        pages,
        read
    ){
        this.author = author;
        this.title = title;
        this.date = date;
        this.pages = pages;
        this.read = read;
    }
    
    //Already read?
    alreadyRead(status){
        this.read = status;
    }
};

export default Book;