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
    const signs = ['+', '-', '*', '/'];

    let arg1, arg2, oper;

    for (const every of str) {
      if (signs.includes(every)) {
        oper = every;
      }
    };
    
    arg1 = +str.slice(0, str.indexOf(oper));
    arg2 = +str.slice(str.indexOf(oper) + 1);
    
    switch(oper) {
      case '+': return arg1 + arg2;
      break;
      case '-': return arg1 - arg2;
      break;
      case '*': return arg1 * arg2;
      break;
      case '/': return arg1 / arg2;
      default : return 'how you do it?';
    };
  };


const equal = () => {
    let exp = document.form.display.value;
    return document.form.display.value = eval(exp);
};