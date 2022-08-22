import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '00e2f303701c43b88bc2f0a55c90e390', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
