var strange = 1370;
var c = 3;
var arr = [];
var his = [];
function start() {
    if (strange <= 0) {
        strange = 1370
        var a = Math.random();
        var b = Math.round(a);
        document.getElementById("auto3").value = b
        document.getElementById("auto4").value = a
        document.getElementById("auto5").value = c++
    }
    if (strange >= 0) {
        document.getElementById("gorr").style.transition = "1ms"
        document.getElementById("gorr1").style.transition = "1ms"
    }
    if (document.getElementById("auto3").value == 1) {
        document.getElementById("gorr").style.top = "25%";
    }
    if (document.getElementById("auto3").value == 0) {
        document.getElementById("gorr").style.top = "40%";
    }
    document.getElementById("but").style.display = "none"
    document.getElementById("gorr").style.left = strange + "px"
    document.getElementById("auto2").value = strange
    if (c <= 12) {
        strange = strange - c;
    }
    else { strange = strange - 12 }
    var interval = setTimeout("start()", 1)
    if (document.getElementById("auto1").value == 0 && strange <= 80 && document.getElementById("auto3").value == 0) {
        document.getElementById("gameOver").style.display = "block";
        clearInterval(interval)
        var t = document.getElementById("body");
        t.onkeydown = ""
        var a = document.getElementById("scores");
        his.push(a.innerHTML);
        document.getElementById("auto6").value = his;
        document.getElementById("hist").innerHTML += a.innerHTML+",";
    }
    if (document.getElementById("auto1").value == 1 && strange <= 80 && document.getElementById("auto3").value == 1) {
        document.getElementById("gameOver").style.display = "block"
        clearInterval(interval)
        var t = document.getElementById("body");
        t.onkeydown = ""
        var a = document.getElementById("scores");
        his.push(a.innerHTML);
        document.getElementById("auto6").value = his;
        document.getElementById("hist").innerHTML += a.innerHTML+",";
    }
    document.getElementById("score").innerHTML = c - 3;
    document.getElementById("scores").innerHTML = document.getElementById("score").innerHTML;
    arr.push(document.getElementById("score").innerHTML)
    var t;
    arr.sort(function (a, b) { return b - a });
    t = arr;
    document.getElementById("highScore").innerHTML = t[0]
}
function ragnarok() {
    var move = 90;
    document.getElementById("info").style.display = "none"
    var auto1 = document.getElementById("auto1");
    var thor = document.getElementById("thor");
    if (auto1.value == 2) {
        auto1.value = "0";
        start()
        document.getElementById("q-high").style.display = "inline-block";
        document.getElementById("q-score").style.display = "inline-block";
    }
    if (auto1.value == "0") {
        thor.style.top = "25%"
        thor.style.transform += "rotate(" + move + "deg)"
        auto1.value = "1"

    }
    else if (auto1.value = "1") {
        thor.style.top = "40%"
        thor.style.transform += "rotate(" + move + "deg)"
        auto1.value = "0"
    }
}
function histor() {
    document.getElementById("hist").style.display = "inline-block";
    var a = document.getElementById("blur");

    a.style.filter = "blur(8px)";

    
}
function hide() {
    document.getElementById("hist").style.display = "none"
    var a = document.getElementById("blur");

    a.style.filter = "none";

}
function reload() {

    document.getElementById("gameOver").style.display = "none";
    strange = 1370;
    start()
    c = 3;
    var ko = document.getElementById("body");
    ko.setAttribute("onkeydown", "ragnarok()")

}
window.onbeforeunload = function (e) {
    e = e || window.event;
    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Sure?';
    }
    // For Safari
    return 'Sure?';
};
// console or side panel disable
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
}
// right click disable
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
}, false);