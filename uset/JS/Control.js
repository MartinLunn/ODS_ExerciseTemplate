/*jshint esversion: 6 */ 'use strict';

class Control {
  constructor()
  {
    this.exercise = new Exercise();
    this.customEventHandler = new CustomEventHandler();
    this.events = [ ];

    this.view = new View ();
    this.view.register (this.customEventHandler);

    this.setup();
  }

  setup()
  {
    this.exercise.setup();
    this.addEvents ();
  }

  run()
  {
    //instantiate, scramble, generate answer
  }

  addEvent (name, handling) {
    this.customEventHandler.bind (name, handling);
  }
  addEvents ()
  {
    this.addEvent ("nextExercise", this.onNextBtn);
    this.addEvent ("prevExercise", this.onPrevBtn);
  }

  onLMBDOWN(domElement){  }
  onLMBUP(domElement){  }
  onMouseOverON(domElement){  }
  onMouseOverOFF(domElement){  }

  onNextBtn (elem, evt) {
    // move to the next exercise ...
    console.log ("MOVE TO NEXT EXERCISE, OK? ANNIE?");
  };
  onPrevBtn (elem, evt) {
    console.log ("You've been hit by... You've been struck by... The back button..");
  }
}
