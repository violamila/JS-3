	function Book(title,author, publisher,year, numberCopy, id, numberPages){
	    this.title = title;
	    this.author = author;
	    this.publisher = publisher;
	    this.year = year;
	    this.numberCopy = numberCopy;
	    this.id = id;
	    this.numberPages = numberPages;
	    this.getnumberPages= function(){
			return this.numberPages;
		}
		
	};
	
	var book = new Book(); 
	
	function Journal(publisher, numberCopy,year, id, numberPages){
	    this.publisher = publisher;
	    this.numberCopy = numberCopy;
	    this.year = year;
	    this.id = id;
	    this.numberPages = numberPages;
	    this.getnumberPages= function(){
	        return this.numberPages;}
	    this.getyear= function(){
	        return this.year;
	    }
	    
	}
	var journal = new Journal()
	{
	journal.numberPages = 32;
	journal.year = 2020;
	if(journal.numberPages>32)
	{
	    console.log('не должен превышать 32 страницы')
	}
	};


	document.write('...'+ this.getnumberPages);
	document.write("<br />");
	document.write('количество страниц:'+ journal.getnumberPages());
	document.write("<br />");
	document.write('год издательства:'+ journal.getyear());

