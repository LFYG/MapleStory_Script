var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(1532102, 50),
Array(1412139, 50),
Array(1472218, 50),
Array(1362094, 50),
Array(1242067, 50),
Array(1302279, 50),
Array(1432171, 50),
Array(1492183, 50),
Array(1522098, 50),
Array(1372181, 50),
Array(1212071, 50),
Array(1222066, 50),
Array(1442227, 50),
Array(1462197, 50),
Array(1232062, 50),
Array(1422144, 50),
Array(1382213, 50),
Array(1332229, 50),
Array(1322207, 50),
Array(1482172, 50),
Array(1402202, 50),
Array(1452209, 50),
Array(1312157, 50)
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
			text = "�װ��� #r#h ##k ,������ #v4000019# �һ�#e#b��ɫϵ������#n#k��\r\n #r#e#L0#���� #v4000019# ר����ͼ�����Լ����ÿո񣡣�#l\r\n\r\n#b";
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
				cm.warp(50000);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("����һ�" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "��#v4000019#");
        } else if (a == 2) {
            if (cm.haveItem(4000019,buynum * itemlist[selects][1])) {
                cm.gainItem(4000019, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[ƽ���̳�] ��" + "��� " + cm.getChar().getName() + " �һ��˰�ɫϵ������,�볬�������һ����");
				cm.sendOk("�һ��ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻��#v4000019#��");
                cm.dispose();
            }
        }
    }//mode
}//f