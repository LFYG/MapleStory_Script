var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt5 = "#fUI/UIWindow/Quest/icon5/1#";

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
        var selStr = "#e#d��ӭʹ�ð�è����̳ǣ�ʹ�ú󽫻�۳����Ӧ�İ�è���.�����Ų��˿��������ѡ��#n#k:\r\n";
            selStr += "#d����ǰӵ�а�è��ң�  #r"+cm.getPlayerPoints()+"#k #d��#k#l\r\n\r\n";
	    selStr += "#r#L5#"+ttt6+" ���þ�װ�������̵�[��˿ר��]#l\r\n\r\n";
	    selStr += "- #e#d����ר��#n#k\r\n";
            selStr += "#r#L0#"+ttt6+" �󶨱ҹ���װ��[���ָ����߼�װ��]#l\r\n";
            selStr += "#L1#"+ttt6+" �󶨱ҹ������[����ϡ�����ĵ���]#l\r\n";
	    selStr += "#L3#"+ttt6+" �󶨱ҹ������[����ʵ�ݻ������]#l\r\n";
            selStr += "#L4#"+ttt6+" �򿪳�ֵ��վ���г�ֵ[1RMB:3000���]#l\r\n";
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
            cm.openWeb("http://pay.qhmxd.com/C9282C7CB115FF80DE1D1E332714A98A8CF197AFA4001C48D851F420F336115C833DC915FFCC72950658A03EC4A9D8642927DB8C4F9602901B207E24C1B6025FADFA05D03BB7D3019B2DDBAE3103B0D9");
	    cm.sendOk("�Ѿ�Ϊ����������վ��");
            break;
		}
    }
}