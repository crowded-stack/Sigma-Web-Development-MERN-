
let msgs = ['Initializing Hacking',
    'Reading your Files',
    'Password files detected',
    'Sending all passwords and personal files to server',
    'Cleaning up'
];


const display_msgs = async () => {
    let dots_display_interval_id;
    for (i of msgs.keys()) {
        await delay();
        display(msgs[i], i);
        clearInterval(dots_display_interval_id);
        dots_display_interval_id = display_dots(i);
    }
}

const delay = () => {
    let delay = Math.ceil(Math.random() * 7);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay * 1000);
    })
}

const display = (msg, i) => {
    let e = document.createElement('div');
    e.insertAdjacentHTML('afterbegin', `<span class="text">${msg}</span>
        <span id="dot-${i}" class="dots"></span>`);
    e.classList.add('msg');
    document.querySelector('.terminal').append(e);
}

const display_dots = (i) => {
    let j = 0;
    let dots;
    if (i > 0) {
        dots = document.querySelector("#dot-"+(i-1));
        dots.innerHTML = "";
    }
    dots = document.querySelector("#dot-"+(i))
    return setInterval(() => {
        if (j == 3){
            dots.innerHTML = "";
            j = 0;
        }else {
            dots.append(".");
            j++;
        }
    }, 600);
}

display_msgs();
