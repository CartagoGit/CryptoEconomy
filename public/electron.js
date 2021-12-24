const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

// Para cargar las extensiones de desarrollo de chrome dentro de electron
const {
	default: installExtension,
	REACT_DEVELOPER_TOOLS,
	REDUX_DEVTOOLS
} = isDev && require("electron-devtools-installer"); 
// } = require("electron-devtools-installer");

// app.commandLine.appendSwitch("auto-detect", "false");
// app.commandLine.appendSwitch("no-proxy-server");
// app.commandLine.appendSwitch("disable-features", "OutOfBlinkCors");
// app.commandLine.appendSwitch("disable-site-isolation-trials");
// app.commandLine.appendSwitch("disable-web-security");
// app.commandLine.appendSwitch("enable-gpu-rasterization");

// app.disableHardwareAcceleration();
app.enableSandbox();

const createMainWindow = () => {
	//Creando la ventana de la aplicacion
	let win = new BrowserWindow({
		show: false,
		backgroundThrottling: false,
		webPreferences: {
			// preload: path.join(__dirname, "preload.js"),
			// sandbox: false,
			nodeIntegration: true
		}
	});
	isDev ? win.setAutoHideMenuBar(true) : win.removeMenu();

	// Cargamos el servidor de React en modo desarrollo, y el index.html en producción
	win.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "./index.html")}`
	);

	//En modo desarrollo habilitamos el panel de desarrollo de F12 del explorador
	if (isDev) win.webContents.openDevTools({ mode: "undocked" });
	// win.webContents.openDevTools({ mode: "undocked" });

	win.webContents.on("did-finish-load", () => {
		if (loadingWindow) {
			loadingWindow.hide();
			loadingWindow.close();
			loadingWindow.destroy();
			// if (loadingWindow) loadingWindow = null;
		}
		win.maximize();
		win.show();
	});
	win.once("closed", () => {
		win = null;
		app.quit();
	});
};

// Ventana de carga mientras inicia la aplicacion
let loadingWindow;
const createLoading = () => {
	loadingWindow = new BrowserWindow({
		width: 500,
		height: 510,
		frame: false,
		alwaysOnTop: true,
		transparent: true
	});
	// if (isDev) loadingWindow.webContents.openDevTools({ mode: "undocked" });
	// loadingWindow.webContents.openDevTools({ mode: "undocked" });
	// throw new Error();
	loadingWindow.setResizable(false);
	loadingWindow.loadURL(`file://${__dirname}/loading.html`);
	loadingWindow.center();

	loadingWindow.setIgnoreMouseEvents(true);
	// loadingWindow.on("closed", () => ();
	loadingWindow.webContents.on("did-finish-load", () => {
		loadingWindow.show();
	});
};

// Este metodo es llamado cuando electorn ha terminado la iniciacion y esta preparado para crear la ventanta del explorador
// Algunas APIs solo pueden ser usadas despues de que este evento ocurra
app.whenReady().then(() => {
	try {
		createLoading();
		// setTimeout(() => {
			createMainWindow();
			// }, 4000);
			if (isDev) {
				installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
					.then((name) => console.log(`Added Extension:  ${name}`))
					.catch((err) => console.log("An error occurred: ", err));
			}
	} catch (error) {
		app.quit();
		const Alert = require("electron-alert");
		const alert = new Alert();
		const swalOptions = {
			title: "Error",
			html: `Error al cargar la aplicación, contacta con el creador:<br/> ${error}`,
			icon: "error"
		};
		alert.fireFrameless(swalOptions);
	}
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
		createMainWindow();
	}
});
