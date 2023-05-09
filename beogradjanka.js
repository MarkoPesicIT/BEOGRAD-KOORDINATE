const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
        image: 'Materijal/Kolazi/4. Kolaž - Beograđanka.jpg',
        text: 'Palatu Beograd projektovao je arhitekta Branko Pešić. Inače, njega često brkaju sa savremenikom gradonačelnikom Brankom Pešićem, čiji se mandat završio nakon što je Beograđanka, sa svojim 101 metrom visine, 23 sprata i 40.000 kvadrata, otvorena za javnost 22. aprila 1974. godine. Urbana legenda kaže, iako za to nikada nisu pruženi dokazi, da je neko u tadašnjoj vlasti bio veoma uzrujan time što najviši objekat u gradu nosi ime Palata "Albanija".- "Kako Albanija u sred Beograda? Hajte ljudi, ne možeto tako. S jedne strane Albanija, s druge Moskva. A, gde jetu Srbija, gde je tu Beograd", navodno je rekao dotični. I bi odlučeno. Najveća zgrada podignuta, zvaćese Palata Beograd i zaseniće sve druge. Rečeno–učinjeno.<br><br> 1 / 3'
      },
      {
        image: 'Materijal/Kolazi/4. Kolaž - Beograđanka.jpg',
        text: 'Za lokaciju je izabrana raskrsnica u centru kako bi zgrada bila vidljiva odasvud i postala novi orijentir koji će svojom dominacijom "zameniti" Palatu "Albanija" i hotel "Moskva". Inače, na toj parceli, na ćošku ulica Kralja Milana i Masarikove, nalazila se kuća Jeremije Milivojević koju je trebalo da zameni objekat braće Teokarović, poznatih predratnih trgovaca. Ipak, Drugi svetski raspršio je ideju ove braće pa je plac dočekao šezdesete i "zlatno doba Beograda" u kome je sagrađena. Izgradnja impresivnog objekta počela je 1969. i trajala je samo pet godina. Odlučeno je da Beograđanke bude ukrašena najkvalitetnijim crnim aluminijumom koji je doteran iz Italije. Tako je dobila van vremenski elegantan izgled koji je, u isto vreme, ulivao i divljenje i poštovanje.<br><br> 3 / 3'
      },
      {
        image: 'Materijal/Kolazi/4. Kolaž - Beograđanka.jpg',
        text: 'Ali, nije se tu stalo. Posebna pažnja posvećena je unutrašnjosti Beograđanke. Vidikovac na 22. spratu pružao je pogled na prestonicu od koga dah zastaje čak i kada se stoti put nađete pred njim. Inače, vidikovac je zatvoren devedesetih, ali ima naznaka da će biti ponovo otvoren. Zgrada je opremljena posebnim računarskim sistemom koji budno pazi na klimatske uslove u objektu i i spušta roletne u zavisnosti od vremenskih prilika, a tu su i liftovi koji velikom brzinom, ali ne da čoveku bude neprijatno, prevoze ljude od dna do vrha. Svakako Beograđanka beše zgrada koja nije imala premca. A, neki bi možda rekli da konkurencije nema danas.<br><br> 2 / 3'
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
