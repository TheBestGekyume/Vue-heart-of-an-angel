export class Poema {
    constructor(
        id = null,
        title = "",
        date = null,
        image = "",
        textpoem = "",
        descricao = ""
    ) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.image = image;
        this.texpoem = textpoem;
        this.descrição = descricao;
    }
};