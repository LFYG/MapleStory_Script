//Ů��֮Ѫ��
var status = 0;
var itemPosition=0;
//�������ĵĸ���
var expendNum = -1;
var meso = 0;
var typed = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (status == 0) {
		im.sendSimple("�������񻰶�����ĸ�ǿ����#b\r\n#L1#�һ��񻰶���#l\r\n#L2#�����񻰶���#l");
	} else if (status == 1) {
		if (selection == 1) {
			if (im.haveItem(2432014, 10)) {
				im.sendYesNo("���Ƿ�����10��Ů��Ѫ�ζһ�һ�������񻰶�����");
				typed=1;
			} else {
				im.sendOk("�һ�ʧ�ܣ��һ��񻰶�������Ҫ��10��Ů��Ѫ�Ρ�");
				im.dispose();
			}
		} else if (selection == 2) {
			typed=2;
			var itemList = im.getInventory(1).list().iterator();
			var text = "��ѡ����Ҫ�����Ķ�����\r\n";
			var indexof = 0;
			while(itemList.hasNext()) {
				var item = itemList.next();
				var flag = true;
				switch(item.getItemId()) {
					case 1032205: // �񻰶��� - (������)
						expendNum=10;
						break;
					case 1032206: // �񻰶�����ԭ��1�׶� - (������)
						expendNum=20;
						break;
					case 1032207: // �񻰶�����ԭ��2�׶� - (������)
						expendNum=50;
					case 1032208: // �񻰶�����ԭ��3�׶� - (������)
						expendNum=100
					case 1032209: // �񻰶�����ԭ��4�׶� - (������)
						expendNum=200;
						meso = 1500000000;
						break;
					default:
						flag=false;
					//1032219 // ����֮�񻰶��� - (������)
				}
				if (!flag)
					continue;
				if (indexof > 1 && indexof % 5 == 0) {
					text += "\r\n";
				}
				indexof++;
				text += "#L"+item.getPosition()+"##v"+item.getItemId()+"##l";
			}
			if (indexof==0) {
				status = -1;
				text = "û�п��Խ����������񻰶���";
			}
			im.sendSimple(text);
		}
	} else if (status == 2) {
		if (typed == 1) {
			im.gainItem(1032205, 1);
			im.gainItem(2432014, -10);
			im.sendOk("�һ��ɹ���");
			im.dispose();
		} else if (typed == 2) {
			itemPosition = selection;
			itemId = im.getInventory(1).getItem(itemPosition).getItemId();
			var upgradeItemId = (itemId == 1032209) ? parseInt(itemId)+10 : parseInt(itemId)+1;
			var mesoTip = "��";
			if (meso>0) {
				mesoTip = "��"+meso+"��Ϸ�ң�";
			}
			im.sendYesNo("��#b#v"+itemId+"##k����Ϊ#b#v"+upgradeItemId+"#��Ҫ����"+expendNum+"��Ů��֮Ѫ��"+mesoTip+"���Ƿ�������");
		}
	} else if (status == 3) {
		if (im.haveItem(2432014, expendNum) && im.getMeso() >= meso) {
			//itemPosition = selection;
			itemId = im.getInventory(1).getItem(itemPosition).getItemId();
			var upgradeItemId = (itemId == 1032209) ? parseInt(itemId)+10 : parseInt(itemId)+1;
			im.removeSlot(1, itemPosition, 1);
			im.gainItem(upgradeItemId, 1);
			if (upgradeItemId == 1032219)
				im.worldSpouseMessage(0x15, "[�񻰶���] : ��ϲ " + im.getChar().getName() + " �ɹ��� �񻰶�����ԭ��4�׶� ����Ϊ ����֮�񻰶�����");
			im.sendOk("��ϲ�㣬�õ���#v"+upgradeItemId+"#");
			im.gainItem(2432014, -expendNum);
			im.safeDispose();
		} else {
			var mesoTip = "��";
			if (meso>0) {
				mesoTip = "��"+meso+"��Ϸ�ң�";
			}
			im.sendOk("����Ů��Ѫ�β��㣬��ǰ������Ҫ#r"+expendNum+"#k��Ů��Ѫ��"+mesoTip);
			im.dispose();
		}
	}
}