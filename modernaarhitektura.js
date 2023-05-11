const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
            image: 'Materijal/Kolazi/10. Kolaž - Moderna arhitektura (Brutalizam).jpg',
            text: 'На развој модерне архитектуре утицале су можда у највећој мери нарастале потребе, које су се развијале упоредо са повећањем општег нивоа развоја и стандарда, као и порастом броја становништва, посебно у престоном граду Београду. Почев од периода након Првог светског рата, када је Београд имао 120.000 становника, град се константно ширио и развијао. Пред сам Други светски рат, град је готово утростручен по броју становника и нарастао је до цифре од 320.000, чиме се сврстао међу ондашње европске метрополе.'
      },
      {
            image: 'Materijal/Kolazi/10. Kolaž - Moderna arhitektura (Brutalizam).jpg',
            text: 'Он је у послератном периоду саградио своје ремек-дело – зграду Државног секретаријата народне одбране (1954. – 1963.), мада уз велике тешкоће и компромисе. Како је он од 1943. године ратне године провео на слободоном острву Вису, а у ослобођени Београд је дошао заједно са борцима народноослободилачког покрета, нова политичка елита га је прихватила и подржала. Тако је имао прилику да својом страшћу расног архитекте, таласима полемичких текстова и књига, смелошћу својих идеја и бескомпромисношћу против конвенционалног, нестручног и случајног у архитектури, постане предводник у утирању нових путева у српској архитектури.'
      },
      {
            image: 'Materijal/Kolazi/10. Kolaž - Moderna arhitektura (Brutalizam).jpg',
            text: 'Упоредо са формирањем и етаблирањем нове политичке, друштвене и културне политике и елите, каријере пионира српског модернизма и стожера српске архитектуре биле су пресечене, без обзира на чињеницу да је већина њих била у својим најбољим стваралачким годинама. Неки међу њима могли су да наставе да раде на Универзитету, бавећи се науком и писањем стручних дела, без моћи или жеље да схвате и прихвате историјско-културну ситуацију друштва у којој су се нашли. Једини представник те генерације, који је својом креативношћу донекле успео да се уклопи у политичку ситуацију новог друштва, био је Никола Добровић.'
      },
      {
            image: 'Materijal/Kolazi/10. Kolaž - Moderna arhitektura (Brutalizam).jpg',
            text: 'Друштвена клима је потпуно измењена, а архитекти у прво време нису умели да прилагоде своје стручне и уметничке ставове новонасталој ситуацији. Архитектура, која је пре рата била заснована на потпуно другим захтевима, у новонасталим условима и архитектонским потребама како друштва у целини, тако и корисника-појединца, није могла да пронађе своје место и свој прави израз. Захтеви ратом разорене државе и потпуно новог друштва социјалистичког реализма у погледу архитектуре и урбанизма искључивали су елементе естетике и ликовности, а првенствено су се односили на задовољавање огољених основних потреба становништва, које је тражило пре свега да има неопходан »кров над главом.'
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
