/**
	Chief Tatamo - Leafre(240000000)
**/

var section;
var temp;
var cost;
var count;
var menu = "";
var itemID = new Array(4000226, 4000229, 4000236, 4000237, 4000261, 4000231, 4000238, 4000239, 4000241, 4000242, 4000234, 4000232, 4000233, 4000235, 4000243);
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
	    cm.dispose();
	}
        if (status > 2) {
            if (section == 0) {
                cm.sendOk("Please think carefully. Once you have made your decision, let me know.");
            } else {
                cm.sendOk("Think about it, and then let me know of your decision.");
            }
            cm.safeDispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("������������\r\n#L0##bħ������#k#l\r\n#L1##bΪ����ľ����ж�#k#l\r\n#L2##bI want the Dragon Moss Extract#k#l");
    } else if (status == 1) {
        section = selection;
        if (section == 0) {
            cm.sendSimple("���������Ǵ��ӵ��ˣ�����ʲô�£�#L0##b��õ�#t4031346#��#k#l");
        } else if (section == 1) {
            cm.sendNext("���õĽ�������Ǵ峤��ְ��������Ҫ������õĵ��ߡ�����Ϊ�˴�����׳�����ľ�帽���ռ����ĵ�����");
        } else {
            if (cm.isQuestActive(3759)) {
                if (cm.haveItem(4032531)) {
                    cm.sendNext("Dragon Moss Extract...? I already gave you that!");
                } else {
                    cm.sendNext("Dragon Moss Extract...Ah, I see. I will give it to you in this situation.");
                    cm.gainItem(4032531, 1);
                }
            } else {
                cm.sendNext("What are you talking about? Dragon Moss Extract...?");
            }
            cm.dispose();
        }
    } else if (status == 2) {
        if (section == 0) {
            cm.sendGetNumber("#b#t4031346##k �ǹ�����Ʒ�����ܰ��͸��㡣����һ���Ĵ��ۿ�����һ��#b#t4031346##k #b30,000 ���#k ����Ҫ������", 0, 0, 99);
        } else {
            for (var i = 0; i < itemID.length; i++) {
                menu += "\r\n#L" + i + "##b#t" + itemID[i] + "##k#l";
            }
            cm.sendNext("������׳����ֵ����أ�" + menu);
            //cm.safeDispose();
        }
    } else if (status == 3) {
        if (section == 0) {
            if (selection == 0) {
                cm.sendOk("���ܹ���0����");
                cm.safeDispose();
            } else {
                temp = selection;
                cost = temp * 30000;
                cm.sendYesNo("����#b" + temp + " #t4031346#(s)#k��Ҫ#b" + cost + " ���#k��������");
            }
        } else {
            temp = selection;
            if (!cm.haveItem(itemID[temp])) {
                cm.sendNext("����δӵ�и���Ʒ��");
                cm.safeDispose();
            } else {
                cm.sendGetNumber("How many #b#t" + itemID[temp] + "#k's would you like to donate?\r\n#b< Owned : #c" + itemID[temp] + "# >#k", 0, 0, "#c" + itemID[temp] + "#");
            }
        }
    } else if (status == 4) {
        if (section == 0) {
            if (cm.getMeso() < cost || !cm.canHold(4031346)) {
                cm.sendOk("��ȷ�������㹻�Ľ�ҹ��򣬻������������������û���㹻�Ŀռ䡣");
            } else {
                cm.sendOk("�뿼��������������ҡ�");
                cm.gainItem(4031346, temp);
                cm.gainMeso( - cost);
            }
            cm.safeDispose();
        } else {
            count = selection;
            cm.sendYesNo("Are you sure you want to donate #b" + count + " #t" + itemID[temp] + "##k?");
        }
    } else if (status == 5) {
        if (count == 0 || !cm.haveItem(itemID[temp], count)) {
            cm.sendNext("Please check and see if you have enough of the item.");
        } else {
            cm.gainItem(itemID[temp], -count);
            cm.sendNext("��ӭ����");
        }
        cm.safeDispose();
    }
}