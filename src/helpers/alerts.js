//Swal con estilo personalizado y animado

import Swal from "sweetalert2";
import "../styles/alerts.scss";

let swalParams = {
	title: null,
	text: null,
	icon: null,
	customClass: "customSwal",
	buttonsStyling: false,
	showClass: {
		popup: "animate__animated animate__fadeInDown animate__faster"
	},
	hideClass: {
		popup: "animate__animated animate__fadeOutDown animate__faster"
	},
	footer: '<div class="wave"></div><div class="wave"></div>'
};

const setSwalParams = (title, text, icon) => {
	swalParams = {
        ...swalParams,
		title,
		text,
		icon
	};
};

export const swalBasic = (title, text, icon) => {
	setSwalParams(title, text, icon);
	Swal.fire(swalParams);
};
