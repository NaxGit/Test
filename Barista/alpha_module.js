function alphaIcons(iconData, tagOS, shift)
{
    iconData.forEach
    (
        (i) =>
        {
        let edge = document.createElement('div');
            edge.className = "edgeIcon";
            edge.onclick = function(){hello(); alphaTrays(i, tagOS, shift)};

        let icon = document.createElement('div');
            icon.className = "IconHome";
            icon.style.backgroundImage = "url('./codex/" + i.LiqU + ".png')";

        let nick = document.createElement('div');
            nick.className = "nickName";
            nick.textContent = i.Item.split(" ")[0];

             edge.append(icon, nick);
            icons.append(edge);
        }
    );
};

function alphaTrays(i, tagOS, shift)
{
    let boxy = document.createElement('div');
        boxy.className = "TrayBoxy";

    let imge = document.createElement('div');
        imge.className = "TrayImge";
        imge.style.backgroundImage = "url('./codex/" + i.LiqU + ".png')";

    let form = document.createElement('div');
        form.className = "TrayForm";
        let item = document.createElement("div"); item.id = "IOitem";
            item.innerText = i.Item;
        let cost = document.createElement("div"); cost.id = "IOcost"; cost.setAttribute("contenteditable", "true");
            cost.innerText = i.Cost;
        let sell = document.createElement("div"); sell.id = "IOsell"; sell.setAttribute("contenteditable", "true");
            sell.innerText = i.Sell;
        let cTag = document.createElement("div"); cTag.id = "cTag"; cTag.innerText = "Cost";
        let sTag = document.createElement("div"); sTag.id = "sTag"; sTag.innerText = "Sell";

        let taps = document.createElement("div"); taps.id = "taps";

        let push = document.createElement("div"); push.id = "PushDot";
        push.classList = "btn fill";
        push.textContent = "✔";
        push.onclick = function(){Confirmation(i, tagOS, shift)};

    let pull = document.createElement("div"); pull.id = "PullDot";
        pull.classList = "btn outline";
        pull.textContent = "✖";
        pull.setAttribute("onclick", "Cancellation()");

    taps.append(pull, push);

    form.append(item, cTag, cost, sTag, sell, taps);
boxy.append(imge, form);
trays.append(boxy);

trays.style.display = "block";
};

hello = () =>
    {
        icons.style.display = "none";
        trays.innerHTML = "";
    }


async function Confirmation(Bottle, tagOS, Shift)
{
    let costInput = Number(document.getElementById("IOcost").textContent);
    let sellInput = Number(document.getElementById("IOsell").textContent);

const tamp = Date.now();
const now = new Date();
const DY = now.getDay();
const Ht = now.getHours();
const Mt = now.getMinutes();
const St = now.getSeconds();

    Bottle.Cost = costInput;
    Bottle.Sell = sellInput;
    Bottle.Shift = Shift;
    Bottle.Shows = 1;
    Bottle.Stamp = tamp;
    Bottle.Stime = Ht + ":" + Mt + ":" + St;
    Bottle.Stint = DY;




let idata = await new Dexie("Kings").open();
let confi = await idata.table(tagOS);
let some = await confi.add(Bottle);

	

trays.innerHTML = "";
trays.style.display = "none";
trays.style.height = "0";

icons.style.display = "grid";
    
    };


    function Cancellation()
    {
    trays.style.display = "none";
    trays.style.height = "0";
    trays.innerHTML = "";
    
    table.style.display = "block";
    table.style.display = "grid";
    };

