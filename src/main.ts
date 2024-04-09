const apiUrl: string = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('#advice-id') as HTMLHeadElement;
const adviceContent = document.querySelector(
  '#advice-content'
) as HTMLParagraphElement;
const randomAdvice = document.querySelector(
  '#random-advice'
) as HTMLButtonElement;

const getAdviceData = (): void => {
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
    });
};

window.onload = function (): void {
  getAdviceData();
};

randomAdvice.addEventListener('click', (): void => {
  getAdviceData();
});
