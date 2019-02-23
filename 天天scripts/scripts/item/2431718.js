status = -1;
position = Array();
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("����ʹ����");
            im.dispose();
        }
        status--;
    }
    if (status == 0) {
	im.getEquipBySlot(1);
	im.dispose();
	return;
        im.sendSimple("����Ϊ�㴩�������ϵ�װ����ħ���������ս������\r\n#b#L1#�淨˵��#l\r\n#L2#��ʼ��ħ#l\r\n");
    } else if (status == 1) {
		if (selection==1) {
			status=-1;
			var text="��ħ�ܹ����Ϊ�㴩�������ϵ�װ������#r1-3#k�������ֵ�ӳɣ��ܹ��ӳɵ�����ֵ��#b���������ǡ��ˡ�������ħ����������ħ��������ֵ���ر�ֵ��HP��MP#k����ħʱ�뱣֤���ϴ�����װ������15��������15������";
			im.sendSimple(text);
		} else {
			var list = im.getInventory(-1).list();
			var itemList = list.iterator();
			while (itemList.hasNext()) {
				var item = itemList.next();
				if (im.isCash(item.getItemId()))
					continue; //���˵�װ
				position.push(item.getPosition());
			}
			if (im.getBossLog("װ����ħ") >= 30) {
				im.sendOk("װ����ħÿ��ֻ�ܽ���30�Σ��������Ѿ�û�д���������ħ�ˡ�");
				im.dispose();
				return ;
			}
			if (position.length<1) {
				im.sendOk("���ϵ�װ������15�����޷����и�ħ��");
				im.dispose();
				return ;
			}
			im.sendYesNo("��ħ�ɹ���װ�����ᱻ�ѷŵ�#e#bװ����#n#k����ħ�����޷���ԭ��\r\n\r\n#d�Ƿ������ħ��");
		}
	} else {
		var ii = im.getItemInfo();
		var pos = Math.floor(Math.random()*position.length);
		var item = im.getInventory(-1).getItem(position[pos]);
		var toDrop = item.copy();
		var attrName = "";
		var attr = Math.floor(Math.random()*12);
		var upgradeNum = Math.floor(Math.random()*3+1);
		switch(attr) {
			case 0:
				toDrop.setStr(item.getStr()+upgradeNum);
				attrName = "����";
				break;
			case 1:
				toDrop.setDex(item.getDex()+upgradeNum);
				attrName = "����";
				break;
			case 2:
				toDrop.setInt(item.getInt()+upgradeNum);
				attrName = "����";
				break;
			case 3:
				toDrop.setLuk(item.getLuk()+upgradeNum);
				attrName = "����";
				break;
			case 4:
				toDrop.setHp(item.getHp()+upgradeNum);
				attrName = "HP";
				break;
			case 5:
				toDrop.setMp(item.getMp()+upgradeNum);
				attrName = "MP";
				break;
			case 6:
				toDrop.setWatk(item.getWatk()+upgradeNum);
				attrName = "������";
				break;
			case 7:
				toDrop.setMatk(item.getMatk()+upgradeNum);
				attrName = "ħ����";
				break;
			case 8:
				toDrop.setWdef(item.getWdef()+upgradeNum);
				attrName = "������";
				break;
			case 9:
				toDrop.setMdef(item.getMdef()+upgradeNum);
				attrName = "ħ��������";
				break;
			case 10:
				toDrop.setAcc(item.getAcc()+upgradeNum);
				attrName = "����ֵ";
				break;
			case 11:
				toDrop.setAvoid(item.getAvoid()+upgradeNum);
				attrName = "�ر�ֵ";
				break;
		}
		im.removeSlot(-1, position[pos], 1)
		im.addFromDrop(im.getC(), toDrop, true);
		im.setBossLog("װ����ħ");
		var text = "��ϲ�㣬�ɹ�ʹ#v"+item.getItemId()+"#������#r"+upgradeNum+"#k��#b"+attrName+"#k����򿪱���#e#bװ����#n#k�鿴�����д�����";
		im.sendOk(text);
		im.remove(1);
		im.dispose();
	}
}