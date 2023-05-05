const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
        image: 'Materijal/Kolazi/12. Kolaž - Klasicizam .jpg',
        text: 'Klasicizam je stil u umetnosti sa kraja 18. i iz prve polovine 19. veka, koji je ponovo afirmisao osobenosti arhitekture antičkih uzora, oslanjajući se na racionalističku filozofiju i nove društvene okolnosti posle francuske buržoaske revolucije. Bazira se na estetskim teorijama Vinkelmana, po kojima je lepota stvorena već u antičkoj umetnosti, sa osnovnim odlikama odmerenosti, simetrije, reda i jasnoće. Najbolje se može okarakterisati njegovom maksimom „plemenite jednostavnosti i tihe veličine“.'
      },
      {
        image: 'Materijal/Kolazi/12. Kolaž - Klasicizam .jpg',
        text: 'To je stil sa kojim se arhitektura Srbije srela posle dobijanja određenih sloboda unutar Osmanske carevine i prvi je iskorak van granica tradicionalne balkanske gradnje. Malo zastupljen na samom početku, pre svega zbog ograničavajućih ekonomskih i političkih faktora, klasicizam u Srbiji dobija puni zamah posle nešto više od pola veka, ovog puta kroz forme obnovljenog klasicizma, aktuelnog između dva svetska rata. Štaviše, objekti podignuti u ovom periodu dali su pečat centru Beograda i kao takvi postali su jedan od kamena međaša srpske arhitekture.'
      },
      {
        image: 'Materijal/Kolazi/12. Kolaž - Klasicizam .jpg',
        text: 'Stvorena je kao arhitektura bazirana na moralnom kriterijumu, u vreme kada su se kreirale nove moderne države, sa svim postulatima trodelne vlasti (zakonodavne, izvršne i sudske), kada se upravljačka moć prenosila sa monarha na narod, kada je bilo potrebno da se konstituiše demokratski sistem kao izraz volje građana. Sa svim atributima prosvetiteljstva, ovakva arhitektura nosi u sebi večite ideje pravednosti i večitu estetiku formiranu tokom dve hiljade godina.'
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
