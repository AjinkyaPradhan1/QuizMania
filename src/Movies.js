import './App.css';
import './quizPages.css';
import React, { useState } from 'react';


function Movies() {

  const questions = [
		{
			questionText: 'Which Superhero Character Movie takes place in Gotham City and features a superhero who must rise?',
			answerOptions: [
				{ answerText: 'Batman', isCorrect: true },
				{ answerText: 'Superman', isCorrect: false },
				{ answerText: 'Ironman', isCorrect: false },
				{ answerText: 'Aquaman', isCorrect: false },
			],
		},

    	{
			questionText: ' "The Social Network" is a movie about the founding of ?',
			answerOptions: [
				{ answerText: 'Google', isCorrect: false },
				{ answerText: 'Tesla', isCorrect: false },
				{ answerText: 'Twitter', isCorrect: false },
				{ answerText: 'Facebook', isCorrect: true },
			],
		},

		{
			questionText: ' Guess the movie this quote comes from. Tony: "Genius, billionaire, playboy, philanthropist."',
			answerOptions: [
				{ answerText: 'Suicide Squad', isCorrect: false },
				{ answerText: 'Eternals', isCorrect: false },
				{ answerText: 'Avengers', isCorrect: true },
				{ answerText: 'Fast and Furious', isCorrect: false },
			],
		},

		{
			questionText: 'Who actually drew the sketch of Rose in Titanic?',
			answerOptions: [
				{ answerText: 'Billy Zane', isCorrect: false },
				{ answerText: 'Leonardo DiCaprio', isCorrect: true },
				{ answerText: 'Kathy Bates', isCorrect: false },
				{ answerText: 'James Cameron', isCorrect: false },
			],
		},

		{
			questionText: 'In one of the most hilarious scenes, Virus (Boman Irani) asks a hungover Raju a question in the class. What was it?',
			answerOptions: [
				{ answerText: 'How an aeroplane starts?', isCorrect: false },
				{ answerText: 'How Maruti Car start?', isCorrect: false },
				{ answerText: 'How engine starts?', isCorrect: false },
				{ answerText: 'How induction motor starts?', isCorrect: true },
			],
		},

		{
			questionText: 'In the climax of the first part of Bahubali, what is the name of the clan who wage a war against Mahishmati??',
			answerOptions: [
				{ answerText: ' Bhringavedas', isCorrect: false },
				{ answerText: 'Nashtashooras', isCorrect: false },
				{ answerText: 'Kaalakeyas', isCorrect: true },
				{ answerText: 'Dhwamsapoornas', isCorrect: false },
			],
		},

		{
			questionText: 'In Hera Pheri, what was character of Paresh Rawal called?',
			answerOptions: [
				{ answerText: 'Raju', isCorrect: false },
				{ answerText: 'BabuRao GanpatRao Apte', isCorrect: true },
				{ answerText: 'Shyam', isCorrect: false },
				{ answerText: 'Devi Prasad', isCorrect: false },
			],
		},
		{
			questionText: 'Which Movie is this from: "We dance to express ... not to impress"?',
			answerOptions: [
				{ answerText: 'Devdas', isCorrect: false },
				{ answerText: 'Dishoom', isCorrect: false },
				{ answerText: 'Dance Dance', isCorrect: false },
				{ answerText: 'Anybody Can Dance', isCorrect: true },
			],
		},
		{
			questionText: 'Whic is not a mmovie based on Sports?',
			answerOptions: [
				{ answerText: 'Lagaan', isCorrect: false },
				{ answerText: 'Gold', isCorrect: false },
				{ answerText: 'Race', isCorrect: true },
				{ answerText: 'Chak De India', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the director of movie RRR?',
			answerOptions: [
				{ answerText: 'Mani Ratnam', isCorrect: false },
				{ answerText: 'SS Rajamouli', isCorrect: true },
				{ answerText: 'Shankar', isCorrect: false },
				{ answerText: 'K Balachander', isCorrect: false },
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
		<marquee behavior="alternate">QUIZZIT : MOVIES</marquee>
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

export default Movies;
