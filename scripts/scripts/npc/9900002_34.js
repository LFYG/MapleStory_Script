/*���ֽ�ָ*/
var status = 0;
var choice;
var itemxh=new Array("1113057","1113084","1112663","1112915","1112793","1112932","1113009","1112920","1112160","1112272","1112162","1112274","1112161","1112273","1112940","1112937","1112901",       "1112925","1112928","1112906","1112904","1112148","1112259","1112155","1112267","1112268","1112156","1112229","1112119","1112230","1112103","1112238","1112135","1112150","1112262","1112151","1112263","1112145","1112257","1112143","1112254","1112142","1112253","1112159","1112271","1112152","1112264");
var itemxhcost=new Array("35000","35000","35000","45000","45000","35000","35000","35000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000");

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("�ðɣ���ӭ�´μ������٣�.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã���ѡ����ϣ������Ľ�ָ";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#��#d��Ҫ#r" + itemxhcost[i] + "#d���#k#l";
            }
            cm.sendSimpleS("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#" + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("��ѡ�����ƷΪ#v" + itemxh[selection] + "#�ۼ�Ϊ��" + itemxhcost[selection] + "���/��\r\n�������㹺�������",1,1,cm.getPlayer().getCSPoints(1));
		choice = selection;
        } else if (status == 2) {
            fee = selection;
            money = fee*itemxhcost[choice];
            if (fee < 0) {
            cm.sendOk("��������0.������û���㹻�ĵ��֧����Ҫ�������.!");
            cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) < money) {
            cm.sendOk("����ʧ�ܣ���û��" + money + "���");
            cm.dispose();
            } else {
			cm.gainNX(-money);
            cm.gainItem(itemxh[choice], fee);
            cm.sendOk("��ϲ������ɹ���");
            cm.dispose();
             }
        }
    }
}
