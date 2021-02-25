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
  //xmlHttpRequest,fetch,axios
  let p = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json" },
  });
  console.log(p);
  p.then(function (response) {
    console.log(response.json());
  }).catch(function (err) {
    console.log(err);
  });
}

function getData() {
  let p = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  console.log(p);

  p.then(function (response) {
    let output = response.json();
    return output;
  }).then(function (result) {
    console.log(result);
  });
}
