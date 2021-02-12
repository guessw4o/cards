//включаем модальные окна от материалайз
document.addEventListener("DOMContentLoaded", function () {
  const modal = new Modal();
  modal.render();
  modal.addElement(array);
  modal.renderVisitModal();
  visitFunc();
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});
