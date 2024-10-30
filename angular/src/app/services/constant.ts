import {environment} from "../environments/environment";


export const API_ENDPOINT_URL = environment.BASE_URL;
export const API = {
    GET_DATA: API_ENDPOINT_URL + "getTemperature",
    USER_LOGIN: API_ENDPOINT_URL + "login",
    USER_SIGNUP: API_ENDPOINT_URL + "signup",
}
export const CONSTANTS = {
    INVALID_CREDENTIALS : "Invalid Credentials!",
    ALREADY_EXISTS: "User already exists!",
    SUCCESS: "Created successfully!"
}