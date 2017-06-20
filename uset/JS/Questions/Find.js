/*jshint esversion: 6 */ 'use strict';

class Find extends Question {
  static generateParameters()
  {
    return ODSRandom.getRandomIntInclusive(__findMinParam__, __findMaxParam__);
  }

  computeAnswerData(prevAnswer)
  {
    var answer = this.answer;

    if (prevAnswer) {
      answer.setModel(prevAnswer.getModel().copy());
    }

    answer.setData (answer.getModel().find(this.parameters));

    return answer;
  }
}
