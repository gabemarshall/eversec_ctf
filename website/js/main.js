
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getParam(param) {
    param = param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var r = new RegExp("[\\?&]" + param + "=([^&#]*)"),
    results = r.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Weak Corp Broadcast Messaging
setInterval(function(){
  try{
    $.ajax({
    type: "GET",
    url: "/rest/msgs/5",
    dataType: "application/xml"
    });
  } catch (err){

  }
}, 10000);
