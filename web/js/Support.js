/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Support Functions

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
// Tabsize:8
/***************************************************************************
				Global Variables
***************************************************************************/
var gTitle		= document.title;
var Universe		= null;
//var TestImg		= "images/new.gif";
var TestImg		= "images/Tri-Moon.gif";
var bDebug		= false;
var bTest		= false;
var bLocalFile		= false;
var bCC			= false;
var bMarkTypes		= false;
var gShowMaps		= false;
var gShowItems		= false;
var gShowMonsters	= false;
var gShowNPCs		= false;
var gShowMonsterDrops	= false;
var gShowMonsterMaps	= false;
var gShowNPCItems	= false;
var gShowNPCMaps	= false;
var gPlanet		= null;
var gMap		= null;
var gZoom		= 1;
var gItemType		= null;
var gItemSubType	= null;
var gItemName		= null;
var gMonsterName	= null;
var gMonsterLevel	= null;
var gNPCName		= null;
var gNPCVariant		= null;
/***************************************************************************
				Suport Functions
***************************************************************************/
/*
	Generate ImgFilename.
		sName = basename or full filename.
		bSmall = Boolean indicates small version. (adds "_small" to filename)
		sType = text to prepend filename. (Default = "map_")
		sExt = Extension tobe used. (Default = ".png")
	Returns: Complete filename with extension.
*/
function GetImgFilename(sName, bSmall, sType, sExt){
	var str = (sName ? sName : noMap);
	// Check if filename.
	if( !(str.length >4 && str.lastIndexOf('.') == str.length-4)
	){
		// What to prepend
		if(sType)	str = sType + str;
		else		str = "map_" + str;
		// Small type?
		if(bSmall)	str += "_small";
		// What Extension?
		if(sExt)	str += sExt;
		else		str += ".png";
	}
//	alert( 'GetImgFilename( "' + sName + '", ' + bSmall + ' )\nReturn: "' + str + '"');
	return "maps/" + str;
};
/*
	Find MarkType
	First call only uses sType as argument.
		sType = selectors seperated by '|'
	Returns: MarkType object or null.
*/
function FindMarkType(sType,psType,oMarkTypes){
	var AsType, pAsType, oMarkType, loopType, oRet;

	// Split selectors into an array.
	if(sType)	AsType = sType.split('|');
	else		return null;
	// Which selector will we use?
	if(psType)	pAsType = psType;
	else		pAsType = 0;
	// Which MarkType object to use?
	if(!oMarkTypes)	oMarkType = MarkTypes;
	else		oMarkType = oMarkTypes;
	// Itterate subtypes.
	for(var loopType=0; loopType<oMarkType.length; loopType++){
		oRet = oMarkType.get(loopType);
		if(AsType[pAsType] == oRet.name ){
			if(pAsType==AsType.length-1)
				break;	// Found all selectors.
			else{
				// Find next selectors.
				oRet = FindMarkType( sType, pAsType+1, oRet );
				break;
			};
		};
	};
	// Did we finish the loop? (if so, selector was not found)
	if(loopType == oMarkType.length){
		var str;
		str = 'Selector "' + AsType[pAsType] + '" not found !\n';
		str += 'Available Selectors:\n';
		for(var loopType=0; loopType<oMarkType.length; loopType++){
			str += '"' + oMarkType.get(loopType).name + '"';
			if( loopType != oMarkType.length-1 )
				str += ", ";
		}
		try{
			throw new Error(str);
		}
		finally{
			oRet = null;
		}
	};
	return oRet;
};
/*
	Compare Objects accoarding to Property list for Sorting.
		Obj1 = Object 1 to use in comparison.
		Obj2 = Object 2 to use in comparison.
		sPropList = Property List seperated by '|'
	Returns:
		-1:	Obj1 < Obj2
		0:	Obj1 = Obj2
		+1:	Obj1 > Obj2
*/
function CompareObjects(Obj1,Obj2,sPropList){
	var Result, aPropList;

	// Split Properties in list.
	aPropList = sPropList.split('|');
	// Init Result.
	Result = 0;
	for(var loopProp=0;Result==0 && loopProp<aPropList.length;loopProp++){
		switch(aPropList[loopProp]){
		case "Level":
				if( (Obj1.Level==null) || (Obj2.Level==null) ){
					// None Existing Level is smaler.
					if( (Obj1.Level!=null) && !(Obj2.Level!=null) )	Result = +1;
					if( !(Obj1.Level!=null) && (Obj2.Level!=null) )	Result = -1;
				}else{
					if(Obj1.Level > Obj2.Level)	Result = +1;
					if(Obj1.Level < Obj2.Level)	Result = -1;
				};
				break;
		case "Map":
				// Sorting Map on "Planet|name"
				if( (Obj1.Map==null) || (Obj2.Map==null) ){
					// None Existing Map is smaler.
					if( (Obj1.Map!=null) && !(Obj2.Map!=null) )	Result = +1;
					if( !(Obj1.Map!=null) && (Obj2.Map!=null) )	Result = -1;
				}else{
					// 1st Sort Map on Planet.
					Result = CompareObjects(Obj1.Map, Obj2.Map, "Planet");
					// 2nd Sort Map on name.
					if(Result==0)
						Result = CompareObjects(Obj1.Map, Obj2.Map, "name");
				};
				break;
		case "Name":
				if( (Obj1.Name==null) || (Obj2.Name==null) ){
					// None Existing Name is smaler.
					if( (Obj1.Name!=null) && !(Obj2.Name!=null) )	Result = +1;
					if( !(Obj1.Name!=null) && (Obj2.Name!=null) )	Result = -1;
				}else{
					if(Obj1.Name > Obj2.Name)	Result = +1;
					if(Obj1.Name < Obj2.Name)	Result = -1;
				};
				break;
		case "name":
				if( (Obj1.name==null) || (Obj2.name==null) ){
					// None Existing name is smaler.
					if( (Obj1.name!=null) && !(Obj2.name!=null) )	Result = +1;
					if( !(Obj1.name!=null) && (Obj2.name!=null) )	Result = -1;
				}else{
					if(Obj1.name > Obj2.name)	Result = +1;
					if(Obj1.name < Obj2.name)	Result = -1;
				};
				break;
		case "Planet":
				// Sorting Planet on "SolarSystem|name"
				if( (Obj1.Planet==null) || (Obj2.Planet==null) ){
					// None Existing Planet is smaler.
					if( (Obj1.Planet!=null) && !(Obj2.Planet!=null) )	Result = +1;
					if( !(Obj1.Planet!=null) && (Obj2.Planet!=null) )	Result = -1;
				}else{
					// 1st Sort Planet on SolarSystem.
					Result = CompareObjects(Obj1.Planet, Obj2.Planet, "SolarSystem");
					// 2nd Sort Planet on name.
					if(Result==0)
						Result = CompareObjects(Obj1.Planet, Obj2.Planet, "name");
				};
				break;
		case "SolarSystem":
				// Sorting SolarSystem on "name"
				if( (Obj1.SolarSystem==null) || (Obj2.SolarSystem==null) ){
					// None Existing SolarSystem is smaler.
					if( (Obj1.SolarSystem!=null) && !(Obj2.SolarSystem!=null) )	Result = +1;
					if( !(Obj1.SolarSystem!=null) && (Obj2.SolarSystem!=null) )	Result = -1;
				}else{
					// Sort SolarSystem on name.
					Result = CompareObjects(Obj1.SolarSystem, Obj2.SolarSystem, "name");
				};
				break;
		case "SubType":
				if( (Obj1.SubType==null) || (Obj2.SubType==null) ){
					// None Existing SubType is smaler.
					if( (Obj1.SubType!=null) && !(Obj2.SubType!=null) )	Result = +1;
					if( !(Obj1.SubType!=null) && (Obj2.SubType!=null) )	Result = -1;
				}else{
					if(Obj1.SubType > Obj2.SubType)	Result = +1;
					if(Obj1.SubType < Obj2.SubType)	Result = -1;
				};
				break;
		case "Type":
				if( (Obj1.Type==null) || (Obj2.Type==null) ){
					// None Existing Type is smaler.
					if( (Obj1.Type!=null) && !(Obj2.Type!=null) )	Result = +1;
					if( !(Obj1.Type!=null) && (Obj2.Type!=null) )	Result = -1;
				}else{
					if(Obj1.Type > Obj2.Type)	Result = +1;
					if(Obj1.Type < Obj2.Type)	Result = -1;
				};
				break;
		case "type":
				if( (Obj1.type==null) || (Obj2.type==null) ){
					// None Existing type is smaler.
					if( (Obj1.type!=null) && !(Obj2.type!=null) )	Result = +1;
					if( !(Obj1.type!=null) && (Obj2.type!=null) )	Result = -1;
				}else{
					if(Obj1.type > Obj2.type)	Result = +1;
					if(Obj1.type < Obj2.type)	Result = -1;
				};
				break;
		case "Variant":
				if( (Obj1.Variant==null) || (Obj2.Variant==null) ){
					// None Existing Variant is smaler.
					if( (Obj1.Variant!=null) && !(Obj2.Variant!=null) )	Result = +1;
					if( !(Obj1.Variant!=null) && (Obj2.Variant!=null) )	Result = -1;
				}else{
					if(Obj1.Variant > Obj2.Variant)	Result = +1;
					if(Obj1.Variant < Obj2.Variant)	Result = -1;
				};
				break;
		case "x":
				if( (Obj1.x==null) || (Obj2.x==null) ){
					// None Existing x is smaler.
					if( (Obj1.x!=null) && !(Obj2.x!=null) )	Result = +1;
					if( !(Obj1.x!=null) && (Obj2.x!=null) )	Result = -1;
				}else{
					if(Obj1.x > Obj2.x)	Result = +1;
					if(Obj1.x < Obj2.x)	Result = -1;
				};
				break;
		case "y":
				if( (Obj1.y==null) || (Obj2.y==null) ){
					// None Existing y is smaler.
					if( (Obj1.y!=null) && !(Obj2.y!=null) )	Result = +1;
					if( !(Obj1.y!=null) && (Obj2.y!=null) )	Result = -1;
				}else{
					if(Obj1.y > Obj2.y)	Result = +1;
					if(Obj1.y < Obj2.y)	Result = -1;
				};
				break;
		default:
				throw new Error(
						'Unknown property selector "'
						+aPropList[loopProp]
						+'" in CompareObjects(Obj1,Obj2,"'
						+sPropList
						+'")'
					);
				break;
		};
	};
	return Result;
};
/*
	Navigate to a location
		sLoc = selectors seperated by '|'
	Returns: None. (Page is refreshed with new planet and map)
*/
function Navigate(sLoc){
	var AsLoc = Array();

	gPlanet = null;
	gMap = null;
	if(sLoc)		AsLoc = sLoc.split('|');
	if(AsLoc.length>0){
		if(Universe.planet(AsLoc[0]) == null ){
			alert("Unknown navigation destination!");
			return;
		};
	};
	if(AsLoc.length>1){
		if(Universe.planet(AsLoc[0]).map(AsLoc[1]) == null ){
			alert("Unknown navigation destination!");
			return;
		};
	};
	if(AsLoc.length>0)	gPlanet = AsLoc[0];
	if(AsLoc.length>1)	gMap = AsLoc[1];
	genOutput();
};
/*
	Create a TestPlanet with marks.
		sName = Planet Name.
		nX,nY = Planet size as a 2-Dimensional Array of maps.
	Returns: None. (Planet is added to 'Universe')
*/
function CreateTestPlanet(sName,nX){
	var testMarkTypes, testPlanet;

	testMarkTypes = Array(
		TestImg
		,"NPC"
		,"NPC|Vendor"
		,"NPC|Vendor|Armor"
		,"NPC|Vendor|Pets"
		,"NPC|Pet Trainer"
		,"Map"
		,"Map|Portal"
		,"Map|Portal|Cave"
		,TestImg
		,TestImg
		,TestImg
	);
	Universe.add( new Planet(sName, nX) );
	testPlanet = Universe.planet(sName);
	// Fill Planet
	for(var loopMap=0; loopMap< (testPlanet.x*3); loopMap++){
		var testMap = new Map(	"Some Map"+loopMap,
					5120 + loopMap*256,
					5120 + loopMap*256,
					null
				);
		for(var loopNpc=0; loopNpc<testMarkTypes.length; loopNpc++){
			var testMark = new Mark();
			try{
				// Create Mark.
				testMark = new Mark(	testMarkTypes[loopNpc],
							100 + 100*loopMap + 150*loopNpc ,
							100 + 150*loopNpc
						);
			}
			catch(e){
				ShowException(e);
			}
			finally{
				// Change Mark properties.
				testMark.name += "_" + loopMap + "-" + loopNpc;
				testMark.desc += "_" + loopMap + "-" + loopNpc;
				// Add to Map.
				testMap.add(testMark);
			}
		}
		// Fill Planet.
		Universe.planet(sName).add(testMap);
	}
};
/*	Load the localfile then continue */
function LoadLocalFile(StartTime){
	var sText, CurrentDate, DiffTime, timeoutID;

	CurrentDate = new Date();
	if(!StartTime){
		LoadScript('file:///C:/Marks.js');
		sText = 'LoadLocalFile(' + CurrentDate.getTime() + ')';
		timeoutID = window.setTimeout(sText,100);
	}else{
		try{
			DiffTime = CurrentDate.getTime() - StartTime;
			if( DiffTime>2000 ){
				sText = "LoadLocalFile()";
				sText += '\nWaited: ' + DiffTime/1000 + ' secs.';
				sText += "\nSeems like something has gone wrong...";
				sText += "\nDid you forget to increase loaded bytes counter?";
				throw new Error(sText);
			}else{
				if( gLoadScript.SizeLoaded == gLoadScript.TotalSize ){
					sText = 'LoadLocalFile(' + StartTime + ')';
					timeoutID = window.setTimeout(sText,100);
				}else{
					sText = 'init(true)';
					timeoutID = window.setTimeout(sText,100);
				};
			};
		}
		catch(e){
			ShowException(e);
		}
	};
};
/*
	Function to determine if we should show a mark or not.
	Mark is shown when:
		normal:	oMark.minZoom <= nZoom <= oMark.maxZoom
		minimap: oMark.minZoom == -1
		Special show-always: nZoom == -2
	Returns: true/false
*/
function ShouldShowMark(oMark, nZoom){
	var bShow=true;

	if(nZoom != -2){
		// Check minZoom.
		if( oMark.minZoom ){			// Only when specified.
			if( nZoom < 0 ){		// are we in minimap?
				if( !(oMark.minZoom < 0) )
					bShow=false;	// Dont show if in minimap but not allowed.
			}else{
				if( oMark.minZoom > nZoom )
					bShow=false;	// Dont show if current zoom lower as minZoom.
			};
		};
		// Check maxZoom.
		if(	oMark.maxZoom ){		// Only when specified.
			if( oMark.maxZoom < 0 ){	// minimap needed?
				if( !(nZoom < 0) )
					bShow=false;	// Dont show if minimap needed but not in minimap.
			}else{
				if( oMark.maxZoom < nZoom )
					bShow=false;	// Dont show if current zoom higher as maxZoom.
			};
		};
	};
	// Dont Show when NPC and not alwed to show NPCs.
	if(!gShowNPCs && oMark.type.indexOf("NPC")>=0 ){
		// Monsters get checked seperate.
		if( oMark.type.indexOf("Monster")<0 )	bShow=false;
	};
	// Dont Show when monster and not alwed to show monsters.
	if(!gShowMonsters && oMark.type.indexOf("Monster")>=0 )
		bShow=false;

	return bShow;
};
/*	Set document Title	*/
function SetTitle(sText){
	var sTitle = gTitle;

	if(sText)	sTitle += " | " + sText;
	// Set Document Title.
	document.title = sTitle;
	// Set parent Document Title.
	if(noDOM2HTML)
		document.parent.document.title = document.title;
	else
		document.defaultView.top.document.title = document.title;
};
/*	Search string parser.	*/
function ParseSearchString(){
	var search = document.location.search.substring(1).split('&');
	var mapWorld, mapNumber, mapDesc;
	if(document.location.search.length > 1){
		for( var loop = 0; loop<search.length; loop++ ){
			var cmd, arg, val;
			cmd = search[loop].split('=');
			arg = cmd[0];
			val = unescape(cmd[1]);
			switch(arg){
			case "DB":		break;	// List DataBase Listing.
			case "Preview":
						bDebug = true;
//						bTest = true;
						bCC = true;
//						bMarkTypes = true;
//						gShowMaps = false;
//						gShowMonsters = false;
						gPlanet = null;
						gMap = null;
						break;
			case "Debug":		bDebug = true; break;
			case "Test":		bTest = true; break;
			case "LocalFile":	bLocalFile = true; break;
			case "CC":		bCC = true; break;
			case "MarkTypes":	bMarkTypes = true; break;
			case "Maps":		gShowMaps = true; break;
			case "Items":		gShowItems = true; break;
			case "Monsters":	gShowMonsters = true; break;
			case "NPCs":		gShowNPCs = true; break;
			case "MonsterDrops":	gShowMonsterDrops = true; break;
			case "MonsterMaps":	gShowMonsterMaps = true; break;
			case "NPCItems":	gShowNPCItems = true; break;
			case "NPCMaps":		gShowNPCMaps = true; break;
			case "Planet":		gPlanet = unescape(val); break;
			case "Map":		gMap = unescape(val); break;
			case "Zoom":		gZoom = parseFloat(val); break;
			case "ItemType":	gItemType = unescape(val); break;
			case "ItemSubType":	gItemSubType = unescape(val); break;
			case "ItemName":	gItemName = unescape(val); break;
			case "MonsterName":	gMonsterName = unescape(val); break;
			case "MonsterLevel":	gMonsterLevel = parseInt(val); break;
			case "NPCName":		gNPCName = unescape(val); break;
			case "NPCVariant":	gNPCVariant = parseInt(val); break;
			default:
				alert("Unknown keyword: " + arg);
				break;
			};
		};
	};
};
function init(bFlag){
	try{
		if(bLocalFile && !bFlag){
			// Load local file first!
			LoadLocalFile();
		}else{
			Items.Sort();
			Monsters.Sort();
			NPCs.Sort();
			genOutput();
		};
	}
	catch(e){
		ShowException(e);
	}
};
/***************************************************************************
				Initialisation
***************************************************************************/
ParseSearchString();
/***************************************************************************
				Load Next file.
***************************************************************************/
LoadScript('js/DHTML.js');
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 15881;
