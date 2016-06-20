/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: CrossBow

	Contributed by:
	2005/01/21	TriMoon (Initial-data and awk script)
	2005/01/21	Liz&Cap (Dev.team item-info)
	2005/01/22	Auto-Generated using GNU awk
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
	Items.add( new ItemType(0, "", "Weapon", "CrossBow", "Right Hand", 0.0, 0.00, 0.00, false, 5, true, null, null, "") );
	*/
	Items.add( new ItemType(1, "Beginner's Crossbow", "Weapon", "CrossBow", "Right Hand", 1.6, 0.03, 225.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(5, "Worn Crossbow", "Weapon", "CrossBow", "Right Hand", 3.8, 0.30, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(8, "Greater Beginner's Crossbow", "Weapon", "CrossBow", "Right Hand", 6.6, 0.03,  75.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(10, "Crossbow", "Weapon", "CrossBow", "Right Hand", 6.6, 0.45, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(13, "Greater Worn Crossbow", "Weapon", "CrossBow", "Right Hand", 9.4, 0.30, 375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(15, "Cursed Defense King Dave's Crossbow", "Weapon", "CrossBow", "Right Hand", 9.4, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(15, "Cursed Jump King Dave's Crossbow", "Weapon", "CrossBow", "Right Hand", 9.4, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(15, "Cursed Speed King Dave's Crossbow", "Weapon", "CrossBow", "Right Hand", 9.4, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(15, "King Dave's Crossbow", "Weapon", "CrossBow", "Right Hand", 9.4, 0.45, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(16, "Superior Beginner's Crossbow", "Weapon", "CrossBow", "Right Hand", 12.3, 0.03,  75.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(18, "Greater Crossbow", "Weapon", "CrossBow", "Right Hand", 12.3, 0.45, 750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(20, "Cursed Pine Crossbow of Greater Earth", "Weapon", "CrossBow", "Right Hand", 12.3, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(20, "Cursed Pine Crossbow of Greater Poison", "Weapon", "CrossBow", "Right Hand", 12.3, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(20, "Cursed Pine Crossbow of Wind", "Weapon", "CrossBow", "Right Hand", 12.3, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(20, "Pine Crossbow", "Weapon", "CrossBow", "Right Hand", 12.3, 0.60, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(21, "Superior Worn Crossbow", "Weapon", "CrossBow", "Right Hand", 15.1, 0.30, 375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(23, "Greater King Dave's Crossbow", "Weapon", "CrossBow", "Right Hand", 15.1, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(23, "King Dave's Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 9.4, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(23, "King Dave's Crossbow of HP Delay", "Weapon", "CrossBow", "Right Hand", 9.4, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(23, "King Dave's Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 9.4, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(25, "Archer's Crossbow", "Weapon", "CrossBow", "Right Hand", 15.1, 0.60, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(25, "Cursed Defense Archer's Crossbow", "Weapon", "CrossBow", "Right Hand", 15.1, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(25, "Cursed Speed Archer's Crossbow", "Weapon", "CrossBow", "Right Hand", 15.1, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(25, "Cursed Turn Archer's Crossbow", "Weapon", "CrossBow", "Right Hand", 15.1, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(26, "Superior Crossbow", "Weapon", "CrossBow", "Right Hand", 17.9, 0.45, 750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(28, "Greater Pine Crossbow", "Weapon", "CrossBow", "Right Hand", 17.9, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(28, "Pine Crosshow of Health", "Weapon", "CrossBow", "Right Hand", 12.3, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(28, "Pine Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 12.3, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(28, "Pine Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 12.3, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(30, "Cursed Light Wood Crossbow of Greater Ice", "Weapon", "CrossBow", "Right Hand", 17.9, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(30, "Cursed Light Wood Crossbow of Superior Acid", "Weapon", "CrossBow", "Right Hand", 17.9, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(30, "Cursed Light Wood Crossbow of Superior Energy", "Weapon", "CrossBow", "Right Hand", 17.9, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(30, "Light Wood Crossbow", "Weapon", "CrossBow", "Right Hand", 17.9, 0.75, 1787.50, false, 5, true, null, null, "") );
	Items.add( new ItemType(31, "Superior King Dave's Crossbow", "Weapon", "CrossBow", "Right Hand", 20.7, 0.45, 1125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(33, "Archer's Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 15.1, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(33, "Archer's Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 15.1, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(33, "Archer's Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 15.1, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(33, "Greater Archer's Crossbow", "Weapon", "CrossBow", "Right Hand", 20.7, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(35, "Cursed Moon Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 20.7, 0.75, 3937.50, false, 5, true, null, null, "") );
	Items.add( new ItemType(35, "Cursed Moon Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 20.7, 0.75, 3937.50, false, 5, true, null, null, "") );
	Items.add( new ItemType(35, "Cursed Moon Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 20.7, 0.75, 3937.50, false, 5, true, null, null, "") );
	Items.add( new ItemType(35, "Moon Crossbow", "Weapon", "CrossBow", "Right Hand", 20.7, 0.75, 7875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(36, "Superior Pine Crossbow", "Weapon", "CrossBow", "Right Hand", 23.5, 0.60, 1500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Greater Light Wood Crossbow", "Weapon", "CrossBow", "Right Hand", 23.5, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Light Wood Crossbow Health", "Weapon", "CrossBow", "Right Hand", 17.9, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Light Wood Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 17.9, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Light Wood Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 17.9, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Moon Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 20.7, 0.75, 3937.50, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Moon Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 20.7, 0.75, 3937.50, false, 5, true, null, null, "") );
	Items.add( new ItemType(38, "Moon Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 20.7, 0.75, 3937.50, false, 5, true, null, null, "") );
	Items.add( new ItemType(40, "Cursed Emerald Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 23.5, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(40, "Cursed Emerald Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 23.5, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(40, "Cursed Emerald Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 23.5, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(40, "Emerald Crossbow", "Weapon", "CrossBow", "Right Hand", 23.5, 0.90, 9000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(41, "Superior Archer's Crossbow", "Weapon", "CrossBow", "Right Hand", 26.3, 0.60, 1875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(43, "Greater Moon Crossbow", "Weapon", "CrossBow", "Right Hand", 26.3, 0.75, 3937.50, false, 5, true, null, null, "") );
	Items.add( new ItemType(43, "Emerald Crossbow of Health ", "Weapon", "CrossBow", "Right Hand", 23.5, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(43, "Emerald Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 23.5, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(43, "Emerald Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 23.5, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(45, "Blood Crossbow", "Weapon", "CrossBow", "Right Hand", 26.3, 0.90, 10125.00, false, 5, true, null, null, "Triderian made long bow.") );
	Items.add( new ItemType(45, "Cursed Blood Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 26.3, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(45, "Cursed Blood Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 26.3, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(45, "Cursed Blood Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 26.3, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(46, "Superior Light Wood Crossbow", "Weapon", "CrossBow", "Right Hand", 29.1, 0.75, 2250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(48, "Blood Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 26.3, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(48, "Blood Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 26.3, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(48, "Blood Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 26.3, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(48, "Greater Emerald Crossbow", "Weapon", "CrossBow", "Right Hand", 29.1, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(50, "Assassin Crossbow", "Weapon", "CrossBow", "Right Hand", 29.1, 1.05, 11250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(50, "Cursed Assassin Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 29.1, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(50, "Cursed Assassin Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 29.1, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(50, "Cursed Assassin Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 29.1, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(51, "Superior Moon Crossbow", "Weapon", "CrossBow", "Right Hand", 31.9, 0.75, 3937.50, false, 5, true, null, null, "") );
	Items.add( new ItemType(53, "Assassin Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 29.1, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(53, "Assassin Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 29.1, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(53, "Assassin Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 29.1, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(53, "Greater Blood Crossbow", "Weapon", "CrossBow", "Right Hand", 31.9, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(55, "Cursed Royal Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 31.9, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(55, "Cursed Royal Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 31.9, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(55, "Cursed Royal Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 31.9, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(55, "Royal Crossbow", "Weapon", "CrossBow", "Right Hand", 31.9, 1.05, 12375.00, false, 5, true, null, null, "Human made bow may prove useful.") );
	Items.add( new ItemType(56, "Superior Emerald Crossbow", "Weapon", "CrossBow", "Right Hand", 34.8, 0.90, 3000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(58, "Greater Assassin Crossbow", "Weapon", "CrossBow", "Right Hand", 34.8, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(58, "Royal Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 31.9, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(58, "Royal Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 31.9, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(58, "Royal Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 31.9, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(60, "Cursed Shadow Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 34.8, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(60, "Cursed Shadow Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 34.8, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(60, "Cursed Shadow Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 34.8, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(60, "Shadow Crossbow", "Weapon", "CrossBow", "Right Hand", 34.8, 1.20, 13500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(61, "Superior Blood Crossbow", "Weapon", "CrossBow", "Right Hand", 37.6, 0.90, 3375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(63, "Greater Royal Crossbow", "Weapon", "CrossBow", "Right Hand", 37.6, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(63, "Shadow Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 34.8, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(63, "Shadow Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 34.8, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(63, "Shadow Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 34.8, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(65, "Cursed Ruby Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 37.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(65, "Cursed Ruby Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 37.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(65, "Cursed Ruby Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 37.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(65, "Ruby Crossbow", "Weapon", "CrossBow", "Right Hand", 37.6, 1.20, 14675.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(66, "Superior Assassin Crossbow", "Weapon", "CrossBow", "Right Hand", 40.4, 1.05, 3750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(68, "Greater Shadow Crossbow", "Weapon", "CrossBow", "Right Hand", 40.4, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(68, "Ruby Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 37.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(68, "Ruby Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 37.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(68, "Ruby Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 37.6, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(70, "Cursed Green Elven Long Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 40.4, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(70, "Cursed Green Elven Long Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 40.4, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(70, "Cursed Green Elven Long Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 40.4, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(70, "Green Elven Long Crossbow", "Weapon", "CrossBow", "Right Hand", 40.4, 1.35, 15750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(71, "Superior Royal Crossbow", "Weapon", "CrossBow", "Right Hand", 43.2, 1.05, 4125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(73, "Greater Ruby Crossbow", "Weapon", "CrossBow", "Right Hand", 43.2, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(73, "Green Elven Long Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 40.4, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(73, "Green Elven Long Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 40.4, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(73, "Green Elven Long Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 40.4, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(75, "Cursed Spirit Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 43.2, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(75, "Cursed Spirit Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 43.2, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(75, "Cursed Spirit Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 43.2, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(75, "Spirit Crossbow", "Weapon", "CrossBow", "Right Hand", 43.2, 1.35, 16875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(76, "Superior Shadow Crossbow", "Weapon", "CrossBow", "Right Hand", 46.0, 1.20, 4500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(78, "Greater Green Elven Long Crossbow", "Weapon", "CrossBow", "Right Hand", 46.0, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(78, "Spirit Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 43.2, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(78, "Spirit Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 43.2, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(78, "Spirit Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 43.2, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(80, "Cursed Knights Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 46.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(80, "Cursed Knights Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 46.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(80, "Cursed Knights Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 46.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(80, "Knights Crossbow", "Weapon", "CrossBow", "Right Hand", 46.0, 1.50, 18000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(81, "Superior Ruby Crossbow", "Weapon", "CrossBow", "Right Hand", 48.8, 1.20, 4875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(83, "Greater Spirit Crossbow", "Weapon", "CrossBow", "Right Hand", 48.8, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(83, "Knights Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 46.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(83, "Knights Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 46.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(83, "Knights Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 46.0, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(85, "Cursed Iron Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 48.8, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(85, "Cursed Iron Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 48.8, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(85, "Cursed Iron Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 48.8, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(85, "Iron Crossbow", "Weapon", "CrossBow", "Right Hand", 48.8, 1.50, 19125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(86, "Superior Green Elven Long Crossbow", "Weapon", "CrossBow", "Right Hand", 51.6, 1.35, 5250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(88, "Greater Knights Crossbow", "Weapon", "CrossBow", "Right Hand", 51.6, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(88, "Iron Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 48.8, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(88, "Iron Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 48.8, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(88, "Iron Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 48.8, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(90, "Cursed Gold Elven Long Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 51.6, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(90, "Cursed Gold Elven Long Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 51.6, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(90, "Cursed Gold Elven Long Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 51.6, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(90, "Gold Elven Long Crossbow", "Weapon", "CrossBow", "Right Hand", 51.6, 1.65, 20250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(91, "Superior Spirit Crossbow", "Weapon", "CrossBow", "Right Hand", 54.4, 1.35, 5625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(93, "Gold Elven Long Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 51.6, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(93, "Gold Elven Long Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 51.6, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(93, "Gold Elven Long Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 51.6, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(93, "Greater Iron Crossbow", "Weapon", "CrossBow", "Right Hand", 54.4, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(95, "Copper Crossbow", "Weapon", "CrossBow", "Right Hand", 54.4, 1.65, 21375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(95, "Cursed Copper Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 54.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(95, "Cursed Copper Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 54.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(95, "Cursed Copper Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 54.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(96, "Superior Knights Crossbow", "Weapon", "CrossBow", "Right Hand", 57.3, 1.50, 6000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(98, "Copper Crossbow of Defense", "Weapon", "CrossBow", "Right Hand", 54.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(98, "Copper Crossbow of Jump", "Weapon", "CrossBow", "Right Hand", 54.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(98, "Copper Crossbow of Run", "Weapon", "CrossBow", "Right Hand", 54.4, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(98, "Greater Gold Elven Long Crossbow", "Weapon", "CrossBow", "Right Hand", 57.3, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(100, "Cursed Royal Elven Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 57.3, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(100, "Cursed Royal Elven Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 57.3, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(100, "Cursed Royal Elven Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 57.3, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(100, "Royal Elven Crossbow", "Weapon", "CrossBow", "Right Hand", 57.3, 1.80, 22500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(101, "Superior Iron Crossbow", "Weapon", "CrossBow", "Right Hand", 60.1, 1.50, 6375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(103, "Greater Copper Crossbow", "Weapon", "CrossBow", "Right Hand", 60.1, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(103, "Royal Elven Crossbow of Health", "Weapon", "CrossBow", "Right Hand", 57.3, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(103, "Royal Elven Crossbow of HP Regen", "Weapon", "CrossBow", "Right Hand", 57.3, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(103, "Royal Elven Crossbow of Strength", "Weapon", "CrossBow", "Right Hand", 57.3, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(105, "Void Crossbow/needs work/item # 1938", "Weapon", "CrossBow", "Right Hand", 60.1, 1.80, 23625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(106, "Superior Gold Elven Long Crossbow", "Weapon", "CrossBow", "Right Hand", 62.9, 1.65, 6750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(108, "Greater Royal Elven Crossbow", "Weapon", "CrossBow", "Right Hand", 62.9, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(110, "Void Short Crossbow", "Weapon", "CrossBow", "Right Hand", 62.9, 1.95, 24750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(111, "Superior Copper Crossbow", "Weapon", "CrossBow", "Right Hand", 65.7, 1.65, 7125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(116, "Superior Royal Elven Crossbow", "Weapon", "CrossBow", "Right Hand", 68.5, 1.80, 7500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(115, "True strike Crossbow", "Weapon", "CrossBow", "Right Hand", 65.7, 1.95, 25875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(120, "Puzzled Crossbow", "Weapon", "CrossBow", "Right Hand", 68.5, 2.10, 27000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(125, "Hardened Crossbow", "Weapon", "CrossBow", "Right Hand", 71.3, 2.10, 28125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(130, "Slayers Crossbow", "Weapon", "CrossBow", "Right Hand", 74.1, 2.25, 29250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(135, "Deaths Crossbow", "Weapon", "CrossBow", "Right Hand", 76.9, 2.25, 30375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(140, "Eye Poker", "Weapon", "CrossBow", "Right Hand", 79.8, 2.40, 31500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(145, "Weird Crossbow", "Weapon", "CrossBow", "Right Hand", 82.6, 2.40, 32625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(150, "grissled Crossbow", "Weapon", "CrossBow", "Right Hand", 85.4, 2.55, 33750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(155, "Bear Crossbow", "Weapon", "CrossBow", "Right Hand", 88.2, 2.55, 34875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(160, "Soul Crossbow", "Weapon", "CrossBow", "Right Hand", 91.0, 2.70, 36000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(165, "Snow Crossbow", "Weapon", "CrossBow", "Right Hand", 93.8, 2.70, 37125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(170, "Spectrum Crossbow", "Weapon", "CrossBow", "Right Hand", 96.6, 2.85, 38250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(175, "Mystic Crossbow", "Weapon", "CrossBow", "Right Hand", 99.4, 2.85, 39375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(180, "the Unnamed Crossbow", "Weapon", "CrossBow", "Right Hand", 102.3, 3.00, 40500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(185, "Pipe Crossbow", "Weapon", "CrossBow", "Right Hand", 105.1, 3.00, 41625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(190, "Drecks Crossbow", "Weapon", "CrossBow", "Right Hand", 107.9, 3.15, 42750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(195, "Generals Crossbow", "Weapon", "CrossBow", "Right Hand", 110.7, 3.15, 43875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(200, "Dirty Crossbow", "Weapon", "CrossBow", "Right Hand", 113.5, 3.30, 45000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(205, "Gudters Crossbow", "Weapon", "CrossBow", "Right Hand", 116.3, 3.30, 46125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(210, "Flight Crossbow", "Weapon", "CrossBow", "Right Hand", 119.1, 3.45, 47250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(215, "Vibrating Crossbow", "Weapon", "CrossBow", "Right Hand", 121.9, 3.45, 48375.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(220, "Falcon Crossbow", "Weapon", "CrossBow", "Right Hand", 124.8, 3.60, 49500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(225, "Eagle Crossbow", "Weapon", "CrossBow", "Right Hand", 127.6, 3.60, 50625.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(230, "Aroans Crossbow", "Weapon", "CrossBow", "Right Hand", 130.4, 3.75, 51750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(235, "Tear Crossbow", "Weapon", "CrossBow", "Right Hand", 133.2, 3.75, 52875.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(240, "The forgotten Crossbow", "Weapon", "CrossBow", "Right Hand", 136.0, 3.90, 54000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(245, "Champion's Crossbow", "Weapon", "CrossBow", "Right Hand", 138.8, 3.90, 55125.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(250, "titanium Crossbow", "Weapon", "CrossBow", "Right Hand", 141.6, 4.05, 56250.00, false, 5, true, null, null, "") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 31909;
