class Therapist extends Visit {
  constructor() {
    super();
    this.content = null;
  }
  get() {
    this.addElement(generalVisit);
    this.addAge(age);
    return this;
  }
  addAge(age) {
    age.forEach((el) => {
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
const age = [
  {
    label: {
      title: "Возраст",
      attribute: "age",
    },
    input: {
      id: "age",
      type: "text",
      required: "required",
    },
  },
];
