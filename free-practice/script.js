// Event handling
document.addEventListener("DOMContentLoaded",
	function(event) {

		//Unobstrusive event binding
		document.querySelector("#boton2")
		.addEventListener("click", function() {

		// Call server to get the name
		$ajaxUtils
			.sendGetRequest("/data/datos.json",
				function (res) {
					var message = res.firstName + " " + res.lastName + " tiene " + res.edad + " años";
					document.querySelector("#resultado2")
					.innerHTML = "<h2>" + message + "</h2>";
					console.log(message);
				});

			
		});
	}
	);