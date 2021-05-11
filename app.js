const addForm = document.querySelector(".add");
const todo = document.querySelector("#add");
const list = document.querySelector(".todos");
const searchForm = document.querySelector(".search");

generalTemplate = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;
    list.innerHTML += html;
};
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); //trim removes white space before/after

    if (todo.length) {
        generalTemplate(todo);
        addForm.reset();
    }
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
});
searchForm.search.addEventListener("keyup", (e) => {
    e.preventDefault();
    searched = searchForm.search.value.trim();
    Array.from(list.children).forEach((item) => {
        if (
            searched.length &&
            item.textContent.toLowerCase().includes(searched.toLowerCase())
        ) {
            console.log(item.textContent);
        } else if (
            searched.length &&
            item.textContent.includes(searched) === false
        ) {
            item.classList.add("d-none");
        } else {
            item.classList.remove("d-none");
        }
    });
});
