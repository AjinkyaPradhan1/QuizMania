import './App.css';
import './quizPages.css'
import React, { useState } from 'react';


function Cartoons() {
  const questions = [
		{
			questionText: 'What Popeye the sailor man famously eats to increase his strength?',
			answerOptions: [
				{ answerText: 'Laddoo', isCorrect: false },
				{ answerText: 'Orange Juice', isCorrect: false },
				{ answerText: 'Spinach', isCorrect: true },
				{ answerText: 'Carrot', isCorrect: false },
			],
		},

    	{
			questionText: 'What is the name of the mother of Chhutki?',
			answerOptions: [
				{ answerText: 'Tun Tun Mausi', isCorrect: true },
				{ answerText: 'Jhun Jhun Mausi', isCorrect: false },
				{ answerText: 'Dhun Dhun Mausi', isCorrect: false },
				{ answerText: 'Mun Mun Mausi', isCorrect: false },
			],
		},

		{
			questionText: 'What is the name of Ben in the Cartoon Series Ben 10?',
			answerOptions: [
				{ answerText: 'Ben Ten', isCorrect: false },
				{ answerText: 'Ben Tennyson', isCorrect: true },
				{ answerText: 'Ben Tenny', isCorrect: false },
				{ answerText: 'Ben Tenn', isCorrect: false },
			],
		},

		{
			questionText: 'Which of the characters likes to sing but has a very bad voice in Doraemon Cartoon Series?',
			answerOptions: [
				{ answerText: 'Suneo', isCorrect: false },
				{ answerText: 'Nobita', isCorrect: false },
				{ answerText: 'Doraemon', isCorrect: false },
				{ answerText: 'Jian', isCorrect: true },
			],
		},

		{
			questionText: 'Who among the following is a monkey in Cartoon Series Chota Bheem?',
			answerOptions: [
				{ answerText: 'Kalia', isCorrect: false },
				{ answerText: 'Raju', isCorrect: false },
				{ answerText: 'Bholu', isCorrect: false },
				{ answerText: 'Jaggu', isCorrect: true },
			],
		},

		{
			questionText: 'How many cockroaches are there in Cartoon Series Oggy and Cockroaches ?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '4', isCorrect: false },
			],
		},

		{
			questionText: 'Which pokemon is the best friend of Ash?',
			answerOptions: [
				{ answerText: 'Charizard', isCorrect: false },
				{ answerText: 'Pikachu', isCorrect: true },
				{ answerText: 'Squirtle', isCorrect: false },
				{ answerText: 'Pidgeot', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the pet of Mickey Mouse in Cartoon series Mickey Mouse?',
			answerOptions: [
				{ answerText: 'Donald Duck', isCorrect: false },
				{ answerText: 'Minnie Mouse', isCorrect: false },
				{ answerText: 'Goofey', isCorrect: false },
				{ answerText: 'Pluto', isCorrect: true },
			],
		},
		{
			questionText: 'What does Jerry love to eat in Cartoon Series Tom and Jerry?',
			answerOptions: [
				{ answerText: 'Cheese', isCorrect: true },
				{ answerText: 'Honey', isCorrect: false },
				{ answerText: 'Meat', isCorrect: false },
				{ answerText: 'Milk', isCorrect: false },
			],
		},
		{
			questionText: 'What colour is SpongeBob in Cartoon Series SpongeBob SquarePants?',
			answerOptions: [
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: true },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},
  ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  return (
    <div className="Main">
      <div className="header">
	  <div className="headerText">QUIZZIT : CARTOONS</div>
	  </div>

      <div className="mainCard">

			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) :
				(<>
					<div className="question-section">
					<div className="question-number">
					<span>Question {currentQuestion + 1}</span>/{questions.length}
					</div>
					<div className="question-text">
						<div className="text">
							{questions[currentQuestion].questionText}
						</div>
					</div>
					</div>
					<div className="answer-section">

						<div className="answers">
							{questions[currentQuestion].answerOptions.map((answerOption) => (
											<button class="answerButton" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
										))} 
						</div>
					</div>
				</>)
			}

      </div> 

      <div className="footer">
        <div className="footerContent">
			All Rights Reserved &copy;2023-&infin; Ajinkya Pradhan
		</div>  
      </div>     
    </div>
  );
}

export default Cartoons;
