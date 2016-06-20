/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Water Sprite

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
Monsters.add( new MonsterType("Water Sprite", 1, 208, 0, 0, 18, 1262, "Water,Wind", "Fire,Piercing", "A Blessed creature to be sure, a girl's best friend, you could say.") );
Monsters.add( new MonsterType("Water Sprite", 2, 278, 0, 0, 24, 1673, "Water,Wind", "Fire,Piercing", "A Blessed creature to be sure, a girl's best friend, you could say.") );
Monsters.add( new MonsterType("Water Sprite", 3, 348, 0, 0, 24, 2088, "Water,Wind", "Fire,Piercing", "A Blessed creature to be sure, a girl's best friend, you could say.") );
Monsters.get().addDrop("Blue Diamond");
Monsters.get().addDrop("Bucket of Sand");
Monsters.get().addDrop("Water Sprite Wing");
Monsters.get().addDrop("Cursed Worn Halbert of Greater Wind");
Monsters.get().addDrop("Greater Half Leather Helm");
Monsters.get().addDrop("Greater Tarnished Halbert");
Monsters.get().addDrop("Greater Piercing Wand");
Monsters.get().addDrop("Greater Worn Beginner's Bow");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2278;
