/*jshint esversion: 6 */ 'use strict';

class Control {
  constructor()
  {
    this.exercise = new Exercise();
    this.customEventHandler = new CustomEventHandler();
    this.setup();
  }

  setup()
  {
    this.exercise.setup();
  }

  run()
  {
    //instantiate, scramble, generate answer
  }

  onLMBDOWN(domElement){  }
  onLMBUP(domElement){  }
  onMouseOverON(domElement){  }
  onMouseOverOFF(domElement){  }
}
