
importPackage(net.sf.odinms.server.maps); 

var a = 0;
var Text = "#b����Ϲ����Ž�ָ����ʲô����?#r\r\n�ص���ʾ:#L51#����˵��#d\r\n#L1##v1112446##z1112446#\r\n#L2##v1112447##z1112447#\r\n#L3##v1112448##z1112448#\r\n#L4##v1112449##z1112449#\r\n#L5##v1112450##z1112450#\r\n#L6##v1112451##z1112451#\r\n#L7##v1112452##z1112452#\r\n#L8##v1112453##z1112453#\r\n#L9##v1112454##z1112454#\r\n#L10##v1112455##z1112455#\r\n#L11##v1112456##z1112456#\r\n#L12##v1112457##z1112457#\r\n#L13##v1112458##z1112458#\r\n#L14##v1112459##z1112459#\r\n#L15##v1112460##z1112460#\r\n#L16##v1112461##z1112461#\r\n#L17##v1112462##z1112462#\r\n#L18##v1112463##z1112463#\r\n#L19##v1112464##z1112464#\r\n#L20##v1112465##z1112465#\r\n#L21##v1112466##z1112466#\r\n#L22##v1112467##z1112467#\r\n#L23##v1112468##z1112468#\r\n#L24##v1112469##z1112469#\r\n#L25##v1112470##z1112470#\r\n#L26##v1112471##z1112471#\r\n#L27##v1112472##z1112472#\r\n#L28##v1112473##z1112473#\r\n#L29##v1112474##z1112474#\r\n#L30##v1112475##z1112475#\r\n#L31##v1112476##z1112476#\r\n#L32##v1112477##z1112477#\r\n#L33##v1112478##z1112478#\r\n#L34##v1112479##z1112479#\r\n#L35##v1112480##z1112480#\r\n#L36##v1112481##z1112481#\r\n#L37##v1112482##z1112482#\r\n#L38##v1112483##z1112483#\r\n#L39##v1112484##z1112484#\r\n#L40##v1112485##z1112485#\r\n#L41##v1112486##z1112486#\r\n#L42##v1112487##z1112487#\r\n#L43##v1112488##z1112488#\r\n#L44##v1112489##z1112489#\r\n#L45##v1112490##z1112490#\r\n#L46##v1112491##z1112491#\r\n#L47##v1112492##z1112492#\r\n#L48##v1112493##z1112493#\r\n#L49##v1112494##z1112494#\r\n#L50##v1112495##z1112495#";
var db;
var time;

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
			if (a == -1){
				cm.dispose();
			        }else if (a == 0) {
							  a = 0;
                cm.sendSimple(Text);		
			}else if (a == 1){
			if (selection == 1) {
                cm.sendOk("#b��������:#k\r\n#i1112446##t1112446#ͨ������̳ǻ�����������������");
                    cm.dispose();
		}else if (selection == 51){
                cm.sendOk("#b����˵��:#k\r\n1.���ı�ʯͨ���齱���������\r\n2.ÿ��1���ȼ��Ϲ����Ž�ָ��Ҫ���ı�ʯx10\r\n3.�Ϲ����Ž�ָLV30��ʱ��ÿ��1���ȼ���Ҫ���ı�ʯx200\r\n4.�Ϲ����Ž�ָLV50��ʱ�������������ֵΪħ�﹥����x50");
                    cm.dispose();
		}else if (selection == 2){
if (cm.itemQuantity(1112446) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112447,1);
cm.gainItem(1112446,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV2�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV1");
cm.dispose();
}
		}else if (selection == 3){
if (cm.itemQuantity(1112447) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112448,1);
cm.gainItem(1112447,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV3�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV2");
cm.dispose();
}
		}else if (selection == 4){
if (cm.itemQuantity(1112448) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112449,1);
cm.gainItem(1112448,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV4�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV3");
cm.dispose();
}
		}else if (selection == 5){
if (cm.itemQuantity(1112449) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112450,1);
cm.gainItem(1112449,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV5�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV4");
cm.dispose();
}
		}else if (selection == 6){
if (cm.itemQuantity(1112450) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112451,1);
cm.gainItem(1112450,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV6�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV5");
cm.dispose();
}
		}else if (selection == 7){
if (cm.itemQuantity(1112451) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112452,1);
cm.gainItem(1112451,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV7�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV6");
cm.dispose();
}
		}else if (selection == 8){
if (cm.itemQuantity(1112452) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112453,1);
cm.gainItem(1112452,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV8�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV7");
cm.dispose();
}
		}else if (selection == 9){
if (cm.itemQuantity(1112453) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112454,1);
cm.gainItem(1112453,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV9�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV8");
cm.dispose();
}
		}else if (selection == 10){
if (cm.itemQuantity(1112454) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112455,1);
cm.gainItem(1112454,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV10�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV9");
cm.dispose();
}
		}else if (selection == 11){
if (cm.itemQuantity(1112455) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112456,1);
cm.gainItem(1112455,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV11�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV10");
cm.dispose();
}
		}else if (selection == 12){
if (cm.itemQuantity(1112456) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112457,1);
cm.gainItem(1112456,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV12�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV11");
cm.dispose();
}
		}else if (selection == 13){
if (cm.itemQuantity(1112457) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112458,1);
cm.gainItem(1112457,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV13�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV12");
cm.dispose();
}
		}else if (selection == 14){
if (cm.itemQuantity(1112458) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112459,1);
cm.gainItem(1112458,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV14�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV13");
cm.dispose();
}
		}else if (selection == 15){
if (cm.itemQuantity(1112459) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112460,1);
cm.gainItem(1112459,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV15�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV14");
cm.dispose();
}
		}else if (selection == 16){
if (cm.itemQuantity(1112460) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112461,1);
cm.gainItem(1112460,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV16�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV15");
cm.dispose();
}
		}else if (selection == 17){
if (cm.itemQuantity(1112461) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112462,1);
cm.gainItem(1112461,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV17�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV16");
cm.dispose();
}
		}else if (selection == 18){
if (cm.itemQuantity(1112462) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112463,1);
cm.gainItem(1112462,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV18�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV17");
cm.dispose();
}
		}else if (selection == 19){
if (cm.itemQuantity(1112463) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112464,1);
cm.gainItem(1112463,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV19�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV18");
cm.dispose();
}
		}else if (selection == 20){
if (cm.itemQuantity(1112464) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112465,1);
cm.gainItem(1112464,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV20�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV19");
cm.dispose();
}
		}else if (selection == 21){
if (cm.itemQuantity(1112465) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112466,1);
cm.gainItem(1112465,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV21�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV20");
cm.dispose();
}
		}else if (selection == 22){
if (cm.itemQuantity(1112466) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112467,1);
cm.gainItem(1112466,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV22�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV21");
cm.dispose();
}
		}else if (selection == 23){
if (cm.itemQuantity(1112467) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112468,1);
cm.gainItem(1112467,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV23�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV22");
cm.dispose();
}
		}else if (selection == 24){
if (cm.itemQuantity(1112468) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112469,1);
cm.gainItem(1112468,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV24�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV23");
cm.dispose();
}
		}else if (selection == 25){
if (cm.itemQuantity(1112469) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112470,1);
cm.gainItem(1112469,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV25�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV24");
cm.dispose();
}
		}else if (selection == 26){
if (cm.itemQuantity(1112470) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112471,1);
cm.gainItem(1112470,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV26�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV25");
cm.dispose();
}
		}else if (selection == 27){
if (cm.itemQuantity(1112471) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112472,1);
cm.gainItem(1112471,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV27�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV26");
cm.dispose();
}
		}else if (selection == 28){
if (cm.itemQuantity(1112472) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112473,1);
cm.gainItem(1112472,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV28�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV27");
cm.dispose();
}
		}else if (selection == 29){
if (cm.itemQuantity(1112473) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112474,1);
cm.gainItem(1112473,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV29�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV28");
cm.dispose();
}
		}else if (selection == 30){
if (cm.itemQuantity(1112474) >=1 && cm.itemQuantity(4001465) >=10){
cm.gainItem(1112475,1);
cm.gainItem(1112474,-1);
cm.gainItem(4001465,-10);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV30�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV29");
cm.dispose();
}
		}else if (selection == 31){
if (cm.itemQuantity(1112475) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112476,1);
cm.gainItem(1112475,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV31�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV30");
cm.dispose();
}
		}else if (selection == 32){
if (cm.itemQuantity(1112476) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112477,1);
cm.gainItem(1112476,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV32�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV31");
cm.dispose();
}
		}else if (selection == 33){
if (cm.itemQuantity(1112477) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112478,1);
cm.gainItem(1112477,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV33�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV32");
cm.dispose();
}
		}else if (selection == 34){
if (cm.itemQuantity(1112478) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112479,1);
cm.gainItem(1112478,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV34�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV33");
cm.dispose();
}
		}else if (selection == 35){
if (cm.itemQuantity(1112479) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112480,1);
cm.gainItem(1112479,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV35�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV34");
cm.dispose();
}
		}else if (selection == 36){
if (cm.itemQuantity(1112480) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112481,1);
cm.gainItem(1112480,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV36�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV35");
cm.dispose();
}
		}else if (selection == 37){
if (cm.itemQuantity(1112481) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112482,1);
cm.gainItem(1112481,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV37�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV36");
cm.dispose();
}
		}else if (selection == 38){
if (cm.itemQuantity(1112482) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112483,1);
cm.gainItem(1112482,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV38�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV37");
cm.dispose();
}
		}else if (selection == 39){
if (cm.itemQuantity(1112483) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112484,1);
cm.gainItem(1112483,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV39�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV38");
cm.dispose();
}
		}else if (selection == 40){
if (cm.itemQuantity(1112484) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112485,1);
cm.gainItem(1112484,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV40�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV39");
cm.dispose();
}
		}else if (selection == 41){
if (cm.itemQuantity(1112485) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112486,1);
cm.gainItem(1112485,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV41�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV40");
cm.dispose();
}
		}else if (selection == 42){
if (cm.itemQuantity(1112486) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112487,1);
cm.gainItem(1112486,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV42�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV41");
cm.dispose();
}
		}else if (selection == 43){
if (cm.itemQuantity(1112487) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112488,1);
cm.gainItem(1112487,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV43�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV42");
cm.dispose();
}
		}else if (selection == 44){
if (cm.itemQuantity(1112488) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112489,1);
cm.gainItem(1112488,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV44�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV43");
cm.dispose();
}
		}else if (selection == 45){
if (cm.itemQuantity(1112489) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112490,1);
cm.gainItem(1112489,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV45�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV44");
cm.dispose();
}
		}else if (selection == 46){
if (cm.itemQuantity(1112490) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112491,1);
cm.gainItem(1112490,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV46�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV45");
cm.dispose();
}
		}else if (selection == 47){
if (cm.itemQuantity(1112491) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112492,1);
cm.gainItem(1112491,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV47�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV46");
cm.dispose();
}
		}else if (selection == 48){
if (cm.itemQuantity(1112492) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112493,1);
cm.gainItem(1112492,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV48�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV47");
cm.dispose();
}
		}else if (selection == 49){
if (cm.itemQuantity(1112493) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112494,1);
cm.gainItem(1112493,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV49�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV48");
cm.dispose();
}
		}else if (selection == 50){
if (cm.itemQuantity(1112494) >=1 && cm.itemQuantity(4001465) >=200){
cm.gainItem(1112495,1);
cm.gainItem(1112494,-1);
cm.gainItem(4001465,-200);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV50�ˣ���ϲ�㣡");
cm.dispose();
}else{
cm.sendOk("#b������ʾ:#d\r\n1.��Ⱞ�ı�ʯ����\r\n2.������Ϲ����Ž�ָLV49");
cm.dispose();
}
            }
        } 
    } 
}