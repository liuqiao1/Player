function initLive(){
    //alert("initLive");
    var table=document.getElementById("tourTable");
    if(!table)return false;
    var trs = table.getElementsByTagName("tr");
    if(!trs)return false;
    //alert(trs.length);

    for(var i=1;i<trs.length;i++){
        if(i%2==0){
            trs[i].className="odd";
        }
    }
}

function showAbbrs(){
    //alert("showAbbrs");
    var abbrs = document.getElementsByTagName("abbr");
    if(!abbrs)return false;
    //alert(abbrs.length);
    var defs = new Array();
    // defs[0]="haha";
    // defs[1]="haha";
    // defs[2]="haha";

    // for(var i=0;i<defs.length;i++){
    //     alert(defs[i]);
    // }

    var dlist = document.createElement("dl");
    
    for(var i=0;i<abbrs.length;i++){

        var key = abbrs[i].lastChild.nodeValue;
        defs[key] = abbrs[i].getAttribute("title");
        //var dtText = 
        //document.createTextNode(abbrs[i].getAttribute("title")+"   "+abbrs[i].lastChild.nodeValue);
        //alert(dtText.nodeValue);
        //var dt = document.createElement("dt");
        
        //dl.appendChild(dt);
    }
    //alert(defs.length); 0 如果不是用数组作为下标 则length为0,下面这种遍历方式也不能用了哦
    for(var i=0;i<defs.length;i++){
        alert(defs[i]);
    }

    for (key in defs){
        //alert(defs[key]);
       var definition = key;
       var description = defs[key];

       var title_text = document.createTextNode(key);
       var title = document.createElement("dd");
       title.appendChild(title_text);

       var desc_text = document.createTextNode(description);
       var desc=document.createElement("dd");
       desc.appendChild(desc_text);

       desc.appendChild(title);
       dlist.appendChild(desc);

    }

    var titleText = document.createTextNode("Abbreviations");
    var p = document.createElement("p");
    p.style.fontSize=1.5+"em";
    p.appendChild(titleText);
  
    insertAfter(p,document.getElementById("tourTable"));
    insertAfter(dlist,p);
}

addLoadEvent(initLive);
addLoadEvent(showAbbrs);