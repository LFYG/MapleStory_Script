/*�̳ǵ���*/
var status = 0;
var daze1;
var choice;
var itemxh=new Array("5062009","2500000","5050000","5050001","5050002","5050003","5050004","2501000","5062400","2049405","5530268","5530269","2048305","5064003","5062500","5064000","5064100","2614012","2614013","2614014");
var itemxhcost=new Array("1880","15000","200","400","600","1000","1500","35000","30000","30000","2500","3000","3888","7000","2888","3888","4888","2000","20000","200000");

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
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã���ѡ����ϣ������ĵ���";
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
			daze = fee*(itemxhcost[choice]*0.88);
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
