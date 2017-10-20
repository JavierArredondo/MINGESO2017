var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('CodeContainer'), {
    mode: "python",
    lineNumbers: true,
    theme: "base16-light"
}).setValue("Escriba aquí su código ...");

