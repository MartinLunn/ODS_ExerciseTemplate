/*jshint esversion: 6 */ 'use strict';

class Control {
  constructor()
  {
    this.exercise = new Exercise();
    this.customEventHandler = new CustomEventHandler();

    this.view = new View ();
    this.view.register (this.customEventHandler);

    this.exercise.setup();
    this.addEvents ();

    $(()=>{
      this.exercise.start ();     //TODO rename ?? maybe
    });
  }

  addEvent (name, handling) {
    this.customEventHandler.bind (name, handling, this);
  }

  addEvents ()
  {
    this.addEvent ("nextExercise", this.onNextBtn);
    this.addEvent ("prevExercise", this.onPrevBtn);
    this.addEvent ("check", this.onCheckBtn);
  }

  onLMBDOWN(domElement){  }
  onLMBUP(domElement){  }
  onMouseOverON(domElement){  }
  onMouseOverOFF(domElement){  }

  onNextBtn (elem, evt) {
    // move to the next exercise ...
    this.exercise.next ();
  };
  onPrevBtn (elem, evt) {
    this.exercise.prev ();
  }

  //TODO
  onCheckBtn (elem, evt) {
    console.log ("Checking your answer .... ");
    if (this.exercise.check ()) {
      console.log ("Ha ha ha, hacker");
      this.onNextBtn ();
    } else {
      console.log ("lol.... #wrong");
    }
  }
}
