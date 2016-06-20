/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Wand

	Contributed by:
	2005/01/21	TriMoon (Initial-data and awk script)
	2005/01/21	Liz&Cap (Dev.team item-info)
	2005/01/23	Auto-Generated using GNU awk
	2005/01/24	TriMoon (Hand Edited)

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
	Items.add( new ItemType(0, "", "Weapon", "Wand", "Left Hand", 0.0, 0.00, 0.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	*/
//	Note: Entries from CSV file are commented if different from ingame.
//	Blunt Wand
	Items.add( new ItemType(1, "Blunt Wand", "Weapon", "Wand", "Left Hand", 1.40, 0.08, 300.00, false, 5, true, "Bluntness,Magical", null, "A wand that shoots Blunt Wand Charges.") );
//	Items.add( new ItemType(1, "Blunt Wand", "Weapon", "Wand", "Left Hand", 1.4, 0.30, 150.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(8, "Greater Blunt Wand", "Weapon", "Wand", "Left Hand", 4.8, 0.30,  75.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(16, "Superior Blunt Wand", "Weapon", "Wand", "Left Hand", 8.5, 0.30,  75.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
//	Bladed Wand
	Items.add( new ItemType(1, "Bladed Wand", "Weapon", "Wand", "Left Hand", 1.40, 0.08, 300.00, false, 5, true, "Sharpness,Magical", null, "A wand that shoots Bladed Wand Charges.") );
//	Items.add( new ItemType(1, "Bladed Wand", "Weapon", "Wand", "Left Hand", 1.4, 0.30, 300.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(8, "Greater Bladed Wand", "Weapon", "Wand", "Left Hand", 4.80, 0.08, 150.00, false, 5, true, "Sharpness,Magical", null, "A wand that shoots Bladed Wand Charges.") );
//	Items.add( new ItemType(8, "Greater Bladed Wand", "Weapon", "Wand", "Left Hand", 4.8, 0.30, 150.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(16, "Superior Bladed Wand", "Weapon", "Wand", "Left Hand", 8.50, 0.08, 150.00, false, 5, true, "Sharpness,Magical", null, "A wand that shoots Bladed Wand Charges.") );
//	Items.add( new ItemType(16, "Superior Bladed Wand", "Weapon", "Wand", "Left Hand", 8.5, 0.30, 150.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
//	Piercing Wand
	Items.add( new ItemType(5, "Piercing Wand", "Weapon", "Wand", "Left Hand", 2.90, 0.08, 750.00, false, 5, true, "Piercing,Magical", null, "A wand that shoots Piercing Wand Charges.") );
//	Items.add( new ItemType(5, "Piercing Wand", "Weapon", "Wand", "Left Hand", 2.9, 0.30, 750.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(13, "Greater Piercing Wand", "Weapon", "Wand", "Left Hand", 6.60, 0.08, 375.00, false, 5, true, "Percing,Magical", null, "A wand that shoots Piercing Wand Charges.") );
//	Items.add( new ItemType(13, "Greater Piercing Wand", "Weapon", "Wand", "Left Hand", 6.6, 0.30, 375.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(21, "Superior Piercing Wand", "Weapon", "Wand", "Left Hand", 10.4, 0.30, 375.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
//	Crushing Wand
	Items.add( new ItemType(5, "Crushing Wand", "Weapon", "Wand", "Left Hand", 2.90, 0.08, 750.00, false, 5, true, "Crushing,Magical", null, "A wand that shoots Crushing Wand Charges.") );
//	Items.add( new ItemType(5, "Crushing Wand", "Weapon", "Wand", "Left Hand", 2.9, 0.30, 750.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(13, "Greater Crushing  Wand", "Weapon", "Wand", "Left Hand", 6.6, 0.30, 375.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(21, "Superior Crushing Wand", "Weapon", "Wand", "Left Hand", 10.4, 0.30, 375.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
//	Fire Ball Wand
	Items.add( new ItemType(10, "Fire Ball Wand", "Weapon", "Wand", "Left Hand", 4.80, 0.08, 1500.00, false, 5, true, "Fire,Magical", null, "Congratulations, you killed the Void Lord to obtain this item. Get charges for this weapon from his minions.") );
//	Items.add( new ItemType(10, "Fire Ball Wand", "Weapon", "Wand", "Left Hand", 4.8, 0.30, 1500.00, false, 5, true, "Fire,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(20, "Greater Fire Ball Wand", "Weapon", "Wand", "Left Hand", 30.0, 0.30, 237.50, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(30, "Superior Fire Ball Wand", "Weapon", "Wand", "Left Hand", 45.0, 0.30, 237.50, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(60, "Blunted Fireball Wand", "Weapon", "Wand", "Left Hand", 23.5, 0.31, 9000.00, false, 5, true, "Bluntness,Fire,Magical", null, "A wand that shoots ? Wand Charges.") );
//	Lightning Wand
	Items.add( new ItemType(15, "Lightning Wand", "Weapon", "Wand", "Left Hand", 6.60, 0.03, 25.00, false, 5, true, "Energy,Magical", "Poison,Acid", "Adds 70 to attack.<br>A wand that shoots Lightning Wand Charges.") );
//	Items.add( new ItemType(15, "Lightning Wand", "Weapon", "Wand", "Left Hand", 6.6, 0.30, 2250.00, false, 5, true, "Energy,Magical", "Poison,Acid", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(21, "Lightning Wand of Defense", "Weapon", "Wand", "Left Hand", 6.6, 0.30, 1125.00, false, 5, true, "Energy,Magical", "Poison,Acid", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(21, "Lightning Wand of Speed", "Weapon", "Wand", "Left Hand", 6.6, 0.30, 1125.00, false, 5, true, "Energy,Magical", "Poison,Acid", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(21, "Lightning Wand of Wisdom", "Weapon", "Wand", "Left Hand", 6.6, 0.30, 1125.00, false, 5, true, "Energy,Magical", "Poison,Acid", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(23, "Greater Lightning Wand", "Weapon", "Wand", "Left Hand", 10.4, 0.30, 1125.00, false, 5, true, "Energy,Magical", "Poison,Acid", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(31, "Superior Lighting Wand", "Weapon", "Wand", "Left Hand", 14.1, 0.30, 1125.00, false, 5, true, "Energy,Magical", "Poison,Acid", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(65, "Bladed Lightning Wand", "Weapon", "Wand", "Left Hand", 25.4, 0.31, 9750.00, false, 5, true, "Sharpness,Energy,Magical", null, "A wand that shoots ? Wand Charges.") );
//	Water Wand
	Items.add( new ItemType(25, "Water Wand", "Weapon", "Wand", "Left Hand", 10.40, 0.30, 3750.00, false, 5, true, "Water,Magical", "Wind", "A wand that shoots Water Wand Charges.") );
//	Items.add( new ItemType(25, "Water Wand", "Weapon", "Wand", "Left Hand", 10.4, 0.30, 3750.00, false, 5, true, "Water,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(33, "Water Wand of Defense", "Weapon", "Wand", "Left Hand", 10.4, 0.30, 1875.00, false, 5, true, "Water,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(33, "Water Wand of Speed", "Weapon", "Wand", "Left Hand", 10.4, 0.30, 1875.00, false, 5, true, "Water,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(33, "Water Wand of Wisdom", "Weapon", "Wand", "Left Hand", 10.4, 0.30, 1875.00, false, 5, true, "Water,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(35, "Greater Water Wand", "Weapon", "Wand", "Left Hand", 14.1, 0.30, 1875.00, false, 5, true, "Water,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(45, "Superior Water Wand", "Weapon", "Wand", "Left Hand", 17.9, 0.30, 1875.00, false, 5, true, "Water,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(80, "Crushing Water Wand", "Weapon", "Wand", "Left Hand", 31.0, 0.31, 12000.00, false, 5, true, "Crushing,Water,Magical", null, "A wand that shoots ? Wand Charges.") );
//	Ice Wand
	Items.add( new ItemType(30, "Ice Wand", "Weapon", "Wand", "Left Hand", 8.50, 0.03, 50.00, false, 5, true, "", null, "Adds 140 to attack.<br>A wand that shoots Ice Wand Charges.") );
//	Items.add( new ItemType(20, "Ice Wand", "Weapon", "Wand", "Left Hand", 8.5, 0.30, 3000.00, false, 5, true, "Ice,Magical", "Fire,Crushing", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(28, "Greater Ice Wand", "Weapon", "Wand", "Left Hand", 12.2, 0.30, 1500.00, false, 5, true, "Ice,Magical", "Fire,Crushing", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(28, "Ice Wand of Health", "Weapon", "Wand", "Left Hand", 8.5, 0.30, 1500.00, false, 5, true, "Ice,Magical", "Fire,Crushing", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(28, "Ice Wand of Health Regen", "Weapon", "Wand", "Left Hand", 8.5, 0.30, 1500.00, false, 5, true, "Ice,Magical", "Fire,Crushing", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(28, "Ice Wand of Strength", "Weapon", "Wand", "Left Hand", 8.5, 0.30, 1500.00, false, 5, true, "Ice,Magical", "Fire,Crushing", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(36, "Superior Ice Wand", "Weapon", "Wand", "Left Hand", 16.0, 0.30, 1500.00, false, 5, true, "Ice,Magical", "Fire,Crushing", "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(70, "Piercing Ice Wand", "Weapon", "Wand", "Left Hand", 27.3, 0.31, 10500.00, false, 5, true, "Piercing,Ice,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(105, "Blunted Ice Wand", "Weapon", "Wand", "Left Hand", 40.4, 0.32, 15750.00, false, 5, true, "Bluntness,Ice,Magical", null, "A wand that shoots ? Wand Charges.") );
//	Tornado Wand
	Items.add( new ItemType(30, "Tornado Wand", "Weapon", "Wand", "Left Hand", 12.20, 0.30, 4500.00, false, 5, true, "Wind,Magical", null, "A wand that shoots Tornado Wand Charges.") );
//	Items.add( new ItemType(30, "Tornado Wand", "Weapon", "Wand", "Left Hand", 12.3, 0.30, 4500.00, false, 5, true, "Wind,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(38, "Greater Tornado Wand", "Weapon", "Wand", "Left Hand", 16.0, 0.30, 2250.00, false, 5, true, "Wind,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(38, "Tornado Wand of Health", "Weapon", "Wand", "Left Hand", 12.2, 0.30, 2250.00, false, 5, true, "Wind,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(38, "Tornado Wand of Health Regen", "Weapon", "Wand", "Left Hand", 12.2, 0.30, 2250.00, false, 5, true, "Wind,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(38, "Tornado Wand of Strength", "Weapon", "Wand", "Left Hand", 12.2, 0.30, 2250.00, false, 5, true, "Wind,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(46, "Superior Tornado Wand", "Weapon", "Wand", "Left Hand", 19.8, 0.30, 2250.00, false, 5, true, "Wind,Magical", null, "A wand that shoots ? Wand Charges.") );
//	Poison Wand
	Items.add( new ItemType(35, "Poison Wand", "Weapon", "Wand", "Left Hand", 14.10, 0.03, 5250.00, false, 5, true, "Poison,Magical", null, "A wand that shoots Poison Wand Charges.") );
//	Items.add( new ItemType(35, "Poison Wand", "Weapon", "Wand", "Left Hand", 14.1, 0.30, 5250.00, false, 5, true, "Poison,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(85, "Whirling Poison Wand", "Weapon", "Wand", "Left Hand", 32.9, 0.31, 12750.00, false, 5, true, "Wind,Poison,Magical", null, "A wand that shoots ? Wand Charges.") );
//	Acidic Wand
	Items.add( new ItemType(40, "Acidic Wand", "Weapon", "Wand", "Left Hand", 16.0, 0.03, 6000.00, false, 5, true, "Acid", null) );
//	Items.add( new ItemType(40, "Acidic Wand", "Weapon", "Wand", "Left Hand", 16.0, 0.30, 6000.00, false, 5, true, "Acid,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(75, "Bladed Acidic Wand", "Weapon", "Wand", "Left Hand", 29.1, 0.31, 11250.00, false, 5, true, "Sharpness,Acid,Magical", null, "A wand that shoots ? Wand Charges.") );
//	Dirt Wand
	Items.add( new ItemType(45, "Dirt Wand", "Weapon", "Wand", "Left Hand", 17.9, 0.03, 6750.00, false, 5, true, "Earth", null) );
//	Items.add( new ItemType(45, "Dirt Wand", "Weapon", "Wand", "Left Hand", 17.9, 0.30, 6750.00, false, 5, true, "Earth,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(100, "Whirling Dirt Wand", "Weapon", "Wand", "Left Hand", 38.5, 0.31, 15000.00, false, 5, true, "Wind,Dirt,Magical", null, "A wand that shoots ? Wand Charges.") );
//	Dark Wand
	Items.add( new ItemType(50, "Dark Wand", "Weapon", "Wand", "Left Hand", 19.8, 0.03, 7500.00, false, 5, true, "Darkness", null) );
//	Items.add( new ItemType(50, "Dark Wand", "Weapon", "Wand", "Left Hand", 19.8, 0.31, 7500.00, false, 5, true, "Darkness,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(95, "Crushing Dark Wand", "Weapon", "Wand", "Left Hand", 36.6, 0.31, 14250.00, false, 5, true, "Crushing,Darkness,Magical", null, "A wand that shoots ? Wand Charges.") );
//	Light Wand
	Items.add( new ItemType(55, "Light Wand", "Weapon", "Wand", "Left Hand", 21.6, 0.03, 8250.00, false, 5, true, "Light", null) );
//	Items.add( new ItemType(55, "Light Wand", "Weapon", "Wand", "Left Hand", 21.6, 0.31, 8250.00, false, 5, true, "Light,Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(90, "Piercing Light Wand", "Weapon", "Wand", "Left Hand", 34.8, 0.31, 13500.00, false, 5, true, "Piercing,Light,Magical", null, "A wand that shoots ? Wand Charges.") );
//	NoName
	Items.add( new ItemType(110, "", "Weapon", "Wand", "Left Hand", 42.3, 0.00, 16500.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(115, "", "Weapon", "Wand", "Left Hand", 44.1, 0.00, 17250.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(120, "", "Weapon", "Wand", "Left Hand", 46.0, 0.00, 18000.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(125, "", "Weapon", "Wand", "Left Hand", 47.9, 0.00, 18750.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(130, "", "Weapon", "Wand", "Left Hand", 49.8, 0.00, 19500.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(135, "", "Weapon", "Wand", "Left Hand", 51.6, 0.00, 20250.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(140, "", "Weapon", "Wand", "Left Hand", 53.5, 0.00, 21000.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(145, "", "Weapon", "Wand", "Left Hand", 55.4, 0.00, 21750.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(150, "", "Weapon", "Wand", "Left Hand", 57.3, 0.00, 22500.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(155, "", "Weapon", "Wand", "Left Hand", 59.1, 0.00, 23250.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(160, "", "Weapon", "Wand", "Left Hand", 61.0, 0.00, 24000.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(165, "", "Weapon", "Wand", "Left Hand", 62.9, 0.00, 24750.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(170, "", "Weapon", "Wand", "Left Hand", 64.8, 0.00, 25500.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(175, "", "Weapon", "Wand", "Left Hand", 66.6, 0.00, 26250.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(180, "", "Weapon", "Wand", "Left Hand", 68.5, 0.00, 27000.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(185, "", "Weapon", "Wand", "Left Hand", 70.4, 0.00, 27750.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(190, "", "Weapon", "Wand", "Left Hand", 72.3, 0.00, 28500.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(195, "", "Weapon", "Wand", "Left Hand", 74.1, 0.00, 29250.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(200, "", "Weapon", "Wand", "Left Hand", 76.0, 0.00, 30000.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(205, "", "Weapon", "Wand", "Left Hand", 77.9, 0.00, 30750.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(210, "", "Weapon", "Wand", "Left Hand", 79.8, 0.00, 31500.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(215, "", "Weapon", "Wand", "Left Hand", 81.6, 0.00, 32250.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(220, "", "Weapon", "Wand", "Left Hand", 83.5, 0.00, 33000.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(225, "", "Weapon", "Wand", "Left Hand", 85.4, 0.00, 33750.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(230, "", "Weapon", "Wand", "Left Hand", 87.3, 0.00, 34500.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(235, "", "Weapon", "Wand", "Left Hand", 89.1, 0.00, 35250.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(240, "", "Weapon", "Wand", "Left Hand", 91.0, 0.00, 36000.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(245, "", "Weapon", "Wand", "Left Hand", 92.9, 0.00, 36750.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
	Items.add( new ItemType(250, "", "Weapon", "Wand", "Left Hand", 94.8, 0.00, 37500.00, false, 5, true, "Magical", null, "A wand that shoots ? Wand Charges.") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 19537;
