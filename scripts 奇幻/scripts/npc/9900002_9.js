/*��������*/
var status = 0;
var daze1;
var choice;
var itemxh=new Array("5072000","5073000","5074000","5076000","5077000","5390000","5390001","5390002","5390003","5390004","5390005","5390006","5390007","5390008","5079001","5079002","5390010","5390011","5390012","5390013");
var itemxhcost=new Array("1500","2500","2500","2000","3000","8000","8000","8000","10000","10000","10000","20000","8000","8000","1500","1500","12000","12000","12000","12000");

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
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã���ѡ����ϣ�����������";
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
			daze  = fee*(itemxhcost[choice]*0.88);
            if (fee < 0) {
            cm.sendOk("��������0.������û���㹻�ĵ��֧����Ҫ�������.!");
            cm.dispose();
			} else if (cm.getChar().getVip() >= 1 && cm.getPlayer().getCSPoints(1) > daze) {
			daze1 = 1;
			cm.sendYesNo("ϵͳ��⵽���������ң��ش�Ϊ���8.8���Ż�Ŷ��\r\n#eԭ��#n��#b#e"+ money +"#n#k��#e�ּ�#n��#r#e"+ daze +"#n#k��С������ȥ��\r\n�����Ƿ�Ҫ����");
            } else if (cm.getPlayer().getCSPoints(1) < money) {
            cm.sendOk("����ʧ�ܣ���û��" + money + "���");
            cm.dispose();
            } else {
			cm.gainNX(-money);
            cm.gainItem(itemxh[choice], fee);
            cm.sendOk("��ϲ������ɹ���");
            cm.dispose();
             }
		} else if (status == 3) {
		    daze = daze;
			fee = fee;
		    if (daze1 == 1){
			cm.gainNX(-daze);
            cm.gainItem(itemxh[choice], fee);
            cm.sendOk("��ϲ������ɹ���");
            cm.dispose();
			}
        }
    }
}
