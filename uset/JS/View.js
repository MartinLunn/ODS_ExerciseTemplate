/*jshint esversion: 6 */ 'use strict';
/* Hey I'm back */

class View {
  constructor() {
    this.eventHandlers = [ ];

    this.addEvents ();
  }

  register (eh) {
    DOMEventHandler.registerEventHandler (eh);
  }

  addEvents () {
    var nextArrow = $("#nextArrow");
    var prevArrow = $("#prevArrow");
    var checkBtn  = $("#checkBtn");

    this.addEvent (nextArrow, {click: "nextExercise"});
    this.addEvent (prevArrow, {click: "prevExercise"});
    this.addEvent (checkBtn, {click: "check"});
  }

  addEvent (elements, events) {
    this.eventHandlers.push (new DOMEventHandler(elements, events));
  }
}
