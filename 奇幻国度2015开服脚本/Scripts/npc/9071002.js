/*
 *	���﹫԰�볡����Ա
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("��á���������ɣ�Ҫ��ʹ�ù��﹫԰����ȻӦ�������ҡ�����Ϊ����ʲô�أ�\r\n#b#L0#����#t4001513##l\r\n#L1#����#t4001515##l\r\n#L2#����#t4001521##l\r\n#L3#�����볡ȯ#l#k");
    } else if (status == 1) {
        if (selection == 0) {
            status = -1;
            if (cm.haveItem(4001513, 10) && cm.canHold(4001514)) {
                cm.gainItem(4001513, -10);
                cm.gainItem(4001514, 1);
                cm.sendOk("��ϲ�㽻���ɹ�.");
                cm.dispose();
            } else {
                cm.sendNext("��ô���£�û�а���Ҫ�뽻���볡ȯ����Ҫ#b10���볡ȯ��Ƭ#k��");
            }
        } else if (selection == 1) {
            status = -1;
            if (cm.haveItem(4001515, 10) && cm.canHold(4001516)) {
                cm.gainItem(4001515, -10);
                cm.gainItem(4001516, 1);
                cm.sendOk("��ϲ�㽻���ɹ�.");
                cm.dispose();
            } else {
                cm.sendNext("��ô���£�û�а���Ҫ�뽻���볡ȯ����Ҫ#b10���볡ȯ��Ƭ#k��");
            }
        } else if (selection == 2) {
            status = -1;
            if (cm.haveItem(4001521, 10) && cm.canHold(4001522)) {
                cm.gainItem(4001521, -10);
                cm.gainItem(4001522, 1);
                cm.sendOk("��ϲ�㽻���ɹ�.");
                cm.dispose();
            } else {
                cm.sendNext("��ô���£�û�а���Ҫ�뽻���볡ȯ����Ҫ#b10���볡ȯ��Ƭ#k��");
            }
        } else if (selection == 3) {
            cm.sendSimple("�š��������������ģ���Ϊ���������ܺã����ԲŻ����������㡣#r�����������볡ȯ��ÿ��һ��ֻ�ܹ���20��#k�����ˣ������һ��Ҫ���ݱ˵������ܣ�\r\n#b#L0##t4001514#20����#l\r\n#L1##t4001516#40����#l\r\n#L2##t4001522#60����#l#k");
        }
    } else if (status == 2) {
        if (selection == 0) {
            if (cm.getBossLog("��԰�볡ȯ") >= 20) {
                cm.sendOk("������Ѿ�������#r20#k�š����������ˡ���Ȼ�ᱻ�ݱ˵������ֵġ������������ɡ�");
            } else if (cm.getMeso() >= 200000 && cm.canHold(4001514)) {
                cm.gainItem(4001514, 1);
                cm.gainMeso( - 200000);
                cm.setBossLog("��԰�볡ȯ");
                cm.sendOk("ף���ڹ��﹫԰��ȹ�����һ�죡");
            } else {
                cm.sendOk("���ǲ���ûǮ������û�ط����볡ȯ�˰�������ȷ��һ�¡�");
            }
        } else if (selection == 1) {
            if (cm.getBossLog("��԰�볡ȯ") >= 20) {
                cm.sendOk("������Ѿ�������#r20#k�š����������ˡ���Ȼ�ᱻ�ݱ˵������ֵġ������������ɡ�");
            } else if (cm.getMeso() >= 400000 && cm.canHold(4001516)) {
                cm.gainItem(4001516, 1);
                cm.gainMeso( - 400000);
                cm.setBossLog("��԰�볡ȯ");
                cm.sendOk("ף���ڹ��﹫԰��ȹ�����һ�죡");
            } else {
                cm.sendOk("���ǲ���ûǮ������û�ط����볡ȯ�˰�������ȷ��һ�¡�");
            }
        } else if (selection == 2) {
            if (cm.getBossLog("��԰�볡ȯ") >= 20) {
                cm.sendOk("������Ѿ�������#r20#k�š����������ˡ���Ȼ�ᱻ�ݱ˵������ֵġ������������ɡ�");
            } else if (cm.getMeso() >= 600000 && cm.canHold(4001522)) {
                cm.gainItem(4001522, 1);
                cm.gainMeso( - 600000);
                cm.setBossLog("��԰�볡ȯ");
                cm.sendOk("ף���ڹ��﹫԰��ȹ�����һ�죡");
            } else {
                cm.sendOk("���ǲ���ûǮ������û�ط����볡ȯ�˰�������ȷ��һ�¡�");
            }
        }
        cm.dispose();
    }
}