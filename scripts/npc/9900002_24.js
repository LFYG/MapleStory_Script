var status = 0;
var typed=0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("����.��ӭ��ʹ�û�����.�����������ҽ����»�����������Ʒ��.����Ķ������ǻ�����������.��׼���ÿ�������û��\r\n#v2046074# #v2046075# #v2046149# #v2049701# #v1382049# #v1382050# #v1382051# #v1382052# #v1432039# #v2040212# #v2040121# #v1012174# #v1122080# #v1003114# #v1003209#\r\n#b#L1#��Ҫ��������{70000���/��}#l");	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("��ã�#h #��\r\nף������.\r\n�Ƿ����Ҫ������?"); 
			}
			if (selection == 2) {
                    cm.dispose();
		    cm.openNpc(9000086, 1);
			}
			if (selection == 3) {
                    cm.dispose();
		    cm.sendOk("����ڳﱸ��...");
			}
			if (selection == 4) {
                    cm.dispose();
		    cm.openNpc(9000086,2);
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getPlayer().getCSPoints(1)>=25000) { 
                    cm.gainItem(5060003, 1);
                    cm.gainNX(-70000);
                    cm.sendOk("����ɹ�.��鿴����");
                    cm.dispose();
                } else {
                    cm.sendOk("��û��70000���");
                    cm.dispose();
                }
			}
		}
	}
}