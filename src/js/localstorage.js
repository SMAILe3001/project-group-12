// To add or remove something use
// local.(what you wanna add or remove from).addOrRemove(filmid)
// for example
// local.Queue.addOrRemove(123456)
// if you need to check if something in Queue or Watched already(for buttons and stuff)
// use local.Watched(or Queue).exist(filmid) it returns true or false
// for example local.Watched.exist(123456)
// if you need whole array just use local.Watched.value or local.Queue.value it will return array of film ids
// gl team
//
//
// Also to use lib import it like so:
// import local from './localstorage';

class Local {
  constructor() {
    this.Queue = new Queue();
    this.Watched = new Watched();
  }
}

class Queue {
  constructor() {
    if (localStorage.userQueue) this.arr = JSON.parse(localStorage.userQueue);
    else this.arr = [];
  }

  addOrRemove(id) {
    this.arr.includes(id)
      ? this.arr.splice(this.arr.indexOf(id), 1)
      : this.arr.push(id);
    localStorage.userQueue = JSON.stringify(this.arr);
  }

  exist(id) {
    return this.arr.includes(id);
  }

  get value() {
    return this.arr;
  }
}

class Watched {
  constructor() {
    if (localStorage.userWatched)
      this.arr = JSON.parse(localStorage.userWatched);
    else this.arr = [];
  }

  addOrRemove(id) {
    this.arr.includes(id)
      ? this.arr.splice(this.arr.indexOf(id), 1)
      : this.arr.push(id);
    localStorage.userWatched = JSON.stringify(this.arr);
  }

  exist(id) {
    return this.arr.includes(id);
  }

  get value() {
    return this.arr;
  }
}

const local = new Local();

export default local;
