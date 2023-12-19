function toggleDark() {
    $("p[class!='dm-toggle-text'], h1, h2, h3, h4, h5, h6, li, a, .toc").toggleClass("dm");
    $("body").toggleClass("dm");
	if ($("body").hasClass("dm")) {
        $(".topnav .darkmode .dm-toggle-text, .topnav.responsive .darkmode .dm-toggle-text").text("Toggle light mode");
        $(".dm-icon").removeClass("fa-moon");
        $(".dm-icon").addClass("fa-sun");
		localStorage.setItem("dm", true);
    } else {
        $(".topnav .darkmode .dm-toggle-text, .topnav.responsive .darkmode .dm-toggle-text").text("Toggle dark mode");
        $(".dm-icon").addClass("fa-moon");
        $(".dm-icon").removeClass("fa-sun");
		localStorage.setItem("dm", "");
    }
}
$(document).ready(() => {
	if (localStorage.getItem("dm")) {
		$("p[class!='dm-toggle-text'], h1, h2, h3, h4, h5, h6, li, a, .toc").addClass("dm");
		$("body").addClass("dm");
		$(".topnav .darkmode .dm-toggle-text, .topnav.responsive .darkmode .dm-toggle-text").text("Toggle light mode");
        $(".dm-icon").removeClass("fa-moon");
        $(".dm-icon").addClass("fa-sun");
	} else {
		$("p[class!='dm-toggle-text'], h1, h2, h3, h4, h5, h6, li, a, .toc").removeClass("dm");
		$("body").removeClass("dm");
		}
})