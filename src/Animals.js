import './App.css';
import './quizPages.css';
import React, { useState } from 'react';

function Animals() {

  const questions = [
		{
			questionText: 'How many legs does an octopus have? ',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '14', isCorrect: false },
				{ answerText: '9', isCorrect: false },
			],
		},

    	{
			questionText: 'What is the group of lions called?',
			answerOptions: [
				{ answerText: 'Pride', isCorrect: true },
				{ answerText: 'Herd', isCorrect: false },
				{ answerText: 'Swarm', isCorrect: false },
				{ answerText: 'Flock', isCorrect: false },
			],
		},

		{
			questionText: 'Which is the fastest animal? ',
			answerOptions: [
				{ answerText: 'Deer', isCorrect: false },
				{ answerText: 'Lion', isCorrect: false },
				{ answerText: 'Cheetah', isCorrect: true },
				{ answerText: 'Tiger', isCorrect: false },
			],
		},

		{
			questionText: ' Which is the only land animal that cannot jump?',
			answerOptions: [
				{ answerText: 'Dog', isCorrect: false },
				{ answerText: 'Elephant', isCorrect: true },
				{ answerText: 'Deer', isCorrect: false },
				{ answerText: 'Monkey', isCorrect: false },
			],
		},

		{
			questionText: 'Which is the tallest bird in the world?',
			answerOptions: [
				{ answerText: 'Vulture', isCorrect: false },
				{ answerText: 'Eagle', isCorrect: false },
				{ answerText: 'Emu', isCorrect: false },
				{ answerText: 'Ostrich', isCorrect: true },
			],
		},

		{
			questionText: 'Which is the largest mammal?',
			answerOptions: [
				{ answerText: 'Elephant', isCorrect: false },
				{ answerText: 'Shark', isCorrect: false },
				{ answerText: 'Whale', isCorrect: true },
				{ answerText: 'Hippopotamus', isCorrect: false },
			],
		},

		{
			questionText: 'Which bird is the symbol of peace?',
			answerOptions: [
				{ answerText: 'Kingfisher', isCorrect: false },
				{ answerText: 'Dove', isCorrect: true },
				{ answerText: 'Crow', isCorrect: false },
				{ answerText: 'Sparrow', isCorrect: false },
			],
		},
		{
			questionText: 'Which insect can lift up to 50 times its body weight?',
			answerOptions: [
				{ answerText: 'Ant', isCorrect: true },
				{ answerText: 'Cockroach', isCorrect: false },
				{ answerText: 'Housefly', isCorrect: false },
				{ answerText: 'HoneyBee', isCorrect: false },
			],
		},
		{
			questionText: 'Which land animal can open its mouth the widest?',
			answerOptions: [
				{ answerText: 'Hippo', isCorrect: true },
				{ answerText: 'Elephant', isCorrect: false },
				{ answerText: 'Tiger', isCorrect: false },
				{ answerText: 'Lion', isCorrect: false },
			],
		},
		{
			questionText: 'What is the only mammal capable of true flight?',
			answerOptions: [
				{ answerText: 'Sparrow', isCorrect: false },
				{ answerText: 'Bats', isCorrect: true },
				{ answerText: 'Crow', isCorrect: false },
				{ answerText: 'Eagle', isCorrect: false },
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
	  <div className="headerText">QUIZMANIA : ANIMALS</div>
	  </div>

      <div className="mainCard">

			{showScore ? (
				<div className='score-section'>
					<div class="scoreText">You scored {score} out of {questions.length}</div>
					
					<div className="showAnswerButton">
						<div class="popup">
							<p class="popuptext" id="myPopup">
								
								<div class="one">
									1.&nbsp;8<br/><br/>
									2.&nbsp;Pride<br/><br/>
									3.&nbsp;Cheetah<br/><br/>
									4.&nbsp;Elephant<br/><br/>
									
								</div>
								<div class="two">
									5.&nbsp;Ostrich<br/><br/>
									6.&nbsp;Whale<br/><br/>
									7.&nbsp;Dove<br/><br/>
									8.&nbsp;Ant<br/><br/>
								</div>
								<div class="three">
									9.&nbsp;Hippo<br/><br/>
									10.&nbsp;Bats<br/><br/>
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

export default Animals;
