var list = document.getElementById("list");
var input = document.getElementById("input");
var saveli = "";

function addtodo() {
  if (input.value.trim() === "") {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please enter a task!',
    });
    return;
  }

  var li = document.createElement('li');
  var litext = document.createTextNode(input.value);
  li.appendChild(litext);

  // Delete Button
  var deletebtn = document.createElement('button');
  deletebtn.innerText = "🗑️ Delete";
  deletebtn.className = "btn";
  deletebtn.onclick = function () { deleteItem(this) };

  // Edit Button
  var edtbtn = document.createElement('button');
  edtbtn.innerText = "✏️ Edit";
  edtbtn.className = "edibtn";
  edtbtn.onclick = function () { edititem(this) };

  li.appendChild(deletebtn);
  li.appendChild(edtbtn);

  list.appendChild(li);
  input.value = "";

  Swal.fire({
    icon: 'success',
    title: 'Added!',
    text: 'Your task has been added.',
    showConfirmButton: false,
    timer: 1500
  });
}

function deleteItem(btn) {
  btn.parentNode.remove();
  Swal.fire({
    icon: 'info',
    title: 'Deleted!',
    text: 'Task removed successfully.',
    showConfirmButton: false,
    timer: 1200
  });
}

function deleteall() {
  list.innerHTML = "";
  Swal.fire({
    icon: 'error',
    title: 'All Deleted!',
    text: 'All tasks have been removed.',
    showConfirmButton: false,
    timer: 1500
  });
}

function edititem(b) {
  var val = b.parentNode.firstChild.nodeValue;
  input.value = val;
  saveli = b.parentNode;

  document.getElementById("add").style.display = "none";
  document.getElementById("update").style.display = "inline-block";
}

function updatetodo() {
  if (input.value.trim() === "") {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please enter a task before updating!',
    });
    return;
  }

  saveli.firstChild.nodeValue = input.value;
  input.value = "";

  Swal.fire({
    icon: 'success',
    title: 'Updated!',
    text: 'Your task has been updated.',
    showConfirmButton: false,
    timer: 1500
  });

  document.getElementById("add").style.display = "inline-block";
  document.getElementById("update").style.display = "none";
}
