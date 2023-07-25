import { createSlice } from "@reduxjs/toolkit";
import faction from "../components/media/info";

const initialState = {
  speech: faction.rhInfo.disc,
  leader: faction.rhInfo.leader,
  logo: faction.rhInfo.logo,
  squad: faction.rhInfo.sqImg,
  ops: faction.rhInfo.ops,
  name: faction.rhInfo.name,
  fDisc: faction.rhInfo.footerDisc,
  opsBg: "rhCoolor",
  opsBgIcons: faction.rhInfo.coolor,
};

export const counterSlice = createSlice({
  name: "rainbow",
  initialState,
  reducers: {
    ghostEyes: (state) => {
      state.speech = faction.geInfo.disc;
      state.leader = faction.geInfo.leader;
      state.logo = faction.geInfo.logo;
      state.squad = faction.geInfo.sqImg;
      state.ops = faction.geInfo.ops;
      state.name = faction.geInfo.name;
      state.fDisc = faction.geInfo.footerDisc;
      state.opsBg = "geCoolor";
      state.opsBgIcons = faction.geInfo.coolor;
    },
    nightHaven: (state) => {
      state.speech = faction.nhInfo.disc;
      state.leader = faction.nhInfo.leader;
      state.logo = faction.nhInfo.logo;
      state.squad = faction.nhInfo.sqImg;
      state.ops = faction.nhInfo.ops;
      state.name = faction.nhInfo.name;
      state.fDisc = faction.nhInfo.footerDisc;
      state.opsBg = "nhCoolor";
      state.opsBgIcons = faction.nhInfo.coolor;
    },
    redHammer: (state) => {
      state.speech = faction.rhInfo.disc;
      state.leader = faction.rhInfo.leader;
      state.logo = faction.rhInfo.logo;
      state.squad = faction.rhInfo.sqImg;
      state.ops = faction.rhInfo.ops;
      state.name = faction.rhInfo.name;
      state.fDisc = faction.rhInfo.footerDisc;
      state.opsBg = "rhCoolor";
      state.opsBgIcons = faction.rhInfo.coolor;
    },
    viperStrike: (state) => {
      state.speech = faction.vsInfo.disc;
      state.leader = faction.vsInfo.leader;
      state.logo = faction.vsInfo.logo;
      state.squad = faction.vsInfo.sqImg;
      state.ops = faction.vsInfo.ops;
      state.name = faction.vsInfo.name;
      state.fDisc = faction.vsInfo.footerDisc;
      state.opsBg = "vsCoolor";
      state.opsBgIcons = faction.vsInfo.coolor;
    },
    wolfGuard: (state) => {
      state.speech = faction.wgInfo.disc;
      state.leader = faction.wgInfo.leader;
      state.logo = faction.wgInfo.logo;
      state.squad = faction.wgInfo.sqImg;
      state.ops = faction.wgInfo.ops;
      state.name = faction.wgInfo.name;
      state.fDisc = faction.wgInfo.footerDisc;
      state.opsBg = "wgCoolor";
      state.opsBgIcons = faction.wgInfo.coolor;
    },
  },
});

export const { ghostEyes, nightHaven, redHammer, viperStrike, wolfGuard } =
  counterSlice.actions;

export default counterSlice.reducer;
