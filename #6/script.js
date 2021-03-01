const button = document.querySelector('button');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const image = document.querySelector('img');


const getQuote = () => {
	fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'e90990507dmsh32b14662e668ce1p129b4djsn82d55c574a62',
			'x-rapidapi-host': 'quotes15.p.rapidapi.com',
		},
	})
		.then((response) => {
      return response.json();
    })
    .then((data) => {
      let content = data.content;
      let name = data.originator.name;
      if(quote.innerText.length >= 200){
        getQuote();
      } else if(quote.innerText.length >= 130){
        quote.style.fontSize = '30px';
      } else {
        quote.style.fontSize = '40px';
      }
      quote.textContent = content;
      author.textContent = name;
    })
		.catch((err) => {
			console.error(err);
		});
};

button.addEventListener('click', getQuote);

