/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Interactive

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
	//	NPCType(sName, nVariant, sDesc)
	
	/*	Templates for easy adding
	NPCs.add( new NPCType("", 0, "<i>&ldquo;&rdquo;</i>") );
	NPCs.get().addItem("");
	*/
	NPCs.add( new NPCType("Aeneas", 0, "<i>List to Brax<br>"
						+"&ldquo;First goto <span style=\"color:yellow\">Northern Orc Woods</span> and then find a <span style=\"color:yellow\">woodcutter</span> named <span style=\"color:yellow\">Brax</span> and give him the <span style=\"color:yellow\">list</span> please.&rdquo;</i>") );
	NPCs.add( new NPCType("Abner", 0, "<i>15 Larvea skinns</i> for <i>Half Leather Armor</i>.") );
	NPCs.add( new NPCType("Bevan", 0, "Sells <i>10 Arrows</i> for <i>One Krona.</i>") );
	NPCs.add( new NPCType("Kelleran", 0, "<i>&ldquo;Hi, my name is <span style=\"color:yellow\">Kelleran</span>,<br>"
						+"I&acute;m a collector of <span style=\"color:yellow\">rare</span> and items from all over the world.&rdquo;<br>"
						+"&ldquo;These items can be found anywhere from the depths of <span style=\"color:red\">hell</span> to the highest <span style=\"color:lime\">mountains</span>.&rdquo;<br>"
						+"&ldquo;Do you have any <span style=\"color:lime\">rare items</span> to trade to me or do you require more <span style=\"color:yellow\">information</span> on these rare items i would like?&rdquo;</i><br>"
						+"Rare Items are: <span style=\"color:lime\"><i>Balls&nbsp;of&nbsp;Slime</i>, <i>Orc&nbsp;Lord&nbsp;Bones</i>, <i>Queen&nbsp;Wasp&nbsp;Wing</i>, <i>Ice&nbsp;Queen&nbsp;Heart</i>, <i>Deamon&nbsp;Rabbit&nbsp;Meat</i></span>") );
	NPCs.add( new NPCType("Kontar", 0, "<b>Marble man</b><br>Gamble 100kr for 0-500Kr."
						+"<br>&ldquo;Hello and welcome [maddam/sir], you look like a beter [race], want to try your luck at the marbles?&rdquo;") );
	NPCs.add( new NPCType("Lucretia", 0, "<i>&ldquo;You can't beat home cooking, you cant beat a lovely rare steak.&rdquo;</i>") );
	NPCs.add( new NPCType("Metos", 0, "<i>Gems</i> of any kind.<br>5Kr and 25Exp per Gem.<br>(Max 20 at a time)") );
	NPCs.add( new NPCType("Morblood", 0, "<i>&frac34; Leather Armor</i> for<br><i>Half Leahter Boots</i> + 475Kr.") );
	NPCs.add( new NPCType("Nemo", 0, "<i>&ldquo;Have you ever been to <span style=\"color:yellow\">Hador Island</span>?&rdquo;<br>"
						+"&ldquo;I need to get a <span style=\"color:yellow\">message</span> to a friend of mine named <span style=\"color:yellow\">Tamok</span> who lives there,<br>"
						+"but my wife has come down with a fever and i can&acute;t leave her side to deliver it myself.<br>"
						+"If I tell you how to get there will you deliver the message for me?&rdquo;</i>") );
	NPCs.add( new NPCType("Pet Trainer", 0, "<b>To make your Pet higher level.</b><br>"
						+"<i>Per level 25Kr, and 25 + 225 * &sum;(1..Level) Exp.<br>"
						+"Example: Level4 needs 2275 Exp.</i>") );
	NPCs.add( new NPCType("Repair Man", 0, "Repairs damaged/broken items.") );
	NPCs.add( new NPCType("Repair Smith", 0, "Repairs damaged/broken items.") );
	NPCs.add( new NPCType("Ruby", 0, "<i>&ldquo;Hello. I am busy making my wife a bracelet but i haven&acute;t enough to finish it.<br>"
						+"If you get any <u>Rubies</u> I will give you something for them.&rdquo;</i>") );
	NPCs.add( new NPCType("Stogg", 0, "<i>&ldquo;It sure is a good day for hunting <span style=\"color:yellow\">Rabbits</span>&rdquo;<br>"
						+"<br>&ldquo;I&acute;m a Fur trader and i am looking to trade <span style=\"color:yellow\">Rabbit furs</span>.&rdquo;<br>"
						+"&ldquo;I will pay for any <span style=\"color:lime\">Rabbit Fur</span> you can find.&rdquo;</i>") );
	NPCs.add( new NPCType("Sunny", 0, "<i>&ldquo;Those Slimes are getting a real problem for us poor folk."
						+"<br>If only...I had some <u>Red Sprite Wings</u> I could make a potion to stop them from eating everything in their path!&rdquo;</i>"
						+"<br>Give this NPC some <i>Red Sprite Wings</i> for Exp or Krona.") );
	NPCs.add( new NPCType("Webster", 0, "15Exp + 5Kr per <i>Spider Web</i>.") );
	NPCs.add( new NPCType("Zed", 0, "<i>&ldquo;I&acute;m a gem trader an i am looking to trade for <span style=\"color:yellow\">Gems of any kind</span>&rdquo;<br>"
						+"&ldquo;I will pay for any <span style=\"color:lime\">Gems</span> you can find.&rdquo;</i>") );
	//	Barter Town Warps.
	NPCs.add( new NPCType("Noruth Warp", 0, "Teleport to <i><a href=\"javascript:Navigate('Other|Barter Town')\">Barter&nbsp;Town</a></i>.") );
	//	Banks
	NPCs.add( new NPCType("FreeWorld Banker", 0, "<i>&ldquo;Hi i work for the <span style=\"color:yellow\">FreeWorld Bank</span>&rdquo;<br>"
							+"&ldquo;If you find you have <span style=\"color:yellow\">too many</span> items in your inventory or that your being slowed down by <span style=\"color:yellow\">excess baggage</span> you have come to the right place!&rdquo;<br>"
							+"&ldquo;You can <span style=\"color:yellow\">leave your items</span> with me and retrieve your items from me or any <span style=\"color:yellow\">other banker</span> in FreeWorld!&rdquo;<br>"
							+"&ldquo;I <span style=\"color:yellow\">don&acute;t charge</span> for this service, however;<br>Be warned that some bankers in <span style=\"color:yellow\">distant places</span> may <span style=\"color:yellow\">charge</span> you a little to put in or take out items.&rdquo;<br>"
							+"&ldquo;If you want to use this service, just <span style=\"color:lime\">left</span> click me.&rdquo;</i>") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 6425;
