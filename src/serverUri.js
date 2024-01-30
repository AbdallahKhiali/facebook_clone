export default process.env.NODE_ENV === "development"
	? "http://localhost:3001"
	: "https://amie.up.railway.app";
