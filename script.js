const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

var selectedRow = null;

function OnFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else onEdit(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["Loct-Pick-up"] = document.getElementById("Loct-Pick-up").value;
  formData["pick-up-date"] = document.getElementById("pick-up-date").value;
  formData["pick-up-time"] = document.getElementById("pick-up-time").value;
  formData["drop-off-date"] = document.getElementById("drop-off-date").value;
  formData["drop-off-time"] = document.getElementById("drop-off-time").value;
  formData["1"] = document.getElementById("1").value;
}

function onEdit(td) {
  var table = document.getElementById("main").getElementsByTagName("body")[0];
  selectedRow = td.parentElement.parentElement;
  document.getElementById("Loct-Pick-up").value = selectedRow.cells[0].innerHTML;
  document.getElementById("pick-up-date").value = selectedRow.cells[1].innerHTML;
  document.getElementById("pick-up-time").value = selectedRow.cells[2].innerHTML;
  document.getElementById("drop-off-date").value = selectedRow.cells[3].innerHTML;
  document.getElementById("drop-off-time").value = selectedRow.cells[3].innerHTML;
}
