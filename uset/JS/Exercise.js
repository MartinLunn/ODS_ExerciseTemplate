/*jshint esversion: 6 */ 'use strict';

class Exercise {
  constructor()
  {
    //array of question types
    this.questionTypes = [ ];
    this.currentQuestionTypeIndex = 0;   //index into questionTpes, representing the
    this.currentQuestionNumber = 0;       //this is the question number from the user's side. For example if you have three question types, each with 10 questions, #26 would be stored here for the 26th question
  }

  getCurrQuestionType () { return this.questionTypes [this.currentQuestionTypeIndex]; }

  setCurrQuestionType(param)
  {
    if (param < 0)
    {
      console.error("From inside setCurrQuestionType, param is negative.");
      return false;
    } else if (param >= this.questionTypes.length)
    {
      console.error("From inside setCurrQuestionType, param is too high.")
      return false;
    }

    var temp = this.currentQuestionTypeIndex;
    this.currentQuestionTypeIndex = param;
    return temp;
  }

  getQuestionTypes() { return this.questionTypes; }

  setQuestionTypes(toSet)
  {
    var temp = this.questionTypes;
    this.questionTypes = toSet;
    return temp;
  }

  getCurrentQuestionNumber() { return this.currentQuestionNumber; }

  setCurrentQuestionNumber(param)
  {
    if (param < 0)
    {
      console.error("From Inside setCurrentQuestionNumber, param is less than 0.");
    }

    //TODO maybe check upper bound?

    var temp = this.currentQuestionNumber;
    this.currentQuestionNumber = param;
    return temp;
  }

  goToQuestion(questionNumber)
  {
    var questionNumber2d = convertQuestionNumberTo2d(questionNumber);

    this.setCurrQuestionType(questionNumber2d["1d"]);

    this.getCurrentQuestionType().setCurrQuestion(questionNumber2d["2d"]);



    //refresh
    this.refresh();
  }

  convertQuestionNumberTo2d(questionNumber)
  {
    if (questionNumber <= 0)
    {
      console.error("From inside convertQuestionNumberTo2d, questionNumber is negative.")
      return false;
    }

    var toReturn = {"1d": -1, "2d": -1};

    for (var questionType in this.questionTypes)
    {
      if (this.questionTypes[questionType].containsQuestionNum(questionNumber) )
      {
        toReturn["1d"] = questionType;
        break;
      }
      questionNumber = questionNumber - this.questionTypes[questionType].size();
    }

    if (toReturn["1d"] === -1)
    {
      console.error("From inside convertQuestionNumberTo2d, questionNumber is out of bounds (too high).");
      return false;
    }

    toReturn["2d"] = questionNumber;

    return toReturn;
  }

  //TODO refactor to goToQuestion(number? id?)

  cycleQuestionTypes (increment)
  {
    var questionNum = this.currentQuestionTypeIndex;
    questionNum += increment;

    this.currentQuestionTypeIndex = Math.abs (questionNum % this.questionTypes.length);
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
