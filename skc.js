const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
            image: 'Materijal/Kolazi/14. Kolaž - Zgrada Studentskog kulturnog centra (SKC).jpg',
            text: 'Podignut kao Zgrada oficirskog doma u Beogradu, današnji SKC natopljen je događajima koji su obeležili istoriju glavnog grada, ali i države. Nekada dom kamerne muzike, balova i vojničkih zabava, potom mesto gde su planirani prevrat i studentski bunt. SKC danas iz dremeža bude rok koncerti sećajući ga na dane kada su se, iza prelepe fasade, poveravale najveće tajne. Zgrada oficirskog doma nastala je iz ideje Aleksandra I Obrenovića da oficirima srpske vojske podari mesto gde će se okupljati, družiti i zabavljati na balovima i izložbama.'
      },
      {
            image: 'Materijal/Kolazi/14. Kolaž - Zgrada Studentskog kulturnog centra (SKC).jpg',
            text: 'Zgrada SKC danas je zaštićeni spomenik kulture, u kome se održavaju izložbe, koncerti, pozorišni programi... i to u pet galerija – V.I.P. Art Galerija, Cirkus galerija, Art@Art galerija, Galerija SKC i Srećna galerija. Takođe, tu su i redakcije za muzički i pozorišni program. U lokalima u prizemlju objekta, smeštene su knjižare i kafić, a kultna manifestacija, od 2003. godine postao je Međunarodni salon stripa.'
      },
      {
            image: 'Materijal/Kolazi/14. Kolaž - Zgrada Studentskog kulturnog centra (SKC).jpg',
            text: 'Kompletna zamisao definitivan izgled dobija 3. aprila 1971. kada je zvanično osnovan Studentski kulturni centar. Naredne godine učinile su da SKC postane jedno od glavnih okupljališta urbane omladine. Ovde se razvijala avangarda, rađali se autori i obrazovala omladina.'
      },
      {
            image: 'Materijal/Kolazi/14. Kolaž - Zgrada Studentskog kulturnog centra (SKC).jpg',
            text: 'U vremenu nakon Drugog svetskog rata, "dvorac u centru" postaje Dom tajne policije. Tu su prikazivane projekcije filmova sa Zapada i pravljene prve rok igranke. Ideja vlasti je bila imati mesto gde će studentske revolucionarne ideje i "protiv državno delovanje" biti pod jednim krovom i lake za kontrolu i nadzor. Da je takvih ideja bilo, jasno su pokazali studentski protesti 1968. godine, posle kojih je Oficirski dom predat na upravu Beogradskom univerzitetu. '
      },
      {
            image: 'Materijal/Kolazi/14. Kolaž - Zgrada Studentskog kulturnog centra (SKC).jpg',
            text: '1895. godine, a prema projektima dvojice arhitekta Jovana Ilkića i Milorada Ruvidića, podignut je Oficirski dom. S obzirom na "vojnu" namenu, odlučeno je da zgrada ima oblik zamka i, u to vreme, bila je zaista jedinstvena beogradska građevina. Svečano otvaranje Oficirskog doma odigralo se 14. avgusta 1895. na rođendan kralja Aleksandra. U svom govoru, kralj je rekao kako je Oficirski dom "dokaz moje brige za usavršavanjem srpske odbrambene snage. Preporučujem da se u njemu razvijaju vojničke vrline i druželjublje".'
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
