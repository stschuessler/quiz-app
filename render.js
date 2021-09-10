// Rewrite of the HTML to use createElement() and appendChild()

function renderCard(cardData, targetElement) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('card')
  //document.body.appendChild(cardSection)
  document.getElementById(targetElement).appendChild(cardSection)

  const cardBookmark = document.createElement('button')
  cardBookmark.classList.add('button__bookmark')
  cardBookmark.setAttribute('aria-label', 'bookmark')
  cardSection.appendChild(cardBookmark)

  const cardQuestion = document.createElement('h2')
  cardQuestion.classList.add('card__question')
  cardQuestion.textContent = cardData.question
  cardSection.appendChild(cardQuestion)

  const cardAnswerButton = document.createElement('button')
  cardAnswerButton.classList.add('card__button')
  cardAnswerButton.textContent = 'ShowAnswer'
  cardSection.appendChild(cardAnswerButton)

  const cardAnswerParagraph = document.createElement('p')
  cardAnswerParagraph.classList.add('card__answer')
  cardAnswerParagraph.classList.add('card__answer--hidden')
  cardAnswerParagraph.textContent = cardData.answer
  cardSection.appendChild(cardAnswerParagraph)

  const cardTagList = document.createElement('ul')
  cardTagList.classList.add('tags')
  cardSection.appendChild(cardTagList)

  cardData.tags.forEach(tag => {
    const cardTag = document.createElement('li')
    cardTag.classList.add('tags__item')
    cardTag.textContent = tag
    cardTagList.appendChild(cardTag)
  })
}

const cardDataExample = [
  {
    question: 'Age of Arthur',
    answer: '42',
    isBookmarked: true,
    showAnswer: false,
    tags: ['history', 'social'],
  },
  {
    question: 'How many fingers on one hand?',
    answer: '5',
    isBookmarked: true,
    showAnswer: false,
    tags: ['anatomy'],
  },
]

//Aufruf der Funktion für jedes Objekt

function buildMain(element) {
  const getMain = document.getElementById(element)
  //  const getMain = document.querySelect(#element)
  getMain.innerHTML = ''
}

buildMain('questions')

cardDataExample.forEach(dataObject => {
  renderCard(dataObject, 'questions')
})

cardDataExample.forEach(dataObject => {
  renderCard(dataObject, 'bookmarks')
})

// body entspricht bei mir dann .main mit der id 'question' ID wird auch nchmal Prbleme mit sich bringen, aber das lösen wir später
