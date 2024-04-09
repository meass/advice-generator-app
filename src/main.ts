const apiUrl: string = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('#advice-id') as HTMLHeadElement;
const adviceContent = document.querySelector(
  '#advice-content'
) as HTMLParagraphElement;
const randomAdvice = document.querySelector(
  '#random-advice'
) as HTMLButtonElement;
const loadingIcon = document.querySelector(
  '.loading-icon'
) as HTMLOrSVGImageElement;
const adviceContainer = document.querySelector(
  '.advice-container'
) as HTMLDivElement;

const getAdviceData = (): void => {
  loadingIcon.classList.remove('hidden');
  adviceContainer.classList.add('hidden');
  fetch(apiUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
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

window.onload = function (): void {
  getAdviceData();
};

randomAdvice.addEventListener('click', (): void => {
  getAdviceData();
});
