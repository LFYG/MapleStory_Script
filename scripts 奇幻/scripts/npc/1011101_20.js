var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(2044003, 2000), // ��
Array(2044103, 2000), // �м�
Array(2044303, 2000), // ��
Array(2044203, 2000), // �м���
Array(2043003, 2000), // ��
Array(2044908, 2000), // ����
Array(2044815, 2000), // ��
Array(2043203, 2000), // �ͼ���
Array(2043103, 2000), // �ͼ�
Array(2043803, 2000), // �ͼ�
Array(2044503, 2000), // ��
Array(2044403, 2000), // ��
Array(2040303, 2000), // �ͼ�
Array(2044703, 2000), // �ͼ�
Array(2044603, 2000),
Array(2049135, 5000),//�������������� 20%	
Array(2046010,5000), // �����쵥����������������100%	
Array(2046011,5000), // �����쵥������ħ��������100%	
Array(2046110,5000), // ������˫����������������100%	
Array(2046577,5000), // ������������������� 100% // Ϊ���������������ԡ�
Array(2046578,5000), // ������������������� 100% // Ϊ���������������ԡ�
Array(2046579,5000), // ��������������ݾ��� 100% // Ϊ���������������ԡ�
Array(2046580,5000), // ������������������� 100% // Ϊ���������������ԡ�
Array(2046763,8000), // ����������Ʒ�������� 100% // Ϊ��Ʒ�����������ԡ�
Array(2046764,8000), // ����������Ʒ�������� 100% // Ϊ��Ʒ�����������ԡ�
Array(2046765,8000), // ����������Ʒ���ݾ��� 100% // Ϊ��Ʒ�����������ԡ�
Array(2046766,8000)// ����������Ʒ�������� 100% // Ϊ��Ʒ�����������ԡ�
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
			text = "�װ��� #r#h ##k ,������ #v4310036# �һ�#e#b���ֳ�����Ʒ#n#k��\r\n #r#e#L0#���� #v4310036# ר����ͼ�����Լ����ÿո񣡣�#l\r\n\r\n#b";
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
				cm.openNpc(2101017,1);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("����һ�" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "��#v4310036#");
        } else if (a == 2) {
            if (cm.haveItem(4310036,buynum * itemlist[selects][1])) {
                cm.gainItem(4310036, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[ƽ���̳�] ��" + "��� " + cm.getChar().getName() + " �һ����˶�����ʤϵ��,�볬�������һ����");                
				cm.sendOk("�һ��ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻��#v4310036#��");
                cm.dispose();
            }
        }
    }//mode
}//f