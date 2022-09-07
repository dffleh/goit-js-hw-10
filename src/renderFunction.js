import { getRefs } from './getRefs';

const refs = getRefs();

export function clearCountryInfo() {
    return (refs.info.innerHTML = '');
}
export function clearCountryList() {
    return (refs.list.innerHTML = '');
}

export function renderCountryInfo(data) {
    const markupCountries = data.map(({ name, flags, capital, languages, population }) => {
        return `
             <div class="country-info__box">
             <img class="country-list__img" src='${flags.svg}' width="150">
             <h2 class="country-list__title">${name.official}</h2>
             </div>
              <div class="country-info__text">
                <p> Capital : <span>${capital}</span></p>
                <p> Population : <span>${population}</span></p>
                <p> Langues : <span>${Object.values(languages)}</span></p>
              </div> `
    }).join('');
    return refs.info.insertAdjacentHTML('beforeend', markupCountries)
};

export function renderCountryList(data) {
    const markupList = data.map(({ name, flags }) =>
        `<li class="country-list__item">
        <img class="country-list__img" src='${flags.svg}' width="60" alt="flag">
        <h2 class="country-list__text">${name.official}</h2>
        </li>`).join('');
    return refs.list.insertAdjacentHTML('beforeend', markupList);
}