const words=document.getElementsByTagName("*");
for(var x=0;x<words.length;x++)
{
    var word=words[x];
    for(var y=0;y<word.childNodes.length;y++)
    {
        var nd=word.childNodes[y];
        if(nd.nodeType===3)//actual text of element
        {
            var txt=nd.nodeValue;
            var rtxt=txt.replace("Blockchain","Glorified LinkedList");
            if(rtxt!==txt){
                element.replaceChild(document.createTextNode(rtxt),nd);
            }
        }
    }
}