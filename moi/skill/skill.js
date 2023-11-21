const items = await fetch('./skill/messkill.json').then(items => items.json());

const article = items[0];

function genererCadre(items) {
    for (let i = 0; i < items.length; i++) {

        const sectionFiches = document.querySelector(".messkill");
        const pieceElement = document.createElement("article");
        sectionFiches.appendChild(pieceElement);

        const dateElement = document.createElement("h4");
        dateElement.innerText = items[i].titre;
        pieceElement.appendChild(dateElement);

        const titreElement = document.createElement("h6");
        titreElement.innerText = items[i].comp1;
        pieceElement.appendChild(titreElement);

        const statutElement = document.createElement("h6");
        statutElement.innerText = items[i].comp2;
        pieceElement.appendChild(statutElement);

        const descElement = document.createElement("h6");
        descElement.innerText = items[i].comp3;
        pieceElement.appendChild(descElement);

        const desc2Element = document.createElement("h6");
        desc2Element.innerText = items[i].comp4;
        pieceElement.appendChild(desc2Element);

        const div = document.createElement("div");
        div.textContent = items[i];

        if (i !== items.length - 1) {
            const hr = document.createElement("hr");
            pieceElement.appendChild(hr);
        }
    }
}

genererCadre(items);