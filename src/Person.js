import './App.css';
import './quizPages.css';
import React, { useState } from 'react';


function Person() {

  const questions = [
		{
			questionText: 'Who was known as Iron man of India?',
			answerOptions: [
				{ answerText: 'Govind Ballabh Pant', isCorrect: false },
				{ answerText: 'Jawaharlal Nehru', isCorrect: false },
				{ answerText: 'Subhash Chandra Bose', isCorrect: false },
				{ answerText: 'Sardar Vallabhbhai Patel', isCorrect: true },
			],
		},

    	{
			questionText: 'The Indian to beat the computers in mathematical wizardry is?',
			answerOptions: [
				{ answerText: 'Shakunthala Devi', isCorrect: true },
				{ answerText: 'Rina Panigrahi', isCorrect: false },
				{ answerText: 'Ramanujam', isCorrect: false },
				{ answerText: 'Raja Ramanna', isCorrect: false },
			],
		},

		{
			questionText: 'R. K. Laxman is a renowned?',
			answerOptions: [
				{ answerText: 'Dance master', isCorrect: false },
				{ answerText: 'Writer', isCorrect: false },
				{ answerText: 'Cartoonist', isCorrect: true },
				{ answerText: 'Journalist', isCorrect: false },
			],
		},

		{
			questionText: 'Who is the Flying Sikh of India??',
			answerOptions: [
				{ answerText: 'Mohinder Singh', isCorrect: false },
				{ answerText: 'Joginder Singh', isCorrect: false },
				{ answerText: 'Ajit Pal Singh', isCorrect: false },
				{ answerText: 'Milkha singh', isCorrect: true },
			],
		},

		{
			questionText: 'Who is the creator of the Rock Garden in Chandigarh??',
			answerOptions: [
				{ answerText: 'Pupal Jayakar', isCorrect: false },
				{ answerText: 'Le Corbousier', isCorrect: false },
				{ answerText: 'Glen', isCorrect: false },
				{ answerText: 'Nek Chand', isCorrect: true },
			],
		},

		{
			questionText: 'Lionel Messi, Cristiano Ronaldo & Neymar Jr. are distinguished person in the field of?',
			answerOptions: [
				{ answerText: 'Sports', isCorrect: true },
				{ answerText: 'Journalism', isCorrect: false },
				{ answerText: 'Politics', isCorrect: false },
				{ answerText: 'Movies', isCorrect: false },
			],
		},

		{
			questionText: 'Who is the missile man of India?',
			answerOptions: [
				{ answerText: 'Dr. Rajendra Prasad', isCorrect: false },
				{ answerText: 'Dr. APJ Abdul Kalam', isCorrect: true },
				{ answerText: 'Dr. Homi Bhabha', isCorrect: false },
				{ answerText: 'Dr. Visvesvaraya ', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the known as the Wall of India in Cricket?',
			answerOptions: [
				{ answerText: 'Sachin Tendulkar', isCorrect: false },
				{ answerText: 'Virat Kohli', isCorrect: false },
				{ answerText: 'Sourav Ganguly', isCorrect: false },
				{ answerText: 'Rahul Dravid', isCorrect: true },
			],
		},
		{
			questionText: 'Who started first White Revolution in India?',
			answerOptions: [
				{ answerText: 'Dr Verghese Kurien', isCorrect: true },
				{ answerText: 'Dr. MS Swaminathan', isCorrect: false },
				{ answerText: 'Hiralal Chaudhuri', isCorrect: false },
				{ answerText: 'Vishal Tewari', isCorrect: false },
			],
		},
		{
			questionText: 'Who was 2nd president of India?',
			answerOptions: [
				{ answerText: 'Dr. Rajendra Prasad', isCorrect: false },
				{ answerText: 'Dr. Sarvepalli Radhakrishnan', isCorrect: true },
				{ answerText: 'Sardar Vallabhbhai Ptel', isCorrect: false },
				{ answerText: 'William Bentick', isCorrect: false },
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
		<marquee behavior="alternate">QUIZZIT : PERSONALITIES</marquee>
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

export default Person;
