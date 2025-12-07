NumberOfSeries = prompt("Nechta seriallar ko'rgansiz?")

seriesDB = {
    count: NumberOfSeries,
    series: [],
    actors: [],
    genres: [],
}

for (let i=0; i<2; i++) {
    const a = prompt("So'nggi ko'rgan serialingiz?")
    const b = +prompt("Necha baho berasiz?")

    if(a !== null && a !== '' && b != null && b !==''){
        seriesDB.series[a] = b
    } else{
        i--
    }
}


for (let h=0; h<2; h++) {
    const c = prompt('Sizning sevimli aktyoringiz?')

    if (c !== null && c !== '') {
        seriesDB.actors[c] = c
    } else{
        h--
    }
}


for (let j=0; j<2; j++) {
    const e = prompt('Sizning sevimli janrigiz?')

    if (e !== null && e !== ''){
        seriesDB.genres[e] = e
    } else{
        j--
    }
}
console.log(seriesDB);


if (seriesDB.count < 5){
    console.log("Siz kam serial ko'rgan ekansiz.");
    
}else if (seriesDB.count > 5 && seriesDB.count <= 10){
    console.log("Siz classic tamoshabin ekansiz.");
    
}else if (seriesDB.count > 10){
    console.log("Siz serialchi zvezda ekansiz.");
    
}