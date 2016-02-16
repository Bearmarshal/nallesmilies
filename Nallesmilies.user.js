// ==UserScript==
// @name Nallesmilies
// @description This script replaces all smilies in the smilie box on the GiantitP forums with custom nalle counterparts.
// @icon http://i.imgur.com/jLvmsd9.png
// @namespace http://www.bearmarshal.com/scripts/greasemonkey
// @version 1.1.0
// @match *://*.giantitp.com/forums/*
// ==/UserScript==

var nallesmilies = {
	smallamused : "http://i.imgur.com/rcxULF7.png",
	smallannoyed : "http://i.imgur.com/naZauqK.png",
	smallbiggrin : "http://i.imgur.com/haudcUB.png",
	smallconfused : "http://i.imgur.com/kavzNLd.png",
	smalleek : "http://i.imgur.com/AT4x3dQ.png",
	smallfrown : "http://i.imgur.com/xVZ2F1e.png",
	smallfurious : "http://i.imgur.com/aPNEHAS.png",
	smallmad : "http://i.imgur.com/RdylcEy.png",
	smallredface : "http://i.imgur.com/gh2zaGF.png",
	smallsigh : "http://i.imgur.com/b6MRqPf.png",
	smallsmile : "http://i.imgur.com/jLvmsd9.png",
	smalltongue : "http://i.imgur.com/FZ6yI9l.png",
	smallwink : "http://i.imgur.com/ZRHtTJs.png",
	smallyuk : "http://i.imgur.com/3VDrLoW.png",
	smallcool : "TODO: create a :smallnallecool:"
};

let smilieBox = document.getElementById("vB_Editor_001_smiliebox");

if (smilieBox == null) {
  return;
}

let smilies = smilieBox.children;    
for (let i = 0; i < smilies.length; i++) {
  let img = smilies[i].firstElementChild.firstElementChild.firstElementChild;
  let smilieType = /:(\w+):/.exec(img.alt);
  if (smilieType[1] == "smallcool") {
	img.alt = "[roll]1d20[/roll]";
	img.src = "http://www.giantitp.com/forums/images/sand/icons/icon_d20.png";
	img.title = "Roll 1d20"
  } else {
	let nalleURI = nallesmilies[smilieType[1]];
	img.alt = "[IMG]" + nalleURI + "[/IMG]";
	img.src = nalleURI;
  }
  
}