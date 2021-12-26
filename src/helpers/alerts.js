//Swal con estilo personalizado y animado

import Swal from "sweetalert2";

let swalParams = {
	title: null,
	text: null,
	icon: null,
	customClass: "customSwal",
	buttonsStyling: false,
	showClass: {
		// popup: "animate__animated animate__fadeInDown animate__faster",
		backdrop: "swal2-backdrop-show",
		icon: "swal2-icon-show"
	},
	hideClass: {
		// popup: "animate__animated animate__fadeOutDown animate__faster",
		backdrop: "swal2-backdrop-hide",
		icon: "swal2-icon-hide"
	},
	footer: '<div class="swal-wave"></div><div class="swal-wave"></div>',
	heightAuto: false,
	backdrop: true,
	allowOutsideClick: false
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
