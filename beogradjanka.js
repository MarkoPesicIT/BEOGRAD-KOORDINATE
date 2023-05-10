const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
        image: 'Materijal/Kolazi/4. Kolaž - Beograđanka.jpg',
        text: 'Палату Београд пројектовао је архитекта Бранко Пешић. Иначе, њега често бркају са савремеником градоначелником Бранком Пешићем, чији се мандат завршио након што је Београђанка, са својим 101 метром висине, 23 спрата и 40.000 квадрата, отворена за јавност 22. априла 1974. године. Урбана легенда каже, иако за то никада нису пружени докази, да је неко у тадашњој власти био веома узрујан тиме што највиши објекат у граду носи име Палата "Албанија".- "Како Албанија у сред Београда? Хајте људи, не можето тако. С једне стране Албанија, с друге Москва. А, где јету Србија, где је ту Београд", наводно је рекао дотични. И би одлучено. Највећа зграда подигнута, зваћесе Палата Београд и засениће све друге. Речено–учињено.'
      },
      {
        image: 'Materijal/Kolazi/4. Kolaž - Beograđanka.jpg',
        text: 'За локацију је изабрана раскрсница у центру како би зграда била видљива одасвуд и постала нови оријентир који ће својом доминацијом "заменити" Палату "Албанија" и хотел "Москва". Иначе, на тој парцели, на ћошку улица Краља Милана и Масарикове, налазила се кућа Јеремије Миливојевић коју је требало да замени објекат браће Теокаровић, познатих предратних трговаца. Ипак, Други светски распршио је идеју ове браће па је плац дочекао шездесете и "златно доба Београда" у коме је саграђена. Изградња импресивног објекта почела је 1969. и трајала је само пет година. Одлучено је да Београђанке буде украшена најквалитетнијим црним алуминијумом који је дотеран из Италије. Тако је добила ван временски елегантан изглед који је, у исто време, уливао и дивљење и поштовање.'
      },
      {
        image: 'Materijal/Kolazi/4. Kolaž - Beograđanka.jpg',
        text: 'Али, није се ту стало. Посебна пажња посвећена је унутрашњости Београђанке. Видиковац на 22. спрату пружао је поглед на престоницу од кога дах застаје чак и када се стоти пут нађете пред њим. Иначе, видиковац је затворен деведесетих, али има назнака да ће бити поново отворен. Зграда је опремљена посебним рачунарским системом који будно пази на климатске услове у објекту и и спушта ролетне у зависности од временских прилика, а ту су и лифтови који великом брзином, али не да човеку буде непријатно, превозе људе од дна до врха. Свакако Београђанка беше зграда која није имала премца. А, неки би можда рекли да конкуренције нема данас.'
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
