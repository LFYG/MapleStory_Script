var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(1302227, 300),
Array(1442182, 300),
Array(1532074, 300),
Array(1452170, 300),
Array(1242068, 300),
Array(1432138, 300),
Array(1362067, 300),
Array(1322162, 300),
Array(1492152, 300),
Array(1522071, 300),
Array(1372139, 300),
Array(1212069, 300),
Array(1222064, 300),
Array(1462159, 300),
Array(1232063, 300),
Array(1382168, 300),
Array(1422107, 300),
Array(1402151, 300),
Array(1482140, 300),
Array(1472179, 300),
Array(1312116, 300),
Array(1332193, 300),
Array(1412104, 300)
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
			text = "�װ��� #r#h ##k ,������ #v4000379# �һ�#e#bר���Ͻ��Ҷ����#n#k��\r\n #r#e#L0#���� #v4000379# ר����ͼ�����Լ����ÿո񣡣�#l\r\n\r\n#b";
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
				cm.warp(541010010);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("����һ�" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "��#v4000379#");
        } else if (a == 2) {
            if (cm.haveItem(4000379,buynum * itemlist[selects][1])) {
                cm.gainItem(4000379, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
 				cm.worldSpouseMessage(0x20,"[ƽ���̳�]��" + "��� " + cm.getChar().getName() + " �һ���ר���Ͻ��Ҷ����,�볬�������һ����");               
				cm.sendOk("�һ��ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻��#v4000379# ��");
                cm.dispose();
            }
        }
    }//mode
}//f