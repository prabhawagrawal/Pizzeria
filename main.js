menu_list_array = ["Peppy Paneer Pizza", "Mexican Green Wave Pizza", "Indi Tandoori Paneer Pizza", "Margherita", "Double Cheese Margherita", "Farm House Pizaa", "Deluxe Veggie Pizza", "Veg Extravaganza Pizza", "CHEESE N CORN Pizza", "PANEER MAKHANI Pizza"];

function getmenu(){
    var htmldata = [];
    for(var i=0;i<menu_list_array.length;i++){
        htmldata.push(menu_list_array[i] + '<br>');
    }
    document.getElementById("display_menu").innerHTML = htmldata.join(" ");
}

function showPizza(){
    var htmldata = [];
    var item=document.getElementById("add_item").value;
    for(var i=0;i<menu_list_array.length;i++){
        htmldata.push(menu_list_array[i]+'<br>');
    }
        document.getElementById("display_addedmenu").innerHTML = htmldata;		
}

function add_toppings(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
