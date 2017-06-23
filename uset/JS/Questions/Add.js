/*jshint esversion: 6 */ 'use strict';

class Add extends Question {
  generateParameters()
  {
    return ODSRandom.getRandomIntInclusive(__addMinParam__, __addMaxParam__);
  }

  computeAnswerData()
  {
    return this.answer.getModel().add(this.parameters);
  }
}
