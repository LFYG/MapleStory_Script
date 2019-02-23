/*
װ������
 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var status;
var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed=0;
var beDeletedArr = new Array();
var listq = Array(
	2, 5, 20
);
var itemq = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            text = head+"�ҿ��԰�����ֽ�130~150��װ�����ֽ�װ�����Ի��#b����������#k��\r\n\r\n";
            text += "#b#L0#"+icon+" �˽�ֽ�˵��#l\r\n";
			text += "#b#L1#"+icon+" �ֽ�ָ��װ��#l\r\n";
			text += "#b#L2#"+icon+" һ���ֽ�130��139װ��#l\r\n";
            cm.sendSimple(text);
		} else if (status == 1){
			if (selection == -1)
				selection = 1;
			switch(selection) {
				case 0:
					text = "#e#d�ֽ�˵��#n#k��\r\n";
					text += "ֻ��130���ϵ�װ�����Խ��зֽ⡣\r\n";
					text += "130-139װ���ֽ��ɻ��2��#v4310129#\r\n";
					text += "140-149װ���ֽ��ɻ��5��#v4310129#\r\n";
					text += "150-159װ���ֽ��ɻ��20��#v4310129#\r\n";
					cm.sendOk(text);
					cm.dispose();
				break;
				case 1:
					inventoryType = 1;
					var list = cm.getInventory(inventoryType).list();
					itemList = list.iterator();
					text = "\t\t#e- ��ѡ��Ҫ�ֽ��װ�� -#n\r\n\r\n#b";
					var indexof = 1;
					var newItemList = Array();
					while (itemList.hasNext()) {
						var item = itemList.next();
						if (cm.isCash(item.getItemId()))
							continue;
						var reqLevel = cm.getReqLevel(item.getItemId());
						if (reqLevel < 130 || reqLevel > 150)
							continue;
						newItemList[item.getPosition()]=item.getItemId();
					}
					for(var key in newItemList) {
						text += "#L" + key + "##v" + newItemList[key] + "#";
						if (indexof > 1 && indexof % 5 == 0) {
							text += "\r\n";
						}
						indexof++;
					}
					if (newItemList.length <= 0) {
						cm.sendSimple("��û�п��Էֽ��װ����");
						status = -1;
						return;
					}
					typed=1;
					cm.sendSimple(text);
				break;
				case 2:
					inventoryType = 1;
					var list = cm.getInventory(inventoryType).list();
					itemList = list.iterator();
					text = "\t\t#e- ������׼���ֽ��װ��,��˶���ϸ -#n\r\n\r\n#b";
					var indexof = 1;
					var newItemList = Array();
					while (itemList.hasNext()) {
						var item = itemList.next();
						if (cm.isCash(item.getItemId()))
							continue;
						var reqLevel = cm.getReqLevel(item.getItemId());
						if (reqLevel >= 130 && reqLevel <140) {
							newItemList[item.getPosition()]=item.getItemId();
							beDeletedArr.push(item.getPosition());
						}
					}
					for(var key in newItemList) {
						text += "#v" + newItemList[key] + "#";
						indexof++;
					}
					text+="\r\n#r#e�ֽ���������棬��ȷ���Ƿ�Ҫ�ֽ�����װ����#n#k";
					typed=2;
					if (newItemList.length <= 0) {
						cm.sendSimple("��û�п��Էֽ��װ����");
						status = -1;
						return;
					}
					cm.sendYesNo(text);
				break;
			}
		} else if (status == 2) {
			if (typed==1) {
				var item = cm.getInventory(inventoryType).getItem(selection);
				deleteSlot = selection;
				deleteQuantity = item.getQuantity();
				var reqLevel = cm.getReqLevel(item.getItemId());
				itemq = getType(reqLevel);
				if (cm.getSpace(4)<2) {
					cm.sendOk("���������Ӳ��㣬�������ֽ⡣");
					cm.dispose();
					return ;
				}
				text = "#eȷ��Ҫ�ֽ�#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "�� #k��#k";
				cm.sendNextPrev(text);
			} else if (typed==2) {
				itemq=getType(130);
				var count = beDeletedArr.length*itemq;
				for(var key in beDeletedArr) {
					cm.removeSlot(1, beDeletedArr[key], 1);
				}
				cm.gainItem(4310129, count);
				//cm.gainItem(4001832, count);
				text="�ֽ�ɹ��������#v4310129#"+count+"��";
				cm.sendOk(text);
				cm.dispose();
			}
		} else if (status == 3) {
			if (typed==1) {
				cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
				//cm.gainItem(4001832, itemq);
				cm.gainItem(4310129, itemq);
				text="�ֽ�ɹ��������#v4310129#"+itemq+"��";
				cm.sendOk(text);
				cm.dispose();
			}
		}
    }
}

function getType(reqLevel) {
	if (reqLevel >= 130 && reqLevel < 139) {
		return listq[0];
	} else if (reqLevel >= 140 && reqLevel < 149) {
		return listq[1];
	} else if (reqLevel >= 150 && reqLevel < 159) {
		return listq[2];
	} else {
		return 0;
	}
}