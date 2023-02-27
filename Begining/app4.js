function displayGreeting() {
    console.log('Hello, world!');
  }
  displayGreeting(); // Hello, world!


  function displayGreeting(name) { 
    // creating a new local variable that inserts the name into a string   
    const message = `Hello, ${name}!`; 
    // printing the variable to the console
    console.log(message);
}
displayGreeting('Dasha'); // Hello, Dasha!

setTimeout(
  function() { // anonymous function
      console.log('Done!');
  },
  3000 // 3000 milliseconds (3 seconds)
)

setTimeout(
  () => { // anonymous function
      console.log('Done!');
  },
  3000 // 3000 milliseconds (3 seconds)
)
