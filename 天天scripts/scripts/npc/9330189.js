/* Author: Xterminator
	NPC Name: 		����Ů
	Map(s): 		��֮��У
	Description: 		
*/
var status = 0;

function start() {
    if (cm.getMapId() == 744000000) {
        cm.sendYesNo("�¿��ˣ�����ؼ���");
    } else {
        cm.sendYesNo("�����Ͽ�ȥ�ϿΣ�");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (cm.getMapId() == 744000000) {
            cm.warp(100000000);
        } else {
            cm.warp(744000000);
        }
    }
    cm.dispose();
}