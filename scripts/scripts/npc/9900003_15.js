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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã�����ѡ������Ҫ�Ĺ���:\r\n(#r�뿴�ù���Ŷ.���˾�����!#k):\r\n#b#L0#˫������#l		#L7#���߾���#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, 11); //˫������
            break;
        case 4:
		cm.sendOk("�뵽³����ȥ��ɣ������ﶼû����~");
            cm.dispose();
         //   cm.openNpc(9900002, 6); //�����װ
            break;
        case 5:
		cm.sendOk("�뵽³����ȥ��ɣ������ﶼû����~");
            cm.dispose();
          //  cm.openNpc(9900002, 4); //��������
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
		cm.sendOk("�뵽³����ȥ��ɣ������ﶼû����~");
            cm.dispose();
          //  cm.openNpc(9900002, 24); //����̵�
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
            cm.openNpc(9900002, 1301); //һ��Ǳ��
            break;
        }
    }
}