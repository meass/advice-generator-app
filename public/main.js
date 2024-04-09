"use strict";
const apiUrl = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('#advice-id');
const adviceContent = document.querySelector('#advice-content');
const randomAdvice = document.querySelector('#random-advice');
const loadingIcon = document.querySelector('.loading-icon');
const adviceContainer = document.querySelector('.advice-container');
const getAdviceData = () => {
    loadingIcon.classList.remove('hidden');
    adviceContainer.classList.add('hidden');
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
        adviceContainer.classList.remove('hidden');
        loadingIcon.classList.add('hidden');
    });
};
window.onload = function () {
    getAdviceData();
};
randomAdvice.addEventListener('click', () => {
    getAdviceData();
});
