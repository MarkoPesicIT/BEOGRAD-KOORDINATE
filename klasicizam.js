const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
        image: 'Materijal/Kolazi/12. Kolaž - Klasicizam .jpg',
        text: 'Класицизам је стил у уметности са краја 18. и из прве половине 19. века, који је поново афирмисао особености архитектуре античких узора, ослањајући се на рационалистичку филозофију и нове друштвене околности после француске буржоаске револуције. Базира се на естетским теоријама Винкелмана, по којима је лепота створена већ у античкој уметности, са основним одликама одмерености, симетрије, реда и јасноће. Најбоље се може окарактерисати његовом максимом „племените једноставности и тихе величине“.'
      },
      {
        image: 'Materijal/Kolazi/12. Kolaž - Klasicizam .jpg',
        text: 'То је стил са којим се архитектура Србије срела после добијања одређених слобода унутар Османске царевине и први је искорак ван граница традиционалне балканске градње. Мало заступљен на самом почетку, пре свега због ограничавајућих економских и политичких фактора, класицизам у Србији добија пуни замах после нешто више од пола века, овог пута кроз форме обновљеног класицизма, актуелног између два светска рата. Штавише, објекти подигнути у овом периоду дали су печат центру Београда и као такви постали су један од камена међаша српске архитектуре.'
      },
      {
        image: 'Materijal/Kolazi/12. Kolaž - Klasicizam .jpg',
        text: 'Створена је као архитектура базирана на моралном критеријуму, у време када су се креирале нове модерне државе, са свим постулатима троделне власти (законодавне, извршне и судске), када се управљачка моћ преносила са монарха на народ, када је било потребно да се конституише демократски систем као израз воље грађана. Са свим атрибутима просветитељства, оваква архитектура носи у себи вечите идеје праведности и вечиту естетику формирану током две хиљаде година.'
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
