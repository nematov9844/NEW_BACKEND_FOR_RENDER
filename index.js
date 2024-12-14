/** @format */

const jsonServer = require("json-server"); // json-server modulini ulash
const server = jsonServer.create(); // Yangi server yaratish
const router = jsonServer.router("db.json"); // db.json faylini ulash
const middlewares = jsonServer.defaults(); // Standart middleware funksiyalarni ulash

server.use(middlewares); // Middleware funksiyalarni serverga ulash

// URL'larni qayta yozish
server.use(
	jsonServer.rewriter({
		"/api/*": "/$1", // /api/* ni /$1 ga o‘zgartirish
	}),
);

server.use(router); // Marshrutlarni ulash

server.listen(process.env.PORT || 3000, () => {
	console.log("JSON Server ishlayapti"); // Konsolda xabar chiqarish
});
