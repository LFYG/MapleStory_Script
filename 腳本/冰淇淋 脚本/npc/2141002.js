/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Twilight of the gods
	Description: 		Pink Bean
 */

function start() {
    cm.sendYesNo("����������ȥ��?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.openNpc(9310144);
    }
    cm.dispose();
}