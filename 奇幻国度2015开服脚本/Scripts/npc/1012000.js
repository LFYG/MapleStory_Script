/* �������а� */

var status = 0;
var maps = Array(100000000, 101000000, 102000000, 103000000, 104000000, 105000000, 120000100);
var cost = Array(1000, 1000, 1000, 1000, 1000, 1000, 1000);
var selectedMap = -1;
var sCost;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    } else if (status >= 2 && mode == 0) {
        cm.sendNext("�����кܶ����Ķ�����������뵽��������ȥ����ӭ��ʱ���������⳵��");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("��á�������#p" + cm.getNpc() + "#��������ٰ�ȫ���ƶ���������ׯ�������Ļ��������Ϊ�˿��ṩ��÷����#b#p" + cm.getNpc() + "##k�ɡ����ǿ����Ժܱ��˵ļ۸񣬽����͵���ȥ�ĵط���");
    } else if (status == 1) {
        var selStr = "";
        if (cm.isBeginnerJob()) {
            selStr = "������ҿ��Ի��#b90%#k���ۿۡ���ѡ��Ŀ�ĵء�#b";
        } else {
            selStr = "��ѡ�����Ŀ�ĵذɡ�����Ŀ�ĵز�ͬ������Ҳ������ͬ��#b";
        }
        for (var i = 0; i < maps.length; i++) {
            if (cm.getMapId() != maps[i]) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " ���)#l";
            }
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        sCost = (cm.isBeginnerJob() ? cost[selection] / 10 : cost[selection]);
        cm.sendYesNo("������������鶼�Ѿ��������˰��������Ҫ�ƶ��� #b#m" + maps[selection] + "##k ȥ�𣿼۸��� #b" + (sCost) + " ���#k.");
        selectedMap = selection;
    } else if (status == 3) {
        if (cm.getMeso() < sCost) {
            cm.sendNext("�����û���㹻�Ľ�ң������Ļ����Ҳ���Ϊ�����");
        } else {
            cm.gainMeso( - sCost);
            cm.warp(maps[selectedMap], 0);
        }
        cm.dispose();
    }
}