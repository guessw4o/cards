function mainSearchItem() {
  const formAutocomplete = document.createElement("div");
  formAutocomplete.className = "input-field col s4";
  const inputSearch = new Input(
    (id = "autocomplete-input"),
    (className = "autocomplete"),
    (type = "text"),
    (required = "required")
  );
  const inputSearchCreate = inputSearch.get();
  formAutocomplete.append(inputSearchCreate);
  //
  const laberSearch = new Label(
    (title = "Search"),
    (attribute = "autocomplete-input")
  );
  const laberSearchCreate = laberSearch.get();
  formAutocomplete.append(laberSearchCreate);
  //
  const statusForm = document.createElement("div");
  statusForm.className = "input-field col s4";
  const labelStatus = new Label((title = "Status"));
  const laberStatusCreate = labelStatus.get();
  //
  const formSearchUrgency = document.createElement("div");
  formSearchUrgency.className = "input-field col s3";
  const selectStatus = new Select();
  const selectStatusCreate = selectStatus.createSelect();
  selectStatusCreate.id = "select-status";
  const optionStatus = selectStatus.addChooseText();
  optionStatus.innerHTML = "Выбор Статуса";
  optionStatus.value = "status";
  const optionStatusOpen = selectStatus.addChooseText();
  optionStatusOpen.innerHTML = "Open";
  optionStatusOpen.value = "open";
  const optionStatusDone = selectStatus.addChooseText();
  optionStatusDone.innerHTML = "Done";
  optionStatusDone.value = "done";
  statusForm.append(selectStatusCreate, laberStatusCreate);
  //

  const selectSearchUrgency = new SelectSearchUrgency();
  const selectUrgencyCreate = selectSearchUrgency.get();
  const labelUrgency = new Label((title = "Urgency"));
  const labelUrgencyCreate = labelUrgency.get();
  formSearchUrgency.append(selectUrgencyCreate, labelUrgencyCreate);
  //
  const searchBtnDiv = document.createElement("div");
  searchBtnDiv.className = "input-field col s1";
  const searchBtn = document.createElement("button");
  searchBtn.className = "btn waves-effect waves-light searchBtn";
  searchBtn.type = "submit";
  searchBtn.name = "action";
  searchBtn.innerHTML = "Search";
  searchBtnDiv.append(searchBtn);

  const mainRow = document.querySelector(".mainrow");
  mainRow.append(formAutocomplete, statusForm, formSearchUrgency, searchBtnDiv);

  M.FormSelect.init(selectStatusCreate);
  M.FormSelect.init(selectUrgencyCreate);
}
