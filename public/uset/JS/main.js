/*jshint esversion: 6 */ 'use strict';

/*
	Code to start up the stuff ....
*/

var control;
function start ()
{
	// TODO: Find a convenient place for this
	$("#model").droppable ();
	$("#trash").droppable ({
		tolerance: "touch"
	});

	control = new Control ();
}
