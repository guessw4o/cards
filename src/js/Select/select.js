class Select {
  constructor() {
    this.select = null;
    this.content = null;
    this.selectUrgency = null;
    this.options = null;
  }

  createSelect() {
    this.select = document.createElement("select");
    this.select.id = "visitCreate";
    this.select.onchange = visitFunc;
    return this.select;
  }

  addChooseText() {
    this.content = document.createElement("option");
    this.content.value = "choose-doctor";
    this.content.innerHTML = "Выбор специалиста";
    this.select.append(this.content);
    return this.content;
  }
  chooseTherapist() {
    this.content = document.createElement("option");
    this.content.value = "therapist";
    this.content.innerHTML = "Терапевт";
    this.content.className = "therapist";
    this.select.append(this.content);
  }
  chooseDentist() {
    this.content = document.createElement("option");
    this.content.value = "dentist";
    this.content.innerHTML = "Стоматолог";
    this.content.className = "dentist";
    this.select.append(this.content);
  }
  chooseCardiologist() {
    this.content = document.createElement("option");
    this.content.value = "cardiologist";
    this.content.className = "cardiologist";
    this.content.innerHTML = "Кардиолог";
    this.select.append(this.content);
  }

  get() {
    this.createSelect();
    this.addChooseText();
    this.chooseCardiologist();
    this.chooseDentist();
    this.chooseTherapist();

    return this.select;
  }
  render() {
    this.createSelectUrgency();
    this.addOptionUrgency();
    this.addLowUrgency();
    this.addNormalUrgency();
    this.addHighUrgency();
    M.FormSelect.init(this.selectUrgency);
    return this.content;
  }
  createSelectUrgency() {
    this.content = document.createElement("li");
    this.content.className = "input-field col s11 formUrgency";
    this.selectUrgency = document.createElement("select");
    this.selectUrgency.className = "selectUrgency";
    document.querySelector(".form-doctor").append(this.content);
    document.querySelector(".formUrgency").append(this.selectUrgency);
  }

  addOptionUrgency() {
    this.options = document.createElement("option");
    this.options.value = "Срочность";
    this.options.selected;
    this.options.innerHTML = "Срочность";
    this.selectUrgency.append(this.options);
  }
  addLowUrgency() {
    this.options = document.createElement("option");
    this.options.value = "Обычная";
    this.options.innerHTML = "Обычная";
    this.selectUrgency.append(this.options);
  }
  addNormalUrgency() {
    this.options = document.createElement("option");
    this.options.value = "Приоритетная";
    this.options.innerHTML = "Приоритетная";
    this.selectUrgency.append(this.options);
  }
  addHighUrgency() {
    this.options = document.createElement("option");
    this.options.value = "Неотложная";
    this.options.innerHTML = "Неотложная";
    this.selectUrgency.append(this.options);
  }
}

class SelectSearchUrgency extends Select {
  constructor() {
    super();
    this.selectUrgency = null;
  }
  createSelectSearchUrgency() {
    this.selectUrgency = document.createElement("select");
    this.selectUrgency.className = "select-search-urgency";
  }

  get() {
    this.createSelectSearchUrgency();
    super.addOptionUrgency();
    super.addLowUrgency();
    super.addNormalUrgency();
    super.addHighUrgency();
    return this.selectUrgency;
  }
}
