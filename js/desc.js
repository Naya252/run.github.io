let arr = [{
    name: `Руна Тейваз`,
    id: `link_tei`,
    author: ``,
    link_author: `Name author`,
    href: `https://lasrunas.ru/scandinavian-runes/runa-tiwaz`,
    data_text: `29/10/2019`,
    min_content: ``,
    img_container: ``,
    photo: `img/tiwaz2.jpg`,
    desc: ``,
    description: `Руна Тейваз (Tiwaz) — первая, открывающая руна третьего атта. Традиционно она связана с асом Тюром (другие имена — Тир, Тиу и Тиваз). Это бог войны в Скандинавской мифологии, известный тем, что у него была всего одна рука. "Тюр — бог однорукий, Горесть Фенрира, И храмов владыка" Так говорится в рунической поэме.`,
    read: ``,
    read_text: `Читать далее`,
    read_href: `article_tei.html`,
},
{
    name: `Руна Уруз`,
    id: `link_uruz`,
    author: ``,
    link_author: `Name author`,
    href: `https://lasrunas.ru/scandinavian-runes/runa-uruz`,
    data_text: `29/10/2019`,
    min_content: ``,
    photo: `img/uruz2.jpg`,
    desc: ``,
    description: `Руна Уруз (Ур, Uruz) — вторая руна футарка, ее значение — «зубр», или
    «бык», перекликается со значением первой руны — Феху, домашний скот. Сам вид руны Уруз напоминает
    большого быка или тура, стоящего боком, с поднятой вверх головой и грудью. Однако отличие от первой
    руны футарка принципиальное: это не домашний бык, а могучее и грозное дикое животное, полное
    жизненной силы, мощи и ярости. Таково и значение этой руны — сила, мощь, физическая
    выносливость.`,
    read: ``,
    read_text: `Читать далее`,
    read_href: `article_uruz.html`,
},
{
    name: `Руна Турисаз`,
    id: `link_thur`,
    author: ``,
    link_author: `Name author`,
    href: `https://lasrunas.ru/scandinavian-runes/runa-thurisaz`,
    data_text: `29/10/2019`,
    min_content: ``,
    photo: `img/thurisaz3.jpg`,
    desc: ``,
    description: `Название руны Турисаз (Thurisaz) — переводится как «врата», и считается,
    что это проход между земным и небесным миром, портал к сакральным знаниям. Чем-то внутренний смысл
    руны Турисаз похож на затяжной прыжок через пропасть – у прыгающего нет права на ошибку и сомнения.
    Маг подготавливает себя к этому в течение долгих лет, и далеко не каждый решается все-таки
    совершить его, ведь перемена реальности необратима, отступить будет нельзя, так же как жить в новом
    измерении с оглядкой на прошлое.`,
    read: ``,
    read_text: `Читать далее`,
    read_href: `article_thur.html`,
}
];

function addCards(arr) {
const cards = document.createElement('div');
cards.classList.add(`cards`);
cards.style =
        `display: flex;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: auto auto 3em auto;
        justify-content: center;
        padding: 1em;`
document.body.append(cards);

for (let i = 0; i < arr.length; i++) {
    const card = document.createElement('div');
    card.id = arr[i].id;
    card.style =
        `width: 1200px;
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(158, 157, 157);
        border-radius: 1em;
        background: rgba(182, 131, 101, 0.2);
        margin: .5em auto;
        padding: .5em 1em 1em;`;

    const title = document.createElement('h2');
    title.style = `color: rgb(70, 61, 78);`;
    title.append(arr[i].name);

    const author = document.createElement('div');
    author.style =
        `padding: 0;
        display: flex;
        margin: 1em;
        text-align: left;`;
    author.append(arr[i].author);

    const link_author = document.createElement('a');
    link_author.href = arr[i].href;
    link_author.style =
        `padding: 0;
        margin: 0;
        margin-right: 1em;
        color: rgb(179, 36, 36);
        text-align: left;
        font-family: 'Comfortaa', cursive;`;
    link_author.append(arr[i].link_author);

    const data_text = document.createElement('p');
    data_text.style =
        `padding: 0;
        margin: 0;
        text-align: left;`;
    data_text.append(arr[i].data_text);

    const min_content = document.createElement('div');
    min_content.classList.add(`min_content`);
    min_content.style =
        `padding: 0;
        display: flex;
        align-items: flex-start;
        margin: auto;
        text-align: left;`;
    min_content.append(arr[i].min_content);

    const img_container = document.createElement('div');
    img_container.classList.add(`grow`);
    img_container.classList.add(`pic`);
    
    img_container.src = arr[i].img_container;
    img_container.style = `
                margin-top: 1em;
                border-radius: 1em;`;

    const img = document.createElement('img');
    img.classList.add(`min_img`);
    img.src = arr[i].photo;
    const desc = document.createElement('div');
    desc.style = `display: flex;
                flex-direction: column;
                padding: 0;
                margin: .5em 1em;`;
    desc.append(arr[i].desc);

    const description = document.createElement('p');
    description.style =
        `
        color: rgb(70, 61, 78);
        text-align: justify;`;
    description.append(arr[i].description);

    const read = document.createElement('div');
    read.style =
        `padding: 0;
        margin: 1em;
        text-align: right;
        cursor: pointer;`;
    read.append(arr[i].read);

    const read_text = document.createElement('a');
    read_text.href = arr[i].read_href;
    read_text.style =
        `padding: 5px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: #fff7ec;
        display: inline;
        align-content: left;
        font-family: 'Lobster', cursive;`;
    read_text.append(arr[i].read_text);

    author.append(link_author, data_text);
    min_content.append(img_container, desc);
    img_container.append(img);
    desc.append(description, read);
    read.append(read_text);
    card.append(title, author, min_content);
    cards.append(card);
}

document.body.append(cards);
}

addCards(arr);