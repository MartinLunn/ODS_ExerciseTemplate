/*jshint esversion: 6 */ 'use strict';

class Add extends Question {
  static generateParameters()
  {
    return ODSRandom.getRandomIntInclusive(__addMinParam__, __addMaxParam__);
  }

  computeAnswerData(prevAnswer)
  {
    var answer = this.answer;

    if (prevAnswer) {
      answer.setModel(prevAnswer.getModel().copy());
    }

    answer.setData (answer.getModel().add(this.parameters));

    return answer;
  }
}
