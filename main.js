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