var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
	Array(5062002, 1),
	Array(5062500, 1),
	Array(2613000, 60), // �ǻ����������������� - Ϊ���������������������������ԡ�
	Array(2613001, 60), // - �ǻ�������ħ�������� - Ϊ����������������ħ�������ԡ�
	Array(2612010, 60), // - �ǻ�˫���������������� - Ϊ˫�������������������������ԡ�
	Array(4009053, 5),
	Array(4009054, 10),
	Array(4009055, 15),
	Array(4009056, 20),
	Array(4009057, 30),
	Array(4009058, 40),
	Array(4009059, 50),
	Array(2431988, 300, "150����������")
	
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
		cm.sendOk("�ðɣ����㿼��������������ҡ�");
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "#h0#���㵱ǰ��#b��߳ǽ���#k����Ϊ��#r"+cm.getItemQuantity(4031169)+"#k��\r\n��ѡ������Ҫ�һ�����Ʒ��\r\n\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				var extraName = "";
				if (itemlist[i][2]!=null) {
					extraName="("+itemlist[i][2]+")";
				}
				text += "#L" + i + "##i" + itemlist[i][0] + ":##t" + itemlist[i][0] + "#"+extraName+" - #r"+itemlist[i][1]+"#b ��߳ǽ���  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
			/*
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + itemlist[selects][1] + "��#bѩ����#k", 0, 0, 999999);*/
        } else if (a == 1) {
            selects = selection;
			buynum = 1;
            cm.sendYesNo("����һ�" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "��#b��߳ǽ���#k��");
        } else if (a == 2) {
			var itemid = itemlist[selects][0];
			var itemType = Math.floor(itemid/1000000);
			
			var costPoints = buynum * itemlist[selects][1];
            if (cm.haveItem(4031169,costPoints)) {
				if (cm.getSpace(itemType)<1) {
					cm.sendOk("�һ�ʧ�ܣ������ռ䲻�㣡");
					cm.dispose();
					return;
				}
                cm.gainItem(4031169,-costPoints);
				cm.gainItem(itemlist[selects][0], buynum);
				cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻����߳ǽ��ơ�");
                cm.dispose();
            }
        }
    }//mode
}//f