const QNAs = document.querySelectorAll('.q-and-a');
console.log(QNAs)

QNAs.forEach(QNA => {
  QNA.addEventListener('click', e=> {
    const question = e.currentTarget;
    QNAs.forEach(questionCard =>{
      if (questionCard !== question) {
        questionCard.classList.remove('show')
      }
    })
    question.classList.toggle('show')
  })
})