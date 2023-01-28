const elForm = document.querySelector("#form");
const plan = document.querySelector("#menu");
const error = document.querySelector("#error");
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let input = evt.target.todo;

  if (input.value === "") {
    error.style.display = "block";
    input.className += " border-danger";
    return;
  }
  error.style.display = "none";
  input.className = "form-control";
  const newPlan = document.createElement("li");
  newPlan.className = "list-group-item d-flex justify-content-between";

  newPlan.innerHTML = `<h3>${input.value}</h3>
    <div>
        <button class="btn btn-info text-white">Completed</button>
        <button class="btn btn-danger">Delete</button>
    </div>`;
  // evt.target.todo.value = '';
  elForm.reset();
  plan.appendChild(newPlan);
});
