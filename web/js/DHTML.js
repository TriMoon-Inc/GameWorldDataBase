/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	DHTML Functions

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
// Tabsize:8
/***************************************************************************
			DHTML Functions to generate content.
***************************************************************************/
/*
	Generate Output Div
	Returns: None. (Output is put in document.)
*/
function genOutputDiv(){
	var oBody, oOutput;

	// Fetch Body element.
	oBody = document.body;

	// Check existence for refreshing.
	oOutput = document.getElementById("Output");
	if(oOutput)	oBody.removeChild(oOutput);
	// Create Output Div.
	oOutput = document.createElement("div");
	oOutput.id = "Output";
	// Put in document.
	if(oBody)	oBody.appendChild( oOutput );
};
/*
	Generate Control Center
	Returns: None. (Output is put in document.)
*/
function genControlCenter(bShow){
	var oBR, oOutput, oControlCenter;
	var oForm, oFieldSet;
	var oTable, oCaption, oTBody, oTR, oTD;
	var sText, DomObj = Array(3);

	// Create BR element.
	oBR = document.createElement("br");

	// Fetch Output div.
	oOutput = document.getElementById("Output");

	// Check existence for refreshing.
	oControlCenter = document.getElementById("ControlCenter");
	if(oControlCenter)	oOutput.removeChild(oControlCenter);
	if(bShow){
		// Create ControlCenter.
		oControlCenter = document.createElement("div");
		oControlCenter.id = "ControlCenter";
		oControlCenter.align = "center";
			// Create form.
			oForm = document.createElement("form");
			oForm.name = "ControlCenter";
			oForm.setAttribute("action", "javascript:document.location.replace( Universe.Control.MakeSearch() )");
				// Create Table.
				oTable = document.createElement("table");
				oTable.id = "CCTable";
					// Create Caption.
					oCaption = oTable.createCaption();
					DomObj[0] = document.createTextNode("Control Center");
					oCaption.appendChild( DomObj[0] );
					// Create TBody
					oTBody = document.createElement("tbody");
					oTBody.setAttribute("align", "left");
						// Create a Table Row.
						if(noDOM2HTML)	oTR = document.createElement("tr");
						else		oTR = oTBody.insertRow(-1);
							// Create a Table Cell.
							if(noDOM2HTML)	oTD = document.createElement("td");
							else		oTD = oTR.insertCell(-1);
								// Create Settings Fieldset.
								oFieldSet = document.createElement("fieldset");
								oFieldSet.id = "Settings";
								// Create Legend
									DomObj[0] = document.createElement("legend");
										DomObj[1] = document.createTextNode("Settings:");
									DomObj[0].appendChild( DomObj[1] );
								oFieldSet.appendChild( DomObj[0] );
								// Create Debug checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "Debug";
									DomObj[0].defaultChecked = bDebug;
									DomObj[0].onclick = function(){ Universe.Control.Debug(this.checked);this.form.submit(); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("Debug");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create Test checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "Test";
									DomObj[0].defaultChecked = bTest;
									DomObj[0].onclick = function(){ Universe.Control.Test(this.checked);this.form.submit(); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("Test");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create Debug checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "LocalFile";
									DomObj[0].defaultChecked = bLocalFile;
									DomObj[0].onclick = function(){ Universe.Control.LocalFile(this.checked);this.form.submit(); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("LocalFile");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
							// Add Fieldset to Table Cell.
							oTD.appendChild( oFieldSet );
						// Add Table Cell to Table Row.
						if(noDOM2HTML)	oTR.appendChild( oTD );
							// Create a Table Cell.
							if(noDOM2HTML)	oTD = document.createElement("td");
							else		oTD = oTR.insertCell(-1);
								// Create Show Fieldset.
								oFieldSet = document.createElement("fieldset");
								oFieldSet.id = "Show";
								// Create Legend
									DomObj[0] = document.createElement("legend");
										DomObj[1] = document.createTextNode("Show:");
									DomObj[0].appendChild( DomObj[1] );
								oFieldSet.appendChild( DomObj[0] );
								// Create ControlCenter checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "CC";
									DomObj[0].defaultChecked = bCC;
									DomObj[0].onclick = function(){ Universe.Control.CC(this.checked); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("ControlCenter");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create MarkTypes checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "MarkTypes";
									DomObj[0].defaultChecked = bMarkTypes;
									DomObj[0].onclick = function(){ Universe.Control.MarkTypes(this.checked); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("MarkTypes");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create ShowMaps checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "ShowMaps";
									DomObj[0].defaultChecked = gShowMaps;
									DomObj[0].onclick = function(){ Universe.Control.ShowMaps(this.checked); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("Maps");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create ShowItems checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "ShowItems";
									DomObj[0].defaultChecked = gShowItems;
									DomObj[0].onclick = function(){ Universe.Control.ShowItems(this.checked); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("Items");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create ShowMonsters checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "ShowMonsters";
									DomObj[0].defaultChecked = gShowMonsters;
									DomObj[0].onclick = function(){ Universe.Control.ShowMonsters(this.checked); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("Monsters");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create ShowNPCs checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "ShowNPCs";
									DomObj[0].defaultChecked = gShowNPCs;
									DomObj[0].onclick = function(){ Universe.Control.ShowNPCs(this.checked); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("NPCs");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create ShowMonsterDrops checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "ShowMonsterDrops";
									DomObj[0].defaultChecked = gShowMonsterDrops;
									DomObj[0].onclick = function(){ Universe.Control.ShowMonsterDrops(this.checked); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("MonsterDrops");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create ShowMonsterMaps checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "ShowMonsterMaps";
									DomObj[0].defaultChecked = gShowMonsterMaps;
									DomObj[0].onclick = function(){ Universe.Control.ShowMonsterMaps(this.checked); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("MonsterMaps");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create ShowNPCItems checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "ShowNPCItems";
									DomObj[0].defaultChecked = gShowNPCItems;
									DomObj[0].onclick = function(){ Universe.Control.ShowNPCItems(this.checked); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("NPCItems");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
								// Create ShowNPCMaps checkbox.
									DomObj[0] = document.createElement("input");
									DomObj[0].type = "checkbox";
									DomObj[0].name = "ShowNPCMaps";
									DomObj[0].defaultChecked = gShowNPCMaps;
									DomObj[0].onclick = function(){ Universe.Control.ShowNPCMaps(this.checked); };
								oFieldSet.appendChild( DomObj[0] );
									DomObj[0] = document.createTextNode("NPCMaps");
								oFieldSet.appendChild( DomObj[0] );
								// A Line Break.
								oFieldSet.appendChild( oBR.cloneNode(false) );
							// Add Fieldset to Table Cell.
							oTD.appendChild( oFieldSet );
						// Add Table Cell to Table Row.
						if(noDOM2HTML)	oTR.appendChild( oTD );
					// Add Table Row to TBody.
					if(noDOM2HTML)	oTBody.appendChild( oTR );
				// Add TBody to Table.
				oTable.appendChild( oTBody );
			// Add Table to Form.
			oForm.appendChild( oTable );
		// Add Form to ControlCenter.
		oControlCenter.appendChild( oForm );
		// Create a Horizontal Ruler.
		DomObj[0] = document.createElement("hr");
		oControlCenter.appendChild( DomObj[0] );
		// Put ControlCenter in output.
		oOutput.appendChild( oControlCenter );
	};
};
/*
	Generate Footer
	Returns: None. (Output is put in document.)
*/
function genFooter(){
	var oBR, oOutput, oFooter, oDiv;
	var sText, DomObj = Array(3);
	var oTable, oTBody, oTR, oTD;

	// Create BR element.
	oBR = document.createElement("br");

	// Fetch Output div.
	oOutput = document.getElementById("Output");
	// Check existence for refreshing.
	oFooter = document.getElementById("Footer");
	if(oFooter)	oOutput.removeChild(oFooter);

	// Create Footer Div.
	oFooter = document.createElement("div");
	oFooter.id = "Footer";
	oFooter.setAttribute("width", "100%");
		// Create a Div.
		oDiv = document.createElement("div");
		oDiv.align = "center";
			// Create an anchor element.
			DomObj[0] = document.createElement("a");
			DomObj[0].setAttribute("href", "index.html?DB");
			DomObj[0].setAttribute("target", "_top");
			DomObj[0].innerHTML = "&laquo;Back to Database Listing.";
		oDiv.appendChild( DomObj[0] );
	oFooter.appendChild( oDiv );
		// Create a Horizontal Ruler.
		DomObj[0] = document.createElement("hr");
	oFooter.appendChild( DomObj[0] );
		// Create Table.
		oTable = document.createElement("table");
		oTable.className = "footer";
		oTable.setAttribute("align", "center");
		oTable.setAttribute("border", "0");
		oTable.setAttribute("cellspacing", "5");
		oTable.setAttribute("cellpadding", "0");
		oTable.setAttribute("width", "100%");
			// Create a colgroup.
			DomObj[0] = document.createElement("colgroup");
				// Create a col.
				DomObj[1] = document.createElement("col");
				DomObj[1].setAttribute("width", "125px");
			DomObj[0].appendChild( DomObj[1] );
				// Create a col.
				DomObj[1] = document.createElement("col");
				DomObj[1].setAttribute("width", "125px");
			DomObj[0].appendChild( DomObj[1] );
				// Create a col.
				DomObj[1] = document.createElement("col");
				DomObj[1].setAttribute("width", "80px");
			DomObj[0].appendChild( DomObj[1] );
				// Create a col.
				DomObj[1] = document.createElement("col");
				DomObj[1].setAttribute("width", "*");
			DomObj[0].appendChild( DomObj[1] );
				// Create a col.
				DomObj[1] = document.createElement("col");
				DomObj[1].setAttribute("width", "108px");
			DomObj[0].appendChild( DomObj[1] );
				// Create a col.
				DomObj[1] = document.createElement("col");
				DomObj[1].setAttribute("width", "176px");
			DomObj[0].appendChild( DomObj[1] );
		oTable.appendChild( DomObj[0] );
			// Create TBody
			oTBody = document.createElement("tbody");
				// Create a Table Row.
				if(noDOM2HTML)	oTR = document.createElement("tr");
				else		oTR = oTBody.insertRow(-1);
				oTR.style.verticalAlign = "top";
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
<!-- Start of StatCounter Code -->
if(true){
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://www.statcounter.com");
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://my.statcounter.com/images/counters/small_ad.gif");
							DomObj[1].setAttribute("alt", "StatCounter - Free Web Tracker and Counter");
							DomObj[1].setAttribute("title", "StatCounter - Free Web Tracker and Counter");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 100;
								DomObj[1].height = 26;
							};
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
						// Text
						DomObj[0] = document.createTextNode("Visitors Since 07/11/04");
					oTD.appendChild( DomObj[0] );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://my.statcounter.com/project/standard/stats.php?project_id=541068&guest=1");
							var sCurLoc, tmpImg = new Image();
							sCurLoc = document.location.protocol + "//" + document.location.host;
							sCurLoc += document.location.pathname.substring(0, 1+document.location.pathname.lastIndexOf('/'));
							sCurLoc += Universe.Control.MakeSearch();
							sText = "http://c4.statcounter.com/t.php?";
							sText += "sc_project=" + 541068;
							sText += "&resolution=" + screen.width;
							sText += "&camefrom=" + escape(document.referrer.substring(0, 150));
							sText += "&u=" + escape(sCurLoc);
							sText += "&t=" + escape(document.title.substring(0, 150));
							sText += "&java=1";
							sText += "&sc_random=" + Math.random();
//							sText = "http://c4.statcounter.com/counter.php?sc_project=541068&amp;amp;java=0"
							tmpImg.src = sText;
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", sText);
							DomObj[1].setAttribute("alt", "StatCounter - Click for stats");
							DomObj[1].setAttribute("title", "StatCounter - Click for stats");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 58;
								DomObj[1].height = 17;
							};
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
/*
							// Create an script element. (var init)
							DomObj[0] = document.createElement("script");
							DomObj[0].setAttribute("type", "text/javascript");
								DomObj[1] = document.createTextNode("<!--");
							DomObj[0].appendChild( DomObj[1] );
								DomObj[1] = document.createTextNode("var sc_project=541068;");
							DomObj[0].appendChild( DomObj[1] );
								DomObj[1] = document.createTextNode("var sc_partition=3;");
							DomObj[0].appendChild( DomObj[1] );
								DomObj[1] = document.createTextNode("//-->");
							DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
							// Create an script element. (counter script)
							DomObj[0] = document.createElement("script");
							DomObj[0].setAttribute("type", "text/javascript");
//							DomObj[0].setAttribute("src", "http://www.statcounter.com/counter/frames.js");
							DomObj[0].setAttribute("src", "http://www.statcounter.com/counter/counter_xhtml.js");
					oTD.appendChild( DomObj[0] );
*/
<!-- End of StatCounter Code -->
};
var tmpWCImage1 = new Image(), tmpWCImage2 = new Image();
tmpWCImage1.src = "http://counter.digits.com/wc/-d/6/-r/-z/-c/4/-f/7B8C73/-b/000000/demon_FW_Maps_all";
tmpWCImage2.src = "http://counter.digits.com/wc/-d/6/-r/-z/-c/4/-f/7B8C73/-b/000000/demon_FW_Maps";
<!-- Start of WebCounter Code -->
if(false){
						// WebCounter
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://www.digits.com/");
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://www.digits.com/thumbnail/wc-01.gif");
							DomObj[1].setAttribute("alt", "WebCounter");
							DomObj[1].setAttribute("title", "WebCounter");
							DomObj[1].setAttribute("width", "75%");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 94;
								DomObj[1].height = 26;
							};
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
						// Text
						DomObj[0] = document.createTextNode("Visitors Since 07/11/04");
					oTD.appendChild( DomObj[0] );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
							// Counter width = #digits x 15, use -n to test changes on page without incrementing
							sText = "/-d/6/-r/-z/-c/4/-f/7B8C73/-b/000000";
//							sText += "/-n";
							// Create an img element. (overall counter)
							DomObj[0] = document.createElement("img");
							DomObj[0].setAttribute("src", "http://counter.digits.com/wc"+sText+"/demon_FW_Maps_all");
							DomObj[0].setAttribute("alt", "Counter");
							DomObj[0].setAttribute("title", "Counter");
							DomObj[0].setAttribute("width", "90px");
							DomObj[0].setAttribute("height", "20px");
							if(isIE4||isIE5||isIE6){
								DomObj[0].width = 90;
								DomObj[0].height = 20;
							};
					oTD.appendChild( DomObj[0] );
							// Create an img element. (Unique counter)
							DomObj[0] = document.createElement("img");
							DomObj[0].setAttribute("src", "http://counter.digits.com/wc"+sText+"/demon_FW_Maps");
							DomObj[0].setAttribute("alt", "Counter");
							DomObj[0].setAttribute("title", "Counter");
							DomObj[0].setAttribute("width", "90px");
							DomObj[0].setAttribute("height", "20px");
							if(isIE4||isIE5||isIE6){
								DomObj[0].width = 90;
								DomObj[0].height = 20;
							};
					oTD.appendChild( DomObj[0] );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
						// Text
						DomObj[0] = document.createTextNode("Unique Visitors");
					oTD.appendChild( DomObj[0] );
};
<!-- End of WebCounter Code -->
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
						/*	Creative Commons License	*/
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("rel", "license");
						DomObj[0].setAttribute("href", "http://creativecommons.org/licenses/by-nc-nd/2.0/");
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://creativecommons.org/images/public/somerights20.gif");
							DomObj[1].setAttribute("alt", "Creative Commons License");
							DomObj[1].setAttribute("title", "Creative Commons License");
							DomObj[1].setAttribute("width", "88px");
							DomObj[1].setAttribute("height", "31px");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 88;
								DomObj[1].height = 31;
							};
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
						DomObj[0] = document.createTextNode("This work is licensed under a ");
					oTD.appendChild( DomObj[0] );
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("rel", "license");
						DomObj[0].setAttribute("href", "http://creativecommons.org/licenses/by-nc-nd/2.0/");
							DomObj[1] = document.createTextNode("Creative Commons License");
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
						DomObj[0] = document.createTextNode(".");
					oTD.appendChild( DomObj[0] );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
						DomObj[0] = document.createTextNode("Read our ");
					oTD.appendChild( DomObj[0] );
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://www.trimoon.cloudns.eu/policies/");
							DomObj[1] = document.createTextNode("Policies");
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
						DomObj[0] = document.createTextNode(" and especialy ");
					oTD.appendChild( DomObj[0] );
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://www.trimoon.cloudns.eu/policies/#disclaimer");
							DomObj[1] = document.createTextNode("Disclaimer");
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
						DomObj[0] = document.createTextNode(" !");
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "manual.html");
						DomObj[0].setAttribute("title", "Application Manual");
							// Create a span element.
							DomObj[1] = document.createElement("div");
							DomObj[1].className = "rss";
								DomObj[2] = document.createTextNode("Application");
							DomObj[1].appendChild( DomObj[2] );
							// A Line Break.
							DomObj[1].appendChild( oBR.cloneNode(false) );
								DomObj[2] = document.createTextNode("Manual");
							DomObj[1].appendChild( DomObj[2] );
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://www.spreadfirefox.com/?q=user/register&r=14994");
						DomObj[0].setAttribute("title", "Spread FireFox");
							// Create a span element.
							DomObj[1] = document.createElement("span");
							DomObj[1].className = "rss";
								DomObj[2] = document.createTextNode("Spread FireFox");
							DomObj[1].appendChild( DomObj[2] );
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://www.spreadfirefox.com/?q=affiliates&id=14994&t=61");
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://www.spreadfirefox.com/community/images/affiliates/Buttons/110x32/trust.gif");
							DomObj[1].setAttribute("alt", "Get Firefox!");
							DomObj[1].setAttribute("title", "Get Firefox!");
							DomObj[1].setAttribute("width", "110px");
							DomObj[1].setAttribute("height", "32px");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 110;
								DomObj[1].height = 32;
							};
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://del.icio.us/trimoon");
						DomObj[0].setAttribute("title", "My bookmarks on del.icio.us");
							// Create a span element.
							DomObj[1] = document.createElement("span");
							DomObj[1].className = "rss";
								DomObj[2] = document.createTextNode("RSS: My Bookmarks");
							DomObj[1].appendChild( DomObj[2] );
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://www.trimoon.cloudns.eu/policies/#rating");
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://www.trimoon.cloudns.eu/policies/ICRA/en_aw_88x31.gif");
							DomObj[1].setAttribute("alt", "[ RSACi ]");
							DomObj[1].setAttribute("title", "[ RSACi ]");
							DomObj[1].setAttribute("align", "middle");
							DomObj[1].setAttribute("width", "88px");
							DomObj[1].setAttribute("height", "31px");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 88;
								DomObj[1].height = 31;
							};
						DomObj[0].appendChild( DomObj[1] );
						// A Line Break.
						DomObj[0].appendChild( oBR.cloneNode(false) );
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://www.trimoon.cloudns.eu/policies/SafeSurf/ssurf.gif");
							DomObj[1].setAttribute("alt", "[ SafeSurf ]");
							DomObj[1].setAttribute("title", "[ SafeSurf ]");
							DomObj[1].setAttribute("align", "middle");
							DomObj[1].setAttribute("width", "108px");
							DomObj[1].setAttribute("height", "34px");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 108;
								DomObj[1].height = 34;
							};
						DomObj[0].appendChild( DomObj[1] );
						// A Line Break.
						DomObj[0].appendChild( oBR.cloneNode(false) );
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://www.trimoon.cloudns.eu/policies/WebUrbia/WebUrbia-0a.gif");
							DomObj[1].setAttribute("alt", "[ Safe For Kids ]");
							DomObj[1].setAttribute("title", "[ Safe For Kids ]");
							DomObj[1].setAttribute("align", "middle");
							DomObj[1].setAttribute("width", "97px");
							DomObj[1].setAttribute("height", "34px");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 97;
								DomObj[1].height = 34;
							};
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.setAttribute("align", "right");
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://www.w3.org/DOM/DOMTR");
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://www.w3.org/Icons/W3C/Beveled-Logo_48x48.gif");
							DomObj[1].setAttribute("alt", "[ W3C DOM2 Compliant ]");
							DomObj[1].setAttribute("title", "[ W3C DOM2 Complaint ]");
							DomObj[1].setAttribute("width", "48px");
							DomObj[1].setAttribute("height", "48px");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 48;
								DomObj[1].height = 48;
							};
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://www.w3.org/Style/CSS/Buttons/");
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://www.w3.org/Style/CSS/Buttons/mwcts");
							DomObj[1].setAttribute("alt", "[ Made With Cascading StyleSheets ]");
							DomObj[1].setAttribute("title", "[ Made With Cascading StyleSheets ]");
							DomObj[1].setAttribute("width", "88px");
							DomObj[1].setAttribute("height", "31px");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 88;
								DomObj[1].height = 31;
							};
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
					// A Line Break.
					oTD.appendChild( oBR.cloneNode(false) );
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://jigsaw.w3.org/css-validator/check/referer");
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://www.w3.org/Icons/valid-css");
							DomObj[1].setAttribute("alt", "[ Valid CSS ]");
							DomObj[1].setAttribute("title", "[ Valid CSS ]");
							DomObj[1].setAttribute("width", "88px");
							DomObj[1].setAttribute("height", "31px");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 88;
								DomObj[1].height = 31;
							};
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						DomObj[0].setAttribute("href", "http://validator.w3.org/check?uri=referer");
							// Create an img element.
							DomObj[1] = document.createElement("img");
							DomObj[1].setAttribute("src", "http://www.w3.org/Icons/valid-xhtml10");
							DomObj[1].setAttribute("alt", "[ Valid XHTML 1.0! ]");
							DomObj[1].setAttribute("title", "[ Valid XHTML 1.0! ]");
							DomObj[1].setAttribute("width", "88px");
							DomObj[1].setAttribute("height", "31px");
							if(isIE4||isIE5||isIE6){
								DomObj[1].width = 88;
								DomObj[1].height = 31;
							};
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			// Add Table Row to TBody.
			if(noDOM2HTML)	oTBody.appendChild( oTR );
		// Add TBody to Table.
		oTable.appendChild( oTBody );
	oFooter.appendChild( oTable );
	// Put in document.
	oOutput.appendChild( oFooter );
};
/*
	Generate List of MarkTypes. (Recursive!!!)
	bShow = Bolean indicating if it should be shown or removed.
	Returns: None. (Output is put in document.)
*/
function genMarkTypes(bShow, Obj, oDom){
	var oOutput, DomObj, DomObj2, sText;

	// Fetch Output div.
	oOutput = document.getElementById("Output");

	if(bShow){
		if( !Obj ){
			DomObj = document.createElement("div");
			DomObj.id = "MarkTypes";
			genMarkTypes(bShow, MarkTypes, DomObj);
			oOutput.appendChild( DomObj );
		}else{
			sText = Obj.name;
			if( Obj.length )	sText += ':' ;
			DomObj = document.createTextNode(sText);
			oDom.appendChild( DomObj );
			oDom.style.listStyleImage = "url(" +( bTest ? TestImg : Obj.img.src )+ ")";
			if( Obj.length ){
				DomObj = document.createElement("ul");
				oDom.appendChild( DomObj );
				for( var loopObj=0; loopObj<Obj.length; loopObj++ ){
					DomObj2 = document.createElement("li");
					DomObj.appendChild( DomObj2 );
					genMarkTypes(bShow, Obj.get(loopObj), DomObj2 )
				};
			};
		};
	}else{
		DomObj = document.getElementById('MarkTypes');
		if(DomObj)	oOutput.removeChild(DomObj);
	};
};
/*
	Generate a ImageMap DOMobject of a supplied obj.
	Obj = any obj with a imgMap property.
	Returns: A complete MAP DOM-Element or HTML.
*/
function genImageMapDOM(Obj){
	var oMap, oArea, sHTML;

	if(Obj.imgMap){
		if(noDOM2HTML){
			// Create MAP element.
			sHTML = '<map id="ImageMap" name="'+Obj.name+'">';
			for(var loopArea=0; loopArea<Obj.imgMap.length; loopArea++){
				// Create AREA Element.
				sHTML += '<area';
				sHTML += ' shape="' + Obj.imgMap[loopArea].Shape.toLowerCase() + '"';
				sHTML += ' coords="' + Obj.imgMap[loopArea].Coords.join(',') + '"';
				sHTML += ' alt="' + Obj.imgMap[loopArea].Alt + '"';
				if( !(Obj.imgMap[loopArea].Loc) ){
					sHTML += ' noHref';
				}else{
					sHTML += ' href="';
					sHTML += 'javascript:Navigate(';
					sHTML += "'" + Obj.imgMap[loopArea].Loc + "'";
					sHTML += ')"';
				};
				sHTML += '>';
			};
		}else{
			// Create MAP element.
			oMap = document.createElement("map");
			oMap.id = 'ImageMap';
			oMap.name = Obj.name;
			for(var loopArea=0; loopArea<Obj.imgMap.length; loopArea++){
				// Create AREA Element.
				oArea = document.createElement("area");
				oArea.setAttribute("shape", Obj.imgMap[loopArea].Shape);
				oArea.setAttribute("coords", Obj.imgMap[loopArea].Coords);
				oArea.setAttribute("alt", Obj.imgMap[loopArea].Alt);
				oArea.noHref = (Obj.imgMap[loopArea].Loc?false:true);
				if(Obj.imgMap[loopArea].Loc){
					var str;
					str = "javascript:Navigate('";
					str += Obj.imgMap[loopArea].Loc;
					str += "')";
					oArea.setAttribute("href", str);
				}
				oMap.appendChild( oArea );
			};
		};
	};
	if(noDOM2HTML)	return sHTML;
	else		return oMap;
};
/*
	Generate Solar Systsm DOMobject.
	Returns: A complete DOM-Element.
*/
function genSolarSystsmDOM(){
	var oBR, oDiv, oImageMap;
	var sText, DomObj = Array(3);

	// Create BR element.
	oBR = document.createElement("br");

	// Create main content div.
	oDiv = document.createElement("div");
	oDiv.id = "main_content";
	oDiv.setAttribute("align","center");
		// Create heading span.
		DomObj[0] = document.createElement("span");
		DomObj[0].id = "content_heading";
		DomObj[0].style.fontSize = "150%";
			DomObj[1] = document.createElement("a");
			DomObj[1].setAttribute("href", Universe.Control.MakeSearch() );
			DomObj[1].setAttribute("target", "_top");
				sText = Universe.name + " Solar System:";
				DomObj[2] = document.createTextNode(sText);
			DomObj[1].appendChild( DomObj[2] );
		DomObj[0].appendChild( DomObj[1] );
	oDiv.appendChild( DomObj[0] );
	// A Line Break.
	oDiv.appendChild( oBR.cloneNode(false) );
		// Create hint span.
		DomObj[0] = document.createElement("span");
		DomObj[0].id = "content_hint";
		DomObj[0].style.textAlign = "center";
		DomObj[0].style.fontSize = "60%";
			sText = "(Click any planet for fast navigation.)";
			DomObj[1] = document.createTextNode(sText);
		DomObj[0].appendChild( DomObj[1] );
	oDiv.appendChild( DomObj[0] );
	// A Line Break.
	oDiv.appendChild( oBR.cloneNode(false) );
	// Create ImageMap
	oImageMap = genImageMapDOM(Universe);
		// Create IMG element.
		DomObj[0] = document.createElement("img");
		DomObj[0].setAttribute("alt", "Solar System");
		DomObj[0].setAttribute("src", Universe.image());
		if(oImageMap)
			DomObj[0].setAttribute("usemap", '#'+Universe.name);
	oDiv.appendChild( DomObj[0] );
	// Add ImageMap after image.
	if(oImageMap){
		if(noDOM2HTML)	oDiv.innerHTML += oImageMap;
		else		oDiv.appendChild( oImageMap );
	};

	return oDiv;
};
/*
	Generate Planet DOMobject.
	Returns: A complete DOM-Element.
*/
function genPlanetDOM(){
	var oBR, oDiv, oImageMap;
	var oTable, oCaption, oTHead, oTBody, oTFoot, oTR, oTD;
	var sText, DomObj = Array(3);
	var oPlanet;

	// Create BR element.
	oBR = document.createElement("br");

	// Fetch Planet.
	if(bTest)	oPlanet = Universe.planet("Test");
	else		oPlanet = Universe.planet(gPlanet);

	// Create main content div.
	oDiv = document.createElement("div");
	oDiv.id = "main_content";
	oDiv.setAttribute("align","center");
		// Create Table.
		oTable = document.createElement("table");
		oTable.className = "mapDetails";
		oTable.setAttribute("cellPadding",0);
		oTable.setAttribute("cellSpacing",0);
			// Create Caption.
			oCaption = oTable.createCaption();
			oCaption.id = "content_heading";
			oCaption.style.fontSize = "150%";
				DomObj[0] = document.createElement("a");
				DomObj[0].setAttribute("href", Universe.Control.MakeSearch(oPlanet) );
				DomObj[0].setAttribute("target", "_top");
				sText = oPlanet.name + " Maps:";
					DomObj[1] = document.createTextNode(sText);
				DomObj[0].appendChild( DomObj[1] );
			oCaption.appendChild( DomObj[0] );
			// A Line Break.
			oCaption.appendChild( oBR.cloneNode(false) );
				// Create content_backtrace span
				DomObj[0] = document.createElement("span");
				DomObj[0].id = "content_backtrace";
				DomObj[0].style.fontSize = "53%";
					// Create an anchor element.
					DomObj[1] = document.createElement("a");
					DomObj[1].setAttribute("href", "javascript:Navigate()");
						sText = "(Go back to Solar System)";
						DomObj[2] = document.createTextNode(sText);
					DomObj[1].appendChild( DomObj[2] );
				DomObj[0].appendChild( DomObj[1] );
			oCaption.appendChild( DomObj[0] );
			// A Line Break.
			oCaption.appendChild( oBR.cloneNode(false) );
				// Create content_hint span.
				DomObj[0] = document.createElement("span");
				DomObj[0].id = "content_hint";
				DomObj[0].style.textAlign = "center";
				DomObj[0].style.fontSize = "60%";
					sText = "(Click any minimap to view a larger version.)";
					DomObj[1] = document.createTextNode(sText);
				DomObj[0].appendChild( DomObj[1] );
			oCaption.appendChild( DomObj[0] );
			// Create TBody
			oTBody = document.createElement("tbody");
				// Create a Table Row.
				if(noDOM2HTML)	oTR = document.createElement("tr");
				else		oTR = oTBody.insertRow(-1);
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					if(!oPlanet.img){
						// Create maps of Planet.
						for(var loopMap=0; loopMap<oPlanet.maps.length; loopMap++){
							// Generate minimap
							DomObj[0] = genMapDOM(oPlanet.name, oPlanet.maps[loopMap].name, -1);
							// Add minimap to Table Cell.
							oTD.appendChild( DomObj[0] );
							// Do we have more maps to go?
							if( loopMap<oPlanet.maps.length ){
								// Add Table Cell to Table Row.
								if(noDOM2HTML)	oTR.appendChild( oTD );
							};
							// Do we need a new Table Row?
							if( oPlanet.x && !((loopMap+1)%oPlanet.x) ){
								// Add Table Row to TBody.
								if(noDOM2HTML)	oTBody.appendChild( oTR );
								// Create a Table Row.
								if(noDOM2HTML)	oTR = document.createElement("tr");
								else		oTR = oTBody.insertRow(-1);
							};
							// Do we need a new Table Cell?
							if( loopMap<oPlanet.maps.length ){
								// Create a Table Cell.
								if(noDOM2HTML)	oTD = document.createElement("td");
								else		oTD = oTR.insertCell(-1);
							}
						};
					}else{
						// Create ImageMap.
						oImageMap = genImageMapDOM(oPlanet);
							// Create IMG element.
							DomObj[0] = document.createElement("img");
							DomObj[0].setAttribute("alt", oPlanet.name);
							DomObj[0].setAttribute("src", oPlanet.image());
							DomObj[0].setAttribute("usemap", '#'+oPlanet.name);
						oTD.appendChild( DomObj[0] );
						// Add ImageMap after image.
						if(oImageMap){
							if(noDOM2HTML)	oTD.innerHTML += oImageMap;
							else		oTD.appendChild( oImageMap );
						};
					};
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			// Add Table Row to TBody.
			if(noDOM2HTML)	oTBody.appendChild( oTR );
		// Add TBody to Table.
		oTable.appendChild( oTBody );
		// Create Mark listing for all maps.
		for(var loopMap=0; loopMap<oPlanet.maps.length; loopMap++){
			if(oPlanet.maps[loopMap].Marks.length){
					// Create TBody
					oTBody = document.createElement("tbody");
						// Create a Table Row.
						if(noDOM2HTML)	oTR = document.createElement("tr");
						else		oTR = oTBody.insertRow(-1);
							// Create a Table Cell.
							if(noDOM2HTML)	oTD = document.createElement("td");
							else		oTD = oTR.insertCell(-1);
							oTD.id = "mapmarklist";
							if(oPlanet.x){
								oTD.setAttribute("colSpan", oPlanet.x);
								oTD.setAttribute("width", (oPlanet.x*80)+'px' );
							};
							// Add MapSpan to Table Cell.
							oTD.appendChild( genMarksTableDOM(oPlanet,oPlanet.maps[loopMap],-2) );
						// Add Table Cell to Table Row.
						if(noDOM2HTML)	oTR.appendChild( oTD );
					// Add Table Row to TBody.
					if(noDOM2HTML)	oTBody.appendChild( oTR );
				// Add TBody to Table.
				oTable.appendChild( oTBody );
			};
		};
		// Create TFoot
		oTFoot = oTable.createTFoot();
			// Create a Table Row.
			if(noDOM2HTML)	oTR = document.createElement("tr");
			else		oTR = oTFoot.insertRow(-1);
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				oTD.id = "content_backtrace";
				oTD.setAttribute("colSpan", oPlanet.x);
				oTD.style.textAlign = "center";
				oTD.style.fontSize = "80%";
					// Create an anchor element.
					DomObj[0] = document.createElement("a");
					DomObj[0].setAttribute("href", "javascript:Navigate()");
						sText = "(Go back to Solar System)";
						DomObj[1] = document.createTextNode(sText);
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
		// Add Table Row to TFoot.
		if(noDOM2HTML)	oTFoot.appendChild( oTR );
	// Add Table to Div.
	oDiv.appendChild( oTable );

	return oDiv;
};
/*
	Generate Map DOMobject.
	Returns: A complete DOM-Element.
*/
function genMapDOM(sPlanet, sMap, nZoom){
	var oPlanet, oMap, oMark, oDiv;
	var oTable, oCaption, oTHead, oTBody, oTFoot, oTR, oTD;
	var oMapSpan, oMapImg, oMarkImg;
	var sText, DomObj = Array(3);
	var BaseScale=10, MiniMapScale=80, BaseMapScale=512, CutOffLevel=(1/2);
	var Scale, loopMark;

	// Fetch Planet.
	if(bTest)	oPlanet = Universe.planet("Test");
	else		oPlanet = Universe.planet(sPlanet);
	// Fetch Map.
	if(bTest)	oMap = oPlanet.maps[0];	// Just take 1st map for test.
	else		oMap = oPlanet.map(sMap);

	// Calculate Scale.
	if(nZoom<0){
		// Negative zoom = minimap.
		Scale = (
				( (MiniMapScale*BaseScale) / oMap.x )
				+(  (MiniMapScale*BaseScale) / oMap.y )
			)/2;
	}else{
		// To compensate for maps with different sizes.
		Scale = nZoom
			*(
				( (BaseMapScale*BaseScale) / oMap.x )
				+( (BaseMapScale*BaseScale) / oMap.y )
			)/2;
	};

	// Create main content div.
	oDiv = document.createElement("div");
	oDiv.id = "main_content";
	oDiv.setAttribute("align","center");
		// Create Table.
		oTable = document.createElement("table");
		oTable.className = "mapDetails";
		oTable.setAttribute("cellPadding",0);
		oTable.setAttribute("cellSpacing",0);
		// Create content_heading only on certain zoom levels.
		if(nZoom>=CutOffLevel){
			// Create Caption.
			oCaption = oTable.createCaption();
			oCaption.id = "content_heading";
			oCaption.style.fontSize = "150%";
				DomObj[0] = document.createElement("a");
				DomObj[0].setAttribute("href", Universe.Control.MakeSearch(oPlanet,oMap) );
				DomObj[0].setAttribute("target", "_top");
					sText = oPlanet.name + '(' + oMap.name + "):";
					DomObj[1] = document.createTextNode(sText);
				DomObj[0].appendChild( DomObj[1] );
			oCaption.appendChild( DomObj[0] );
				// Create a BR
				DomObj[0] = document.createElement("br");
			oCaption.appendChild( DomObj[0] );
				// Create content_backtrace span
				DomObj[0] = document.createElement("span");
				DomObj[0].id = "content_backtrace";
				DomObj[0].style.fontSize = "53%";
					// Create an anchor element.
					DomObj[1] = document.createElement("a");
					sText = "javascript:Navigate('";
					sText += oPlanet.name;
					sText += "')";
					DomObj[1].setAttribute("href", sText);
						sText = "(Go back to "+oPlanet.name+")";
						DomObj[2] = document.createTextNode(sText);
					DomObj[1].appendChild( DomObj[2] );
				DomObj[0].appendChild( DomObj[1] );
			oCaption.appendChild( DomObj[0] );
		};
			// Create TBody
			oTBody = document.createElement("tbody");
				// Create a Table Row.
				if(noDOM2HTML)	oTR = document.createElement("tr");
				else		oTR = oTBody.insertRow(-1);
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.id = "mapcell";
					oTD.setAttribute("width", parseInt( (oMap.x/BaseScale)*Scale ) );
					oTD.setAttribute("height", parseInt( (oMap.y/BaseScale)*Scale ) );
					oTD.style.verticalAlign = "top";
					if(noDOM2HTML)	oTD.setAttribute("align", "left");
					// Make Table Cell clickable in minimap mode.
					if(nZoom<0 && oMap.name){
						oTD.style.cursor = "pointer";
						oTD.onclick = function(){ Navigate(oPlanet.name+'|'+oMap.name); };
						oTD.onmouseover = function(){ window.status="Navigate to?"; };
						oTD.onmouseout = function(){ window.status="Select something!"; };
					};
						// Create MapSpan.
						oMapSpan = document.createElement("span");
						oMapSpan.id = "mapspan";
						oMapSpan.style.position = "relative";
						oMapSpan.style.left = "0px";
						oMapSpan.style.top = "0px";
							// Create MapImg.
							oMapImg = document.createElement("img");
							oMapImg.id = "mapimg";
							oMapImg.setAttribute("alt", (oMap.name?oMap.name:"Coming Soon") );
							oMapImg.setAttribute("src", oMap.image(nZoom<CutOffLevel));
							oMapImg.setAttribute("width", parseInt( (oMap.x/BaseScale)*Scale ) );
							oMapImg.setAttribute("height", parseInt( (oMap.y/BaseScale)*Scale ) );
							if(noDOM2HTML){
								oMapImg.width = parseInt( (oMap.x/BaseScale)*Scale );
								oMapImg.height = parseInt( (oMap.x/BaseScale)*Scale );
							};
							oMapImg.style.position = "absolute";
							oMapImg.style.left = "0px";
							oMapImg.style.top = "0px";
							oMapImg.style.zIndex = 0;
						// Add MapImg to MapSpan.
						oMapSpan.appendChild( oMapImg );
						// Create Marks.
						for(loopMark=0; loopMark<oMap.Marks.length; loopMark++){
							oMark = oMap.Marks[loopMark];
						if( ShouldShowMark(oMark,nZoom) ){
								// Create a MarkImg.
								oMarkImg = document.createElement("img");
								oMarkImg.id = "markimg";
								oMarkImg.setAttribute("title", oMark.name+(oMark.desc?' ('+oMark.desc+')':'') );
								oMarkImg.setAttribute("alt", oMark.name+(oMark.desc?' ('+oMark.desc+')':'') );
								oMarkImg.setAttribute("src", oMark.img.src);
								oMarkImg.setAttribute("width", parseInt( oMark.img.width*(Scale<1?Scale:1) ) );
								oMarkImg.setAttribute("height", parseInt( oMark.img.height*(Scale<1?Scale:1) ) );
								if(noDOM2HTML){
									oMarkImg.width = parseInt(oMark.img.width*(Scale<1?Scale:1));
									oMarkImg.height = parseInt(oMark.img.height*(Scale<1?Scale:1));
								};
								oMarkImg.style.position = "absolute";
								// Position Mark. (0,0 is left bottom.)
								oMarkImg.style.left =	parseInt(
												( oMark.x*(Scale/BaseScale) )
												-( oMark.img.width*(Scale<1?Scale:1)/2 )
											)+"px";
								oMarkImg.style.bottom =	parseInt(
												( oMark.y*(Scale/BaseScale) )
												-( oMark.img.height*(Scale<1?Scale:1)/2 )
											)+"px";
								oMarkImg.style.zIndex = loopMark+1;
								// Add MarkImg to MapSpan.
								oMapSpan.appendChild( oMarkImg );
							};
						};
					// Add MapSpan to Table Cell.
					oTD.appendChild( oMapSpan );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			// Add Table Row to TBody.
			if(noDOM2HTML)	oTBody.appendChild( oTR );
		// Add TBody to Table.
		oTable.appendChild( oTBody );
		// Create Mark listing only on certain zoom levels.
		if(nZoom>=CutOffLevel){
				// Create TBody
				oTBody = document.createElement("tbody");
					// Create a Table Row.
					if(noDOM2HTML)	oTR = document.createElement("tr");
					else		oTR = oTBody.insertRow(-1);
						// Create a Table Cell.
						if(noDOM2HTML)	oTD = document.createElement("td");
						else		oTD = oTR.insertCell(-1);
						oTD.id = "mapmarklist";
						// Add MapSpan to Table Cell.
						oTD.appendChild( genMarksTableDOM(oPlanet,oMap,nZoom) );
					// Add Table Cell to Table Row.
					if(noDOM2HTML)	oTR.appendChild( oTD );
				// Add Table Row to TBody.
				if(noDOM2HTML)	oTBody.appendChild( oTR );
			// Add TBody to Table.
			oTable.appendChild( oTBody );
		};
		// Create content_backtrace only on certain zoom levels.
		if(nZoom>=CutOffLevel){
			// Create TFoot
			oTFoot = oTable.createTFoot();
				// Create a Table Row.
				if(noDOM2HTML)	oTR = document.createElement("tr");
				else		oTR = oTFoot.insertRow(-1);
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.id = "content_backtrace";
					oTD.style.textAlign = "center";
					oTD.style.fontSize = "80%";
						// Create an anchor element.
						DomObj[0] = document.createElement("a");
						sText = "javascript:Navigate('";
						sText += oPlanet.name;
						sText += "')";
						DomObj[0].setAttribute("href", sText);
							sText = "(Go back to "+oPlanet.name+")";
							DomObj[1] = document.createTextNode(sText);
						DomObj[0].appendChild( DomObj[1] );
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			// Add Table Row to TFoot.
			if(noDOM2HTML)	oTFoot.appendChild( oTR );
		};

	// Return Div only on certain zoom levels.
	if(nZoom>=CutOffLevel){
		// Add Table to Div.
		oDiv.appendChild( oTable );
		return oDiv;
	}else
		return oTable;
};
/*
	Generate a Zoom Control.
	Returns: A complete DOM-Element.
*/
function genZoomControl(){
	var oBR, oDiv, oFieldSet;
	var oTable, oTBody, oTR, oTD;
	var sText, DomObj = Array(3);

	// Create BR element.
	oBR = document.createElement("br");

	// Create a div.
	oDiv = document.createElement("div");
	oDiv.id = "ZoomControl";
	oDiv.setAttribute("align","center");
		// Create Table.
		oTable = document.createElement("table");
		oTable.id = "ZCTable";
			// Create TBody
			oTBody = document.createElement("tbody");
				// Create a Table Row.
				if(noDOM2HTML)	oTR = document.createElement("tr");
				else		oTR = oTBody.insertRow(-1);
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
						// Create Settings Fieldset.
						oFieldSet = document.createElement("fieldset");
						oFieldSet.id = "Settings";
						// Create Legend
							DomObj[0] = document.createElement("legend");
								DomObj[1] = document.createTextNode("Zoom Level:");
							DomObj[0].appendChild( DomObj[1] );
						oFieldSet.appendChild( DomObj[0] );
						// Create Zoom Se;ectbox.
							DomObj[0] = document.createElement("select");
							DomObj[0].name = "Zoom";
							DomObj[0].onchange = function(){ Universe.Control.SetZoom(this.value); };
							// Options
								DomObj[1] = document.createElement("option");
								DomObj[1].setAttribute("value", -1);
									DomObj[2] = document.createTextNode("mini");		// Minimap
								DomObj[1].appendChild( DomObj[2] );
							DomObj[0].appendChild( DomObj[1] );
								DomObj[1] = document.createElement("option");
								DomObj[1].setAttribute("value", 1/4);
									DomObj[2] = document.createTextNode("1:4");		// 1:4
								DomObj[1].appendChild( DomObj[2] );
							DomObj[0].appendChild( DomObj[1] );
								DomObj[1] = document.createElement("option");
								DomObj[1].setAttribute("value", 1/2);
									DomObj[2] = document.createTextNode("1:2");		// 1:2
								DomObj[1].appendChild( DomObj[2] );
							DomObj[0].appendChild( DomObj[1] );
								DomObj[1] = document.createElement("option");
								DomObj[1].setAttribute("value", 1);
									DomObj[2] = document.createTextNode("1:1");		// 1:1
								DomObj[1].appendChild( DomObj[2] );
							DomObj[0].appendChild( DomObj[1] );
								DomObj[1] = document.createElement("option");
								DomObj[1].setAttribute("value", 1.5);
									DomObj[2] = document.createTextNode("1\xBD:1");	// 1(1/2):1
								DomObj[1].appendChild( DomObj[2] );
							DomObj[0].appendChild( DomObj[1] );
								DomObj[1] = document.createElement("option");
								DomObj[1].setAttribute("value", 2);
									DomObj[2] = document.createTextNode("2:1");		// 2:1
								DomObj[1].appendChild( DomObj[2] );
							DomObj[0].appendChild( DomObj[1] );
								DomObj[1] = document.createElement("option");
								DomObj[1].setAttribute("value", 2.5);
									DomObj[2] = document.createTextNode("2\xBD:1");	// 2(1/2):1
								DomObj[1].appendChild( DomObj[2] );
							DomObj[0].appendChild( DomObj[1] );
								DomObj[1] = document.createElement("option");
								DomObj[1].setAttribute("value", 10);
									DomObj[2] = document.createTextNode("10:1");	// 10:1
								DomObj[1].appendChild( DomObj[2] );
							DomObj[0].appendChild( DomObj[1] );
							// Preselect option corrosponding to gZoom.
							for(var loopOption=0; loopOption<DomObj[0].options.length; loopOption++){
								var oOption = DomObj[0].options[loopOption];
								if(oOption.value==gZoom){
									if(noDOM2HTML)	oOption.selected = true;
									else		oOption.defaultSelected = true;
									DomObj[0].options.selectedIndex = loopOption;
								};
							};
						oFieldSet.appendChild( DomObj[0] );
						// A Line Break.
						oFieldSet.appendChild( oBR.cloneNode(false) );
						// Create minimap option.
							DomObj[0] = document.createElement("input");
							DomObj[0].type = "radio";
							DomObj[0].name = "ZoomBtn";
							DomObj[0].defaultChecked = (gZoom==-1);
							DomObj[0].onclick = function(){ Universe.Control.SetZoom(-1); };
						oFieldSet.appendChild( DomObj[0] );
						// Create 1:4 option.
							DomObj[0] = document.createElement("input");
							DomObj[0].type = "radio";
							DomObj[0].name = "ZoomBtn";
							DomObj[0].defaultChecked = (gZoom==(1/4));
							DomObj[0].onclick = function(){ Universe.Control.SetZoom(1/4); };
						oFieldSet.appendChild( DomObj[0] );
						// Create 1:2 option.
							DomObj[0] = document.createElement("input");
							DomObj[0].type = "radio";
							DomObj[0].name = "ZoomBtn";
							DomObj[0].defaultChecked = (gZoom==(1/2));
							DomObj[0].onclick = function(){ Universe.Control.SetZoom(1/2); };
						oFieldSet.appendChild( DomObj[0] );
						// Create 1:1 option.
							DomObj[0] = document.createElement("input");
							DomObj[0].type = "radio";
							DomObj[0].name = "ZoomBtn";
							DomObj[0].defaultChecked = (gZoom==1);
							DomObj[0].onclick = function(){ Universe.Control.SetZoom(1); };
						oFieldSet.appendChild( DomObj[0] );
						// Create 1(1/2):1 option.
							DomObj[0] = document.createElement("input");
							DomObj[0].type = "radio";
							DomObj[0].name = "ZoomBtn";
							DomObj[0].defaultChecked = (gZoom==1.5);
							DomObj[0].onclick = function(){ Universe.Control.SetZoom(1.5); };
						oFieldSet.appendChild( DomObj[0] );
						// Create 2:1 option.
							DomObj[0] = document.createElement("input");
							DomObj[0].type = "radio";
							DomObj[0].name = "ZoomBtn";
							DomObj[0].defaultChecked = (gZoom==2);
							DomObj[0].onclick = function(){ Universe.Control.SetZoom(2); };
						oFieldSet.appendChild( DomObj[0] );
						// Create 2(1/2):1 option.
							DomObj[0] = document.createElement("input");
							DomObj[0].type = "radio";
							DomObj[0].name = "ZoomBtn";
							DomObj[0].defaultChecked = (gZoom==2.5);
							DomObj[0].onclick = function(){ Universe.Control.SetZoom(2.5); };
						oFieldSet.appendChild( DomObj[0] );
						// Create 10:1 option.
							DomObj[0] = document.createElement("input");
							DomObj[0].type = "radio";
							DomObj[0].name = "ZoomBtn";
							DomObj[0].defaultChecked = (gZoom==10);
							DomObj[0].onclick = function(){ Universe.Control.SetZoom(10); };
						oFieldSet.appendChild( DomObj[0] );
					// Add oFieldSet to Table Cell.
					oTD.appendChild( oFieldSet );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			// Add Table Row to TBody.
			if(noDOM2HTML)	oTBody.appendChild( oTR );
		// Add TBody to Table.
		oTable.appendChild( oTBody );
	// Add Table to Div.
	oDiv.appendChild( oTable );

	return oDiv;
};
/*
	Generate a Table with a listing of Marks.
	Returns: A complete DOM-Element.
*/
function genMarksTableDOM(oPlanet, oMap, nZoom){
	var oTable, oCaption, oTHead, oTBody, oTFoot, oTR, oTD;
	var sText, DomObj = Array(3);
	var oMark, oMarkImg;

	// Create Table.
	oTable = document.createElement("table");
	oTable.className = "mapDetails";
	oTable.id = "MarksTable";
	oTable.style.width = "100%";
		// Create Caption.
		oCaption = oTable.createCaption();
		oCaption.id = "content_heading";
		oCaption.style.fontSize = "75%";
			sText = 'Marks for: ' + oPlanet.name + '(' + oMap.name + ")";
			DomObj[0] = document.createTextNode(sText);
		oCaption.appendChild( DomObj[0] );
		// Create Thead
		oTHead = oTable.createTHead();
		oTHead.style.fontSize = "100%";
			// Create a Table Row.
			if(noDOM2HTML)	oTR = document.createElement("tr");
			else		oTR = oTHead.insertRow(-1);
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
					DomObj[0] = document.createTextNode("Mark");
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
/*				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
					DomObj[0] = document.createTextNode("Type");
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
*/				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
					DomObj[0] = document.createTextNode("Location");
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
					DomObj[0] = document.createTextNode("Name");
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
					DomObj[0] = document.createTextNode("Desc");
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
		// Add Table Row to oTHead.
		if(noDOM2HTML)	oTHead.appendChild( oTR );
		// Create TBody
		oTBody = document.createElement("tbody");
			// Create Marks.
			for(loopMark=0; loopMark<oMap.Marks.length; loopMark++){
				oMark = oMap.Marks[loopMark];
				if( ShouldShowMark(oMark,nZoom) ){
					// Create a Table Row.
					if(noDOM2HTML)	oTR = document.createElement("tr");
					else		oTR = oTBody.insertRow(-1);
					oTR.style.fontSize = "75%";
					if(loopMark%2)	oTR.className = "MarksTableRow";
						// Create a Table Cell.
						if(noDOM2HTML)	oTD = document.createElement("td");
						else		oTD = oTR.insertCell(-1);
						oTD.style.textAlign = "center";
							// Create a MarkImg.
							oMarkImg = document.createElement("img");
							oMarkImg.id = "markimg";
							oMarkImg.setAttribute("title", oMark.name+(oMark.desc?' ('+oMark.desc+')':'') );
							oMarkImg.setAttribute("alt", oMark.name+(oMark.desc?' ('+oMark.desc+')':'') );
							oMarkImg.setAttribute("src", oMark.img.src);
							oMarkImg.setAttribute("width", 20);
							oMarkImg.setAttribute("height", 20);
						// Add MarkImg to Table Cell.
						oTD.appendChild( oMarkImg );
					// Add Table Cell to Table Row.
					if(noDOM2HTML)	oTR.appendChild( oTD );
/*						// Create a Table Cell.
						if(noDOM2HTML)	oTD = document.createElement("td");
						else		oTD = oTR.insertCell(-1);
							DomObj[0] = document.createTextNode(oMark.type);
						oTD.appendChild( DomObj[0] );
					// Add Table Cell to Table Row.
					if(noDOM2HTML)	oTR.appendChild( oTD );
*/						// Create a Table Cell.
						if(noDOM2HTML)	oTD = document.createElement("td");
						else		oTD = oTR.insertCell(-1);
						oTD.style.textAlign = "center";
							DomObj[0] = document.createTextNode(oMark.x+","+oMark.y);
						oTD.appendChild( DomObj[0] );
					// Add Table Cell to Table Row.
					if(noDOM2HTML)	oTR.appendChild( oTD );
						// Create a Table Cell.
						if(noDOM2HTML)	oTD = document.createElement("td");
						else		oTD = oTR.insertCell(-1);
						oTD.style.textAlign = "right";
						genMarkName(oTD, oMark);
					// Add Table Cell to Table Row.
					if(noDOM2HTML)	oTR.appendChild( oTD );
						// Create a Table Cell.
						if(noDOM2HTML)	oTD = document.createElement("td");
						else		oTD = oTR.insertCell(-1);
						genMarkDesc(oTD, oMark)
					// Add Table Cell to Table Row.
					if(noDOM2HTML)	oTR.appendChild( oTD );
					// Add Table Row to TBody.
					if(noDOM2HTML)	oTBody.appendChild( oTR );
				};
			};
	// Add TBody to Table.
	oTable.appendChild( oTBody );

	return oTable;
};
/*
	Generate Mark Name.
	Returns: DOM-Object provided has result.
*/
function genMarkName(oDom, oMark){
	var oBR, DomObj = Array(3);
	var oNPC, oMonster;
	var aMarkType, aNameParts;

	try{
		// Create BR element.
		oBR = document.createElement("br");

		// Split Marktype.
		aMarkType = oMark.type.split('|');
		// Split Markname.
		aNameParts = oMark.name.split('|');
		// Only do specifics when name has selectors.
		if(aNameParts.length>1){
			switch(aMarkType[0]){
			case "NPC":
				switch(aMarkType[1]){
				case "Monster":
						// Fetch Monster
						oMonster = Monsters.get(aNameParts[0], aNameParts[1]);
						// Insert bold Name.
							DomObj[0] = document.createElement("b");
							DomObj[0].innerHTML = oMonster.getHTMLName();
						oDom.appendChild( DomObj[0] );
						// A Line Break.
						oDom.appendChild( oBR.cloneNode(false) );
						// Insert Level
							DomObj[0] = document.createTextNode( "Level " + oMonster.Level );
						oDom.appendChild( DomObj[0] );
						break;
				default:
						// Fetch NPC
						oNPC = NPCs.get(aNameParts[0], aNameParts[1]);
						// Insert bold Name.
							DomObj[0] = document.createElement("b");
							DomObj[0].innerHTML = oNPC.getHTMLName();
						oDom.appendChild( DomObj[0] );
						break;
				};
				break;
			default:
				// Insert bold Name.
					DomObj[0] = document.createElement("b");
					DomObj[0].innerHTML = aNameParts[0];
				oDom.appendChild( DomObj[0] );
				break;
			};
		}else{
			DomObj[0] = document.createTextNode(oMark.name);
			oDom.appendChild( DomObj[0] );
		};
	}
	catch(e){
		var str = '';
		if(e.message)		str += e.message;
		else if(e.description)	str += e.description;
		str += '\n' + oMark.Map.Planet.SolarSystem.name + ' - ' + oMark.Map.Planet.name + ' - ' + oMark.Map.name;
		str += '\n' + oMark.x + ', ' + oMark.y + ', "' + oMark.name + '"';
		throw new ReferenceError(str);
	}
};
/*
	Generate Mark Desc.
	Returns: DOM-Object provided has result.
*/
function genMarkDesc(oDom, oMark){
	var oBR, oHR, DomObj = Array(3);
	var oNPC, oMonster, oItem;
	var aMarkType, aNameParts;

	try{
		// Create BR element.
		oBR = document.createElement("br");
		// A Horizontal Line.
		oHR = document.createElement("hr");

		// Split Marktype.
		aMarkType = oMark.type.split('|');
		// Split Markname.
		aNameParts = oMark.name.split('|');

		// Insert Desc.
		if(oMark.desc)	oDom.innerHTML = oMark.desc;
		// Only do specifics when name has selectors.
		if(aNameParts.length>1){
			// Insert Horizontal Line after Mark Desc.
			if(oMark.desc)	oDom.appendChild( oHR.cloneNode(false) );
			switch(aMarkType[0]){
			case "NPC":
					switch(aMarkType[1]){
					case "Monster":
							// Fetch Monster
							oMonster = Monsters.get(aNameParts[0], aNameParts[1]);
							// Insert Monster Desc.
							if(oMonster.Desc){
								oDom.innerHTML += oMonster.Desc;
								// A Horizontal Line.
								oDom.appendChild( oHR.cloneNode(false) );
							};
							// Insert bold HP.
								DomObj[0] = document.createElement("b");
									DomObj[1] = document.createTextNode("HP");
								DomObj[0].appendChild( DomObj[1] );
							oDom.appendChild( DomObj[0] );
							oDom.innerHTML += ":&nbsp;" + oMonster.HP + ",&nbsp;";
							// Insert bold Exp.
								DomObj[0] = document.createElement("b");
									DomObj[1] = document.createTextNode("Exp");
								DomObj[0].appendChild( DomObj[1] );
							oDom.appendChild( DomObj[0] );
							oDom.innerHTML += ":&nbsp;" + oMonster.Exp + ",&nbsp;";
							// Insert bold Money.
								DomObj[0] = document.createElement("b");
									DomObj[1] = document.createTextNode("Money");
								DomObj[0].appendChild( DomObj[1] );
							oDom.appendChild( DomObj[0] );
							oDom.innerHTML += ":&nbsp;" + oMonster.Money;
							// A Line Break.
							oDom.appendChild( oBR.cloneNode(false) );
							// Only list drops when allowed tobe shown.
							if(gShowMonsterDrops){
								// Insert Drops.
								if(oMonster.Drops.length){
									// A Horizontal Line.
									oDom.appendChild( oHR.cloneNode(false) );
									// Insert bold Drops
										DomObj[0] = document.createElement("b");
											DomObj[1] = document.createTextNode("Drops:");
										DomObj[0].appendChild( DomObj[1] );
									oDom.appendChild( DomObj[0] );
									// A Line Break.
									oDom.appendChild( oBR.cloneNode(false) );
									// List Drops.
									for(var loopDrops=0; loopDrops<oMonster.Drops.length; loopDrops++){
										oItem = oMonster.Drops[loopDrops];
										if(oItem.Level != null)
											oDom.innerHTML += "L" + oItem.Level + ":&nbsp;";
										// Insert Item Name in italic.
											DomObj[0] = document.createElement("i");
											DomObj[0].innerHTML = oItem.getHTMLName();
										oDom.appendChild( DomObj[0] );
										// When not last add a comma and linebreak.
										if(loopDrops < oMonster.Drops.length-1)
											oDom.innerHTML += ",<br>";
									};
								};
							};
							break;
					case "Vendor":
							// Insert text in bold and underline.
							DomObj[0] = document.createElement("b");
								DomObj[1] = document.createElement("u");
									DomObj[2] = document.createTextNode("Sells ");
								DomObj[1].appendChild( DomObj[2] );
							switch(aMarkType[2]){
							case "Ammo":
									DomObj[2] = document.createTextNode("Ammonution:");
									break;
							case "Armor":
									DomObj[2] = document.createTextNode("Armory:");
									break;
							case "Food":
									DomObj[2] = document.createTextNode("Food:");
									break;
							case "Magic":
									DomObj[2] = document.createTextNode("Scrolls:");
									break;
							case "Maps":
									DomObj[2] = document.createTextNode("Maps:");
									break;
							case "Misc":
									DomObj[2] = document.createTextNode("Misccelaneous:");
									break;
							case "Pets":
									if(aMarkType[3])
										DomObj[2] = document.createTextNode("Pets: " + aMarkType[3]);
									else
										DomObj[2] = document.createTextNode("Pets:");
									break;
							case "Weapon":
									DomObj[2] = document.createTextNode("Weaponry:");
									break;
							default:	break;
							};
								DomObj[1].appendChild( DomObj[2] );
							DomObj[0].appendChild( DomObj[1] );
							oDom.appendChild( DomObj[0] );
							// A Line Break.
							oDom.appendChild( oBR.cloneNode(false) );
							// Fetch NPC
							oNPC = NPCs.get(aNameParts[0], aNameParts[1]);
							// insert NPC Desc in italic when exists.
							if(oNPC.Desc && oNPC.Desc != ''){
								DomObj[0] = document.createElement("i");
								DomObj[0].innerHTML = oNPC.Desc;
								oDom.appendChild( DomObj[0] );
							};
							// Insert NPCItems when available AND allowed to show..
							if(gShowNPCItems && oNPC.Items.length){
								// A Horizontal Line.
								oDom.appendChild( oHR.cloneNode(false) );
								// Insert Items in italic.
									DomObj[0] = document.createElement("b");
										DomObj[1] = document.createTextNode("Items:");
									DomObj[0].appendChild( DomObj[1] );
								oDom.appendChild( DomObj[0] );
								// A Line Break.
								oDom.appendChild( oBR.cloneNode(false) );
								// List Items.
								for(var loopItems=0; loopItems<oNPC.Items.length; loopItems++){
									oItem = oNPC.Items[loopItems];
									if(oItem.Level != null)
										oDom.innerHTML += "L" + oItem.Level + ":&nbsp;";
									// Insert Item Name in italic.
									DomObj[0] = document.createElement("i");
									DomObj[0].innerHTML = oItem.getHTMLName();
									// Append handling type.
									if( oItem.Useage != null ){
										// Append DW if dual wielding posible.
										if( oItem.Useage.indexOf("Any") > -1 )
											DomObj[0].innerHTML += "&nbsp;(DW)";
										// Append 2H if Double-Handed.
										if( oItem.Useage.indexOf("Both") > -1 )
											DomObj[0].innerHTML += "&nbsp;(2H)";
									};
									// Append race specific if exists.
									if(oItem.Race){
										DomObj[0].innerHTML += "&nbsp;(Only&nbsp;" + oItem.Race
										if(aMarkType[2] == "Pets")
											DomObj[0].innerHTML += "&nbsp;can&nbsp;mount";
										DomObj[0].innerHTML += ")";
									}
									oDom.appendChild( DomObj[0] );
									// When not last add a comma and linebreak.
									if(loopItems < oNPC.Items.length-1)
										oDom.innerHTML += ",<br>";
								};
							};
							break;
					// Same proccessing for these.
					case "Bank":
					case "Pet Trainer":
					case "Portal":
					case "Quest":
					case "Repair":
							// Fetch NPC
							oNPC = NPCs.get(aNameParts[0], aNameParts[1]);
							oDom.innerHTML = oNPC.Desc;
							break;
					default:	break;
					};
					break;
			case "Map":
					switch(aMarkType[1]){
					default:	break;
					};
					break;
			default:	break;
			};
		};
		// Insert &nbsp; if no data.
		if(oDom.innerHTML.length == 0)	oDom.innerHTML = "&nbsp;";
	}
	catch(e){
		var str = '';
		if(e.message)		str += e.message;
		else if(e.description)	str += e.description;
		str += '\n' + oMark.Map.Planet.SolarSystem.name + ' - ' + oMark.Map.Planet.name + ' - ' + oMark.Map.name;
		str += '\n' + oMark.x + ', ' + oMark.y + ', "' + oMark.name + '"';
		throw new ReferenceError(str);
	}
};
/*
	Generate a listing with all Items of a certain Type & SubType.
	Returns: None. (Output is put in document.)
*/
function genItemTypeSubTypeListing(oDom, oItems){
	var oBR, oDiv, sText, DomObj = Array(3);
	var oTable, oCaption, oTHead, oTBody, oTFoot, oTR, oTD;
	var sText, DomObj = Array(3);
	var oItem, oMonster, oNPC;

	// Set Document Title.
	SetTitle("Items: " + gItemType + "/" + gItemSubType);

	// Create BR element.
	oBR = document.createElement("br");

	// Create Table.
	oTable = document.createElement("table");
	oTable.className = "mapDetails";
	oTable.id = "ItemTypeSubTypeTable";
	oTable.style.width = "100%";
		// Create Caption.
		oCaption = oTable.createCaption();
		oCaption.id = "content_heading";
		oCaption.style.fontSize = "100%";
			// Insert Type/SubType in bold.
			DomObj[0] = document.createElement("b");
				// Create an anchor element.
				DomObj[1] = document.createElement("a");
				DomObj[1].setAttribute("href", Universe.Control.MakeSearch() );
				DomObj[1].setAttribute("target", "_top");
					DomObj[2] = document.createTextNode(gItemType + " / " + gItemSubType);
				DomObj[1].appendChild( DomObj[2] );
			DomObj[0].appendChild( DomObj[1] );
		oCaption.appendChild( DomObj[0] );
			// Create Content backtrace.
			DomObj[0] = document.createElement("div");
			DomObj[0].id = "content_backtrace";
			DomObj[0].style.textAlign = "center";
			DomObj[0].style.fontSize = "80%";
				DomObj[1] = document.createTextNode("(Go back to: ");
			DomObj[0].appendChild( DomObj[1] );
				// Create an anchor element.
				DomObj[1] = document.createElement("a");
				sText = "javascript:Universe.Control.SelectItem();";
				DomObj[1].setAttribute("href", sText);
					sText = "Types";
					DomObj[2] = document.createTextNode(sText);
				DomObj[1].appendChild( DomObj[2] );
			DomObj[0].appendChild( DomObj[1] );
				DomObj[1] = document.createTextNode(" / ");
			DomObj[0].appendChild( DomObj[1] );
				// Create an anchor element.
				DomObj[1] = document.createElement("a");
				sText = "javascript:Universe.Control.SelectItem(null, \""+gItemType+"\");";
				DomObj[1].setAttribute("href", sText);
					sText = "SubTypes";
					DomObj[2] = document.createTextNode(sText);
				DomObj[1].appendChild( DomObj[2] );
			DomObj[0].appendChild( DomObj[1] );
				DomObj[1] = document.createTextNode(")");
			DomObj[0].appendChild( DomObj[1] );
		oCaption.appendChild( DomObj[0] );
		// Create Thead
		oTHead = oTable.createTHead();
		oTHead.style.fontSize = "70%";
			// Create a Table Row.
			if(noDOM2HTML)	oTR = document.createElement("tr");
			else		oTR = oTHead.insertRow(-1);
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				oTD.style.textAlign = "right";
				oTD.innerHTML = "Level";
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				oTD.style.textAlign = "center";
				oTD.innerHTML = "Name";
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				oTD.style.textAlign = "center";
				oTD.innerHTML = "Usage";
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
			if(gItemType != "Pet"){
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "right";
					if(gItemType == "Armor")
						oTD.innerHTML = "Defense";
					else
						oTD.innerHTML = "Damage";
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			};
			if(gItemType != "Pet"){
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "right";
					oTD.innerHTML = "Weight";
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			};
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				oTD.style.textAlign = "right";
				oTD.innerHTML = "Value";
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				oTD.style.textAlign = "center";
				if(gItemType == "Pet")
					oTD.innerHTML = "Mount<br>Race";
				else
					oTD.innerHTML = "Restricted<br>Race";
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
			// Only when allowed to show monsters.
			if(gShowMonsters && (gItemType != "Pet")){
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "center";
					oTD.innerHTML = "Dropped<br>By";
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			};
			// Only when allowed to show NPC's.
			if(gShowNPCs){
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "center";
					oTD.innerHTML = "Sold<br>By";
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			};
		// Add Table Row to oTHead.
		if(noDOM2HTML)	oTHead.appendChild( oTR );
		// Create TFoot
		oTFoot = oTable.createTFoot();
			// Create a Table Row.
			if(noDOM2HTML)	oTR = document.createElement("tr");
			else		oTR = oTFoot.insertRow(-1);
				// Create Content backtrace.
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				oTD.id = "content_backtrace";
				sText = 9;
				if(!gShowMonsters)	sText -= 1;
				if(!gShowNPCs)		sText -= 1;
				if(gItemType == "Pet")	sText -= 3;
				oTD.setAttribute("colSpan", sText );
				oTD.style.textAlign = "center";
				oTD.style.fontSize = "80%";
					DomObj[0] = document.createTextNode("(Go back to: ");
				oTD.appendChild( DomObj[0] );
					// Create an anchor element.
					DomObj[0] = document.createElement("a");
					sText = "javascript:Universe.Control.SelectItem();";
					DomObj[0].setAttribute("href", sText);
						sText = "Types";
						DomObj[1] = document.createTextNode(sText);
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
					DomObj[0] = document.createTextNode(" / ");
				oTD.appendChild( DomObj[0] );
					// Create an anchor element.
					DomObj[0] = document.createElement("a");
					sText = "javascript:Universe.Control.SelectItem(null, \""+gItemType+"\");";
					DomObj[0].setAttribute("href", sText);
						sText = "SubTypes";
						DomObj[1] = document.createTextNode(sText);
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
					DomObj[0] = document.createTextNode(")");
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
		// Add Table Row to TFoot.
		if(noDOM2HTML)	oTFoot.appendChild( oTR );
		// Create TBody
		oTBody = document.createElement("tbody");
		// List Items.
		for(var loopItem=0; loopItem<oItems.length; loopItem++){
			oItem = oItems.Items[loopItem];
				// Create a Table Row.
				if(noDOM2HTML)	oTR = document.createElement("tr");
				else		oTR = oTBody.insertRow(-1);
				oTR.style.fontSize = "75%";
				if(loopItem%2)	oTR.className = "MarksTableRow";
			// Level
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "right";
						sText = oItem.Level;
						if(!sText)	sText = "Any";
						DomObj[0] = document.createTextNode( sText );
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			// Name
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "Left";
					oTD.innerHTML = oItem.getHTMLName();
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			// Usage
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "center";
					oTD.setAttribute("nowrap", true);
						DomObj[0] = document.createTextNode( oItem.Useage );
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			// Damage/Defense
			if(gItemType != "Pet"){
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "right";
						sText = oItem.Damage;
						if(!sText)	sText = 0;
						DomObj[0] = document.createTextNode( sText.toFixed(2) );
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			};
			// Weight
			if(gItemType != "Pet"){
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "right";
						sText = oItem.Weight;
						if(!sText)	sText = 0;
						DomObj[0] = document.createTextNode( sText.toFixed(2) );
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			};
			// Value
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "right";
						sText = oItem.Value;
						if(!sText)	sText = 0;
						DomObj[0] = document.createTextNode( sText.toFixed(2) );
					oTD.appendChild( DomObj[0] );
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			// Race
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "center";
					if(oItem.Race){
						sText = oItem.Race.split(',');
						for(var loopRace=0; loopRace<sText.length; loopRace++){
							if(loopRace>0){
								DomObj[0] = document.createTextNode( ", " );
								oTD.appendChild( DomObj[0] );
							};
							DomObj[0] = document.createTextNode( sText[loopRace] );
							oTD.appendChild( DomObj[0] );
						};
					}else
						oTD.innerHTML = "&nbsp;";
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			// DroppedBy
			if(gShowMonsters && (gItemType != "Pet")){
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "center";
					if(oItem.DroppedBy.length){
						for(var loopMonster=0; loopMonster<oItem.DroppedBy.length; loopMonster++){
							oMonster = oItem.DroppedBy[loopMonster];
							if(loopMonster>0)	oTD.innerHTML +=  ",<br>";
							oTD.innerHTML +=  oMonster.getHTMLName();
							oTD.innerHTML +=  "(L" + oMonster.Level + ")";
						};
					}else
						oTD.innerHTML = "&nbsp;";
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			};
			// SoldBy
			if(gShowNPCs){
					// Create a Table Cell.
					if(noDOM2HTML)	oTD = document.createElement("td");
					else		oTD = oTR.insertCell(-1);
					oTD.style.textAlign = "center";
					if(oItem.SoldBy.length){
						for(var loopNPC=0; loopNPC<oItem.SoldBy.length; loopNPC++){
							oNPC = oItem.SoldBy[loopNPC];
							if(loopNPC>0)	oTD.innerHTML +=  ",<br>";
							oTD.innerHTML +=  oNPC.getHTMLName();
							if(oNPC.Variant>0)	oTD.innerHTML +=  "(" + oNPC.Variant + ")";
						};
					}else
						oTD.innerHTML = "&nbsp;";
				// Add Table Cell to Table Row.
				if(noDOM2HTML)	oTR.appendChild( oTD );
			};
			// Add Table Row to TBody.
			if(noDOM2HTML)	oTBody.appendChild( oTR );
		};
	// Add TBody to Table.
	oTable.appendChild( oTBody );
	oDom.appendChild( oTable );
};
/*
	Generate a listing with all Items of a certain Type & SubType.
	Returns: None. (Output is put in document.)
*/
function _genItemTypeSubTypeListing(oDom, oItems){
	var oBR, oDiv, sText, DomObj = Array(3);
	var nFound, sPrevType=null;

	// Set Document Title.
	SetTitle("Items: " + gItemType + "/" + gItemSubType);

	// Create BR element.
	oBR = document.createElement("br");

	// Create main heading.
	oDiv = document.createElement("div");
	oDiv.id = "content_heading";
	oDiv.setAttribute("align","center");
			sText = "Type/SubType: ";
		DomObj[0] = document.createTextNode(sText);
	oDiv.appendChild( DomObj[0] );
		// Append Type in bold.
		DomObj[0] = document.createElement("b");
			// Create an anchor element.
			DomObj[1] = document.createElement("a");
			DomObj[1].setAttribute("href", Universe.Control.MakeSearch() );
			DomObj[1].setAttribute("target", "_top");
				DomObj[2] = document.createTextNode(gItemType + "/" + gItemSubType);
			DomObj[1].appendChild( DomObj[2] );
		DomObj[0].appendChild( DomObj[1] );
	oDiv.appendChild( DomObj[0] );
	// A Line Break.
	oDiv.appendChild( oBR.cloneNode(false) );
		// Create Content backtrace.
		DomObj[0] = document.createElement("div");
		DomObj[0].id = "content_backtrace";
		DomObj[0].style.textAlign = "center";
		DomObj[0].style.fontSize = "80%";
			// Create an anchor element.
			DomObj[1] = document.createElement("a");
			sText = "javascript:Universe.Control.SelectItem(null, \""+gItemType+"\");";
			DomObj[1].setAttribute("href", sText);
				sText = "(Go back to Sub-Types)";
				DomObj[2] = document.createTextNode(sText);
			DomObj[1].appendChild( DomObj[2] );
		DomObj[0].appendChild( DomObj[1] );
		// A Line Break.
		DomObj[0].appendChild( oBR.cloneNode(false) );
			// Create an anchor element.
			DomObj[1] = document.createElement("a");
			sText = "javascript:Universe.Control.SelectItem();";
			DomObj[1].setAttribute("href", sText);
				sText = "(Go back to Types)";
				DomObj[2] = document.createTextNode(sText);
			DomObj[1].appendChild( DomObj[2] );
		DomObj[0].appendChild( DomObj[1] );
	oDiv.appendChild( DomObj[0] );
	// A Line Break.
	oDiv.appendChild( oBR.cloneNode(false) );
	var bFirst = true;
	for(var loopItem=0; loopItem<oItems.length; loopItem++){
		if(	(gItemType == oItems.Items[loopItem].Type)
			&&
			(
				(gItemSubType == "None" && oItems.Items[loopItem].SubType == null)
				|| (gItemSubType == oItems.Items[loopItem].SubType)
			)
		){
			if(bFirst)
				bFirst = false;
			else{
				// A Line Break.
				oDiv.appendChild( oBR.cloneNode(false) );
			};
			sPrevType = oItems.Items[loopItem].SubType;
			// Create an Anchor.
			DomObj[0] = document.createElement("a");
				sText = "javascript:Universe.Control.SelectItem(\"" + oItems.Items[loopItem].Name + "\");";
			DomObj[0].setAttribute("href",sText);
			DomObj[0].innerHTML = oItems.Items[loopItem].getHTMLName();
			oDiv.appendChild( DomObj[0] );
		};
	};
	oDom.appendChild(oDiv);
};
/*
	Generate a listing with all Item SubTypes.
	Returns: None. (Output is put in document.)
*/
function genItemSubTypeListing(oDom, oItems){
	var oBR, oDiv, sText, DomObj = Array(3);
	var nFound, sPrevType=null;

	// Set Document Title.
	SetTitle("Items: " + gItemType);

	// Create BR element.
	oBR = document.createElement("br");

	// Create main heading.
	oDiv = document.createElement("div");
	oDiv.id = "content_heading";
	oDiv.setAttribute("align","center");
			sText = "Type: ";
		DomObj[0] = document.createTextNode(sText);
	oDiv.appendChild( DomObj[0] );
		// Append Type in bold.
		DomObj[0] = document.createElement("b");
			// Create an anchor element.
			DomObj[1] = document.createElement("a");
			gItemName = null; // Make sure no single item is selected.
			DomObj[1].setAttribute("href", Universe.Control.MakeSearch() );
			DomObj[1].setAttribute("target", "_top");
				DomObj[2] = document.createTextNode(gItemType);
			DomObj[1].appendChild( DomObj[2] );
		DomObj[0].appendChild( DomObj[1] );
	oDiv.appendChild( DomObj[0] );
	// A Line Break.
	oDiv.appendChild( oBR.cloneNode(false) );
		// Create Content backtrace.
		DomObj[0] = document.createElement("div");
		DomObj[0].id = "content_backtrace";
		DomObj[0].style.textAlign = "center";
		DomObj[0].style.fontSize = "80%";
			// Create an anchor element.
			DomObj[1] = document.createElement("a");
			sText = "javascript:Universe.Control.SelectItem();";
			DomObj[1].setAttribute("href", sText);
				sText = "(Go back to Types)";
				DomObj[2] = document.createTextNode(sText);
			DomObj[1].appendChild( DomObj[2] );
		DomObj[0].appendChild( DomObj[1] );
	oDiv.appendChild( DomObj[0] );
	// A Line Break.
	oDiv.appendChild( oBR.cloneNode(false) );
	// A Line Break.
	oDiv.appendChild( oBR.cloneNode(false) );
			sText = "Select a Sub-Type: ";
		DomObj[0] = document.createTextNode(sText);
	oDiv.appendChild( DomObj[0] );
	if( oItems.get(null,null,"None").length ){
		// A Line Break.
		oDiv.appendChild( oBR.cloneNode(false) );
			// Create an Anchor.
			DomObj[0] = document.createElement("a");
				sText = "javascript:Universe.Control.SelectItem(null, \"" + gItemType + "\", \"None\");";
			DomObj[0].setAttribute("href",sText);
				sText = "None" + " (" + oItems.get(null,null,"None").length + ")";
				DomObj[1] = document.createTextNode(sText);
			DomObj[0].appendChild( DomObj[1] );
		oDiv.appendChild( DomObj[0] );
	};
	// A Line Break.
	oDiv.appendChild( oBR.cloneNode(false) );
	nFound=0;
	for(var loopItem=0; loopItem<oItems.length; loopItem++){
		if(	(gItemType == oItems.Items[loopItem].Type)
			&&
			(sPrevType != oItems.Items[loopItem].SubType)
		){
			// A Line Break when not first.
			if(nFound)	oDiv.appendChild( oBR.cloneNode(false) );
			sPrevType = oItems.Items[loopItem].SubType;
			nFound++;
			// Create an Anchor.
			DomObj[0] = document.createElement("a");
				sText = "javascript:Universe.Control.SelectItem(null, \"" + gItemType + "\", \"" + sPrevType + "\");";
			DomObj[0].setAttribute("href",sText);
				sText = sPrevType + " (" + oItems.get(null,null,sPrevType).length + ")";
				DomObj[1] = document.createTextNode(sText);
			DomObj[0].appendChild( DomObj[1] );
			oDiv.appendChild( DomObj[0] );
		};
	};
	oDom.appendChild(oDiv);
};
/*
	Generate a listing with all Item Types.
	Returns: None. (Output is put in document.)
*/
function genItemTypeListing(oDom, oItems){
	var oBR, oDiv, sText, DomObj = Array(3);
	var nFound, sPrevType=null;

	// Set Document Title.
	SetTitle("Items");

	// Create BR element.
	oBR = document.createElement("br");

	// Create main heading.
	oDiv = document.createElement("div");
	oDiv.id = "content_heading";
	oDiv.setAttribute("align","center");
		// Create an anchor element.
		DomObj[0] = document.createElement("a");
		gItemType = null;	// Make sure no ItemType is selected.
		gItemSubType = null;	// Make sure no ItemSubType is selected.
		gItemName = null;	// Make sure no single item is selected.
		DomObj[0].setAttribute("href", Universe.Control.MakeSearch() );
		DomObj[0].setAttribute("target", "_top");
				sText = "Select a Type:";
			DomObj[1] = document.createTextNode(sText);
		DomObj[0].appendChild( DomObj[1] );
	oDiv.appendChild( DomObj[0] );
	// A Line Break.
	oDiv.appendChild( oBR.cloneNode(false) );
	nFound=0;
	for(var loopItem=0; loopItem<oItems.length; loopItem++){
		if(sPrevType != oItems.Items[loopItem].Type){
			// A Line Break when not first.
			if(nFound)	oDiv.appendChild( oBR.cloneNode(false) );
			sPrevType = oItems.Items[loopItem].Type;
			nFound++;
			// Create an Anchor.
			DomObj[0] = document.createElement("a");
				sText = "javascript:Universe.Control.SelectItem(null, \"" + sPrevType + "\");";
			DomObj[0].setAttribute("href",sText);
				sText = sPrevType + " (" + oItems.get(null,sPrevType).length + ")";
				DomObj[1] = document.createTextNode(sText);
			DomObj[0].appendChild( DomObj[1] );
			oDiv.appendChild( DomObj[0] );
		};
	};
	oDom.appendChild(oDiv);
};
/*
	Generate a listing with all Items.
	Returns: None. (Output is put in document.)
*/
function genItemDBListing(oDom){
	var oItems;

	// Initialize Items object.
	oItems = Items;

	if(gItemName)		return genInDevelopment(oDom,"ItemName");
	if(!gItemType)		return genItemTypeListing(oDom, oItems);
	// Fetch only items of a certain Type.
	oItems = oItems.get(null,gItemType);
	if(!gItemSubType)	return genItemSubTypeListing(oDom, oItems);
	// Fetch only items of a certain SubType.
	oItems = oItems.get(null,null,gItemSubType);
	genItemTypeSubTypeListing(oDom, oItems);
};
/*
	Generate a listing with all Database types.
	Returns: None. (Output is put in document.)
*/
function genDataBaseListing(oDom){
	var oTable, oCaption, oTHead, oTBody, oTFoot, oTR, oTD;
	var sText, oBR;
	var aSettings = Array(8), DomObj = Array(4);

	// Set Document Title.
	SetTitle();

	// Create BR element.
	oBR = document.createElement("br");

	// Create Table.
	oTable = document.createElement("table");
	oTable.className = "mapDetails";
	oTable.setAttribute("frame", "box");
	oTable.setAttribute("rules", "all");
		// Create Caption.
		oCaption = oTable.createCaption();
		oCaption.id = "content_heading";
		oCaption.style.fontSize = "150%";
			DomObj[0] = document.createElement("a");
			DomObj[0].setAttribute("href", Universe.Control.MakeSearch() );
			DomObj[0].setAttribute("target", "_top");
				sText = "Available DataBases:";
				DomObj[1] = document.createTextNode(sText);
			DomObj[0].appendChild( DomObj[1] );
		oCaption.appendChild( DomObj[0] );
		// Create TBody
		oTBody = document.createElement("tbody");
			// Create a Table Row.
			if(noDOM2HTML)	oTR = document.createElement("tr");
			else		oTR = oTBody.insertRow(-1);
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				// Create a Link to Database.
					DomObj[0] = document.createElement("strong");
						sText = "Maps";
						DomObj[1] = document.createTextNode(sText);
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				// Insert Text
					sText = "Visual indications of the locations of:";
					DomObj[0] = document.createTextNode(sText);
				oTD.appendChild( DomObj[0] );
				// A Line Break.
				oTD.appendChild( oBR.cloneNode(false) );
				// Insert Text
					sText = "NPC's"
					sText += ", Monsters"
					sText += ", Portals"
					sText += ", Regenpoints"
					sText += " and Buildings"
					sText += "."
					DomObj[0] = document.createTextNode(sText);
				oTD.appendChild( DomObj[0] );
				// A Line Break.
				oTD.appendChild( oBR.cloneNode(false) );
				// A Line Break.
				oTD.appendChild( oBR.cloneNode(false) );
				// Insert Text
					sText = "View modes available:"
					DomObj[0] = document.createTextNode(sText);
				oTD.appendChild( DomObj[0] );
				// Create an Ordered List.
					DomObj[0] = document.createElement("ol");
					DomObj[0].setAttribute("type", 'a');
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= true;
							gShowItems		= false;
							gShowMonsters		= false;
							gShowNPCs		= false;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Maps with only Portals, Regenpoints and Buildings.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= true;
							gShowItems		= false;
							gShowMonsters		= false;
							gShowNPCs		= true;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Same as a. with NPC's.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= true;
							gShowItems		= false;
							gShowMonsters		= false;
							gShowNPCs		= true;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= true;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Same as a. with NPC's and NPC-Items.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= true;
							gShowItems		= false;
							gShowMonsters		= true;
							gShowNPCs		= false;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Same as a. with Monsters.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= true;
							gShowItems		= false;
							gShowMonsters		= true;
							gShowNPCs		= false;
							gShowMonsterDrops	= true;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Same as a. with Monsters and Monster-Drops.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= true;
							gShowItems		= false;
							gShowMonsters		= true;
							gShowNPCs		= true;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "b. and d. Combined.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= true;
							gShowItems		= false;
							gShowMonsters		= true;
							gShowNPCs		= true;
							gShowMonsterDrops	= true;
							gShowMonsterMaps	= false;
							gShowNPCItems		= true;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "c. and e. Combined.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
		// Add Table Row to TBody.
		if(noDOM2HTML)	oTBody.appendChild( oTR );
			// Create a Table Row.
			if(noDOM2HTML)	oTR = document.createElement("tr");
			else		oTR = oTBody.insertRow(-1);
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				// Create a Link to Database.
					DomObj[0] = document.createElement("strong");
						sText = "Items";
						DomObj[1] = document.createTextNode(sText);
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				// Insert Text
					sText = "Info on all Items.";
					DomObj[0] = document.createTextNode(sText);
				oTD.appendChild( DomObj[0] );
				// A Line Break.
				oTD.appendChild( oBR.cloneNode(false) );
				// A Line Break.
				oTD.appendChild( oBR.cloneNode(false) );
				// Insert Text
					sText = "View modes available:"
					DomObj[0] = document.createTextNode(sText);
				oTD.appendChild( DomObj[0] );
				// Create an Ordered List.
					DomObj[0] = document.createElement("ol");
					DomObj[0].setAttribute("type", 'a');
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= true;
							gShowMonsters		= false;
							gShowNPCs		= false;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Listing sorted per Type and SubType.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= true;
							gShowMonsters		= false;
							gShowNPCs		= true;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Same as a. with Item-Vendor.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= true;
							gShowMonsters		= true;
							gShowNPCs		= false;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Same as a. with Monster who drops the item.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= true;
							gShowMonsters		= true;
							gShowNPCs		= true;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "b. + c. Combibed.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
		// Add Table Row to TBody.
		if(noDOM2HTML)	oTBody.appendChild( oTR );
			// Create a Table Row.
			if(noDOM2HTML)	oTR = document.createElement("tr");
			else		oTR = oTBody.insertRow(-1);
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				// Create a Link to Database.
					DomObj[0] = document.createElement("strong");
						sText = "Monsters";
						DomObj[1] = document.createTextNode(sText);
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				// Insert Text
					sText = "Info on all Monsters.";
					DomObj[0] = document.createTextNode(sText);
				oTD.appendChild( DomObj[0] );
				// A Line Break.
				oTD.appendChild( oBR.cloneNode(false) );
				// A Line Break.
				oTD.appendChild( oBR.cloneNode(false) );
				// Insert Text
					sText = "View modes available:"
					DomObj[0] = document.createTextNode(sText);
				oTD.appendChild( DomObj[0] );
				// Create an Ordered List.
					DomObj[0] = document.createElement("ol");
					DomObj[0].setAttribute("type", 'a');
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= false;
							gShowMonsters		= true;
							gShowNPCs		= false;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Listing sorted on Name and Monster-Level.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= false;
							gShowMonsters		= true;
							gShowNPCs		= false;
							gShowMonsterDrops	= true;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Same as a. with Monster-Drops.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= false;
							gShowMonsters		= true;
							gShowNPCs		= false;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= true;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Same as a. with Monster-Maps.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= false;
							gShowMonsters		= true;
							gShowNPCs		= false;
							gShowMonsterDrops	= true;
							gShowMonsterMaps	= true;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "b. and c. Combined.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
		// Add Table Row to TBody.
		if(noDOM2HTML)	oTBody.appendChild( oTR );
			// Create a Table Row.
			if(noDOM2HTML)	oTR = document.createElement("tr");
			else		oTR = oTBody.insertRow(-1);
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				// Create a Link to Database.
					DomObj[0] = document.createElement("strong");
						sText = "NPC's";
						DomObj[1] = document.createTextNode(sText);
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
				// Create a Table Cell.
				if(noDOM2HTML)	oTD = document.createElement("td");
				else		oTD = oTR.insertCell(-1);
				// Insert Text
					sText = "Info on all NPC's.";
					DomObj[0] = document.createTextNode(sText);
				oTD.appendChild( DomObj[0] );
				// A Line Break.
				oTD.appendChild( oBR.cloneNode(false) );
				// A Line Break.
				oTD.appendChild( oBR.cloneNode(false) );
				// Insert Text
					sText = "View modes available:"
					DomObj[0] = document.createTextNode(sText);
				oTD.appendChild( DomObj[0] );
				// Create an Ordered List.
					DomObj[0] = document.createElement("ol");
					DomObj[0].setAttribute("type", 'a');
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= false;
							gShowMonsters		= false;
							gShowNPCs		= true;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Listing sorted on Name and Type.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= false;
							gShowMonsters		= false;
							gShowNPCs		= true;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= true;
							gShowNPCMaps		= false;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Same as a. with NPC-Items.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= false;
							gShowMonsters		= false;
							gShowNPCs		= true;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= false;
							gShowNPCMaps		= true;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "Same as a. with NPC-Maps.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
					// Create an List Item.
						DomObj[1] = document.createElement("li");
						// Create a Link to Database.
							aSettings[0] = gShowMaps;
							aSettings[1] = gShowItems;
							aSettings[2] = gShowMonsters;
							aSettings[3] = gShowNPCs;
							aSettings[4] = gShowMonsterDrops;
							aSettings[5] = gShowMonsterMaps;
							aSettings[6] = gShowNPCItems;
							aSettings[7] = gShowNPCMaps;
							gShowMaps		= false;
							gShowItems		= false;
							gShowMonsters		= false;
							gShowNPCs		= true;
							gShowMonsterDrops	= false;
							gShowMonsterMaps	= false;
							gShowNPCItems		= true;
							gShowNPCMaps		= true;
							DomObj[2] = document.createElement("a");
							DomObj[2].setAttribute("href", Universe.Control.MakeSearch() );
							DomObj[2].setAttribute("target", "_top");
							gShowMaps		= aSettings[0];
							gShowItems		= aSettings[1];
							gShowMonsters		= aSettings[2];
							gShowNPCs		= aSettings[3];
							gShowMonsterDrops	= aSettings[4];
							gShowMonsterMaps	= aSettings[5];
							gShowNPCItems		= aSettings[6];
							gShowNPCMaps		= aSettings[7];
								sText = "b. and c. Combined.";
								DomObj[3] = document.createTextNode(sText);
							DomObj[2].appendChild( DomObj[3] );
						DomObj[1].appendChild( DomObj[2] );
					DomObj[0].appendChild( DomObj[1] );
				oTD.appendChild( DomObj[0] );
			// Add Table Cell to Table Row.
			if(noDOM2HTML)	oTR.appendChild( oTD );
		// Add Table Row to TBody.
		if(noDOM2HTML)	oTBody.appendChild( oTR );
	// Add TBody to Table.
	oTable.appendChild( oTBody );

	// Add Table to output DomObject.
	oDom.appendChild( oTable );
};
/*
	Generate content for the universe
	Uses global variables: gPlanet, gMap.
	Returns: None. (Output is put in document.)
*/
function genUniverse(oDom){
	var nToShow, sTitle = "Maps";

	// Set Document Title.
	if(gPlanet)	sTitle += ": " + gPlanet;
	if(gMap)	sTitle += "(" + gMap + ")";
	SetTitle(sTitle);

	// Clear other settings.
	gItemType	= null;
	gItemSubType	= null;
	gItemName	= null;
	gMonsterName	= null;
	gMonsterLevel	= null;
	gNPCName	= null;
	gNPCVariant	= null;

	// Select view mode.
	nToShow = 0;
	if( gPlanet && Universe.planet(gPlanet) ){
		nToShow = 1;
		if( gMap && Universe.planet(gPlanet).map(gMap) )
			nToShow = 2;
	}else{
		if(bTest){
			if(gPlanet){
				if(gMap)	nToShow = 2;
				else		nToShow = 1;
			};
		};
	};
	// Reset Global Zoom level to 1 in view modes 0 and 1.
	if(nToShow==0 || nToShow==1)	gZoom = 1;
	switch(nToShow){
		case 0:	// Solar view.
			oDom.appendChild( genSolarSystsmDOM() );
			break;
		case 1:	// Planet view.
			oDom.appendChild( genPlanetDOM() );
			break;
		case 2:	// Map view.
			oDom.appendChild( genZoomControl() );
			oDom.appendChild( genMapDOM(gPlanet, gMap, gZoom) );
			break;
	};
};
/*
	Generate a Listing of DataBase entries.
	Uses global variables: gShowMaps, gShowItems, gShowMonsters, gShowNPCs.
	Returns: None. (Output is put in document.)
*/
function genDataBase(){
	var oOutput, oDataBaseDIV, oDiv, oBR;
	var sText, DomObj = Array(3);
	var oTable, oCaption, oTHead, oTBody, oTFoot, oTR, oTD;
	var oDataBase = null;

	// Create BR element.
	oBR = document.createElement("br");

	// Fetch Output div.
	oOutput = document.getElementById("Output");
	// Check existence for refreshing.
	oDataBaseDIV = document.getElementById("DataBase");
	if(oDataBaseDIV)	oOutput.removeChild( oDataBaseDIV );

	// Select DataBase.
	if(gShowMaps)	oDataBase = Universe;
	else{
		if(gShowItems)	oDataBase = Items;
		else{
			if(gShowMonsters)	oDataBase = Monsters;
			else
				if(gShowNPCs)	oDataBase = NPCs;
		};
	};
	// Create DataBase Div.
	oDataBaseDIV = document.createElement("div");
	oDataBaseDIV.id = "DataBase";
	oDataBaseDIV.setAttribute("align","center");
	oOutput.appendChild( oDataBaseDIV );
		// Create main heading.
		oDiv = document.createElement("div");
		oDiv.id = "main_heading";
		oDiv.setAttribute("align","center");
			DomObj[0] = document.createElement("h1");
				sText = Universe.name + " ";
				if(oDataBase instanceof SolarSystem)	sText += "Map";
				if(oDataBase instanceof Item)		sText += "Item";
				if(oDataBase instanceof Monster)	sText += "Monster";
				if(oDataBase instanceof NPC)		sText += "NPC";
				sText += " DataBase:";
				DomObj[1] = document.createTextNode(sText);
			DomObj[0].appendChild( DomObj[1] );
		oDiv.appendChild( DomObj[0] );
	oDataBaseDIV.appendChild(oDiv);
	if(!bMarkTypes){
		if(oDataBase == null)			genDataBaseListing(oDataBaseDIV);
		if(oDataBase instanceof SolarSystem)	genUniverse(oDataBaseDIV);
		if(oDataBase instanceof Item)		genItemDBListing(oDataBaseDIV);
		if(oDataBase instanceof Monster)	genInDevelopment(oDataBaseDIV,"Monster");
		if(oDataBase instanceof NPC)		genInDevelopment(oDataBaseDIV,"NPC");
	};
};
/*
	Generate text for nondeveloped functionalities.
	Returns: None. (Output is put in document.)
*/
function genInDevelopment(oDom,sArea){
	var oDiv, sText, DomObj = Array(3);

	// Set Document Title.
	sText = "Non-Functioning";
	if(sArea)	sText += ": " + sArea;
	SetTitle(sText);

	// Create main heading.
	oDiv = document.createElement("div");
	oDiv.id = "content_heading";
	oDiv.setAttribute("align","center");
			sText = "This functionality is under development...";
		DomObj[0] = document.createTextNode(sText);
	oDiv.appendChild( DomObj[0] );
	oDom.appendChild(oDiv);
};
/*
	Generate all output
	Returns: None. (Output is put in document.)
*/
function genOutput(bMaps, bItems, bMonsters, bNPCs){
	var oOutput;

	if(bMaps!=null)		gShowMaps = bMaps;
	if(bItems!=null)	gShowItems = bItems;
	if(bMonsters!=null)	gShowMonsters = bMonsters;
	if(bNPCs!=null)		gShowNPCs = bNPCs;

	// Create output elements.
	genOutputDiv();
	genControlCenter(bCC);
	genDataBase();
	genMarkTypes(bMarkTypes);

	// Append footer.
		// Fetch Output div.
		oOutput = document.getElementById("Output");
		// A Line Break.
		oOutput.appendChild( document.createElement("br") );
	genFooter();

	// Append Browser test and notices.
	if(bDebug && gTestBrowser){
		var oDOM;
		oDOM = document.createElement("div");
		oDOM.id = "TestBrowser";
		oDOM.innerHTML = gTestBrowser;
		oOutput.appendChild( oDOM );
	};
};
/***************************************************************************
				Load Next file.
***************************************************************************/
LoadScript('js/Items.js');
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 128735;
