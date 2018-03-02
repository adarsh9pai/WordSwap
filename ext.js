var words = document.getElementsByTagName('*');
for (var x = 0; x < words.length; x++) {
    var word = words[x];
    for (var y = 0; y < word.childNodes.length; y++) {
        var nd = word.childNodes[y];
        if (nd.nodeType === 3)//actual text of attr
         {
            var text = nd.nodeValue;
            text=text.toLowerCase();
            var rtext= text.replace("blockchain", 'mulitple copies of a giant Excel spreadsheet');
            if (rtext !== text) {
                word.replaceChild(document.createTextNode(rtext), nd);
            }
        }
    }
}