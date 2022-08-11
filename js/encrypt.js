function encrypt(){
    var text = document.getElementById('textInput').value;

    if(/[A-Z]/.test(text) || /[Á-ú]/.test(text) || /^\s/.test(text)){
        alert('El texto no puede comenzar con espacio en blanco como primer caracter, no puede contener mayúsculas ni acentos. Favor de corregir el texto, gracias.');
        return;
    }

    if(text == ''){
        document.getElementById('withoutText').style.display = 'flex';
        document.getElementById('withText').style.display = 'none';
        return;
    }else{
        var encryptedText = text.replace(/e/igm, 'enter');
        var encryptedText = encryptedText.replace(/i/igm, 'imes');
        var encryptedText = encryptedText.replace(/a/igm, 'ai');
        var encryptedText = encryptedText.replace(/o/igm, 'ober');
        var encryptedText = encryptedText.replace(/u/igm, 'ufat');
    }

    document.getElementById('withoutText').style.display = 'none';
    document.getElementById('withText').style.display = 'flex';
    document.getElementById('textEncrypted').innerHTML = encryptedText;
}  

function decrypt(){
    var encryptedText = document.getElementById('textEncrypted').value;

    if(encryptedText == ''){
        document.getElementById('withoutText').style.display = 'flex';
        document.getElementById('withText').style.display = 'none';
        return;
    }else{
        var text = encryptedText.replace(/enter/igm, 'e');
        var text = text.replace(/imes/igm, 'i');
        var text = text.replace(/ai/igm, 'a');
        var text = text.replace(/ober/igm, 'o');
        var text = text.replace(/ufat/igm, 'u');
    }

    document.getElementById('textEncrypted').innerHTML = text;   
}

function copy(){
    var encryptedText = document.querySelector('#textEncrypted');
    encryptedText.select();
    document.execCommand('copy');
    document.getElementById('textInput').value = '';
    document.getElementById('textInput').placeholder = 'Favor de pegar el texto cifrado que copiaste';  
    console.log(encryptedText); 
}