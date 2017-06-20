/*jshint esversion: 6 */ 'use strict';

class Add extends Question {
  static generateParameters()
  {
    return ODSRandom.getRandomIntInclusive(__addMinParam__, __addMaxParam__);
  }

  computeAnswerData(prevAnswer)
  {
    if (prevAnswer) {
      this.answer.setData(prevAnswer.getData().copy());
    }

    this.answer.getData().add(this.parameters);

    return this.answer;
  }
}
