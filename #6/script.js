const button = document.querySelector('button');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const image = document.querySelector('img');
const apikey = config.API_KEY;

const getQuote = () => {
	fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
		method: 'GET',
		headers: {
			'x-rapidapi-key': apikey,
			'x-rapidapi-host': 'quotes15.p.rapidapi.com',
		},
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			let content = data.content;
			let name = data.originator.name;
			let quoteLength = content.length;
      console.log(quoteLength);

      if(quoteLength >= 170){
        quote.textContent = 'Live as if you were to die tomorrow. Learn as if you were to live forever.';
        author.textContent = 'Mahatma Gandhi';
        getQuote();
      } else if (quoteLength >= 100) {
				quote.style.fontSize = '70%';
				quote.textContent = content;
				author.textContent = name;
			} else {
				quote.style.fontSize = 'inherit';
				quote.textContent = content;
				author.textContent = name;
			}
		})
		.catch((err) => {
			console.error(err);
		});
};

button.addEventListener('click', getQuote);
