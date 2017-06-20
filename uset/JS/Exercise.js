/*jshint esversion: 6 */ 'use strict';

class Exercise {
  constructor()
  {
    //array of question types
    this.questionTypes = [ ];
    this.correctModel = new __MODULENAME__();     //TODO remove - each questions has a correct model and a user model
    this.userModel = new __MODULENAME__();        //TODO remove - each questions has a correct model and a user model
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
