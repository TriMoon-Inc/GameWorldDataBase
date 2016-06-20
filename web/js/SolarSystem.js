/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
// Tabsize:8
/***************************************************************************
				Global Variables
***************************************************************************/
// Exclusive map and mark files.
gLoadScript.ToLoad	= 1 + 9;
gLoadScript.TotalSize	= 5223 + 189899;
/***************************************************************************
				Load Next file.
***************************************************************************/
LoadScript('js/TestBrowser.js');
LoadScript('js/ClassLib.js');
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript){
	gLoadScript.Loaded++;
	gLoadScript.SizeLoaded += 1018;
};
