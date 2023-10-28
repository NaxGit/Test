function alphaTrays(selected)
{
icons.style.display = "none";
trays.innerHTML = "";

if (Pagination === "catalogue")
{
bottle = filedData.find(({ LiqU }) => LiqU === selected);
Trays(bottle);
};
if (Pagination === "salespage")
{
const query = idata.transaction("stock", "readonly").objectStore("stock").get(selected);
query.onsuccess = () =>
{
bottle = query.result; Trays(bottle);
}
};
};



function Trays(i) {
let image = document.createElement("img");
image.src ="./codex/" + i.LiqU + ".png";
image.setAttribute("onerror", "this.src='./codex/0alt.png';");

let info = document.createElement("div");

let item = document.createElement("input"); item.id = "item"; item.setAttribute("type", "text"); item.setAttribute("value", i.Item);
let cost = document.createElement("input"); cost.id = "cost"; cost.setAttribute("type", "text"); cost.setAttribute("value", i.Cost);
let sell = document.createElement("input"); sell.id = "sell"; sell.setAttribute("type", "text"); sell.setAttribute("value", i.Sell);
let liqu = document.createElement("input"); liqu.id = "liqu"; liqu.setAttribute("type", "text"); liqu.setAttribute("value", i.LiqU);

let spots = document.createElement("div"); spots.className = "spots";

let push = document.createElement("button");
    push.classList = "switch confirmation";
    push.innerText = "✔";
    push.setAttribute("onclick", "Confirmation('" + i.LiqU + "')");
    
let pull = document.createElement("button");
    pull.classList = "switch cancellation";
    pull.innerText = "✖";
    pull.setAttribute("onclick", "Cancellation()");
    
spots.append(pull, push);
info.append(item, cost, sell, liqu, spots);
trays.append(image, info);
    
trays.style.display = "block";
}






function Confirmation(i) {event.preventDefault();

let storage;
if (Pagination === "catalogue"){storage = "stock";}
if (Pagination === "salespage"){storage = "sales";}

let costinn = document.getElementById("cost").value;
let sellinn = document.getElementById("sell").value;

let costIn = Number(costinn);
let sellIn = Number(sellinn);

bottle.Cost = costIn;
bottle.Sell = sellIn;

const query = idata.transaction("stock", "readonly").objectStore("stock").get(i);
query.onsuccess = () =>
{
if (Pagination === "catalogue"){console.log("catalogue check"); Bottle = filedData.find(({ LiqU }) => LiqU === i);}
if (Pagination === "salespage"){Bottle = query.result;    console.log("134 okau");}

    delete Bottle.Shows;

    const tamp = Date.now();
    const now = new Date();
    const DY = now.getDay();
    const Ht = now.getHours();
    const Mt = now.getMinutes();
    const St = now.getSeconds();
    
    Bottle.Shift = shift;
    Bottle.Shows = 1;
    Bottle.Stamp = tamp;
    Bottle.Stime = Ht + ":" + Mt + ":" + St;
    Bottle.Stint = DY;
    
    //----------------------------------------------------------
    const transaction = idata.transaction(storage, "readwrite");
        //   transaction.oncomplete = (event) => {PIN.innerHTML = "📖";};
        //   transaction.onerror = (event) => {PIN.innerHTML = "📕";};
    
    const objectStore = transaction.objectStore(storage);
    const objectStoreRequest = objectStore.add(Bottle);
        //   objectStoreRequest.onsuccess = (event) => {PIN.innerHTML = "📚";};
    //----------------------------------------------------------------------

trays.innerHTML = "";
trays.style.display = "none";
trays.style.height = "0";

icons.style.display = "grid";
    
    };
    };




    function Cancellation()
{
trays.style.display = "none";
trays.style.height = "0";
trays.innerHTML = "";
icons.style.display = "grid";
};
