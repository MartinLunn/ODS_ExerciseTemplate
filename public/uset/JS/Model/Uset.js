/*jshint esversion: 6 */ 'use strict';

class Uset extends Model {
  constructor()
  {
    super();
    this.set = { };
    this.n = 0;
  }

  size()
  {
    return this.n;
  }

  add(x)
  {
    if (this.set[x] !== undefined)
    {
      return false;
    }
    this.set[x] = x.toString();       //we want everything the same type, so strings.
    //REQUIRES OVERLOADED TOSTRING FOR OBJECTS
    this.n = this.n + 1;
    return true;
  }

  remove(x)
  {
    if (this.set[x] === undefined)
    {
      return null;
    }
    var toReturn = this.set[x];

    delete this.set [x];    // NOTE: delete actually deletes it. setting to undefined causes issues later
    this.n = this.n - 1;

    return toReturn;
  }

  find(x)
  {
    var toReturn = this.set[x] || null;
    return toReturn;
  }

  get()
  {
    return this.arr;
  }

  equals(other)
  {
    if (!(other instanceof Uset))
    {
      return false;
    }

    if (this.size() !== other.size())
    {
      return false;
    }

    for (var key in this.set)
    {
      /* Alludes to larger issue for templates, we're storing data in our data structures,
      and it would be nice if they're all the same type, however they can't all be objects, 
      because in JS that's dangerous, because despite having a falsy value, if typeof Object returns true, 
      it'll be coerced to truthy. For now we're going with strings.*/
      if (this.find(key) !== other.find(key))
      {
        return false;
      }
    }

    return true;
  }

  copy()
  {
    var copy = new Uset();

    for (var element in this.set)
    {
      copy.add(parseInt(element));
    }

    return copy;
  }



  toString ()
  {
    var result = " ";
    var set = this.set;
    for (var key in set)
      result += key + " ";

    return result;
  }

  draw (div)
  {
    // TODO: This should be an actual thing.
    var myText = this.toString ();
    var input  = $(".modelEntry", div);
    if (input.length===0) input=div;

    $(input).val (myText);
  }

  // TODO: Remove this. This is bad.
  static fromUserInput (div)
  {
    var newSet = new Uset ();
    var input  = $(".modelEntry", div);
    var user   = input.val ();

    var values = user.match (/[^ ]+/g);
    for (var i in values){
      newSet.add (values[i]);
    }

    return newSet;
  }
}
