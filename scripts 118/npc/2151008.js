var status = -1;
var map = 931000500;
var num = 10;
var maxp = 1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status <= 1) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        if (cm.getJob() == 3300 || cm.getJob() == 3310 || cm.getJob() == 3311 || cm.getJob() == 3312) {
            var selStr = "���뵽���ֵ������ڵĵط�ȥ��";
            for (var i = 0; i < num; i++) {
                selStr += "\r\n#b#L" + i + "#�ƶ��� " + (i + 1) + " (" + cm.getPlayerCount(map + i) + "/" + maxp + ")#l#k";
            }
            cm.sendSimple(selStr);
        } else {
            cm.sendOk("�������࡭��(��û�н���������ʸ�ֻ�б����������Խ�����)");
            cm.dispose();
        }

    } else if (status == 1) {
        if (selection < 0 || selection >= num) {
            cm.dispose();
        } else if (cm.getPlayerCount(map + selection) >= maxp) {
            cm.sendNext("This training center is full.");
            status = -1;
        } else {
            cm.warp(map + selection, 0);
            cm.dispose();
        }
    }
}