/* �������а� */

var status = 0;
var maps =  [100000000, 101000000, 102000000, 104000000, 105000000, 120000000];
var maps0 = [104000000, 103000000, 105000000, 102000000, 101000000, 120000000]; //�� �� ��100000000
var maps1 = [104000000, 100000000, 105000000, 101000000, 103000000, 120000000]; //��ʿ����102000000
var maps2 = [104000000, 100000000, 105000000, 102000000, 103000000, 120000000]; //ħ������101000000
var maps3 = [104000000, 100000000, 105000000, 102000000, 101000000, 120000000]; //��������103000000
var maps4 = [103000000, 100000000, 105000000, 102000000, 101000000, 120000000]; //�� �� ��104000000
var maps5 = [104000000, 100000000, 105000000, 102000000, 101000000, 103000000]; //ŵ����˹120000000

var cost = [1000, 1000, 1000, 1000, 1000, 1000];
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
        cm.sendNext("��á�������#p1012000#��������ٰ�ȫ���ƶ���������ׯ�������Ļ��������Ϊ�˿��ṩ��÷����#b#p1012000##k�ɡ����ǿ����Ժܱ��˵ļ۸񣬽����͵���ȥ�ĵط���");
    } else if (status == 1) {
        var selStr = "";
        if (cm.isBeginnerJob()) {
            selStr = "������ҿ��Ի��#b90%#k���ۿۡ���ѡ��Ŀ�ĵء�#b";
        } else {
            selStr = "��ѡ�����Ŀ�ĵذɡ�����Ŀ�ĵز�ͬ������Ҳ������ͬ��#b";
        }
        if (cm.getMapId() == 100000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps0[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " ���)#l";
            }
        } else if (cm.getMapId() == 102000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps1[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " ���)#l";
            }
        } else if (cm.getMapId() == 101000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps2[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " ���)#l";
            }
        } else if (cm.getMapId() == 103000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps3[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " ���)#l";
            }
        } else if (cm.getMapId() == 104000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps4[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " ���)#l";
            }
        } else if (cm.getMapId() == 120000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps5[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " ���)#l";
            }
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        sCost = (cm.isBeginnerJob() ? cost[selection] / 10 : cost[selection]);
        if (cm.getMapId() == 100000000) {
            cm.sendYesNo("������������鶼�Ѿ��������˰��������Ҫ�ƶ��� #b#m" + maps0[selection] + "##k ȥ�𣿼۸��� #b" + (sCost) + " ���#k.");
            selectedMap = selection;
        } else if (cm.getMapId() == 102000000) {
            cm.sendYesNo("������������鶼�Ѿ��������˰��������Ҫ�ƶ��� #b#m" + maps1[selection] + "##k ȥ�𣿼۸��� #b" + (sCost) + " ���#k.");
            selectedMap = selection;
        } else if (cm.getMapId() == 101000000) {
            cm.sendYesNo("������������鶼�Ѿ��������˰��������Ҫ�ƶ��� #b#m" + maps2[selection] + "##k ȥ�𣿼۸��� #b" + (sCost) + " ���#k.");
            selectedMap = selection;
        } else if (cm.getMapId() == 103000000) {
            cm.sendYesNo("������������鶼�Ѿ��������˰��������Ҫ�ƶ��� #b#m" + maps3[selection] + "##k ȥ�𣿼۸��� #b" + (sCost) + " ���#k.");
            selectedMap = selection;
        } else if (cm.getMapId() == 104000000) {
            cm.sendYesNo("������������鶼�Ѿ��������˰��������Ҫ�ƶ��� #b#m" + maps4[selection] + "##k ȥ�𣿼۸��� #b" + (sCost) + " ���#k.");
            selectedMap = selection;
        } else if (cm.getMapId() == 120000000) {
            cm.sendYesNo("������������鶼�Ѿ��������˰��������Ҫ�ƶ��� #b#m" + maps5[selection] + "##k ȥ�𣿼۸��� #b" + (sCost) + " ���#k.");
            selectedMap = selection;
        }
    } else if (status == 3) {
        if (cm.getMeso() < sCost) {
            cm.sendNext("�����û���㹻�Ľ�ң������Ļ����Ҳ���Ϊ�����");
        } else {
            cm.gainMeso( - sCost);
            if (cm.getMapId() == 100000000) {
                cm.warp(maps0[selectedMap], 0);
            } else if (cm.getMapId() == 102000000) {
                cm.warp(maps1[selectedMap], 0);
            } else if (cm.getMapId() == 101000000) {
                cm.warp(maps2[selectedMap], 0);
            } else if (cm.getMapId() == 103000000) {
                cm.warp(maps3[selectedMap], 0);
            } else if (cm.getMapId() == 104000000) {
                cm.warp(maps4[selectedMap], 0);
            } else if (cm.getMapId() == 120000000) {
                cm.warp(maps5[selectedMap], 0);
            }
        }
        cm.dispose();
    }
}
