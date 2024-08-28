
const loadPrism = (src, callback) => {
    let st = document.createElement("script");
    st.src = src;
    st.onload = callback(0);
    document.head.append(st);
}

const callback = (status) => {
    if (status == 0) {
        callSuccess("Script loaded");
    }else {
        callFailed("Failed to load");
    }
}

const callSuccess = (status) => {
  console.log(status);
}

const callFailed = (status) => {
  console.log(status);
}

loadPrism('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js', callback);


// Callback/Paramid of Doom 

const load_script = (src, call_back) => {
    let st = document.createElement('script');
    st.src = src;
    st.onload = call_back(true)

}

const call_back = (status) => {
    success(status, () => {
      console.log("Loaded");
    });
}

const success = (status, call_back1) => {
  if (status) {
    call_back1();
    proceed([1,2,3,4], (data) => {
      data.forEach(element => {
        console.log(element);
      });
    });
  }
}

const proceed = (data, proceedCallback) => {
  if (data.length > 0) {
    proceedCallback(data);
  }
}



