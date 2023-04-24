const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
        image: 'Materijal/sPandurovic.jpg',
        text: 'Sima Pandurović (1893 – 1960) poznati je srpski pesnik. Službeničku karijeru otpočeo je kao profesor u valjevskoj gimnaziji, a u Srpskoj kraljevsjkoj četvrtoj gimnaziji* radio je od 1910. do 1913. godine.Upravo u to vreme doživeo je najveću slavu kao mladi i talentovani pesnik (sa zbirkom Posmrtne počasti), ali i ubitačnu kritiku Jovana Skerlića, koji ga je zajedno sa Disom oglasio za rodonačelnika „bolesnog pesimizma“ u srpskoj poeziji. Za vreme Prvog svetskog rata Austrijanci su ga internirali u logore u Boldogasonju i Nežideru. '
      },
      {
        image: 'Materijal/sPandurovic.jpg',
        text: 'Radni vek je proveo kao sekretar Ministarstva prosvete i pomoćnik upravnika Narodne biblioteke. Uređivao je izuzetno uticajan književni časopis „Misao“ i prevodio Molijera i Šekspira.Za vreme nemačke okupacije (1941 – 1944) bio je jedno vreme šef odeljenja Beogradske opštine. Zbog toga, kao i zbog nekih predavanja tokom okupacije, komunisti su ga poslali tzv. Sud časti, i on je, posle osude, do smrti tavorio u siromaštvu.* Gimnaziju „Sveti Sava“ u Beogradu prvobitno se zvala Srpska kraljevsjka četvrta gimnazija od njenog osnivanja 1910. godine do 1919. godine.'
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
