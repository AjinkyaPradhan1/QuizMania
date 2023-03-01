import './App.css';
import './quizPages.css';
import React, { useState } from 'react';


function Atlas() {

  const questions = [
		{
			questionText: 'What is the capital of Manipur?',
			answerOptions: [
				{ answerText: 'Imphal', isCorrect: true },
				{ answerText: 'Itanagar', isCorrect: false },
				{ answerText: 'Kohima', isCorrect: false },
				{ answerText: 'Dispur', isCorrect: false },
			],
		},

    	{
			questionText: 'What is the currency of Bangladesh?',
			answerOptions: [
				{ answerText: 'Rupee', isCorrect: false },
				{ answerText: 'Dinar', isCorrect: false },
				{ answerText: 'Taka', isCorrect: true },
				{ answerText: 'Dirham', isCorrect: false },
			],
		},

		{
			questionText: 'Which Country is the smallest country in the world?',
			answerOptions: [
				{ answerText: 'Cyprus', isCorrect: false },
				{ answerText: 'Israel', isCorrect: false },
				{ answerText: 'Vatican City', isCorrect: true },
				{ answerText: 'Barbados', isCorrect: false },
			],
		},

		{
			questionText: 'What is the capital of Brazil?',
			answerOptions: [
				{ answerText: 'Brasilia', isCorrect: true },
				{ answerText: 'Rio De janerio', isCorrect: false },
				{ answerText: 'Manaus', isCorrect: false },
				{ answerText: 'Curitiba', isCorrect: false },
			],
		},

		{
			questionText: 'Which of the following is not a landlocked country?',
			answerOptions: [
				{ answerText: 'Afghanistan', isCorrect: false },
				{ answerText: 'Bhutan', isCorrect: false },
				{ answerText: 'Mongolia', isCorrect: false },
				{ answerText: 'Myanmar', isCorrect: true },
			],
		},

		{
			questionText: 'Amsterdam is the capital of which country ?',
			answerOptions: [
				{ answerText: 'France', isCorrect: false },
				{ answerText: 'Belgium', isCorrect: false },
				{ answerText: 'Netherlands', isCorrect: true },
				{ answerText: 'Switzerland', isCorrect: false },
			],
		},

		{
			questionText: 'Which Country is surrounded by water at all sides?',
			answerOptions: [
				{ answerText: 'South Africa', isCorrect: false },
				{ answerText: 'Madagascar', isCorrect: true },
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'USA', isCorrect: false },
			],
		},
		{
			questionText: 'What is the currency of Japan?',
			answerOptions: [
				{ answerText: 'Won', isCorrect: false },
				{ answerText: 'Yuan', isCorrect: false },
				{ answerText: 'Dong', isCorrect: false },
				{ answerText: 'Yen', isCorrect: true },
			],
		},
		{
			questionText: 'Which country was divided by The wall of Berlin?',
			answerOptions: [
				{ answerText: 'Germany', isCorrect: true },
				{ answerText: 'Italy', isCorrect: false },
				{ answerText: 'Spain', isCorrect: false },
				{ answerText: 'France', isCorrect: false },
			],
		},
		{
			questionText: 'Which country is currently the President of G20 Countries?',
			answerOptions: [
				{ answerText: 'USA', isCorrect: false },
				{ answerText: 'India', isCorrect: true },
				{ answerText: 'UK', isCorrect: false },
				{ answerText: 'France', isCorrect: false },
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

	function myFunction() {
		var popupline = document.getElementById("myPopup");
		popupline.classList.toggle("show");
	  }

  return (
    <div className="Main">
      <div className="header">
	  <div className="headerText">QUIZMANIA : ATLAS</div>
	  </div>

      <div className="mainCard">

			{showScore ? (
				<div className='score-section'>

					<div class="scoreText">You scored {score} out of {questions.length}</div>
					
					<div className="showAnswerButton">
						<div class="popup">
							<p class="popuptext" id="myPopup">
								
							<div class="one">
									1.&nbsp;Imphal<br/><br/>
									2.&nbsp;Taka<br/><br/>
									3.&nbsp;Vatican City<br/><br/>
									4.&nbsp;Brasilia<br/><br/>
									
								</div>
								<div class="two">
									5.&nbsp;Myanmar<br/><br/>
									6.&nbsp;Netherlands<br/><br/>
									7.&nbsp;Madagascar<br/><br/>
									8.&nbsp;Yen<br/><br/>
								</div>
								<div class="three">
									9.&nbsp;Germany<br/><br/>
									10.&nbsp;India<br/><br/>
								</div>
							</p>
						</div>
						<button class="showAnswer" id="showAnswerText" onClick={myFunction}>Show Answers</button>
						<button class="showHome"><a href="/">Home</a></button> 
						
					</div>
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

export default Atlas;
