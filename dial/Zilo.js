// Vod Vodka
// Spi Spirits
// Bra Brandy
// Rum Rum
// Whi Whiskey
// Teq Tequila
// Gin Gin
// Bee Beer
// Cid Cider
// Mea Mead
// Liq Liqueurs
// Sak Sake
// Fwi FortifiedWine
// Wwi WhiteWine
// Rwi RedWine
// Abs Absinthe
// Sco ScotchWhisky
// Cog Cognac
// Bou Bourbon
// Cha Champagne

const filedData =
[
{ LiqU: "AmarLiq375", Cost: 1360, Sell: 1360, Item: "Amarula Cream Liqueur 375ml" },
{ LiqU: "AmarLiq750", Cost: 2450, Sell: 2450, Item: "Amarula Cream Liqueur 750ml" },
{ LiqU: "AmarLiqLtr", Cost: 3400, Sell: 3400, Item: "Amarula Cream Liqueur 1L" },

{ LiqU: "BestCML250", Cost: 380,  Sell: 380,  Item: "Best Cream Marula Liqueur 250ml" },
{ LiqU: "BestCML750", Cost: 1200, Sell: 1200, Item: "Best Cream Marula Liqueur 750ml" },

{ LiqU: "BestGLD250", Cost: 380,  Sell: 380,  Item: "Best Gin London Dry 250ml" },
{ LiqU: "BestGLD750", Cost: 1200, Sell: 1200, Item: "Best Gin London Dry 750ml" },

{ LiqU: "BestVOP250", Cost: 380,  Sell: 380,  Item: "Best Vodka Orignal Premium 250ml" },
{ LiqU: "BestVOP750", Cost: 1200, Sell: 1200, Item: "Best Vodka Orignal Premium 750ml" },

{ LiqU: "BestWCB250", Cost: 380,  Sell: 380,  Item: "Best Whisky Classic Blended 250ml" },
{ LiqU: "BestWCB750", Cost: 1200, Sell: 1200, Item: "Best Whisky Classic Blended 750ml" },

{ LiqU: "BlWhWhi375", Cost: 320,  Sell: 320,  Item: "Black And White Whiskey 375ml" },
{ LiqU: "BlWhWhi750", Cost: 1400, Sell: 1400, Item: "Black And White Whiskey 750ml" },
{ LiqU: "BlWhWhiLtr", Cost: 1850, Sell: 1850, Item: "Black And White Whiskey 1L" },

{ LiqU: "CounSpi250", Cost: 270,  Sell: 270,  Item: "County Potable Spirit 250ml" },
{ LiqU: "CounSpi350", Cost: 480,  Sell: 480,  Item: "County Potable Spirit 350ml" },
{ LiqU: "CounSpi750", Cost: 780,  Sell: 780,  Item: "County Potable Spirit 750ml" },

{ LiqU: "HuntWhi250", Cost: 380,  Sell: 380,  Item: "Hunters Choice Whiskey 250ml" },
{ LiqU: "HuntWhi350", Cost: 530,  Sell: 530,  Item: "Hunters Choice Whiskey 350ml" },
{ LiqU: "HuntWhi750", Cost: 1120, Sell: 1120, Item: "Hunters Choice Whiskey 750ml" },

{ LiqU: "KibaVod250", Cost: 250,  Sell: 250,  Item: "Kibao Vodka 250ml" },
{ LiqU: "KibaVod350", Cost: 520,  Sell: 520,  Item: "Kibao Vodka 350ml" },
{ LiqU: "KibaVod750", Cost: 740,  Sell: 740,  Item: "Kibao Vodka 750ml" },

{ LiqU: "ViceBra250", Cost: 520,  Sell: 520,  Item: "Viceroy Brandy 250ml" },
{ LiqU: "ViceBra375", Cost: 750,  Sell: 750,  Item: "Viceroy Brandy 375ml" },
{ LiqU: "ViceBra750", Cost: 1500, Sell: 1500, Item: "Viceroy Brandy 750ml" },
{ LiqU: "ViceBra10Y", Cost: 3720, Sell: 3720, Item: "Viceroy Brandy 750ml 10 Years Old" },

{ LiqU: "CariSpi250", Cost: 300,  Sell: 300,  Item: "Caribia Cane Spirit 250ml" },
{ LiqU: "CariSpi750", Cost: 890,  Sell: 890,  Item: "Caribia Cane Spirit 750ml" },

{ LiqU: "GilbGin250", Cost: 520,  Sell: 520,  Item: "Gilbeys London Dry Gin 250ml" },
{ LiqU: "GilbGin350", Cost: 720,  Sell: 720,  Item: "Gilbeys London Dry Gin 350ml" },
{ LiqU: "GilbGin750", Cost: 1550, Sell: 1550, Item: "Gilbeys London Dry Gin 750ml" },

{ LiqU: "KenySpi250", Cost: 420,  Sell: 420,  Item: "Kenya Cane Smooth Spirit 250ml" },
{ LiqU: "KenySpi350", Cost: 520,  Sell: 520,  Item: "Kenya Cane Smooth Spirit 350ml" },
{ LiqU: "KenySpi750", Cost: 810,  Sell: 810,  Item: "Kenya Cane Smooth Spirit 750ml" },

{ LiqU: "SmirVOD250", Cost: 520,  Sell: 520,  Item: "Smirnoff Red Vodka 250ml" },
{ LiqU: "SmirVOD350", Cost: 600,  Sell: 600,  Item: "Smirnoff Red Vodka 350ml" },
{ LiqU: "SmirVOD750", Cost: 1600, Sell: 1600, Item: "Smirnoff Red Vodka 750ml" },
{ LiqU: "SmirVODLtr", Cost: 2000, Sell: 2000, Item: "Smirnoff Red Vodka 1L" },

{ LiqU: "BailLiq375", Cost: 750,  Sell: 750,  Item: "Baileys Original Cream Liqueur 375ml" },
{ LiqU: "BailLiq750", Cost: 2700, Sell: 2700, Item: "Baileys Original Cream Liqueur 750ml" },

{ LiqU: "CaptRum250", Cost: 400,  Sell: 400,  Item: "Captain Morgan Gold Rum 250ml" },
{ LiqU: "CaptRum750", Cost: 1100, Sell: 1100, Item: "Captain Morgan Gold Rum 750ml" },
{ LiqU: "CaptRumLtr", Cost: 2800, Sell: 2800, Item: "Captain Morgan Gold Rum 1L" },

{ LiqU: "ChroGin250", Cost: "240", Sell: "240", Item: "Chrome Gin 250ml" },
{ LiqU: "ChroGin750", Cost: "690", Sell: "690", Item: "Chrome Gin 750ml" },

{ LiqU: "ChroLem250", Cost: "240", Sell: "240", Item: "Chrome Lemon Vodka 250ml" },
{ LiqU: "ChroLem750", Cost: "690", Sell: "690", Item: "Chrome Lemon Vodka 750ml" },

{ LiqU: "ChroVod250", Cost: "240", Sell: "240", Item: "Chrome Vodka 250ml" },
{ LiqU: "ChroVod750", Cost: "690", Sell: "690", Item: "Chrome Vodka 750ml" },

{ LiqU: "TripVod250", Cost: 230, Sell: 230, Item: "Triple Ace Vodka 250ml" },
{ LiqU: "TripVod750", Cost: 700, Sell: 700, Item: "Triple Ace Vodka 750ml" },

];














// SCOTTISH LEADER
// Scottish Leader has embraced a new collaborative approach in whisky
// DURBANVILLE HILLS
// Durbanville Hills is a mere 20 minutes from Cape Town’s
// CRUZ VODKA
// Welcome to the CRUZ Life. Your world. Your Vodka. Cruz
// WINES
// CELLAR CASK
// Cellar Cask wines are skillfully selected by their skilled cellar […]
// CAPRICE WINE
// Caprice Red wine is produced from monstrell grapes which are […]
// DROSTDY-HOF
// Drostdy-Hof Wine is a rich, smooth and intense tropical fruit […]
// ALTAR WINE
// Strictly for sale to churches only Available in select bookshops […]
// NEDERBURG
// Nederburg is one of the best-loved names in wine, with […]
// 4TH STREET
// Where there’s a party, there’s 4th Street. An easy-drinking wine […]
// ALTO WINE
// Heritage and tradition, married with evolution and innovation. These are […]
// CASA BUENA
// Casa Buena is a high quality ready to drink Sangria […]
// CIDERS & RTDs
// SAVANNA DRY
// Savanna Dry is available across Kenya and its unrivaled taste […]
// KINGFISHER STRAWBERRY
// Kingfisher strawberry is exciting and the ideal refreshing choice for the […]
// KINGFISHER LIGHT
// Kingfisher Light is a strawberry flavoured ready to drink (RTD) […]
// HUNTER’S CIDER
// Hunter’s offers a burst of natural cider for guys and […]
// NON ALCOHOLIC
// YATTA JUICES
// The soft, ripe and succulent fruits burst into fruity flavourful […]
// NATURE’S FRESH
// Introducing the indulgent real fruit nectar – Nature’s Fresh. Nature’s […]