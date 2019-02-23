importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else 
		cm.dispose();
	if (status == 0 && mode == 1) {
		var selStr = "#b5Ԫð�յ����ϳ�ϵͳ.\r\n#k����ĸ���ڸ߼���ͼ���е��䡢BOSS����ֱ�ӵ����ƷŶ��\r\n#k����������ʲô�£�#b"
		var options = new Array("������ʯĸ��","������ʯĸ��","����װ������");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}	
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //mineral refine
			var selStr = "��������ʲô��ʯ��#b";
			var minerals = new Array ("��ͭ","����","﮿�ʯ","���ʯ","��","�Ͽ�ʯ","�ƽ�");
			for (var i = 0; i < minerals.length; i++){
				selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
		}
		else if (selectedType == 1){ //jewel refine
			var selStr = "��������ʲô��ʯ��#b";
			var jewels = new Array ("ʯ��ʯ","��ˮ��","������ʯ","��ĸԵ","����ʯ","����ʯ","�ƾ�","��ʯ","��ˮ��");
			for (var i = 0; i < jewels.length; i++){
				selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
		} else if (selectedType == 2){ //helmet refine
			var selStr = "����ϳ�ʲô���ߣ�#b";
var helmets = new Array ("������Ÿ�",
			"�����Ƽ׽�",
			"���㾪����",
			"��������",
			"���������",
			"���������",
			"���������",
			"������ڤ��",
			"����������",
			"����������",
			"������ʥǹ",
			"��������",
			"���㾪�繭",
			"����ڤ����",
			"����󱯸�",
			"�����ȸ��",
			"�������",
			"����ħ���",
			"���㺮����",
			"�������ٶ�"
			);
			for (var i = 0; i < helmets.length; i++){
				selStr += "\r\n#L" + i + "# " + helmets[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = true;
		}
		else if (selectedType == 3){ //shield refine
			var selStr = "����ϳ�ʲô���ߣ�#b";
			var shields = new Array ("��󷽶�#k(�ȼ����� : 40,սʿ)#b","﮿󷽶�#k(�ȼ����� : 40,սʿ)#b","��������#k(�ȼ����� : 60,սʿ)#b","��������#k(�ȼ����� : 60,սʿ)#b");
			for (var i = 0; i < shields.length; i++){
				selStr += "\r\n#L" + i + "# " + shields[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = true;
		}
		if (equip)
			status++;
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 0){ //mineral refine
			var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006);
			var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006);
			var matQtySet = new Array(10,10,10,10,10,10,10);
			var costSet = new Array(300,300,300,500,500,500,800);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 1){ //jewel refine
			var itemSet = new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008);
			var matSet = new Array(4020000,4020001,4020002,4020003,4020004,4020005,4020006,4020007,4020008);
			var matQtySet = new Array(10,10,10,10,10,10,10,10,10);
			var costSet = new Array (500,500,500,500,500,500,500,1000,3000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "��ô������������#t" + item + "#��";
		
		cm.sendGetNumber(prompt,1,1,100)
	}
	else if (status == 3 && mode == 1) {
		if (equip)
		{
			selectedItem = selection;
			qty = 1;
		}
		else
			qty = selection;

		if (selectedType == 2){ //helmet refine


			var itemSet = new Array(
			1312037,//������Ÿ�
                       1302081,//�����Ƽ׽�
                       1322060,//���㾪����
                       1332073,//��������
                       1332074,//���������
                       1372044,//���������
                       1382057,//���������
                       1402046,//������ڤ��
                       1412033,//����������
                       1422037,//����������
                       1432047,//������ʥǹ
                       1442063,//��������
                       1452057,//���㾪�繭
                       1462050,//����ڤ����
                       1472068,//����󱯸�
                       1482023,//�����ȸ��
                       1492023,//�������
                       1092057,//����ħ���
                       1092058,//���㺮����
                       1092059//�������ٶ�
);//װ������


			var matSet = new Array(
new Array(1412046,4001035,2340000),
new Array(1302133,4001035,2340000),
new Array(1412046,4001035,2340000),
new Array(1472100,4001035,2340000),
new Array(1472100,4001035,2340000),
new Array(1372058,4001035,2340000),
new Array(1382080,4001035,2340000),
new Array(1402072,4001035,2340000),
new Array(1412046,4001035,2340000),
new Array(1412046,4001035,2340000),
new Array(1492048,4001035,2340000),
new Array(1492048,4001035,2340000),
new Array(1452085,4001035,2340000),
new Array(1462075,4001035,2340000),
new Array(1472100,4001035,2340000),
new Array(1482046,4001035,2340000),
new Array(1492048,4001035,2340000),
new Array(1382060,4001035,2340000),
new Array(1442068,4001035,2340000),
new Array(1452060,4001035,2340000)
);//��Ҫ����Ʒ



var matQtySet = new Array(
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3)
);//��Ҫ�Ķ����ĸ���



			var costSet = new Array(80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000
);//��Ҫ�Ľ��


			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3){ //shield refine
			var itemSet = new Array (1092014,1092013,1092010,1092011);
			var matSet = new Array(new Array (1092012,4011003),new Array (1092012,4011002),new Array (1092009,4011007,4011004),new Array (1092009,4011007,4011003));
			var matQtySet = new Array (new Array (1,10),new Array (1,10),new Array (1,1,15),new Array (1,1,15));
			var costSet = new Array (100000,100000,120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "����";
		if (qty == 1)
			prompt += "1��#t" + item + "##v" + item + "#��";
		else
			prompt += qty + "��#t" + item + "#��";
			
		prompt += "��Ҫ����Ĳ��ϣ���ô��������������#b\r\n";
		
		if (mats instanceof Array){
			for(var i = 0; i < mats.length; i++){
				prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
			}
		}
		else {
			prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
		}
		
		if (cost > 0)
			prompt += "\r\n#i4031138# " + cost * qty + " ���";
		
		cm.sendYesNo(prompt);
	}
	else if (status == 4 && mode == 1) {
		var complete = true;
		
		if (cm.getMeso() < cost * qty)
			{
				cm.sendOk("����ȷ������Ҫ����Ʒ�򱳰������������пռ䡣")
			}
			else
			{
				if (mats instanceof Array) {
					for(var i = 0; complete && i < mats.length; i++)
					{
						if (matQty[i] * qty == 1)	{
							if (!cm.haveItem(mats[i]))
							{
								complete = false;
							}
						}
						else {
							var count = 0;
							var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(mats[i]).iterator();
							while (iter.hasNext()) {
								count += iter.next().getQuantity();
							}
							if (count < matQty[i] * qty)
								complete = false;
						}					
					}
				}
				else {
					var count = 0;
					var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(mats).iterator();
					while (iter.hasNext()) {
						count += iter.next().getQuantity();
					}
					if (count < matQty * qty)
						complete = false;
				}
			}
			
			if (!complete) 
				cm.sendOk("����ȷ������Ҫ����Ʒ�򱳰������������пռ䡣");
			else {
				if (mats instanceof Array) {
					for (var i = 0; i < mats.length; i++){
						cm.gainItem(mats[i], -matQty[i] * qty);
					}
				}
				else
					cm.gainItem(mats, -matQty * qty);
					
				cm.gainMeso(-cost * qty);
				cm.gainItem(item,qty);
				cm.sendOk("�ã���Ķ����Ѿ������ˣ��ҵ����չ�Ȼ�����㿴������ô�����Ķ������´������ɡ�");
			}
		cm.dispose();
	}
}