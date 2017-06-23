/*jshint esversion: 6 */ 'use strict';
/* Hey I'm back */

class View {
  constructor() {
    this.eventHandlers = [ ];
  }

  register (eh)
  {
    DOMEventHandler.registerEventHandler (eh);
  }

  addDOMEvent (event) {
    var triggerMap = { };

    var currData = null;

    for (var evt in event.evtsArr)
    {
      currData = event.evtsArr[evt];
      triggerMap[currData.domEvtName] = currData.customEvtName;
    }

    this.eventHandlers.push (new DOMEventHandler(event.elem, triggerMap));
  }
}
