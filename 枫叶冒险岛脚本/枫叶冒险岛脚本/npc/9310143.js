var icon ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;


function start() {
	status = -1;
	action(1,0,0);
}
function action(mode, type, selection) {
	if (mode == -1) { //ExitChat
        cm.dispose();
		return;
    } else if (mode == 0) { //No
        cm.dispose();
	}
	if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (status == 0) {
		cm.sendSimple("��ã���һ���ɣ���Ҫ����ʲô�أ�\r\n\r\n#b#L5# "+icon+" �ϳ�װ�� #L1# "+icon+" �����װ #L2# "+icon+" ϡ������\r\n\r\n#L3# "+icon+" ��Ʒ���� #L6# "+icon+" Ʒ����װ #L4# #r"+icon+" ʹ��˵��");
	} else if (status == 1) {
		switch(selection) {
			case 1:
				cm.dispose();
				cm.openNpc(9000069, 1);
			break;
			case 2:
				cm.dispose();
				cm.openNpc(9000069, 2);
			break;
			case 3:
			//����
				cm.dispose();
				cm.openNpc(9000069, 3);
			break;
			case 4:
				cm.sendOk("Ԫ����ֵ��ɺ�������ͨ�ȼ�����Ա����Ԫ���һ���ĿǰԪ�����Զһ�ѩ���Һ͵��");
				cm.dispose();
			break;
			case 5:
				cm.dispose();
				cm.openNpc(9000069, 4); 
			break;
			case 6:
				cm.dispose();
				cm.openNpc(9310144, 999);
			break;
		}
	} else {
		//cm.sendOk(status);
		cm.dispose();
	}
}