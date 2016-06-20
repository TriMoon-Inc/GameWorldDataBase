/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Other

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Exception handling.
***************************************************************************/
try{
/***************************************************************************
						Fill Planet Maps.
***************************************************************************/
	// Templates for easy adding
	//Universe.planet("planetname").add( new Map("mapname", 5120,5120, null) );
	//Universe.planet("planetname").add( new Map("mapname", 5120,5120, "img") );
	
	// Fill Planet
	Universe.planet("Other").add( new Map("Tutorial", 5120,5120, "Tutorial") );
	Universe.planet("Other").add( new Map("Barter Town", 5120,5120, "BarterTown") );
	Universe.planet("Other").add( new Map("Moon", 5120,5120, "Moon") );
	Universe.planet("Other").add( new Map(null, 5120,5120 ) );
	/*
		Universe.planet("planetname").makeIMAP("img", aImageMap );
		where aImageMap is:
			Array(new ImageMapArea(), ...)
			Templates for easy adding
				,new ImageMapArea("shape",	Array(shape-coords),	"alt text")
				,new ImageMapArea("shape",	Array(shape-coords),	"alt text",	"Planet|Map")
	*/
/***************************************************************************
						Load Marks
***************************************************************************/
	// Increase numbers for mark files.
	gLoadScript.ToLoad += 0;
	gLoadScript.TotalSize += 0;
	/*	Virtual marks like City and Villages	*/
//	LoadScript('js/marks/Other.js',true);
	/*	Load Map Marks	*/
//	LoadScript('js/marks/Other-.js',true);
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Other").add()\n\n';
	str += e.name + ' in: ';
	if(e.message)		str += e.message;
	if(e.description)	str += e.description;
	oError = new Error(str);
	oError.name = 'ParsingError';
	ShowException(oError);
}
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 2481;
