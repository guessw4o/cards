class Dentist extends Visit {
  constructor() {
    super();
    this.content = null;
  }

  get() {
    this.addElement(generalVisit);
    this.addLastVisit(lastvisit);
    return this;
  }
  addLastVisit(lastvisit) {
    lastvisit.forEach((el) => {
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
      const formGet = form.createFormVisit();
      formGet.append(inputGet, labelGet);
      document.querySelector(".form-doctor").append(formGet);
    });
  }
}
const lastvisit = [
  {
    label: {
      title: "Дата последнего посещения",
      attribute: "lastvisit",
    },
    input: {
      id: "lastvisit",
      type: "text",
      required: "required",
    },
  },
];
