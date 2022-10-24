let bio = document.querySelector('#bio')
let res = document.querySelector('#res')
let trans = document.querySelector('#trans')
let words = document.querySelector('#words')
let lett = document.querySelector('#lett')
let i = 1
let txt = ''
let sec = document.querySelector('#sec')
let out = document.querySelector('#output-text')
bio.addEventListener('input',function(){
    txt = bio.value
    // console.log(txt)

    let ls = txt[txt.length-1]
    // console.log(ls)
    let ln = txt.length
    if(ls==' '){
        i+=1
    }

    if(ln>=50){
        lett.style.color = 'red'
        bio.disabled = true
    }else{
        lett.style.color = '#fdf6e3'
    }

    words.textContent = i
    lett.textContent = ln+'/50'

})


res.addEventListener('click', function(){
    bio.value = ''
    bio.disabled = false
    lett.style.color = '#fdf6e3'
    words.textContent = 0
    lett.textContent = 0+'/50'
})


// TRANSLATE 



trans.addEventListener('click', function(){

    const letter = ['a', 'b', 'c', 'd', 'e', 'f',
'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r',
's', 't', 'u', 'v', 'w', 'x',
'y', 'z', '1', '2', '3', '4',
'5', '6', '7', '8', '9', '0' ];

const code = [ ".-",   "-...", "-.-.", "-..",  ".",
"..-.", "--.",  "....", "..",   ".---",
"-.-",  ".-..", "--",   "-.",   "---",
".--.", "--.-", ".-.",  "...",  "-",
"..-",  "...-", ".--",  "-..-", "-.--",
"--..", "|"]


console.log(letter.length == code.length)

    let morse = '' 
    console.log('hi')
    let sbio = bio.value.toLowerCase()
    console.log(bio.length)
    for (let i = 0; i < sbio.length; i++) {
    for (let j = 0; j < letter.length; j++) {
        if (sbio[i] == letter[j]) {
            morse = morse.concat(code[j], " ")
        break;
        }
    }
    }
    out.textContent = morse
    sec.style.display = 'flex';
    document.body.style.scrollBehavior = 'smooth'
    window.location = '#sec'
})

let copy = document.querySelector('#copy')
let ott = document.querySelector('#ott')

copy.addEventListener('click', function(){
    navigator.clipboard.writeText(out.textContent.trim());
    ott.style.display = 'flex';
    setTimeout(function(){
        ott.style.display = 'none'
    }, 1000)
})