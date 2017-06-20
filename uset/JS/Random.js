/*jshint esversion: 6 */ 'use strict';

class ODSRandom {
  constructor()
  {
    this.savedRNGs = [ ];
  }

   static getRandom()
  {
    return Math.random();
  }

  getRandom()
 {
   return this.addToSavedRNGs(ODSRandom.getRandom());
 }

  static getRandomArbitrary(min, max)
  {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomArbitrary(min, max)
  {
    return this.addToSavedRNGs(ODSRandom.getRandomArbitrary(min, max));
  }

  //inclusive min, exclusive max
  static getRandomInt(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

   getRandomInt(min, max)
  {
    return this.addToSavedRNGs(ODSRandom.getRandomInt(min, max));
  }


  //inclusive max
  static getRandomIntInclusive(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomIntInclusive(min, max)
  {
    return this.addToSavedRNGs(ODSRandom.getRandomIntInclusive(min, max));
  }

  //get random from list
  static getRandomFromArray(arr)
  {
    return arr[ODSRandom.getRandomIntInclusive(0,arr.length-1)];
  }

  getRandomFromSaved()
  {
    return ODSRandom.getRandomFromArray(this.savedRNGs);
  }

  addToSavedRNGs(i)
  {
    this.savedRNGs.push(i);
    return i;
  }
}
