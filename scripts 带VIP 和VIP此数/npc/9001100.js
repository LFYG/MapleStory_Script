
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
	var v = getVIP(cm);
	var selStr = "�𾴵�" + ((v==0)?"":"#rVIP"+v+"#k") + "���#r#h ##k����,��ѡ��������Ҫ�Ĺ���\r\nʥ����#r" + cm.itemQuantity(4031454) + " #k��Ҷ��#r" + cm.itemQuantity(4001126); 
	cm.sendSimple(selStr);
    } else if(status == 1) {
	switch (selection){
	case 11:
		break;
	default:
		cm.sendOk("default");
		cm.dispose();
		break;
	}

    }
}

//���VIP�ȼ�
function getVIP(cm){
	var v_p = 4031331;
	for (var i = 7;i >= 1;i--){
		if (cm.itemQuantity(v_p + i)!=0) return i;
	}
	return 0;
}



