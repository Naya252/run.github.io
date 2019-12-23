let arr = [{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/fehu.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/uruz.jpg`,
    href_futark: `description.html#link_uruz`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/thurisaz.jpg`,
    href_futark: `description.html#link_thur`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/ansuz.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/raido.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/kenaz.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/gebo.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/wunjo.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/hagalaz.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/nauthis.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/isa.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/jera.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/eihwaz.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/Perth.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/algiz.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/sowulo.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/tiwaz.jpg`,
    href_futark: `description.html#link_tei`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/berkana.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/ehwaz.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/mannaz.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/laguz.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/inguz.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/Dagaz.jpg`,
    href_futark: `#`,
},
{
    name: ``,
    id_futark: ``,    
    img_container_futark:``,
    img_link: ``,
    img_futark: `img/odal.jpg`,
    href_futark: `#`,
}
];

function addCards(arr) {
const cards = document.createElement('div');
cards.classList.add(`cards`);
// cards.style =
//         `display: flex;
//         flex-wrap: wrap;
//         max-width: 1200px;
//         margin: auto auto 3em auto;
//         justify-content: center;
//         padding: 1em;`
cards.style =
        `margin: .5em auto;
        padding: 1em;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1em;
        max-width: 1200px;`;
document.body.append(cards);

for (let i = 0; i < arr.length; i++) {
    const card = document.createElement('div');
    card.id = arr[i].id;
    card.style =
            `width: 20em;
            margin: .5em;
            text-align: center;            
            background: white;
            border-radius: 1em;
            box-shadow: 0 1em 2em rgba(0,0,0,0.25), 0 .8em .8em rgba(0,0,0,0.22);`;

    const img_container_futark = document.createElement('div');   
    img_container_futark.src = arr[i].img_container_futark;
    img_container_futark.style = `
                border-radius: 1em;
                min-width: 18em;
                height: 11em;
                overflow: hidden;
	            margin: 9px;
                border: 5px solid #fff;
                -webkit-box-shadow: 2px 3px 10px #6E6E6E;
                box-shadow: 2px 3px 10px #6E6E6E;               
                `;

    const img_link = document.createElement('a');
    img_link.href = arr[i].href_futark;
    img_link.append(arr[i].img_link);

    const img_futark = document.createElement('img');
    img_futark.classList.add(`min_img_futark`);
    img_futark.style = `
                width: 28em;
                height: 13em;
                -webkit-transition: all 1s ease;
                -moz-transition: all 1s ease;
                -o-transition: all 1s ease;
                -ms-transition: all 1s ease;
                transition: all 1s ease;
                `;
    img_futark.src = arr[i].img_futark;

    
    img_link.append(img_futark);
    img_container_futark.append(img_link);
    card.append(img_container_futark);
    cards.append(card);
}

document.body.append(cards);
}

addCards(arr);