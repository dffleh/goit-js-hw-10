const URL = 'https://restcountries.com/v3.1/name/';
const PARAMETR = 'fields=name,capital,population,flags,languages,currencies';

export function fetchCountries(name) {
    return fetch(`${URL}${name}?${PARAMETR}`).then(response => {
        if (!response.ok || response.status === 404) {
            throw new Error(response.status);
        }
        return response.json();
    });
};