window.addEventListener('scroll', () => {
  scrollFunction()
})

let scrollFunction = () => {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("arrowUp").style.display = "block";
  } 
  else {
    document.getElementById("arrowUp").style.display = "none";
  }
}

