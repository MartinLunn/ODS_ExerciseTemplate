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
    this.set[x] = x;
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
    this.set[x] = undefined;
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
}
