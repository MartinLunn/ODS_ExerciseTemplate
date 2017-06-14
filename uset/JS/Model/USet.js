/*jshint esversion: 6 */

class USet extends Model {
  constructor()
  {
    this.values = { };
    this.n      = 0;
  }

  find (x) {
    return this.values [x];
  }

  add (x) {
    if (this.values[x]) return false;
 
    this.values[x] = x;
    this.n ++;

    return true;
  }
    
  remove (x) {
    if (!this.values [x]) return false;

    this.values [x] = undefined;
    this.n --;
   
    return true;
  }

  size() {
    return this.n;
  }

  equals(other)
  {
    if (!other instanceof USet) return false;
    if (this.size() !== other.size()) return false;

    var vals = this.values;
    for (var x in vals) {
      if (other.find (x) !== this.find (x))
        return false;
    }

    return true;
  }
}
