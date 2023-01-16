import './App.css';
import './quizPages.css';
import React, { useState } from 'react';

function Food() {

  const questions = [
		{
			questionText: 'Where is the Famous Ramoji Film City is situated?',
			answerOptions: [
				{ answerText: 'Chennai', isCorrect: false },
				{ answerText: 'Kochi', isCorrect: false },
				{ answerText: 'Hyderabad', isCorrect: true },
				{ answerText: 'Bengaluru', isCorrect: false },
			],
		},

    	{
			questionText: 'Name the largest freshwater lake in India?',
			answerOptions: [
				{ answerText: 'Dal Lake ', isCorrect: false },
				{ answerText: 'Wular lake ', isCorrect: true },
				{ answerText: 'Powai lake ', isCorrect: false },
				{ answerText: 'Chilka lake', isCorrect: false },
			],
		},

		{
			questionText: 'Sun Temple is situated at?',
			answerOptions: [
				{ answerText: 'Konark', isCorrect: true },
				{ answerText: 'Bangalore', isCorrect: false },
				{ answerText: 'Haridwar', isCorrect: false },
				{ answerText: 'Kerala', isCorrect: false },
			],
		},

		{
			questionText: 'Badrinath is situated on the bank of river?',
			answerOptions: [
				{ answerText: 'Ganga', isCorrect: false },
				{ answerText: 'Yamuna', isCorrect: false },
				{ answerText: 'Alaknanda', isCorrect: true },
				{ answerText: 'Saraswathi', isCorrect: false },
			],
		},

		{
			questionText: 'Golden Temple is situated in?',
			answerOptions: [
				{ answerText: 'New Delhi', isCorrect: false },
				{ answerText: 'Agra', isCorrect: false },
				{ answerText: 'Amritsar', isCorrect: true },
				{ answerText: 'Mumbai', isCorrect: false },
			],
		},

		{
			questionText: 'Which city is known as Electronic City of India?',
			answerOptions: [
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'Hyderabad', isCorrect: false },
				{ answerText: 'Gurgaon', isCorrect: false },
				{ answerText: 'Bengaluru', isCorrect: true },
			],
		},

		{
			questionText: 'Bijapur is known for its?',
			answerOptions: [
				{ answerText: 'severe drought condition', isCorrect: false },
				{ answerText: 'Gol Gumbaz', isCorrect: true },
				{ answerText: 'Heavy rainfall', isCorrect: false },
				{ answerText: 'Statue of Gomateswara', isCorrect: false },
			],
		},
		{
			questionText: 'Which state is known as Spice Garden of India?',
			answerOptions: [
				{ answerText: 'Kerala', isCorrect: true },
				{ answerText: 'Assam', isCorrect: false },
				{ answerText: 'West Bengal', isCorrect: false },
				{ answerText: 'Tamil Nadu', isCorrect: false },
			],
		},
		{
			questionText: 'Which State in India is the largest producer of Soyabean?',
			answerOptions: [
				{ answerText: 'Uttar Pradesh', isCorrect: true },
				{ answerText: 'Bihar', isCorrect: false },
				{ answerText: 'Maharashtra', isCorrect: false },
				{ answerText: 'Madhya Pradesh', isCorrect: true },
			],
		},
		{
			questionText: 'Which Indian State has most airports?',
			answerOptions: [
				{ answerText: 'Rajasthan', isCorrect: false },
				{ answerText: 'Gujarat', isCorrect: true },
				{ answerText: 'Haryana', isCorrect: false },
				{ answerText: 'Himachal Pradesh', isCorrect: false },
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
		<marquee behavior="alternate">QUIZZIT : TOURISM</marquee>
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

export default Food;
