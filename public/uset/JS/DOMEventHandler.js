/*jshint esversion: 6 */ 'use strict';

class DOMEventHandler {   //we have one instance of a domeventhandler for each dom element that has events associated with it
  static registerEventHandler (h) {
    this.customEventHandlers.push (h);
  }

  constructor (elements, triggerMap) {        //usual use case is new DOMEventHandler([], {"DOMEventSymbol" : "CustomEventSymbol"}
    // {click : "check"}
    //trigger map is a custom object, that has keys as dom events, and values as bound names of custom emitted events that are registered in EH
    //the final handling functions are "bound" in the custom event handler.
    //The reason we have this structure is that we could want to have events that are not triggered by DOM.
    this.triggerMap = triggerMap;
    this.elements = elements;
    this.setup ();
  }

  setup () {
    $(this.elements).each ((index, element) => {
      this.addTriggerToMap (element);
    });
  }

  push (element) {
    this.elements.push (element);
    this.addTriggerToMap (element);
  }

  addTriggerToMap (element) {
    var $e = $(element);
    for (var domEvent in this.triggerMap) {
          $e.on (domEvent, (...args)=>{     //handling function
            this.fire.apply (this, args);
          });
    }
  }

  fire (event, ...args) {
    console.log (event);

    var events = DOMEventHandler.customEventHandlers;
    var type   = this.triggerMap [event.type];
    var elem   = event.target;

    // TODO: better way to do this?
    args.unshift (event);
    args.unshift (elem);
    args.unshift (type);

    for (var i in events)
      events[i].trigger.apply (events[i], args);
  }

}

DOMEventHandler.customEventHandlers = [ ];
