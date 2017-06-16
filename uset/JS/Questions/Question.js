/*jshint esversion: 6 */ 'use strict';

class Question {

  constructor(questionData, answerTypesClassName)
  {
    questionData = questionData || { };
    this.parameters = this.constructor.generateParameters() || { };
    this.instructions = !!questionData.instruction ? new Instructions(questionData.instruction) : null;     //!! converts truthy to true
    this.id = questionData.id || Question.nextId++;
    this.div = null;

    if (answerTypesClassName)
    {
      this.answer = new answerTypesClassName();
    }

    if (typeof(__MODULENAME__) !== "undefined" && __MODULENAME__)
    {
      this.model = new __MODULENAME__();
    }
  }

  getInstructions()
  {
    return this.instructions;
  }

  getParameters()
  {
    return this.parameters;
  }

  setParameters(param)
  {
    var temp = this.parameters;
    this.parameters = param;
    return temp;
  }

  getId() { return this.id; }

  static getNextId()
  {
    return Question.nextId;
  }

  static setNextId(i)
  {
    var temp = Question.nextId;
    Question.nextId = i;
    return temp;
  }

  setId(i)
  {
    var temp = this.id;
    this.id = i;
    return temp;
  }

  getDiv() { return this.div; }

  setDiv(div)
  {
    var temp = this.div;
    this.div = div;
    return temp;
  }

  display(div)
  {
    this.setDiv(div);

    var questionText = this.constructor.name;

    questionText = questionText.charAt(0).toLowerCase() + questionText.substring(1);

    $(".questionSpan",div).text(questionText);

    this.instructions.display(div);
  }

  displayAnswer()
  {
    this.answer.display(this.div);
  }

  generateAnswer(prevAnswer)
  {
    return this.computeAnswerData(prevAnswer);
  }

  check(userAnswer)
  {
    return this.answer.check(userAnswer);
  }

  //static generateParameters()
}

Question.nextId = 0;
