var icon = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var icon2 = "#fUI/Basic.img/BtMin2/normal/0#";
var typed=1;
var cost = 5;
var itemid = 0;
var paynx = 20;
var equip = null;
var btnOk="#fUI/CashShop.img/CSCoupon/BtOK/normal/0#";
var btnOk_disabled="#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#";
var isUpgrade = false;
var dropGrade = 0;
var successRate = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (status == 0) {
		var text="���������º�~��һ��������װҪ�����ˡ���\r\n#b";
		text+="#L1##rʱװ����ϵͳ���#l#b\r\n\r\n";
		text+="#L2#"+icon2+" ��ʼǿ��#l\r\n";
		text+="#L3#"+icon2+" ��ȡÿ�ո���#l\r\n";
		//text+="#L3#"+icon2+" ������ʱװ #rx"+cost[1]+"/��#b#l\r\n";
		//text+="#L4#"+icon2+" ���������Ҿ���ʱװ #rx"+cost[2]+"/��#l\r\n";
		//text+="#L5#"+icon2+" һ���񼶾��� #r#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1){
		if (selection == 1) {
			typed=1;
			//var text="����ҵĵȼ��ﵽ#e#r120#n#k��ʱ����ʹ��ʱװ����ϵͳ��ʱװ����ϵͳ�ܹ�Ϊ��ĵ�װ����һ����#b���������ݡ���������������������ħ����������ֵ#k��Ŀǰ����ʹ����Ϸ�ҡ�������������Ҽ����װ��ÿ�־��ѵķ�ʽ����������Ч������ͬ��\r\n"+icon+" ʹ��#r��Ϸ��#k���ѵ�װֻ��Ϊ��װ����#b���������ݡ�����������#k���ĸ�����ֵ����������ֵ��Ϊ#r1#k\r\n"+icon+" ʹ��#b���#k���ѵ�װ����Ϊ��װ����������������ֵ�������������#r1-3#k��\r\n"+icon+" ʹ��#b����������#k���ܹ�������ֲ���#r2-6#k�㣬���м��ʲ���ȫ����#b+15#k��#r�񼶾���#k\r\n\r\n#r#e(*) ���Ѻ�ĵ�װ�����ظ�����";
			var text = "#d#eʲô��ʱװ���ǣ�#n#k\r\n";
			text+="\tʱװ����ָ����Ϊû�����Եĵ�װ����ǿ������ԣ���������԰���#b���������ݡ�������������ħ������HP��MP�����������ر�ֵ��#r��ʼǿ��ʱ�����Ҫǿ���ĵ�װ������װ������һ���λ�ã�#k#k\r\n";
			text+="\r\n#d#e���Ϊʱװ���ǣ�#n#k\r\n";
			text+="\tʱװ������Ҫ����#t4310129#�ͼ��������ĵ��\r\n";
			text+="\t#b1~5��#k��ʱװ#b�����������ݡ�������������#r+1#k\r\n";
			text+="\t#b6~10��#k��ʱװ#b�����������ݡ�������������#r+1��#b��ħ��������������#r+1,#b��HP��MP��#r+30#k\r\n";
			text+="\t#b11~15��#k��ʱװ#b�����������ݡ�������������#r+1��#b��ħ��������������#r+3,#b��HP��MP��#r+50#k\r\n";
			//text+="\t#b�񼶾���#k��ʹ��#d����������#k�м��ʽ�ʱװ���ѵĵȼ�����Ϊ�񼶾��ѵ�Ч����ʹ��ʱװ#b�����������ݡ�������������ħ���������������ر�ֵ��#d����ֵ#r+15#k#k\r\n";
			text+="\r\n#d#e����˵����#n#k\r\n";
			text+="\t���ֵȼ���ǿ��ʧ��ʱ���ܻ�����Ǽ����˵�����12~15��ǿ�����ʧ�ܣ��Ǽ���Ȼ�½���\r\n";
			cm.sendPrev(text);
		} else if (selection == 2) {
			equip = cm.getInventory(1).getItem(1);
			if (equip==null) {
				cm.sendOk("��ȷ��������ĵ�һ����װ�����ڣ�");
				cm.dispose();
				return;
			}
			itemid = equip.getItemId();
			if (!cm.isCash(itemid)) {
				cm.sendOk("��ȷ��������ĵ�һ�����ֽ������");
				cm.dispose();
				return;
			}
			var currentStar = equip.getEnhance();
			if (currentStar>=15) {
				cm.sendOk("��ǰװ����ǿ��������Ǽ����޷�����ǿ����");
				cm.dispose();
				return;
			}
			calcRate(currentStar+1);
			//ǿ��������
			if (isUpgrade) {
				if (!cm.haveItem(4310129, cost) || cm.getPlayer().getCSPoints(1)<paynx) {
					cm.sendOk("���ĵ����߶��������Ҳ��㣬���飡");
					cm.dispose();
					return ;
				}
				var successChance = Math.floor(Math.random()*100);
				if (successRate >= successChance) {
					//ǿ���ɹ�
					upgrade();
					cm.getPlayer().dropMessage(-1, "ǿ���ɹ�");
				} else {
					//ǿ��ʧ��
					var dropChance = Math.floor(Math.random()*100);
					if (dropGrade >= dropChance) {
						dropgrade();
						cm.getPlayer().dropMessage(-1, "ǿ��ʧ�ܣ�������");
					} else {
						cm.getPlayer().dropMessage(-1, "ǿ��ʧ��");
					}
				}
				cm.gainItem(4310129, -cost);
				cm.gainNX(-paynx);
				//���»�ȡװ������
				currentStar = equip.getEnhance();
				//���¼������
				calcRate(currentStar+1);
				
			}
			
			//�������
			var text = "#d#e��ǰǿ��װ����#n#k#v"+itemid+"#\r\n";
			text += "#d#e��ǰǿ���ȼ���#n#k";
			var isStar = 0;
			for(var i =0; i<currentStar; i++) {
				text += icon;
				if ((i+1)%5==0)
					text+=" ";
				isStar++;
			}
			if (isStar<=0)
				text+="#rδǿ��#k\r\n";
			else
				text+="\r\n";
			text+="#d#e����ǿ�����ߣ�  #n#k#b#t4310129# #r"+cost+"#k��\r\n";
			text+="#d#eʣ��ǿ�����ߣ�  #n#k#b"+cm.getItemQuantity(4310129)+"#k��\r\n";
			text+="#d#e���ĵ��������  #n#k#b"+paynx+"#k ��\r\n";
			text+="#d#e����ǿ���ɹ��ʣ� #n#k"+successRate+"%\r\n";
			if (dropGrade == 0)
				text+="#e#g����ǿ��ʧ�ܲ��½��Ǽ�#n#k\r\n";
			else if (dropGrade == 100) 
				text+="#e#r����ǿ��ʧ�ܱ�Ȼ�½��Ǽ�#n#k\r\n";
			else
				text+="#e#r����ǿ��ʧ�ܿ����½��Ǽ�#n#k\r\n";
			text+="#L2#"+btnOk+"#l";
			status=0;
			isUpgrade = true;
			cm.sendSimple(text);
		}
 	} else if (status == 2){
		
	}
}
function calcRate(enhance) {
	if (enhance >= 1 && enhance <= 5) {
		if (enhance == 1) {
			dropGrade = 0;
		} else {
			dropGrade = 50;
		}
		successRate=100-((enhance-1)*10);
		cost = 5;
		paynx = 20;
	}
	if (enhance >= 6 && enhance <= 10) {
		if (enhance == 6) {
			dropGrade = 0;
		} else if (enhance == 10){
			dropGrade = 100;
		} else {
			dropGrade = 50;
		}
		successRate=76-((enhance-6)*10);
		cost = 25;
		paynx = 50;
	}
	if (enhance >= 11 && enhance <= 15) {
		if (enhance == 11) {
			dropGrade = 0;
		} else if (enhance == 13 || enhance == 14 || enhance == 15){
			dropGrade = 100;
		} else {
			dropGrade = 50;
		}
		successRate=36;
		cost = 125;
		paynx = 100;
	}
}
function upgrade() {
	var _Str = 1;
	var _Dex = 1;
	var _Int = 1;
	var _Luk = 1;
	var _Matk = 0;
	var _Watk = 0;
	var _Acc = 0;
	var _Hp = 0;
	var _Mp = 0;
	if (equip.getEnhance()>=5 && equip.getEnhance()<=9) {
		_Matk = 1;
		_Watk = 1;
		_Acc = 1;
		_Hp = 30;
		_Mp = 30;
	}
	if (equip.getEnhance()>=10 && equip.getEnhance()<=14) {
		_Matk = 3;
		_Watk = 3;
		_Acc = 3;
		_Hp = 50;
		_Mp = 50;
	}
	if (equip.getEnhance() >= 15) {
		return false;
	}
	var ii = cm.getItemInfo();				
	var toDrop = equip.copy();       
	toDrop.setStr(equip.getStr()+_Str); //װ������
	toDrop.setDex(equip.getDex()+_Dex); //װ������
	toDrop.setInt(equip.getInt()+_Int); //װ������
	toDrop.setLuk(equip.getLuk()+_Luk); //װ������
	toDrop.setMatk(equip.getMatk()+_Matk); //������
	toDrop.setWatk(equip.getWatk()+_Watk); //ħ������ 
	toDrop.setHp(equip.getHp()+_Hp); //ħ������ 
	toDrop.setMp(equip.getMp()+_Mp); //ħ������ 
	toDrop.setAcc(equip.getAcc()+_Acc); //
	toDrop.setEnhance(equip.getEnhance()+1); //
	//toDrop.setOwner(level);
	toDrop.setExpiration(equip.getExpiration());
	cm.removeItem(1, 1, 1);
	cm.addFromDrop(cm.getC(), toDrop, false);
	
	equip = cm.getInventory(1).getItem(1);
	if (equip.getEnhance()==10) {
		cm.worldMessageItem("[ʱװ����] : " + "���[" + cm.getPlayer().getName() + "]����ǧ����࣬��ʱװǿ���� 10 ��", toDrop);
	} else if (equip.getEnhance()==15) {
		cm.worldMessageItem("[ʱװ����] : " + "����˼�飬���[" + cm.getPlayer().getName() + "]��ʱװǿ���� 15 ��", toDrop);
	}
	return true;
}
function dropgrade() {
	var _Str = -1;
	var _Dex = -1;
	var _Int = -1;
	var _Luk = -1;
	var _Matk = 0;
	var _Watk = 0;
	var _Acc = 0;
	var _Hp = 0;
	var _Mp = 0;
	if (equip.getEnhance()>=6 && equip.getEnhance()<=10) {
		_Matk = -1;
		_Watk = -1;
		_Acc = -1;
		_Hp = -30;
		_Mp = -30;
	}
	if (equip.getEnhance()>=11 && equip.getEnhance()<=15) {
		_Matk = -3;
		_Watk = -3;
		_Acc = -3;
		_Hp = -50;
		_Mp = -50;
	}
	if (equip.getEnhance() <= 0) {
		return false;
	}
	var ii = cm.getItemInfo();				
	var toDrop = equip.copy();       
	toDrop.setStr(equip.getStr()+_Str); //װ������
	toDrop.setDex(equip.getDex()+_Dex); //װ������
	toDrop.setInt(equip.getInt()+_Int); //װ������
	toDrop.setLuk(equip.getLuk()+_Luk); //װ������
	toDrop.setMatk(equip.getMatk()+_Matk); //������
	toDrop.setWatk(equip.getWatk()+_Watk); //ħ������ 
	toDrop.setHp(equip.getHp()+_Hp); //ħ������ 
	toDrop.setMp(equip.getMp()+_Mp); //ħ������ 
	toDrop.setAcc(equip.getAcc()+_Acc); //
	toDrop.setEnhance(equip.getEnhance()-1); //
	//toDrop.setOwner(level);
	toDrop.setExpiration(equip.getExpiration());
	cm.removeItem(1, 1, 1);
	cm.addFromDrop(cm.getC(), toDrop, false);
	equip = cm.getInventory(1).getItem(1);
	return true;
}