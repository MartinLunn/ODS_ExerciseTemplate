/*jshint esversion: 6 */ 'use strict';
/* Hey I'm back */

class View {
  constructor() {
    this.eventHandlers = [ ];
    this.elements = { };
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

  addElement (value) {
    // add the element & push it into the elements object
    var newElement = new Element (value);
    this.elements [newElement.getId ()] = newElement;
  }

  removeElementById (id) {
    var element = this.elements [id];
    if (!element) return false;

    element.remove ();
    this.elements[id] = null;

    return element;
  }

  removeElement (elem) {
    var id = $(elem).data ("id");
    return this.removeElementById (id);
  }

  getElementById (id) {
    return this.elements [id];
  }

  getValueFromElementDiv (e) {
    var id = $(e).data ("id");
    var elem = this.getElementById (id);
    return elem && elem.getValue ();
  }
}
