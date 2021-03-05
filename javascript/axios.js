function getUserData() {
  let userId = document.getElementById("userid").value;
  let id = document.getElementById("id").value;
  let title = document.getElementById("title").value;
  let status = document.getElementById("status").checked;
  let completed;
  if (status) {
    completed = document.getElementById("status").value;
  } else {
    completed = document.getElementById("status").value = "Not Completed";
  }
  let user = {
    userid: userId,
    id: id,
    title: title,
    status: completed,
  };
  console.log(user);
  return user;
}

function sendData() {
  let userData = getUserData();
  //axios.post(url,body,headers)
  //axios.get(url,headers)
  let p = axios.post("https://jsonplaceholder.typicode.com/posts", userData, {
    "Content-type": "application/json",
  });
  console.log(p);
  p.then(function (response) {
    console.log(response);
  }).catch(function (err) {
    console.log(err);
  });
}
