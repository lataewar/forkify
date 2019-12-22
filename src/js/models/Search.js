import axios from 'axios';
import { key, checkJSON } from '../config';

export default class Search {
    constructor(quary) {
        this.quary = quary;
    }

    async getResults() {
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.quary}`);
            checkJSON(res);
            this.result = res.data.recipes;
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

}