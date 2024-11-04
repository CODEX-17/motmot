const btnOO = document.getElementById('btnOO');
const btnHindi = document.getElementById('btnHindi');
const questionContent = document.getElementById('questionContent')
const slideShow = document.getElementById('slideShow')
const btnNext =document.getElementById('btnNext')
const btnPrev =document.getElementById('btnPrev')

const question = [
    {
        id: 1,
        content: 'Mabait ba si Rumar?'
    },
    {
        id: 2,
        content: 'Meron akong liham para sa iyo aking minamahal! Nais muba itong mabasa?'
    },
]

const imagesPath = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
]

let currentImage = 0

let selectedQuestion = ''

btnOO.addEventListener('click', () => {

    const modalKilig = document.getElementById('modalKilig');
    const modalText = document.querySelector('#modalText');
    const letterContainer = document.getElementById('letterContainer')

    if (selectedQuestion === '') {

        modalKilig.style.display = 'flex';
        setTimeout(() => {
            modalKilig.style.display = 'none';
        }, 3000);

        questionContent.innerText = question[0].content
        btnHindi.style.display = 'none'

        selectedQuestion = question[0].content 

    }else if (selectedQuestion === question[0].content) {

        modalText.style.display = 'flex'
        
        setTimeout(() => {
            modalText.style.display = 'none'
            questionContent.innerText = question[1].content
            selectedQuestion = question[1].content 
        }, 3000);

    }else if (selectedQuestion === question[1].content) {
        const questionContainer = document.querySelector('.questionContainer')
        questionContainer.style.display = 'none'
        letterContainer.style.display = 'flex'
        slideShow.src = imagesPath[currentImage]
    }

    
    
});

btnHindi.addEventListener('click', () => {
    const modalGalit = document.getElementById('modalGalit');
    
    modalGalit.style.display = 'flex';
    setTimeout(() => {
        modalGalit.style.display = 'none';
    }, 5000);

    btnHindi.disabled = true
    
});

btnNext.addEventListener('click', () => {
    if (currentImage < 7) {
        slideShow.src = imagesPath[currentImage + 1]
        currentImage += 1
    }
});

btnPrev.addEventListener('click', () => {
    if (currentImage > 0) {
        slideShow.src = imagesPath[currentImage - 1]
        currentImage -= 1
    }
});