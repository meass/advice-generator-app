"use strict";
const apiUrl = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('#advice-id');
const adviceContent = document.querySelector('#advice-content');
const randomAdvice = document.querySelector('#random-advice');
const getAdviceData = () => {
    fetch(apiUrl)
        .then((res) => {
        if (res.ok) {
            return res.json();
        }
        else {
            throw new Error('Network response was not ok');
        }
    })
        .then(({ slip }) => {
        const { id, advice } = slip;
        adviceId.innerHTML = `Advice #${id}`;
        adviceContent.innerHTML = advice;
    });
};
window.onload = function () {
    getAdviceData();
};
randomAdvice.addEventListener('click', () => {
    getAdviceData();
});
