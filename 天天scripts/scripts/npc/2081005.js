/*
	NPC ����: 		���ޱ�-������
	���ڵ�ͼ: 		����֮Ѩ����
	�ű�����: 		��������Զ����
*/

var status = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        //cm.playerMessage("����: status-- " + status);
        if (status == 10 || status == 11) {
            cm.dispose();
        }
        status--;
    }
    if (cm.getPlayer().getMapId() == 240040700) {
        if (selection < 100) {
            cm.sendSimple("#r#L100#��������(��ͨ)#l\r\n#L101#��������(����)#l\r\n#L102#�Ҳ���ս��#l");
        } else {
            if (selection == 100) {
                if (cm.haveItem(5220006) && (cm.getPlayer().getClient().getChannel() == 3 || cm.getPlayer().getClient().getChannel() == 4)) {
                    cm.gainItem(5220006, -1);
                    cm.warp(240050400, 0); //�����������
                    cm.dispose();
                } else {
                    cm.warp(240040600);
                    cm.sendOk("ֻ����3Ƶ����4Ƶ���ſ��ԲμӺ���Զ���� \n���û�к����볡�� �Ͳ��ܽ���.");
                    cm.dispose();
                }
            } else if (selection == 101) {
                if (cm.haveItem(5220006) && (cm.getPlayer().getClient().getChannel() == 3 || cm.getPlayer().getClient().getChannel() == 4)) {
                    cm.gainItem(5220006, -1);
                    cm.warp(240050400, 0); //�����������
                    //cm.warp(240060201, 0); //���װ�������
                    cm.dispose();
                } else {
                    cm.warp(240040600);
                    cm.sendOk("ֻ����3Ƶ����4Ƶ���ſ��ԲμӺ���Զ���� \n���û�к����볡�� �Ͳ��ܽ���.");
                    cm.dispose();
                }
            } else if (selection == 102) {
                cm.warp(240040600);
                cm.dispose();
            }
        }
    }
}