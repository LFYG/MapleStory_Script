/*
	�ű�����: 		NPC
	���ڵ�ͼ:		�����
	�ű�����:	 	�뿪NPC
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            cm.sendSimple("������ʲô�أ�#b\r\n#L0# �鿴��������á�\r\n#L1# �����뿪���")
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendNext("������ǻ��������д���͵ĵط����������������������˵������ͺ����")
            } else {
                status = 2;
                if (mode == 1) {
                    cm.sendYesNo("�뿪���ﲻ���˻�����Ŷ���´��ٽ�����ʱ��Ҫ����������")
                } else {
                    cm.dispose();
                }
            }
        } else if (status == 2) {
            cm.sendNext("����������Ժͱ��������죬���ʱ�����ȤŶ��")
            cm.dispose();
        } else if (status == 3) {
            cm.sendNext("��ʹ��ˣ�����Ҫ�뿪��")
        } else if (status == 4) {
            cm.sendNext("�õģ�����������ȥ��")
        } else if (status == 5) {
            cm.warp(700000000);
            cm.dispose();
        }
    }
}