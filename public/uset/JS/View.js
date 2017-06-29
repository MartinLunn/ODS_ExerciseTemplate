
/*jshint esversion: 6 */ 'use strict';
/* Hey I'm back */

class View {
  constructor() {
    this.eventHandlers = [ ];
    this.elements = { };
    this.elementsByValue = { };

    this.addElement (NULL_CHARACTER);
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

  /* ---- ELEMENTS ----- */

  // add a new element
  addElement (value) {
    // add the element & push it into the elements object
    var newElement                                = new Element (value);
    this.elements [newElement.getId ()]           = newElement;
    this.elementsByValue [newElement.getValue ()] = newElement;
  }

  // remove an element
  removeElementById (id) {
    var element = this.elements [id];
    if (!element) return false;

    this.elementsByValue [element.getValue()] = null;
    this.elements[id]                         = null;

    element.remove ();

    return element;
  }

  removeElement (elem) {
    var id = $(elem).data ("id");
    return this.removeElementById (id);
  }

  // get an element
  getElementById (id) {
    return this.elements [id];
  }

  getElement (e) {
    var id = $(e).data ("id");
    return this.getElementById (id);
  }

  getValueFromElementDiv (e) {
    var elem = this.getElement (e);
    return elem && elem.getValue ();
  }

  // find an element
  findByValue (value)
  {
    return this.elementsByValue [value];
  }

  // set active element
  setActive (element) {
    if (this.activeElement)
      this.activeElement.setActive (false);

    this.activeElement = element;
    if (element) element.setActive (true);
  }
}
