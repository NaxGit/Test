function alphaIcons(iconData)
{
iconData.forEach
(
(i) =>
{
let icon = document.createElement("img");
icon.id = i.LiqU;
icon.src ="./codex/" + i.LiqU + ".png";
icon.setAttribute("onerror", "this.src='./codex/0alt.png';");
icon.setAttribute("onclick", "alphaTrays('" + i.LiqU + "')");
icons.append(icon);
});};