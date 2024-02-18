const book1 = document.querySelector(".book-1")
const book2 = document.querySelector(".book-2")
const book3 = document.querySelector(".book-3")

const bookCards = document.querySelector(".book-cards")

const video1 = document.getElementById("video-1")

const logo = document.querySelector("#logo")
const logoBook1 = document.getElementById("logo-book-1")

const phrase = document.querySelector("#phrase")
const phrseBook1 = document.querySelector("#phrase-book-1")

const booksOff = () => {
  book1.style.display = "none"
  book2.style.display = "none"
  book3.style.display = "none"
}

const playVideo = (id) => {
  if (id === 1) {
    video1.style.display = "block"

    logo.style.display = "none"
    logoBook1.style.display = "block"

    phrase.style.display = "none"
    phrseBook1.style.display = "block"

    booksOff()

    bookCards.style.display = "flex"
  }
}

const comebackHome = () => {
  location.reload()
}
