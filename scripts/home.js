function prepareSlideShow(){
    //alert("prepareSlideShow");
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("intro"))return false;

    var links=document.getElementsByTagName("a");
    var intro=document.getElementById("intro");
    var slideShow=document.createElement("div");
    slideShow.setAttribute("id","slideShow");

    var preview=document.createElement("img");
    preview.setAttribute("src","images/slideshow.gif");
    preview.setAttribute("alt","preciew pic");
    preview.setAttribute("id","preview");
    preview.style.position="absolute";
    // preview.setAttribute("position","absolute");

    var frame = document.createElement("img");
    frame.setAttribute("src","images/frame.gif");
    frame.setAttribute("alt","");
    frame.setAttribute("id","frame");
    slideShow.appendChild(frame);

    slideShow.appendChild(preview);
    insertAfter(slideShow,intro);

    for(var i=0;i<links.length;i++){
        links[i].onmouseover = function(){
            //alert("onmouseover");
            var destination = this.getAttribute("href");
            if(destination.indexOf("index.html")!=-1){
                moveElement("preview",0,0,5);
            }
            if(destination.indexOf("about.html")!=-1){
                moveElement("preview",-150,0,5);
            }
            if(destination.indexOf("photos.html")!=-1){
                moveElement("preview",-300,0,5);
            }
            if(destination.indexOf("live.html")!=-1){
                moveElement("preview",-450,0,5);
            }
            if(destination.indexOf("contact.html")!=-1){
                moveElement("preview",-600,0,5);
            }
        }
    }

    //moveWithTag("li");
}

function test(){
    alert("test");
};

function moveWithTag(TagId){
    //alert("hilightNav");
    //alert(TagId);
    //var navList=document.getElementById("nav-list");
    //if(!navList)return false;
    //alert(navList.nodeType);
    var navs=document.getElementsByTagName(TagId);
    //if(!navs)return false;
    for(var i=0;i<navs.length;i++){
        //alert(i);
        navs[i].onmouseover = function(){//函数主体代码在定义之时不会被执行，调用时才会执行
            //alert(this.nodeName);//5
           // alert(this.parentNode.nodeName);
            var index = getElemIndex(this);
            //index//xalert(index);
            //alert(parseInt(i));//"NaN" 全局属性 指示某个值是不是数字值。
            //addClass(this,"current-li");
            //changeNavPic(i); 
            //alert(pics[i]);
            //picBox.setAttribute("src",pic[index]);
            //changeNavPic(index);
            moveElement("preview",-index*150,0,10);
        }
    }
};

//看element是parent的第几个孩子
function getElemIndex(element){
    var index=-1;
    //alert(element.nodeName);
    var parent=element.parentNode;
    if(!parent)return false;
    //alert(parent.nodeName)

    var kids = parent.children;//parentObj.children：获取已知节点的直接子节点数组。
    //alert(kids.length);

    for(var i=0;i<kids.length;i++){
        if(element.nodeName == kids[i].nodeName){
            //alert("Yes!");
            if(element == kids[i]){
                //alert(i);
                index=i;
            }
        }
    }
    //alert(index);
    return index;
};
addLoadEvent(prepareSlideShow);


