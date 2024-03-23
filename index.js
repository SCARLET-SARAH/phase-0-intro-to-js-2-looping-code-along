
names =  [ 'Guadalupe', 'Ollie', 'Aki' ] 

function writeCards(names) {
  let messages = [];
  names.forEach((name, index) => {
    messages.push("Thank you, " + name + " at " + index + " for the wonderful gift");
  });
  return messages;
}

console.log(writeCards(names));
  let arr = []
  let realArray = [1,2,3,4,5] 
  for (let index = 0; index < realArray.length; index++) { 
     const element = realArray[index] 
     arr.push(element)
  }

  console.log(arr)//your arr = 1,2,3,4,5