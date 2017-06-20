/*jshint esversion: 6 */ 'use strict';

class Remove extends Question {
  static generateParameters()
  {
    return ODSRandom.getRandomIntInclusive(__removeMinParam__, __removeMaxParam__);
  }

  computeAnswerData(prevAnswer)
  {
    var answer = this.answer;

    if (prevAnswer) {
      answer.setModel(prevAnswer.getModel().copy());
    }

    answer.setData (answer.getModel().remove(this.parameters));

    return answer;
  }
}
