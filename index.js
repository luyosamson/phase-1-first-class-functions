//The receivesAFunction function should:

//take a callback function as an argument
//call the callback function
//it doesn't matter what this function returns, so long as it calls the callback function
const receivesAFunction = (getFunction) => {
  getFunction()
}


//take no arguments
//return a named function

const returnsANamedFunction = () => (
  function getFunction(){}
)

//Take no arguments
//return an anonymous function
const returnsAnAnonymousFunction = () => () => {}
