interface configType {
    API_URL: string;
    BASE_URL: string;
}

const API_URL = window?._env_?.REACT_APP_API_URL ? `${window?._env_?.REACT_APP_API_URL}/api` : 'https://localhost:5001/api';

const config: configType = {
    API_URL: API_URL,
    BASE_URL: window?.location.origin || 'http://localhost:3000/',
};

declare global {
    interface Window { _env_: any }
}

export default config;
