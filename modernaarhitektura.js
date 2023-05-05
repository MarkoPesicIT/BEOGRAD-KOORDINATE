const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
            image: 'Materijal/Kolazi/10. Kolaž - Moderna arhitektura (Brutalizam).jpg',
            text: 'Na razvoj moderne arhitekture uticale su možda u najvećoj meri narastale potrebe, koje su se razvijale uporedo sa povećanjem opšteg nivoa razvoja i standarda, kao i porastom broja stanovništva, posebno u prestonom gradu Beogradu. Počev od perioda nakon Prvog svetskog rata, kada je Beograd imao 120.000 stanovnika, grad se konstantno širio i razvijao. Pred sam Drugi svetski rat, grad je gotovo utrostručen po broju stanovnika i narastao je do cifre od 320.000, čime se svrstao medju ondašnje evropske metropole.'
      },
      {
            image: 'Materijal/Kolazi/10. Kolaž - Moderna arhitektura (Brutalizam).jpg',
            text: 'On je u posleratnom periodu sagradio svoje remek-delo – zgradu Državnog sekretarijata narodne odbrane (1954. – 1963.), mada uz velike teškoće i kompromise. Kako je on od 1943. godine ratne godine proveo na slobodonom ostrvu Visu, a u oslobodjeni Beograd je došao zajedno sa borcima narodnooslobodilačkog pokreta, nova politička elita ga je prihvatila i podržala. Tako je imao priliku da svojom strašću rasnog arhitekte, talasima polemičkih tekstova i knjiga, smelošću svojih ideja i beskompromisnošću protiv konvencionalnog, nestručnog i slučajnog u arhitekturi, postane predvodnik u utiranju novih puteva u srpskoj arhitekturi.'
      },
      {
            image: 'Materijal/Kolazi/10. Kolaž - Moderna arhitektura (Brutalizam).jpg',
            text: 'Uporedo sa formiranjem i etabliranjem nove političke, društvene i kulturne politike i elite, karijere pionira srpskog modernizma i stožera srpske arhitekture bile su presečene, bez obzira na činjenicu da je većina njih bila u svojim najboljim stvaralačkim godinama. Neki medju njima mogli su da nastave da rade na Univerzitetu, baveći se naukom i pisanjem stručnih dela, bez moći ili želje da shvate i prihvate istorijsko-kulturnu situaciju društva u kojoj su se našli. Jedini predstavnik te generacije, koji je svojom kreativnošću donekle uspeo da se uklopi u političku situaciju novog društva, bio je Nikola Dobrović.'
      },
      {
            image: 'Materijal/Kolazi/10. Kolaž - Moderna arhitektura (Brutalizam).jpg',
            text: 'Društvena klima je potpuno izmenjena, a arhitekti u prvo vreme nisu umeli da prilagode svoje stručne i umetničke stavove novonastaloj situaciji. Arhitektura, koja je pre rata bila zasnovana na potpuno drugim zahtevima, u novonastalim uslovima i arhitektonskim potrebama kako društva u celini, tako i korisnika-pojedinca, nije mogla da pronadje svoje mesto i svoj pravi izraz. Zahtevi ratom razorene države i potpuno novog društva socijalističkog realizma u pogledu arhitekture i urbanizma isključivali su elemente estetike i likovnosti, a prvenstveno su se odnosili na zadovoljavanje ogoljenih osnovnih potreba stanovništva, koje je tražilo pre svega da ima neophodan »krov nad glavom«. Ideje kolektivizma, '
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
