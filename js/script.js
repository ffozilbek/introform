const jsInputs = document.querySelectorAll(".js-input"),
    form = document.querySelector(".form");



    if(form) {
        form.addEventListener("submit", (e)=> {
            jsInputs.forEach(input => {
                if(input.classList.contains("mail-input")) {
                    if(!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
                        input.classList.add("valid");
                        input.nextElementSibling.classList.add("valid");
                        e.preventDefault();
                    } else {
                        input.classList.remove("valid");
                        input.nextElementSibling.classList.remove("valid");
                    }
                }

                if(input.value == "" || input.value == null) {
                    input.classList.add("valid");
                    input.nextElementSibling.classList.add("valid");
                    e.preventDefault();
                } else {
                    input.classList.remove("valid");
                    input.nextElementSibling.classList.remove("valid");
                }
            })
        })
    }