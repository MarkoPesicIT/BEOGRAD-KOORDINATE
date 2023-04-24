const questions = [
    {
        question: "Које од наведених дела је написао Момчило Настасијевић?",
        optionA: "Косовски сонети",
        optionB: "Песме из Париза",
        optionC: "Ламент над Београдом",
        optionD: "Ране приче",
        correctOption: "optionD"
    },

    {
        question: "У својој поезији Момчило Настасијевић најчешће користи:",
        optionA: "историзме",
        optionB: "архаизме",
        optionC: "неологизме",
        optionD: "ништа од наведеног",
        correctOption: "optionB"
    },

    {
        question: "Која три наведена наслова припадају стваралачком опусу Момчила Настасијевића?",
        optionA: '"Међулошко благо", "Пет лирских кругова", "Сеобе"',
        optionB: '"Љубав у Тоскани", "Сербиа", "Књига о Немачкој"',
        optionC: '"Међулошко благо", збирка приповедака "Из тамног вилајета","Пет лирских кругова"', 
        optionD: "ништа од наведеног",
        correctOption: "optionC"
    },

    {
        question: "Поред српске књижевности, Момчило Настасијевић је дипломирао један страни језик. Који?",
        optionA: "енглески",
        optionB: "руски",
        optionC: "француски",
        optionD: "немачки",
        correctOption: "optionC"
    },

    {
        question: "Која два језика у Српској краљевској четвртој гимназији је предавао Момчило Настасијевић?",
        optionA: "немачки и српски",
        optionB: "енглески и српски",
        optionC: "немачки и руски",
        optionD: "српски и француски",
        correctOption: "optionD"
    },

    {
        question: "Песник Момчило Настасијевић је имао три брата.",
        question: "Који од браће Настасијевић је био сликар?",
        optionA: "Светомир",
        optionB: "Славомир",
        optionC: "Живорад",
        optionD: "ништа од наведеног",
        correctOption: "optionC"
    },

    {
        question: 'Како се звала Гимназија "Свети Сава" у време када је професор био Момчило Настасијевић?',
        optionA: "Српска краљевска четврта гимназија (1910-1919)",
        optionB: "Државна четврта мушка гимназија (1945-1953)",
        optionC: "Четврта мушка гимназија (1919-1929)",
        optionD: "Трећа београдска гимназија (1956-1964)",
        correctOption: "optionC"
    },

    {
        question: "Предраг Милојевић је био легенда београдског...",
        optionA: "новинарства",
        optionB: "глумишта",
        optionC: "песништва",
        optionD: "шлагера",
        correctOption: "optionA"
    },

    {
        question: 'Предраг Милојевић је своје дело "Кажем ја себи" жанровски одредио као:',
        optionA: "мемоаре",
        optionB: "поему",
        optionC: "аутобиографију",
        optionD: "антибиографију",
        correctOption: "optionD"
    },

    {
        question: "Који од наведених наслова је назив антибиографије Предрага Милојевића?",
        optionA: '"О људима и ћудима"',
        optionB: '"Био сам присутан"',
        optionC: '"Кажем ја себи"',
        optionD: "ништа од наведеног",
        correctOption: "optionC"
    },

    {
        question: 'Како се звала Гимназија "Свети Сава" у време када је ову школу похађао Предраг Милојевић?',
        optionA: "Српска краљевска четврта гимназија (1910-1919)",
        optionB: "Четврта мушка гимназија (1919-1929)",
        optionC: "Мушка гимназија Трећег реона (1944-1945)",
        optionD: "Шеста београдска гимназија (1953-1956)",
        correctOption: "optionA"
    },

    {
        question: "Коју историјску личност је интервјуисао Предраг Милојевић?",
        optionA: "Адолфа Хитлера",
        optionB: "Јосифа Висарионовича Стаљина",
        optionC: "Џона Кенедија",
        optionD: "Шарл де Гола",
        correctOption: "optionA"
    },


    {
        question: "Сима Марковић је био познати:",
        optionA: "политичар и историчар.",
        optionB: "математичар и физичар",
        optionC: "математичар и политичар.",
        optionD: "ништа од наведеног",
        correctOption: "optionC"
    },

    {
        question: "Које од наведених дела је написао математичар и политичар Сима Марковић?",
        optionA: "Мито о Сизифу",
        optionB: "Руминације о предстојећој катастрофи",
        optionC: "Ловац на змајеве",
        optionD: "Из науке и филозофије",
        correctOption: "optionD"
    },

    {
        question: "Који од наведених наслова се односи на докторску дисертацију Симе Марковића из 1913. године?",
        optionA: "Таутологија",
        optionB: "Паралелопипед",
        optionC: "Општа Рикатијева једначина првог реда",
        optionD: "Тригонометрија",
        correctOption: "optionC"
    },

    {
        question: 'Како се звала Гимназија "Свети Сава" у време када је предавач био чувени математичар Сима Марковић?',
        optionA: "Српска краљевска четврта гимназија (1910-1919)",
        optionB: "Српска краљевска четврта гимназија (1910-1919)",
        optionC: "Државна четврта мушка гимназија (1929-1944)",
        optionD: 'Трећа гимназија "Владимир Иљич Лењин" (1970-1977)',
        correctOption: "optionA"
    },

    {
        question: "Који од наведених наслова се не односи на научне и преводилачке активности чувеног математичара и политичара Симе Марковића?",
        optionA: '„Ајнштајнова теорија релативитета“',
        optionB: '„Комунизам у Југославији“',
        optionC: '„Од пашњака до научењака“',
        optionD: '„О покрету за реформу математичке наставе“',
        correctOption: "optionC"
    },

    {
        question: "Са којом од наведених личности је током Првог светског рата Сима Марковић водио азил за ратну сирочад у Крагујевцу?",
        optionA: "са песником Момчилом Настасијевићем",
        optionB: "са математичарем Михаилом Петровићем Аласом",
        optionC: "са сликарком Надеждом Петровић",
        optionD: "са глумицом Жанком Стокић",
        correctOption: "optionD"
    },

    {
        question: "Ко је био Милоје Милојевић?",
        optionA: "композитор",
        optionB: "научник",
        optionC: "сликар",
        optionD: "писац",
        correctOption: "optionA"
    },

    {
        question: "Које Милојевићево дело представља његов искорак у експресионизам?",
        optionA: "Смрт мајке Југовића",
        optionB: "Ритмичке гримасе",
        optionC: "Косовска свита",
        optionD: "Гозба на ливади",
        correctOption: "optionB"
    },

    {
        question: "Коју од наведених композиција је компоновао Милоје Милојевић?",
        optionA: "Руковети",
        optionB: "Охридска легенда",
        optionC: "Гозба на ливади",
        optionD: "Хеј трубачу!",
        correctOption: "optionC"
    },

    {
        question: "У ком европском граду је докторирао и био професор Музичке академије композитор Милоје Милојевић?",
        optionA: "У Берлину",
        optionB: "У Будимпешти",
        optionC: "У Прагу",
        optionD: "У Паризу",
        correctOption: "optionC"
    },

    {
        question: 'Како се звала Гимназија "Свети Сава" у време када је предавач био композитор Милоје Милојевић?',
        optionA: 'Српска краљевска четврта гимназија (1910-1919)',
        optionB: 'Четврта мушка гимназија (1919-1929)',
        optionC: 'Државна четврта мушка гимназија (1929-1944)',
        optionD: 'Мушка гимназија Трећег реона (1944-1945)',
        correctOption: "optionA"
    },
    
    {
        question: 'Шта је по занимању био Марко Мурат?',
        optionA: 'писац',
        optionB: 'физичар',
        optionC: 'сликар',
        optionD: 'историчар',
        correctOption: "optionC"
    },
    
    {
        question: 'Ко је аутор слике „Долазак цара Душана у Дубровник“?',
        optionA: 'Паја Јовановић',
        optionB: 'Урош Предић',
        optionC: 'Крсто Хегедушић',
        optionD: 'Марко Мурат',
        correctOption: "optionD"
    },
    
    {
        question: 'Како се звала Гимназија "Свети Сава" у време када је професор цртања био Марко Мурат?',
        optionA: 'Српска краљевска четврта гимназија (1910-1919)',
        optionB: 'Четврта мушка гимназија (1919-1929)',
        optionC: 'Државна четврта мушка гимназија (1929-1944)',
        optionD: 'Мушка гимназија Трећег реона (1944-1945)',
        correctOption: "optionA"
    },
    
    {
        question: 'Ког српског владара је портретисао сликар и професор цртања и лепог писања Марко Мурат?',
        optionA: 'Михаила Обреновића',
        optionB: 'Милана Обреновића',
        optionC: 'Александра Обреновића',
        optionD: 'Петра I Караорђевића',
        correctOption: "optionC"
    },
    
    {
        question: 'Ког краљевића је подучавао цртању професор Марко Мурат?',
        optionA: 'Александра Обреновића',
        optionB: 'Александра I Карађорђевића',
        optionC: 'кнеза Павла Карађорђевића',
        optionD: 'Петра II Карађорђевића',
        correctOption: "optionB"
    },
    
    {
        question: 'Који предмет је у Четвртој мушкој гимназији предавао Васа Чубриловић?',
        optionA: 'Српски језик',
        optionB: 'Историју',
        optionC: 'Веронауку',
        optionD: 'Земљопис',
        correctOption: "optionB"
    },
    
    {
        question: 'На ком факултету је предавао Васа Чубриловић?',
        optionA: 'Филозофском',
        optionB: 'Правном',
        optionC: 'Филолошком',
        optionD: 'Економском',
        correctOption: "optionA"
    },
    
    {
        question: 'Васа Чубриловић је био члан које организације?',
        optionA: '"Црна рука"',
        optionB: '"Јавор"',
        optionC: '"Млада Босна"',
        optionD: 'Ђачко друштво "Скерлић"',
        correctOption: "optionC"
    },
    
    {
        question: 'У ком историјском догађају је као гимназијалац учествовао Васа Чубриловић?',
        optionA: 'Мајски преврат',
        optionB: 'Срајевски атентат',
        optionC: 'Анексија Босне',
        optionD: 'Кумановска битка',
        correctOption: "optionB"
    },
    
    {
        question: 'Шта је предавао Коста Хакман у Четвртој мушкој гимназији??',
        optionA: 'немачки језик',
        optionB: 'земљопис',
        optionC: 'јестаственицу',
        optionD: 'цртање и лепо писањег',
        correctOption: "optionD"
    },
    
    {
        question: 'Ко је за Милоша Црњанског рекао:“Сви смо ми талентовани, само је Црњански богом дан"?',
        optionA: 'Сима Пандуровић',
        optionB: 'Момчило Настасијевић',
        optionC: 'Иво Андрић',
        optionD: 'Меша Селимовић',
        correctOption: "optionC"
    },
    
    {
        question: 'Како се звала Гимназија "Свети Сава" у време када је предавао Милош Црњански?',
        optionA: 'Српска краљевска четврта гимназија (1910-1919)',
        optionB: 'Четврта мушка гимназија (1919-1929)',
        optionC: 'Државна четврта мушка гимназија (1929-1944)',
        optionD: 'Мушка гимназија Трећег реона (1944-1945)',
        correctOption: "optionB"
    },
    
    {
        question: 'Које предмете је предавао Милош Црњански у Четвртој мушкој гимназији између 1922. и 1932. године?',
        optionA: 'српски (српско-хрватски-словеначки) језик, француски језик, историју и земљопис',
        optionB: 'српски (српско-хрватски-словеначки) језик, немачки језик, филозофију и земљопис',
        optionC: 'српски (српско-хрватски-словеначки) језик, француски језик, земљопис и гимнастику',
        optionD: 'српски (српско-хрватски-словеначки) језик и немачки језик',
        correctOption: "optionA"
    },
    
    {
        question: 'У ком временском периоду је Милош Црњански предавао у Четвртој мушкој гимназији?',
        optionA: 'од 1920. до 1935. године',
        optionB: 'од 1925. до 1932. године',
        optionC: 'од 1922. до 1932. године',
        optionD: 'Од 1920. до 1932. године',
        correctOption: "optionC"
    },
    
    {
        question: 'У ком месту је рођен Милош Црњански',
        optionA: 'у Београду',
        optionB: 'у Чонграду',
        optionC: 'у Темишвару',
        optionD: 'у Букурешту',
        correctOption: "optionB"
    },
    
    {
        question: 'Која од наведених књижевних дела је написао Милош Црњански?',
        optionA: '„Сеобе” и „Љубав у Тоскани”',
        optionB: '„Љубав у Тоскани” и „Живот и прикљученија”',
        optionC: '„Живот и прикљученија” и „Проклета авлија”',
        optionD: '„Проклета авлија” и „Сеобе”',
        correctOption: "optionA"
    },
    
    {
        question: '„Он је толико дрзак и безобразан да је чак почео и да учи!” био је коментар једног професора у Четвртој мушкој гимназији на рад и понашање свог ученика. О ком професору, чувеном књижевнику, је реч?',
        optionA: 'Сими Пандуровићу',
        optionB: 'Момчилу Настасијевићу',
        optionC: 'Милошу Црњанском',
        optionD: 'Душану Матићу',
        correctOption: "optionC"
    }

]

let currentQuestion = 0;
const progressBar = document.querySelector('.progress');

function updateProgressBar()
{
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

let shuffledQuestions = [] 

let brojPitanja = questions.length;
let brojPitanja1 = questions.length;
const idPitanjaDisplay = document.getElementById('broj-pitanja');
const totalQuestionsDisplay = document.getElementById('brojPitanja');
const brojPoenaPitanja = document.getElementById('brojPitanja1');
totalQuestionsDisplay.innerText = questions.length;
brojPoenaPitanja.innerText = questions.length;

function redPitanja() 
{
    trenutnoPitanjeIndex = 0;
    shuffledQuestions = questions;
}

let idPitanja = 1
let brojPoena = 0  
let pogresnaPitanja = 0 
let id = 0 

function SledecePitanje(index) 
{
    redPitanja()
    currentQuestion = index;
    updateProgressBar();
    const trenutnoPitanje = shuffledQuestions[index]
    document.getElementById("broj-pitanja").innerHTML = idPitanja
    document.getElementById("broj-poena").innerHTML = brojPoena
    document.getElementById("prikazi-pitanje").innerHTML = trenutnoPitanje.question;
    document.getElementById("opcija-jedan").innerHTML = trenutnoPitanje.optionA;
    document.getElementById("opcija-dva").innerHTML = trenutnoPitanje.optionB;
    document.getElementById("opcija-tri").innerHTML = trenutnoPitanje.optionC;
    document.getElementById("opcija-cetiri").innerHTML = trenutnoPitanje.optionD;

}


function proveriOdgovor() 
{
    const trenutnoPitanje = shuffledQuestions[id] 
    const trenutnoPitanjeAnswer = trenutnoPitanje.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => 
    {
        if (option.value === trenutnoPitanjeAnswer) 
        {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) 
    {
        document.getElementById('tabelaOpcija').style.display = "flex"
    }

    options.forEach((option) => 
    {
        if (option.checked === true && option.value === trenutnoPitanjeAnswer) 
        {
            document.getElementById(correctOption).style.backgroundColor = "green"
            brojPoena++ 
            id++ 
            setTimeout(() => 
            {
                idPitanja++
            }, 1000)
        }

        else if (option.checked && option.value !== trenutnoPitanjeAnswer) 
        {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            pogresnaPitanja++ 
            id++
            setTimeout(() => {
                idPitanja++
            }, 1000)
        }
    })
    currentQuestion++;
    updateProgressBar();
}

function sledecePitanje() 
{
    proveriOdgovor() 
    resetOpcija()
    setTimeout(() => 
    {
        if (id < brojPitanja) 
        {
            SledecePitanje(id)
        }
        else 
        {
            krajIgre()
        }
        resetpozadineOpcija()

    }, 1000);
}

function resetpozadineOpcija() 
{
    const options = document.getElementsByName("option");
    options.forEach((option) => 
    {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function resetOpcija()
 {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) 
    {
        options[i].checked = false;
    }
}

function krajIgre() 
{
    let remark = null
    let remarkColor = null

    if (brojPoena < brojPitanja*0.5) 
    {
        remark = "Nazalost znas veoma malo o Gimnaziji 'Sveti Sava'"
        remarkColor = "red"
    }
    else if (brojPoena >= brojPitanja*0.5 && brojPoena < brojPitanja*0.8) 
    {
        remark = "Znas prosecno o Gimnaziji 'Sveti Sava' "
        remarkColor = "orange"
    }
    else if (brojPoena >= brojPitanja*0.8) 
    {
        remark = "svaka cast imas odlicno znaje o Gimnaziji 'Sveti Sava'"
        remarkColor = "green"
    }
    const playerGrade = (brojPoena / brojPitanja) * 100

    document.getElementById('posveta').innerHTML = remark
    document.getElementById('posveta').style.color = remarkColor
    document.getElementById('brojProcenata').innerHTML = playerGrade
    document.getElementById('brojPogresnihOdgovara').innerHTML = pogresnaPitanja
    document.getElementById('brojTacnihOdgovara').innerHTML = brojPoena
    document.getElementById('tabela').style.display = "flex"

}

function zatvoriTabeluRezultata() 
{
    idPitanja = 1
    brojPoena = 0
    pogresnaPitanja = 0
    id = 0
    shuffledQuestions = []
    SledecePitanje(id)
    document.getElementById('tabela').style.display = "none"
}

function closeOptionModal() 
{
    document.getElementById('tabelaOpcija').style.display = "none"
}
const optionContainer = document.querySelector('.option-container');
const optionHeight = 35; 
const optionMargin = 5; 
const numOptions = 5;  

const containerHeight = (optionHeight + optionMargin) * numOptions;

optionContainer.style.height = containerHeight + 'px';
