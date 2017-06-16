/*jshint esversion: 6 */ 'use strict';

class Find extends Question {
  static generateParameters()
  {
    return ODSRandom.getRandomIntInclusive(__findMinParam__, __findMaxParam__);
  }

  computeAnswerData(prevAnswer)
  {
    if (prevAnswer) {
      this.answer.setData(prevAnswer.getData().copy());
    }

    this.answer.getData().find(this.parameters);

    return this.answer;
  }
}
