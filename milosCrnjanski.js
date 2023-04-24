const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
        image: 'Materijal/Foto - Crnjanski.jpg',
        text: 'Miloš Crnjanski (1893-1977) počeo je da radi u Četvrtoj muškoj gimnaziji školske 1922/23. godine. gde je došao iz pančevačke gimnazije. Upravo za vreme svoje profesure u ovoj školi Crnjanski je objavio svoja znamenita dela - Seobe (1929), Ljubav u Toskani (1930), Knjigu o Nemačkoj (1931), te poemu Serbia (1926), Predavao je srpski (srpsko-hrvatsko-slovenački) jezik, istoriju i zemljopis. U početku je predavao i francuski jezik, a na iskazano protivljenje, direktor Luka Lazarević mu je objasnio da su časovi srpskog i nemačkog jezika - što je Crnjanski želeo da predaje - već dodeljeni drugim nastavnicima. Ukaz o postavljenju potpisan je 30. oktobra 1022. godine.'
      },
      {
        image: 'Materijal/logo 1  Gimnazija-Sveti-Sava-FI.png',
        text: 'Miloš Crnjanski bio je, po svemu sudeći, veoma nebrižljiv u ispunjavanju administrativnih obaveza. Ukoren je oštro aprila 1923. godine, jer nije dostavio Ministarstvu prosvete podatke za službeni list. Zbog njegove greške, prolongirano mu je 1924. godine rešenje o prevoenju u viši činovnički rang. Neki put, međutim, krivica nije bila do njega. Tako, kada je Mesna kontrola Ministarstva šuma 15. marta 1927. godine zatražila prinudnu naplatu za drva “koja je preuzeo gospodin Miloš Crnjanski, direktor Šetvrt muške gimnazije odgovorio je da Crnjanski jeste potrživao drva, “ali ih nikada nije primio”! I u stvarima koje nisu bile vezane za školske obaveze, Crnjanski nije bio ništa ažurniji, pa ga je Sud Opštine Beograda opominjao da mora da dostavi svoje službene oficirske obaveze. Zbog neplaćenih dugova, Crnjanskom je 1932. godine stavljena zabrana na platu i zakazano ročište na sudu.'
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
