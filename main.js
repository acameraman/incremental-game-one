var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

	cookieClick(cursors);

}, 1000);

var save = {
    cookies: cookies,;
    cursors: cursors,;
    prestige: prestige;
};

localStorage.setItem("save",JSON.stringify(save));

var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;

//localStorage.removeItem("save") put into button to delete save

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

//And you use it by calling it whenever you need to present a number to the player - for example:
document.getElementById('cookies').innerHTML = prettify(cookies);
