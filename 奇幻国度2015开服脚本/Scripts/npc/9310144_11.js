var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var ttt6 ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
//"#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt5 = "#fUI/UIWindow/Quest/icon5/1#";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";

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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = head + "#e#d��ӭʹ�ð���ù��ȱ��̳ǣ�ʹ�ú󽫻�۳����Ӧ�İ���ù��ȱ�.�����Ų��˿��������ѡ��#n#k:\r\n";
            selStr += "#d����ǰӵ�а���ù��ȱң�  #r"+cm.getPlayerPoints()+"#k #d��#k#l\r\n\r\n";
	    //selStr += "#r#L5#"+ttt6+" ���þ�װ�������̵�#l\r\n\r\n";
	    //selStr += "- #e#d����ר��#n#k\r\n";
            selStr += "#r#L0#"+ttt6+" �󶨱ҹ���װ��[�߼�װ��]#l\r\n";
            selStr += "#L1#"+ttt6+" �󶨱ҹ������[ϡ�����ĵ���]#l\r\n";
            selStr += "#L2#"+ttt6+" �󶨱ҹ�������[�߼�����]#l\r\n";
	    selStr += "#L3#"+ttt6+" �󶨱ҹ������[ʵ�����]#l\r\n";
            //selStr += "#L4#"+ttt6+" �򿪳�ֵ��վ���г�ֵ[1RMB:1000���]#l\r\n";
            selStr += " ";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9310144, 12);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9310144, 13);
            break;
        case 2:
	    cm.sendOk("�ڴ���ӡ�");
            cm.dispose();
            //cm.openNpc(9310144, 15);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9310144, 14);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900003, 16);
            break;
        case 4:
            cm.dispose();
            //cm.openWeb("http://www.libaopay.com/buy/?wid=40792");
	    cm.sendOk("�Ѿ�Ϊ����������վ��");
            break;
		}
    }
}