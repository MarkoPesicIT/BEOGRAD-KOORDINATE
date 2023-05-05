const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
            image: 'Materijal/Kolazi/8. Kolaž - Ž stanica .jpg',
            text: 'Prvi voz sa ove stanice krenuo je ka Zemunu 20. avgusta 1884. godine uz sve dvorske počasti. U čast polaska prvog voza sa ove stanice, održan je banket na kom je prisustvovalo više od dve stotine zvanica iz cele Evrope. Tada su putnici bili kralj Milan, kraljica Natalija i prestolonaslednik Aleksandar Obrenović. Svečanom otvaranju prisustvovalo je preko 200 državnih zvaničnika i više hiljada građana. Tri dana kasnije, svečano je otvorena železnička pruga Beograd-Niš, a stanica je okićena trobojkama i zelenilom. Zamišljena je kako za putnički, tako i za teretni saobraćaj, a ono po čemu se izdvajala bio je njen izgled, tada u skladu sa evropskim tehničkim i arhitektonskim rešenjima.'
      },
      {
            image: 'Materijal/Kolazi/8. Kolaž - Ž stanica .jpg',
            text: 'O takvoj nameri investitora svedoči i angažovanje stranog arhitekte, koji je u Beču napravio skice po kojima će plan stanice biti razrađen. Međutim, njegov identitet nije pouzdan, ali je najverovanije da se radi o Vilhelmu Flatihu. Beogradska stanica projektovana je kao čeona stanica, ima tri koloseka za prijem putničkih i 15 koloseka za teretne vozove, dva pokrivena perona i više pomoćnih zgrada. Stanična zgrada je velika, u njoj ima oko stotinu prostorija. Iznad ulaza je i sat, jedan od prvih javnih časovnika u Beogradu.'
      },
      {
            image: 'Materijal/Kolazi/8. Kolaž - Ž stanica .jpg',
            text: 'U to vreme, Evropa je uveliko imala više stotina hiljada kilometara pruge, ali je Srbija, prema istorijskim podacima, bila na čelu po organizovanosti i urednosti, u čemu je prednjačila upravo Beogradska železnička stanica. Po svim podacima od 1889. godine do Prvog svetskog rata bila je najprometnija u ovom delu Evrope. Takođe, po završetku Drugog svetskog rata, pošto je obnovila kapacitete, postala je najprometnija u Evropi. Po svim važnim i važećim arhitektonskim kriterijumima poslednje četvrtine 19. veka, sama stanična zgrada predstavlja reprezentativno zdanje, kojim se na dostojan način oglašava prisustvo Beograda na mapi Evrope. '
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
