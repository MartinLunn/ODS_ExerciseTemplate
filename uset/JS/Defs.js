/*jshint esversion: 6 */ 'use strict';

var DEBUG = true;
var instructionsId = "instructions";
var questionId = "questions";

/*

var __MODULENAME__questionTypesClassNames = [];

  var __MODULENAME__questionData = [ {className : questionClassName, instructionsText : "do this" , parameters : {} } , ]
  //model
  var __MODULENAME__ = "";

var __MODULENAME__numberOfQuestionsRequired = [ ];
*/

var __MODULENAME__ = Uset;
/*jshint esversion: 6 */ 'use strict';

class Uset extends Model {
  constructor()
  {
    this.set = { };
    this.n = 0;
  }

  size()
  {
    return this.n;
  }

  add(x)
  {
    if (this.set[x] !== undefined)
    {
      return false;
    }
    this.set[x] = x;
    this.n++;
    return true;
  }

  remove(x)
  {
    if (this.set[x] === undefined)
    {
      return null;
    }
    var toReturn = this.set[x];
    this.set[x] = undefined;
    this.n--;
    return toReturn;
  }

  find(x)
  {
    var toReturn = this.set[x] || null;
    return toReturn;
  }

  get()
  {
    return this.arr;
  }

  equals(other)
  {
    if (!(other instanceof Uset))
    {
      return false;
    }

    if (this.size() !== other.size())
    {
      return false;
    }

    for (var key in this.set)
    {
      if (this.find(key) !== other.find(key))
      {
        return false;
      }
    }

    return true;
  }

  copy()
  {
    var copy = new Uset();

    copy.n = this.n;

    for (var element in this.set)
    {
      copy.add(element);
    }

    return copy;
  }
}

var questionTypesClassNames = [Operations];

var answerTypesClassNames = [OperationAnswer];

var numberOfQuestionsRequired = [[10,4,10]];

  var questionData = [
    [{class : Add, instructionsText : "Illustrate the evolution of the collection given the following add method."},
    {class : Find, instructionsText : "Illustrate the evolution of the collection given the following find method."} ,
    {class : Remove, instructionsText : "Illustrate the evolution of the collection given the following remove method."}]
                      ];

var __addMinParam__ = 1;
var __addMaxParam__ = 8;
var __findMinParam__ = 0;
var __findMaxParam__ = 16;
var __removeMinParam__ = 1;
var __removeMaxParam__ = 8;

/*load order:
MUST BE LOADED AFTER QUESTIONS AND QUESTIONTYPES AND RANDOM
AND BEFORE EXERCISE
*/
