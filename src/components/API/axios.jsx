import axios from "axios";

export default axios.create({
    baseURL:'https://loanifyteama-production.up.railway.app/api/v1/auth/sign-up'
});