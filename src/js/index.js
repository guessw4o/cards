//включаем модальные окна от материалайз
document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
});

document.addEventListener('DOMContentLoaded', function () {
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});