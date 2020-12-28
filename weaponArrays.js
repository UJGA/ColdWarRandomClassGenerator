// Primary Weaponds Array
const assaultRifles = [
  {
    name: "test1",
    image: "/primaries/ak47.png",
  },
  {
    name: "XM4",
    image: "/primaries/xm4.png",
  },

  {
    name: "AK-47",
    image: "/primaries/ak47.png",
  },
  {
    name: "Krig 6",
    image: "/primaries/krig6.png",
  },
  {
    name: "QBZ-83",
    image: "/primaries/qbz83.png",
  },
  {
    name: "FFAR 1",
    image: "/primaries/ffar1.png",
  },
  {
    name: "Groza",
    image: "/primaries/groza.png",
  },
];

const submachineGuns = [
  {
    name: "MP5",
    image: "/primaries/mp5.png",
  },
  {
    name: "Milano 821",
    image: "/primaries/milano821.png",
  },
  {
    name: "AK-74u",
    image: "/primaries/ak74u.png",
  },
  {
    name: "KSP 45",
    image: "/primaries/ksp45.png",
  },
  {
    name: "Bullfrog",
    image: "/primaries/bullfrog.png",
  },
  {
    name: "MAC-10",
    image: "/primaries/mac10.png",
  },
];

const tacticalRifles = [
  {
    name: "Type 63",
    image: "/primaries/type63.png",
  },
  {
    name: "M16",
    image: "/primaries/m16.png",
  },
  {
    name: "AUG",
    image: "/primaries/aug.png",
  },
  {
    name: "DMR 14",
    image: "/primaries/dmr14.png",
  },
];

const lmgGuns = [
  {
    name: "Stoner 63",
    image: "/primaries/stoner63.png",
  },
  {
    name: "RPD",
    image: "/primaries/rpd.png",
  },
  {
    name: "M60",
    image: "/primaries/m60.png",
  },
];

const sniperRifles = [
  {
    name: "Pelington 703",
    image: "/primaries/pelington703.png",
  },
  {
    name: "LW3 - Tundra",
    image: "/primaries/lw3tundra.png",
  },
  {
    name: "M82",
    image: "/primaries/m82.png",
  },
];

const primaryGuns = [].concat(
  assaultRifles,
  submachineGuns,
  tacticalRifles,
  lmgGuns,
  sniperRifles
);

const shotguns = [
  {
    name: "Hauer 77",
    image: "/secondaries/hauer77.png",
  },
  {
    name: "Gallo SA12",
    image: "/secondaries/gallosa12.png",
  },
  {
    name: "Streetsweeper",
    image: "/secondaries/streetsweeper.png",
  },
];

const pistols = [
  {
    name: "1911",
    image: "/secondaries/1911.png",
  },
  {
    name: "Magnum",
    image: "/secondaries/magnum.png",
  },
  {
    name: "Diamatti",
    image: "/secondaries/diamatti.png",
  },
];

const launchers = [
  {
    name: "Cigma 2",
    image: "/secondaries/cigma2.png",
  },
  {
    name: "RPG-7",
    image: "/secondaries/rpg7.png",
  },
];

const knife = [
  {
    name: "Knife",
    image: "/secondaries/knife.png",
  },
  {
    name: "Sledgehammer",
    image: "/secondaries/sledgehammer.png",
  },
  {
    name: "Wakizashi",
    image: "/secondaries/wakizashi.png",
  },
];

const special = [
  {
    name: "M79",
    image: "/secondaries/m79.png",
  },
];
// Secondary Weapons Array
const secondaryGuns = [
  {
    name: "test12",
    image: "/secondaries/ak47.png",
  },
].concat(pistols, launchers, knife, special);

//Perk 1 Array
const perkCategory1 = [
  {
    name: "Engineer",
    image: "/perks/engineer.png",
  },

  {
    name: "Tactical Mask",
    image: "/perks/tacticalmask.png",
  },
  {
    name: "Flak Jacket",
    image: "/perks/flakjacket.png",
  },
  {
    name: "Paranoia",
    image: "/perks/paranoia.png",
  },
  {
    name: "Forward Intel",
    image: "/perks/forwardintel.png",
  },
];

//Perk 2 Array
const perkCategory2 = [
  {
    name: "Scavenger",
    image: "/perks/scavenger.png",
  },

  {
    name: "Quartermaster",
    image: "/perks/quartermaster.png",
  },
  {
    name: "Tracker",
    image: "/perks/tracker.png",
  },
  {
    name: "Assassin",
    image: "/perks/assassin.png",
  },
  {
    name: "Gearhead",
    image: "/perks/gearhead.png",
  },
];

//Perk 3 Array
const perkCategory3 = [
  {
    name: "Cold Blooded",
    image: "/perks/coldblooded.png",
  },

  {
    name: "Ghost",
    image: "/perks/ghost.png",
  },
  {
    name: "Ninja",
    image: "/perks/ninja.png",
  },
  {
    name: "Gung-Ho",
    image: "/perks/gungho.png",
  },
  {
    name: "Spycraft",
    image: "/perks/spycraft.png",
  },
];

//Tacitcals Array
const tacticalItems = [
  {
    name: "Stun Grenade",
    image: "/tacticals/stungrenade.png",
  },

  {
    name: "Stimshot",
    image: "/tacticals/stimshot.png",
  },
  {
    name: "Smoke Grenade",
    image: "/tacticals/smokegrenade.png",
  },
  {
    name: "Flashbang",
    image: "/tacticals/flashbang.png",
  },
  {
    name: "Decoy",
    image: "/tacticals/decoy.png",
  },
];

//Lethals Array
const lethalItems = [
  {
    name: "Frag",
    image: "/lethals/frag.png",
  },

  {
    name: "C4",
    image: "/lethals/c4.png",
  },
  {
    name: "Semtex",
    image: "/lethals/semtex.png",
  },
  {
    name: "Molotov",
    image: "/lethals/molotov.png",
  },
  {
    name: "Tomahawk",
    image: "/lethals/tomahawk.png",
  },
];

//Field Upgrade Array
const fieldUpgrades = [
  {
    name: "Proximity Mine",
    image: "/fieldupgrades/proximitymine.png",
  },

  {
    name: "Sam Turret",
    image: "/fieldupgrades/samturret.png",
  },
  {
    name: "Jammer",
    image: "/fieldupgrades/jammer.png",
  },
  {
    name: "Field Mic",
    image: "/fieldupgrades/fieldmic.png",
  },
  {
    name: "Gas Mine",
    image: "/fieldupgrades/gasmine.png",
  },
  {
    name: "Trophy System",
    image: "/fieldupgrades/trophysystem.png",
  },
  {
    name: "Assult Pack",
    image: "/fieldupgrades/assultpack.png",
  },
];

//Wildcard Array
const wildcards = [
  {
    name: "Danger Close",
    image: "/wildcards/dangerclose.png",
  },

  {
    name: "Law Breaker",
    image: "/wildcards/lawbreaker.png",
  },
  {
    name: "Gunfighter",
    image: "/wildcards/gunfighter.png",
  },
  {
    name: "Perk Greed",
    image: "/wildcards/perkgreed.png",
  },
];
