/**
 * KhelBharat - Interactive Sports Trivia & Knowledge Quiz
 */

const quizData = [
  {
    question: "What is the official length of a cricket pitch between the wickets?",
    options: ["20 Yards", "22 Yards (20.12 m)", "24 Yards", "18 Yards"],
    correctIndex: 1,
    explanation: "A standard cricket pitch measures exactly 22 yards (20.12 meters or 66 feet) between the stumps at either end."
  },
  {
    question: "In professional Kabaddi (PKL), how long can a single raid last at maximum?",
    options: ["20 Seconds", "30 Seconds", "45 Seconds", "60 Seconds"],
    correctIndex: 1,
    explanation: "A raider has a maximum of 30 seconds to enter the opposition court, cross the baulk line, touch defenders, and return safely."
  },
  {
    question: "Which Indian city is recognized as the birthplace of modern badminton (originally named after this city)?",
    options: ["Pune (Poona)", "Calcutta (Kolkata)", "Madras (Chennai)", "Bombay (Mumbai)"],
    correctIndex: 0,
    explanation: "Modern badminton was formulated in Pune during the British Raj in the 1870s and was originally known as 'Poona'."
  },
  {
    question: "In Field Hockey, where must an attacking player be to score a valid legal goal?",
    options: ["Anywhere in the attacking half", "Inside the Striking Circle ('D')", "Within 5 meters of the goal line", "Beyond the 23-meter line"],
    correctIndex: 1,
    explanation: "A goal can only be scored if the ball is touched by an attacker's stick inside the opposing team's striking circle ('D' area)."
  },
  {
    question: "Which Indian footballer ranks 4th in all-time international goalscoring history with 94 goals?",
    options: ["Bhaichung Bhutia", "Sunil Chhetri", "I.M. Vijayan", "Subrata Paul"],
    correctIndex: 1,
    explanation: "Sunil Chhetri scored 94 international goals for India, placing him among the highest international goalscorers alongside Cristiano Ronaldo and Lionel Messi."
  },
  {
    question: "What was the ancient Indian predecessor of modern Chess called in the 6th century?",
    options: ["Pachisi", "Chaturanga", "Malla-yuddha", "Rathera"],
    correctIndex: 1,
    explanation: "Chess originated in 6th-century Gupta Empire India as 'Chaturanga', representing the four divisions of the ancient military: infantry, cavalry, elephants, and chariots."
  },
  {
    question: "In traditional Kho-Kho, how many chasers sit in the central squares at any given time?",
    options: ["7 chasers", "8 chasers", "9 chasers", "11 chasers"],
    correctIndex: 1,
    explanation: "In Kho-Kho, 8 chasers sit in the cross-lane squares facing alternate directions, while the 9th player is the active chaser."
  },
  {
    question: "Who was Independent India's first-ever individual Olympic medallist (Helsinki 1952)?",
    options: ["Milkha Singh", "K.D. Jadhav (Wrestling)", "Major Dhyan Chand", "Leander Paes"],
    correctIndex: 1,
    explanation: "Khashaba Dadasaheb Jadhav won individual Bronze in freestyle wrestling at the 1952 Helsinki Olympics, becoming independent India's first individual Olympic medallist."
  },
  {
    question: "What is the official height of a standard tournament Table Tennis table above the floor?",
    options: ["65 cm", "70 cm", "76 cm (30 inches)", "82 cm"],
    correctIndex: 2,
    explanation: "According to ITTF regulations, the upper surface of the table tennis table must be 76 cm (30 inches or 2.5 ft) above the floor."
  },
  {
    question: "At which Olympics did Neeraj Chopra win independent India's first-ever Track and Field Gold medal?",
    options: ["Rio 2016", "Tokyo 2020", "Paris 2024", "London 2012"],
    correctIndex: 1,
    explanation: "Neeraj Chopra threw 87.58 meters at the Tokyo 2020 Olympics (held in 2021) to capture India's first Olympic track & field gold medal in history."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = quizData;
}
