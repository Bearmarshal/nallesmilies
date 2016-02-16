// ==UserScript==
// @name Nallesmilies
// @description This script replaces all smilies in the smilie box on the GiantitP forums with custom nalle counterparts.
// @icon http://i.imgur.com/jLvmsd9.png
// @namespace http://www.bearmarshal.com/scripts/greasemonkey
// @version 1.0.1
// @match *://*.giantitp.com/forums/*
// ==/UserScript==

if (!GM_getValue("nallesmilies.initialised", false)) {
	GM_setValue("nallesmilies.smallamused.img", "http://i.imgur.com/rcxULF7.png");
	GM_setValue("nallesmilies.smallannoyed.img", "http://i.imgur.com/naZauqK.png");
	GM_setValue("nallesmilies.smallbiggrin.img", "http://i.imgur.com/haudcUB.png");
	GM_setValue("nallesmilies.smallconfused.img", "http://i.imgur.com/kavzNLd.png");
	GM_setValue("nallesmilies.smalleek.img", "http://i.imgur.com/AT4x3dQ.png");
	GM_setValue("nallesmilies.smallfrown.img", "http://i.imgur.com/xVZ2F1e.png");
	GM_setValue("nallesmilies.smallfurious.img", "http://i.imgur.com/aPNEHAS.png");
	GM_setValue("nallesmilies.smallmad.img", "http://i.imgur.com/RdylcEy.png");
	GM_setValue("nallesmilies.smallredface.img", "http://i.imgur.com/gh2zaGF.png");
	GM_setValue("nallesmilies.smallsigh.img", "http://i.imgur.com/b6MRqPf.png");
	GM_setValue("nallesmilies.smallsmile.img", "http://i.imgur.com/jLvmsd9.png");
	GM_setValue("nallesmilies.smalltongue.img", "http://i.imgur.com/FZ6yI9l.png");
	GM_setValue("nallesmilies.smallwink.img", "http://i.imgur.com/ZRHtTJs.png");
	GM_setValue("nallesmilies.smallyuk.img", "http://i.imgur.com/3VDrLoW.png");
	GM_setValue("nallesmilies.smallcool.img", "TODO: create a :smallnallecool:");
	
	GM_setValue("nallesmilies.initialised", true);
}

let smilieBox = document.getElementById("vB_Editor_001_smiliebox");

if (smilieBox == null) {
  return;
}

let smilies = smilieBox.children;    
for (let i = 0; i < smilies.length; i++) {
  let img = smilies[i].firstElementChild.firstElementChild.firstElementChild;
  let type = /:(\w+):/.exec(img.alt);
  if (type[1] == "smallcool") {
	img.alt = "[roll]1d20[/roll]";
	img.src = "http://www.giantitp.com/forums/images/sand/icons/icon_d20.png";
	img.title = "Roll 1d20"
  } else {
	let nalle = GM_getValue("nallesmilies." + type[1] + ".img");
	img.alt = "[IMG]" + nalle + "[/IMG]";
	img.src = nalle;
  }
  
}
