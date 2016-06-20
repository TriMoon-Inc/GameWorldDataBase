/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Armor

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
	Items.add( new ItemType(0, "", "Armor", null, "", 0.0, 0.00, 0.00, false, 5, true, "", null, "") );
	*/
	Items.add( new ItemType(0, "Fur Armor Arms", "Armor", null, "Arms", 1.10, 0.11, 135.00, false, 5, true, "Sharpness", null, "Fur Armour Arms old and worn.......but provides some protection. Adds to defence. Triderian only armour", "Triderian") );
	Items.add( new ItemType(0, "Fur Armor Boots", "Armor", null, "Boots", 1.10, 0.10, 135.00, false, 5, true, "Sharpness", null, "Fur Armour Boots old and worn.......but provides some protection. Adds to defence. Triderian only armour", "Triderian") );
	Items.add( new ItemType(0, "Fur Armor Chest", "Armor", null, "Chest", 1.20, 0.17, 180.00, false, 5, true, "Sharpness", null, "Chest Fur Armour old and worn.......but provides some protection. Triderian only armour", "Triderian") );
	Items.add( new ItemType(0, "Fur Armor Legs", "Armor", null, "Legs", 1.10, 0.11, 150.00, false, 5, true, "Sharpness", null, "Fur Armour old and worn.......but provides some protection. Triderian only armour", "Triderian") );
	Items.add( new ItemType(0, "Patched Old Leather Arms", "Armor", null, "Arms", 1.10, 0.11, 135.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(0, "Patched Old Leather Boots", "Armor", null, "Boots", 1.10, 0.10, 135.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(0, "Patched Old Leather Chest", "Armor", null, "Chest", 1.20, 0.17, 180.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(0, "Patched Old Leather Legs", "Armor", null, "Legs", 1.10, 0.11, 150.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(5, "Half Leather Arms", "Armor", null, "Arms", 1.60, 0.23, 675.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(5, "Half Leather Boots", "Armor", null, "Boots", 1.60, 0.20, 675.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(5, "Half Leather Chest", "Armor", null, "Chest", 1.80, 0.34, 900.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(5, "Half Leather Legs", "Armor", null, "Legs", 1.60, 0.23, 750.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(10, "&frac34; Leather Arms", "Armor", null, "Arms", 2.10, 0.36, 1350.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(10, "&frac34; Leather Boots", "Armor", null, "Boots", 2.10, 0.28, 1350.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(10, "&frac34; Leather Chest", "Armor", null, "Chest", 2.50, 0.38, 1800.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(10, "&frac34; Leather Legs", "Armor", null, "Legs", 2.20, 0.32, 1500.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(15, "Full Soft Leather Arms", "Armor", null, "Arms", 2.70, 0.46, 2025.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(15, "Full Soft Leather Boots", "Armor", null, "Boots", 2.70, 0.40, 2025.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(15, "Full Soft Leather Chest", "Armor", null, "Chest", 3.20, 0.68, 2700.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(15, "Full Soft Leather Legs", "Armor", null, "Legs", 2.90, 0.46, 2250.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(20, "Forest Leather Armor") );
	Items.add( new ItemType(25, "Full Hard Leather Arms", "Armor", null, "Arms", 3.80, 0.69, 3375.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(25, "Full Hard Leather Boots", "Armor", null, "Boots", 3.80, 0.60, 3375.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(25, "Full Hard Leather Chest", "Armor", null, "Chest", 4.80, 1.02, 4500.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(25, "Full Hard Leather Legs", "Armor", null, "Legs", 4.10, 0.69, 3750.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(30, "Studded Leather Arms", "Armor", null, "Arms", 4.40, 0.92, 4050.00, false, 5, true, null, null) );
	Items.add( new ItemType(30, "Studded Leather Boots", "Armor", null, "Boots", 4.40, 0.80, 4050.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(30, "Studded Leather Chest", "Armor", null, "Chest", 5.50, 1.36, 5400.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(30, "Studded Leather Legs", "Armor", null, "Legs", 4.80, 0.92, 4500.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(35, "Old Chain Arms", "Armor", null, "Arms", 4.90, 2.02, 4725.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(35, "Old Chain Boots", "Armor", null, "Boots", 4.90, 0.92, 4725.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(35, "Old Chain Chest", "Armor", null, "Chest", 5.40, 1.36, 5250.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(35, "Old Chain Legs", "Armor", null, "Legs", 5.40, 0.82, 5250.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(40, "Chain Mail Arms (blue and black)", "Armor", null, "Arms", 5.50, 0.95, 5400.00, false, 5, true, "Sharpness,Piercing", null, "Human workmanship at its best.") );
	Items.add( new ItemType(40, "Chain Mail Legs (blue)", "Armor", null, "Legs", 6.00, 0.95, 6000.00, false, 5, true, "Sharpness,Piercing", null, "Fine chain leg armour.") );
	Items.add( new ItemType(40, "Chain Mail Arms (Purple and Black)", "Armor", null, "Arms", 5.50, 0.95, 5400.00, false, 5, true, "Sharpness,Piercing", null, "Human workmanship at its best.") );
	Items.add( new ItemType(40, "Chain Mail Boots (purple)", "Armor", null, "Boots", 5.50, 0.80, 5400.00, false, 5, true, "Sharpness,Piercing", null, "Look out for someone wearing these boots crafted by humans.") );
	Items.add( new ItemType(40, "Chain Mail Legs (Purple)", "Armor", null, "Legs", 6.00, 0.95, 6000.00, false, 5, true, "Sharpness,Piercing", null, "Human workmanship at its best.") );
	Items.add( new ItemType(50, "Blood Chain Mail Arms", "Armor", null, "Arms", 6.60, 1.10, 6750.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(50, "Blood Chain Mail Boots", "Armor", null, "Boots", 6.60, 1.05, 6750.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(50, "Blood Chain Mail Chest", "Armor", null, "Chest", 8.50, 1.45, 9000.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(50, "Blood Chain Mail Legs", "Armor", null, "Legs", 7.20, 1.10, 7500.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(55, "Holy Chain Mail Arms", "Armor", null, "Arms", 7.20, 1.21, 7425.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(55, "Holy Chain Mail Boots", "Armor", null, "Boots", 7.20, 1.12, 7425.00, false, 5, true, "Piercing,Crushing", null) );
	Items.add( new ItemType(55, "Holy Chain Mail Chest", "Armor", null, "Chest", 9.20, 1.55, 9900.00, false, 5, true, "Piercing,Crushing", null) );
	Items.add( new ItemType(55, "Holy Chain Mail Legs", "Armor", null, "Legs", 7.90, 1.21, 8250.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(60, "Royal Chain Armour Arms", "Armor", null, "Arms", 7.80, 1.32, 8100.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(60, "Royal Chain Armour Boots", "Armor", null, "Boots", 7.80, 1.23, 8100.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(60, "Royal Chain Armour Chest", "Armor", null, "Chest", 10.00, 1.61, 10800.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(60, "Royal Chain Armour Legs", "Armor", null, "Legs", 8.50, 1.32, 9000.00, false, 5, true, "Sharpness,Piercing", null) );
	Items.add( new ItemType(65, "Scale Arms", "Armor", null, "Arms", 8.30, 1.30, 8775.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(65, "Scale Boots", "Armor", null, "Boots", 8.30, 1.10, 8775.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(65, "Scale Chest", "Armor", null, "Chest", 10.80, 1.60, 11700.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(65, "Scale Legs", "Armor", null, "Legs", 9.10, 1.30, 9750.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(75, "Green Elven Scale Arms", "Armor", null, "Arms", 9.40, 1.55, 10125.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(75, "Green Elven Scale Boots", "Armor", null, "Boots", 9.40, 1.30, 10125.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(75, "Green Elven Scale Chest", "Armor", null, "Chest", 12.20, 1.84, 13500.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(75, "Green Elven Scale Legs", "Armor", null, "Legs", 10.40, 1.51, 11250.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(80, "Blood Arms", "Armor", null, "Arms", 5.50, 0.85, 5400.00, false, 5, true, "Bluntness,Sharpness,Piercing", null, "Forged from Elven blood is this special armour, to be gotten from someone\"drowning their sorrows\".") );
	Items.add( new ItemType(80, "Blood Boots", "Armor", null, "Boots", 10.0, 1.51, 10800.00, false, 5, true, "Bluntness,Sharpness,Piercing", null, "Forged from Elven blood is this special armour, to be gotten from someone\"drowning their sorrows\".") );
	Items.add( new ItemType(80, "Blood Chest", "Armor", null, "Chest", 13.0, 1.60, 14400.00, false, 5, true, "Bluntness,Sharpness,Piercing", null, "Forged from Elven blood is this special armour, to be gotten from someone\"drowning their sorrows\".") );
	Items.add( new ItemType(80, "Blood Legs", "Armor", null, "Legs", 11.0, 1.54, 12000.00, false, 5, true, "Bluntness,Sharpness,Piercing", null, "Forged from Elven blood is this special armour, to be gotten from someone\"drowning their sorrows\".") );
	Items.add( new ItemType(85, "Blue Elven Scale Arms", "Armor", null, "Arms", 10.60, 1.72, 11475.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(85, "Blue Elven Scale Boots", "Armor", null, "Boots", 10.80, 1.41, 11475.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(85, "Blue Elven Scale Chest", "Armor", null, "Chest", 13.80, 1.91, 15300.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(85, "Blue Elven Scale Legs", "Armor", null, "Legs", 11.60, 1.85, 12750.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(90, "Gold Elven Scale Arms", "Armor", null, "Arms", 11.10, 1.80, 12150.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(90, "Gold Elven Scale Boots", "Armor", null, "Boots", 11.10, 1.80, 12150.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(90, "Gold Elven Scale Chest", "Armor", null, "Chest", 14.50, 1.95, 16200.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(90, "Gold Elven Scale Legs", "Armor", null, "Legs", 12.20, 1.70, 13500.00, false, 5, true, "Bluntness,Sharpness,Piercing", null) );
	Items.add( new ItemType(100, "Old Plate and Chain Arms", "Armor", null, "Arms", 12.20, 1.75, 13500.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(100, "Old Plate and Chain Boots", "Armor", null, "Boots", 12.20, 1.70, 13500.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(100, "Old Plate and Chain Chest", "Armor", null, "Chest", 16.00, 2.00, 18000.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(100, "Old Plate and Chain Leg Armour", "Armor", null, "Legs", 13.50, 1.75, 15000.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(105, "Plate and Chain Arms", "Armor", null, "Arms", 12.80, 1.82, 14175.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(105, "Plate and Chain Boots", "Armor", null, "Boots", 12.80, 1.72, 14175.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(105, "Plate and Chain Chest", "Armor", null, "Chest", 16.80, 2.12, 18900.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(105, "Plate and Chain Legs", "Armor", null, "Legs", 0.00, 0.00, 0.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(120, "Black Double Steel Chest", "Armor", null, "Chest", 19.0, 2.52, 21600.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null, "Human workmanship at its best.") );
	Items.add( new ItemType(155, "Heavy Plate Arms", "Armor", null, "Arms", 18.40, 2.51, 20925.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(155, "Heavy Plate Boots", "Armor", null, "Boots", 18.40, 2.48, 20925.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(155, "Heavy Plate Chest", "Armor", null, "Chest", 24.20, 3.00, 27900.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(155, "Heavy Plate Legs", "Armor", null, "Legs", 20.40, 2.51, 23250.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(230, "Champion&acute;s Leg Armour", "Armor", null, "Legs", 29.80, 1.75, 34500.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(0, "Blue Blaze Armor") );
	Items.add( new ItemType(0, "Golden Plate Armor") );
	Items.add( new ItemType(0, "Green Blaze Armor") );
	Items.add( new ItemType(0, "Steel Armor") );
	Items.add( new ItemType(0, "Sturdy Chainmail Armor") );
	Items.add( new ItemType(0, "Tempered Full Plate Armor") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 15045;
