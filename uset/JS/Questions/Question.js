/*jshint esversion: 6 */ 'use strict';

class Question {

  constructor(questionData, answerTypesClassName)
  {
    questionData = questionData || { };
    this.parameters = this.constructor.generateParameters() || { };
    this.instructions = !!questionData.instructionsText ? new Instructions(questionData.instructionsText) : null;     //!! converts truthy to true
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

  getModel() { return this.model; }

  setModel(model)
  {
    var temp = this.model;
    this.model = model;
    return temp;
  }



  display(div)
  {
    var div = div || this.getDiv() || $(".questionBody") || null;

    if (!div) { console.error("From question.display() div is null."); return; }

    this.displayInstructions(div);
    this.displayParameters (div);

    /*this.setDiv(div || $(".question." + String(this.id)))

    if (!this.div && DEBUG)
    {
      console.log("Cannot find div from inside question.display."); ///TODO
    }

    var questionText = this.constructor.name;

    questionText = questionText.charAt(0).toLowerCase() + questionText.substring(1);

    $("span", this.div).text(questionText + "(" + this.getParametersString() + ")\n");

    this.displayAnswer();             //TODO for testing only, event handlers

    this.displayInstructions();*/

  }

  displayAnswer(div)
  {
    this.answer.display(div);
  }

  displayParameters (div)
  {
      var str = this.getParametersString ();
      var p   = $(".parametersBody", div);
      p.text (this.constructor.name.toLowerCase() + "(" + str + ")");
  }

  displayInstructions(div)
  {
    this.instructions.display(div);
  }

  generateAnswer(prevAnswer)
  {
    // NOTE: Optimizing this. All implementations seem to have ...
    //        1) Set model to the previous answer's model
    //        2) Set data to something.
    //        3) Return the answer.
    // Can all be done here ....
    var answer = this.answer;
    if (prevAnswer)
      answer.setModel (prevAnswer.getModel ().copy ());

    answer.setData (this.computeAnswerData ());

    return answer;
  }

  getParametersString()       //must overload if parameters is an object
  {
    return String(this.parameters);
  }

  check(userAnswer)
  {
    return this.answer.check(userAnswer);
  }

  //static generateParameters()
}

Question.nextId = 0;
