import md5Generator from './md5'
import axios from "axios";

interface ServerData {
    data: any;
}
export default class {
    route: string;
    ts: number;
    key: string;
    id: number;

    constructor(route: string = 'https://gateway.marvel.com:443/v1/public/characters', id: number = 0) {
        this.route = route;
        this.ts = new Date().getTime();
        this.key = md5Generator(this.ts.toString());
        this.id = id;
    }
    getUrlRequest() {
        return `${this.route}?ts=${this.ts}&apikey=e49bea4a6ee3e35352198237a08be003&hash=${this.key}`;
    }
    async getApiData(cb: Function) {
        await axios
            .request<ServerData>({
                method: "get",
                url: this.getUrlRequest(),
            })
            .then((apiData) => {
                cb(apiData.data.data.results)
            });
    }
    async searchInApi(cb: Function, search: string = '') {
        await axios
            .request<ServerData>({
                method: "get",
                url: this.getUrlRequest(),
                params: {
                    nameStartsWith: search,
                    limit: 99
                },
            })
            .then((apiData) => {
                cb(apiData.data.data.results);
            });
    }
}
