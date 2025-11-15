const liItems=document.getElementsByTagName('li');

console.log("documento: "+document.nodeType);
console.log("HTMLCollection: "+liItems.nodeType);

for(const liItems of liItems) {
    console.log()
}