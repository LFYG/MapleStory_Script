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
        var selStr = "���ã���ӭ����MapleWing:\r\n\r\n#b#L0#����#v5050000#(10��)   2000���#l\r\n#L1#����#v5050000#(50��)   10000���#l\r\n#L2#����#v5050000#(100��)  20000���#l";
          cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getCSPoints(1)>=2000) { 
	    cm.gainNX(-2000);
	    cm.gainItem(5050000,10);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����2000.");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.getPlayer().getCSPoints(1)>=10000) { 
	    cm.gainNX(-10000);
	    cm.gainItem(5050000,50);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����10000.");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1)>=20000) { 
	    cm.gainNX(-20000);
	    cm.gainItem(5050000,100);
		cm.dispose();
            } else {
                cm.sendOk("���ĵ����20000.");
		cm.dispose();
            }
            break;
        }
    }
}
