/* ����̵� */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã�����ѡ������Ҫ�Ĺ���:\r\n\r\n����ǰ���Ϊ:#r " + cm.getPlayer().getCSPoints(1) + " #k��\r\n#b#L0#˫������(����˫������ �����ɿ�Go��)#l\r\n#L7#���߾���(ħ������Ʊ�����ȡ�����)#l\r\n#L8#����̵�(�������������� ��������!!!)#l\r\n#L4#�����װ1�ŵ�((�������,�������������)[4.25����])#l\r\n#L14#�����װ2�ŵ�((�������,�������������)[2.8����])#l\r\n#L5#��������(���Ա�֤�͹ٷ����µ�һ��/����������!!)#l\r\n#L6#��������(���������������ʱ������ ˢ���Ȱɣ�)\r\n#L9#�ſ����(������� �۸��ѽ����ף�)#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, 11); //˫������
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900002, 6); //�����װ
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900002, 4); //��������
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900002, 9); //��������
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 10); //ϴ�����
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002, 24); //����̵�
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9900002, 25); //����̵�
            break;
	case 10:
            cm.dispose();
            cm.openNpc(9900002, 100); //�ƹ�ʯͷ
            break;
	case 11:
            cm.dispose();
            cm.openNpc(9900002, 1301); //װ��
            break;
	case 12:
            cm.dispose();
            cm.openNpc(9900002, 1302); //װ��
            break;
	case 13:
            cm.dispose();
            cm.openNpc(9900002, 1303); //װ��
            break;
	case 14:
            cm.dispose();
            cm.openNpc(9900002, 28); //װ��
            break;
        }
    }
}