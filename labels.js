const labels = [
    // {
    //     name: "Connaisseur",
    //     pic: 'connaisseur.jpeg',
    //     short: 'connaisseur.html',
    //     description: "The Offenbach-based indie-label operating since 2005 just turned 10 years in the business offering a special series of parties in occasion of its anniversary. London, Berlin, Amsterdam have been already some of the successful stop of the tour and a perfect reason to keep on going with this special offer. Write us to know more about Connaisseur label night in your club."
    // },
    {
        name: "Buttress",
        pic: 'buttress.jpeg',
        short: 'buttress.html',
        description: `Buttress is a record label which aims to give a solid contribution to djs, dancers and listeners of electronic music.
        Buttress is committed to supporting artists and their unique expressions, promoting an inclusive and vibrant community, and continually pushing the boundaries of what electronic music can be.`
    },
    {
        name: "Engrave Ltd",
        pic: 'engrave.jpeg',
        short: 'engrave.html',
        description: "The young italian label, established by Musumeci and Dodi Palese, has just started to spread its musical visions thanks also to the contribute of Human Machine and A45. Stay tuned, many more is yet to come. Write us to know more about Engrave Ltd label night in your club."
    },
]



for (let label of labels) {
    const labelsSection = document.querySelector('.labels-section');
    const newCard = document.createElement('div');
    newCard.classList.add('label-card');

    const labelImg = document.createElement('section');
    labelImg.classList.add('label-img');
    labelImg.style.backgroundImage = `url(./assets/labels/${label.pic})`;
    newCard.appendChild(labelImg);

    const labelInfo = document.createElement('section');
    labelInfo.classList.add('label-info');

    const h1 = document.createElement('h1');
    h1.textContent = label.name;
    labelInfo.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = label.description;
    labelInfo.appendChild(p);

    const infoBottom = document.createElement('section');
    infoBottom.classList.add('info-bottom');


    const a = document.createElement('a');
    a.classList.add('see-more');
    a.textContent = 'see more';
    a.href = `./labels/${label.short}`;
    infoBottom.appendChild(a);

    labelInfo.appendChild(infoBottom);

    newCard.appendChild(labelInfo);


    labelsSection.appendChild(newCard);

}