$( document ). ready(function(){
    window.addEventListener("scroll",function(){
        var header = this.document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0); 
    })

    $("hr").remove();
    $("legend").remove();
    $(".desc").remove();
    $(".footerdesc").remove();

    $('#fill').validate({
        rules:{
            //String Input minimum length of 5 and maximum length of 10
            userName:{
                required: true,
                minlength: 3,
                maxlength: 30
            },
            userEmail:{
                required: true,
                email: true,
            },
            userMessage:{
                required: true,
            }
        },
        messages: {
            username:"Please enter the date in the format MM/DD/YYYY "
        }
    });
});