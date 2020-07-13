import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'


class Result extends Component {
  render() {
    const { question } = this.props
    const {
      name, avatar, optionOne, optionTwo,
      optionOneVotes, optionTwoVotes, totalVotes
    } = question

    return (
        <div className='question'>
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
          <div className='question-info'>
            <div>
              <span>Would you rather...</span>
              <p>{optionOne.text}...</p>
              <p>{optionOneVotes}</p>
              <p>{optionTwo.text}...</p>
              <p>{optionTwoVotes}</p>
              <p>Total: {totalVotes}</p>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }, { id }) {
  const question = questions[id]

  return {
      question: question
        ? formatQuestion(question, users[question.author], users[authedUser])
        : null
  }
}

export default connect(mapStateToProps)(Result)
