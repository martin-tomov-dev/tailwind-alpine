import Alpine from 'alpinejs';

Alpine.data("form", form);
Alpine.start();

function form() {
      
return {
    firstName: '',
    lastName: '',
    destination: '',
    hand: '👋',
    name_disabled: true,
    dest_disabled: true,
    init() {
        this.firstName = sessionStorage.getItem("firstName");
        this.lastName = sessionStorage.getItem("lastName");
        if (this.firstName != '' && this.firstName != null && this.lastName != '' && this.lastName != null) {
            this.name_disabled = false;
        }
        if (this.destination != '' && this.dest_disabled != null) {
            this.dest_disabled = false;
        }
    },
    submit: function (event) {
        sessionStorage.setItem("firstName", this.firstName);
        sessionStorage.setItem("lastName", this.lastName);
    },
    change: function (event) {
        if (event.target.value == '') {
            event.target.parentElement.style.borderColor = 'red';
        }
        else {
            event.target.parentElement.style.borderColor = 'rgb(209 213 219)';
        }
        if (this.firstName != '' && this.lastName != '' && this.firstName != null && this.lastName != null) {
            this.name_disabled = false;
        }
        else {
            this.name_disabled = true;
        }
        if (this.destination != '' && this.destination != null) {
            this.dest_disabled = false;
        } else {
            this.dest_disabled = true;
        }
    }
};
}