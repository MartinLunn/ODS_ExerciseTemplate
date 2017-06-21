/*jshint esversion: 6 */ 'use strict';

class CustomEventHandler {
  constructor()
  {
    this.customEvent = { };
  }

  bind(odsEvent, handlingFunction, context)
  {
    if (!this.customEvent[odsEvent])      //if this,events doesn't contain event
    {
      this.customEvent[odsEvent] = [];
    }
    this.customEvent[odsEvent].push({
      func: handlingFunction,
      context: context
    });
  }

  unbind(event)
  {
    this.customEvent[event] = [ ];
  }

  trigger(event)
  {
    var doThis = this.customEvent[event];
    if (doThis)
    {
      for (var i = 0; i < doThis.length; i++) {
        Array.prototype.shift.apply(arguments);         //removing the first element of arguments, which is the event itself (original target)
        doThis[i].func.apply(doThis[i].context, arguments);
      }
    }
  }
}
