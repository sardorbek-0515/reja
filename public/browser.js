console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("./create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling");
    });
});

document.addEventListener("click", function (e) {
  // delete bilan ishlaymiz
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    // alert("siz delete tugmasini bostingiz");
    // if (confirm("Aniq o'chirmoqchimisiz?")) {
    //   alert("Ha deb javob berildi");
    // } else {
    //   alert("Yo'q deb javob berildi");
    // }
    // console.groupCollapsed(e.target);
   
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((respose) => {
          console.log(respose.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qiling");
        });
    }
  }

  // edit bilan ishlaymiz
  if (e.target.classList.contains("edit-me")) {
    alert("siz edit tugmasini bostingiz");
  }
});