/*
	Noran
 */

var status = -1;

function start() {
    cm.sendSimple("�����ˣ� \r #b#L0# ����ҽ��ʯ��#l \r #L1# �����Ҷ�������#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (status == 1) {
        status--;
        selection = 0;
    } else {
        cm.dispose();
        return;
    }
    switch (status) {
    case 0:
        if (selection == 0) {
            cm.sendNext("����ŵ����˾����������ˡ�����˾�ʼ�ն���̸��������¡�Ҫ����Э�����ƻ���е���ţ���Ҳ������㡣ʹ�û�е���Ų����ȵļ�����Ӧ�ÿ��������ǿ���ĵ��߰ɡ�")
        } else {
            status = 9;
            cm.sendSimple("������һ����\r\n#b#L0##t2070019##l\r\n#L1##t2330007##l");
        }
        break;
    case 1:
        cm.sendNextPrev("��˵�������ѳɹ��������ռ����������ļ�����������ʵ��һ����ȡ���Ӵ����������˵����ԴӲ������Ǳ�ȡ���������������������ʯ����Ҫʹ����ʯ�����������Ƚ��ʯ������ӡ����Ҫ�����ù����ҾͰ�������ӡ��");
        break;
    case 2:
        cm.sendSimple("����ӡ����ʯ�����ҡ�\r\n#b#L0#����#t4020010#�����1,000#t4032181#��#l\r\n#L1#����#t4020012#�����1,000#t4032181#��#l\r\n#L2#����#t4020011#�����1,000#t4032181#��#l");
        break;
    case 3:
        if (selection == 0) {
            if (cm.haveItem(4020010, 1) && cm.haveItem(4032181, 1000)) {
                cm.gainItem(4032169, 1);
                cm.gainItem(4020010, -1);
                cm.gainItem(4032181, -1000);
            } else {
                cm.sendNext("�����û�е���ม��뽻���ұ���ӡ����ʯ�ͷ���1,000#t4032181#�����⣬����˳��ȷ��һ�µ��������Ƿ����㹻��λ��");
            }
        } else if (selection == 1) {
            if (cm.haveItem(4020011, 1) && cm.haveItem(4032181, 1000)) {
                cm.gainItem(4032170, 1);
                cm.gainItem(4020011, -1);
                cm.gainItem(4032181, -1000);
            } else {
                cm.sendNext("�����û�е���ม��뽻���ұ���ӡ����ʯ�ͷ���1,000#t4032181#�����⣬����˳��ȷ��һ�µ��������Ƿ����㹻��λ��");
            }
        } else {
            if (cm.haveItem(4020012, 1) && cm.haveItem(4032181, 1000)) {
                cm.gainItem(4032171, 1);
                cm.gainItem(4020011, -1);
                cm.gainItem(4032181, -1000);
            } else {
                cm.sendNext("�����û�е���ม��뽻���ұ���ӡ����ʯ�ͷ���1,000#t4032181#�����⣬����˳��ȷ��һ�µ��������Ƿ����㹻��λ��");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (selection == 0) {
            if (cm.haveItem(4032168, 1) && cm.haveItem(4032181, 2500) && cm.haveItem(4032171, 1) && cm.haveItem(2070006, 1) && (cm.getMeso() >= 150000000)) {
                cm.gainItem(4032171, -1);
                cm.gainItem(4032168, -1);
                cm.gainItem(2070006, -1);
                cm.gainItem(4032181, -2500);
                cm.gainMeso( - 150000000);
                cm.gainItem(2070019, 1);
            } else {
                cm.sendNext("�ף������û�б�Ҫ���ز��\r\n����#t2070019#��Ҫ��#t4032168#��#t4032170#��#t02070006#1����#t4032181#2,500Ƭ�Լ�500,000,000��ҡ�");
            }
        } else {
            if (cm.haveItem(4032168, 1) && cm.haveItem(4032181, 2500) && cm.haveItem(4032170, 1) && cm.haveItem(2330003, 1) && (cm.getMeso() >= 150000000)) {
                cm.gainItem(4032170, -1);
                cm.gainItem(4032168, -1);
                cm.gainItem(2330003, -1);
                cm.gainItem(4032181, -2500);
                cm.gainMeso( - 150000000);
                cm.gainItem(2330007, 1);
            } else {
                cm.sendNext("�ף������û�б�Ҫ���ز��\r\n����#t2330007#��Ҫ��#t4032168#��#t4032171#��#t02330003#1����#t4032181#2,500Ƭ�Լ�500,000,000��ҡ�");
            }
        }
        cm.dispose();
        break;
    }
}