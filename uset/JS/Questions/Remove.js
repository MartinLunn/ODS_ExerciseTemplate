/*jshint esversion: 6 */ 'use strict';

class Remove extends Question {
  static generateParameters()
  {
    return ODSRandom.getRandomIntInclusive(__removeMinParam__, __removeMaxParam__);
  }

  computeAnswerData(prevAnswer)
  {
    if (prevAnswer) {
      this.answer.setData(prevAnswer.getData().copy());
    }

    this.answer.getData().remove(this.parameters);

    return this.answer;
  }
}
