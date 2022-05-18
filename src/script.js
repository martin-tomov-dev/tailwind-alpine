function form() {
    return {
        inputElements: [],
        init() {
        //Set up custom Iodine rules
        
        },
        
        updateErrorMessages: function () {
        
        },
        getErrorMessage: function (ele) {
        
        },
        submit: function (event) {
        
        },
        change: function (event) {
        console.log(event.target.value);
        console.log(event.target.style)
        event.target.style.borderColor = 'red';
        }
    };
}