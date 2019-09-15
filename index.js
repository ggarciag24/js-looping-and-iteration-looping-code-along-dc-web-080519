// Code your solutions in this file
function writeCards(array_of_strings, event_name) {
  let cards = []
  for (let i = 0; i < array_of_strings.length; i++) {
      cards.push(`Thank you, ${array_of_strings[i]}, for the wonderful ${event_name} gift!`);
  }
  return cards;
}


function countdown(num) {
  while (num > 0) {
    console.log(num);
    num -= 1;
  }
  console.log(num);
}
