import { DE_DE, EN_US, ES_AR, PT_BR } from '../Servicios/languajes';
const PROJECT_ID = '41';

let translations = null;
let language = ES_AR;
export async function getTranslations(lang = language, callback) {
localStorage.clear();
language = lang;
if (language === ES_AR) {
console.log(`FETCH TRANSLATIONS --- key = traduccion`);
return;
}
return await fetch(`https://traduci-la-strapi.herokuapp.com/api/translations/${41}/${language}`)
.then(response => response.json())
.then(data => {
localStorage.setItem('translations', JSON.stringify(data));
translations = data;
if(callback) callback()
});
}