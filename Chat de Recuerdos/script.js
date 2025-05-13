const mensajes = [
  { texto: "Si mi amor", tipo: "sent" },
  { texto: "¿Recuerdas nuestro primer beso? 💋", tipo: "received" },
  { texto: "siiii, me hice la dificil pero si JADKASD", tipo: "sent" },
  {
    texto:
      "Que hermoso fue ese día, yo iba a por lo que queria, no sabes cuanto me moria por besarte.Ese momento fue tan bello que nos cambio para siempre 💖",
    tipo: "received",
  },
  {
    texto: "¿Qué te parece si seguimos recordando otros momentos especiales?",
    tipo: "received",
  },
  { texto: "Siiiii", tipo: "sent" },
  {
    texto:"Recuerdo cuando fuimos al Mac, fue un momento hermoso de apreciar el arte juntos y yo apreciarte lo hermosa que eres",
    imagen: "Imagenes/mac.jpg",
  },
  {
    texto:
      "Fue hermosooo",
    tipo: "sent",
  },
  {
    texto:
      "¡Qué lindo! Esos momentos son los que siempre llevo en mi corazón. 💖",
    tipo: "received",
  },
  {
    texto: "A mí también, amor. 💕",
    tipo: "sent",
  },
  { texto: "¡Recuerdos completados! 😊", tipo: "received" },
];

let indiceMensaje = 0;

const chatBox = document.getElementById("chat-box");
const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
  if (indiceMensaje < mensajes.length) {
    const mensaje = mensajes[indiceMensaje];
    agregarMensaje(mensaje.texto, mensaje.tipo, mensaje.imagen);
    indiceMensaje++;
  } else {
    nextButton.disabled = true;
  }
});

function agregarMensaje(texto, tipo, imagen = null) {
  let mensaje = document.createElement("div");
  mensaje.classList.add("message", tipo);
  mensaje.textContent = texto;

  if (imagen) {
    let img = document.createElement("img");
    img.src = imagen;
    img.alt = "Recuerdo especial";
    img.style.maxWidth = "100%";
    mensaje.appendChild(img);
  }

  chatBox.appendChild(mensaje);
  chatBox.scrollTop = chatBox.scrollHeight;
}
