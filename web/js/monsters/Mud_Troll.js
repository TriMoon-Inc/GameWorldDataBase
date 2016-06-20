/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Mud Troll

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Exception handling.
***************************************************************************/
try{
/***************************************************************************
						Fill MonsterTypes
***************************************************************************/
//	MonsterType(sName, nLevel, nHP, nATK, nDef, nMoney, nExp, sStrong, sWeak, sDesc)
//	Monsters.get(sName, nLevel)

/*	Templates for easy adding
Monsters.add( new MonsterType("", 1, 0, 0, 0, 0, 0, "", "", "") );
Monsters.get().addDrop("");
*/
Monsters.add( new MonsterType("Mud Troll", 1, 261, 0, 0, 0, 0, "", "", "") );
Monsters.add( new MonsterType("Mud Troll", 2, 348, 0, 0, 0, 0, "", "", "") );
Monsters.add( new MonsterType("Mud Troll", 3, 435, 0, 0, 0, 0, "", "", "") );
Monsters.get().addDrop("Belt of Might");
Monsters.get().addDrop("Belt of Speed");
Monsters.get().addDrop("Blue Spiked Leg Band");
Monsters.get().addDrop("Copper Hammer of Lesser Magical");
Monsters.get().addDrop("Copper Hammer of Lesser Poison");
Monsters.get().addDrop("Cursed Copper Hammer of Greater Darkness");
Monsters.get().addDrop("Cursed Copper Hammer of Greater Water");
Monsters.get().addDrop("Cursed Defense Oak Long Bow");
Monsters.get().addDrop("Cursed Jump Oak Long Bow");
Monsters.get().addDrop("Cursed Orcen Mace of Greater Energy");
Monsters.get().addDrop("Cursed Orcen Mace of Greater Water");
Monsters.get().addDrop("Gem of Lead");
Monsters.get().addDrop("Greater Long Bow");
Monsters.get().addDrop("Orcen Mace of Lesser Ice");
Monsters.get().addDrop("Orcen Mace of Lesser Water");
Monsters.get().addDrop("Soft Leather Helm");
Monsters.get().addDrop("Superior Bladed Wand");
Monsters.get().addDrop("Superior Iron Sword");
Monsters.get().addDrop("Superior Old Mace");
Monsters.get().addDrop("Superior Powerband Level 1");
Monsters.get().addDrop("Superior Short Bow");
Monsters.get().addDrop("Superior Wooden Shield");
Monsters.get().addDrop("Willow Wood Staff of Lesser Energy");
Monsters.get().addDrop("Willow Wood Staff of Lesser Fire");
Monsters.get().addDrop("Willow Wood Staff of Lesser Wind");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2919;
