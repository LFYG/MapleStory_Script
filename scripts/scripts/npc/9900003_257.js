var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1412132, //		�ʼ�ȭ��
    1532095, //		�ʼҾ���	
	1472211, //		�ʼ�Ѫɫ����		
	1362087, //		�ʼ�����		
	1242058, //		�ʼ�ʨЫ��	
	1242057, //		�ʼ�ʨЫ��	
	1302264, //		�ʼҿ־�֮��	
	1432164, //		�ʼ�ǹ	
	1322199, //		�ʼҴ�	
	1492176, //		�ʼ�ɳĮ֮ӥ	
	1522091, //		�ʼ�˫��ǹ	
	1372174, //		�ʼҶ���	
	1212060, //		�ʼ�˫ͷ��
    1222055, //		�ʼ�Ѫ��
    1442219, //		�ʼ�ì	
	1462190, //		�ʼ���
    1422136, //		�ʼҴ�	
	1382206, //		�ʼ��ױ�	
	1332222, //		�ʼ���ɱ��	
	1402191, //		�ʼ�������֮��
    1482165, //		�ʼҾ���
    1452202, //		�ʼҳ���	
	1252059, //		�ʼ�è��ħ����	
	1252087, //		�ʼҰ� ħ����	
	1312150, //		�ʼҸ�	
	1342080 //		�ʼҵ�
);
var needItemList = Array(
	//Array(4310036, 2500),
	Array(4000021, 60),
	Array(4001241, 4),
	Array(4001242, 4),
	Array(4000630, 3),
	Array(4004000, 40),
	Array(4004001, 40),
	Array(4004002, 40),
	Array(4004003, 40)
);
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
            var selStr = "#d�������������130����������ѡ����Ҫ������װ����#n#k\r\n";    
			for(var key in weaponList) {
				var item = weaponList[key];
				selStr += "#r#L"+key+"#���� #b#z"+item+"# #r[�鿴����]\r\n";
			}
        	cm.sendSimple(selStr);	
		} else if (status == 1) {
			weaponId = selection;
			var text = "- #e#d#z"+weaponList[weaponId]+"#��Ҫ�Ĳ��ϣ�#n#k\r\n\r\n#b";
			for(var key in needItemList) {
				var itemName = cm.getItemName(needItemList[key][0]);
				text+=itemName;
				for(var i=0; i<=25-itemName.getBytes().length; i++)
				{
					text+=" ";
				}
				var currentItemQuantity = cm.getItemQuantity(needItemList[key][0]);
				var color="#g";
				if (currentItemQuantity<needItemList[key][1])
					color="#r";
				text+=color+currentItemQuantity+" / "+needItemList[key][1]+" ��#b\r\n";
			}
			text+="#k\r\n\r\n- #e#d������ʾ��#n#b���ǽ�����������񷵻���һҳ.#k";
			cm.sendYesNo(text);
		} else if (status == 2) {
			flag=true;
			for(var key in needItemList) {
				var itemId = needItemList[key][0];
				var itemQuantity = needItemList[key][1];
				if (!cm.haveItem(itemId, itemQuantity))
				{
					flag=false;
					break;
				}
			}
            if (flag) {
				if (cm.getSpace(1)<1) {
					cm.sendOk("װ�����ռ䲻�㣬�����������������");
					cm.dispose();
					return;
				}
				for(var key in needItemList) {
					var itemId = needItemList[key][0];
					var itemQuantity = needItemList[key][1];
					cm.gainItem(itemId, -itemQuantity);
				}
				cm.gainItem(weaponList[weaponId], 1);
				cm.sendOk("��ϲ���ϳ�#z"+weaponList[weaponId]+"#һ��.");
				cm.worldSpouseMessage(0x20, "[���񹫸�] : ��ϲ " + cm.getChar().getName() + " ������һ�� <"+cm.getItemName(weaponList[weaponId])+">.");
				cm.dispose();
			} else {
				cm.sendOk("���ϲ��㣬�޷����������");
				cm.dispose();
			}
		}
	}
}