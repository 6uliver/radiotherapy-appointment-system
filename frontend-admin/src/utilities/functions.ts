import { Region } from "../gql/graphql";

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
