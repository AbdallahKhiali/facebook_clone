const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
	? "*"
	: ["https://adra-amie.netlify.app", "https://fb-clone-frontend.vercel.app"];

module.exports = { clientURL };
