/*jshint esversion: 6 */ 'use strict';

class AnswerType {
  constructor()
  {
    this.data = undefined;
  }

  setData(data)
  {
    var temp = this.data;
    this.data = data;
    return temp;
  }

  getData() { return this.data; }

  getModel(){ return this.model; }
  setModel(m) {
    var temp = this.model;
    this.model = m;
    return temp;
  }
  
  //display answer?

  check(userAnswer)
  {
    if (this.data.equals)   //if equals exists
    {
      return this.data.equals(userAnswer);
    }

    else
    {
      return this.data === userAnswer;
    }
  }
}
