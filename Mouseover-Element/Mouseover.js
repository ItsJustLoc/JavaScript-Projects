function balls() {
   alert("working");
}

// more robust onload for function
if(window.attachEvent) {
   window.attachEvent('onload', yourFunctionName);
} else {
   if(window.onload) {
       var curronload = window.onload;
       var newonload = function(evt) {
           curronload(evt);
           balls(evt);
       };
       window.onload = newonload;
   } else {
       window.onload = balls;
   }
}