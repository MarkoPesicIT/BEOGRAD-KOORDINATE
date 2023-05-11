const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
        image: 'Materijal/Licnosti/sPandurovic.jpg',
        text: 'Сима Пандуровић (1893 – 1960) познати је српски песник. Службеничку каријеру отпочео је као професор у ваљевској гимназији, а у Српској краљевсјкој четвртој гимназији радио је од 1910. до 1913. године.Управо у то време доживео је највећу славу као млади и талентовани песник (са збирком Посмртне почасти), али и убитачну критику Јована Скерлића, који га је заједно са Дисом огласио за родоначелника „болесног песимизма“ у српској поезији. За време Првог светског рата Аустријанци су га интернирали у логоре у Болдогасоњу и Нежидеру.'
      },
      {
        image: 'Materijal/Licnosti/sPandurovic.jpg',
        text: 'Радни век је провео као секретар Министарства просвете и помоћник управника Народне библиотеке. Уређивао је изузетно утицајан књижевни часопис „Мисао“ и преводио Молијера и Шекспира.За време немачке окупације (1941 – 1944) био је једно време шеф одељења Београдске општине. Због тога, као и због неких предавања током окупације, комунисти су га послали тзв. Суд части, и он је, после осуде, до смрти таворио у сиромаштву.* Гимназију „Свети Сава“ у Београду првобитно се звала Српска краљевсјка четврта гимназија од њеног оснивања 1910. године до 1919. године.'
      }
    ];
    
let currentSlide = 0;

// Display initial slide
sliderText.innerHTML = `
  <p>${slides[currentSlide].text}</p>
`;
sliderImage.src = slides[currentSlide].image;

// Handle previous button click
prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  sliderText.innerHTML = `
    <p>${slides[currentSlide].text}</p>
  `;
  sliderImage.classList.add('hidden');
  setTimeout(() => {
    sliderImage.src = slides[currentSlide].image;
    sliderImage.classList.remove('hidden');
  }, 0);
});

// Handle next button click
nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  sliderText.innerHTML = `
    <p>${slides[currentSlide].text}</p>
  `;
  sliderImage.classList.add('hidden');
  setTimeout(() => {
    sliderImage.src = slides[currentSlide].image;
    sliderImage.classList.remove('hidden');
  }, 0);
});

// Handle keyboard arrow keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevButton.click();
  } else if (e.key === 'ArrowRight') {
    nextButton.click();
  }
});
