//if(window.addEventListener)
//{
    //window.addEventListener("load",function(){
           //var scripts=document.getElementsByTagName("script");

           //for(var i=0;i<scripts.length;i++){
                //if(scripts[i].type=="application/processing"){
                //var src=scripts[i].src,canvas = scripts[i].nextSibling;
                //if(src&&src.indexOf("#")){
                    //canvas=document.getElementById(src.substr(src.indexOf("#")+1));
                //}
                //else{
                    //while(canvas&&canvas.nodeName.toUpperCase()!="CANVAS")
                        //canvas=canvas.nextSibling;
                //}
                //if(canvas){
                    //Processing(canvas,scripts[i].text);
                //}
            //}
       //}
   //},false);
//}

var ajax = function ajax(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT");
    xhr.send(null);
    // failed request?
    if (xhr.status !== 200 && xhr.status !== 0) { throw ("XMLHttpRequest failed, status code " + xhr.status); }
    return xhr.responseText;
};


// Automatic Initialization Method
  var init = function() {
    var canvas = document.getElementsByTagName('canvas');

    for (var i = 0, l = canvas.length; i < l; i++) {
      // datasrc and data-src are deprecated.
      var processingSources = canvas[i].getAttribute('data-processing-sources');
      if (processingSources === null) {
        // Temporary fallback for datasrc and data-src
        processingSources = canvas[i].getAttribute('data-src');
        if (processingSources === null) {
          processingSources = canvas[i].getAttribute('datasrc');
        }
      }
      if (processingSources) {
        // The problem: if the HTML canvas dimensions differ from the
        // dimensions specified in the size() call in the sketch, for
        // 3D sketches, browsers will either not render or render the
        // scene incorrectly. To fix this, we need to adjust the attributes
        // of the canvas width and height.
        // Get the source, we'll need to find what the user has used in size()
        var filenames = processingSources.split(' ');
        var code = "";
        for (var j = 0, fl = filenames.length; j < fl; j++) {
          if (filenames[j]) {
            var block = ajax(filenames[j]);
            if (block !== false) {
              code += ";\n" + block;
            }
          }
        }
        Processing.addInstance(new Processing(canvas[i], code));
      }
    }
  };
