/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Bow

	Contributed by:
	2005/01/21	TriMoon (Initial-data and awk script)
	2005/01/21	Liz&Cap (Dev.team item-info)
	2005/01/21	Auto-Generated using GNU awk
	2005/01/23	TriMoon (Hand Edited)

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
	Items.add( new ItemType(0, "", "Weapon", "Bow", "Left Hand", 0.0, 0.00, 0.00, false, 5, true, null, null, "") );
	*/
	Items.add( new ItemType(1, "Short Bow", "Weapon", "Bow", "Left Hand", 1.6, 0.03, 150.00, false, 5, true, null, null, "This weapon of old may help stop your enemies when you can spot them coming from a distance. Aim well, my friend.") );
	Items.add( new ItemType(5, "Worn Beginner's Bow", "Weapon", "Bow", "Left Hand", 5.8, 0.30, 750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(8, "Greater Short Bow", "Weapon", "Bow", "Left Hand", 7.2, 0.03,  75.00, false, 5, true, null, null, "This weapon of old may help stop your enemies when you can spot them coming from a distance. Aim well, my friend.") );
	Items.add( new ItemType(10, "Long Bow", "Weapon", "Bow", "Left Hand", 7.2, 0.45, 1500.00, false, 5, true, null, null, "Humans made this bow for attacking from a distance.") );
	Items.add( new ItemType(13, "Greater Worn Beginner's Bow", "Weapon", "Bow", "Left Hand", 10.4, 0.30, 375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(15, "Cursed Defense Oak Long Bow", "Weapon", "Bow", "Left Hand", 10.4, 0.45, 1125.00, false, 5, true, null, null, "-3.7Def, +13.3Atk") );
	Items.add( new ItemType(15, "Cursed Jump Oak Long Bow", "Weapon", "Bow", "Left Hand", 10.4, 0.45, 1125.00, false, 5, true, null, null, "-0.16Jump") );
	Items.add( new ItemType(15, "Cursed Speed Oak Long Bow", "Weapon", "Bow", "Left Hand", 10.4, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(15, "Oak Long Bow", "Weapon", "Bow", "Left Hand", 10.4, 0.45, 2250.00, false, 5, true, null, null, "Humans made long bow that will add 22.5 points damage to your attack.") );
	Items.add( new ItemType(16, "Superior Short Bow", "Weapon", "Bow", "Left Hand", 13.5, 0.03,  75.00, false, 5, true, null, null, "This weapon from old may help stop your enemies when you can spot them comming from a distance. Aim well my friend.") );
	Items.add( new ItemType(18, "Greater Long Bow", "Weapon", "Bow", "Left Hand", 13.5, 0.45, 750.00, false, 5, true, null, null, "Humans made this bow for attacking from a distance.") );
	Items.add( new ItemType(20, "Cursed Forest Bow of Greater Earth", "Weapon", "Bow", "Left Hand", 13.5, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(20, "Cursed Forest Bow of Greater Poison", "Weapon", "Bow", "Left Hand", 13.5, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(20, "Cursed Forest Bow of Wind", "Weapon", "Bow", "Left Hand", 13.5, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(20, "Forest Bow", "Weapon", "Bow", "Left Hand", 13.5, 0.60, 3000.00, false, 5, true, null, null, "Elven bow that adds to attack.") );
	Items.add( new ItemType(21, "Superior Worn Beginner's Bow", "Weapon", "Bow", "Left Hand", 16.6, 0.30, 375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(23, "Greater Oak Long Bow", "Weapon", "Bow", "Left Hand", 16.6, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(23, "Oak Long Bow of Defense", "Weapon", "Bow", "Left Hand", 10.4, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(23, "Oak Long Bow of Run", "Weapon", "Bow", "Left Hand", 10.4, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(23, "Oak Long Bow of Jump", "Weapon", "Bow", "Left Hand", 10.4, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(25, "Archer's Bow", "Weapon", "Bow", "Left Hand", 16.6, 0.60, 3750.00, false, 5, true, null, null, "A bow for the slightly skilled archer.") );
	Items.add( new ItemType(25, "Cursed Defense Archer's Bow", "Weapon", "Bow", "Left Hand", 16.6, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(25, "Cursed Speed Archer's Bow", "Weapon", "Bow", "Left Hand", 16.6, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(25, "Cursed Turn Archer's Bow", "Weapon", "Bow", "Left Hand", 16.6, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(26, "Superior Long Bow", "Weapon", "Bow", "Left Hand", 18.5, 0.45, 750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(28, "Greater Forest Bow", "Weapon", "Bow", "Left Hand", 18.5, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(28, "Forest Bow of Strength", "Weapon", "Bow", "Left Hand", 13.5, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(28, "Forest Bow of Health", "Weapon", "Bow", "Left Hand", 13.5, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(28, "Forest Bow of HP Regen", "Weapon", "Bow", "Left Hand", 13.5, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(30, "Cursed Rock Bow of Greater Ice", "Weapon", "Bow", "Left Hand", 19.8, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(30, "Cursed Rock Bow of Superior Acid", "Weapon", "Bow", "Left Hand", 19.8, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(30, "Cursed Rock Bow of Superior Energy", "Weapon", "Bow", "Left Hand", 19.8, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(30, "Rock Bow", "Weapon", "Bow", "Left Hand", 19.8, 0.75, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(31, "Superior Oak Long Bow", "Weapon", "Bow", "Left Hand", 19.8, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(33, "Archer's Bow of Defense", "Weapon", "Bow", "Left Hand", 16.6, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(33, "Archer's Bow of Jump", "Weapon", "Bow", "Left Hand", 16.6, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(33, "Archer's Bow of Run", "Weapon", "Bow", "Left Hand", 16.6, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(33, "Greater Archer's Bow", "Weapon", "Bow", "Left Hand", 22.9, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(35, "Cursed Moon Bow of Defense", "Weapon", "Bow", "Left Hand", 22.9, 0.75, 2625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(35, "Cursed Moon Bow of Jump", "Weapon", "Bow", "Left Hand", 22.9, 0.75, 2625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(35, "Cursed Moon Bow of Run", "Weapon", "Bow", "Left Hand", 22.9, 0.75, 2625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(35, "Moon Bow", "Weapon", "Bow", "Left Hand", 22.9, 0.75, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(36, "Superior Forest Bow", "Weapon", "Bow", "Left Hand", 23.5, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Greater Rock Bow", "Weapon", "Bow", "Left Hand", 24.8, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Moon Bow of Defense", "Weapon", "Bow", "Left Hand", 22.9, 0.75, 2625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Moon Bow of Jump", "Weapon", "Bow", "Left Hand", 22.9, 0.75, 2625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Moon Bow of Run", "Weapon", "Bow", "Left Hand", 22.9, 0.75, 2625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Rock Bow Health", "Weapon", "Bow", "Left Hand", 19.8, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Rock Bow of HP Regen", "Weapon", "Bow", "Left Hand", 19.8, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Rock Bow of Strength", "Weapon", "Bow", "Left Hand", 19.8, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(40, "Cursed Emerald Bow of Health", "Weapon", "Bow", "Left Hand", 26.0, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(40, "Cursed Emerald Bow of HP Regen", "Weapon", "Bow", "Left Hand", 26.0, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(40, "Cursed Emerald Bow of Strength", "Weapon", "Bow", "Left Hand", 26.0, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(40, "Emerald Bow", "Weapon", "Bow", "Left Hand", 26.0, 0.90, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(41, "Superior Archer's Bow", "Weapon", "Bow", "Left Hand", 29.1, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(43, "Emerald Bow of Health ", "Weapon", "Bow", "Left Hand", 26.0, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(43, "Emerald Bow of HP Regen", "Weapon", "Bow", "Left Hand", 26.0, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(43, "Emerald Bow of Strength", "Weapon", "Bow", "Left Hand", 26.0, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(43, "Greater Moon Bow", "Weapon", "Bow", "Left Hand", 29.1, 0.75, 2625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(45, "Cursed Long Blood Bow of Defense", "Weapon", "Bow", "Left Hand", 29.1, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(45, "Cursed Long Blood Bow of Jump", "Weapon", "Bow", "Left Hand", 29.1, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(45, "Cursed Long Blood Bow of Run", "Weapon", "Bow", "Left Hand", 29.1, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(45, "Long Blood Bow", "Weapon", "Bow", "Left Hand", 29.1, 0.90, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(46, "Superior Rock Bow", "Weapon", "Bow", "Left Hand", 29.8, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(48, "Greater Emerald Bow", "Weapon", "Bow", "Left Hand", 32.2, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(48, "Long Blood Bow of Defense", "Weapon", "Bow", "Left Hand", 29.1, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(48, "Long Blood Bow of Run", "Weapon", "Bow", "Left Hand", 29.1, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(48, "Long Blood Bow of Jump", "Weapon", "Bow", "Left Hand", 29.1, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(50, "Assassin Bow", "Weapon", "Bow", "Left Hand", 32.2, 1.05, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(50, "Cursed Assassin Bow of Health", "Weapon", "Bow", "Left Hand", 32.2, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(50, "Cursed Assassin Bow of HP Regen", "Weapon", "Bow", "Left Hand", 32.2, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(50, "Cursed Assassin Bow of Strength", "Weapon", "Bow", "Left Hand", 32.2, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(51, "Superior Moon Bow", "Weapon", "Bow", "Left Hand", 35.4, 0.75, 2625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(53, "Assassin Bow of Health", "Weapon", "Bow", "Left Hand", 32.2, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(53, "Assassin Bow of HP Regen", "Weapon", "Bow", "Left Hand", 32.2, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(53, "Assassin Bow of Strength", "Weapon", "Bow", "Left Hand", 32.2, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(53, "Greater Long Blood Bow", "Weapon", "Bow", "Left Hand", 35.4, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(55, "Cursed Royal Bow of Defense", "Weapon", "Bow", "Left Hand", 35.4, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(55, "Cursed Royal Bow of Jump", "Weapon", "Bow", "Left Hand", 35.4, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(55, "Cursed Royal Bow of Run", "Weapon", "Bow", "Left Hand", 35.4, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(55, "Royal Bow", "Weapon", "Bow", "Left Hand", 35.4, 1.05, 8250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(56, "Superior Emerald Bow", "Weapon", "Bow", "Left Hand", 38.5, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(58, "Greater Assassin Bow", "Weapon", "Bow", "Left Hand", 38.5, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(58, "Royal Bow of Defense", "Weapon", "Bow", "Left Hand", 35.4, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(58, "Royal Bow of Jump", "Weapon", "Bow", "Left Hand", 35.4, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(58, "Royal Bow of Run", "Weapon", "Bow", "Left Hand", 35.4, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(60, "Cursed Shadow Bow of Health", "Weapon", "Bow", "Left Hand", 38.5, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(60, "Cursed Shadow Bow of HP Regen", "Weapon", "Bow", "Left Hand", 38.5, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(60, "Cursed Shadow Bow of Strength", "Weapon", "Bow", "Left Hand", 38.5, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(60, "Shadow Bow", "Weapon", "Bow", "Left Hand", 38.5, 1.20, 9000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(61, "Superior Long Blood Bow", "Weapon", "Bow", "Left Hand", 41.6, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(63, "Greater Royal Bow", "Weapon", "Bow", "Left Hand", 41.6, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(63, "Shadow Bow of Health", "Weapon", "Bow", "Left Hand", 38.5, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(63, "Shadow Bow of HP Regen", "Weapon", "Bow", "Left Hand", 38.5, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(63, "Shadow Bow of Strength", "Weapon", "Bow", "Left Hand", 38.5, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(65, "Cursed Ruby Bow of Defense", "Weapon", "Bow", "Left Hand", 41.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(65, "Cursed Ruby Bow of Jump", "Weapon", "Bow", "Left Hand", 41.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(65, "Cursed Ruby Bow of Run", "Weapon", "Bow", "Left Hand", 41.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(65, "Ruby Bow", "Weapon", "Bow", "Left Hand", 41.6, 1.20, 9750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(66, "Superior Assassin Bow", "Weapon", "Bow", "Left Hand", 44.8, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(68, "Greater Shadow Bow", "Weapon", "Bow", "Left Hand", 44.8, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(68, "Ruby Bow of Defense", "Weapon", "Bow", "Left Hand", 41.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(68, "Ruby Bow of Jump", "Weapon", "Bow", "Left Hand", 41.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(68, "Ruby Bow of Run", "Weapon", "Bow", "Left Hand", 41.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(70, "Cursed Green Elven Long Bow of Health", "Weapon", "Bow", "Left Hand", 44.8, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(70, "Cursed Green Elven Long Bow of HP Regen", "Weapon", "Bow", "Left Hand", 44.8, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(70, "Cursed Green Elven Long Bow of Strength", "Weapon", "Bow", "Left Hand", 44.8, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(70, "Green Elven Long Bow", "Weapon", "Bow", "Left Hand", 44.8, 1.35, 10500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(71, "Superior Royal Bow", "Weapon", "Bow", "Left Hand", 47.9, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(73, "Greater Ruby Bow", "Weapon", "Bow", "Left Hand", 49.7, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(73, "Green Elven Long Bow of Health", "Weapon", "Bow", "Left Hand", 44.8, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(73, "Green Elven Long Bow of HP Regen", "Weapon", "Bow", "Left Hand", 44.8, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(73, "Green Elven Long Bow of Strength", "Weapon", "Bow", "Left Hand", 44.8, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(75, "Cursed Spirit Bow of Defense", "Weapon", "Bow", "Left Hand", 47.9, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(75, "Cursed Spirit Bow of Jump", "Weapon", "Bow", "Left Hand", 47.9, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(75, "Cursed Spirit Bow of Run", "Weapon", "Bow", "Left Hand", 47.9, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(75, "Spirit Bow", "Weapon", "Bow", "Left Hand", 47.9, 1.35, 11250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(76, "Superior Shadow Bow", "Weapon", "Bow", "Left Hand", 51.0, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(78, "Greater Green Elven Long Bow", "Weapon", "Bow", "Left Hand", 51.0, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(78, "Spirit Bow of Defense", "Weapon", "Bow", "Left Hand", 47.9, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(78, "Spirit Bow of Jump", "Weapon", "Bow", "Left Hand", 47.9, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(78, "Spirit Bow of Run", "Weapon", "Bow", "Left Hand", 47.9, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(80, "Cursed Knights Bow of Health", "Weapon", "Bow", "Left Hand", 51.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(80, "Cursed Knights Bow of HP Regen", "Weapon", "Bow", "Left Hand", 51.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(80, "Cursed Knights Bow of Strength", "Weapon", "Bow", "Left Hand", 51.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(80, "Knights Bow", "Weapon", "Bow", "Left Hand", 51.0, 1.50, 12000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(81, "Superior Ruby Bow", "Weapon", "Bow", "Left Hand", 54.1, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(83, "Greater Spirit Bow", "Weapon", "Bow", "Left Hand", 54.1, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(83, "Knights Bow of Health", "Weapon", "Bow", "Left Hand", 51.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(83, "Knights Bow of HP Regen", "Weapon", "Bow", "Left Hand", 51.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(83, "Knights Bow of Strength", "Weapon", "Bow", "Left Hand", 51.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(85, "Cursed Iron Bow of Defense", "Weapon", "Bow", "Left Hand", 54.1, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(85, "Cursed Iron Bow of Jump", "Weapon", "Bow", "Left Hand", 54.1, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(85, "Cursed Iron Bow of Run", "Weapon", "Bow", "Left Hand", 54.1, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(85, "Iron Bow", "Weapon", "Bow", "Left Hand", 54.1, 1.50, 12750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(86, "Superior Green Elven Long Bow", "Weapon", "Bow", "Left Hand", 57.2, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(88, "Greater Knights Bow", "Weapon", "Bow", "Left Hand", 57.2, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(88, "Iron Bow of Defense", "Weapon", "Bow", "Left Hand", 54.1, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(88, "Iron Bow of Jump", "Weapon", "Bow", "Left Hand", 54.1, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(88, "Iron Bow of Run", "Weapon", "Bow", "Left Hand", 54.1, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(90, "Cursed Gold Elven Long Bow of Health", "Weapon", "Bow", "Left Hand", 57.2, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(90, "Cursed Gold Elven Long Bow of HP Regen", "Weapon", "Bow", "Left Hand", 57.2, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(90, "Cursed Gold Elven Long Bow of Strength", "Weapon", "Bow", "Left Hand", 57.2, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(90, "Gold Elven Long Bow", "Weapon", "Bow", "Left Hand", 57.2, 1.65, 13500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(91, "Superior Spirit Bow", "Weapon", "Bow", "Left Hand", 60.4, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(93, "Gold Elven Long Bow of Health", "Weapon", "Bow", "Left Hand", 57.2, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(93, "Gold Elven Long Bow of HP Regen", "Weapon", "Bow", "Left Hand", 57.2, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(93, "Gold Elven Long Bow of Strength", "Weapon", "Bow", "Left Hand", 57.2, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(93, "Greater Iron Bow", "Weapon", "Bow", "Left Hand", 60.4, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(95, "Copper Bow", "Weapon", "Bow", "Left Hand", 60.4, 1.65, 14250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(95, "Cursed Copper Bow of Defense", "Weapon", "Bow", "Left Hand", 60.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(95, "Cursed Copper Bow of Jump", "Weapon", "Bow", "Left Hand", 60.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(95, "Cursed Copper Bow of Run", "Weapon", "Bow", "Left Hand", 60.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(96, "Superior Knights Bow", "Weapon", "Bow", "Left Hand", 63.5, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(98, "Copper Bow of Defense", "Weapon", "Bow", "Left Hand", 60.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(98, "Copper Bow of Jump", "Weapon", "Bow", "Left Hand", 60.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(98, "Copper Bow of Run", "Weapon", "Bow", "Left Hand", 60.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(98, "Greater Gold Elven Long Bow", "Weapon", "Bow", "Left Hand", 63.5, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(100, "Cursed Royal Elven Bow of Health", "Weapon", "Bow", "Left Hand", 63.5, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(100, "Cursed Royal Elven Bow of HP Regen", "Weapon", "Bow", "Left Hand", 63.5, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(100, "Cursed Royal Elven Bow of Strength", "Weapon", "Bow", "Left Hand", 63.5, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(100, "Royal Elven Bow", "Weapon", "Bow", "Left Hand", 63.5, 1.80, 15000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(101, "Superior Iron Bow", "Weapon", "Bow", "Left Hand", 66.6, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(103, "Greater Copper Bow", "Weapon", "Bow", "Left Hand", 66.6, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(103, "Royal Elven Bow of Health", "Weapon", "Bow", "Left Hand", 63.5, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(103, "Royal Elven Bow of HP Regen", "Weapon", "Bow", "Left Hand", 63.5, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(103, "Royal Elven Bow of Strength", "Weapon", "Bow", "Left Hand", 63.5, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(105, "Void Long Bow", "Weapon", "Bow", "Left Hand", 66.6, 1.80, 15750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(106, "Superior Gold Elven Long Bow", "Weapon", "Bow", "Left Hand", 69.8, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(108, "Greater Royal Elven Bow", "Weapon", "Bow", "Left Hand", 69.8, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(110, "Void Short Bow", "Weapon", "Bow", "Left Hand", 69.8, 1.95, 16500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(111, "Superior Copper Bow", "Weapon", "Bow", "Left Hand", 72.9, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(115, "True strike Bow", "Weapon", "Bow", "Left Hand", 73.0, 1.95, 17250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(116, "Superior Royal Elven Bow", "Weapon", "Bow", "Left Hand", 76.0, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(120, "Puzzled Bow", "Weapon", "Bow", "Left Hand", 76.2, 2.10, 18000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(125, "Hardened Bow", "Weapon", "Bow", "Left Hand", 79.4, 2.10, 18750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(130, "Slayers Bow", "Weapon", "Bow", "Left Hand", 82.6, 2.25, 19500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(135, "Deaths Bow", "Weapon", "Bow", "Left Hand", 85.8, 2.25, 20250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(140, "Eye Poker", "Weapon", "Bow", "Left Hand", 89.0, 2.40, 21000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(145, "Weird Bow", "Weapon", "Bow", "Left Hand", 92.2, 2.40, 21750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(150, "grissled Bow", "Weapon", "Bow", "Left Hand", 95.4, 2.55, 22500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(155, "Bear Bow", "Weapon", "Bow", "Left Hand", 98.6, 2.55, 23250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(160, "Soul Bow", "Weapon", "Bow", "Left Hand", 101.8, 2.70, 24000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(165, "Snow Bow", "Weapon", "Bow", "Left Hand", 105.0, 2.70, 24750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(170, "Spectrum Bow", "Weapon", "Bow", "Left Hand", 108.2, 2.85, 25500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(175, "Mystic Bow", "Weapon", "Bow", "Left Hand", 111.4, 2.85, 26250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(180, "the Unnamed Bow", "Weapon", "Bow", "Left Hand", 114.6, 3.00, 27000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(185, "Pipe Bow", "Weapon", "Bow", "Left Hand", 117.8, 3.00, 27750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(190, "Drecks Bow", "Weapon", "Bow", "Left Hand", 121.0, 3.15, 28500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(195, "Generals Bow", "Weapon", "Bow", "Left Hand", 124.2, 3.15, 29250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(200, "Dirty Bow", "Weapon", "Bow", "Left Hand", 127.4, 3.30, 30000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(205, "Gudters Bow", "Weapon", "Bow", "Left Hand", 130.6, 3.30, 30750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(210, "Flight Bow", "Weapon", "Bow", "Left Hand", 133.8, 3.45, 31500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(215, "Vibrating bow", "Weapon", "Bow", "Left Hand", 137.0, 3.45, 32250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(220, "Falcon Bow", "Weapon", "Bow", "Left Hand", 140.2, 3.60, 33000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(225, "Eagle Bow", "Weapon", "Bow", "Left Hand", 143.4, 3.60, 33750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(230, "Aroans Bow", "Weapon", "Bow", "Left Hand", 146.6, 3.75, 34500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(235, "Tear Bow", "Weapon", "Bow", "Left Hand", 149.8, 3.75, 35250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(240, "The forgotten Bow", "Weapon", "Bow", "Left Hand", 153.0, 3.90, 36000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(245, "Champion's bow", "Weapon", "Bow", "Left Hand", 156.2, 3.90, 36750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(250, "titanium bow", "Weapon", "Bow", "Left Hand", 159.4, 4.05, 37500.00, false, 5, true, null, null, "") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 30241;
