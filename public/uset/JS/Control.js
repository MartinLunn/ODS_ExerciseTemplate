/*jshint esversion: 6 */ 'use strict';

class Control {
  constructor()
  {
    this.userModel = new __MODULENAME__ ();

    this.exercise = new Exercise();
    this.exercise.setup();

    this.customEventHandler = new CustomEventHandler();

    this.view = new View ();

    this.addEvents ();

    this.view.register (this.customEventHandler);

    this.exercise.start ();     //TODO rename ?? maybe
  }


  // input
  validInput (input)
  {
    return this.exercise.isInputValid (input);
  }

  // event handling
  addCustomEvent (name, handling)
  {
    this.customEventHandler.bind (name, handling, this);
  }

  addEvents ()
  {
    var events = null;

    for (var element of eventData)
    {
      this.view.addDOMEvent(element);

      events = element.evtsArr;

      for (var event of events)
      {
        this.addCustomEvent(event.customEvtName, event.handlingFunction);
      }
    }
  }


  // remove an element
  removeElement (e)
  {
    var value = this.view.getValueFromElementDiv (e);

    // remove from the user model
    this.userModel.remove (value);

    // remove from the dom
    this.view.removeElement (e);
  }
}
