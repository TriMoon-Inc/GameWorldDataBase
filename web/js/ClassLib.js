/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	SolarSystem.
	Main Class library.

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
// Tabsize:8
/***************************************************************************
				Global Variables
***************************************************************************/

var noMark	= "noMark";
var noMap	= "back";
var MarkTypes	= null;
var Items	= null;
var Monsters	= null;
var NPCs	= null;

/***************************************************************************
				Prototype Functions
***************************************************************************/

/*	MarkType Prototype	*/
function MarkType(sName, sImg, nMinZoom, nMaxZoom){
	this.name	= (sName ? sName : "UnKnown");
	this.img;						// Mark's image. (=Image() object so browser will preload.)
	this.length	= 0;					// Length of Subtype Array.
	this.minZoom	= (nMinZoom?parseFloat(nMinZoom):null);	// min Zoom Level needed to show.
	this.maxZoom	= (nMaxZoom?parseFloat(nMaxZoom):null);	// max Zoom Level needed to show.
	this.Obj	= Array();				// Subtype Array.

	// Add a SubType.
	this.add = function(sName, sImg, nMinZoom, nMaxZoom){
				this.Obj[ this.Obj.length ] = new MarkType(sName, sImg, nMinZoom, nMaxZoom);
				this.length = this.Obj.length;
			};
	// Get a SubType.
	this.get = function(nInd){
				if(	nInd!=null && nInd<this.Obj.length )
					return this.Obj[nInd];
				else
					return this.Obj[this.Obj.length-1];
			};
	this.img = new Image();
	this.img.src = GetImgFilename( (sImg?sImg:noMark), false, "MT_");
};

/*	Mark Prototype	*/
function Mark(sType, nX, nY, sName, sDesc, nMinZoom, nMaxZoom){
	this.Map	= null;					// The map this Mark belongs to.
	this.type	= null;					// Mark Type with selectors.
	this.img	= null;					// Mark's image.
	this.x		= parseInt(nX);				// X-Coordinate.
	this.y		= parseInt(nY);				// Y-Coordinate.
	this.name	= (sName?sName:"NoName");		// Mark's name.
	this.desc	= (sDesc?sDesc:null);			// Description of the Mark.
	this.minZoom	= (nMinZoom?parseFloat(nMinZoom):null);	// min Zoom Level needed to show.
	this.maxZoom	= (nMaxZoom?parseFloat(nMaxZoom):null);	// max Zoom Level needed to show.

	// Check if filename.
	if( sType && sType.length >4 && sType.lastIndexOf('.') == sType.length-4 ){
		this.type = "Custom";
		this.img = new Image();
		this.img.src = sType;
	}else{
		var oMarkType;
		try{
			oMarkType = FindMarkType(sType);
		}
		catch(e){
			var str, oError;
			str = 'Mark( ';
			str += (sType?'"':'') + sType + (sType?'"':'');
			str += ', ' + nX + ', ' + nY;
			str += ', ' + (sName?'"':'') + sName + (sName?'"':'');
			str += ', ' + (sDesc?'"':'') + sDesc + (sDesc?'"':'');
			str += ' )\n\n';
			if(e.message)		str += e.message;
			if(e.description)	str += e.description;
			oError = new TypeError(str);
			oError.name = 'SelectorError';
			throw oError;
		}
		finally{
			if(oMarkType){
				this.type = sType;
			}else{
				oMarkType = new MarkType();
				this.type = oMarkType.name;
			};
			this.img = oMarkType.img;
			this.minZoom = oMarkType.minZoom;
			this.maxZoom = oMarkType.maxZoom;
		}
	};
};

/*	ItemType Prototype	*/
function ItemType(nLevel, sName, sType, sSubType, sUseage, nAtk, nWeight, nValue, bStack, nMax, bDrop, sStrong, sWeak, sDesc, sRace){
	this.Level	= nLevel;	// Restricted to level.
	this.Name	= null;		// Item name.
	this.Type	= sType;	// Item type.
	this.SubType	= sSubType;	// Item Subtype.
	this.Useage	= sUseage;	// Where can it be used.
	this.Damage	= nAtk;		// Attack value.
	this.Weight	= nWeight;	// Item weight.
	this.Value	= nValue;	// Item value
	this.Stack	= !(!bStack);	// Stackable?
	this.Max	= nMax;		// Max amount allowed to carry.
	this.Drop	= !(!bDrop);	// Dropable?
	this.Strong	= sStrong;	// Strong against.
	this.Weak	= sWeak;	// Weak against.
	this.Desc	= sDesc;	// Item Description.
	this.Race	= sRace;	// Allowed Race(s).
	this.DroppedBy	= new Array();	// Array of monsters that drop this item.
	this.SoldBy	= new Array();	// Array of NPCs that sell this item.

	// Fetch Name as HTML. (Replace spaces with nbsp's)
	this.getHTMLName = function(){
					var sHTML, str, sWords;
					str = '';
					sWords = this.Name.split(' ');
					for(var loopWord=0;loopWord<sWords.length;loopWord++){
						str += sWords[loopWord];
						if( loopWord < sWords.length-1 )	str += '&nbsp;';
					};
					sHTML = "<a href='javascript:Universe.Control.SelectItem("
						+ "\"" + this.Name + "\"";
					if( this.Type )		sHTML += ", \"" + this.Type + "\""
					if( this.SubType )	sHTML += ", \"" + this.SubType + "\""
					sHTML +=  ");'>" + str + "</a>";
					return sHTML;
				};
	// Sort all Monsters this Item is dropped by..
	this.SortDroppedBy = function(){
					this.DroppedBy.sort(
						function(oMonster1, oMonster2){
							return CompareObjects(oMonster1, oMonster2, "Name|Level");
						}
					);
				};
	// Sort all NPC's this Item is sold by..
	this.SortSoldBy = function(){
					this.SoldBy.sort(
						function(oNPC1, oNPC2){
							return CompareObjects(oNPC1, oNPC2, "Name|Variant");
						}
					);
				};

	// Initialize Item Name.
	if(sName && sName != "")	this.Name = sName;
	else				this.Name = "NoName";
};

/*	MapItemType Prototype	*/
function MapItemType(sPlanet, sMap){
	this.Type	= "Map";	// Item type.
	this.SubType	= null;		// Item Subtype.
	this.Planet	= sPlanet;	// This Map's Planet name.
	this.Map	= sMap;		// This Map's name.
	this.DroppedBy	= new Array();	// Array of monsters that drop this item.
	this.SoldBy	= new Array();	// Array of NPCs that sell this item.

	// Fetch Name as HTML. (Replace spaces with nbsp's)
	this.getHTMLName = function(){
					var str, sWords;
					str = '';
					sWords = this.Name.split(' ');
					for(var loopWord=0;loopWord<sWords.length;loopWord++){
						str += sWords[loopWord];
						if( loopWord < sWords.length-1 )	str += '&nbsp;';
					};
					return str;
				};
	// Sort all Monsters this Item is dropped by..
	this.SortDroppedBy = function(){
					this.DroppedBy.sort(
						function(oMonster1, oMonster2){
							return CompareObjects(oMonster1, oMonster2, "Name|Level");
						}
					);
				};
	// Sort all NPC's this Item is sold by..
	this.SortSoldBy = function(){
					this.SoldBy.sort(
						function(oNPC1, oNPC2){
							return CompareObjects(oNPC1, oNPC2, "Name|Variant");
						}
					);
				};

	// Tests for correctness.
	try{
		if( Universe.planet(sPlanet).map(sMap) == null ){
			throw new ReferenceError("Reference to non-existing map...");
		};
	}
	catch(e){
		var str;
		str = "MapItemType('" + sPlanet + "', '" + sMap + "')\n\n";
		str += e.name + ' in: ';
		if(e.message)		str += e.message;
		if(e.description)	str += e.description;
		throw new ReferenceError(str);
	}
};

/*	Item Prototype	*/
function Item(){
	this.Items	= new Array();	// Array of items.
	this.length	= 0;		// Length of item array.

	// Add an Item.
	this.add = function(oItem){
				if(
					(oItem instanceof ItemType)
					|| (oItem instanceof MapItemType)
				){
					this.Items[this.Items.length] = oItem;
					this.length = this.Items.length;
				}else{
					var str;
					str = 'Items.add()';
					str += '\nArgument needs tobe of type "ItemType" !';
					throw new TypeError(str);
				};
			};
	// Fetch an Item or group of Items.
	this.get = function(sName,sItemType,sItemSubType){
				var aItems = new Item();
				if(sName){
					for(var loopItem=0; loopItem<this.Items.length; loopItem++){
						if( this.Items[loopItem].Name == sName )
							break;
					};
					if( loopItem<this.Items.length )
						return this.Items[loopItem];
					else{
						var str;
						str = 'Items.get()';
						str += "\nItem: '" + sName + "' not found !";
						throw new ReferenceError(str);
					};
				}else
				if(sItemType){
					for(var loopItem=0; loopItem<this.Items.length; loopItem++){
						if( this.Items[loopItem].Type == sItemType )
							aItems.add(this.Items[loopItem]);
					};
					return aItems;
				}else
				if(sItemSubType){
					for(var loopItem=0; loopItem<this.Items.length; loopItem++){
						if( this.Items[loopItem].SubType == sItemSubType )
							aItems.add(this.Items[loopItem]);
						if( this.Items[loopItem].SubType == null && sItemSubType == "None")
							aItems.add(this.Items[loopItem]);
					};
					return aItems;
				}else	// Get last added Item.
					return this.Items[this.Items.length-1];
			};
/*	Compare functions for Sort.	*/
	//	Main Compare function.
	this.Compare = function(oItem1, oItem2, sPropList){
				// Default Property list for sort.
				if(!sPropList)	sPropList = "Type|SubType|Level|Name";
				return CompareObjects(oItem1, oItem2, sPropList);
			};
	// Sort Items.
	this.SortItems = function(){
				this.Items.sort(
					function(oItem1, oItem2){
						return Items.Compare(oItem1, oItem2);
					}
				);
			};
	// Sort DroppedBy's of all Items.
	this.SortDroppedBys = function(){
					for(var loopItem=0; loopItem<this.Items.length; loopItem++){
						this.Items[loopItem].SortDroppedBy();
					};
				};
	// Sort SoldBy's of all Items.
	this.SortSoldBys = function(){
					for(var loopItem=0; loopItem<this.Items.length; loopItem++){
						this.Items[loopItem].SortSoldBy();
					};
				};
	// Main Sort function.
	this.Sort = function(){
				this.SortItems();
				this.SortDroppedBys();
				this.SortSoldBys();
			};
};

/*	MonsterType Prototype	*/
function MonsterType(sName, nLevel, nHP, nATK, nDef, nMoney, nExp, sStrong, sWeak, sDesc){
	this.Name	= sName;	// Monster name.
	this.Level	= nLevel;	// Monster level.
	this.HP		= nHP;		// Monster HP.
	this.ATK	= nATK;		// Monster Attack.
	this.Def	= nDef;		// Monster Defense.
	this.Money	= nMoney;	// Money drop.
	this.Exp	= nExp;		// Exp for kill.
	this.Strong	= sStrong;	// Strong against.
	this.Weak	= sWeak;	// Weak against.
	this.Desc	= sDesc;	// Monster description.
	this.Drops	= new Array();	// Array of drops.

	// Fetch Name as HTML. (Replace spaces with nbsp's)
	this.getHTMLName = function(){
					var str, sWords;
					str = '';
					sWords = this.Name.split(' ');
					for(var loopWord=0;loopWord<sWords.length;loopWord++){
						str += sWords[loopWord];
						if( loopWord < sWords.length-1 )	str += '&nbsp;';
					};
					return str;
				};
	// Add an item to droplist.
	this.addDrop = function(sName){
				var oItem;
				try{
					oItem = Items.get(sName);
					this.Drops[this.Drops.length] = oItem;
					oItem.DroppedBy[oItem.DroppedBy.length] = this;
				}
				catch(e){
					var str, oError;
					str = 'MonsterType.addDrop()';
					str += "\nMonster: '" + this.Name + "', Level: '" + this.Level + "'\n";
					str += e.name + ' in: ';
					if(e.message)		str += e.message;
					if(e.description)	str += e.description;
					oError = new Error(str);
					oError.name = 'ParsingError';
					throw oError;
				}
			};
	// Sort all drops of this monster.
	this.SortDrops = function(){
					this.Drops.sort(
						function(oItem1, oItem2){
							return CompareObjects(oItem1, oItem2, "Level|Name|Type|SubType");
						}
					);
				};
};

/*	Monster Prototype	*/
function Monster(){
	this.Monsters	= new Array();	// Array of Monsters.
	this.length	= 0;		// Length of Monster array.

	// Add a Monster.
	this.add = function(oMonster){
				if( oMonster instanceof MonsterType ){
					this.Monsters[this.Monsters.length] = oMonster;
					this.length = this.Monsters.length;
				}else{
					var str;
					str = 'Monsters.add()';
					str += '\nArgument needs tobe of type "MonsterType" !';
					throw new TypeError(str);
				};
			};
	// Fetch a Monster
	this.get = function(sName, nLevel){
				if( (sName!=null) && (nLevel!=null) ){
					for(var loopMonster=0; loopMonster<this.Monsters.length; loopMonster++){
						if( this.Monsters[loopMonster].Name == sName
							&& this.Monsters[loopMonster].Level == nLevel
						)	break;
					};
					if( loopMonster<this.Monsters.length )
						return this.Monsters[loopMonster];
					else{
						var str;
						str = 'Monsters.get()';
						str += "\nMonster: '" + sName + "', Level: '" + nLevel + "' not found !";
						throw new ReferenceError(str);
					};
				}else	// Get last added Monster.
					return this.Monsters[this.Monsters.length-1];
			};
/*	Compare functions for Sort.	*/
	//	Main Compare function.
	this.Compare = function(oMonster1, oMonster2, sPropList){
				// Default Property list for sort.
				if(!sPropList)	sPropList = "Name|Level";
				return CompareObjects(oMonster1, oMonster2, sPropList);
			};
	// Sort Monsters.
	this.SortMonsters = function(){
					this.Monsters.sort(
						function(oMonster1, oMonster2){
							return Monsters.Compare(oMonster1, oMonster2);
						}
					);
				};
	// Sort Monster Drops.
	this.SortMonsterDrops = function(){
					for(var loopMonster=0; loopMonster<this.Monsters.length; loopMonster++){
						this.Monsters[loopMonster].SortDrops();
					};
				};
	// Main Sort function.
	this.Sort = function(){
				this.SortMonsters();
				this.SortMonsterDrops();
			};
};

/*	NPCType Prototype	*/
function NPCType(sName, nVariant, sDesc){
	this.Name	= sName;	// NPC name.
	this.Variant	= nVariant;	// NPC Variant.
	this.Desc	= sDesc;	// NPC description.
	this.Items	= new Array();	// Array of Items.
	this.Marks	= new Array();	// Array of Marks using this NPC.

	// Fetch Name as HTML. (Replace spaces with nbsp's)
	this.getHTMLName = function(){
					var str, sWords;
					str = '';
					sWords = this.Name.split(' ');
					for(var loopWord=0;loopWord<sWords.length;loopWord++){
						str += sWords[loopWord];
						if( loopWord < sWords.length-1 )	str += '&nbsp;';
					};
					return str;
				};
	// Add an item to itemlist.
	this.addItem = function(sName){
				var oItem;
				try{
					oItem = Items.get(sName);
					this.Items[this.Items.length] = oItem;
					oItem.SoldBy[oItem.SoldBy.length] = this;
				}
				catch(e){
					var str, oError;
					str = 'NPCType.addItem()';
					str += "\nNPC: '" + this.Name + "', Variant: '" + this.Variant + "'\n";
					str += e.name + ' in: ';
					if(e.message)		str += e.message;
					if(e.description)	str += e.description;
					oError = new Error(str);
					oError.name = 'ParsingError';
					throw oError;
				}
			};
	// Sort Items.
	this.SortItems = function(){
				this.Items.sort(
					function(oItem1, oItem2){
						return Items.Compare(oItem1, oItem2, "Level|Name|Type|SubType");
					}
				);
			};
	// Sort all Marks this Item is used by..
	this.SortMarks = function(){
				this.Marks.sort(
					function(oMark1, oMark2){
						return CompareObjects(oMark1, oMark2, "type|Map|x|y");
					}
				);
			};
};

/*	NPC Prototype	*/
function NPC(){
	this.NPCs	= new Array();	// Array of NPCs.
	this.length	= 0;		// Length of NPC array.

	// Add a NPC.
	this.add = function(oNPC){
				if( oNPC instanceof NPCType ){
					this.NPCs[this.NPCs.length] = oNPC;
					this.length = this.NPCs.length;
				}else{
					var str;
					str = 'NPCs.add()';
					str += '\nArgument needs tobe of type "NPCType" !';
					throw new TypeError(str);
				};
			};
	// Fetch a NPC
	this.get = function(sName, nVariant){
				if( (sName!=null) && (nVariant!=null) ){
					for(var loopNPC=0; loopNPC<this.NPCs.length; loopNPC++){
						if( this.NPCs[loopNPC].Name == sName
							&& this.NPCs[loopNPC].Variant == nVariant
						)	break;
					};
					if( loopNPC<this.NPCs.length )
						return this.NPCs[loopNPC];
					else{
						var str;
						str = 'NPCs.get()';
						str += "\nNPC: '" + sName + "', Variant: '" + nVariant + "' not found !";
						throw new ReferenceError(str);
					};
				}else	// Get last added NPC.
					return this.NPCs[this.NPCs.length-1];
			};
/*	Compare functions for Sort.	*/
	//	Main Compare function.
	this.Compare = function(oNPC1, oNPC2, sPropList){
				// Default Property list for sort.
				if(!sPropList)	sPropList = "Name|Variant";
				return CompareObjects(oNPC1, oNPC2, sPropList);
			};
	// Sort NPCs.
	this.SortNPCs = function(){
				this.NPCs.sort(
					function(oNPC1, oNPC2){
						return NPCs.Compare(oNPC1, oNPC2);
					}
				);
			};
	// Sort NPC Items.
	this.SortNPCItems = function(){
					for(var loopNPC=0; loopNPC<this.NPCs.length; loopNPC++){
						this.NPCs[loopNPC].SortItems();
					};
				};
	// Sort NPC Marks.
	this.SortNPCMarks = function(){
					for(var loopNPC=0; loopNPC<this.NPCs.length; loopNPC++){
						this.NPCs[loopNPC].SortMarks();
					};
				};
	// Main Sort function.
	this.Sort = function(){
				this.SortNPCs();
				this.SortNPCItems();
				this.SortNPCMarks();
			};
};

/*	ImageMapArea Prototype	*/
function ImageMapArea(sShape, aCoords, sAlt, sLoc){
	this.Shape	= sShape;
	this.Coords	= aCoords;
	this.Alt	= sAlt;
	this.Loc	= sLoc;
};

/*	Map Prototype
	Maps are 5120 x 5120, older ones 2560 x 2560
	0,0 is left bottom.
*/
function Map(sName, nX, nY, sImg){
	this.Planet	= null;		// The Planet this Map belongs to.
	this.name	= sName;	// Maps's name.
	this.x		= parseInt(nX);	// X-size.
	this.y		= parseInt(nY);	// Y-size.
	this.img	= sImg;		// Map Image.
	this.Marks	= Array();	// Array of Mark's.

	// Clear Marks Array.
	this.clear = function(){
				this.Marks = Array();
			};
	// Get Image filename.
	this.image = function(bflag){
				return GetImgFilename( this.img, bflag);
			};
	// Add a Mark.
	this.add = function(oMark){
				if( oMark instanceof Mark ){
					oMark.Map = this;
					this.Marks[ this.Marks.length ] = oMark;
				}else{
					var str;
					str = 'SolarSystem: "' + this.Planet.SolarSystem.name +'"';
					str += '\nPlanet: "' + this.Planet.name +'"';
					str += '\mMap.add()';
					str += '\Map: "' + this.name +'"';
					str += '\nArgument needs tobe of type "Mark" !';
					throw new TypeError(str);
				};
			};
	// Get a Mark.
	this.get = function(sName){
				for(var loopMark=0; loopMark<this.Marks.length; loopMark++){
					if( this.Marks[loopMark].name == sName )
						break;
				};
				if( loopMark<this.Marks.length )
					return this.Marks[loopMark];
				else{
					var str;
					str = 'SolarSystem: "' + this.Planet.SolarSystem.name +'"';
					str += '\nPlanet: "' + this.Planet.name +'"';
					str += '\nMap.get()';
					str += '\nMap: "' + this.name +'"';
					str += '\nMark "'+sName+'" not found !';
					try{
						throw new ReferenceError(str);
					}
					finally{
						return null;
					}
				};
			};
};

/*	Planet Prototype	*/
function Planet(sName, sArg, aIMAP){
	this.SolarSystem	= null;		// The SolarSystem this Planet belongs to.
	this.name		= sName;	// Planet's name.
	this.img		= null;		// Planet Image.
	this.imgMap		= null;		// Array of ImageMapArea's.
	this.x			= null;		// Layout max X-size.
	this.maps		= Array();	// Array of map's.

	// Clear map Array.
	this.clear = function(){
				this.maps = Array();
			};
	// Get Image filename.
	this.image = function(bflag){
				return GetImgFilename( this.img, bflag);
			};
	// Add an Map.
	this.add = function(oMap){
				if( oMap instanceof Map ){
					oMap.Planet = this;
					this.maps[ this.maps.length ] = oMap;
				}else{
					var str;
					str = 'SolarSystem: "' + this.SolarSystem.name +'"';
					str += '\nPlanet: "' + this.name +'"';
					str += '\nPlanet.add()';
					str += '\nArgument needs tobe of type "Map" !';
					throw new TypeError(str);
				};
			};
	// Get a map.
	this.map = function(sName){
				for(var loopMap=0; loopMap<this.maps.length; loopMap++){
					if( this.maps[loopMap].name == sName )
						break;
				};
				if( loopMap<this.maps.length )
					return this.maps[loopMap];
				else{
					var str;
					str = 'SolarSystem: "' + this.SolarSystem.name +'"';
					str += '\nPlanet: "' + this.name +'"';
					str += '\nPlanet.map()';
					str += '\nMapname "'+sName+'" not found !';
					try{
						throw new ReferenceError(str);
					}
					finally{
						return null;
					}
				};
			};
	this.makeIMAP = function(sImg, aIMAP){
				try{
					this.img = sImg;
					// Add Array of ImageMapArea's.
					if( aIMAP && aIMAP instanceof Array ){
						var loopArea;
						for(loopArea=0; loopArea<aIMAP.length; loopArea++)
							if( !(aIMAP[loopArea] instanceof ImageMapArea) )
								break;
						if(loopArea<aIMAP.length)
							throw new Error('aIMAP elements needs tobe of type "ImageMapArea" !');
						else
							this.imgMap = aIMAP;
					}else
						throw new Error('IMAP argument required and of type "Array" !');
				}
				catch(e){
					var str, oError;
					str = 'SolarSystem: "' + this.SolarSystem.name +'"';
					str += '\nPlanet: "' + this.name +'"';
					str += '\nPlanet.makeIMAP( ';
					str += (sImg?'"':'') + sImg + (sImg?'"':'');
					str += ', ';
					if(aIMAP instanceof Array)	str += 'aIMAP';
					else		str += aIMAP;
					str += ' )\n\n';
					if(e.message)		str += e.message;
					if(e.description)	str += e.description;
					throw new TypeError(str);
				}
			};
	// See if we got a number as sArg argument.
	if( isNaN(parseInt(sArg)) ){
		try{
			this.img = sArg;
			// Add Array of ImageMapArea's.
			if( aIMAP && aIMAP instanceof Array ){
				var loopArea;
				for(loopArea=0; loopArea<aIMAP.length; loopArea++)
					if( !(aIMAP[loopArea] instanceof ImageMapArea) )
						break;
				if(loopArea<aIMAP.length)
					throw new Error('aIMAP elements needs tobe of type "ImageMapArea" !');
				else
					this.imgMap = aIMAP;
			}else
				throw new Error('IMAP argument required and of type "Array" !');
		}
		catch(e){
			var str, oError;
			str = 'Planet( ';
			str += (sName?'"':'') + sName + (sName?'"':'');
			str += ', ' + (sArg?'"':'') + sArg + (sArg?'"':'');
			str += ', ';
			if(aIMAP instanceof Array)	str += 'aIMAP';
			else		str += aIMAP;
			str += ' )\n\n';
			if(e.message)		str += e.message;
			if(e.description)	str += e.description;
			throw new TypeError(str);
		}
	}else
		this.x = parseInt(sArg);
};

/*	SolarSystem Prototype	*/
function SolarSystem(sName, aPlanets, sImg, aIMAP){
	this.name	= sName;		// SolarSystem's name.
	this.planets	= null;			// Array of planet's.
	this.img	= sImg;			// SolarSystem Image.
	this.imgMap	= null;			// Array of ImageMapArea's.
	this.Control	= new ControlCenter;	// ControlCenter.

	// Clear planet Array.
	this.clear = function(){
				this.planets = new Array();
				this.imgMap = new Array();
			};
	// Get Image filename.
	this.image = function(bflag){
				return GetImgFilename( this.img, bflag);
			};
	// Add an planet or ImageMap Area.
	this.add = function(obj){
				if( 
					(obj instanceof Planet) || (obj instanceof ImageMapArea)
				){
					if(obj instanceof Planet){
						if(!this.planets)	this.planets = new Array();
						obj.SolarSystem = this;
						this.planets[ this.planets.length ] = obj;
					};
					if(obj instanceof ImageMapArea){
						if(!this.imgMap)	this.imgMap = new Array();
						this.imgMap[ this.imgMap.length ] = obj;
					};
				}else{
					var str;
					str = 'SolarSystem.add()';
					str += '\nSolarSystem: "' + this.name +'"';
					str += '\nArgument needs tobe of type "Planet" or "ImageMapArea" !';
					throw new TypeError(str);
				};
			};
	// Get a planet.
	this.planet = function(sName){
				for(var loopPlanet=0; loopPlanet<this.planets.length; loopPlanet++){
					if( this.planets[loopPlanet].name == sName )
						break;
				};
				if( loopPlanet<this.planets.length )
					return this.planets[loopPlanet];
				else{
					var str;
					str = 'SolarSystem.planet()';
					str += '\nSolarSystem: "' + this.name +'"';
					str += '\nPlanet "'+sName+'" not found !';
					try{
						throw new ReferenceError(str);
					}
					finally{
						return null;
					}
				};
			};
	try{
		// Add Array of planet's.
		if( !aPlanets || aPlanets instanceof Array ){
			if(aPlanets){
				var loopPlanet;
				for(loopPlanet=0; loopPlanet<aPlanets.length; loopPlanet++){
					if( !(aPlanets[loopPlanet] instanceof Planet) )
						break;
					else
						aPlanets[loopPlanet].SolarSystem = this;
				};
				if(loopPlanet<aPlanets.length)
					throw new Error('aPlanets elements needs tobe of type "Planet" !');
				else
					this.planets = aPlanets;
			}
		}else
			throw new Error('Planets argument needs tobe of type "Array" !');
		// Add Array of ImageMapArea's.
		if( !aIMAP || aIMAP instanceof Array ){
			if(aIMAP){
				var loopArea;
				for(loopArea=0; loopArea<aIMAP.length; loopArea++)
					if( !(aIMAP[loopArea] instanceof ImageMapArea) )
						break;
				if(loopArea<aIMAP.length)
					throw new Error('aIMAP elements needs tobe of type "ImageMapArea" !');
				else
					this.imgMap = aIMAP;
			}
		}else
			throw new Error('IMAP argument needs tobe of type "Array" !');
	}
	catch(e){
		var str, oError;
		str = 'SolarSystem( ';
		str += (sName?'"':'') + sName + (sName?'"':'');
		str += ', ';
		if(aPlanets instanceof Array)	str += 'aPlanets';
		else			str += aPlanets;
		str += ', ' + (sImg?'"':'') + sImg + (sImg?'"':'');
		str += ', ';
		if(aIMAP instanceof Array)	str += 'aIMAP';
		else		str += aIMAP;
		str += ' )\n\n';
		if(e.message)		str += e.message;
		if(e.description)	str += e.description;
		throw new TypeError(str);
	}
};
/*	ControlCenter Prototype	*/
function ControlCenter(){
	this.MakeSearch		= function(oPlanet,oMap){
						var aArgs = new Array();
						if(bDebug)		aArgs[aArgs.length] = 'Debug';
						if(bTest)		aArgs[aArgs.length] = 'Test';
						if(bLocalFile)		aArgs[aArgs.length] = 'LocalFile';
						if(bCC)			aArgs[aArgs.length] = 'CC';
						if(bMarkTypes)		aArgs[aArgs.length] = 'MarkTypes';
						if(gShowMaps)		aArgs[aArgs.length] = 'Maps';
						if(gShowItems)		aArgs[aArgs.length] = 'Items';
						if(gShowMonsters)	aArgs[aArgs.length] = 'Monsters';
						if(gShowNPCs)		aArgs[aArgs.length] = 'NPCs';
						if(gShowMonsterDrops)	aArgs[aArgs.length] = 'MonsterDrops';
						if(gShowMonsterMaps)	aArgs[aArgs.length] = 'MonsterMaps';
						if(gShowNPCItems)	aArgs[aArgs.length] = 'NPCItems';
						if(gShowNPCMaps)	aArgs[aArgs.length] = 'NPCMaps';
						if(oPlanet)		aArgs[aArgs.length] = 'Planet='+oPlanet.name;
						else if(gPlanet)	aArgs[aArgs.length] = 'Planet='+gPlanet;
						if(oMap)		aArgs[aArgs.length] = 'Map='+oMap.name;
						else if(gMap)		aArgs[aArgs.length] = 'Map='+gMap;
						if(gZoom!=1)		aArgs[aArgs.length] = 'Zoom='+gZoom;
						if(gItemType)		aArgs[aArgs.length] = 'ItemType='+gItemType;
						if(gItemSubType)	aArgs[aArgs.length] = 'ItemSubType='+gItemSubType;
						if(gItemName)		aArgs[aArgs.length] = 'ItemName='+gItemName;
						if(gMonsterName)	aArgs[aArgs.length] = 'MonsterName='+gMonsterName;
						if(gMonsterLevel)	aArgs[aArgs.length] = 'MonsterLevel='+gMonsterLevel;
						if(gNPCName)		aArgs[aArgs.length] = 'NPCName='+gNPCName;
						if(gNPCVariant)		aArgs[aArgs.length] = 'NPCVariant='+gNPCVariant;
						if(aArgs.length == 0)	aArgs[aArgs.length] = 'DB';
						return ('index.html?' + aArgs.join('&') );
					};
	this.SelectItem		= function(sName,sType,sSubType){
						gItemType = sType;
						gItemSubType = sSubType;
						gItemName = sName;
						genOutput();
					};
	this.Debug		= function(bFlag){
						bDebug = bFlag;
					};
	this.Test		= function(bFlag){
						bTest = bFlag;
					};
	this.LocalFile		= function(bFlag){
						bLocalFile = bFlag;
					};
	this.CC			= function(bShow){
						bCC = bShow;
						genOutput();
					};
	this.MarkTypes		= function(bShow){
						bMarkTypes = bShow;
						genOutput();
					};
	this.ShowMaps		= function(bShow){
						gShowMaps = bShow;
						genOutput();
					};
	this.ShowItems		= function(bShow){
						gShowItems = bShow;
						genOutput();
					};
	this.ShowMonsters	= function(bShow){
						gShowMonsters = bShow;
						genOutput();
					};
	this.ShowNPCs		= function(bShow){
						gShowNPCs = bShow;
						genOutput();
					};
	this.ShowMonsterDrops	= function(bShow){
						gShowMonsterDrops = bShow;
						genOutput();
					};
	this.ShowMonsterMaps	= function(bShow){
						gShowMonsterMaps = bShow;
						genOutput();
					};
	this.ShowNPCItems	= function(bShow){
						gShowNPCItems = bShow;
						genOutput();
					};
	this.ShowNPCMaps	= function(bShow){
						gShowNPCMaps = bShow;
						genOutput();
					};
	this.SetZoom		= function(nZoom){
						gZoom = nZoom;
						genOutput();
					};
};
/***************************************************************************
		Prototype Functions for Exceptions.
***************************************************************************/

/* Selector Error Prototype	*/
/*
function SelectorError(sMsg){
	Error.apply(this,arguments);	// Base Constructor call.
	this.name = 'SelectorError';
	alert( (this instanceof Error) + this.message );
};
*/
/***************************************************************************
				Load Next file.
***************************************************************************/
LoadScript('js/Support.js');
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 28860;
