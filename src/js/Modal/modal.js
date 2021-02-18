class Modal {
  constructor() {
    this.modal = null;
    this.row = null;
    this.content = null;
    this.selectDoctor = null;
  }
  render() {
    this.createWrapper();
    this.createContent();
    this.createRow();
  }
  renderVisitModal() {
    this.createModalVisit();
    this.modalVisitContent();
    this.createSelect();
    this.createFormRow();
  }

  createWrapper() {
    this.modal = document.createElement("div");
    this.modal.id = "signin";
    this.modal.className = "modal signin";
    document.body.append(this.modal);
  }
  createContent() {
    this.content = document.createElement("div");
    this.content.className = "modal-content right-align";
    this.modal.append(this.content);
  }
  createRow() {
    this.row = document.createElement("ul");
    this.row.className = "row";
    this.modal.append(this.row);
    this.modal.append(enterError, enterSite);
  }
  addElement(array) {
    array.forEach((el) => {
      const form = new Form();
      const input = new Input(
        el.input.id,
        el.input.className,
        el.input.type,
        el.input.required
      );
      const label = new Label(el.label.title, el.label.attribute);
      const labelGet = label.get();
      const inputGet = input.get();
      const formGet = form.get();
      formGet.append(inputGet, labelGet);
      this.row.append(formGet);
    });
  }
  createModalVisit() {
    this.modal = document.createElement("div");
    this.modal.id = "create";
    this.modal.className = "modal modal-doctor";
    document.body.append(this.modal);
  }
  modalVisitContent() {
    this.content = document.createElement("div");
    this.content.className = "input-field choose-doctor";
    this.modal.append(this.content);
  }
  createSelect() {
    const selectDoctor = new Select();
    this.selectDoctor = selectDoctor.get();
    this.content.append(this.selectDoctor);
  }
  createFormRow() {
    this.row = document.createElement("ul");
    this.row.className = "row form-doctor";
    this.modal.append(this.row);
  }
  removeSelect() {
    this.modalVisitContent();
    this.createSelect();
    this.createFormRow();
  }
}
