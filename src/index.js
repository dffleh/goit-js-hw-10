import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import { getRefs } from './getRefs';
import {
    clearCountryInfo,
    clearCountryList,
    renderCountryInfo,
    renderCountryList,
} from './renderFunction';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.imput.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY))

function onInputSearch(event) {
    const inputValue = event.target.value.trim()
    console.log(inputValue);
    if (!inputValue) {
        clearCountryInfo();
        clearCountryList();
        return;
    }
    fetchCountries(inputValue).then(onFetchSuccess).catch(onFetchError);
}

function onFetchSuccess(data) {
    if (data.length >= 2 && data.length <= 10) {
        clearCountryInfo()
        renderCountryList(data)
        console.log("1")
    }

    if (data.length > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.")
        console.log("2");
    };

    if (data.length === 1) {
        clearCountryList();
        renderCountryInfo(data);
        console.log("3");
    };
};

function onFetchError() {
    Notify.failure("Oops, there is no country with that name")
};