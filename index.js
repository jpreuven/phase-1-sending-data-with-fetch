function submitData(name, email) {
  let obj = { name: name, email: email };
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((data) => {
      const p = document.createElement("p");
      const body = document.querySelector("body");
      body.innerHTML = data.id;
      // p.textContent = data.id;
      // body.prepend(p);

      console.log(data);
    })
    .catch((error) => {
      const p = document.createElement("p");
      const body = document.querySelector("body");
      p.textContent = error;
      body.prepend(p);

      console.log(error);
    });
}

submitData("Yoni", "Reuven");
