var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1302213	, //	���鷨ʦ���ֽ�	
	1442171	, //	���鷨ʦì	
	1532071	, //	���鷨ʦ����	
	1452163	, //	���鷨ʦ����	
	1242035	, //	���鷨ʦìͷ��	
	1432133	, //	���鷨ʦǹ	
	1362061	, //	���鷨ʦ����	
	1492136	, //	���鷨ʦɳĮ֮ӥ	
	1322151	, //	���鷨ʦ��	
	1522067	, //	���鷨ʦ˫��ǹ	
	1372132	, //	���鷨ʦȨ��	
	1212035	, //	���鷨ʦ˫ͷ��	
	1222035	, //	���鷨ʦ����	
	1462153	, //	���鷨ʦ��	
	1382159	, //	���鷨ʦ����	
	1232035	, //	���鷨ʦ���������	
	1422103	, //	���鷨ʦ���	
	1402143	, //	���鷨ʦ˫�ֽ�	
	1482136	, //	���鷨ʦָ��ȭ��	
	1472175	, //	���鷨ʦѪɫȭ��	
	1342066	, //	���鷨ʦ��	
	1252020	, //	���鷨ʦè��ħ����	
	1312112	, //	���鷨ʦ��	
	1332188	, //	���鷨ʦ�����	
	1332187	, //	���鷨ʦ��ɱ��	
	1412100	 //	���鷨ʦ�ظ�
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
            var selStr = "#d�������������120����������ѡ����Ҫ������װ����#n#k\r\n";    
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
				cm.worldSpouseMessage(0x20, "[װ������] : ��ϲ " + cm.getChar().getName() + " ������һ�� <"+cm.getItemName(weaponList[weaponId])+">.");
				cm.dispose();
			} else {
				cm.sendOk("���ϲ��㣬�޷����������");
				cm.dispose();
			}
		}
	}
}