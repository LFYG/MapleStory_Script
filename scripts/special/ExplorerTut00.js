/*
����NPC
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } 

	if (status == 0) {
	    cm.sendNextS("���������Ƿ�����",16);
		cm.forceStartQuest(32201);
		cm.forceCompleteQuest(32201);
    } else if (status == 1) {	
	    cm.sendNextS("�ȵ�����ȥ�ɡ�",16);
		cm.dispose();
	} 

}
