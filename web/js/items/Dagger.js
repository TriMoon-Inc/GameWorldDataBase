/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Dagger

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
	Items.add( new ItemType(0, "", "Weapon", "Dagger", "Any Hand", 0.0, 0.00, 0.00, false, 5, true, "Piercing", null, "") );
	*/
	Items.add( new ItemType(45, "Polar Clawed Katar", "Weapon", "Dagger", "Left Hand", 20.70, 0.45, 15750.00, false, 5, true, "Fire,Piercing", "Ice") );
	Items.add( new ItemType(60, "Poison Clawed Katar", "Weapon", "Dagger", "Any Hand", 27.20, 0.65, 21000.00, false, 5, true, "Poison,Piercing", null, "Which god doused this weapon with venom to inflict extra damage on their enemies?") );
	Items.add( new ItemType(65, "Dark Clawed Katar", "Weapon", "Dagger", "Any Hand", 29.40, 0.65, 22750.00, false, 5, true, "Light,Piercing", "Darkness") );
	Items.add( new ItemType(130, "Flaming Clawed Katar", "Weapon", "Dagger", "Any Hand", 57.90, 0.85, 45500.00, false, 5, true, "Ice,Piercing", "Fire") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2031;
