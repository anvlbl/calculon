const insert = (num) => {
    document.form.display.value = document.form.display.value + num; 
};

const clean = () => {
    document.form.display.value = "";
};

const back = () => {
    let str = document.form.display.value
    str = str.slice(0, str.length - 1);
    return document.form.display.value = str;
};

const eval = (str) => {
    for (const every of str) {
        if ((typeof(+every) !== 'number') && (every !== '.')) {
            
        }
    }
}

const equal = () => {
    let exp = document.form.display.value;
}