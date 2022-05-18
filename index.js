import Alpine from 'alpinejs';

Alpine.data("form", form);
Alpine.start();

function form() {
      
return {
    firstName: '',
    lastName: '',
    hand: '👋',
    init() {
        this.firstName = sessionStorage.getItem("firstName");
        this.lastName = sessionStorage.getItem("lastName");
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
    }
};
}