/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Forgotten Twilight
	Description: 		Ʒ����Զ��
*/

function start() {
    cm.dispose();
    if (cm.getChannelNumber() == 1) { //��ͨƷ����Զ��
        cm.openNpc(2141001, 1);
    } else if (cm.getChannelNumber() == 2) { //����Ʒ����Զ��
        cm.openNpc(2141001, 2);
    } else {
        cm.sendOk("ֻ���� #r1#k �� #r2#k Ƶ���ſ��Բμ�Ʒ����Զ��.\r\n\r\n #b1 Ƶ��Ϊ ��ͨƷ����Զ��#k\r\n\r\n #r2 Ƶ��Ϊ ����Ʒ����Զ��#k");
    }
}