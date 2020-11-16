var text = ["Hola!", "Bonjour!", "Merhaba!", "Olá!", "여보세요!", "Hello!"];
var counter = 0;
var elem = $("#greeting");
setInterval(change, 1500);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}