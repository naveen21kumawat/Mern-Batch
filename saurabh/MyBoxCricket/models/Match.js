export default class Match {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.teams = [];
    this.started = false;
    this.scoreboard = {};
  }
}
