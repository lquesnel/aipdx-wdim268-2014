// JavaScript Document

 $(function() {
            var colors = ["#F2385A","#F5A503","#8ab25f","#E9F1DF","#4AD9D9","#36B1BF"];
             
            setInterval(function() { 
                var body_col = Math.floor(Math.random() * colors.length);
                var selectedcolor = colors[body_col];
                $("body").css("background",selectedcolor);
            }, 2000);
        })