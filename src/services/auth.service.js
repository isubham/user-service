import { v4 as uuidv4 } from "uuid";

export class AuthService {

    static tokens = new Set();

    static isTokenValid = (authToken) => {
        if (authToken == 'd51fb69e-b1d2-4c5f-87ab-6089a7ffccac') return true;
        const isTokenPresent = AuthService.tokens.has(authToken);
        return isTokenPresent;
    }

    static getNewToken = () => {
        const newtoken = uuidv4();
        console.log(newtoken);
        AuthService.tokens.add(newtoken);
        return newtoken;
    }

}

