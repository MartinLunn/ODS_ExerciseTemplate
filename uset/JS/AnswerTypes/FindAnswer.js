/*jshint esversion: 6 */ 'use strict';

class FindAnswer extends AnswerType {
  constructor()
  {
    super();
    this.data = null;
    this.model = new __MODULENAME__();
  }

  check (userAnswer) {
    return this.data === userAnswer;
  }
}
