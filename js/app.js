// variables
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const subBtn = document.querySelector("#sub_btn");

// evenListeners
evenListeners();
function evenListeners() {
  // validate email
  email.addEventListener("blur", valiInputes);
  // validate password
  password.addEventListener("blur", valiInputes);
  // submition form
  subBtn.addEventListener("click", submition);
}

// functions
// validate feelds
function valiInputes(e) {
  // validating email
  if (e.target.name == "email") {
    let value = e.target.value;
    // must have an @ , and should not be first or last character , and must have just one of it
    if (
      value.includes("@gmail.") &&
      value.indexOf("@") !== 0 &&
      value.indexOf(".") !== value.length - 1 &&
      value.indexOf("@") !== value.length - 1 &&
      value.indexOf("@") === value.lastIndexOf("@")
    ) {
      // set grren border for tag
      e.target.style.borderColor = "green";
      // remove class of error
      e.target.classList.remove("error");
    } else {
      // set red border for tag
      e.target.style.borderColor = "red";
      // add class of error
      e.target.classList.add("error");
    }
    // validating password
  } else {
    let value = e.target.value;
    if (value.length >= 8) {
      // set grren border for tag
      e.target.style.borderColor = "green";
      // remove class of error
      e.target.classList.remove("error");
    } else {
      // set red border for tag
      e.target.style.borderColor = "red";
      // add class of error
      e.target.classList.add("error");
    }
  }

  if (email.value !== "" && password.value !== "") {
    // if inputes are ok , enable the submit btn
    if (document.querySelector(".error")) {
      // show error message
      showMessage("fill the all inputes correctly please!", "error_div");
    } else {
      subBtn.disabled = false;
    }
  }
}

// show message
function showMessage(message, className) {
  // crest div
  const div = document.createElement("div");
  // set error class
  div.classList = className;
  // set message
  div.appendChild(document.createTextNode(message));
  // show in page
  form.insertBefore(div, subBtn);
  // remove div after 2seconds
  setTimeout(() => {
    div.remove();
  }, 2000);
}

// when the form has submit
function submition(e) {
  e.preventDefault();
  // show spinner
  const spinner = document.querySelector("#spinner");
  console.log(spinner);
  spinner.style.display = "block";
  // hide spinner after 3 seconds
  setTimeout(() => {
    spinner.style.display = "none";
    // show thanks message
    showMessage("thanks to comming in our site", "success_div");
    // reloud page after 1.5seconds
    setTimeout(() => {
        location.reload();
    }, 1500);
  }, 3000);
}


// finshed