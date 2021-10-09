const nums = document.querySelectorAll('.num')
const display = document.querySelector('input')
const exp = document.querySelectorAll('.exp')
const nightmode = document.querySelector('.night')
const mycal = document.querySelector('.mycal')

nightmode.addEventListener('click', function() {

    nightmode.classList.toggle('btn1-night')
    mycal.classList.toggle('mycal-night')
    display.classList.toggle('input-night')
    document.body.classList.toggle('cal-night')
    for (let n of nums) {
        n.classList.toggle('button-night')
    }
    for (let e of exp) {
        e.classList.toggle('button-night')
    }


})
let t = '';
let result = 0;
let clickednum = 0;
const evaluate = {
    add: false,
    sub: false,
    mul: false,
    div: false,
    rem: false
}
for (let num of nums) {
    num.addEventListener('click', function() {
        clickednum = parseInt(num.textContent)

        for (let obj in evaluate) {
            if (evaluate[obj] === true) {
                switch (obj) {
                    case 'add':
                        result += clickednum;
                        display.value = `${t}${clickednum}`;
                        evaluate[obj] = false;
                        break;
                    case 'sub':
                        result -= clickednum;
                        display.value = `${t}${clickednum}`;
                        evaluate[obj] = false;
                        break;
                    case 'mul':
                        result *= clickednum;
                        display.value = `${t}${clickednum}`;
                        evaluate[obj] = false;
                        break;
                    case 'div':
                        result /= clickednum;
                        display.value = `${t}${clickednum}`;
                        evaluate[obj] = false;
                        break;
                    case 'rem':
                        result %= clickednum;
                        display.value = `${t}${clickednum}`;
                        evaluate[obj] = false;
                        break;
                }
                break;
            } else {
                display.value = `${clickednum}`
                if (result === 0) {
                    result = clickednum
                }
            }
        }


    })
}

for (let ex of exp) {
    ex.addEventListener('click', function() {
        switch (ex.innerText) {
            case '+':
                if (result !== 0) {
                    t = `${result}+`
                    display.value = t
                    evaluate.add = true;
                }
                break;
            case '%':
                t = `${result}%`
                display.value = t
                evaluate.rem = true;
                break;
            case '/':
                if (result !== 0) {
                    t = `${result}/`
                    display.value = t
                    evaluate.div = true;
                }
                break;
            case '*':
                if (result !== 0) {
                    t = `${result}*`
                    display.value = t
                    evaluate.mul = true;
                }
                break;
            case '-':
                if (result !== 0) {
                    t = `${result}-`
                    display.value = t
                    evaluate.sub = true;
                }
                break;
            case '=':
                display.value = result;
                clickednum = result;

                break;
            case 'C':
                result = 0;
                display.value = '0';
                break;
            case '00':
                let addzero = `${result}00`
                result = parseInt(addzero)
                display.value = `${result}`
        }
    })
}
