function mainSearchItem() {
    const formAutocomplete = document.createElement("div")
    formAutocomplete.className = "input-field col s4"
    const inputAutocomplete = document.createElement("input")
    inputAutocomplete.id = "autocomplete-input"
    inputAutocomplete.className = "autocomplete"
    inputAutocomplete.type = "text"
    formAutocomplete.append(inputAutocomplete)
    const labelAutocomplete = document.createElement("label")
    labelAutocomplete.setAttribute("for", "autocomplete-input")
    labelAutocomplete.innerHTML = "Search"
    formAutocomplete.append(labelAutocomplete)
    
    const statusForm = document.createElement("div")
    statusForm.className = "input-field col s4"
    const statusSelect = document.createElement("select")
    const statusSelectOpen = document.createElement("option")
    statusSelectOpen.value = "open"
    statusSelectOpen.innerHTML = "Open"
    const statusSelectDone = document.createElement("option")
    statusSelectDone.value = "done"
    statusSelectDone.innerHTML = "Done"
    const statusLabel = document.createElement("label")
    statusLabel.innerHTML = "Status"
    statusSelect.append(statusSelectOpen, statusSelectDone)
    statusForm.append(statusSelect, statusLabel)
    
    const formSearchUrgency = document.createElement("div")
    formSearchUrgency.className = "input-field col s3"
    const selectSearchUrgency = document.createElement("select")
    selectSearchUrgency.className = "selectsearchurgency"
    const lowSearchUrgency = document.createElement("option")
    lowSearchUrgency.value = "Обычная"
    lowSearchUrgency.innerHTML = "Обычная"
    const normalSearchUrgency = document.createElement("option")
    normalSearchUrgency.value = "Приоритетная"
    normalSearchUrgency.innerHTML = "Приоритетная"
    const highSearchUrgency = document.createElement("option")
    highSearchUrgency.value = "Неотложная"
    highSearchUrgency.innerHTML = "Неотложная"
    const searchLabelUrgency = document.createElement("label")
    searchLabelUrgency.innerHTML = "Urgency"
    selectSearchUrgency.append(lowSearchUrgency, normalSearchUrgency, highSearchUrgency)
    formSearchUrgency.append(selectSearchUrgency, searchLabelUrgency)
    
    const searchBtnDiv = document.createElement("div")
    searchBtnDiv.className = "input-field col s1"
    const searchBtn = document.createElement("button")
    searchBtn.className = "btn waves-effect waves-light searchBtn"
    searchBtn.type = "submit"
    searchBtn.name = "action"
    searchBtn.innerHTML = "Search"
    searchBtnDiv.append(searchBtn)
    
    const mainRow = document.querySelector(".mainrow")
    mainRow.append(formAutocomplete, statusForm, formSearchUrgency, searchBtnDiv)
    
    M.FormSelect.init(statusSelect)
    M.FormSelect.init(selectSearchUrgency)
}