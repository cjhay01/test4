function f(){
    let val = $("#range").val();
    $("#slider-text").text(Number(val).toLocaleString());
}
$("#clickable").on('click', () => {
    //$("#clickable").append("a");
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        $(".img-src").attr("src", http.responseText.replace(/"|\[|\]/g, ""));

      }
    }
    http.open("GET", "https://shibe.online/api/cats?count=1&urls=true", true)
    http.send()
  });
function g() {
    party.confetti(document.body, {
        count: 60,
        shapes: ["cbc"],
        size: 0.6,
        gravity: 400
    });
}