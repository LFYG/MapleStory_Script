/* RED 1st impact
 The Explorer Book and A Maple Leaf
 Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            qm.sendNextS("��?��û���Ǻ���!", 4, 9900004);
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNextS("��������������ǩ�������,!", 4, 9900004);
    } else if (status == 1) {
        qm.sendYesNoS("��ô����?Ҫ������?", 15, 1012100);
    }  else if (status == 2) {
        qm.sendNextS("��ô,ϣ��������ÿ�춼�ܹ�������ǩ��Ŷ,���и���������ڵȴ���.", 4, 9900004);
    } else if (status == 3) {
        //qm.forceStartQuest();
		qm.dispose();
		qm.openNpc(9310058);
    }
}

