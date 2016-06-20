/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Bunny

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
Monsters.add( new MonsterType("Bunny", 1, 0, 0, 0, 15, 0, null, null, "This harmless little fellow will succomb to crushing blows.") );
Monsters.add( new MonsterType("Bunny", 2, 6, 0, 0, 15, 16, null, null, "This harmless little fellow will succomb to crushing blows.") );
Monsters.add( new MonsterType("Bunny", 3, 8, 0, 0, 15, 24, null, null, "This harmless little fellow will succomb to crushing blows.") );
Monsters.add( new MonsterType("Bunny", 4, 10, 0, 0, 15, 28, null, null, "This harmless little fellow will succomb to crushing blows.") );
Monsters.add( new MonsterType("Bunny", 5, 12, 0, 0, 15, 26, null, null, "This harmless little fellow will succomb to crushing blows.") );
Monsters.get().addDrop("Rabbit Fur");
Monsters.get().addDrop("Rabbit's Ear");
Monsters.get().addDrop("Rabbit's Foot");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2148;
