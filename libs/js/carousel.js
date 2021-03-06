function toggleSlide(direction) {   // if true  go to the next slide if false goto the previous slide
    var  elements   = document.getElementsByTagName("article");
    var visibleID   = getVisible(elements);
    elements[visibleID].style.display  =   'none';

    if (!direction) {
        var makeVisible =   prev(visibleID, elements.length);
    } else {
        var makeVisible =   next(visibleID, elements.length);
    }
    elements[makeVisible].style.display ="block";
}
 function getVisible(elements) {
     var visibleID  = -1;
     for(var i=0; i<elements.length; i++)    {
         if(elements[i].style.display == "block")   {
             visibleID  = i;
         }
     }
     return visibleID;
 }

function prev(num, arrayLength) {
    if(num === 0)    return 0;
    else return ((num - 1));
}


function next(num, arrayLength) {
    if(num === arrayLength-1) return arrayLength-1;
    else return num + 1;
}
