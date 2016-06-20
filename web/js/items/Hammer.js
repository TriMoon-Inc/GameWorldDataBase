/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Hammer

	Contributed by:
	2005/01/21	TriMoon (Initial-data and awk script)
	2005/01/21	Liz,Cap (Dev.team item-info)
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
	Items.add( new ItemType(0, "", "Weapon", "Hammer", "Any Hand", 0.0, 0.00, 0.00, false, 5, true, "Bluntness", null, "") );
	*/
//	Iron Hammer
	Items.add( new ItemType(1, "Iron Hammer", "Weapon", "Hammer", "Any Hand", 1.6, 0.85, 250.00, false, 5, true, "Bluntness", null, "This is a dual-handed crushing tool.") );
	Items.add( new ItemType(8, "Greater Iron Hammer", "Weapon", "Hammer", "Any Hand", 10.4, 0.85, 125.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(16, "Superior Iron Hammer", "Weapon", "Hammer", "Any Hand", 16.6, 0.85, 125.00, false, 5, true, "Bluntness", null, "") );
//	Brass Hammer
	Items.add( new ItemType(5, "Brass Hammer", "Weapon", "Hammer", "Any Hand", 4.1, 0.85, 1250.00, false, 5, true, "Bluntness", null, "This dual-handed brass crusher will add to your attacks.") );
	Items.add( new ItemType(13, "Greater Brass Hammer", "Weapon", "Hammer", "Any Hand", 13.5, 0.85, 625.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(21, "Superior Brass Hammer", "Weapon", "Hammer", "Any Hand", 19.8, 0.85, 625.00, false, 5, true, "Bluntness", null, "") );
//	Spiked Club
	Items.add( new ItemType(10, "Spiked Club", "Weapon", "Hammer", "Any Hand", 7.2, 1.15, 2500.00, false, 5, true, "Piercing", null, "Dual-handed weapon.") );
	Items.add( new ItemType(18, "Greater Spiked Club", "Weapon", "Hammer", "Any Hand", 16.6, 1.15, 1250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(26, "Superior Spiked Club", "Weapon", "Hammer", "Any Hand", 22.9, 1.15, 1250.00, false, 5, true, "Piercing", null, "") );
//	Copper Hammer
	Items.add( new ItemType(15, "Copper Hammer", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 3750.00, false, 5, true, "Bluntness", null, "This dual-handed copper crusher will add 37.5 to your attack.") );
	Items.add( new ItemType(15, "Cursed Copper Hammer of Greater Darkness", "Weapon", "Hammer", "Any Hand", 16.60, 1.15, 1875.00, false, 5, true, "Bluntness,Darkness", null, "This dual-handed copper crusher has a higher attack than it should for its level.<br>-3.0AC") );
	Items.add( new ItemType(15, "Cursed Copper Hammer of Greater Ice", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Ice", null, "") );
	Items.add( new ItemType(15, "Cursed Copper Hammer of Greater Water", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Water", null, "") );
	Items.add( new ItemType(15, "Cursed Copper Hammer of Greater Wind", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Wind", null, "") );
	Items.add( new ItemType(18, "Copper Hammer of Lesser Acid", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Acid", null, "") );
	Items.add( new ItemType(18, "Copper Hammer of Lesser Darkness", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Darkness", null, "") );
	Items.add( new ItemType(18, "Copper Hammer of Lesser Energy", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Energy", null, "") );
	Items.add( new ItemType(18, "Copper Hammer of Lesser Light", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Light", null, "") );
	Items.add( new ItemType(18, "Copper Hammer of Lesser Magical", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Magical", null, "This dual handedcopper crusher does an extra 3% damage against Magical attacks.") );
	Items.add( new ItemType(18, "Copper Hammer of Lesser Poison", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Poison", null, "This dual handedcopper crusher does an extra 3% damage against Poison attacks.") );
	Items.add( new ItemType(21, "Copper Hammer of Acid", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Acid", null, "") );
	Items.add( new ItemType(21, "Copper Hammer of Darkness", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Darkness", null, "") );
	Items.add( new ItemType(21, "Copper Hammer of Energy", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Energy", null, "") );
	Items.add( new ItemType(21, "Copper Hammer of Light", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Light", null, "") );
	Items.add( new ItemType(21, "Copper Hammer of Magical", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Magical", null, "") );
	Items.add( new ItemType(21, "Copper Hammer of Poison", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness,Poison", null, "") );
	Items.add( new ItemType(23, "Copper Hammer of Defense", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(23, "Copper Hammer of Jumping", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(23, "Copper Hammer of Speed", "Weapon", "Hammer", "Any Hand", 10.4, 1.15, 1875.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(23, "Greater Copper Hammer", "Weapon", "Hammer", "Any Hand", 16.6, 1.15, 1875.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(31, "Superior Copper Hammer", "Weapon", "Hammer", "Any Hand", 22.9, 1.15, 1875.00, false, 5, true, "Bluntness", null, "") );
//	Reinforced Spiked Club
	Items.add( new ItemType(20, "Reinforced Spiked Club", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 5000.00, false, 5, true, "Piercing", null, "Dual-handed weapon adds 75 to attack.") );
	Items.add( new ItemType(20, "Cursed Reinforced Spiked Club of Greater Acid", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Acid", null, "") );
	Items.add( new ItemType(20, "Cursed Reinforced Spiked Club of Greater Earth", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Earth", null, "") );
	Items.add( new ItemType(20, "Cursed Reinforced Spiked Club of Greater Poison", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Poison", null, "") );
	Items.add( new ItemType(23, "Reinforced Spiked Club of Lesser Energy", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Energy", null, "") );
	Items.add( new ItemType(23, "Reinforced Spiked Club of Lesser Fire", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Fire", null, "") );
	Items.add( new ItemType(23, "Reinforced Spiked Club of Lesser Ice", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Ice", null, "") );
	Items.add( new ItemType(23, "Reinforced Spiked Club of Lesser Water", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Water", null, "") );
	Items.add( new ItemType(23, "Reinforced Spiked Club of Lesser Wind", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Wind", null, "") );
	Items.add( new ItemType(26, "Reinforced Spiked Club of Energy", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Energy", null, "") );
	Items.add( new ItemType(26, "Reinforced Spiked Club of Fire", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Fire", null, "") );
	Items.add( new ItemType(26, "Reinforced Spiked Club of Ice", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Ice", null, "") );
	Items.add( new ItemType(26, "Reinforced Spiked Club of Water", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Water", null, "") );
	Items.add( new ItemType(26, "Reinforced Spiked Club of Wind", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing,Wind", null, "") );
	Items.add( new ItemType(28, "Greater Reinforced Spiked Club ", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 2500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(28, "Reinforced Spiked Club of Health", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(28, "Reinforced Spiked Club of HP Regen", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(28, "Reinforced Spiked Club of Strength ", "Weapon", "Hammer", "Any Hand", 13.2, 1.75, 2500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(36, "Superior Reinforced Spiked Club", "Weapon", "Hammer", "Any Hand", 26.0, 1.75, 2500.00, false, 5, true, "Piercing", null, "") );
//	Spiked Blood Club
	Items.add( new ItemType(25, "Spiked Blood Club", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 6250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(25, "Cursed Spiked Blood Club Greater Acid", "Weapon", "Hammer", "Any Hand", 22.90, 1.75, 3125.00, false, 5, true, "Acid,Piercing", null, "-0.18Jump") );
	Items.add( new ItemType(25, "Cursed Spiked Blood Club Greater Energy", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Energy", null, "") );
	Items.add( new ItemType(25, "Cursed Spiked Blood Club Greater Fire", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Fire", null, "") );
	Items.add( new ItemType(25, "Cursed Spiked Blood Club Greater Ice", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Ice", null, "") );
	Items.add( new ItemType(28, "Spiked Blood Club of Lesser Acid", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Acid", null, "") );
	Items.add( new ItemType(28, "Spiked Blood Club of Lesser Darkness", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Darkness", null, "") );
	Items.add( new ItemType(28, "Spiked Blood Club of Lesser Earth", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Earth", null, "") );
	Items.add( new ItemType(28, "Spiked Blood Club of Lesser Light", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Light", null, "") );
	Items.add( new ItemType(28, "Spiked Blood Club of Lesser Magical", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Magical", null, "") );
	Items.add( new ItemType(28, "Spiked Blood Club of Lesser Poison", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Poison", null, "") );
	Items.add( new ItemType(31, "Spiked Blood Club of Acid", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Acid", null, "") );
	Items.add( new ItemType(31, "Spiked Blood Club of Darkness", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Darkness", null, "") );
	Items.add( new ItemType(31, "Spiked Blood Club of Earth", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Earth", null, "") );
	Items.add( new ItemType(31, "Spiked Blood Club of Light", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Light", null, "") );
	Items.add( new ItemType(31, "Spiked Blood Club of Magical", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Magical", null, "") );
	Items.add( new ItemType(31, "Spiked Blood Club of Poison", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing,Poison", null, "") );
	Items.add( new ItemType(33, "Greater Spiked Blood Club", "Weapon", "Hammer", "Any Hand", 22.9, 1.75, 3125.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(33, "Spiked Blood Club of Defense", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(33, "Spiked Blood Club of Jumping", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(33, "Spiked Blood Club of Speed", "Weapon", "Hammer", "Any Hand", 16.6, 1.75, 3125.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(41, "Superior Spiked Blood Club", "Weapon", "Hammer", "Any Hand", 29.1, 1.75, 3125.00, false, 5, true, "Piercing", null, "") );
//	Spiked Victory Club
	Items.add( new ItemType(30, "Spiked Victory Club", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 7500.00, false, 5, true, "Piercing", null, "Dual-handed weapon adds 75 to attack.") );
	Items.add( new ItemType(30, "Cursed Spiked Victory Club of Greater Darkness", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Darkness", null, "") );
	Items.add( new ItemType(30, "Cursed Spiked Victory Club of Greater Light", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Light", null, "") );
	Items.add( new ItemType(30, "Cursed Spiked Victory Club of Greater Magical", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Magical", null, "") );
	Items.add( new ItemType(33, "Spiked Victory Club of Lesser Energy", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Energy", null, "") );
	Items.add( new ItemType(33, "Spiked Victory Club of Lesser Fire", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Fire", null, "") );
	Items.add( new ItemType(33, "Spiked Victory Club of Lesser Ice", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Ice", null, "") );
	Items.add( new ItemType(33, "Spiked Victory Club of Lesser Water", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Water", null, "") );
	Items.add( new ItemType(33, "Spiked Victory Club of Lesser Wind", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Wind", null, "") );
	Items.add( new ItemType(36, "Spiked Victory Club of Energy", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Energy", null, "") );
	Items.add( new ItemType(36, "Spiked Victory Club of Fire", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Fire", null, "") );
	Items.add( new ItemType(36, "Spiked Victory Club of Ice", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Ice", null, "") );
	Items.add( new ItemType(36, "Spiked Victory Club of Water", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Water", null, "") );
	Items.add( new ItemType(36, "Spiked Victory Club of Wind", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing,Wind", null, "") );
	Items.add( new ItemType(38, "Greater Spiked Victory Club", "Weapon", "Hammer", "Any Hand", 26.0, 1.75, 3750.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(38, "Spiked Victory Club of Strength", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(38, "Spiked Victory Club of Health", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing", null, "+17.2HP<br>Ten levels of attack you can use eight levels higher than the original, plus extra 2% on") );
	Items.add( new ItemType(38, "Spiked Victory Club of HP Regen", "Weapon", "Hammer", "Any Hand", 19.8, 1.75, 3750.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(46, "Superior Spiked Victory Club ", "Weapon", "Hammer", "Any Hand", 32.2, 1.75, 3750.00, false, 5, true, "Piercing", null, "") );
//	Valtor's Hammer
	Items.add( new ItemType(35, "Valtor's Hammer", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 13125.00, false, 5, true, "Bluntness,Crushing", null, "Double Handed attack increased.") );
	Items.add( new ItemType(35, "Cursed Valtor's Hammer of Greater Energy", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(35, "Cursed Valtor's Hammer of Greater Fire", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(35, "Cursed Valtor's Hammer of Greater Ice", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(38, "Valtor's Hammer of Defense", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(38, "Valtor's Hammer of Jumping", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(38, "Valtor's Hammer of Lesser Acid", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(38, "Valtor's Hammer of Lesser Darkness", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(38, "Valtor's Hammer of Lesser Earth", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(38, "Valtor's Hammer of Lesser Light ", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(38, "Valtor's Hammer of Lesser Magical", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(38, "Valtor's Hammer of Lesser Posion", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(38, "Valtor's Hammer of Speed", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(41, "Valtor's Hammer of Acid", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(41, "Valtor's Hammer of Darkness", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(41, "Valtor's Hammer of Earth", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(41, "Valtor's Hammer of Light", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(41, "Valtor's Hammer of Magical", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(41, "Valtor's Hammer of Poison", "Weapon", "Hammer", "Both Hand", 33.9, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(43, "Greater Valtor's Hammer", "Weapon", "Hammer", "Both Hand", 43.2, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(51, "Superior Valtor's Hammer", "Weapon", "Hammer", "Both Hand", 52.6, 1.75, 6562.50, false, 5, true, "Bluntness,Crushing", null, "") );
//	Hammer of Might
	Items.add( new ItemType(40, "Hammer of Might", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 15000.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(43, "Cursed Hammer of Might of Greater Darkness", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(43, "Cursed Hammer of Might of Greater Light", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(43, "Cursed Hammer of Might of Greater Magical", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(43, "Hammer of Might of Lesser Energy", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(43, "Hammer of Might of Lesser Fire", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(43, "Hammer of Might of Lesser Ice", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(43, "Hammer of Might of Lesser Water", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(43, "Hammer of Might of Lesser Wind", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(46, "Hammer of Might of Energy", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(46, "Hammer of Might of Fire", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(46, "Hammer of Might of Health", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(46, "Hammer of Might of HP Regen", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(46, "Hammer of Might of Ice", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(46, "Hammer of Might of Strength", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(46, "Hammer of Might of Water", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(46, "Hammer of Might of Wind ", "Weapon", "Hammer", "Both Hand", 38.5, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(48, "Greater Hammer of Might", "Weapon", "Hammer", "Both Hand", 47.9, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
	Items.add( new ItemType(56, "Superior Hammer of Might", "Weapon", "Hammer", "Both Hand", 57.2, 2.05, 7500.00, false, 5, true, "Bluntness Crushing", null, "") );
//	Death Mallet
	Items.add( new ItemType(45, "Death Mallet", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 16875.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(45, "Cursed Death Mallet of Greater Energy", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(45, "Cursed Death Mallet of Greater Fire", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(45, "Cursed Death Mallet of Greater Ice", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(48, "Death Mallet of Defense", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(48, "Death Mallet of Jumping", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(48, "Death Mallet of Lesser Acid", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(48, "Death Mallet of Lesser Darkness", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(48, "Death Mallet of Lesser Earth", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(48, "Death Mallet of Lesser Light", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(48, "Death Mallet of Lesser Magic", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(48, "Death Mallet of Lesser Poison", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(48, "Death Mallet of Speed", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(51, "Death Mallet of Acid", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(51, "Death Mallet of Darkeness", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(51, "Death Mallet of Earth", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(51, "Death Mallet of Light", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(51, "Death Mallet of Magic", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(51, "Death Mallet of Poison", "Weapon", "Hammer", "Both Hand", 43.2, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(61, "Superior Death Mallet", "Weapon", "Hammer", "Both Hand", 61.9, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
//	Spine Crusher
	Items.add( new ItemType(50, "Spine Crusher", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 18750.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(50, "Cursed Spine Crusher of Greater Darkness", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(50, "Cursed Spine Crusher of Greater Light", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(50, "Cursed Spine Crusher of Greater Magic", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(53, "Greater Death Mallet", "Weapon", "Hammer", "Both Hand", 52.6, 2.05, 8437.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(53, "Spine Crusher of Health", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(53, "Spine Crusher of HP Regen", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(53, "Spine Crusher of Lesser Energy", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(53, "Spine Crusher of Lesser Fire", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(53, "Spine Crusher of Lesser Ice", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(53, "Spine Crusher of Lesser Wind", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(53, "Spine Crusher of Lesser Water", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(53, "Spine Crusher of Strength", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(56, "Spine Crusher of Energy", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(56, "Spine Crusher of Fire", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(56, "Spine Crusher of Ice", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(56, "Spine Crusher of Wind", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(56, "Spine Crusher of Water", "Weapon", "Hammer", "Both Hand", 47.9, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(58, "Greater Spine Crusher", "Weapon", "Hammer", "Both Hand", 57.2, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(66, "Superior Spine Crusher", "Weapon", "Hammer", "Both Hand", 66.6, 2.35, 9375.00, false, 5, true, "Bluntness,Crushing", null, "") );
//	Royal Spiked Club
	Items.add( new ItemType(55, "Royal Spiked Club", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 13750.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(55, "Cursed Royal Spiked Club of Greater Energy", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(55, "Cursed Royal Spiked Club of Greater Fire", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(55, "Cursed Royal Spiked Club of Greater Ice", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(58, "Royal Spiked Club of Defense", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(58, "Royal Spiked Club of Jumping ", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(58, "Royal Spiked Club of Lesser Acid", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(58, "Royal Spiked Club of Lesser Darkness", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(58, "Royal Spiked Club of Lesser Earth", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(58, "Royal Spiked Club of Lesser Light", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(58, "Royal Spiked Club of Lesser Magic", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(58, "Royal Spiked Club of Lesser Poison", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(58, "Royal Spiked Club of Speed", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(61, "Royal Spiked Club of Acid", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(61, "Royal Spiked Club of Darkness", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(61, "Royal Spiked Club of Earth", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(61, "Royal Spiked Club of Light", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(61, "Royal Spiked Club of Magic", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(61, "Royal Spiked Club of Poison", "Weapon", "Hammer", "Any Hand", 35.4, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(63, "Greater Royal Spiked Club", "Weapon", "Hammer", "Any Hand", 41.6, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(71, "Superior Royal Spiked Club", "Weapon", "Hammer", "Any Hand", 47.9, 2.35, 6875.00, false, 5, true, "Piercing", null, "") );
//	Ice Mallet
	Items.add( new ItemType(60, "Ice Mallet", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 22500.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(60, "Cursed Ice Mallet of Greater Darkness", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(60, "Cursed Ice Mallet of Greater Light", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(60, "Cursed Ice Mallet of Greater Magic", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(63, "Ice Mallet of Health", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(63, "Ice Mallet of HP Regen", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(63, "Ice Mallet of Lesser Energy", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(63, "Ice Mallet of Lesser Fire", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(63, "Ice Mallet of Lesser Ice", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(63, "Ice Mallet of Lesser Wind", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(63, "Ice Mallet of Lesser Water", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(63, "Ice Mallet of Strength", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(66, "Ice Mallet of Energy", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(66, "Ice Mallet of Fire", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(66, "Ice Mallet of Ice", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(66, "Ice Mallet of Wind", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(66, "Ice Mallet of Water", "Weapon", "Hammer", "Both Hand", 57.2, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(68, "Greater Ice Mallet", "Weapon", "Hammer", "Both Hand", 66.6, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(76, "Superior Ice Mallet", "Weapon", "Hammer", "Both Hand", 76.0, 2.65, 11250.00, false, 5, true, "Bluntness,Crushing", null, "") );
//	Brass War Hammer
	Items.add( new ItemType(65, "Brass War Hammer", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 1250.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(68, "Brass War Hammer of Lesser Acid", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Acid", null, "") );
	Items.add( new ItemType(68, "Brass War Hammer of Lesser Darkness", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Darkness", null, "") );
	Items.add( new ItemType(68, "Brass War Hammer of Lesser Earth", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Earth", null, "") );
	Items.add( new ItemType(68, "Brass War Hammer of Lesser Light", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Light", null, "") );
	Items.add( new ItemType(68, "Brass War Hammer of Lesser Magical", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Magical", null, "") );
	Items.add( new ItemType(68, "Brass War Hammer of Lesser Poison", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Poison", null, "") );
	Items.add( new ItemType(71, "Brass War Hammer of Acid", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Acid", null, "") );
	Items.add( new ItemType(71, "Brass War Hammer of Darkness", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Darkness", null, "") );
	Items.add( new ItemType(71, "Brass War Hammer of Earth", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Earth", null, "") );
	Items.add( new ItemType(71, "Brass War Hammer of Light", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Light", null, "") );
	Items.add( new ItemType(71, "Brass War Hammer of Magical", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Magical", null, "") );
	Items.add( new ItemType(71, "Brass War Hammer of Poison", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness,Poison", null, "") );
	Items.add( new ItemType(73, "Brass War Hammer of Defense", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(73, "Brass War Hammer of Jump", "Weapon", "Hammer", "Any Hand", 41.6, 2.65, 8125.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(73, "Greater Brass War Hammer", "Weapon", "Hammer", "Any Hand", 47.9, 2.65, 8125.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(81, "Superior Brass War Hammer ", "Weapon", "Hammer", "Any Hand", 54.1, 2.65, 8125.00, false, 5, true, "Bluntness", null, "") );
//	Iron War Hammer
	Items.add( new ItemType(70, "Iron War Hammer", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 17500.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(73, "Iron War Hammer of Lesser Energy", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness,Energy", null, "") );
	Items.add( new ItemType(73, "Iron War Hammer of Lesser Fire", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness,Fire", null, "") );
	Items.add( new ItemType(73, "Iron War hammer of Lesser Ice", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness,Ice", null, "") );
	Items.add( new ItemType(73, "Iron War Hammer of Lesser Water", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness,Water", null, "") );
	Items.add( new ItemType(73, "Iron War Hammer of Lesser Wind", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness,Wind", null, "") );
	Items.add( new ItemType(76, "Iron War Hammer of Energy", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness,Energy", null, "") );
	Items.add( new ItemType(76, "Iron War Hammer of Fire", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness,Fire", null, "") );
	Items.add( new ItemType(78, "Iron War Hammer of Health", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(76, "Iron War Hammer of Ice", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness,Ice", null, "") );
	Items.add( new ItemType(76, "Iron War Hammer of Water", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness,Water", null, "") );
	Items.add( new ItemType(76, "Iron War Hammer of Wind", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness,Wind", null, "") );
	Items.add( new ItemType(78, "Iron War Hammer of Speed", "Weapon", "Hammer", "Any Hand", 44.8, 2.95, 8750.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(78, "Greater Iron War Hammer", "Weapon", "Hammer", "Any Hand", 51.0, 2.95, 8750.00, false, 5, true, "Bluntness", null, "") );
	Items.add( new ItemType(86, "Superior Iron War Hammer", "Weapon", "Hammer", "Any Hand", 57.2, 2.95, 8750.00, false, 5, true, "Bluntness", null, "") );
//	Midnight Mallet
	Items.add( new ItemType(75, "Midnight Mallet", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 28125.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(75, "Cursed Midnight Mallet of Greater Fire", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(75, "Cursed Midnight Mallet of Greater Ice", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(75, "Cursed Midnight Mallet of Greater Wind", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(78, "Midnight Mallet of Defense", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(78, "Midnight Mallet of Lesser of Acid", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(78, "Midnight Mallet of Lesser of Darkness", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(78, "Midnight Mallet of Lesser of Earth", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(78, "Midnight Mallet of Lesser of Light", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(78, "Midnight Mallet of Lesser of Magic", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(78, "Midnight Mallet of Lesser of Poison", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(78, "Midnight Mallet of Jump", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(78, "Midnight Mallet of Speed", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(78, "Greater Midnight Mallet", "Weapon", "Hammer", "Both Hand", 80.7, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(81, "Midnight Mallet of Acid", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(81, "Midnight Mallet of Darkness", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(81, "Midnight Mallet of Earth", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(81, "Midnight Mallet of Light", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(81, "Midnight Mallet of Magic", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(81, "Midnight Mallet of Poison", "Weapon", "Hammer", "Both Hand", 71.3, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(86, "Superior Midnight Mallet", "Weapon", "Hammer", "Both Hand", 90.1, 2.95, 14062.50, false, 5, true, "Bluntness,Crushing", null, "") );
//	Spiked War Club
	Items.add( new ItemType(80, "Spiked War Club", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 20000.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(83, "Spiked War Club of Lesser Energy", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing,Energy", null, "") );
	Items.add( new ItemType(83, "Spiked War Club of Lesser Fire", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing,Fire", null, "") );
	Items.add( new ItemType(83, "Spiked War Club of Lesser Ice", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing,Ice", null, "") );
	Items.add( new ItemType(83, "Spiked War Club of Lesser Water", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing,Water", null, "") );
	Items.add( new ItemType(83, "Spiked War Club of Lesser Wind", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing,Wind", null, "") );
	Items.add( new ItemType(86, "Spiked War Club of Energy", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing,Energy", null, "") );
	Items.add( new ItemType(86, "Spiked War Club of Fire", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing,Fire", null, "") );
	Items.add( new ItemType(86, "Spiked War Club of Ice", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing,Ice", null, "") );
	Items.add( new ItemType(86, "Spiked War Club of Water", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing,Water", null, "") );
	Items.add( new ItemType(86, "Spiked War Club of Wind", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing,Wind", null, "") );
	Items.add( new ItemType(88, "Spiked War Club of Health", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(88, "Spiked War Club of Speed", "Weapon", "Hammer", "Any Hand", 51.0, 3.25, 10000.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(88, "Greater Spiked War Club", "Weapon", "Hammer", "Any Hand", 57.2, 3.25, 10000.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(96, "Superior Spiked War Club", "Weapon", "Hammer", "Any Hand", 63.5, 3.25, 10000.00, false, 5, true, "Piercing", null, "") );
//	Warriors Hammer
	Items.add( new ItemType(85, "Warriors Hammer", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 31875.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(85, "Cursed Warriors Hammer of Greater Fire", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(85, "Cursed Warriors Hammer of Greater Ice", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(85, "Cursed Warriors Hammer of Greater Wind", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(88, "Warriors Hammer of Health", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(88, "Warriors Hammer of HP Regen", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(88, "Warriors Hammer of Lesser Acid", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(88, "Warriors Hammer of Lesser Dark", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(88, "Warriors Hammer of Lesser Earth", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(88, "Warriors Hammer of Lesser Light", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(88, "Warriors Hammer of Lesser Magic", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(88, "Warriors Hammer of Lesser Poison", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(88, "Warriors Hammer of Strength", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(91, "Warriors Hammer of Acid", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(91, "Warriors Hammer of Darkness", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(91, "Warriors Hammer of Earth", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(91, "Warriors Hammer of Light", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(91, "Warriors Hammer of Magic", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(91, "Warriors Hammer of Poison", "Weapon", "Hammer", "Both Hand", 80.7, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(93, "Greater Warriors Hammer", "Weapon", "Hammer", "Both Hand", 90.1, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(101, "Superior Warriors Hammer", "Weapon", "Hammer", "Both Hand", 99.4, 3.25, 15937.50, false, 5, true, "Bluntness,Crushing", null, "") );
//	Warriors Club
	Items.add( new ItemType(90, "Warriors Club", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 22500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(90, "Cursed Warriors Club of Greater Darkness", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(90, "Cursed Warriors Club of Greater Light", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(90, "Cursed Warriors Club of Greater Magic", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(93, "Warriors Club of Defense", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(93, "Warriors Club of Jump", "Weapon", "Hammer", "Any Hand", 57.2, 0.00,  11.00, false, 5, true, "250.00", null, "") );
	Items.add( new ItemType(93, "Warriors Club of Lesser Energy", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(93, "Warriors Club of Lesser Fire", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(93, "Warriors Club of Lesser Ice", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(93, "Warriors Club of Lesser Water", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(93, "Warriors Club of Lesser Wind", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(93, "Warriors Club of Speed", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(96, "Warriors Club of Energy", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(96, "Warriors Club of Fire", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(96, "Warriors Club of Water", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(96, "Warriors Club of Wind", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(96, "Warriors Club of Ice", "Weapon", "Hammer", "Any Hand", 57.2, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(98, "Greater Warriors Club", "Weapon", "Hammer", "Any Hand", 63.5, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(106, "Superior Warriors Club", "Weapon", "Hammer", "Any Hand", 69.8, 3.55, 11250.00, false, 5, true, "Piercing", null, "") );
//	Heavy Headed Hammer
	Items.add( new ItemType(95, "Heavy Headed Hammer", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 35625.00, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(95, "Cursed Heavy Headed Hammer of Greater Fire", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(95, "Cursed Heavy Headed Hammer of Greater Ice", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(95, "Cursed Heavy Headed Hammer of Greater Wind", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(98, "Heavy Headed Hammer of Health", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(98, "Heavy Headed Hammer of HP Regen", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(98, "Heavy Headed Hammer of Lesser Acid", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(98, "Heavy Headed Hammer of Lesser Darkness", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(98, "Heavy Headed Hammer of Lesser Earth", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(98, "Heavy Headed Hammer of Lesser Light", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(98, "Heavy Headed Hammer of Lesser Magic", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(98, "Heavy Headed Hammer of Lesser Posion", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(98, "Heavy Headed Hammer of Strength", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(101, "Heavy Headed Hammer of Acid", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(101, "Heavy Headed Hammer of Darkness", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(101, "Heavy Headed Hammer of Earth", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(101, "Heavy Headed Hammer of Light", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(101, "Heavy Headed Hammer of Magic", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(101, "Heavy Headed Hammer of Posion", "Weapon", "Hammer", "Both Hand", 90.1, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(103, "Greater Heavy Headed Hammer", "Weapon", "Hammer", "Both Hand", 99.4, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
	Items.add( new ItemType(111, "Superior Heavy Headed Hammer", "Weapon", "Hammer", "Both Hand", 108.8, 3.55, 17812.50, false, 5, true, "Bluntness,Crushing", null, "") );
//	Heavy Headed Club
	Items.add( new ItemType(100, "Heavy Headed Club", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 25000.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(100, "Cursed Heavy Headed Club of Greater Dark", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(100, "Cursed Heavy Headed Club of Greater Light", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(100, "Cursed Heavy Headed Club of Greater Magic", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(103, "Heavy Headed Club of Defense", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(103, "Heavy Headed Club of Jump", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(103, "Heavy Headed Club of Lesser Earth", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(103, "Heavy Headed Club of Lesser Fire", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(103, "Heavy Headed Club of Lesser Ice", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(103, "Heavy Headed Club of Lesser Water", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(103, "Heavy Headed Club of Lesser Wind", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(103, "Heavy Headed Club of Speed", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(106, "Heavy Headed Club of Earth", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(106, "Heavy Headed Club of Fire", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(106, "Heavy Headed Club of Ice", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(106, "Heavy Headed Club of Water", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(106, "Heavy Headed Club of Wind", "Weapon", "Hammer", "Any Hand", 63.5, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(108, "Greater Heavy Headed Club", "Weapon", "Hammer", "Any Hand", 69.8, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
	Items.add( new ItemType(116, "Superior Heavy Headed Club", "Weapon", "Hammer", "Any Hand", 76.0, 3.85, 12500.00, false, 5, true, "Piercing", null, "") );
//	Other
	Items.add( new ItemType(105, "Hammer of the Dragon NEEDS WORKED item#1935", "Weapon", "Hammer", "Both Hand", 133.6, 3.85, 26250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(110, "Dragon Club", "Weapon", "Hammer", "Both Hand", 139.9, 4.15, 27500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(115, "Snake Hammer", "Weapon", "Hammer", "Any Hand", 72.8, 4.15, 28750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(120, "Snake Club", "Weapon", "Hammer", "Any Hand", 75.9, 4.45, 30000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(125, "Fighter's Hammer", "Weapon", "Hammer", "Both Hand", 159.0, 4.45, 31250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(130, "Fighter's Club", "Weapon", "Hammer", "Both Hand", 165.4, 4.75, 32500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(130, "Doubter's Hammer", "Weapon", "Hammer", "Any Hand", 82.3, 4.75, 32500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(135, "Doubter's Club", "Weapon", "Hammer", "Any Hand", 85.4, 5.05, 33750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(135, "Apprentice's Hammer", "Weapon", "Hammer", "Both Hand", 171.8, 5.05, 33750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(140, "Apprentice's Club", "Weapon", "Hammer", "Both Hand", 178.1, 5.35, 35000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(145, "Journeyman's Hammer", "Weapon", "Hammer", "Any Hand", 91.8, 5.35, 36250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(150, "Journeyman's Club", "Weapon", "Hammer", "Any Hand", 94.9, 5.65, 37500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(155, "Expertisham", "Weapon", "Hammer", "Both Hand", 197.2, 5.65, 38750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(160, "Experticlub", "Weapon", "Hammer", "Both Hand", 203.6, 5.95, 40000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(165, "Attacker's Nightmare", "Weapon", "Hammer", "Any Hand", 104.4, 5.95, 41250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(170, "Attacker's Doom", "Weapon", "Hammer", "Any Hand", 107.6, 6.25, 42500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(175, "Heavyweight Hammer", "Weapon", "Hammer", "Both Hand", 222.6, 6.25, 43750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(180, "Courtney's Club", "Weapon", "Hammer", "Both Hand", 229.0, 6.55, 45000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(185, "Hightower Hammer", "Weapon", "Hammer", "Any Hand", 117.1, 6.55, 46250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(190, "Michassid Club", "Weapon", "Hammer", "Any Hand", 123.4, 6.85, 48750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(195, "Michassid Hammer", "Weapon", "Hammer", "Both Hand", 248.1, 6.85, 48750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(200, "Daeland Club", "Weapon", "Hammer", "Both Hand", 254.5, 7.15, 50000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(205, "Dart Hammer", "Weapon", "Hammer", "Any Hand", 129.7, 7.15, 51250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(210, "Dart Club", "Weapon", "Hammer", "Any Hand", 132.9, 7.45, 52500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(215, "Daeland Hammer", "Weapon", "Hammer", "Both Hand", 273.5, 7.45, 53750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(220, "Covert Club", "Weapon", "Hammer", "Both Hand", 279.9, 7.75, 55000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(225, "Covert Hammer", "Weapon", "Hammer", "Any Hand", 142.4, 7.75, 56250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(230, "Revenger's Delight", "Weapon", "Hammer", "Any Hand", 145.6, 8.05, 57500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(235, "Revenger's Club ", "Weapon", "Hammer", "Both Hand", 299.0, 8.05, 58750.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(240, "Highstrung Hammer", "Weapon", "Hammer", "Both Hand", 305.3, 8.35, 60000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(245, "King Dave's Mighty Club", "Weapon", "Hammer", "Any Hand", 155.1, 8.35, 61250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(250, "King Dave's Mighty Hammer", "Weapon", "Hammer", "Any Hand", 158.2, 8.65, 62500.00, false, 5, true, null, null, "") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 65215;
