import Notiflix from 'notiflix';

function onFetchError() { 
    Notiflix.Notify.failure('WTF');
};

export default onFetchError