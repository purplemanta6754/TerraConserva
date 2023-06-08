// Array de nombres ficticios 
const fakeNames = [
  "Esteban Torres",
  "Ethan Martinez",
  "Dania González",
  "Javier Valdebenito",
  "Camila Ríos",
  "Emma Johnson",
  "Liam Davis",
  "Olivia Thompson",
  "Noah Smith",
  "Ava Wilson",
  "Isabella Anderson",
  "Lucas Thomas",
  "Sophia Brown",
  "Oliver Taylor",
  "Mia Miller",
  "Aiden Garcia",
  "Amelia Clark",
  "Caleb White",
  "Harper Lewis",
]

// Array de comentarios ficticios 
const comments = [
  "Bla Bla Bla",
  "Le digo hola y ella me dice goodbye",
  "Si",
  "Hola",
  "Siuuuu",
  "👁️👄👁️",
]

// Array de comentarios falsos predefinidos 
const userFakeComments = [
  { name: fakeNames[Math.floor(Math.random() * fakeNames.length)], message: comments[Math.floor(Math.random() * comments.length)], avatar: "img/avatars/user1.png" },
  { name: fakeNames[Math.floor(Math.random() * fakeNames.length)], message: comments[Math.floor(Math.random() * comments.length)], avatar: "img/avatars/user2.png" },
  { name: fakeNames[Math.floor(Math.random() * fakeNames.length)], message: comments[Math.floor(Math.random() * comments.length)], avatar: "img/avatars/user3.png" },
  { name: fakeNames[Math.floor(Math.random() * fakeNames.length)], message: comments[Math.floor(Math.random() * comments.length)], avatar: "img/avatars/user4.png" },
  { name: fakeNames[Math.floor(Math.random() * fakeNames.length)], message: comments[Math.floor(Math.random() * comments.length)], avatar: "img/avatars/user5.png" }
];


// Función para generar comentarios aleatorios 
function generateRandomComments() {
  const randomComments = userFakeComments.slice(0, Math.floor(Math.random() * 5) + 1);

  randomComments.forEach(comment => {
    const commentElement = document.createElement("div");
    const avatarElement = document.createElement("img");
    avatarElement.src = comment.avatar;
    avatarElement.alt = `Avatar de ${comment.name}`;
    avatarElement.classList.add("avatar");
    commentElement.innerHTML = `<span>${comment.name}</span>: ${comment.message}`;
    commentElement.prepend(avatarElement);
    document.getElementById("comments-list").appendChild(commentElement);
  });
}

console.log("Comentarios ficticios generados y mostrados exitosamente")

// Evento para generar comentarios aleatorios al cargar la página 
window.addEventListener("load", generateRandomComments);

// Evento para agregar un nuevo comentario 
document.getElementById("comment-form").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const avatar = "img/avatars/guestUser.png";

  const newCommentElement = document.createElement("div");
  const avatarElement = document.createElement("img");
  avatarElement.src = avatar;
  avatarElement.alt = `Avatar de ${name}`;
  avatarElement.classList.add("avatar");
  newCommentElement.innerHTML = `<span>${name}</span>: ${message}`;
  newCommentElement.prepend(avatarElement);
  document.getElementById("comments-list").appendChild(newCommentElement);

  document.getElementById("comment-form").reset();

  console.log("Comentario presentado de forma existosa:")
  console.log(`${name}: ${message}`)
});
