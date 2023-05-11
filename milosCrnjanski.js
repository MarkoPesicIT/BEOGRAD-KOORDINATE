const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
        image: 'Materijal/Licnosti/Foto - Crnjanski.jpg',
        text: 'Милош Црњански (1893-1977) почео је да ради у Четвртој мушкој гимназији школске 1922/23. године. где је дошао из панчевачке гимназије. Управо за време своје професуре у овој школи Црњански је објавио своја знаменита дела - Сеобе (1929), Љубав у Тоскани (1930), Књигу о Немачкој (1931), те поему Сербиа (1926), Предавао је српски (српско-хрватско-словеначки) језик, историју и земљопис. У почетку је предавао и француски језик, а на исказано противљење, директор Лука Лазаревић му је објаснио да су часови српског и немачког језика - што је Црњански желео да предаје - већ додељени другим наставницима. Указ о постављењу потписан је 30. октобра 1022. године.'
      },
      {
        image: 'Materijal/Licnosti/Foto - Crnjanski.jpg',
        text: 'Он је, по свему судећи, веома небрижљив у испуњавању административних обавеза. Укорен је оштро априла 1923. године, јер није доставио Министарству просвете податке за службени лист. Због његове грешке, пролонгирано му је 1924. године решење о превоењу у виши чиновнички ранг. Неки пут, међутим, кривица није била до њега. Тако, када је Месна контрола Министарства шума 15. марта 1927. године затражила принудну наплату за дрва “која је преузео господин Милош Црњански, директор Шетврт мушке гимназије одговорио је да Црњански јесте потрживао дрва, “али их никада није примио”! И у стварима које нису биле везане за школске обавезе, Црњански није био ништа ажурнији, па га је Суд Општине Београда опомињао да мора да достави своје службене официрске обавезе. Због неплаћених дугова, Црњанском је 1932. године стављена забрана на плату и заказано рочиште на суду.'
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
