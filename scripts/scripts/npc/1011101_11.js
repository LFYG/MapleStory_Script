var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(1112738, 150), //	������֮��ָ		
Array(1132152, 150), //	������֮����	
Array(1122197, 150), //	������֮��׹	
Array(1032142, 150), //	������֮����	
Array(1003540, 100),
Array(1052460, 100),
Array(1082432, 100),
Array(1072664, 100),
Array(1092110, 100),
Array(1092111, 100),
Array(1092109, 100),
Array(1302224, 100),
Array(1532113, 100),
Array(1442181, 100),
Array(1362104, 100),
Array(1452168, 100),
Array(1242086, 100),
Array(1242085, 100),
Array(1432137, 100),
Array(1492149, 100),
Array(1322161, 100),
Array(1372137, 100),
Array(1212084, 100),
Array(1222079, 100),
Array(1462157, 100),
Array(1232079, 100),
Array(1382167, 100),
Array(1422106, 100),
Array(1402150, 100),
Array(1482139, 100),
Array(1472178, 100),
Array(1342070, 100),
Array(1252063, 100),
Array(1312115, 100),
Array(1332192, 100),
Array(1412103, 100),
Array(1522108, 100),
Array(3010355, 100)
);

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
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "�װ��� #r#h ##k ,������ #v4310049# �һ�#e#b������ϵ����װ#n#k��\r\n #r#e#L0#���� #v4310049# ר����ͼ�����Լ����ÿո񣡣�#l\r\n\r\n#b";
			for (var i=1; i<=itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i-1] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.warp(703001000);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("����һ�" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "��#v4310049#");
        } else if (a == 2) {
            if (cm.haveItem(4310049,buynum * itemlist[selects][1])) {
                cm.gainItem(4310049, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[�̳�]��" + "��� " + cm.getChar().getName() + " �һ���������ϵ����װ,�볬�������һ����");
                cm.sendOk("�һ��ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻��#v4310049#��");
                cm.dispose();
            }
        }
    }//mode
}//f