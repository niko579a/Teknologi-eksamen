function generateInputs(form, input) {
    x = input.value;
    for (y = 0; x > y; y++) {
      var element = document.createElement('input');
      element.type = "text";
      element.placeholder = "New Input";
      form.appendChild(element);
    }
  }
