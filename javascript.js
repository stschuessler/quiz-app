/* Befehl für den Zugriff auf die jeweiligen id-Elemente + 
Zuweisung auf eine Variable. Hier: main-Elemente */
const questionContent = document.querySelector('#questions')
const bookmarksContent = document.querySelector('#bookmarks')
const createContent = document.querySelector('#create')
//const profileContent = document.querySelector("#profile");

/*Befehl für den Zugriff auf die jeweiligen id-Elemente + 
Zuweisung auf eine Variable. Hier: button-Elemente im footer*/
const questionButton = document.querySelector('#question-button')
const bookmarkButton = document.querySelector('#bookmark-button')
const createButton = document.querySelector('#create-button')
//const profileButton = document.querySelector('#profile-button')

questionButton.addEventListener('click', () => {
  //alert('hallo')
  questionContent.classList.remove('main--hidden')
  bookmarksContent.classList.add('main--hidden')
  createContent.classList.add('main--hidden')
  //profileContent.classList.add('main--hidden')
})

/*EventListener für Click Aktion +
Hidden  question-main
Sichtbarkeit bookmark-main
Hidden create-main
*/
bookmarkButton.addEventListener('click', () => {
  //alert(typeof 'hallo')
  questionContent.classList.add('main--hidden')
  bookmarksContent.classList.remove('main--hidden')
  createContent.classList.add('main--hidden')
  //profileContent.classList.add('main--hidden')
})

createButton.addEventListener('click', () => {
  //   alert('hallo')
  questionContent.classList.add('main--hidden')
  bookmarksContent.classList.add('main--hidden')
  createContent.classList.remove('main--hidden')
  //profileContent.classList.add('main--hidden')
})

/* Seite noch nicht vorhanden*/
//profileButton.addEventListener('click', () => {
//  alert('hallo')
//questionContent.classList.add('main--hidden')
//bookmarksContent.classList.add('main--hidden')
//createContent.classList.add('main--hidden')
//profileContent.classList.remove('main--hidden')
//})
