//XM4
const XM4_OPTICS = [
  {
    name: "Millstop Reflex",
    image: "/attachments/optics/millstopreflex.png",
  },
  {
    name: "Visiontexh 2x",
    image: "/attachments/optics/visiontech2x.png",
  },
  {
    name: "Kobra Red Dot",
    image: "/attachments/optics/kobrareddot.png",
  },
  {
    name: "Axial Arms 3x",
    image: "/attachments/optics/axialarms3x.png",
  },
  {
    name: "Silliz Holoscout",
    image: "/attachments/optics/sillixholosxout.png",
  },
  {
    name: "Microflex LED",
    image: "/attachments/optics/microflexLED.png",
  },
  {
    name: "Hawksmoor",
    image: "/attachments/optics/hawksmoor.png",
  },
  {
    name: "Royal & Kross 4x",
    image: "/attachments/optics/royalkross4x.png",
  },
  {
    name: "SUSAT Multizoom",
    image: "/attachments/optics/susatmultizoom.png",
  },
  {
    name: "Diamondback Reflex",
    image: "/attachments/optics/diamondbackreflex.png",
  },
  {
    name: "AN/PVS-4 Thermal",
    image: "/attachments/optics/anpvs4thermal.png",
  },
];
var XM4_Muzzles = [
  {
    name: "Muzzle Brake 5.56",
    image: "/attachments/xm4/muzzlebrake556.png",
  },
  {
    name: "Flashguard 5.56",
    image: "/attachments/xm4/flashguard556.png",
  },
  {
    name: "Suppressor",
    image: "/attachments/xm4/suppressor.png",
  },
  {
    name: "Infantry Compensator",
    image: "/attachments/xm4/infantrycompensator.png",
  },
  {
    name: "SOCOM Eliminator",
    image: "/attachments/xm4/socomeliminator.png",
  },
  {
    name: "Agency Suppressor",
    image: "/attachments/xm4/agencysuppressir.png",
  },
];
var XM4_Barrels = [
  {
    name: "11.8 Ranger",
    image: "/attachments/xm4/118ranger.png",
  },
  {
    name: "12.5 Cavalry Lancer",
    image: "/attachments/xm4/125cavalrylancer.png",
  },
  {
    name: "13.5 Rinforced Heavy",
    image: "/attachments/xm4/135reinforcedheavy.png",
  },
  {
    name: "13.7 Extended",
    image: "/attachments/xm4/127extended.png",
  },
  {
    name: "13.7 Takedown",
    image: "/attachments/xm4/137takedown.png",
  },
  {
    name: "13.5 Task Force",
    image: "/attachments/xm4/135taskforce.png",
  },
];
var XM4_Bodys = [
  {
    name: "Steady Aim Laser",
    image: "/attachments/xm4/steadyaimlaser.png",
  },
  {
    name: "Mounted Flashlight",
    image: "/attachments/xm4/mountedflashlight.png",
  },
  {
    name: "SOF Target Designator",
    image: "/attachments/xm4/softargetdesignator.png",
  },
  {
    name: "SWAT 5mw Laser Sight",
    image: "/attachments/xm4/swat5mwlasersight.png",
  },
  {
    name: "Tiger Team Spotlight",
    image: "/attachments/xm4/tigerteamspotlight.png",
  },
  {
    name: "Emver Sighting Point",
    image: "/attachments/xm4/embersightingpoint.png",
  },
];
var XM4_Underbarrels = [
  {
    name: "Foregrip",
    image: "/attachments/underbarrel/foregrup.png",
  },
  {
    name: "Infiltrator Grip",
    image: "/attachments/underbarrel/infiltratorgrip.png",
  },
  {
    name: "Patrol Grip",
    image: "/attachments/underbarrel/patrolgrip.png",
  },
  {
    name: "Bruiser Grip",
    image: "/attachments/underbarrel/bruisergrip.png",
  },
  {
    name: "Field Agent Grip",
    image: "/attachments/underbarrel/fieldagentgrip.png",
  },
  {
    name: "SFOD Speedgrip",
    image: "/attachments/underbarrel/sfodspeedgrip.png",
  },
];
var XM4_Magazines = [
  {
    name: "40 Rnd",
    image: "/attachments/xm4/40rnd.png",
  },
  {
    name: "Jungle-Style Mag",
    image: "/attachments/xm4/junglestylemag.png",
  },
  {
    name: "40 Rnd Speed Mag",
    image: "/attachments/xm4/40rndspeedmag.png",
  },
  {
    name: "STANAG 50 Rnd",
    image: "/attachments/xm4/stanag50rnd.png",
  },
  {
    name: "SAS Mag Clamp",
    image: "/attachments/xm4/sasmagclamp.png",
  },
  {
    name: "Salvo 50 Rnd Fast Mag",
    image: "/attachments/xm4/salvo50rndfastmag.png",
  },
];
var XM4_Handles = [
  {
    name: "Speed Tape",
    image: "/attachments/xm4/speedtape.png",
  },
  {
    name: "Dropshot Wrap",
    image: "/attachments/xm4/dropshotwrap.png",
  },
  {
    name: "Field Tape",
    image: "/attachments/xm4/fieldtape.png",
  },
  {
    name: "SARS Jungle Grip",
    image: "/attachments/xm4/sarsjunglegrip.png",
  },
  {
    name: "Serpent Wrap",
    image: "/attachments/xm4/serpentwrap.png",
  },
  {
    name: "Airborne Elastic Wrap",
    image: "/attachments/xm4/airborneelasticwrap.png",
  },
];
var XM4_Stocks = [
  {
    name: "Tactical Stock",
    image: "/attachments/xm4/tacticalstock.png",
  },
  {
    name: "Wire Stock",
    image: "/attachments/xm4/wirestock.png",
  },
  {
    name: "Duster Stock",
    image: "/attachments/xm4/dusterstock.png",
  },
  {
    name: "Buffer Tube",
    image: "/attachments/xm4/buffertube.png",
  },
  {
    name: "SAS Combat Stock",
    image: "/attachments/xm4/sascombatstock.png",
  },
  {
    name: "Raider Pad",
    image: "/attachments/xm4/raiderpad.png",
  },
];

const XM4_ATTACHMENTS = {
  [PrimaryAttachments.Optics]: {
    element: Elements.PrimaryAtt1,
    list: XM4_OPTICS,
  },
  [PrimaryAttachments.Muzzle]: {
    element: Elements.PrimaryAtt2,
    list: XM4_Muzzles,
  },
  [PrimaryAttachments.Barrel]: {
    element: Elements.PrimaryAtt3,
    list: XM4_Barrels,
  },
  [PrimaryAttachments.Body]: {
    element: Elements.PrimaryAtt4,
    list: XM4_Bodys,
  },
  [PrimaryAttachments.Underbarrel]: {
    element: Elements.PrimaryAtt5,
    list: XM4_Underbarrels,
  },
  [PrimaryAttachments.Magazine]: {
    element: Elements.PrimaryAtt6,
    list: XM4_Magazines,
  },
  [PrimaryAttachments.Handle]: {
    element: Elements.PrimaryAtt7,
    list: XM4_Handles,
  },
  [PrimaryAttachments.Stock]: {
    element: Elements.PrimaryAtt8,
    list: XM4_Stocks,
  },
};

function xm4() {
  const attachmentsAvailable = Object.values(PrimaryAttachments);
  const totalCount = attachmentsAvailable.length;
  const numberOfAttachments = getRandomNumber(totalCount);

  const { attachments } = new Array(numberOfAttachments).fill("").reduce(
    (state) => {
      const randomizer = getRandomNumber(attachmentsAvailable.length);
      const randomAttachment = attachmentsAvailable[randomizer];

      attachmentsAvailable.splice(randomizer, 1);

      return {
        attachmentLeft: state.attachmentLeft - 1,
        attachments: state.attachments.concat(randomAttachment),
      };
    },
    {
      attachmentLeft: numberOfAttachments,
      attachments: [],
    }
  );

  //Optics

  Object.values(PrimaryAttachments).forEach((attachment) => {
    const currentattachment = XM4_ATTACHMENTS[attachment];
    if (attachments.includes(attachment)) {
      const randomizedElement = getRandomItem(currentattachment.list);
      addContentToElement(currentattachment.element, randomizedElement);
      return;
    }
    removeContentFromElement(currentattachment.element);
  });
}

//AK-47
