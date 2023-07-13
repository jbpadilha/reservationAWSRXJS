interface configType {
    API_URL: string;
    BASE_URL: string;
}

const API_URL = "https://cj8tzw3oah.execute-api.ca-central-1.amazonaws.com/test";

const config: configType = {
    API_URL: API_URL,
    BASE_URL: window?.location.origin || 'http://localhost:3000/',
};

declare global {
    interface Window { _env_: any }
}

export default config;
