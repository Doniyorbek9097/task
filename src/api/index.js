import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dummyjson.com/',
    // baseURL: 'https://13d3a3f2-3025-4732-9263-a21b359cd30e-00-1hgmocnr63yq5.spock.replit.dev/'
    
  });