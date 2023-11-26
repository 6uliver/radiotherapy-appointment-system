import stc from "string-to-color";
import ColorHash from "color-hash";

import { Region } from "../gql/graphql";

const colorHash = new ColorHash({
  hue: {
    min: 60,
    max: 210,
  },
  lightness: [0.5, 0.65, 0.8],
  saturation: 0.5,
});

export const regionNames: Record<Region, string> = {
  ABDOMEN: "Abdomen",
  BREAST: "Breast",
  BREASTSPECIAL: "Breat special",
  CRANE: "Crane",
  CRANIOSPINAL: "Craniospinal",
  HEAD: "Head & neck",
  LUNG: "Lung",
  LUNGSPECIAL: "Lung special",
  PELVIS: "Pelvis",
  WHOLEBRAIN: "Whole brain",
};

export function formatRegion(region: Region) {
  return regionNames[region];
}

export function formatSSN(ssn: string) {
  return ssn.slice(0, 3) + " " + ssn.slice(2, 5) + " " + ssn.slice(5, 8);
}

export function formatBoolean(bool: boolean) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

export function getTpn(uid: string) {
  return uid.slice(uid.length - 6, uid.length - 1).toUpperCase();
}

export function getName({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  return `${firstName} ${lastName}`;
}
export function getColor(id: string) {
  return colorHash.hex(id);
}
