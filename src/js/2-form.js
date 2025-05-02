const formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', event => {
    const { name, value } = event.target;

    if (name in formData) {
        formData[name] = value.trim();
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }
})

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem("feedback-form-state");

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    document.querySelector('[name="email"]').value = formData.email;
    document.querySelector('[name="message"]').value = formData.message;
  }
});

console.log(localStorage.getItem("feedback-form-state"));


form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
  } else {
      console.log("Form submitted with data:", formData);
      
    localStorage.removeItem("feedback-form-state");

    formData.email = "";
    formData.message = "";

    form.querySelector('[name="email"]').value = "";
    form.querySelector('[name="message"]').value = "";
  }
});

