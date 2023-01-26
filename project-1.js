

// Variables

let btn= document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  quote: `"Ask for work. If they don't give you work, ask for bread. If they do not give you work or bread, then take bread."`,
  person:  ` Emma Goldman`
}, {
  quote: `“What is an anarchist? One who, choosing, accepts the responsibility of choice.” `,
  person: ` Ursula K. Le Guin`
}, {
  quote:`“Human beings are born with different capacities. If they are free, they are not equal. And if they are equal, they are not free.” `,
  person: ` Aleksandr Solzhenitsyn`
}, {
  quote: `"When the people are being beaten with a stick, they are not much happier if it is called the People's Stick."`,
  person: ` Mikhail Bakunin`
}, {
  quote: `"To live is the rarest thing in the world. Most people exist, that is all,"`,
  person: ` Oscar Wilde`
}, {
  quote:`“The purchaser draws boundaries, fences himself in, and says, “This is mine; each one by himself, each one for himself.” Here, then, is a piece of land upon which, henceforth, no one has a right to step, save the proprietor and his friends; which can benefit nobody, save the proprietor and his servants. Let these sales multiply, and soon the people — who have been neither able nor willing to sell, and who have received none of the proceeds of the sale — will have nowhere to rest, no place of shelter, no ground to till. They will die of hunger at the proprietor’s door, on the edge of that property which was their birthright; and the proprietor, watching them die, will exclaim, “So perish idlers and vagrants!” `,
  person: ` Pierre-Joseph Proudhon`
}, {
  quote: `“Quotations are useful in periods of ignorance or obscurantist beliefs.”`,
  person: ` Guy Debord`
}, {
  quote: `"A concept is a brick. It can be used to build a courthouse of reason. Or it can be thrown through the window."`,
  person: ` Gills Deleuze`
}, ];

btn.addEventListener('click', function() {

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});