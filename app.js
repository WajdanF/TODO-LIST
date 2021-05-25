const addForm = document.querySelector(".add");
const todo = document.querySelector("#add");
const list = document.querySelector(".todos");
const searchForm = document.querySelector(".search");

storeData = (todo,type) => {
    let result = JSON.parse(localStorage.data);
    if (type){
    result.push(todo);
    }
    else{
        result = result.filter((i)=>{
            
            return !(i===todo);
        })
    }
    localStorage.data = JSON.stringify(result);
};
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
        storeData(todo,true);
    }
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        storeData(e.target.parentElement.textContent.trim(), false);
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

if (localStorage.length === 1) {
    localStorage.setItem("data", JSON.stringify([]));
} else {
    JSON.parse(localStorage.data).forEach((i) => {
        generalTemplate(i);
    });
    // result.forEach(i => {
    //     generalTemplate(i);
    // });
}
