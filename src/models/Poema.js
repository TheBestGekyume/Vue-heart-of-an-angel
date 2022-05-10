export class Poema {
    constructor(
        id = null,
        title_poem = "",
        date_poem = null,
        image_poem = "",
        text_poem = "",
        descricao_poem = ""
    ) {
        this.id = id;
        this.title_poem = title_poem;
        this.date_poem = date_poem;
        this.image_poem = image_poem;
        this.tex_poem = text_poem;
        this.descricao_poem = descricao_poem;
    }
}