/**
 *Mary
 */
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
        var selStr = "��ã���ѡ������Ҫ�һ�����Ʒ\r\n#L0##v2340000##L1##v2049100##L2##v1012191##L3##v1022097##L4##v1132013#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310034) >=5){
		cm.gainItem(4310034,-5);
		cm.gainItem(2340000,1);//ף������
                cm.sendOk("�һ�#v2340000#x1�ɹ�.��鿴����");
		cm.dispose();
            } else {
                cm.sendOk("��û��5��#v4310034#");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310034) >=5){
		cm.gainItem(4310034,-5);
		cm.gainItem(2049100,1);//�������
                cm.sendOk("�һ�#v2049100#x1�ɹ�.��鿴����");
		cm.dispose();
            } else {
                cm.sendOk("��û��5��#v4310034#");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310034) >=5){
		cm.gainItem(4310034,-5);
		cm.gainItem(1012191,1);//��Ӱ˫�����
                cm.sendOk("�һ�#v1012191#x1�ɹ�.��鿴����");
		cm.dispose();
            } else {
                cm.sendOk("��û��5��#v4310034#");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310034) >=5){
		cm.gainItem(4310034,-5);
		cm.gainItem(1022097,1);//���۾�
                cm.sendOk("�һ�#v1022097#x1�ɹ�.��鿴����");
		cm.dispose();
            } else {
                cm.sendOk("��û��5��#v4310034#");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310034) >=5){
		cm.gainItem(4310034,-5);
		cm.gainItem(1132013,1);//����ķ�������
                cm.sendOk("�һ�#v1132013#x1�ɹ�.��鿴����");
		cm.dispose();
            } else {
                cm.sendOk("��û��5��#v4310034#");
		cm.dispose();
            }
            break;
        }
    }
}