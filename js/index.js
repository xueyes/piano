function propo() {
    document.body.style.overflow = "hidden";
    var getW = document.body.clientWidth,
        getH = window.innerHeight;
    var getScaleW = getW / 756,
        getScaleH = getH / 960;
    var getCon = document.getElementById("container");
    getCon.style.transform = "scale(" + getScaleW + "," + getScaleH + ")";
    getCon.style.transformOrigin = "0 0"
}

function getAction(_getLi, _UD) {
    if (!_getLi) {
        var getEvent = window.event || arguments.callee.caller.arguments[0];
        _getLi = getEvent.target || getEvent.srcElement
    }
    if (_UD) {
        $(_getLi).addClass("down");
        var getAudio = $(_getLi).find("audio")[0];
        if (getAudio.currentTime) { getAudio.currentTime = 0 }
        getAudio.play()
    } else { $(_getLi).removeClass("down") }
}

function isPC() { var userAgentInfo = navigator.userAgent; var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]; var flag = true; for (var v = 0; v < Agents.length; v++) { if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break } } return flag }

function getKeyboard(_UD) {
    var event = window.event || arguments.callee.caller.arguments[0],
        getKey = event.keyCode;
    var getLow = $("ul.low li"),
        getMiddle = $("ul.middle li"),
        getHigh = $("ul.high li"),
        getLi;
    if (getKey == 81) { getLi = getLow.get(0) } else { if (getKey == 87) { getLi = getLow.get(1) } else { if (getKey == 69) { getLi = getLow.get(2) } else { if (getKey == 82) { getLi = getLow.get(3) } else { if (getKey == 84) { getLi = getLow.get(4) } else { if (getKey == 89) { getLi = getLow.get(5) } else { if (getKey == 85) { getLi = getLow.get(6) } else { if (getKey == 65) { getLi = getMiddle.get(0) } else { if (getKey == 83) { getLi = getMiddle.get(1) } else { if (getKey == 68) { getLi = getMiddle.get(2) } else { if (getKey == 70) { getLi = getMiddle.get(3) } else { if (getKey == 71) { getLi = getMiddle.get(4) } else { if (getKey == 72) { getLi = getMiddle.get(5) } else { if (getKey == 74) { getLi = getMiddle.get(6) } else { if (getKey == 90) { getLi = getHigh.get(0) } else { if (getKey == 88) { getLi = getHigh.get(1) } else { if (getKey == 67) { getLi = getHigh.get(2) } else { if (getKey == 86) { getLi = getHigh.get(3) } else { if (getKey == 66) { getLi = getHigh.get(4) } else { if (getKey == 78) { getLi = getHigh.get(5) } else { if (getKey == 77) { getLi = getHigh.get(6) } else { return false } } } } } } } } } } } } } } } } } } } } }
    if (_UD) { getAction(getLi, _UD) } else { getAction(getLi, _UD) }
}
$(document).ready(function() {
    propo();
    document.onkeydown = function() { getKeyboard(true) };
    document.onkeyup = function() { getKeyboard(false) };
    if (isPC()) {
        $(".key li").on("mousedown", function() { getAction("", true) });
        $(".key li").on("mouseup", function() { getAction("", false) })
    } else {
        $(".key li").on("touchstart", function() { getAction("", true) });
        $(".key li").on("touchend", function() { getAction("", false) })
    }
});