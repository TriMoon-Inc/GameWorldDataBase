/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	SolarSystem

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Exception handling.
***************************************************************************/
try{
/***************************************************************************
						Local Variables
***************************************************************************/
/* Array(new Planet(), ...)
	Templates for easy adding
		,new Planet("planetname")
		,new Planet("planetname", x)
		,new Planet("planetname", "img")
*/
var aPlanets = Array(
		new Planet("Other", 2)
		,new Planet("Omus Prime", 3)
		,new Planet("Glandatoo", 3)
		,new Planet("Seregor", 6)
		,new Planet("Orin", 1)
		,new Planet("Talos", 1)
		,new Planet("Themus", 2)
		,new Planet("Dacas", 1)
		,new Planet("Micha", 1)
		,new Planet("Ryci", 1)
		,new Planet("Mirra", 1)
		,new Planet("Creti", 1)
);
/* Array(new ImageMapArea(), ...)
	Templates for easy adding
		,new ImageMapArea("shape",	Array(shape-coords),	"alt text")
		,new ImageMapArea("shape",	Array(shape-coords),	"alt text",	"Planet|Map")
*/
var aImageMap = Array(
		new ImageMapArea("CIRCLE",	Array(59,76,46),	"Other",	"Other")
		,new ImageMapArea("CIRCLE",	Array(162,77,15),	"Omus Prime",	"Omus Prime")
		,new ImageMapArea("CIRCLE",	Array(238,76,17),	"Glandatoo",	"Glandatoo")
		,new ImageMapArea("CIRCLE",	Array(307,76,27),	"Seregor",	"Seregor")
		,new ImageMapArea("CIRCLE",	Array(412,76,14),	"Orin",		"Orin")
		,new ImageMapArea("CIRCLE",	Array(483,79,13),	"Talos",	"Talos")
		,new ImageMapArea("CIRCLE",	Array(571,79,18),	"Themus",	"Themus")
		,new ImageMapArea("CIRCLE",	Array(286,37,6),	"Dacas",	"Dacas")
		,new ImageMapArea("CIRCLE",	Array(300,115,5),	"Micha",	"Micha")
		,new ImageMapArea("CIRCLE",	Array(479,107,4),	"Ryci",		"Ryci")
		,new ImageMapArea("CIRCLE",	Array(497,58,3),	"Mirra",	"Mirra")
		,new ImageMapArea("CIRCLE",	Array(552,55,5),	"Creti",	"Creti")
);
/***************************************************************************
						Load Planets
***************************************************************************/
if(bTest){
	Universe = new SolarSystem( "FreeWorld", null, "SolarSystem", aImageMap );
	CreateTestPlanet("Test",3);
}else{
	// Increase numbers for map+mark files.
	gLoadScript.ToLoad += 12;
	gLoadScript.TotalSize += 32942;
/* Usage(s):
	SolarSystem( "name" );
	SolarSystem( "name", aPlanets );
	SolarSystem( "name", aPlanets, "img" );
	SolarSystem( "name", aPlanets, "img", aImageMap );
*/
	Universe = new SolarSystem( "FreeWorld", aPlanets, "SolarSystem", aImageMap );
	// Load Next files.
	LoadScript('js/maps/Other.js',true);
	LoadScript('js/maps/Omus_Prime.js',true);
	LoadScript('js/maps/Glandatoo.js',true);
	LoadScript('js/maps/Seregor.js',true);
	LoadScript('js/maps/Orin.js',true);
	LoadScript('js/maps/Talos.js',true);
	LoadScript('js/maps/Themus.js',true);
	LoadScript('js/maps/Dacas.js',true);
	LoadScript('js/maps/Micha.js',true);
	LoadScript('js/maps/Ryci.js',true);
	LoadScript('js/maps/Mirra.js',true);
	LoadScript('js/maps/Creti.js',true);
};
aPlanets = null;
aImageMap = null;
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3756;
