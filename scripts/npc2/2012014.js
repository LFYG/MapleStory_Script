/**
	Orbis Magic Spot - Orbis Tower <1st Floor>(200082100)
**/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    }
    status++;
    if (status == 0) {
	if(cm.haveItem(4001019)) {
	    cm.sendYesNo("ʹ�� #b#t4001019#k ���� #b#p2012014##k. �㽫�ᱻ���ٵĴ��͵� #b#p2012015##k �ԣ��Ƿ�ʹ�ã�");
	} else {
	    cm.sendOk("��Ȼ�п����ƶ���#b#p2012014##k��#b#p2012015##k������û�о��᲻��ʹ�á�");
	    cm.dispose();
	}
    }
    if (status == 1) {
	cm.gainItem(4001019, -1);
	cm.warp(200082100,0);
	cm.dispose();
    }
}
