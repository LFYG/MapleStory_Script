/*
	Hak - Cabin <To Mu Lung>(200000141) / Mu Lung Temple(250000100) / Herb Town(251000000)
*/
var menu = new Array("����", "���֮��", "�ٲ���", "����");
var cost = new Array(6000, 6000, 1500, 1500);
var hak;
var display = "";
var btwmsg;
var method;

function start() {
    status = -1;
    hak = cm.getEventManager("Hak");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else if (mode == 0) {
        cm.sendNext("�ı��뷨��ʱ���Ҵ�ɡ�");
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        for (var i = 0; i < menu.length; i++) {
            if (cm.getMapId() == 200000141 && i < 1) {
                display += "\r\n#L" + i + "##b" + menu[i] + "(" + cost[i] + " ���)#k";
            } else if (cm.getMapId() == 250000100 && i > 0 && i < 3) {
                display += "\r\n#L" + i + "##b" + menu[i] + "(" + cost[i] + " ���)#k";
            }
        }
        if (cm.getMapId() == 200000141 || cm.getMapId() == 251000000) {
            btwmsg = "#b���֮��#k �� #b����#k";
        } else if (cm.getMapId() == 250000100) {
            btwmsg = "#b����#k �� #b���֮��#k";
        }
        if (cm.getMapId() == 200000141 && (hak == null || hak.getProperty("isRiding").equals("true"))) {
            cm.sendNext("Someone else is on the way to Mu Lung right now. Talk to me a little bit more.");
            cm.dispose();
        }
        if (cm.getMapId() == 251000000) {
            cm.sendYesNo("��ô�����Ҵ� " + btwmsg + " �ٵ����ڡ��ҵ��ٶȺܿ�İɣ�������뷵�� #b" + menu[3] + "#k ����ô���Ǿ����̳������������ǵø���һЩ����Ǯ���۸��� #b" + cost[3] + " ���#k��");
        } else {
            cm.sendSimple("������ " + btwmsg + " ȥ�Ļ�������Щ����Ǯ�����㡣���������������ȥ����ˡ���ô����\r\n" + display);
        }
    } else if (status == 1) {
        if (selection == 2) {
            cm.sendYesNo("��ȷ��Ҫȥ #b" + menu[2] + "#k �� ��ô��Ҫ������ #b" + cost[2] + " ���#k��");
        } else {
            if (cm.getMeso() < cost[selection]) {
                cm.sendNext("��ȷ�������㹻�Ľ�ң�");
                cm.dispose();
            } else {
                if (cm.getMapId() == 251000000) {
                    cm.gainMeso( - cost[3]);
                    cm.warp(250000100);
                    cm.dispose();
                } else {
                    if (hak != null && hak.getProperty("isRiding").equals("false")) {
                        cm.gainMeso( - cost[selection]);
                        hak.newInstance("Hak");
                        hak.setProperty("myRide", selection);
                        hak.getInstance("Hak").registerPlayer(cm.getChar());
                        cm.dispose();
                    } else {
                        cm.sendNext("Someone else is on the way to Orbis right now. Talk to me a little bit more.");
                        cm.dispose();
                    }
                }
            }
        }
    } else if (status == 2) {
        if (cm.getMeso() < cost[2]) {
            cm.sendNext("��ȷ�������㹻�Ľ�ң�");
            cm.dispose();
        } else {
            cm.gainMeso( - cost[2]);
            cm.warp(251000000);
            cm.dispose();
        }
    }
}