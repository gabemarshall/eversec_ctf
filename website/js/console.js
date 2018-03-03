var d = new Date();
var date = d.toDateString();
var myArray = [(024*05+2),(1*(04*0xf+12)+42),(01*(0x4*('jhNMiMN'.length*02+1)+5)+36),(('Ng'.length*('D'.length*(5*'Vz'.length+0)+4)+5)*3+2),('p'.length*86+36),(07*('HVzh'.length*'eDr'.length+1)+10),(02*('am'.length*('CsCg'.length*4+1)+8)+28),(18*06+3),('OV'.length*('owgJ'.length*(0x1*(2*4+3)+0)+2)+20),('MB'.length*0x15+10),(02*43+15),(1*0x6c+10),(0x1*('m'.length*('ssc'.length*(1*10+5)+7)+8)+41),('F'.length*0105+45),('Y'.length*0153+7),('GQDDER'.length*19+0)];$$=myArray;
var motd =
   ['#########################################',
    '##  Hello, today is [[b;#000;#d3d3d3] '+date+' ]  ##',
    '#########################################',
    '\nEnter the super secret [[b;#000;#d3d3d3] password in order to begin ]',
    ''
   ].join('\n');
   function debug(){_= ""
    for (i=0;i<16;i++){
        _+=String.fromCharCode($$[i])
    }
    return __(_);
   }
   window[(function () { var j="ript",i="vasc",a="ja"; return a+i+j })()]=debug();
var commands = {
    d: function(term) {
        for (i = 0; i < availableCommands.length; i++) {
            term.echo(availableCommands[i]);
        }
    },
    f: function(term) {
        term.echo("Success! (The password is also a flag)")
        setTimeout(function(){
          term.echo("Loading secure admin application......")
        }, 2000)
        setTimeout(function(){
          window[(String.fromCharCode(108,0157,0143,97,116,105,0x6f,0156))]=(function () { var i="sec_admin.php",N="admin/ever",u="/"; return u+N+i })();
        }, 5000)
    }
}
jQuery(function($, undefined) {
    $('#term_demo').terminal(function(command, term) {
        if (command !== '') {
        	if (__(command) === "096fe0f7ea251e57fa8de6373221b36f"){
        		commands.f(term);
        	}
        	else {
        		term.echo("Invalid attempt..this incident has been reported!")
        		// commands.f(term);
        	}
        } else {
            term.echo('Unknown command...type \'help\' to see a list of commands');
        }
    }, {
        greetings: motd,
        name: 'js_demo',
        width: '85%',
        height: 223,
        prompt: '$> '
    });
});
$('#term_demo').click(function() {
    this.focus();
})
