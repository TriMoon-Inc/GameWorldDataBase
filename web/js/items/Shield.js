/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Shield

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
	Items.add( new ItemType(0, "Shield", "Armor", "Shield", "Right Hand", 0.0, 0.12, 0.00, false, 5, true, "Piercing", null, "") );
	*/
	Items.add( new ItemType(0, "Wooden Shield", "Armor", "Shield", "Right Hand", 1.10, 0.12, 50.00, false, 5, true, "Piercing", null, "From the ancient wars on FreeWorld, this shield was the first defensive weapon created. A classic antique. It provides a .5 defense increase.") );
	Items.add( new ItemType(5, "Reinforced Wooden Shield", "Armor", "Shield", "Right Hand", 1.60, 0.01, 50.00, false, 5, true, "Piercing", null, "A reinforced Wooden Shield will add to your protection.") );
	Items.add( new ItemType(10, "&frac34; Leather Shield", "Armor", "Shield", "Right Hand", 2.20, 0.01, 750.00, false, 5, true, "Piercing", null) );
	Items.add( new ItemType(15, "Soft Leather Shield", "Armor", "Shield", "Right Hand", 2.90, 0.12, 2250.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(16, "Superior Wooden Shield", "Armor", "Shield", "Right Hand", 3.50, 0.01, 150.00, false, 5, true, "Piercing") );
	Items.add( new ItemType(18, "Soft Leather Shield of Lesser Ice", "Armor", "Shield", "Right Hand", 2.90, 0.12, 1125.00, false, 5, true, "Ice,Sharpness", "Fire") );
	Items.add( new ItemType(20, "Forest Leather Shield", "Armor", "Shield", "Right Hand", 3.50, 0.12, 3000.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(25, "Hard Leather Shield", "Armor", "Shield", "Right Hand", 4.10, 0.12, 3750.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(30, "Studded Leather Shield", "Armor", "Shield", "Right Hand", 4.80, 0.12, 4500.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(35, "Metal Shield", "Armor", "Shield", "Right Hand", 5.40, 0.12, 5250.00, false, 5, true, "Sharpness,Piercing", null, "A basic Metal Shield<br>Resists some physical attacks") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3056;
