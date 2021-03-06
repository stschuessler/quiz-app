/* Befehl für den Zugriff auf die jeweiligen id-Elemente + 
Zuweisung auf eine Variable. Hier: main-Elemente */
const questionContent = document.querySelector('#questions')
const bookmarksContent = document.querySelector('#bookmarks')
const createContent = document.querySelector('#create')
const profileContent = document.querySelector('#profile')

/* Befehl für den Zugriff auf die jeweiligen id-Elemente + 
Zuweisung auf eine Variable. Hier: button-Elemente im footer*/
const questionButton = document.querySelector('#question-button')
const bookmarkButton = document.querySelector('#bookmark-button')
const createButton = document.querySelector('#create-button')
const profileButton = document.querySelector('#profile-button')

/* Funktion mit der alle querySelectors abgesprochen werden können*/
function getEl(selector) {
  const el = document.querySelector(selector)
  return el
}

/* Funktion mit der alle main Elemente versteckt werden*/
/* Variante mit forEach */
function hideAll() {
  const mainElArray = document.querySelectorAll('.main')
  mainElArray.forEach((mainEl, index) => {
    mainEl.classList.add('main--hidden')
  })
}

/* EventListener für Click Aktion */
questionButton.addEventListener('click', () => {
  hideAll()
  questionContent.classList.remove('main--hidden')
})

bookmarkButton.addEventListener('click', () => {
  hideAll()
  bookmarksContent.classList.remove('main--hidden')
})

createButton.addEventListener('click', () => {
  hideAll()
  createContent.classList.remove('main--hidden')
})

profileButton.addEventListener('click', () => {
  hideAll()
  profileContent.classList.remove('main--hidden')
})

/* Switch bookmark Button für alle bookmarks */

const bookmarkButtonArray = document.querySelectorAll('.button__bookmark')

bookmarkButtonArray.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('button__bookmark--clicked')) {
      button.classList.remove('button__bookmark--clicked')
    } else {
      button.classList.add('button__bookmark--clicked')
    }
  })
})

//switchButton.classList.toggle('button__bookmark--clicked')

/* EventListener für Click Aktion mit toggle Funktion für alle Answer Buttons*/
const cardAnswerButtonArray = document.querySelectorAll('.card__button')
const cardAnswerArray = document.querySelectorAll('.card__answer--hidden')

cardAnswerButtonArray.forEach((element, index) => {
  element.addEventListener('click', () => {
    if (cardAnswerArray[index].classList.contains('card__answer--hidden')) {
      cardAnswerArray[index].classList.remove('card__answer--hidden')
      cardAnswerButtonArray[index].innerHTML = 'Answer'
    } else {
      cardAnswerArray[index].classList.add('card__answer--hidden')
      cardAnswerButtonArray[index].innerHTML = 'Show Answer'
    }
  })
})
