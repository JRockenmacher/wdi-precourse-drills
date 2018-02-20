var counter = 0;
    
        $(document).ready(function() {
    
            $("#clickMe").click(function(){
                counter++;
    
                $("#theCount").text(counter);
            });
    
        });