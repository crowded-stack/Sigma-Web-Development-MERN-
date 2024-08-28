
let createCard = (title, channelName, views, whenPosted, duration, thumubnailUrl) => {

    let card = document.createElement("div");
    card.classList.add("card");

    card.insertAdjacentHTML('afterbegin', `<div class="photo">
            <span class="duration">${duration}</span>
            <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ" alt="">
         </div>
         
         <div class="desc">
            <span class="title"><strong>${title}</strong></span>
                <div class="about">
                    <span class="channel-name">${channelName}</span>
                    <div class="dot"></div>
                    <span class="views">${calculateViews(views)}</span>
                    <div class="dot"></div>
                    <span class="when-posted">${whenPosted}</span>
                </div>
         </div>`);

    document.querySelector('.container').append(card);

}

let calculateViews = (views) => {
    let _views = views.toString();

    if (views >= 1000 && views < 1000000) {
        if (views < 100000) {
            if (_views[_views.length - 3] == 0) {
                _views = `${_views.slice(0, _views.length - 3)}K views`;
            } else {
                _views = `${_views.slice(0, _views.length - 3)}.${_views[_views.length - 3]}K views`;
            }
        } else {
            _views = `${_views.slice(0, _views.length - 3)}K views`;
        }

    } else if (views >= 1000000 && views < 100000000) {
        if (_views[_views.length - 6] == 0) {
            _views = `${_views.slice(0, _views.length - 6)}M views`;
        } else {
            _views = `${_views.slice(0, _views.length - 6)}.${_views[_views.length - 6]}M views`;
        }
    } else {
        if (_views[_views.length - 8] == 0) {
            _views = `${_views.slice(0, _views.length - 8)}B views`;
        } else {
            _views = `${_views.slice(0, _views.length - 8)}.${_views[_views.length - 8]}B views`;
        }
    }
    
    return _views;
}


