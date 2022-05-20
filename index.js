import Alpine from 'alpinejs'; 
import 'tw-elements';

Alpine.data("form", form);
Alpine.start();

function form() {
      
    return {
        firstName: '',
        lastName: '',
        destination: '',
        hand: '👋',
        start_date: '',
        end_date: '',
        travel_num: '',
        birth_month: null,
        birth_date: null,
        birth_year: null,
        email: '',
        street: '',
        apt: '',
        city: '',
        zipcode: '',
        state: '',

        name_disabled: true,
        dest_disabled: true,
        date_disabled: true,
        travel_disabled: false,
        person_disabled: true,
        residence_disabled: true,
        residence_next_disabled: true,
        

        init() {
            this.firstName = sessionStorage.getItem("firstName");
            this.lastName = sessionStorage.getItem("lastName");
            this.destination = sessionStorage.getItem("destination");
            this.start_date = sessionStorage.getItem("start_date");
            this.end_date = sessionStorage.getItem("end_date");
            this.travel_num = sessionStorage.getItem("travel_num");
            if (sessionStorage.getItem("email") != 'null') {
                this.email = sessionStorage.getItem("email");
            }
            if (sessionStorage.getItem("birth_month") != 'null') {
                this.birth_month = sessionStorage.getItem("birth_month");
            }
            if (sessionStorage.getItem("birth_date") != 'null') {
                this.birth_date = sessionStorage.getItem("birth_date");
            }
            if (sessionStorage.getItem("birth_year") != 'null') {
                this.birth_year = sessionStorage.getItem("birth_year");
            }
            if (sessionStorage.getItem("city") != 'null') {
                this.city = sessionStorage.getItem("city");
            }
            if (sessionStorage.getItem("state") != 'null') {
                this.state = sessionStorage.getItem("state");
            }
            if (sessionStorage.getItem("zipcode") != 'null') {
                this.zipcode = sessionStorage.getItem("zipcode");
            }
            if (sessionStorage.getItem("street") != 'null') {
                this.street = sessionStorage.getItem("street");
            }
            if (sessionStorage.getItem("apt") != 'null') {
                this.apt = sessionStorage.getItem("apt");
            }
            if (this.firstName != '' && this.firstName != null && this.lastName != '' && this.lastName != null) {
                this.name_disabled = false;
            }
            // if (this.destination != '' && this.dest_disabled != null) {
            //     this.dest_disabled = false;
            // }
            // if (this.street != '' && this.street != null && this.apt != '' && this.apt != null) {
            //     this.residence_disabled = false;
            // }
            // if (this.email != '' && this.email != null && this.birth_date != '' && this.birth_date != null && this.birth_month != '' && this.birth_month != null && this.birth_year != '' && this.birth_year != null) {
            //     this.person_disabled = false;
            // }
            // if (this.street != '' && this.street != null && this.apt != '' && this.apt != null && this.city != '' && this.city != null && this.state != '' && this.state != null && this.zipcode != '' && this.zipcode != null) {
            //     this.residence_next_disabled = false;
            // }
        },
        submit: function (event) {
            sessionStorage.setItem("firstName", this.firstName);
            sessionStorage.setItem("lastName", this.lastName);
            sessionStorage.setItem("birth_month", this.birth_month);
            sessionStorage.setItem("birth_date", this.birth_date);
            sessionStorage.setItem("birth_year", this.birth_year);
            sessionStorage.setItem("email", this.email);
            sessionStorage.setItem("street", this.street);
            sessionStorage.setItem("apt", this.apt);
            sessionStorage.setItem("city", this.city);
            sessionStorage.setItem("zipcode", this.zipcode);
            sessionStorage.setItem("state", this.state);
            sessionStorage.setItem("travel_num", this.travel_num);
        },
        change: function (event) {
            if (event.target.value == '') {
                event.target.style.borderColor = 'red';
            }
            else {
                event.target.style.borderColor = 'rgb(209 213 219)';
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
            if (this.email != '' && this.email != null && this.birth_date != '' && this.birth_date != null && this.birth_month != '' && this.birth_month != null && this.birth_year != '' && this.birth_year != null) {
                this.person_disabled = false;
            }
            else {
                this.person_disabled = true;
            }
            if (this.street != '' && this.street != null && this.apt != '' && this.apt != null) {
                this.residence_disabled = false;
            } else {
                this.residence_disabled = true;
            }
            if (this.street != '' && this.street != null && this.apt != '' && this.apt != null && this.state != '' && this.state != null && this.city != '' && this.city != null && this.zipcode != '' && this.zipcode != null) {
                this.residence_next_disabled = false;
            } else {
                this.residence_next_disabled = true;
            }
        },
        datefocusin: function (event) {
            if (!document.getElementsByClassName('lightpick')[0]) {
                new Lightpick({
                    field: document.getElementById('demo'),
                    singleDate: false,
                    numberOfMonths: window.innerWidth > 610? 2 : 1,
                    onSelect: function(start, end){
                        if (start != null) {
                            let date = new Date(start._d);
                            let new_format_date = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
                            document.getElementById('fromdate').value = new_format_date;
                            this.start_date = new_format_date;
                            sessionStorage.setItem("start_date", new_format_date);
                        }
                        if (end != null) {
                            let date = new Date(end._d);
                            let new_format_date = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
                            document.getElementById('untildate').value = new_format_date;
                            this.end_date = new_format_date;
                            sessionStorage.setItem("end_date", new_format_date);
                            this.date_disabled = false;
                            // console.log(document.getElementById('date_button').disabled)
                            document.getElementById('date_button').disabled = false;
                            document.getElementById('date_button').style.opacity = 1;
                        }
                    }
                });
            }
            document.getElementById('demo').click();
        },
        datefocusout: function (event) {
            if (document.getElementsByClassName('lightpick')[0]) {
                document.getElementsByClassName('lightpick')[0].remove();
            }
            if (event.target.value == '') {
                event.target.style.borderColor = 'red';
            }
            else {
                event.target.style.borderColor = 'rgb(209 213 219)';
            }
        },
        
    };
}

