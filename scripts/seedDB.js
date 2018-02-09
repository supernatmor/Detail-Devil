const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/DetailDevilDB"
);

const detailSeed = [
  {
    Name: "Detailing by Tim",
    Location: "Indian Trail",
    URL: "https://charlottedetailing.com/",
    Phone: "704-821-6994",
    Address: "241 Post Office Dr, Indian Trail, NC 28079",
    Packages: {
      standard: {
        Name: "Express Detail",
        Price: "$199",
        Description:
          "Exterior Wash/Dry, Clean Wheels & Wheel Wells, Floor Mats, Vacuum, 1 Coat Zaino AIO, Dress Tires, Windows & Mirrors, Interior Panels",
        availableTime: "7:30-5:30",
        timeToComplete: "1 hour"
      },
      deluxe: {
        Name: "Signature Detail",
        Price: "$329",
        Description:
          "Express Detail + Degrease Engine, Clean & Dress Engine Compartment, Decontaminate Paint, Mahcine Polish Paint, Dress Molding, Clean Headliner, Clean Carpets, Condition Leather, Clean Trunk",
        availableTime: "7:30-5:30",
        timeToComplete: "2 hours"
      },
      ultimate: {
        Name: "Executive Detail",
        Price: "$489",
        Description:
          "Signature Detail + Clean Exterior Glass, Ceramic Pro Sport on Paint/Glass/Wheels, Clean Upholstry/Panels/Dash/GloveBox/Vents, Apply 303 Fabric Guard",
        availableTime: "5:30-7:30",
        timeToComplete: "4 hours"
      }
    }
  },
  {
    Name: "Auto Detailing Charlotte",
    Location: "Charlotte",
    URL: "http://www.cardetailingcharlotte.com/",
    Phone: "704-464-0163",
    Address: "525 North Tryon Street, Suite 1608, Charlotte, NC 28202",
    Packages: {
      standard: {
        Name: "Exterior Detail",
        Price: "$75",
        Description:
          "Exterior Hand Wash/Dry, Remove Tar/Sap/Dirt, Buff scratches, Wax, Tires cleaned and dressed, Exterior glass cleaned",
        availableTime: "9-5",
        timeToComplete: "1 hour"
      },
      deluxe: {
        Name: "Interior Ultimate",
        Price: "$125",
        Description:
          "Carpets/Floormats/Seats vacuumed/cleaned/shampooed, panels/dash cleaned and dressed, door jams/panels/linings cleaned and dressed, mirrors/glass cleaned, leather conditioned, odor elimination",
        availableTime: "9-5",
        timeToComplete: "2 hours"
      },
      ultimate: {
        Name: "Ultimate Protection",
        Price: "$200",
        Description:
          "Exterior & Interior Packages + Rain-X windows, scratches polished, car clay barred before wax, high gloss sealant, vinyl cleaned and dressed",
        availableTime: "9-5",
        timeToComplete: "4 hours"
      }
    }
  },
  {
    Name: "All Shine No Grime",
    Location: "Charlotte",
    URL: "http://www.allshinenogrime.com/",
    Phone: "704-907-0623",
    Address: "Mobile",
    Packages: {
      standard: {
        Name: "Gold Package",
        Price: "$125",
        Description:
          "Clean Engine, Wash/Dry Exterior, Wax, Wheels & Tires cleaned and dressed, Clean Windows and Mirrors, Polish Chrome/Trim",
        availableTime: "8-6",
        timeToComplete: "1 hour"
      },
      deluxe: {
        Name: "Platinum Package",
        Price: "$125",
        Description:
          "Gold + Shampoo Carpets/Mats/Upolstery, Clean leather/vinyl, clean dash/console, vacuum trunk, interior windows, air vents & ash trays, air freshener",
        availableTime: "8-6",
        timeToComplete: "3 hours"
      },
      ultimate: {
        Name: "All Shine No Grime Package",
        Price: "$380",
        Description:
          "Platinum package + Scratch removal, claybar exterior, paint protectant, fabric prtectand, Aquapel glass treatment",
        availableTime: "8-6",
        timeToComplete: "7 hours"
      }
    }
  },
  {
    Name: "Doctor Detail",
    Location: "Matthews",
    URL: "http://www.doctordetailofmatthews.com/",
    Phone: "704-537-9274",
    Address: "8909 E. Independence Blvd., Matthews, NC 28105 & Mobile",
    Packages: {
      standard: {
        Name: "All Int Detail & Ext Wash",
        Price: "$150",
        Description:
          "Exterior Hand Wash/Dry, Shampoo Carpets/Mats/Upholstery, clean console/dash, leather/vinyl protection, windows & mirrors, air vents/ash trays",
        availableTime: "9-6(9-4 Saturdays)",
        timeToComplete: "1 hour"
      },
      deluxe: {
        Name: "Full Int & Ext Detail",
        Price: "$220",
        Description:
          "All Int Detail & Ext Wash + Claybar exterior, Meguiars High Speed Polish and Wax",
        availableTime: "9-6(9-4 Saturdays)",
        timeToComplete: "3 hours"
      },
      ultimate: {
        Name: "Doctor's Choice",
        Price: "$300",
        Description:
          "All Full Interior & Exterior Detail + Scratch Removal, Aquapel, Paint Protection, Fabric Protection",
        availableTime: "9-6(9-4 Saturdays)",
        timeToComplete: "5 hours"
      }
    }
  },
  {
    Name: "Exclusive Detail",
    Location: "Charlotte",
    URL: "http://exclusivedetail.com/",
    Phone: "704-525-5225",
    Address: "4913 Chastain Ave. #32, Charlotte, NC 28217",
    Packages: {
      standard: {
        Name: "Premium Interior",
        Price: "$250",
        Description:
          "Clean dash/center console/door jams/door panels, vacuum and shampoo carpets/mats, vacuum trunk",
        availableTime: "9-5",
        timeToComplete: "2 hours"
      },
      deluxe: {
        Name: "Premium Exterior",
        Price: "$325",
        Description:
          "Hand wash all exterior surfaces, wheels cleaned, full paint decontamination, paint correction to remove swirls, water marks, small scratches",
        availableTime: "9-5",
        timeToComplete: "2 hours"
      },
      ultimate: {
        Name: "Premium Full Detail",
        Price: "$550",
        Description: "Premium Interior & Exterior combined",
        availableTime: "9-5",
        timeToComplete: "4 hours"
      }
    }
  },
  {
    Name: "Xtreme Green Auto Detailing",
    Location: "Charlotte",
    URL: "http://xtremegreen10.wixsite.com/autodetailing",
    Phone: "980-224-2644",
    Address: "Mobile",
    Packages: {
      standard: {
        Name: "Xtreme Xterior Detail",
        Price: "$95",
        Description:
          "Xterior bumper to bumper wash, Xterior wax, Xterior windows, tire dressing",
        availableTime: "10:30-5",
        timeToComplete: "2 hours"
      },
      deluxe: {
        Name: "Xtreme Interior",
        Price: "$115",
        Description:
          "Vacuum, door jams, interior windows, leather/plastic/vinyl cleaned and conditioned, seats/mats/carpets steamed",
        availableTime: "10:30-5",
        timeToComplete: "2 hours"
      },
      ultimate: {
        Name: "Xtreme Platinum",
        Price: "$255",
        Description: "Xtreme Xterior & Interior Detail",
        availableTime: "10:30-5",
        timeToComplete: "4 hours"
      }
    }
  },
  {
    Name: "Boyd's Car Wash & Detail",
    Location: "Charlotte",
    URL: "https://www.boydsmob.com/",
    Phone: "214-254-0776",
    Address:
      "500 East Morehead St, Parking Garage Level B, South Charlotte, NC 28202",
    Packages: {
      standard: {
        Name: "Exterior Wash & Clean",
        Price: "$55",
        Description: "Exterior Hand Wash/Dry, Interior Vacuum & cleaning",
        availableTime: "8:30-5",
        timeToComplete: "1 hour"
      },
      deluxe: {
        Name: "Full Detail",
        Price: "$165",
        Description:
          "Standard Package + Interior Detail, Exterior Wax, Shampoo Carpets, Leather cleaning and conditioning",
        availableTime: "8:30-5",
        timeToComplete: "2 hours"
      }
    }
  },
  {
    Name: "B-Wright's Mobile Detailing",
    Location: "Charlotte",
    URL: "https://www.bwrightdetail.com/",
    Phone: "704-565-9274",
    Address: "4300 Sharon Rd, Charlotte, NC 28211 & Mobile",
    Packages: {
      standard: {
        Name: "Basic Detail",
        Price: "$80",
        Description:
          "Hand wash/dry, wheels & tires cleaned and dressed, interior vacuum and wipe down, UV protection on dash, windows inside and out, air freshener",
        availableTime: "9-5",
        timeToComplete: "1 hour"
      },
      deluxe: {
        Name: "Full Detail",
        Price: "$250",
        Description:
          "Basic Detail + leather, blackout wheel wells, wheel wells degreased, interior plastic/vinyl, interior dressing, extensive vacuum and trunk carpet spot removal, clay bar treatement, paint sealant/wax",
        availableTime: "9-5",
        timeToComplete: "3 hours"
      },
      ultimate: {
        Name: "Full Detail Plus",
        Price: "$450",
        Description:
          "Full detail + detail engine, full carpet shampooing, 1 step machine polish menzerna",
        availableTime: "9-5",
        timeToComplete: "5 hours"
      }
    }
  },
  {
    Name: "Quick Shine Mobile Detailing",
    Location: "Rock Hill",
    URL: "https://www.quickshine803.com/",
    Phone: "803-616-1482",
    Address: "Mobile",
    Packages: {
      standard: {
        Name: "Silver Package",
        Price: "$155",
        Description:
          "Vacuum Interior/trunk, shampoo carpets/seats, vents/cupholders/visors cleaned, condition leather/plastics/vinyl, exterior wash/dry, door jams, windows inside/out, rims & tires cleaned and dressed, high quality paste wax, shine plastics/trims",
        availableTime: "7-7",
        timeToComplete: "1.5 hours"
      },
      deluxe: {
        Name: "Gold Package",
        Price: "$225",
        Description:
          "Silve package + high intensity stain pre-treatment, spot clean headliner, engine detail, light scratch/swirl removal",
        availableTime: "7-7",
        timeToComplete: "2 hours"
      },
      ultimate: {
        Name: "Platinum Package",
        Price: "$300",
        Description:
          "Gold Package + headlisght restoration, clean exhaust tips",
        availableTime: "7-7",
        timeToComplete: "3 hours"
      }
    }
  }
];

db.Company.remove({})
  .then(() => db.Company.collection.insertMany(detailSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
