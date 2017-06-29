/*jshint esversion: 6 */ 'use strict';

/*
  Element should have:
    - Making a new DOM Element to represent the element
    - Way to store value, get value, set value
    - Event handling:
      - dragstart
      - dragstop
      - click
*/

class Element {
  static nextId () {
    return Element.currentId ++;
  }

  constructor (value) {
    this.value = value;
    this.id = Element.nextId ();

    this.element = this.draw ();    //change name to generate??
    this.DomEvents = this.addEvents ();

  }

  addEvents () {
    // TODO Make this better ????
    //TODO refactor into DOM event handlers in view
    var events = ELEM_EVENTS;
    return new DOMEventHandler (this.element, events);
  }

  // add draggable ...
  addControls (e) {
    if (!e) e = this.element;
    $ (e).draggable ({
      containment: "parent"
    });
  }

  // set active ... adds/removes class
  setActive (isActive) {
    var element = $(this.element);
    if (isActive)
      element.addClass ("active");
    else
      element.removeClass ("active");

  }

  // Draw the element into the DOM
  draw () {     //change name to generate??
    // TODO HARDCODING IS BAD. MAYBE MOVE SELECTORS TO DEFS?
    var elementDiv = $("#template > .element").clone ();
    var model      = $(".modelDisplay");
    var span       = $("span", elementDiv);

    // set the text ...
    span.text (this.value).data ("id", this.id); // TODO There's gotta be a better way to do this

    // parent it to the main div, add the stuff, return
    elementDiv.insertAfter (model).data ("id", this.id);

    this.addControls (elementDiv);

    return elementDiv;
  }

  // Remove the element from the DOM
  remove () {
    $(this.element).remove ();
  }

  // getters
  getId () { return this.id; }
  getValue () { return this.value; }

  // note: 'true' value is basically an object version. parses null to null ; empty to undefined; else to itself
  getTrueValue () {
    var val = this.getValue ();
    if (!val) return;
    if (val === NULL_CHARACTER) return null;
    return val;
  }
}

Element.currentId = 1000;
