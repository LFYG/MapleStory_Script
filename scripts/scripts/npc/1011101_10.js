var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(1003561, 200),
Array(1052467, 200),
Array(1072672, 200),
Array(1082438, 200),
Array(1102467, 200),
Array(1412123, 300),
Array(1532082, 300),
Array(1452190, 300),
Array(1362075, 300),
Array(1432151, 300),
Array(1302249, 300),
Array(1322182, 300),
Array(1492163, 300),
Array(1522079, 300),
Array(1372162, 300),
Array(1212040, 300),
Array(1222040, 300),
Array(1462178, 300),
Array(1382193, 300),
Array(1442203, 300),
Array(1422125, 300),
Array(1402174, 300),
Array(1482152, 300),
Array(1472198, 300),
Array(1312136, 300),
Array(1252045, 300),
Array(1332207, 300)
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
			text = "�װ��� #r#h ##k ,������ #v4000241# �һ�#e#b�籩ϵ����װ#n#k��\r\n #r#e#L0#���� #v4000241# ר����ͼ�����Լ����ÿո񣡣�#l\r\n\r\n#b";
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
				cm.warp(240010400);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("����һ�" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "��#v4000241#");
        } else if (a == 2) {
            if (cm.haveItem(4000241,buynum * itemlist[selects][1])) {
                cm.gainItem(4000241, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
 				cm.worldSpouseMessage(0x20,"[ƽ���̳�]��" + "��� " + cm.getChar().getName() + " �һ��˷籩ϵ����װ,�볬�������һ����");               
				cm.sendOk("�һ��ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻��#v4000241#��");
                cm.dispose();
            }
        }
    }//mode
}//f