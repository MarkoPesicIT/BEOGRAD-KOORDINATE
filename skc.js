const sliderText = document.querySelector('.slider-text');
const sliderImage = document.querySelector('.slider-image img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = [
      {
            image: 'Materijal/Kolazi/14. Kolaž - Zgrada Studentskog kulturnog centra (SKC).jpg',
            text: 'Подигнут као Зграда официрског дома у Београду, данашњи СКЦ натопљен је догађајима који су обележили историју главног града, али и државе. Некада дом камерне музике, балова и војничких забава, потом место где су планирани преврат и студентски бунт. СКЦ данас из дремежа буде рок концерти сећајући га на дане када су се, иза прелепе фасаде, поверавале највеће тајне. Зграда официрског дома настала је из идеје Александра И Обреновића да официрима српске војске подари место где ће се окупљати, дружити и забављати на баловима и изложбама.'
      },
      {
            image: 'Materijal/Kolazi/14. Kolaž - Zgrada Studentskog kulturnog centra (SKC).jpg',
            text: 'Зграда СКЦ данас је заштићени споменик културе, у коме се одржавају изложбе, концерти, позоришни програми... и то у пет галерија – В.И.П. Арт Галерија, Циркус галерија, Арт@Арт галерија, Галерија СКЦ и Срећна галерија. Такође, ту су и редакције за музички и позоришни програм. У локалима у приземљу објекта, смештене су књижаре и кафић, а култна манифестација, од 2003. године постао је Међународни салон стрипа.'
      },
      {
            image: 'Materijal/Kolazi/14. Kolaž - Zgrada Studentskog kulturnog centra (SKC).jpg',
            text: 'Комплетна замисао дефинитиван изглед добија 3. априла 1971. када је званично основан Студентски културни центар. Наредне године учиниле су да СКЦ постане једно од главних окупљалишта урбане омладине. Овде се развијала авангарда, рађали се аутори и образовала омладина.'
      },
      {
            image: 'Materijal/Kolazi/14. Kolaž - Zgrada Studentskog kulturnog centra (SKC).jpg',
            text: 'У времену након Другог светског рата, "дворац у центру" постаје Дом тајне полиције. Ту су приказиване пројекције филмова са Запада и прављене прве рок игранке. Идеја власти је била имати место где ће студентске револуционарне идеје и "против државно деловање" бити под једним кровом и лаке за контролу и наџор. Да је таквих идеја било, јасно су показали студентски протести 1968. године, после којих је Официрски дом предат на управу Београдском универзитету.'
      },
      {
            image: 'Materijal/Kolazi/14. Kolaž - Zgrada Studentskog kulturnog centra (SKC).jpg',
            text: '1895. године, а према пројектима двојице архитекта Јована Илкића и Милорада Рувидића, подигнут је Официрски дом. С обзиром на "војну" намену, одлучено је да зграда има облик замка и, у то време, била је заиста јединствена београдска грађевина. Свечано отварање Официрског дома одиграло се 14. августа 1895. на рођендан краља Александра. У свом говору, краљ је рекао како је Официрски дом "доказ моје бриге за усавршавањем српске одбрамбене снаге. Препоручујем да се у њему развијају војничке врлине и дружељубље".'
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
