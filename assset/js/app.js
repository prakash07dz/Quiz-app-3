const questions = [
  {
    question: "ભારતમાં સૌથી મોટું રાજ્ય કયું છે?",
    answers: [
      { text: "મધ્ય પ્રદેશ", correct: false },
      { text: "મહારાષ્ટ્ર", correct: false },
      { text: "રાજસ્થાન", correct: true },
      { text: "ઉત્તર પ્રદેશ", correct: false },
    ],
  },
  {
    question: "ભારતમાં કયું રાજ્ય ‘ચાના બગીચાઓ’ માટે પ્રખ્યાત છે?",
    answers: [
      { text: "કેરળ", correct: false },
      { text: "આસામ", correct: true },
      { text: "મણિપુર", correct: false },
      { text: "સિક્કિમ", correct: false },
    ],
  },
  {
    question: "કચ્છનું રણ કયા રાજ્યમાં આવેલું છે?",
    answers: [
      { text: "રાજસ્થાન", correct: false },
      { text: "ગુજરાત", correct: true },
      { text: "મહારાષ્ટ્ર", correct: false },
      { text: "મધ્ય પ્રદેશ", correct: false },
    ],
  },
  {
    question: "દુનિયાની સૌથી ઊંચી શિખર કયું છે?",
    answers: [
      { text: "કિન્સટન", correct: false },
      { text: "એવરેસ્ટ", correct: true },
      { text: "ફૂજી", correct: false },
      { text: "અલબ્રુસ", correct: false },
    ],
  },
  {
    question: "ભારતની પાટનગર કયું છે?",
    answers: [
      { text: "મુંબઈ", correct: false },
      { text: "દિલ્હી", correct: true },
      { text: "કોલકાતા", correct: false },
      { text: "ચેન્નાઈ", correct: false },
    ],
  },
  {
    question: "સુદર્શન સરોવર કયાં આવેલું છે?",
    answers: [
      { text: "સોમનાથ", correct: false },
      { text: "જુનાગઢ", correct: true },
      { text: "દ્વારકા", correct: false },
      { text: "ભવનાથ", correct: false },
    ],
  },
  {
    question: "ભરૂચના પાટોત્સવ કયા દેવ સાથે જોડાયેલ છે?",
    answers: [
      { text: "શિવજી", correct: false },
      { text: "હનુમાનજી", correct: false },
      { text: "સૂર્યદેવ", correct: false },
      { text: "ભરૂચ દેવ", correct: true },
    ],
  },
  {
    question: "સાબરમતી આશ્રમ કયાં આવેલું છે?",
    answers: [
      { text: "વડોદરા", correct: false },
      { text: "અમદાવાદ", correct: true },
      { text: "સુરત", correct: false },
      { text: "રાજકોટ", correct: false },
    ],
  },
  {
    question: "ક્યાંનો હવામાન 'તાપમાન’ માટે પ્રખ્યાત છે?",
    answers: [
      { text: "લદાખ", correct: true },
      { text: "ભુવનેશ્વર", correct: false },
      { text: "બંગલુરુ", correct: false },
      { text: "હૈદરાબાદ", correct: false },
    ],
  },
  {
    question: "કચ્છનું રણ કયાં આવેલું છે?",
    answers: [
      { text: "રાજસ્થાન", correct: false },
      { text: "ગુજરાત", correct: true },
      { text: "મહારાષ્ટ્ર", correct: false },
      { text: "મધ્ય પ્રદેશ", correct: false },
    ],
  },
  {
    question: "નર્મદા નદી કયા સમુદ્રમાં મળે છે?",
    answers: [
      { text: "અરબી સમુદ્ર", correct: true },
      { text: "બંગાળની ખાડી", correct: false },
      { text: "ભારત महासાગર", correct: false },
      { text: "કચ્છનો કાંઠો", correct: false },
    ],
  },
  {
    question: "ગિરમાં શું માટે પ્રખ્યાત છે?",
    answers: [
      { text: "ટાઈગર", correct: false },
      { text: "સિંહ", correct: true },
      { text: "હાથી", correct: false },
      { text: "ચીતલ", correct: false },
    ],
  },
  {
    question: "ક્યા રાજ્યને 'ભારતનું બગ' કહેવામાં આવે છે?",
    answers: [
      { text: "ગુજરાત", correct: false },
      { text: "પંજાબ", correct: true },
      { text: "કેરળ", correct: false },
      { text: "તમિલનાડુ", correct: false },
    ],
  },
  {
    question: "ભારતમાં કયા રાજ્યમાં સૌથી વધારે ગીરસુંહ છે?",
    answers: [
      { text: "મહારાષ્ટ્ર", correct: false },
      { text: "મધ્ય પ્રદેશ", correct: false },
      { text: "કર્ણાટક", correct: false },
      { text: "ગુજરાત", correct: true },
    ],
  },
  {
    question: "પાલીતાણાના જૈન મંદિરો ક્યા પર્વત પર આવેલ છે?",
    answers: [
      { text: "શત્રુંજય પર્વત", correct: true },
      { text: "ગિરનાર પર્વત", correct: false },
      { text: "અરાવલી પર્વત", correct: false },
      { text: "વિંધ્ય પર્વત", correct: false },
    ],
  },
  {
    question: "મહાબળેશ્વર ક્યા રાજ્યમાં આવેલ છે?",
    answers: [
      { text: "મહારાષ્ટ્ર", correct: true },
      { text: "કર્ણાટક", correct: false },
      { text: "કેરળ", correct: false },
      { text: "તમિલનાડુ", correct: false },
    ],
  },
  {
    question: "ભારતમાં કયું શહેર 'પિન્ક સિટી' તરીકે ઓળખાય છે?",
    answers: [
      { text: "ઉદયપુર", correct: false },
      { text: "જયપુર", correct: true },
      { text: "જોધપુર", correct: false },
      { text: "બિકાનેર", correct: false },
    ],
  },
  {
    question: "સાવરકુંડલા ક્યા માટે પ્રખ્યાત છે?",
    answers: [
      { text: "શેરડી", correct: false },
      { text: "બબૂલ વણ", correct: true },
      { text: "માછલી પકડી", correct: false },
      { text: "ફળો", correct: false },
    ],
  },
  {
    question: "ચાંપાનેર-પાવાગઢ ક્યા જિલ્લામાં આવેલ છે?",
    answers: [
      { text: "ગોધરા", correct: false },
      { text: "વડોદરા", correct: true },
      { text: "ભરૂચ", correct: false },
      { text: "આણંદ", correct: false },
    ],
  },
  {
    question: "ગુજરાતની પાટનગર કયું છે?",
    answers: [
      { text: "અમદાવાદ", correct: false },
      { text: "ગાંધીનગર", correct: true },
      { text: "સુરત", correct: false },
      { text: "વડોદરા", correct: false },
    ],
  },
  {
    question: "ભારતનું કયું શહેર 'તાજ મહેલ' માટે પ્રખ્યાત છે?",
    answers: [
      { text: "દિલ્હી", correct: false },
      { text: "આગ્રા", correct: true },
      { text: "જૈપુર", correct: false },
      { text: "મુંબઈ", correct: false },
    ],
  },
  {
    question: "કયા રાજ્યમાં ભારતનો સૌથી ઊંચો પર્વત શિખર 'કાંચેન્જંગા' આવેલ છે?",
    answers: [
      { text: "સિક્કિમ", correct: true },
      { text: "ઉત્તરાખંડ", correct: false },
      { text: "હિમાચલ પ્રદેશ", correct: false },
      { text: "અરુણાચલ પ્રદેશ", correct: false },
    ],
  },
  {
    question: "પંચમહાલ જિલ્લાના મુખ્ય મથકનું નામ શું છે?",
    answers: [
      { text: "દાહોદ", correct: false },
      { text: "ગોધરા", correct: true },
      { text: "હલોલ", correct: false },
      { text: "કલોલ", correct: false },
    ],
  },
  {
    question: "સોમનાથનું મંદિર કયા દેવને સમર્પિત છે?",
    answers: [
      { text: "વિષ્ણુ", correct: false },
      { text: "શિવજી", correct: true },
      { text: "હનુમાનજી", correct: false },
      { text: "રામજી", correct: false },
    ],
  },
  {
    question: "સાબરમતી નદી કયા રાજ્યમાં વહે છે?",
    answers: [
      { text: "મહારાષ્ટ્ર", correct: false },
      { text: "ગુજરાત", correct: true },
      { text: "મધ્ય પ્રદેશ", correct: false },
      { text: "રાજસ્થાન", correct: false },
    ],
  },
  {
    question: "પાવાગઢનો કિલો કયા જિન્નમાં આવેલ છે?",
    answers: [
      { text: "ગોધરા", correct: true },
      { text: "વડોદરા", correct: false },
      { text: "ભાવનગર", correct: false },
      { text: "સુરત", correct: false },
    ],
  },
  {
    question: "બે-ધીયા ગરમપાણીના ઝરણા કયા જિલ્લામાં આવેલ છે?",
    answers: [
      { text: "નવસારી", correct: false },
      { text: "વલસાડ", correct: true },
      { text: "સુરત", correct: false },
      { text: "દાહોદ", correct: false },
    ],
  },
  {
    question: "ભારતનું કયું રાજ્ય સૌથી વધારે ફળો ઉત્પાદન કરે છે?",
    answers: [
      { text: "મહારાષ્ટ્ર", correct: true },
      { text: "કર્ણાટક", correct: false },
      { text: "તમિલનાડુ", correct: false },
      { text: "આંધ્ર પ્રદેશ", correct: false },
    ],
  },
  {
    question: "લોથલ પ્રાચીન ભારતીય કયા નગરનો અવશેષ છે?",
    answers: [
      { text: "મગધ", correct: false },
      { text: "હરપ્પા", correct: false },
      { text: "મોહેન્જો દરો", correct: false },
      { text: "સિંધુ ઘાટીના", correct: true },
    ],
  },
  {
    question: "ધંધુકા ક્યા માટે પ્રખ્યાત છે?",
    answers: [
      { text: "મીઠું", correct: false },
      { text: "સફેદ ખજુર", correct: true },
      { text: "મકાઈ", correct: false },
      { text: "કપાસ", correct: false },
    ],
  },
  {
    question: "ભારતમાં કયું દરિયા કિનારે સૌથી વધુ ખનીજ તેલ મીટો છે?",
    answers: [
      { text: "કચ્છ", correct: false },
      { text: "બંગાળનો કિનારો", correct: false },
      { text: "કેરળ", correct: false },
      { text: "મુંબઈ હાઈ", correct: true },
    ],
  },
  {
    question: "નર્મદા નદી કયાં બેસે છે?",
    answers: [
      { text: "સતપુડા", correct: true },
      { text: "વિંધ્ય", correct: false },
      { text: "સહ્યાદ્રી", correct: false },
      { text: "અરાવલી", correct: false },
    ],
  },
  {
    question: "વિપ્લવ ઔદ્યોગિક વિસ્તાર કયાં આવેલ છે?",
    answers: [
      { text: "અંકલેશ્વર", correct: false },
      { text: "સુરત", correct: true },
      { text: "જામનગર", correct: false },
      { text: "ભુજ", correct: false },
    ],
  },
  {
    question: "ચાંપાનેર ક્યા પર્વત પર આવેલ છે?",
    answers: [
      { text: "શત્રુંજય", correct: false },
      { text: "પાવાગઢ", correct: true },
      { text: "ગિરનાર", correct: false },
      { text: "અરાવલી", correct: false },
    ],
  },
  {
    question: "દાંતીવાડા ડેમ કયા જિલ્લામાં આવેલ છે?",
    answers: [
      { text: "બનાસકાંઠા", correct: true },
      { text: "સાબરકાંઠા", correct: false },
      { text: "પાટણ", correct: false },
      { text: "મહેસાણા", correct: false },
    ],
  },
  {
    question: "કચ્છના કયા ગામમાં હડપ્પાના અવશેષો મળ્યા છે?",
    answers: [
      { text: "લોથલ", correct: false },
      { text: "ધોળાવીરા", correct: true },
      { text: "મોહેન્જો દરો", correct: false },
      { text: "હરપ્પા", correct: false },
    ],
  },
  {
    question: "કચ્છના રણમાં કયું પશુ સૌથી વધુ છે?",
    answers: [
      { text: "સિંહ", correct: false },
      { text: "વન્ય બફેલો", correct: false },
      { text: "જંગલી ખચર", correct: true },
      { text: "વર્ખડ", correct: false },
    ],
  },
  {
    question: "ભારતનું કયું રાજ્ય કૌશલ્ય શિક્લન માટે પ્રખ્યાત છે?",
    answers: [
      { text: "ઉત્તરાખંડ", correct: false },
      { text: "મહારાષ્ટ્ર", correct: true },
      { text: "કર્ણાટક", correct: false },
      { text: "મધ્ય પ્રદેશ", correct: false },
    ],
  },
  {
    question: "ભારતનું કયું રાજ્ય સૌથી વધુ તાંબાનું ઉત્પાદન કરે છે?",
    answers: [
      { text: "બિહાર", correct: false },
      { text: "ઉત્તર પ્રદેશ", correct: false },
      { text: "ઝારખંડ", correct: true },
      { text: "મધ્ય પ્રદેશ", correct: false },
    ],
  },
  {
    question: "ઉત્તર ગુજરાતમાં કયું નગર શાકભાજી માટે પ્રખ્યાત છે?",
    answers: [
      { text: "પાટણ", correct: false },
      { text: "ઉંઝા", correct: true },
      { text: "મહેસાણા", correct: false },
      { text: "સિદ્ધપુર", correct: false },
    ],
  },
  {
    question: "અંબાજી મંદિર ક્યા જિલ્લામાં આવેલ છે?",
    answers: [
      { text: "સાબરકાંઠા", correct: false },
      { text: "બનાસકાંઠા", correct: true },
      { text: "મહેસાણા", correct: false },
      { text: "પાટણ", correct: false },
    ],
  },
  {
    question: "જામનગરનું નાગેશ્વર મંદિર ક્યા માટે પ્રખ્યાત છે?",
    answers: [
      { text: "શિવલિંગ", correct: true },
      { text: "વિષ્ણુ મંદિર", correct: false },
      { text: "હનુમાન મંદિર", correct: false },
      { text: "જૈન મંદિર", correct: false },
    ],
  },
  {
    question: "આસામમાં કયું નદી વહે છે?",
    answers: [
      { text: "ગંગા", correct: false },
      { text: "બ્રહ્મપુત્ર", correct: true },
      { text: "યમુના", correct: false },
      { text: "નર્મદા", correct: false },
    ],
  },
  {
    question: "સુરત કયા માટે પ્રખ્યાત છે?",
    answers: [
      { text: "ચંદ્ર", correct: false },
      { text: "હીરા", correct: true },
      { text: "મીઠું", correct: false },
      { text: "સિલ્ક", correct: false },
    ],
  },
  {
    question: "સાતપુરા રેન્જ કયા રાજ્યમાં છે?",
    answers: [
      { text: "ગુજરાત", correct: false },
      { text: "મધ્ય પ્રદેશ", correct: true },
      { text: "મહારાષ્ટ્ર", correct: false },
      { text: "રાજસ્થાન", correct: false },
    ],
  },
  {
    question: "નર્મદા નદીનો કયો ડેમ સૌથી પ્રખ્યાત છે?",
    answers: [
      { text: "તાપી ડેમ", correct: false },
      { text: "સરદાર સરોવર", correct: true },
      { text: "ઉકાઇ ડેમ", correct: false },
      { text: "જલારામ ડેમ", correct: false },
    ],
  },
  {
    question: "સામા સમાજના ગ્રંથ ક્યા લેખકે લખ્યા છે?",
    answers: [
      { text: "નાર્મદ", correct: false },
      { text: "કનૈયાલાલ", correct: false },
      { text: "દયારામ", correct: false },
      { text: "સામા", correct: true },
    ],
  },
  {
    question: "પોરબંદરમાં કયા મહાન વ્યક્તિનો જન્મ થયો છે?",
    answers: [
      { text: "ગાંધીજી", correct: true },
      { text: "સردار પટેલ", correct: false },
      { text: "જવાહરલાલ નેહરુ", correct: false },
      { text: "સુભાષ ચંદ્ર બોઝ", correct: false },
    ],
  },
  {
    question: "સુરેન્દ્રનગર કયા માટે પ્રખ્યાત છે?",
    answers: [
      { text: "મીઠું", correct: true },
      { text: "હીરા", correct: false },
      { text: "ચંદ્ર", correct: false },
      { text: "સિલ્ક", correct: false },
    ],
  },
  {
    question: "સુરતનું જૂનું નામ શું હતું?",
    answers: [
      { text: "સુર્યાપુર", correct: true },
      { text: "શ્રીનગર", correct: false },
      { text: "કચ્છ", correct: false },
      { text: "અમૃતપુર", correct: false },
    ],
  },
  {
    question: "કચ્છમાં મુખ્ય ગેરકાયદે વેપાર કયો છે?",
    answers: [
      { text: "મીઠું", correct: false },
      { text: "હીરા", correct: false },
      { text: "ચંદ્ર", correct: false },
      { text: "મણસૂરી", correct: true },
    ],
  },
  {
    question: "મહેસાણામાં કયું મંદિરો સૌથી વધુ છે?",
    answers: [
      { text: "શિવ મંદિર", correct: false },
      { text: "જૈન મંદિર", correct: true },
      { text: "હનુમાન મંદિર", correct: false },
      { text: "કૃષ્ણ મંદિર", correct: false },
    ],
  },
  {
    question: "ભારતના કયા રાજ્યોમાં પાટનગરના બે નામ છે?",
    answers: [
      { text: "મહારાષ્ટ્ર અને ગુજરાત", correct: false },
      { text: "પંજાબ અને હરિયાણા", correct: true },
      { text: "ઉત્તર પ્રદેશ અને ઉત્તરાખંડ", correct: false },
      { text: "બિહાર અને ઝારખંડ", correct: false },
    ],
  },
  {
    question: "ભરૂચમાં કયું નદી વહે છે?",
    answers: [
      { text: "નર્મદા", correct: true },
      { text: "મહાનંદી", correct: false },
      { text: "યમુના", correct: false },
      { text: "ગંગા", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Start Again!";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
