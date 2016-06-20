/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Bolt

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
				Exception handling.
***************************************************************************/
try{
/***************************************************************************
				Fill ItemTypes
***************************************************************************/
	//	ItemType(nLevel, sName, sType, sSubType, sUsa, nAtk, nWeight, nValue, bStack, nMax, bDrop, sStrong, sWeak, sDesc, sRace)
	
	/*	Templates for easy adding
	Items.add( new ItemType(0, "", "Ammo", "Crossbow", "Invent", 3.50, 0.00, 0.00, true, 250, true, "Piercing", null, "A lightweight Bolt.") );
	*/
	Items.add( new ItemType(0, "Wooden Bolt", "Ammo", "Crossbow", "Invent", 3.5, 0.00, 0.15, true, 250, true, "Piercing", null, "A lightweight bolt.") );
	Items.add( new ItemType(0, "Iron Tipped Bolt", "Ammo", "Crossbow", "Invent", 3.50, 0.00, 5.50, true, 250, true, "Piercing", null, "A lightweight Bolt.") );
	Items.add( new ItemType(0, "Steel Tipped Bolt", "Ammo", "Crossbow", "Invent", 3.50, 0.00, 17.00, true, 250, true, "Piercing", null, "A lightweight Bolt.") );
	Items.add( new ItemType(0, "Diamond Tipped Bolt", "Ammo", "Crossbow", "Invent", 3.50, 0.00, 28.00, true, 250, true, "Piercing", null, "A lightweight Bolt.") );
	Items.add( new ItemType(0, "Blunted Wooden Bolt", "Ammo", "Crossbow", "Invent", 3.50, 0.00, 0.15, true, 250, true, "Bluntness", null, "A lightweight Bolt.") );
	Items.add( new ItemType(0, "Iron Blunted Bolt", "Ammo", "Crossbow", "Invent", 3.50, 0.00, 5.50, true, 250, true, "Bluntness", null, "A lightweight Bolt.") );
	Items.add( new ItemType(0, "Steel Blunted Bolt", "Ammo", "Crossbow", "Invent", 3.50, 0.00, 17.00, true, 250, true, "Bluntness", null, "A lightweight Bolt.") );
	Items.add( new ItemType(0, "Diamond Blunted Bolt", "Ammo", "Crossbow", "Invent", 3.50, 0.00, 28.00, true, 250, true, "Bluntness", null, "Bolt.") );
	Items.add( new ItemType(0, "Sharpened Wooden Bolt", "Ammo", "Crossbow", "Invent", 3.5, 0.00, 0.15, true, 250, true, "Sharpness", null, "A lightweight bolt.") );
	Items.add( new ItemType(0, "Iron Sharpened Bolt", "Ammo", "Crossbow", "Invent", 3.50, 0.00, 5.50, true, 250, true, "Sharpness", null, "A lightweight Bolt.") );
	Items.add( new ItemType(0, "Steel Sharpened Bolt", "Ammo", "Crossbow", "Invent", 3.50, 0.00, 17.00, true, 250, true, "Sharpness", null, "A lightweight Bolt.") );
/***************************************************************************
				Exception handling.
***************************************************************************/
}
catch(e){
	ShowException(e);
}
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 3091;
