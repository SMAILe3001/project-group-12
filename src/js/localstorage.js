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

  get value() {
    return this.arr;
  }
}

const local = new Local();

export default local;
