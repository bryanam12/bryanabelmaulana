const txtElement = ['Mahasiswa UNIPMA'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function mengetik(){

    if(count == txtElement.length){
        count= 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(mengetik, 500);
})();