/*jshint esversion: 6 */ 'use strict';

class QuestionType {
  constructor(questionData, numQuestionsArr, answerTypesClassName)
  {
    this.questions = [ ];
    this.setup(questionData, numQuestionsArr, answerTypesClassName);
  }

  getQuestions()
  {
    return this.questions;
  }

  size ()
  {
    return this.questions.length;
  }

  setNumQuestionRequired(n)
  {
    var temp = this.numQuestionsRequired;
    this.numQuestionsRequired = n;
    return temp;
  }

  //if you want to modify this behavior, for example to scramble question order, override this method in the subclass, copying it, except add scramble or whatever extra functionality
  setup(questionData, numQuestionsArr, answerTypesClassName)
  {
    if (!questionData) {      //param checking
      if (DEBUG) { console.error("From inside QuestionType.setup(), falsy param."); }
      return;
    }

    var thisQuestion = null;
    for (var index in questionData)
    {
        for (let i = 0; i < numQuestionsArr[index]; i++)
        {
          thisQuestion = questionData[index];
          this.questions.push(new thisQuestion.class(thisQuestion, answerTypesClassName[index]));
        }
    }

    //would scramble here if desired using scramble question order

    var x;  //used to hold prev answer

    for (let i = 0; i < this.questions.length; i++)
    {

      x = this.questions[i].generateAnswer(x);   //x gets used first, and then assigned to
    }

  }

  //randomizeOrder = null

  scrambleQuestionOrder() {
    this.questions = ODSRandom.scramble (this.questions);
  }


  //draw = null;

}
