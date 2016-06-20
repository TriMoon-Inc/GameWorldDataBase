/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Polearms

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
	Items.add( new ItemType(0, "", "Weapon", "Pole arm", "Left Hand", 0.0, 0.00, 0.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
	*/
	Items.add( new ItemType(0, "Wooden Spontoon", "Weapon", "Pole arm", "Left Hand", 1.60, 1.25, 250.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(5, "Tarnished Halbert", "Weapon", "Pole arm", "Left Hand", 4.10, 0.80, 1250.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(10, "Rusted Pitchfork", "Weapon", "Pole arm", "Left Hand", 7.20, 0.10, 2500.00, false, 5, true, "Sharpness,Piercing", null, "This pitchfork weapon adds to attack.") );
	Items.add( new ItemType(13, "Greater Tarnished Halbert") );
	Items.add( new ItemType(15, "Worn Halbert", "Weapon", "Pole arm", "Left Hand", 10.40, 1.05, 3750.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(15, "Cursed Worn Halbert of Greater Wind", "Weapon", "Pole arm", "Left Hand", 10.40, 1.05, 1875.00, false, 5, true, "Wind,Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(20, "Old Trident", "Weapon", "Pole arm", "Left Hand", 13.50, 1.00, 5000.00, false, 5, true, "Sharpness,Piercing", null, "This pitchfork weapon adds to attack.") );
	Items.add( new ItemType(25, "PitchFork", "Weapon", "Pole arm", "Left Hand", 16.60, 1.00, 6250.00, false, 5, true, "Sharpness,Piercing", null, "This pitchfork weapon adds to attack.") );
	Items.add( new ItemType(30, "Corroded Spontoon", "Weapon", "Pole arm", "Left Hand", 19.80, 1.25, 7500.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(35, "Rusted Ranseur", "Weapon", "Pole arm", "Left Hand", 22.90, 1.25, 8750.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(80, "Bill Hook", "Weapon", "Pole arm", "Left Hand", 51.00, 2.80, 20000.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(85, "Bardiche", "Weapon", "Pole arm", "Left Hand", 54.10, 2.80, 21250.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(93, "Golden Spontoon of Lesser Earth", "Weapon", "Pole arm", "Left Hand", 57.20, 3.05, 11250.00, false, 5, true, "Earth,Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(95, "Reinforced Trident", "Weapon", "Pole arm", "Left Hand", 60.40, 3.05, 23750.00, false, 5, true, "Sharpness,Piercing", null, "This pitchfork weapon adds to your attack.") );
	Items.add( new ItemType(100, "Royal Halbert", "Weapon", "Pole arm", "Left Hand", 63.50, 3.30, 25000.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(105, "Vouge", "Weapon", "Pole arm", "Left Hand", 66.60, 3.30, 26250.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
	Items.add( new ItemType(110, "Knight's Bardiche", "Weapon", "Pole arm", "Left Hand", 69.80, 3.55, 27500.00, false, 5, true, "Sharpness,Piercing", null, "This pole arm adds to attack.") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 4463;
