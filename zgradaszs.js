const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
            image: 'Materijal/Kolazi/8. Kolaž - Ž stanica .jpg',
            text: 'Први воз са ове станице кренуо је ка Земуну 20. августа 1884. године уз све дворске почасти. У част поласка првог воза са ове станице, одржан је банкет на ком је присуствовало више од две стотине званица из целе Европе. Тада су путници били краљ Милан, краљица Наталија и престолонаследник Александар Обреновић. Свечаном отварању присуствовало је преко 200 државних званичника и више хиљада грађана. Три дана касније, свечано је отворена железничка пруга Београд-Ниш, а станица је окићена тробојкама и зеленилом. Замишљена је како за путнички, тако и за теретни саобраћај, а оно по чему се издвајала био је њен изглед, тада у складу са европским техничким и архитектонским решењима.'
      },
      {
            image: 'Materijal/Kolazi/8. Kolaž - Ž stanica .jpg',
            text: 'О таквој намери инвеститора сведочи и ангажовање страног архитекте, који је у Бечу направио скице по којима ће план станице бити разрађен. Међутим, његов идентитет није поуздан, али је најверованије да се ради о Вилхелму Флатиху. Београдска станица пројектована је као чеона станица, има три колосека за пријем путничких и 15 колосека за теретне возове, два покривена перона и више помоћних зграда. Станична зграда је велика, у њој има око стотину просторија. Изнад улаза је и сат, један од првих јавних часовника у Београду.'
      },
      {
            image: 'Materijal/Kolazi/8. Kolaž - Ž stanica .jpg',
            text: 'У то време, Европа је увелико имала више стотина хиљада километара пруге, али је Србија, према историјским подацима, била на челу по организованости и уредности, у чему је предњачила управо Београдска железничка станица. По свим подацима од 1889. године до Првог светског рата била је најпрометнија у овом делу Европе. Такође, по завршетку Другог светског рата, пошто је обновила капацитете, постала је најпрометнија у Европи. По свим важним и важећим архитектонским критеријумима последње четвртине 19. века, сама станична зграда представља репрезентативно здање, којим се на достојан начин оглашава присуство Београда на мапи Европе. '
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
