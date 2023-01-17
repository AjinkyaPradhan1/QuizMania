import './App.css';
import './quizPages.css';
import React, { useState } from 'react';



function Sports() {

  const questions = [
		{
			questionText: 'Which state in the country houses Wankhede Cricket Stadium? ',
			answerOptions: [
				{ answerText: 'Pune', isCorrect: false },
				{ answerText: 'Mumbai', isCorrect: true },
				{ answerText: 'Delhi', isCorrect: false },
				{ answerText: 'Ahmedabad', isCorrect: false },
			],
		},

		{
			questionText: 'Which team won FIFA Football world cup in 2022?',
			answerOptions: [
				{ answerText: 'Brazil', isCorrect: false },
				{ answerText: 'Portugal', isCorrect: false },
				{ answerText: 'Argentina', isCorrect: true },
				{ answerText: 'France', isCorrect: false },
			],
		},

		{
			questionText: 'Novak Djokovic plays which sport? ',
			answerOptions: [
				{ answerText: 'Tennis', isCorrect: true },
				{ answerText: 'Golf', isCorrect: false },
				{ answerText: 'Rugby', isCorrect: false },
				{ answerText: 'Football', isCorrect: false },
			],
		},

		{
			questionText: 'Which is the national sport of India ?',
			answerOptions: [
				{ answerText: 'Cricket', isCorrect: false },
				{ answerText: 'Kabaddi', isCorrect: false },
				{ answerText: 'Hockey', isCorrect: true },
				{ answerText: 'Football', isCorrect: false },
			],
		},

		{
			questionText: 'Which Indian athlete won the First Olympics Gold Medal in Javelin Throw?',
			answerOptions: [
				{ answerText: 'Abhinav Bindra', isCorrect: false },
				{ answerText: 'Jeremy Lalrinunga', isCorrect: false },
				{ answerText: 'Lakshya Sen', isCorrect: false },
				{ answerText: 'Neeraj Chopra', isCorrect: true },
			],
		},

		{
			questionText: 'Lewis Hamilton is assosciated with which sport ?',
			answerOptions: [
				{ answerText: 'Equestrian', isCorrect: false },
				{ answerText: 'F1 Racing', isCorrect: true },
				{ answerText: 'Polo', isCorrect: false },
				{ answerText: 'Archery', isCorrect: false },
			],
		},

		{
			questionText: 'Thomas Cup and Uber Cup are prestigious trophies of which sport?',
			answerOptions: [
				{ answerText: 'Badminton', isCorrect: true },
				{ answerText: 'Tennis', isCorrect: false },
				{ answerText: 'Squash', isCorrect: false },
				{ answerText: 'Table Tennis', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the first batsman to score double centuries in four consecutive test series in cricket?',
			answerOptions: [
				{ answerText: 'Rohit Sharma', isCorrect: false },
				{ answerText: 'AB de Villiers', isCorrect: false },
				{ answerText: 'Brian lara', isCorrect: false },
				{ answerText: 'Virat Kohli', isCorrect: true },
			],
		},
		{
			questionText: 'Durand cup is assosciated with which Sport?',
			answerOptions: [
				{ answerText: 'Cricket', isCorrect: false },
				{ answerText: 'Football', isCorrect: true },
				{ answerText: 'Tennis', isCorrect: false },
				{ answerText: 'Hockey', isCorrect: false },
			],
		},
		{
			questionText: 'How many players are on a Basketball field per team?',
			answerOptions: [
				{ answerText: '7', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '5', isCorrect: true },
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
		<div className="headerText">QUIZZIT : SPORTS</div>
		
      </div>

		
      <div className="mainCard">	

			
			
			{showScore ? (
				<div className='score-section'>
					
					<div class="scoreText">You scored {score} out of {questions.length}</div>
					
					<div className="showAnswerButton">
						<div class="popup">
							<p class="popuptext" id="myPopup">
								
								<div class="one">
									1.&nbsp;Mumbai<br/><br/>
									2.&nbsp;Argentina<br/><br/>
									3.&nbsp;Tennis<br/><br/>
									4.&nbsp;Hockey<br/><br/>
									
								</div>
								<div class="two">
									5.&nbsp;Neeraj Chopra<br/><br/>
									6.&nbsp;F1 Racing<br/><br/>
									7.&nbsp;Badminton<br/><br/>
									8.&nbsp;Virat Kohli<br/><br/>
								</div>
								<div class="three">
									9.&nbsp;Football<br/><br/>
									10.&nbsp;5<br/><br/>
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
			
	  {/* <div class="popup" onclick="myFunction()">Click me!
  			<span class="popuptext" id="myPopup">Popup text...</span>
	  </div> */}
	  
	  	

      <div className="footer">
        <div className="footerContent">
          All Rights Reserved &copy;2023 - &infin; Ajinkya Pradhan
        </div>  
      </div>

	  

    </div>
  );
}

export default Sports;
