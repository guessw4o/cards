class Form {
  constructor() {
    this.form = null;
    this.formVisit = null;
  }
  get() {
    this.create();
    return this.form;
  }

  createFormVisit() {
    this.formVisit = document.createElement("li");
    this.formVisit.className = "input-field col s11";
    return this.formVisit;
  }
  create() {
    this.form = document.createElement("li");
    this.form.className = "input-field col s11";
  }
}
