/*jshint esversion: 6 */ 'use strict';

class Find extends Question {
  generateParameters()
  {
    return ODSRandom.getRandomIntInclusive(__findMinParam__, __findMaxParam__);
  }

  computeAnswerData()
  {
    return this.answer.getModel().find(this.parameters);
  }

  getAnswer ()
  {
    return this.answer.getData ();
  }


  // input: no input needed for find
}
