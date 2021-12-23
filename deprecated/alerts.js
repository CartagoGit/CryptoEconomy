
// const Alert = require("electron-alert");
// import Swal from "sweetalert2";
// const Swal = require("sweetalert2");
const alert = new Alert();

let swalOptions = {
	title: null,
	text: null,
	icon: null,
	customClass: {container: "ocean"}
	// showClass: {
	// 	popup: "animate__animated animate__fadeDown"
	// },
	// hideClass: {
	// 	popup: "animate__animated animate__fadeOutDown"
	// }
};

const setBasicSwallOptions = (title, text, icon) => {
	swalOptions = {
		...swalOptions,
		title,
		text,
		icon
	};
};

const swal = (title, text, icon) => {
	setBasicSwallOptions(title, text, icon);
	alert.fire(swalOptions);
};

module.exports = {
	swal
};
