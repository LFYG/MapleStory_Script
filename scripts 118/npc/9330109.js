/* Kedrick
	Fishking King NPC
*/

var yrs = 200;
var gjyr = 2300001;
var ybyr = 2300000;
var njbs = 300000;
var ygt = 5350000;

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        cm.sendSimple("#r" + cm.getVipname() + " #k,����Ҫ��ʲô�أ�#b\n\r #L1#���������#l \n\r #L3#�����ͷ�һ����#l#k");
    } else if (status == 1) {
        sel = selection;
        if (sel == 1) {
            cm.sendYesNo("���� #r" + yrs + " #k �� #b #i" + ybyr +":##t" + ybyr + "# #k ��� ��Ҫ #r" + njbs + " #k ��� .\r\n ���빺����?");
        } else if (sel == 3) {
            if (cm.canHold(gjyr, yrs) && cm.haveItem(ygt, 1)) {
                if (!cm.haveItem(gjyr)) {
                    cm.gainItem(gjyr, yrs);
                    cm.gainItem(ygt, -1);
                    cm.sendNext("ף��������֣�");
                } else {
                    cm.sendNext("���Ѿ���#b #i" + gjyr +":##t" + gjyr + "# #k��.");
                }
            } else {
                cm.sendOk("�������ı����Ƿ��ܹ���ŵ��� #r" + yrs + " #k �� #b #i" + gjyr +":##t" + gjyr + "# #k\r\n���� ���Ƿ���#b #i" + ygt +":##t" + ygt + "#.");
            }
            cm.safeDispose();
        }
    } else if (status == 2) {
        if (sel == 1) {
            if (cm.canHold(ybyr, 120) && cm.getMeso() >= njbs) {
                if (!cm.haveItem(ybyr)) {
                    cm.gainMeso( - njbs);
                    cm.gainItem(ybyr, yrs);
                    cm.sendNext("ף��������֣�");
                } else {
                    cm.sendNext("���Ѿ��� #b #i" + ybyr +":##t" + ybyr + "# #k��.");
                }
            } else {
                cm.sendOk("�������ı����Ƿ��ܹ���ŵ��� #r" + yrs + " #k �� #b #i" + ybyr +":##t" + ybyr + "# #k\r\n���� ���Ƿ���#r" + njbs + " #k ���.");
            }
            cm.safeDispose();
        }
    }
}