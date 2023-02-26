fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((commands) => {
    const container = document.getElementById("commands");
    commands.forEach((command) => {
      const tmpl = document
        .getElementById("main-template")
        .content.cloneNode(true);
      tmpl.querySelector(".commandname").innerText = command.commandname;
      tmpl.querySelector(".commandname").setAttribute("id", command.id);
      tmpl.querySelector(".idnumber").setAttribute("id", "id"+command.id);
      tmpl.querySelector(".description").innerHTML = command.description;
      tmpl.querySelector("img").setAttribute("src", command.image);
      
      

      container.appendChild(tmpl);
    });
  });