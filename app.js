const formatted = item => item.toString().toLowerCase();

const searchItems = (itemsArray, searchItem) => {
  return itemsArray.filter(item => formatted(item).includes(formatted(searchItem)));
}

// console.log(searchItems([123, 4556, 127, 415, 8, 42, 88, 888, 13], 1));
// console.log(searchItems(["123", "4556", "127", "415", "8", "42", "88", "888", "13"], "1"));
// console.log(searchItems(["Hello", "how", "are", "you"], "h"));