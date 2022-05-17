lst = document.querySelectorAll("a");
var filter = Array.prototype.filter;


filtered = filter.call(lst, function(node){
    return node.innerHTML.includes("available tests around");
});

for(const element of filtered){
    alert(element.innerHTML);
}
return filtered;