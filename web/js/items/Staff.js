/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Staff

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
	Items.add( new ItemType(0, "", "Weapon", "Staff", "Left Hand", 0.0, 0.00, 0.00, false, 5, true, "Bluntness", null, "") );
	*/
	Items.add( new ItemType(0, "Pine Wood Staff", "Weapon", "Staff", "Left Hand", 1.40, 0.25, 350.00, false, 5, true, "Bluntness", null, "This blunt staff will cause an additional 7 points damage to your opponents.") );
	Items.add( new ItemType(5, "Dead Wood Staff", "Weapon", "Staff", "Left Hand", 3.60, 0.25, 1750.00, false, 5, true, "Bluntness", null, "A blunt staff weapon that inflicts an extra 8.75 damage.") );
	Items.add( new ItemType(10, "Fine Oak Staff", "Weapon", "Staff", "Left Hand", 5.40, 0.40, 3500.00, false, 5, true, "Bluntness", null, "This staf will add to your enemy's damage.") );
	Items.add( new ItemType(15, "Willow Wood Staff", "Weapon", "Staff", "Left Hand", 7.60, 0.30, 5250.00, false, 5, true, "Bluntness", null, "This weapon for blunt damage will add 26.25 to your attack.") );
	Items.add( new ItemType(18, "Willow Wood Staff of Lesser Energy", "Weapon", "Staff", "Left Hand", 7.60, 0.30, 2625.00, false, 5, true, "Energy,Bluntness", null, "This weapon for blunt damage.") );
	Items.add( new ItemType(18, "Willow Wood Staff of Lesser Fire", "Weapon", "Staff", "Left Hand", 7.60, 0.30, 2625.00, false, 5, true, "Fire,Bluntness", null, "This weapon for blunt damage.") );
	Items.add( new ItemType(18, "Willow Wood Staff of Lesser Wind", "Weapon", "Staff", "Left Hand", 7.60, 0.30, 2625.00, false, 5, true, "Wind,Bluntness", null, "This weapon for blunt damage will add.") );
	Items.add( new ItemType(20, "Frail Wood Staff", "Weapon", "Staff", "Left Hand", 9.80, 0.55, 7000.00, false, 5, true, "Bluntness", null, "Staff given by Brax for quest.") );
	Items.add( new ItemType(25, "Walking Staff", "Weapon", "Staff", "Left Hand", 11.90, 0.55, 8750.00, false, 5, true, "Bluntness", null) );
	Items.add( new ItemType(30, "Ceremonial Staff", "Weapon", "Staff", "Left Hand", 14.10, 0.70, 10500.00, false, 5, true, "Bluntness", null) );
	Items.add( new ItemType(35, "Rugged Staff", "Weapon", "Staff", "Left Hand", 16.30, 0.70, 12250.00, false, 5, true, "Bluntness", null) );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3329;
