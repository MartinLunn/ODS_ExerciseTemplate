/*jshint esversion: 6 */ 'use strict';

class Find extends Question {
  generateParameters()
  {
    return ODSRandom.getRandomIntInclusive(__findMinParam__, __findMaxParam__);
  }

  computeAnswerData()
  {
    return this.answer.getModel().find(this.parameters);
  }

  getAnswer ()
  {
    return this.answer.getData ();
  }

  // check answer ...
  //TODO I don't think this should be here, but I probably don't fully understand it.
  parseActiveElementValue (activeElem)
  {
      var val = activeElem && activeElem.getValue ();
      if (!val) return false;

      if (val === "NULL_CHARACTER") return null; // the null element
      return val;
  }

  check (userModel, activeElem)
  {
    // for find, two things must be the same:
    //   1) The models should be the same
    //   2) The return values should match.
    // That is, should find the element without messing with the set.
    if (!this.answer.getModel ().equals (userModel))
      return false;

    return (this.answer.getData () === this.parseActiveElementValue (activeElem))
  }

  // setting active
  canSetActive(){ return true; }

  // input: no input needed for find
}
