/*jshint esversion: 6 */ 'use strict';

/* Main Events .... These are the buttons independent of the exercise */
function onNextBtnClick (elem, evt) {
  // move to the next exercise ...
  this.exercise.next();
}

function onPrevBtnClick (elem, evt) {
  this.exercise.prev ();
}

//TODO
function onCheckBtnClick (elem, evt) {
  console.log ("Checking your answer .... ");
  if (this.exercise.check ()) { //TODO
    console.log ("That's... What? Jimmity Snicket, that's correct! This... This cannot be!");
    onNextBtnClick.apply(this, arguments);
  } else {
    console.log ("lol.... #wrong"); //TODO
  }
}

function onShowAnsBtnClick (elem, evt) {
  var answer = this.exercise.getAnswer ();
  var div    = $(".modelEntry");

  if (!answer || typeof (answer) !== "object"){
    if (!answer) answer = "null";
    div.val (answer);
  } else
    answer.draw (div);
}

var eventData = null;

/*
  ELEMENT EVENTS. These are specific to Element.js and will be added separately
   for every new Element div that gets created.
*/
function onDragStarted(...args)
{
  console.log ("STARTED:",args);
}
function onDragStopped (elem, evt, ui)
{
  console.log ("STOPPED: ", evt, ui);
  console.log ("data: ", ui.helper.data ());
}
function onElementClicked (...args){
  console.log ("CLICKED:",args);
}

const ELEM_EVENTS = {
  "dragstart": "onDragStarted",
  "dragstop": "onDragStopped",
  "click": "onElementClicked"
};

  //must be loaded after page body loads (this refers to eventData, not these handling functions above)
//[{elem: , customEventName: , handlingFunction: },{},{}]

/*var events =
[
  {
    elem: $("#myId"),
    evtsArr: [
      {
        handlingFunction: function,
        customEvtName: string,
        domEvtName: string
      },
      {
        handlingFunction: function,
        customEvtName:string,
        domEvtName: string
      }
    }
    }
    ]

  }
  },
];*/


$ (()=> {
  eventData =
  [
    {
      elem: $("#prevArrow"),
      evtsArr: [
        {
          handlingFunction: onPrevBtnClick,
          customEvtName: "prevBtnClick",
          domEvtName: "click"
        }
      ]
    },
    {
      elem: $("#nextArrow"),
      evtsArr: [
        {
          handlingFunction: onNextBtnClick,
          customEvtName: "nextBtnClick",
          domEvtName: "click"
        }
      ]
    },
    {
      elem: $("#checkBtn"),
      evtsArr: [
        {
          handlingFunction: onCheckBtnClick,
          customEvtName: "checkBtnClick",
          domEvtName: "click"
        }
      ]
    },
    {
      elem: $("#showAnswerBtn"),
      evtsArr: [
        {
          handlingFunction: onShowAnsBtnClick,
          customEvtName: "showAnsBtnClick",
          domEvtName: "click"
        }
      ]
    },
    {
      elem: [ ], // TODO: Make this better? For now, handles connecting for elements
      evtsArr: [
        {
          handlingFunction: onDragStopped,
          customEvtName: "onDragStopped",
          domEvtName: "dragstop"
        },
        {
          handlingFunction: onDragStarted,
          customEvtName: "onDragStarted",
          domEvtName: "dragstart"
        },
        {
          handlingFunction: onElementClicked,
          customEvtName: "onElementClicked",
          domEvtName: "click"
        },
      ]
    }
  ];


  start ();
});
