$(document).ready(function () {

        var myRules =
            {
                salary:{
                    required: true,
                    min: 0,
                    max: 2000000,
                    digits: true
                },
                creditScore:{
                    required: true,
                    min: 0,
                    max: 850,
                    digits: true
                },
                months:{
                    required: true,
                    digits: true
                }
            };

        //messages
        var myMessages =
            {
                salary:{
                    required: "This field must be filled",
                    max: "Enter a number under 2000000",
                    digits: "Please enter a number"
                },
                creditScore:{
                    required: "This field must be filled",
                    max: 'Please enter a number under 850',
                    digits: "Please enter a number"
                },
                months:{
                    required: "This field must be filled",
                    digits: "Please enter a number"
                }
            };

        //form handler
        $("form").validate(
            {
                submitHandler: checkLoan,
                rules: myRules,
                messages: myMessages
            }
        );

        function checkLoan(){
            $("#output").text("hello");
        }

        function checkLoan(){
            event.preventDefault();

            var salary = $("#salary").val();
            var cScore = $("#creditScore").val();
            var employment = $("#months").val();

            //check if loan is approved/denied
            var loanState = "";

            if(salary >= 40000){
                if(cScore >= 600){
                    loanState = "Approved";
                }
                if(cScore < 600){
                    if(employment > 12){
                        loanState = "Approved";
                    }
                    if(employment <= 12){
                        loanState = "Denied";
                    }
                }
            }
            else{
                if(cScore >= 600){
                    if(employment > 12){
                        loanState = "Approved";
                    }
                    if(employment <= 12){
                        loanState = "Denied";
                    }
                }
                if(cScore < 600){
                    loanState = "Denied"
                }
            }

            if(loanState == "Approved"){
                $("#output").text("Your loan has been: " + loanState);
                $("#output").css("color", "green");
            }
            else{
                $("#output").text("Your loan has been: " + loanState);
                $("#output").css("color", "red");
            }

        }
    }
)