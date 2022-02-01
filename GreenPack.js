const GreenPack = {
  name: "Frog pack",
  volue: 20,
  color: "green",
  pocketNum: 10,
};

//NOTE: INSIDE AN OBJECT WE ONLY USE AN ANONYMOUS FUNCTION NOT ARROW FCN

const addpack = (currenpack) => {
  let newArticle = document.createElement("article");

  newArticle.innerHTML = `
    <h1> name: ${currenpack.name} </h1>
    <ul>
        <li> volume: ${currenpack.volue}</li>
        <li> color: ${currenpack.color}</li>
        <li> pocket number: ${currenpack.pocketNum}</li>
    </ul>
    `;
  return newArticle;
};

let main = document.querySelector("main");
main.append(addpack(GreenPack));
