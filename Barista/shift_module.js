function shiftChange() {
  db.friends.update(2, {name: "Number 2"}).then(function (updated) {
    if (updated)
      console.log ("Friend number 2 was renamed to Number 2");
    else
      console.log ("Nothing was updated - there were no friend with primary key: 2");
  });
}
async function shsiftCheque() {
  let idata = await new Dexie("Kings").open();
  let confi = await idata.table("config");
  let query = await confi.get({cfKey: "shift"});
  
  shift = query.port;

  console.log(shift);
  console.log("go");
}


async function nddame() {
  //
      // Declare Database
      // 
  let idata = await new Dexie("Kings").open();
  let confi = await idata.table("config");

  let query = await confi.get({cfKey: "shift"});

  phyil =  Dexie.getByKeyPath(query, "port");

  console.log(phyil);
}


myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}