import { Poema } from '@/models/Poema';
import { http } from './config';

export default {
    add: function(dadosPoema = new Poema) {
        console.log(dadosPoema);
        return http.post("poema/add", dadosPoema);
    },

    list: function() {
        return http.get("poema/list");
    },

    get: function(id) {
        return http.get("poema/get/" + id);
    },

    upload: function(files) {
        console.log(files);
        return http.post("poema/upload", files);
    }
};