function counter() {
  let number = 0;

  function increment() {
    number++;
    console.log('Count incremented:', number);
  }

  function getCount() {
    console.log('Current count:', number);
  }

  return {
    increment,
    getCount
  };
}

const myCounter = counter();

myCounter.getCount(); 

myCounter.increment(); 
myCounter.increment(); 
myCounter.increment(); 

myCounter.getCount(); 
