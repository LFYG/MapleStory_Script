/*
	�������������
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
     cm.setBossLog("������");
     cm.setBossLog("�ܼ�������", 1);
     cm.gainMeso(1000000);
     cm.gainItem(4032398,1);
     cm.warp(910000000);
     cm.sendOk("��ȥ�ɳ����������,��100WҲ�������!���Ǿʹ˰��֣��������ڴ˶�л�ˣ����գ�������л��");
     cm.dispose();
}