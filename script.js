// var change = document.getElementsByClassName("change-2")[0]
// var answer = document.getElementsByClassName("answer-div")[0]
// var question = document.getElementsByClassName("question")[0]
// var membership =document.getElementsByClassName("membership")[0]
// change.addEventListener("click", () => {
//   answer.classList.toggle("active")
//   question.classList.toggle("active")
//   membership.classList.toggle("active")
//   // document.body.classList.toggle("show")
// })
var rotate = document.getElementById("rotate")
var icon = document.getElementById("icon")
var rotate2 = document.getElementById("rotate2")
var rotate3 = document.getElementById("rotate3")
var rotate4 = document.getElementById("rotate4")
var icon2 = document.getElementById("icon2")
var icon3 = document.getElementById("icon3")
var icon4 = document.getElementById("icon4")

rotate.addEventListener("click", () => {
  rotate.classList.toggle("jal")

  if (rotate.classList.contains("jal")) {
    icon.style.transform = `rotate(45deg)`
    icon.style.transition = ".5s"
  } else {
    icon.style.transform = `rotate(0deg)`
  }
})

rotate2.addEventListener("click", () => {
  rotate2.classList.toggle("jal")

  if (rotate2.classList.contains("jal")) {
    icon2.style.transform = `rotate(45deg)`
    icon2.style.transition = ".5s"
  } else {
    icon2.style.transform = `rotate(0deg)`
  }
})
rotate3.addEventListener("click", () => {
  rotate3.classList.toggle("jal")

  if (rotate3.classList.contains("jal")) {
    icon3.style.transform = `rotate(45deg)`
    icon3.style.transition = ".5s"
  } else {
    icon3.style.transform = `rotate(0deg)`
  }
})
rotate4.addEventListener("click", () => {
  rotate4.classList.toggle("jal")

  if (rotate4.classList.contains("jal")) {
    icon4.style.transform = `rotate(45deg)`
    icon4.style.transition = ".5s"
  } else {
    icon4.style.transform = `rotate(0deg)`
  }
})
rotate5.addEventListener("click", () => {
  rotate5.classList.toggle("jal")

  if (rotate5.classList.contains("jal")) {
    icon5.style.transform = `rotate(45deg)`
    icon5.style.transition = ".5s"
  } else {
    icon5.style.transform = `rotate(0deg)`
  }
})
rotate6.addEventListener("click", () => {
  rotate6.classList.toggle("jal")

  if (rotate6.classList.contains("jal")) {
    icon6.style.transform = `rotate(45deg)`
    icon6.style.transition = ".5s"
  } else {
    icon6.style.transform = `rotate(0deg)`
  }
})
