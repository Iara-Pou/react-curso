const nombre = "Iara";
const $elemento = React.createElement("div", null, "Hola ", nombre);
const $app = document.querySelector("#react-app")
ReactDOM.render($elemento, $app);