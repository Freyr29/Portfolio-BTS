const items = await fetch('./exp/mesexp.json').then(items => items.json());

const article = items[0];

function genererCadre(items) {
    for (let i = 0; i < items.length; i++) {

        const sectionFiches = document.querySelector(".mesexp");
        const pieceElement = document.createElement("article");
        sectionFiches.appendChild(pieceElement);

        const dateElement = document.createElement("h3");
        dateElement.innerText = items[i].date;
        pieceElement.appendChild(dateElement);

        const titreElement = document.createElement("h4");
        titreElement.innerText = items[i].titre;
        pieceElement.appendChild(titreElement);

        const statutElement = document.createElement("h5");
        statutElement.innerText = '(' + items[i].statut + ')';
        pieceElement.appendChild(statutElement);

        const descElement = document.createElement("h6");
        descElement.innerText = items[i].desc;
        pieceElement.appendChild(descElement);

        const div = document.createElement("div");
        div.textContent = items[i];

        if (i !== items.length - 1) {
            const hr = document.createElement("hr");
            pieceElement.appendChild(hr);
        }
    }
}

genererCadre(items);