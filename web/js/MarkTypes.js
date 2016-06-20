/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	MarkTypes

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
				Exception handling.
***************************************************************************/
try{
/***************************************************************************
				Fill MarkTypes
***************************************************************************/
	MarkTypes = new MarkType("MarkTypes");
	MarkTypes.add("NPC");
	MarkTypes.get().add("Vendor");
	MarkTypes.get().get().add("Ammo",null,1);
	MarkTypes.get().get().add("Armor",null,1);
	MarkTypes.get().get().add("Food",null,1);
	MarkTypes.get().get().add("Magic",null,1);
	MarkTypes.get().get().get().add("Dark","MagicDark",1);
	MarkTypes.get().get().get().add("Life","MagicLife",1);
	MarkTypes.get().get().get().add("Light","MagicLight",1);
	MarkTypes.get().get().get().add("War","MagicWar",1);
	MarkTypes.get().get().add("Maps");
	MarkTypes.get().get().add("Misc",null,1);
	MarkTypes.get().get().add("Pets","NpcVendorPets");
	MarkTypes.get().get().get().add("Chicken","NpcVendorPets",1);
	MarkTypes.get().get().get().add("Cow","NpcVendorPets",1);
	MarkTypes.get().get().get().add("Demon","NpcVendorPets",1);
	MarkTypes.get().get().get().add("Gagga","NpcVendorPets",1);
	MarkTypes.get().get().get().add("Hellhound","NpcVendorPets",1);
	MarkTypes.get().get().get().add("Henchmen","NpcVendorPets",1);
	MarkTypes.get().get().get().add("Horse","NpcVendorPets",1);
	MarkTypes.get().get().get().add("Nightmare","NpcVendorPets",1);
	MarkTypes.get().get().get().add("Pig","NpcVendorPets",1);
	MarkTypes.get().get().get().add("Spider","NpcVendorPets",1);
	MarkTypes.get().get().get().add("WarHorse","NpcVendorPets",1);
	MarkTypes.get().get().add("Weapon",null,1);
	MarkTypes.get().add("Pet Trainer","NpcVendorPets",-1);
	MarkTypes.get().add("Bank","Bank",-1);
	MarkTypes.get().add("Quest","NpcQuest",1);
	MarkTypes.get().add("Repair",null,1);
	MarkTypes.get().add("Portal",null,1);
	MarkTypes.get().add("Monster",null,1);
	MarkTypes.add("Map");
	MarkTypes.get().add("Building","Hut",-1,1);
	MarkTypes.get().get().add("City","City",-1,-1);
	MarkTypes.get().get().add("Village","Village",-1,-1);
	MarkTypes.get().get().add("Castle","Castle",-1,1);
	MarkTypes.get().get().add("Hut","Hut",-1,1);
	MarkTypes.get().get().add("Tower","Hut",-1,1);
	MarkTypes.get().get().add("Church","Hut",-1,1);
	MarkTypes.get().get().add("WaterPut",null,1);
	MarkTypes.get().add("Portal","Portal");
	MarkTypes.get().get().add("Regen",null,-1);
	MarkTypes.get().get().add("Planet","PortalPlanet",-1);
	MarkTypes.get().get().add("Map","PortalMap",-1);
	MarkTypes.get().get().add("Cave","Portal",-1);
	MarkTypes.add("Nr");
	MarkTypes.get().add("Purple");
	MarkTypes.get().get().add("?");
	MarkTypes.get().get().add("1","p1");
	MarkTypes.get().get().add("2","p2");
	MarkTypes.get().get().add("3","p3");
	MarkTypes.get().get().add("4","p4");
	MarkTypes.get().get().add("5","p5");
	MarkTypes.get().get().add("6","p6");
	MarkTypes.get().get().add("7","p7");
	MarkTypes.get().get().add("8","p8");
	MarkTypes.get().get().add("9","p9");
	MarkTypes.get().get().add("10","p10");
/***************************************************************************
				Exception handling.
***************************************************************************/
}
catch(e){
	ShowException(e);
}
/***************************************************************************
				Load Next file.
***************************************************************************/
LoadScript('js/Planets.js');
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 3980;
