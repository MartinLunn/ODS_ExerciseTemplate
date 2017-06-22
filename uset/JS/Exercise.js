/*jshint esversion: 6 */ 'use strict';

class Exercise {
  constructor()
  {
    //array of question types
    this.questionTypes = [ ];
    this.currentQuestionIndex = 0;   //index into questionTpes, representing the
  }

  getCurrQuestionType () { return this.questionTypes [this.currentQuestionIndex]; }

  getQuestionTypes() { return this.questionTypes; }

  setQuestionTypes(toSet)
  {
    var temp = this.questionTypes;
    this.questionTypes = toSet;
    return temp;
  }

  //TODO refactor to goToQuestion(number? id?)

  cycleQuestionTypes (increment)
  {
    var questionNum = this.currentQuestionIndex;
    questionNum += increment;

    this.currentQuestionIndex = Math.abs (questionNum % this.questionTypes.length);
  }

  next ()
  {
    var question = this.getCurrQuestionType ();
    if (!question.moveToNext ()) {
      this.cycleQuestionTypes (1);
      this.getCurrQuestionType ().setCurQuestion (0);
    }

    this.refresh ();
  }

  prev ()
  {
    var question = this.getCurrQuestionType ();
    if (!question.moveToPrev ()) {
      this.cycleQuestionTypes (-1);
      this.getCurrQuestionType ().setCurQuestion (-1);
    }

    this.refresh ();
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

  check ()
  {
    var qType = this.getCurrQuestionType ();
    var user  = Uset.fromUserInput (); // TODO: BAD
    return qType.check (user);
  }

  start ()
  {
    // NOTE: start for now just starts the first question .....
    this.refresh ();
  }
  refresh ()
  {
    this.getCurrQuestionType ().draw ();
  }
}
