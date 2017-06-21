/*jshint esversion: 6 */ 'use strict';

class Exercise {
  constructor()
  {
    //array of question types
    this.questionTypes = [ ];
    this.correctModel = new __MODULENAME__();     //TODO remove - each questions has a correct model and a user model
    this.userModel = new __MODULENAME__();        //TODO remove - each questions has a correct model and a user model

    this.questionNum     = 0;
    this.questionTypeNum = 0;
  }

  getCurrentQuestionType () { return this.questionTypes [this.questionTypeNum]; }
  cycleQuestionTypes (inc)
  {
    var qNum = this.questionTypeNum;
    qNum += inc;

    this.questionTypeNum = Math.abs (qNum % this.questionTypes.length);
  }

  next ()
  {
    this.questionNum ++;
    if (this.questionNum >= this.getCurrentQuestionType().size ()) {
      // cycle! this is ugly. somebody fix it. i won't, obviously
      this.cycleQuestionTypes (1);
      this.questionNum = 0;
    }

    console.log ("NOW ON ", this.questionNum, " OF ", this.questionTypeNum);
  }

  prev ()
  {
    this.questionNum --;
    if (this.questionNum < 0) {
      this.cycleQuestionTypes (-1);
      this.questionNum = this.getCurrentQuestionType ().size () - 1;
    }

    console.log ("NOW ON ", this.questionNum, " OF ", this.questionTypeNum);
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
