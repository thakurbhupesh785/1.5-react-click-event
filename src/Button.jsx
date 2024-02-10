

function Button () {
/*
  let count = 0;

  const handleClick = (name) => {
    if (count<3) {
      count++;
      console.log(`${name} clicked me ${count} times`)
    } else {
      console.log(`${name} stock clicking`)
    }
  }
*/
const handleClick = (e) => e.target.textContent = "ouchh";
  

  return(<button onDoubleClick={ (e) =>handleClick(e)}>Click me</button>)
}

export default Button