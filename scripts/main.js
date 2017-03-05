// Global
addLoadEvent(hilightNav);

//设定页面一打开就要执行的函数
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
};

//如果写在一个函数里面，那么就一杆子打死了
function testEnviro(){
    //alert("testEnviro");
    var flag=true;
    if(!document.getElementById){
        //alert("not support!");
        flag=false;
    }
    return flag; 
};

//如果不是移动图片，而是一张张切换可以用这个
//其实可以把pics 当成参数传进来 实现抽象化
function changeNavPic(index){
    
    var pics=[];
    pics[0]="images/guitarist.gif";
    pics[1]="images/lineup.gif";
    pics[2]="images/basshead.gif";
    pics[3]="images/bassist.gif";
    pics[4]="images/drummer.gif";
  
    var picBox=document.getElementById("previewSingerImg");
    if(!picBox)return false;
    //alert(pics[index]);
    //var src=picBox.getAttribute("src");
    //alert("src:"+src);
    picBox.setAttribute("src",pics[index]);
};


function hilightNav(){
    hilight("li");
    hilight("b");
    //alert("hilightNav");
    /*if(!testEnviro())return false;
    var navList=document.getElementById("nav-list");
    if(!navList)return false;
    //alert(navList.nodeType);
    var navs=navList.getElementsByTagName("li");
    if(!navs)return false;
    for(var i=0;i<navs.length;i++){
        //alert(i);
        navs[i].onmouseover = function show(){//函数主体代码在定义之时不会被执行，调用时才会执行
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
            moveElement("previewSingerImg",-index*150,0,10);
        }
    }*/
};

function hilight(TagId){
    //alert("hilightNav");
    if(!testEnviro())return false;
    //var navList=document.getElementById("nav-list");
    //if(!navList)return false;
    //alert(navList.nodeType);
    var navs=document.getElementsByTagName(TagId);
    if(!navs)return false;
    for(var i=0;i<navs.length;i++){
        //alert(i);
        navs[i].onmouseover = function show(){//函数主体代码在定义之时不会被执行，调用时才会执行
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
            moveElement("previewSingerImg",-index*150,0,10);
        }
    }
};

function addClass(element,value){
    //alert(element+value)
    if(!element.className){
        //alert("addClass");
        element.className=value;
    }else{
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.newClassName = newClassName;
    }
};

//移除class怎么写？
function removeClass(element,value){
    if(!element.className)return false;

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

    return index;
};

function moveElement(Id,final_x,final_y,interval){
    //alert(Id);
    var element = document.getElementById(Id);
    if(!element)return false;

    if(element.movement)clearTimeout(element.movement);

    if(!element.style.left)element.style.left=0;
    if(!element.style.top)element.style.top=0;

    var pos_x = parseInt(element.style.left);//不能读外部CSS 必须要在标签里写style属性
    var pos_y = parseInt(element.style.top);//本来是0px 转数字会去掉px

    //alert(element.style.left);

    if(pos_x == final_x && pos_y == final_y)return false;

    if(pos_x<final_x){
        pos_x+=5;
    }
    if(pos_y<final_y){
        pos_y+=5
    }
    if(pos_x>final_x){
        pos_x-=5;
    }
    if(pos_y>final_y){
        pos_y-=5;
    }

    element.style.top=pos_y+"px";
    element.style.left=pos_x+"px";

    var func = "moveElement('"+Id+"',"+final_x+","+final_y+","+interval+")";
    //此坑！ Id 要加'', 在JS中参数没有指定类型 都当作object 那为什么不加''可以
    //打印出 object HTMLImageElement?

    //alert(func);
    element.movement = setTimeout(func,interval);//只运行了两次
    //等待interval毫秒后再执行func
    //如果要多次调用，请使用 setInterval() 或者让 code 自身再次调用 setTimeout()。
    //如果用内部变量movement记录 再次执行该方法，值就会丢掉。
    //用全局变量呢？在第一次执行该方法时,变量还没有设置就使用 会出错
    //setTimeout不允许多个并行吗？  有setTime队列是肿么回事
}
