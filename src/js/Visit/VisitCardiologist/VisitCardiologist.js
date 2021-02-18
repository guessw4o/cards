class Cardiologist extends Visit {
  constructor() {
    super();
    this.content = null;
  }

  get() {
    this.addElement(generalVisit);
    this.addInputCardiologist(cardiologist);
    return this;
  }
  addInputCardiologist() {
    cardiologist.forEach((el) => {
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
const cardiologist = [
  {
    label: {
      title: "Обычное давление",
      attribute: "pressure",
    },
    input: {
      id: "pressure",
      type: "text",
      required: "required",
    },
  },
  {
    label: {
      title: "Индекс массы тела",
      attribute: "bodymass",
    },
    input: {
      id: "bodymass",
      type: "text",
      required: "required",
    },
  },
  {
    label: {
      title: "Перенесенные заболевания сердечно-сосудистой",
      attribute: "cardiovascular",
    },
    input: {
      id: "cardiovascular",
      type: "text",
      required: "required",
    },
  },
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
