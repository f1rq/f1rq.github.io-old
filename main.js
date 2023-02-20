function detailsToggled(e)
{
  if (e.srcElement.open)
    return;

  const copy = document.createElement("details");
  copy.innerHTML = e.srcElement.innerHTML;
  copy.addEventListener('toggle', detailsToggled);

  e.srcElement.parentNode.replaceChild(copy, e.srcElement);
}
// Add the event listener to all details elements on the page
document.querySelectorAll('details').forEach(d =>
{
  d.addEventListener('toggle', detailsToggled);
});



function copy(that){
  var inp =document.createElement('input');
  document.body.appendChild(inp)
  inp.value =that.textContent
  inp.select();
  document.execCommand('copy',false);
  inp.remove();
  document.getElementById("alert").innerHTML = "Copied the text.";
  setTimeout(() => {
    document.getElementById("alert").innerHTML = "";  
    // code here
    },3000)
}
  