/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Arrows

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
	//	ItemType(nLevel, sName, sType, sSubType, sUseage, nAtk, nWeight, nValue, bStack, nMax, bDrop, sStrong, sWeak, sDesc, sRace)
	
	/*	Templates for easy adding
	Items.add( new ItemType(0, "", "Ammo", "Bow", "Invent", 2.90, 0.00, 0.10, true, 250, true, "Piercing", null, "A lightweight arrow.") );
	*/
	Items.add( new ItemType(0, "Wooden Arrow", "Ammo", "Bow", "Invent", 3.00, 0.00, 0.10, true, 250, true, "Piercing", null, "Placed in a bow as a projectile weapon, when aimed accurately may strategically derail an oncomming attack. Does Piercing damage.") );
	Items.add( new ItemType(0, "Blunted Wooden Arrow", "Ammo", "Bow", "Invent", 3.00, 0.00, 0.10, true, 250, true, "Bluntness", null, "Basic Arrow that does blunt Damage.") );
	Items.add( new ItemType(0, "Sharpend Wooden Arrow", "Ammo", "Bow", "Invent", 3.00, 0.00, 0.10, true, 250, true, "Sharpness", null, "Basic Arrow that does Sharp Damage.") );
	Items.add( new ItemType(10, "Acid Arrow", "Ammo", "Bow", "Invent", 10.00, 0.00, 0.20, true, 250, true, "Acid,Piercing", null, "A lightweight arrow does acid damage.") );
	Items.add( new ItemType(10, "Magical Arrow", "Ammo", "Bow", "Invent", 10.00, 0.00, 0.20, true, 250, true, "Piercing,Magical", null, "A lightweight arrow does magic damage.") );
	Items.add( new ItemType(10, "Water Arrow", "Ammo", "Bow", "Invent", 10.00, 0.00, 0.20, true, 250, true, "Water,Piercing", null, "A lightweight arrow.") );
	Items.add( new ItemType(11, "Iron Tipped Arrow", "Ammo", "Bow", "Invent", 2.90, 0.00, 4.50, true, 250, true, "Piercing", null, "A lightweight arrow does piercing damage.") );
	Items.add( new ItemType(11, "Iron Blunted Arrow", "Ammo", "Bow", "Invent", 2.90, 0.00, 4.50, true, 250, true, "Bluntness", null, "A lightweight arrow Does Blunt Damage.") );
	Items.add( new ItemType(11, "Iron Sharpened Arrow", "Ammo", "Bow", "Invent", 2.90, 0.00, 4.50, true, 250, true, "Sharpness", null, "A lightweight arrow.") );
	Items.add( new ItemType(11, "Steel Tipped Arrow", "Ammo", "Bow", "Invent", 2.90, 0.00, 10.00, true, 250, true, "Piercing", null, "A lightweight arrow with a Steel Tip.") );
	Items.add( new ItemType(25, "Steel Blunted Arrow", "Ammo", "Bow", "Invent", 2.90, 0.00, 10.00, true, 250, true, "Bluntness", null, "A lightweight arrow.") );
	Items.add( new ItemType(11, "Steel Sharpened Arrow", "Ammo", "Bow", "Invent", 2.90, 0.00, 10.00, true, 250, true, "Sharpness", null, "A lightweight arrow.") );
	Items.add( new ItemType(11, "Diamond Tipped Arrow", "Ammo", "Bow", "Invent", 2.90, 0.00, 20.00, true, 250, true, "Piercing", null, "A lightweight arrow tipped with a diamond for extra piercing damage.") );
	Items.add( new ItemType(11, "Diamond Blunted Arrow", "Ammo", "Bow", "Invent", 2.90, 0.00, 20.00, true, 250, true, "Bluntness", null, "A lightweight arrow.") );
	Items.add( new ItemType(11, "Diamond Sharpened Arrow", "Ammo", "Bow", "Invent", 2.90, 0.00, 20.00, true, 250, true, "Sharpness", null, "A lightweight arrow.") );
	Items.add( new ItemType(15, "Dark Arrow", "Ammo", "Bow", "Invent", 10.00, 0.00, 0.20, true, 250, true, "Dark,Piercing", null, "A lightweight arrow does Dark damage.") );
	Items.add( new ItemType(15, "Light Arrow", "Ammo", "Bow", "Invent", 10.00, 0.00, 0.20, true, 250, true, "Light,Piercing", null, "A lightweight arrow Does Light damage.") );
	Items.add( new ItemType(15, "Poison Arrow", "Ammo", "Bow", "Invent", 10.00, 0.00, 0.20, true, 250, true, "Poison,Piercing", null, "A lightweight arrow Does Poiosn damage.") );
	Items.add( new ItemType(20, "Energy Arrow", "Ammo", "Bow", "Invent", 10.00, 0.00, 0.20, true, 250, true, "Energy,Piercing", null, "A lightweight arrow Does Energy damage.") );
	Items.add( new ItemType(20, "Fire Arrow", "Ammo", "Bow", "Invent", 10.00, 0.00, 0.20, true, 250, true, "Fire,Piercing", null, "A lightweight arrow does Fire damage.") );
	Items.add( new ItemType(20, "Ice Arrow", "Ammo", "Bow", "Invent", 10.00, 0.00, 0.20, true, 250, true, "Ice,Piercing", null, "A lightweight arrow Does Ice damage.") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 5031;
