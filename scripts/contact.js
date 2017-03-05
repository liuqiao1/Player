function focus(){
    //alert("validateContact");
    // var inputs = document.getElementsByTagName("input");
    // if(inputs.length<1)return false;

    // alert(inputs.length);

   var labels = document.getElementsByTagName("label");
   if(labels.length<1)return false;

   for(var i=0;i<labels.length;i++){
       var id = labels[i].getAttribute("for");
       if(!id) continue;
       var destination = document.getElementById(id);
       labels[i].onclick = function(){
           destination.focus();
       }
   }

}

function clearForm(whichForm){
    
    for(var i=0;i<whichForm.elements.length;i++){
        //alert(whichForm.elements[i].nodeName);
        var placeholder = whichForm.elements[i].getAttribute("placeholder");
        if(!placeholder) continue;

        whichForm.elements[i].onfocus=function(){
            //alert(this.value); 这一句有点死循环的意思 弹出之后还是聚焦在此框，再次触发事件
            if(this.value == this.getAttribute("placeholder")){
                this.value = "";
            }
        }

        whichForm.elements[i].onblur=function(){
            if(this.value==""){
                this.value=this.getAttribute("placeholder");
            }  
        }
        
    }

}

function validate(whichForm){
   // alert("validate");
     for(var i=0;i<whichForm.elements.length;i++){
         if(whichForm.elements[i].getAttribute("required")) {
             return isFilled(whichForm.elements[i]); 
         }
         if(whichForm.elements[i].getAttribute("type") == "email"){
             return isEmail(whichForm.elements[i]);
         }
         //alert(whichForm.elements[i].getAttribute("required"));
        
     }
}

function isFilled(field){
    if(field.value == "" || field.value == field.defaultValue){
        return false;
    }
    else return true;
}

function isEmail(field){
    if(field.value.indexof('@')==-1 || field.value.indexof('.') == -1){
        return false;
    }
    else return true;
}

function prepareForm(){
    for(var i=0;i<document.forms.length;i++){
        var thisForm = document.forms[i];
        clearForm(thisForm);

        thisForm.onsubmit = function(){
            return validate(thisForm);
        }
    }

    //clearForm(document.getElementById("contactForm"))
    //validate(document.getElementById("contactForm"));
}

addLoadEvent(focus);
addLoadEvent(prepareForm);