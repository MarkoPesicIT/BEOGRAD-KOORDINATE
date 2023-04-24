const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
        image: 'Materijal/momcilo.jpg',
        text: 'Rešenjem Ministarstva prosvete od 28. oktobra 1924. godine, iz Treće muške gimnazije premešten je u Četvrtu mučku gimnaziju* profesor Momčilo Nastasijević (1894 – 1938). Bio je već na putu književne afirmacije. U to vreme nastajala je njegova zbirka pripovedaka Iz tamnog vilajeta, koju će objaviti tri godine kasnije. Uporedo sa nastavničkom karijerom, stvarao je svoja dela nastala u traganju za „maternjom melodijom“ – dramu Međuluško blago (1927), te zbirku pesama Pet lirskih krugova (1932). Nastasijević je vrlo predano i savesno obavljao svoje nastavničke dužnosti, kao profesor srpskog (srpsko-hrvatsko-slovenačkog) jezika i francuskog jezika. Inače, porodica Nastasijević neraskidivo je vezana za Četvrtu mušku gimnaziju. Pored Momčila, u ovoj školi je tri decenije, od školske 1927/28. godine, pa sve do penzionisanja, fiziku i matematiku predavala njegova sestra Slavka, a učenici ove gimnazije bili su njegova braća Slavomir i Svetomir.'
      },
      {
        image: 'Materijal/momcilo.jpg',
        text: 'Momčilo Nastasijević je zbog svoje savesnosti uvek odlično ocenjivan od strane direktora i prosvetnih inspektora, ali izgleda da nije bio mnogo omiljen meu učenicima. Uostalom, kao razredni starešina nije bio sklon da popušta svojim učenicima, a u upisnicama je u karakteristikama bio vrlo oštar i direktan. Tako je, recimo, učenika lazara Stevanović ovako okarakterisao: „ Slabe pameti, neuredan, aljkav. Ulaguje se. Nije za gimnaziju.“ A Srboljuba Đurića, uprkos pohvali za njegovu inteligenciju, dodao je da je „skroz uneravnotežen.“ Imao je Nastasijević, stoga, i nekoliko neprilika sa svojim učenicima, a najveća je bila kada su mu 1937. godine neki đaci na ulazu stana, kako stoji u njegovoj prijavi, „iščupali električno zvonce zlonamerno.“'
      },
      {
        image:'Materijal/momcilo.jpg',
        text: 'U svemu drugome, Nastasijević ničim nije davao povoda za reagovanje direktora ili Ministarstva prosvete. Jedino se iz sačuvanih dokumenata vidi da je često uzimao kredite koje uvek mogao na vreme da vraća, zbog čega mu je stavljana zabranan na platu. Prvi put se to desilo 1930. godine, kada mu je na ime duga Profesorskoj zadruzi od plate odbijeno 780 dinara**. Godine 1933. uzeo je depozit kod Glavne državne blagajne, a iste godine stavljena mu je zabrana na dve trećine plate za račun stovarišta „Pribor“, a taj slučaj je čak dospeo na sud. Zabrana na platu Nastasijeviću je stavljena te godine i za račun Zadužbinarskog odseka Ministarstva prosvete. Godine 1935. stavljena mu je zabrana na platu od 800 dinara za račun Profesorske zadruge. Najzad, zabranu na platu Nastasijević je, po nalogu Sreskog suda dobio i početkom 1936. godine.'
      },
      {
        image:'Materijal/momcilo.jpg',
        text: 'Što se tiče napredovanja u slućbi, Nastasijević je išao uhodanim putem, i to ubrzano, zahvaljujući svojoj marljivosti i savesnosti u službi. Godine 1928. zatražio je unapređenje, i već 23. januara 1929. godine unapređen je u sedmu činovničku grupu. Već početkom 1930. godine dobio je novo unapređenje, a samo mesec dana kasnije dobio je „prekoredno unapređenje zbog izuzetnog zalaganja u radu“. Do sledećeg unapređenja prošlo je tri godine. Nastasijević je 13. februara 1933. godine Ministarstvu prosvete predao molbu za unapređenje u petu činovničku grupu. Molba je povoljno rešena. Po pravilu, sledeće unapređenje Nastasijević je mogao da traži tek za tri godine, ali je već 1. avgusta 1934. godine direktor Četvrte muške gimnazije predložio Ministarstvu prosvete „ da se zbog odličnog i marljivog rada g. Momčilo Nastasijević pre roka unapredi u četvrtu grupu.“ Ipak, to nije išlo brzo. '
      },
      {
        image:'Materijal/momcilo.jpg',
        text: 'Ministarstvo prosvete zatražilo je da direktor Četvrte muške gimnazije dostavi uverenje „gde je g. M. Nastasijević bio za vreme rata.“ Od trenutka kada je direktor to uverenje poslao, prošlo je četiri meseca, a onda je Nastasjević vanredno unapređen. I upravo tada Nastasijević je počeo da poboljeva. I pored toga, redovno je držao nastavu. Nije zabeležen nijedan njegov zahtev za odsustvo! To je trajalo sve do proleća 1936. godine, kada je tako teško oboleo da je direktor Ristić uputio Ministarstvu prosvete dopis u kome veli da se mora sumnjati da će Nastasijević uopšte ostati u životu. Takođe je direktor i opštoj državnoj bolnici uputio potvrdu „da je njihov bolesnik g. Momčilo Nastasijević razvrstan profesor.“ Za lečenje je Nastasijević uzeo kredit kod Profesorske zadruge. Zbog bolesti i dužeg bolovanja Nastasijević je na kraju školske 1936/37. godine prvi put od Komisije za ocenjivanje nastavnika dobio lošu ocenu rada, na koju se odmah, uvređen, žalio.'
      },
      {
        image:'Materijal/momcilo.jpg',
        text: 'Nastasijević je 16. decembra 1937. godine zamolio Ministarstvo prosvete za novo unapređenje, ali ga nije dočekao jer je dva meseca kasnije umro. Nastasijevićev brat Živorad, akademski slikar, izvestio je 3. marta 1938. godine direktora Četvrte muške gimnazije da je „o svom trošku sahranio svoga brata, počivšeg Momčila Nastasijevića, profesora ove škole“ i zahtevao da mu se isplate „posmrtne prinadležnosti moga brata.“ Istog dana, direktor gimnazije izdao je nalog Glavnoj državnoj blagajni „za isplatu posmrtnih prinadležnosti za Momčila Nastasijevića, profesora četvrte grupe drugog stepena, u iznosu od 3270 dinara.“ Tako se, preranom smrću, okončala, pored književne, i nastavnička karijera Momčila Nastasijevića.'
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
