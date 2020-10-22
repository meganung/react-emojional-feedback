# react-emojional-feedback
a floating emoji tool for getting feedback!

## Demos
![](https://media.giphy.com/media/V0FrMENrSbb1SgBZmp/giphy.gif)
![](https://media.giphy.com/media/kjvN7b46EaQ6l7XBuu/giphy.gif)

## Usage
```javascript
import React from 'react';
import EmojionalFeedback from "react-emojional-feedback";

const App = () => (
  <EmojionalFeedback 
    questions={["q1","q2","q3"]}
    handleAnswerSubmit={(question, answer) => console.log(question, answer)}
  />
)
export default App;
```
## Notes
Created by Megan Ung and Chloe Barreau. 

Emojional Feedback was originally seen on and built for [Explain the Valley](https://explainthevalley.com/).

### License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
