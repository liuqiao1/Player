function prepareGallery(){
    //alert("prepareGallery");
    var photosContent = document.getElementById("content");
    if(!photosContent)return false;
    //alert(photosContent.nodeName);

    var uls=photosContent.getElementsByTagName("ul");

    if(!uls)return false;

    var imgBox = document.createElement("img");
    imgBox.setAttribute("id","imgBox");
    imgBox.setAttribute("src","images/placeholder.gif");
    imgBox.className="imgBox";

    var text=document.createTextNode("please choose a pictrue");
    var alt=document.createElement("h2");
    alt.setAttribute("id","alt");

    alt.appendChild(text);

    photosContent.appendChild(alt);
    photosContent.appendChild(imgBox);

    var imgLinks = uls[0].getElementsByTagName("li");
    //alert(imgLinks.length);

    for(var i=0;i<imgLinks.length;i++){
        imgLinks[i].onclick=showPic;
    }

}

function showPic(){
     //alert("showPic");
     //alert(this.nodeName);

     var img = this.firstChild;
     //alert(img.getAttribute("src"));

     if(!img)return false;

     
     var start = img.getAttribute("src").lastIndexOf("/")+1;
     var end = img.getAttribute("src").length;
     //alert(end);

     var imgSrc = "images/photos/thumbnail_"+img.getAttribute("src").substring(start,end);
     //alert(imgSrc);

     //var imgBox = document.createElement("img");
     //imgBox.setAttribute("src",imgSrc);

     //document.getElementById("content").appendChild(imgBox);
     
     //document.getElementById("alt").appendChild(test);
     document.getElementById("imgBox").setAttribute("src",imgSrc);
     document.getElementById("alt").lastChild.nodeValue=img.getAttribute("alt");
}

function preparePlaceholder(){

}

addLoadEvent(prepareGallery);