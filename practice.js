const practice = {
  image: "../../asset/images/backpack_img.png",
  name: "backpack",
  volume: 30,
  color: "black",
  date: "January 31, 2022 12:09:00 PST",
  pocketNum: 10,
};

const objecttoAdd = (curent) => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h1 class='image'><img  src=${curent.image} alt =''/></h1>
  <ul class='container'>
 
                           
                          <li >Name: ${curent.name}</li>
                          <li> Volume: ${curent.volume}</li>
                          <li> Color: ${curent.color}</li>
                          <li> Date: ${curent.date}</li>
                          <li> Pocket numbers: ${curent.pocketNum}

                          </ul>
    `;

  return article;
};

let figure = document.querySelector(".figure");
figure.append(objecttoAdd(practice));
