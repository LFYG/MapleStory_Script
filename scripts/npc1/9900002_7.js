var status = -1;
var selectedpay = 0;
var acash = 700;

function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 2) {
                cm.sendNext("�������Ҫ��ֵ���һ��ɵ��Ļ�����ô���´������ң�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("�װ���#b#h ##k���ã���������ð�յ���ҵ���ֵ�һ�Ա������������ϢΪ:\r\n��ֵ���:#r " + cm.getHyPay(1) + " #kԪ\r\n�����ѽ��:#r " + cm.getHyPay(2) + " #kԪ\r\n�ۼƳ�ֵ�ܽ��:#r " + cm.getHyPay(3) + " #kԪ\r\n#b#L0#�һ����(1:700)");
        } else if (status == 1) {
            if (cm.getHyPay(1) == 0) {
                cm.sendNext("��û�пɶһ��ĳ�ֵ��");
                cm.dispose();
            } else {
                cm.sendGetNumber("��������Ҫ�һ��ĳ�ֵ���:\r\n��Ϸ���Ķһ�����Ϊ 1 : 700\r\n", 1, 1, cm.getHyPay(1));
            }
        } else if (status == 2) {
            selectedpay = selection;
            if (cm.getHyPay(1) < selectedpay) {
                cm.sendNext("����ֵ������");
                cm.dispose();
            } else {
                cm.sendYesNo("���Ƿ�Ҫ��#r " + selectedpay + " #kԪ�ĳ�ֵ���һ���#b " + selectedpay * acash + " #k�ĵ��");
            }
        } else if (status == 3) {
            if (cm.getHyPay(1) < selectedpay) {
                cm.sendNext("����ֵ������");
            } else if (cm.addHyPay(selectedpay) > 0) {
                cm.gainNX(selectedpay * acash);
                cm.sendOk("��ϲ���ɹ��һ�#b " + selectedpay * acash + " #k�ĵ�����ζһ����ѳ�ֵ���#r " + selectedpay + " #kԪ����Ŀǰ�ĳ�ֵ���Ϊ:#r " + cm.getHyPay(1) + " #kԪ��");
            } else {
                cm.sendOk("�һ������ִ����뷴��������Ա��");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}