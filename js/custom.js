function estimate() {
            var service = document.getElementById("service");
            var selectedService = service.options[service.selectedIndex].value;
            var words = document.getElementById("words").value;
            var form1 = document.getElementById("form1");
            var qty = document.getElementById("qty").value;
            var cost = 0;
            if (selectedService == 3 || selectedService == 5 || selectedService == 6 || selectedService == 9 || selectedService == 10 || selectedService == 12 || selectedService == 13 || selectedService == 14 || selectedService == 15 || selectedService == 16 || selectedService == 17 || selectedService == 18 || selectedService == 19 || selectedService == 20 || selectedService == 22) {
                cost = 0.04 * words;
                document.getElementById("cost").innerHTML = "<br> Total Amount for your Content Requirement is $" + cost + "<br><b class='big'><br>Get in Touch With Us </b>" + "<br> Fill this form and schedule a call with our content specialist</br>";
                document.getElementById('form1').style.display = '';
            } else if (selectedService == 1 || selectedService == 11) {
                cost = 0.02 * words;
                 document.getElementById("cost").innerHTML = "<br> Total Amount for your Content Requirement is $" + cost + "<br><b class='big'><br>Get in Touch With Us </b>" + "<br> Fill this form and schedule a call with our content specialist";
                document.getElementById('form1').style.display = '';
            } else if (selectedService == 2) {
                cost = 0.025 * words;
                 document.getElementById("cost").innerHTML = "<br> Total Amount for your Content Requirement is $" + cost + "<br> <b class='big'><br>Get in Touch With Us </b>" + "<br> Fill this form and schedule a call with our content specialist";
                document.getElementById('form1').style.display = '';
            } else if (selectedService == 4) {
                cost = 3 * qty;
                 document.getElementById("cost").innerHTML = "<br> Total Amount for your Content Requirement is $" + cost + "<br><b class='big'><br>Get in Touch With Us </b>" + "<br> Fill this form and schedule a call with our content specialist";
                document.getElementById('form1').style.display = '';
            } else if (selectedService == 7) {
                cost = 60 * qty;
                 document.getElementById("cost").innerHTML = "<br> Total Amount for your Content Requirement is $" + cost + "<br><b class='big'><br>Get in Touch With Us </b>" + "<br> Fill this form and schedule a call with our content specialist";
                document.getElementById('form1').style.display = '';
            } else if (selectedService == 8) {
                cost = 12 * qty;
                 document.getElementById("cost").innerHTML = "<br> Total Amount for your Content Requirement is $" + cost + "<br><b class='big'><br>Get in Touch With Us </b>" + "<br> Fill this form and schedule a call with our content specialist";
                document.getElementById('form1').style.display = '';
            }
        }
        function changeStatus() {
            var status = document.getElementById("service").value;
            if (status == "1" || status == "2" || status == "3" || status == "5" || status == "6" || status == "9" || status == "10" || status == "11" || status == "12" || status == "13" || status == "14" || status == "15" || status == "16" || status == "17" || status == "18" || status == "19" || status == "20" || status == "21" || status == "22") {
                document.getElementById("wordss").style.display = '';
            } else {
                document.getElementById("wordss").style.display = 'none';
            }
            if (status == "4" || status == "7" || status == "8") {
                document.getElementById("qtyn").style.display = '';
            } else {
                document.getElementById("qtyn").style.display = 'none';
            }
        }
function validateandsend() {
 var service = document.getElementById("service");
	var zone = document.getElementById("zone");
	var selectedZone = zone.options[zone.selectedIndex].value;
	var selectedService = service.options[service.selectedIndex].value;
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var mytime = document.getElementById("mytime").value;
    var data = {
        name: name,
        email: email,
        phone:phone,
		mytime:mytime,
		zone: selectedZone,
		service: selectedService
    };
	$.ajax({
		url: 'https://content-whale.com/submit1.php',
        type: 'POST',
        dataType: 'json',
        data: data,
        cache: false,
        success: function() {
            
            window.location.href = 'https://content-whale.com/thankyou';
        },
         error: function (error) { alert("Error"); 
        }
    });
   
    return false;
   
}
