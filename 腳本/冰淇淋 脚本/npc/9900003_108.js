
var status = 0;
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////����2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////����!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
    if (cm.getMapId() == 180000001) {
        cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
        cm.dispose();
    }
    else if (status == 0) {
        var selStr = "\r\n#e#d���ã�����������ɫ����ϵ��,�������ڴ����..#n#l#k\r\n\r\n";
        //selStr +="\r\n#d======================================================#k\r\n";
        //selStr += "#L11#" + ttt6 + " #r12.#e#b ����˹��ȫ����ս����������(New~)#l#n\r\n";
        //selStr += "#L10#" + ttt6 + " #r11.#e#b ���ﰲ�ؾ�����(New~)#l#n\r\n";
        selStr += "#b#L0#" + ttt6 + " #r1.#b ���ɶ�ɭ�ֱ���ս#l\r\n";
        selStr += "#L1#" + ttt6 + " #r2.#b ȫ��ɻ���ս#l\r\n";
        selStr += "#L2#" + ttt6 + " #r3.#b �����ڳ����ð�ռ�#l\r\n";
        selStr += "#L3#" + ttt6 + " #r4.#b ����������ͥԺ#l\r\n";
        selStr += "#L4#" + ttt6 + " #r5.#b ��սӢ���Ĵ���������#l\r\n";
        selStr += "#L5#" + ttt6 + " #r6.#b �ƽ���Ժ��ɮ��ŵ������Ը#l\r\n";
        selStr += "#L6#" + ttt6 + " #r7.#b �ؿ���������(С��ţ��)#l\r\n";
        selStr += "#L7#" + ttt6 + " #r8.#b ��ɷ�������#l\r\n";
        selStr += "#L8#" + ttt6 + " #r9. [HOT]#b ���޻�����ս#l\r\n";
        selStr += "#L11#" + ttt6 + "#r10. �񻰸���<��ǿ�񻯶���>#l\r\n";
        selStr += "#L9#" + ttt6 + " #r11.#b ����ħ��ŷ����#l\r\n";

        selStr += "\r\n";
        //selStr +="\r\n#d======================================================#k\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 11:
                if (cm.getMapId() == 910000000) {
                    cm.dispose();
                    cm.openNpc(1540446);
                } else {
                    cm.sendOk("�����������г��ſ���ִ������Ŷ~");
                    cm.dispose();
                }
                break;
            case 0:
                cm.dispose();
                cm.openNpc(9900003, 109);
                break;
            case 1:
                cm.worldSpouseMessage(0x20, "[ȫ��ɻ���ս] ����� " + cm.getChar().getName() + " �����˻�������ҡ�");
                cm.dispose();
                cm.warp(540010001, 0);
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9900003, 107);
                break;
            case 3:
                cm.dispose();
                cm.openNpc(9220032);
                break;
            case 4:
                cm.dispose();
                cm.openNpc(9310057);
                break;
            case 5:
                cm.dispose();
                cm.openNpc(9900003, 101);
                break;
            case 6:
                cm.dispose();
                cm.openNpc(9900003, 102);
                break;
            case 7:
                cm.dispose();
                cm.openNpc(9900003, 700);
                break;
            case 8:
                cm.dispose();
                cm.openNpc(2060103);
                break;
            case 9:
                cm.dispose();
                cm.openNpc(9120050);
                break;
            case 10:
                cm.dispose();
                cm.openNpc(2101017, 1);
                break;
            case 11:
                cm.dispose();
                cm.warp(262030000);
                break;


        }
    }
}