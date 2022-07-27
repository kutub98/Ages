function age(){
    var daysNumber =[01, 02]
    var dI = document.getElementById("date").value;
    var mI = document.getElementById("month").value;
    var yI= document.getElementById("year").value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1+ date.getMonth();
    var y2 =date.getFullYear();

    var months =[31, 28, 31, 30, 31, 30, 31, 31, 30,31, 30, 31 ];

    if (dI > d2){
        d2 = d2 + months[m2 -1];
        m2 = m2 -1;
    }
    if
       ( mI > m2){
        m2 = m2 + 12;
        y2 = y2 -1;
       }
    var d = d2 - dI;
    var m = m2 - mI;
    var y = y2 - yI;
    document.getElementById("age").innerHTML = "your age is " + y + " years " + m + "month " + d + "days";
   }
   function reset(){
    
    document.getElementById("age").innerHTML =" ";
   }