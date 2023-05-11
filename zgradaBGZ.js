const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
            image: 'Materijal/Kolazi/6. Kolaž - Zgrada Beogradske zadruge.jpg',
            text: 'Архитектонска лепотица изграђена 1907. године је дело двоијце, Николе Несторовића и Андре Стевановића. Главни разлог за видљиви утицај Француске естетике је Париска изложба коју су идејни креатори посетили 1900. године и која је оставила снажан утисак на њихово стварање. За културно добро од великог значаја је проглашена 1979. године. Првобитно се овде налазило седиште "Београдске задруге за међусобно помагање и штедњу" коју су основали трговци 1882. са циљем да средња класа лакше дође до повољних кредита.'
      },
      {
            image: 'Materijal/Kolazi/6. Kolaž - Zgrada Beogradske zadruge.jpg',
            text: 'Импресивна зграда-музеј је доживела неколико адаптација. Прва већа је била између 1956. и 1957. када је Геолошко-геофички завод надоградио трећи спрат, затим између 1958. и 1959. додао поново три спрата око шалтер-сале у којој се и данас чува сеф из периода Задруге. Конзервација свечане сале се догодила 1986. Највећа реконструкција се одвијала током 2014. године, заједно са почетком изградње најмодернијег дела града, Београда на води. У бомбардовању Београда 6. априла 1941. године зграда је била оштећена али убрзо и реновирана да би се исти догађај поновио 1944. када је грађевина била далеко више руинирана.'
      },
      {
            image: 'Materijal/Kolazi/6. Kolaž - Zgrada Beogradske zadruge.jpg',
            text: 'Иако се посебно водило рачуна о естетском изгледу, функционалност није изостала. Приземље двоспратног здања је било намењено за издавање станова и пословних локала. Горњи спрат је служио за рад административних и управних одељења Задруге, фокусираних на финансије и осигурање. Подруми су велики колико и сама површина у основи. Велику пажњу привлачи свечана сала у којој доминира барокни стил, богат различитим детаљима израђених најфинијим техникама.'
      },
      {
            image: 'Materijal/Kolazi/6. Kolaž - Zgrada Beogradske zadruge.jpg',
            text: 'Током изградње многи процеси су доживели српску премијеру. По први пут је за фундирање зидова употребљен армирани бетон са округлим гвожђем. Вајарски радови су припали Фрањи Валдману. Декоративно сликарство су преузели на себе Бора Ковачевић и Андреа Доминико, док је господин Марковић био задужен за сликање на стаклу.'
      },
      {
            image: 'Materijal/Kolazi/6. Kolaž - Zgrada Beogradske zadruge.jpg',
            text: 'Истовремено, ова институција је имала велики утицај на изградњу тадашњег Београда јер су трговци били међу најимућнијим људима. Одлуке су доносили најугледнији људи свог времена, попут Ђорђа Вајферта, а пре њега су својим потписом одобравали значајне суме Лазар Пачу, Коста Таушановић и други. Београдску задругу су увек водили истакнути привредници, политичари, финансијски експерти. Све време постојања, Задруга је одавде обављала своје функције. Након укидања институције у зграду се уселио Геолошко-геофизички завод "Јован Жујовић". Отуда и два назива за исту зграду. Једни је памте по Београдској задрузи, други по Геозаводу.'
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
