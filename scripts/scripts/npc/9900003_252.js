var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1082593	, // 	���鷨ʦսʿ����	
	1082594	, // 	���鷨ʦħ��ʦ����	
	1082595	, // 	���鷨ʦ�ڱ�����	
	1082596	, // 	���鷨ʦ׷��������	
	1082597	, // 	���鷨ʦ��������	
	1052787	, // 	���鷨ʦ׷�����׷�	
	1052788	, // 	���鷨ʦ�����׷�	
	1052785	, // 	���鷨ʦħ��ʦ�׷�	
	1052786	, // 	���鷨ʦ�ڱ��׷�	
	1052784	, // 	���鷨ʦսʿ�׷�
    1004215	, // 	���鷨ʦħ��ʦñ	
	1004214	, // 	���鷨ʦսʿñ	
	1004217	, // 	���鷨ʦ׷����ñ	
	1004216	, // 	���鷨ʦ�ڱ�ñ	
	1004218	, // 	���鷨ʦ����ñ	
	1072956	, // 	���鷨ʦ����Ь	
	1072955	, // 	���鷨ʦ׷����Ь	
	1072954	, // 	���鷨ʦ�ڱ�Ь	
	1072953	, // 	���鷨ʦħ��ʦЬ	
	1072952	 // 	���鷨ʦսʿЬ
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
            var selStr = "#d�������������120�����ߣ���ѡ����Ҫ������װ����#n#k\r\n";    
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