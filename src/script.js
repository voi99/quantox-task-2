const $$ = (e) => document.querySelectorAll(e)

;(() => {
   const questions = $$('.question-wrapper')
   questions.forEach((question) => {
      question.addEventListener('click', (event) => {
         console.log(event.currentTarget)
         event.currentTarget.classList.toggle('show')
      })
   })
})()
