import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
const translate = setCORS("http://cors-anywhere.herokuapp.com/");

export { translate}