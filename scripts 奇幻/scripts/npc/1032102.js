/*
 �ű����ܣ����︴��
 */

var a = 0;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
			else
			a--;
		if (a == -1) {
			cm.dispose();
		} else if (a == 0) {
			var text="�ˣ���ʲô���԰�������\r\n";
			text+="#b#L2#����������\r\n";
			text+="#b#L1#�������#l\r\n";
			cm.sendSimple(text);
		} else if (a == 1) {
			if (selection == 2) {
				a = -1;
				cm.sendSimple("���������Ҫ���#b���ִ�������#k��#b��߳�������#k���������֮�������ң�����#r2000��#k��Ϸ�Һ�#r3#k�������������ҾͿ���Ϊ��İ����ӳ�#r30��#k������Ŷ��");
			} else {
				var text = "��ѡ����Ҫ����ĳ��\r\n";
				var list = cm.getInventory(5).list();
				var petList = list.iterator();
				var petItemList = Array();
				var timeStamp = java.lang.System.currentTimeMillis();
				while (petList.hasNext()) {
					var pet = petList.next();
					if (Math.floor(pet.getItemId()/10000)!=500)
						continue;
					if (pet.getExpiration()>=timeStamp)
						continue;
					petItemList[pet.getPosition()]=pet.getItemId();
				}
				var indexof=0;
				for(var key in petItemList) {
					text += "#L" + key + "##v" + petItemList[key] + "#";
					if (indexof > 1 && indexof % 5 == 0) {
						text += "\r\n";
					}
					indexof++;
				}
				if (petItemList.length==0) {
					cm.sendOk("�����û����Ҫ����ĳ���Ŷ��");
					cm.dispose();
					return;
				}
				cm.sendSimple(text);
			}
		} else if (a == 2) {
			if (cm.getMeso()<20000000) {
				cm.sendOk("��û����ô����Ϸ�ң���û��Ϊ�����");
				cm.dispose();
				return ;
			}
			if (!cm.haveItem(4310066, 3)) {
				cm.sendOk("��û����ô�ඬ�������ң���û��Ϊ�����");
				cm.dispose();
				return ;
			}
			if (cm.getBossLog("��������")<=0 || cm.getBossLog("�������") <= 0) {
				cm.sendOk("�㻹û�����������������������������޷�������");
				cm.dispose();
				return ;
			}
			var pos = selection;
			var  item = cm.getInventory(5).getItem(pos);
			var toDrop = item.copy();
			var timeStamp = java.lang.System.currentTimeMillis();
			var expirationDate = timeStamp+30*86400*1000;
			toDrop.setExpiration(expirationDate);
			cm.removeSlot(5, pos, 1)
			cm.addFromDrop(cm.getC(), toDrop, false);
			cm.gainMeso(-20000000);
			cm.gainItem(4310066, -3);
			cm.sendOk("����ɹ�������İ�����������30���������");
			cm.dispose();
		}
	}//mode
}//f

