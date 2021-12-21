const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const {
	default: installExtension,
	REACT_DEVELOPER_TOOLS,
	REDUX_DEVTOOLS
} = require("electron-devtools-installer");

const createWindow = () => {
	//Creando la ventana de la aplicacion
	const win = new BrowserWindow({
		show: false,
		webPreferences: {
			nodeIntegration: true
		}
	});
	win.maximize();

	// Cargamos el servidor de React en modo desarrollo, y el index.html en producción
	win.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "..build/index.html")}`
	);

	//En modo desarrollo habilitamos el panel de desarrollo de F12 del explorador
	if (isDev) win.webContents.openDevTools({ mode: "undocked" });
};

// Este metodo es llamado cuando electorn ha terminado la iniciacion y esta preparado para crear la ventanta del explorador
// Algunas APIs solo pueden ser usadas despues de que este evento ocurra
app.whenReady().then(() => {
	installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
		.then((name) => console.log(`Added Extension:  ${name}`))
		.catch((err) => console.log("An error occurred: ", err));
	createWindow();
});

// Cerrar cuando todas las ventanas han sido cerradas. En mac hay que cerrar el proceso (darwin determina que es macOS)
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	//En macOs recrea la ventana de la app cuando el icono del dock es pulsado y no hay otra ventana abierta
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
