/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './Quiz.css'
import quizQuestions from '../resources/quizQuestion.json'

class QuizComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
        quesIndex: 0
    }
  }

 handlePrevious=()=>{
    const {quesIndex} = this.state
    if (quesIndex>0) {
      this.setState({quesIndex:quesIndex-1});
    }
  }

  handleNext=()=>{
    const{quesIndex} = this.state
    if (quesIndex<quizQuestions.length-1){
      this.setState({quesIndex:quesIndex+1})
    }
  }

  handleQuit=()=>{
    window.confirm("Are you sure you want to Quit?")
  }

  render() {
    const {quesIndex} = this.state

    return (
      <div>
        <div className="quiz-container">
          <div className="flex">
            <div className='heading'>
              <h1>Questions</h1>
            </div>
            <div className='num'>
              <h4>{`${quesIndex+1} of 15`}</h4>
            </div>
            <div className='Ques'>
              <p>{quizQuestions[quesIndex].question}</p>
            </div>
            <div className='optBox'>
                <div className="opt"><h2>{quizQuestions[quesIndex].optionA}</h2></div>
                <div className="opt"><h2>{quizQuestions[quesIndex].optionB}</h2></div>
                <div className="opt"><h2>{quizQuestions[quesIndex].optionC}</h2></div>
                <div className="opt"><h2>{quizQuestions[quesIndex].optionD}</h2></div>
            </div>
            <div className="Btn">
              <button className='prev' onClick={this.handlePrevious} disabled={quesIndex===0}>
                Previous
              </button>
              <button className='nxt' onClick={this.handleNext} disabled={quesIndex===quizQuestions.length-1}>
                Next
              </button>
              <button className='quit' onClick={this.handleQuit}>Quit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;