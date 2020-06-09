const BASE_URL = 'https://reqres.in/';

export const common = {
    urls: { 
        auth: {
            login: () => `${ BASE_URL }api/login`
        },
        users: {
            list: () => `${ BASE_URL }api/users`
        }
    }
};
