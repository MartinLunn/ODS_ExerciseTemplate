/*jshint esversion: 6 */ 'use strict';

class Exercise {
  constructor()
  {
    //array of question types
    this.questionTypes = [ ];
    this.correctModel = new __MODULENAME__();     //TODO remove - each questions has a correct model and a user model
    this.userModel = new __MODULENAME__();        //TODO remove - each questions has a correct model and a user model

    this.questionTypeNum = 0;
  }

  getActiveQuestionType () { return this.questionTypes [this.questionTypeNum]; }
  cycleQuestionTypes (inc)
  {
    var qNum = this.questionTypeNum;
    qNum += inc;

    this.questionTypeNum = Math.abs (qNum % this.questionTypes.length);
  }

  next ()
  {
    var question = this.getActiveQuestionType ();
    if (!question.moveToNext ()) {
      this.cycleQuestionTypes (1);
      this.getActiveQuestionType ().setCurQuestion (0);
    }

    this.refresh ();
  }

  prev ()
  {
    var question = this.getActiveQuestionType ();
    if (!question.moveToPrev ()) {
      this.cycleQuestionTypes (-1);
      this.getActiveQuestionType ().setCurQuestion (-1);
    }

    this.refresh ();
  }

  getQuestionTypes()
  {
    return this.questionTypes;
  }

  setQuestionTypes(toSet)
  {
    var temp = this.questionTypes;
    this.questionTypes = toSet;
    return temp;
  }

  refresh ()
  {
    this.getActiveQuestionType ().draw ();
  }
  clear()
  {
    this.questionTypes = [ ];
  }

  setup()
  {
    //need an array of qtypes for exercise
    //need an array of questions and a number of questions required for qtypes
    //questions need instructions, params, and maybe answer

    this.clear();

    for (var index in questionTypesClassNames)
    {
      this.questionTypes.push(new questionTypesClassNames[index](questionData[index], numberOfQuestionsRequired[index], answerTypesClassNames[index]));
    }

    //if desired, scramble

  }
}
