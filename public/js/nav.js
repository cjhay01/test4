function func() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
	if ($("#menu-icon").hasClass("fa-bars")) {
		$(".menu-icon").removeClass("fa-bars");
		$(".menu-icon").addClass("fa-xmark");
	} else {
		$(".menu-icon").removeClass("fa-xmark");
		$(".menu-icon").addClass("fa-bars");
	}
  }
  