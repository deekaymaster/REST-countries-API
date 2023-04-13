const countriesDiv = document.querySelector('#countriesContainer');
let countriesRow;
// const countriesRow: HTMLDivElement = document.createElement("div");
// countriesRow.classList.add('row', 'd-flex', 'justify-content-evenly');
fetch("https://restcountries.com/v3.1/all?fields=flags,name,capital,region,population")
    .then(res => {
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error("Błąd pobierania danych");
    }
})
    .then(objectArray => {
    Object.keys(objectArray).forEach(objectArrayKey => {
        const country = objectArray[objectArrayKey];
        const countryDiv = document.createElement("div");
        const cardDiv = document.createElement("div");
        const cardBody = document.createElement("div");
        countryDiv.classList.add("container-fluid", 'col-12', 'col-lg-3', 'col-xl-2', 'd-flex', 'mb-4', 'p-0');
        countryDiv.id = country.name.common;
        countryDiv.addEventListener("click", () => alert(country.name.common));
        cardDiv.classList.add('card', 'border-0', 'p-0', "cardDiv");
        cardBody.classList.add('card-body', 'text-white');
        const flag = document.createElement("img");
        flag.classList.add('card-img-top');
        const nameParagraph = document.createElement("p");
        const capitalParagraph = document.createElement("p");
        const regionParagraph = document.createElement("p");
        const populationParagraph = document.createElement("p");
        flag.src = country.flags.png;
        nameParagraph.innerHTML = `<b>${country.name.common}</b>`;
        capitalParagraph.innerHTML = `<b>Capital:</b> ${country.capital}`;
        regionParagraph.innerHTML = `<b>Region:</b> ${country.region}`;
        populationParagraph.innerHTML = `<b>Population:</b> ${country.population}`;
        cardBody.appendChild(nameParagraph);
        cardBody.appendChild(capitalParagraph);
        cardBody.appendChild(regionParagraph);
        cardBody.appendChild(populationParagraph);
        cardDiv.appendChild(flag);
        cardDiv.appendChild(cardBody);
        countryDiv.appendChild(cardDiv);
        if (Number(objectArrayKey) % 4 == 0 || Number(objectArrayKey) == 0) {
            countriesRow = document.createElement("div");
            countriesRow.classList.add('row', 'd-flex', 'flex-row', 'justify-content-evenly');
            countriesDiv.appendChild(countriesRow);
        }
        countriesRow.appendChild(countryDiv);
        // console.log(`Nazwa: ${country.name.common}, Stolica: ${country.capital}, Region: ${country.region}, Populacja: ${country.population}`);
    });
});
