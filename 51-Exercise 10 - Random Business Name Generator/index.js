console.log("-----------------Exercise 10: Random Business Name Generator-----------------");
console.log();
console.log();
console.log();


let business_name = "";

let adjectives = "Crazy Amazing Fire ";
let shop_types = "Engine Foods Garments ";
let other_words = "Bros Limited Hub ";

let rand_adj = Math.floor(Math.random() * 3);
let rand_sh_tp = Math.floor(Math.random() * 3);
let rand_oth_wd = Math.floor(Math.random() * 3);

let get_adj = () => {
    let start = 0;
    let end = 0;
    for (let i = 0; i < 3; i++) {
        end = adjectives.indexOf(" ", start);
        if (rand_adj == i) {
            if (i == 2) {
                return adjectives.slice(start, end + 1);
            }
            return adjectives.slice(start, end);
        }
        start = end + 1;
    }
}

let get_sh_tp = () => {
    let start = 0;
    let end = 0;
    for (let i = 0; i < 3; i++) {
        end = shop_types.indexOf(" ", start);
        if (rand_sh_tp == i) {
            if (i == 2) {
                return shop_types.slice(start, end + 1);
            }
            return shop_types.slice(start, end);
        }
        start = end + 1;
    }
}

let get_oth_wd = () => {
    let start = 0;
    let end = 0;
    for (let i = 0; i < 3; i++) {
        end = other_words.indexOf(" ", start);
        if (rand_oth_wd == i) {
            if (i == 2) {
                return other_words.slice(start, end + 1);
            }
            return other_words.slice(start, end);
        }
        start = end + 1;
    }
}

business_name = `${get_adj()} ${get_sh_tp()} ${get_oth_wd()}`;
console.log(business_name);

