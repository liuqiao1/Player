function initAbout(){
    // var JSBox=document.getElementById("JSBox");
    // var TDBox=document.getElementById("TDBox");
    // //var aboutList=document.getElementById("aboutList");
    // var jayLink=document.getElementById("jayLink");
    // var domsterLink=document.getElementById("domsterLink");

    // if(!JSBox || !TDBox || !jayLink || !domsterLink)return false;

    // JSBox.setAttribute("hidden","true");
    // //alert(JSBox.nodeName);
    // JSBox.style.display="none";
    // TDBox.style.display="none";

    // //alert(jayLink.lastChild.nodeValue);

    // jayLink.onclick=function(){//宝宝 这里是onclick  而不是cick
    //     alert("click");
    //     this.style.display="block";
    //     TDBox.style.display="none";
    // }

    // domsterLink.onclick=function(){//宝宝 这里是onclick  而不是cick
    //     //alert("click");
    //     JSBox.style.display="none";
    //     this.style.display="block";
    // }
    var content = document.getElementById("content");
    if(!content)return false;
    var uls=content.getElementsByTagName("ul");
    if(!uls)return false;

    var links=uls[0].getElementsByTagName("a");
    if(!links)return false;
    //alert(links.length);

    for(var i=0;i<links.length;i++){
        var sectionId=links[i].getAttribute("href").split("#")[1];
        links[i].destination=sectionId;
        //alert(sectionId);
        document.getElementById(sectionId).style.display="none";
        links[i].onclick=function(){
            //alert("click!");
            showBox(this.destination);//当然还是要传参的 毕竟这个函数没有被占有
        }
    }
}

function showBox(sectionId){

    //alert("当前要展示的："+sectionId);
    var sections= document.getElementsByTagName("section");
    if(!sections)return false;
    
    for(var i=0;i<sections.length;i++){
        var nowId=sections[i].getAttribute("id");
        //alert(nowId);
        if(sectionId == sections[i].getAttribute("id")){
            sections[i].style.display="block";
        }
        if(sectionId != sections[i].getAttribute("id")){
            sections[i].style.display="none";
        }
    }
    //alert("showBox");
}

addLoadEvent(initAbout);
// addLoadEvent(showBox);