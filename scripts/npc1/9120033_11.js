importPackage(net.sf.odinms.client);
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("ʲô��");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendNext("ΰ��İ���Ů����Ҫ5�ž�����Ƭ���� #bף������#k .");
        }
        else if (status == 1) {
            if ((cm.haveItem(4001136, 5)) &&

            (cm.haveItem(2050003)) && (cm.getMeso() >= 100000)) {
                cm.sendYesNo("һ���⣬���ֳ�Ů���ģ��.Ů�������Ӧ����˵���Ƿ�ϳ� #bף������#k ��");
            }
            else if (!cm.haveItem(4001136, 5)) {
                cm.sendOk("ף��������Ҫ 5 �� #b������Ƭ#k ���������ܹ��ϳ� .");
                cm.dispose();
            }
            else if (!cm.haveItem(2050003)) {
                cm.sendOk("5�ž�����Ƭ֮����Ҫ1ƿʥˮ��Ϊ���� #bף������#k ҩ��.");
                cm.dispose();
            }
            else if (!cm.getMeso() <= 100000) {
                cm.sendOk("�㻹��Ҫ #b100000���#k ��Ϊ��������ķ���.");
                cm.dispose();
            }

        }
        else if (status == 2) {
            cm.LaBaNotice("һ���� " + cm.getplayername() + " �����Ů��ı����³ɹ��ϳ��� ף������ ��"); 
            cm.gainMeso( - 100000);
            cm.gainItem(4001136, -5);
            cm.gainItem(2050003, -1);
            cm.gainItem(2340000, 1);
        }
    }
}