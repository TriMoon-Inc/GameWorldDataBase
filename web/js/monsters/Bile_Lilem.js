/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Bile Lilem

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
Monsters.add( new MonsterType("Bile Lilem", 1, 1477, 93, 0, 170, 8724, "Poison,Acid", "Fire,Earth", "") );
Monsters.add( new MonsterType("Bile Lilem", 2, 1953, 93, 0, 170, 11369, "Poison,Acid", "Fire,Earth", "") );
Monsters.add( new MonsterType("Bile Lilem", 3, 2429, 103, 0, 170, 14025, "Poison,Acid", "Fire,Earth", "") );
Monsters.get().addDrop("Skull Crusher of Poison");
Monsters.get().addDrop("Spiked Victory Club of Health");
Monsters.get().addDrop("Studded Leather Helm of Poison");
Monsters.get().addDrop("Superior Powerband Level 20");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1892;
