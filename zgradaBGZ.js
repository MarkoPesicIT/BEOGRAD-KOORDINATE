const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
            image: 'Materijal/Kolazi/6. Kolaž - Zgrada Beogradske zadruge.jpg',
            text: 'Arhitektonska lepotica izgrađena 1907. godine je delo dvojca, Nikole Nestorovića i Andre Stevanovića. Glavni razlog za vidljivi uticaj Francuske estetike je Pariska izložba koju su idejni kreatori posetili 1900. godine i koja je ostavila snažan utisak na njihovo stvaranje. Za kulturno dobro od velikog značaja je proglašena 1979. godine.Prvobitno se ovde nalazilo sedište "Beogradske zadruge za međusobno pomaganje i štednju" koju su osnovali trgovci 1882. sa ciljem da srednja klasa lakše dođe do povoljnih kredita.'
      },
      {
            image: 'Materijal/Kolazi/6. Kolaž - Zgrada Beogradske zadruge.jpg',
            text: 'Impresivna zgrada-muzej je doživela nekoliko adaptacija. Prva veća je bila između 1956. i 1957. kada je Geološko-geofički zavod nadogradio treći sprat, zatim između 1958. i 1959. dodao ponovo tri sprata oko šalter-sale u kojoj se i danas čuva sef iz perioda Zadruge. Konzervacija svečane sale se dogodila 1986. Najveća rekonstrukcija se odvijala tokom 2014. godine, zajedno sa početkom izgradnje najmodernijeg dela grada, Beograda na vodi. U bombardovanju Beograda 6. aprila 1941. godine zgrada je bila oštećena ali ubrzo i renovirana da bi se isti događaj ponovio 1944. kada je građevina bila daleko više ruinirana.'
      },
      {
            image: 'Materijal/Kolazi/6. Kolaž - Zgrada Beogradske zadruge.jpg',
            text: 'Iako se posebno vodilo računa o estetskom izgledu, funkcionalnost nije izostala. Prizemlje dvospratnog zdanja je bilo namenjeno za izdavanje stanova i poslovnih lokala. Gornji sprat je služio za rad administrativnih i upravnih odeljenja Zadruge, fokusiranih na finansije i osiguranje. Podrumi su veliki koliko i sama površina u osnovi. Veliku pažnju privlači svečana sala u kojoj dominira barokni stil, bogat različitim detaljima izrađenih najfinijim tehnikama.'
      },
      {
            image: 'Materijal/Kolazi/6. Kolaž - Zgrada Beogradske zadruge.jpg',
            text: 'Tokom izgradnje mnogi procesi su doživeli srpsku premijeru. Po prvi put je za fundiranje zidova upotrebljen armirani beton sa okruglim gvožđem. Vajarski radovi su pripali Franji Valdmanu. Dekorativno slikarstvo su preuzeli na sebe Bora Kovačević i Andrea Dominiko, dok je gospodin Marković bio zadužen za slikanje na staklu.'
      },
      {
            image: 'Materijal/Kolazi/6. Kolaž - Zgrada Beogradske zadruge.jpg',
            text: 'Istovremeno, ova institucija je imala veliki uticaj na izgradnju tadašnjeg Beograda jer su trgovci bili među najimućnijim ljudima. Odluke su donosili najugledniji ljudi svog vremena, poput Đorđa Vajferta, a pre njega su svojim potpisom odobravali značajne sume Lazar Paču, Kosta Taušanović i drugi. Beogradsku zadrugu su uvek vodili istaknuti privrednici, političari, finansijski eksperti. Sve vreme postojanja, Zadruga je odavde obavljala svoje funkcije. Nakon ukidanja institucije u zgradu se uselio Geološko-geofizički zavod "Jovan Žujović". Otuda i dva naziva za istu zgradu. Jedni je pamte po Beogradskoj zadruzi, drugi po Geozavodu.'
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
