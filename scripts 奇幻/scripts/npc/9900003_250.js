var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
	1099010, //		��ɫ���Ŷ�	
	1098005, //		��ɫ����	
	1352605, //		��ɫ�������	
	1352705, //		��ɫ���ֵ�	
	1352405, //		��ɫ����		
	1352505, //		��ɫŵ�;���	
	1352295, //		��ɫ��а��	
	1352285, //		��ɫ����	
	1352205, //		��ɫ��׹	
	1352215, //		��ɫ����	
	1352225, //		��ɫ����	
	1352235, //		��֮ͭ��<��ɫ>	
	1352245, //		����֮��<��ɫ>	
	1352255, //		�׽�֮��<��ɫ>	
	1352265, //		��ɫ��ë	
	1352275, //		��ɫǧ��ȫ��		
	1353005, //		��ɫ�˺˿�����		
	1353104, //		��ɫ������	
	1352955, //		��ɫ������	
	1352008, //		��ɫħ����ʸ	
	1352944, //		��ɫ������Ų�	
	1352934, //		��ɫ������		
	1352927, //		��ɫ���ķ����ҩͰ	
	1352915, //		��ɫ����	
	1352905, //		��ɫ���󻤼�	
	1342092, //		��ɫ֮��	
	1352965, //		��ɫ��Ұ֮��	
	1352974, //		��ɫʥ��֮��	
	1352108 //		��ɫ��Ƭ	
);
var needItemList = Array(
	//Array(4310036, 2500),
	Array(4000021, 80),
	Array(4001241, 6),
	Array(4001242, 6),
	Array(4000630, 2),
	Array(4004000, 60),
	Array(4004001, 60),
	Array(4004002, 60),
	Array(4004003, 60)
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
            var selStr = "#d�������������100�����֣���ѡ����Ҫ������װ����#n#k\r\n";    
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