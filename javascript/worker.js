onmessage = function (event) {
  var num = event.data;
  
  var square = num * num;
  postMessage(square);
};
