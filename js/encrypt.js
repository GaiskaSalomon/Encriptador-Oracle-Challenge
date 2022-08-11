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
        var encryptText = text.replace(/e/igm, 'enter');
        var encryptText = encryptText.replace(/i/igm, 'imes');
        var encryptText = encryptText.replace(/a/igm, 'ai');
        var encryptText = encryptText.replace(/o/igm, 'ober');
        var encryptText = encryptText.replace(/u/igm, 'ufat');
    }

    document.getElementById('withoutText').style.display = 'none';
    document.getElementById('withText').style.display = 'flex';
    document.getElementById('textEncrypted').innerHTML = encryptText;
}  

function decrypt(){
    var text = document.getElementById('textInput').value;

    if(text == ''){
        document.getElementById('withoutText').style.display = 'flex';
        document.getElementById('withText').style.display = 'none';
        return;
    }else{
        var encryptText = text.replace(/enter/igm, 'e');
        var encryptText = encryptText.replace(/imes/igm, 'i');
        var encryptText = encryptText.replace(/ai/igm, 'a');
        var encryptText = encryptText.replace(/ober/igm, 'o');
        var encryptText = encryptText.replace(/ufat/igm, 'u');
    }

    document.getElementById('withoutText').style.display = 'none';
    document.getElementById('withText').style.display = 'flex';
    document.getElementById('textEncrypted').innerHTML = encryptText;   
}

function copy(){
    var content = document.querySelector('#textEncrypted');
    content.select();
    if (content == ''){
        alert('Favor de copiar texto cifrado, gracias.');
        return;
    }else{
        document.execCommand('copy');
        document.getElementById('textInput').innerHTML = '';    
    }
}