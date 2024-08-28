
let i = 0;
let interval_id_display_dots = 0;

let msgs = ['Initializing Hacking',
    'Reading your Files',
    'Password files detected',
    'Sending all passwords and personal files to server',
    'Cleaning up'
];


const generate_msg = () => {
    let e = document.createElement('div');
    e.insertAdjacentHTML('afterbegin', `<span class="text">${msgs[i]}</span>
        <span id="dot-${i}" class="dots"></span>`);
    e.classList.add('.msg');
    document.querySelector('.terminal').append(e);
}


const display_dots = () => {
    let j = 0;
    let dots;
    if (i > 1) {
        dots = document.querySelector("#dot-"+(i-2));
        dots.innerHTML = "";
    }
    dots = document.querySelector("#dot-"+(i-1))
    interval_id_display_dots = setInterval(() => {
        if (j == 3){
            dots.innerHTML = "";
            j = 0;
        }else {
            dots.append(".");
            j++;
        }
    }, 600);
}

const display_msg = () => {
    return new Promise((resolve, reject) => {
        generate_msg()
        resolve(i);
    })
}

let i_id;

display_msg().then(() => {
    i++;
    display_dots();

    i_id = setInterval(() => {

        display_msg().then((result) => {
            if (i > 0) {
                clearInterval(interval_id_display_dots);
            }
            display_dots();
        }).finally(()=>{
            console.log(""+ i);

        });
        i++;
        console.log(" i "+i);
    
        if (i == msgs.length)
            clearInterval(i_id);
    }, 7000);
})
