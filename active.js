
    var menu_list = document.getElementById("menu_list");
    menu_list.style.maxHeight = "0px";
    function togglemenu(){
      if(menu_list.style.maxHeight == "0px")
        {
          menu_list.style.maxHeight = "130px";
        }
      else
        {
          menu_list.style.maxHeight = "0px";
        }
    }
