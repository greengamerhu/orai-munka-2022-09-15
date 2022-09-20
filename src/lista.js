let lista = []
export function hozzad(szam) {
    if (szam < 0) {
        console.log("Hiba")
    }
    else  {
        lista.push(szak)
    }
}
export function atlag() {
    let atlag = 0
    for (let i = 0; i < lista.length; i++) {
        atlag += lista[i];
        return atlag / lista.length;
        
    }
}