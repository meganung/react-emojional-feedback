import React, { useState } from 'react';

const floatingStyles = {
  position: 'fixed',
  bottom: '30px',
  left: '30px',
  zIndex: '99999',
  display: 'block',
}

const floatingBoxStyles = {
  backgroundColor: '#F0F0FF',
  fontSize: '1em',
  margin: '10px',
  marginLeft: '0px',
  padding: '10px',
  borderRadius: '25px',
  width: 'fit-content',
}

const feedbackQuestionStyles = {
  verticalAlign: 'middle',
  display: 'inline-block',
  margin: '5px'
}

const feedbackOptionStyles = {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'pointer',
  fontSize: '1.5em',
  margin: '5px',
}

const floatingIconStyles = {
  fontSize: '3em',
  display: 'block',
  cursor: 'pointer',
  float: 'left'
}

function FeedbackQuestion({question, handleAnswerSubmit}) {
  return(
    <div style={floatingBoxStyles}>
      <div className="feedback-question" style={feedbackQuestionStyles}>{question}</div>
      <div className="feedback-option" style={feedbackOptionStyles} onClick={() => {handleAnswerSubmit(question, "yes");}}> <span role="img" aria-label="happyface">🙂</span> </div>
      <div className="feedback-option" style={feedbackOptionStyles} onClick={() => {handleAnswerSubmit(question, "no")}}> <span role="img" aria-label="sadface">😔</span> </div>
    </div>
  );
}

const EmojionalFeedback = ({
  questions = [],
  handleAnswerSubmit=() => {},
}) => { 
  const [showPrompts, setShowPrompts] = useState(false);

  return (
    <div style={floatingStyles} onMouseEnter={() => setShowPrompts(true)} onMouseLeave={() => setShowPrompts(false)}>
      { showPrompts ? 
        <div>
          {
            questions.map(value => <FeedbackQuestion handleAnswerSubmit={handleAnswerSubmit} question={value}/>)
          }
        </div>
      : null
      }
      <div id="floating-icon" style={floatingIconStyles}><span role="img" aria-label="surprised">😯</span></div>
    </div>
  );
}

export default EmojionalFeedback;
