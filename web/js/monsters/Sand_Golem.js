/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Sand Golem

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
Monsters.add( new MonsterType("Sand Golem", 1, 721, 33, 0, 121, 4357, "Bluntness", "Sharpness,Piercing", "A Blessed sand creature given powerfull gems to combat evil forces. Giselle, goddess of Blessing, distributed her precious gems to these unlikely creatures to protect them from the evil gods.") );
Monsters.add( new MonsterType("Sand Golem", 2, 947, 33, 0, 125, 5700, "Bluntness", "Sharpness,Piercing", "A Blessed sand creature given powerfull gems to combat evil forces. Giselle, goddess of Blessing, distributed her precious gems to these unlikely creatures to protect them from the evil gods.") );
Monsters.add( new MonsterType("Sand Golem", 3, 1173, 36, 0, 131, 7050, "Bluntness", "Sharpness,Piercing", "A Blessed sand creature given powerfull gems to combat evil forces. Giselle, goddess of Blessing, distributed her precious gems to these unlikely creatures to protect them from the evil gods.") );
Monsters.get().addDrop("Bucket of Sand");
Monsters.get().addDrop("Golem Skull");
Monsters.get().addDrop("Sand Golem Leg Bone");
Monsters.get().addDrop("Small Bag of Gems");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2430;
