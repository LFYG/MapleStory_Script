var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(

                                        Array(5072000, 500),// ���ʵ�����
                                        Array(5079002, 1000),// �ڱ��߼�����
                                        Array(5079001, 1000),// ����߼�����
					Array(5073000, 1000),// ����߼�����
					Array(5074000, 1000),// �׹Ǹ߼�����
					Array(5076000, 1000),// ��������
					Array(5077000, 1500),// �ͷ�����
                                        Array(5390000, 3000),// �����龰����
					Array(5390001, 3000),// Ѥ���龰����
					Array(5390002, 3000),// �����龰����
					Array(5390003, 5000),// ������ף����1
					Array(5390004, 5000),// ������ף����2
					Array(5390005, 5000),// С�ϻ��龰����
					Array(5390007, 10000),// �����!�龰����
					Array(5390008, 10000),// ���籭�龰����
					Array(5390010, 10000),// ���û�龰����
					Array(5390019, 12000),// �����������龰����
					Array(5390020, 12000),// �ҵ��ݳ����龰����
					Array(5390018, 12000),// �������龰����
					Array(5390022, 20000),// ׷��С������龰����
                                        Array(5390013, 10000),// ����VIPר������
                                        Array(5390012, 20000),// �ƽ�VIPר������
                                        Array(5390011, 30000),// ��ʯVIPר������
					Array(5390006, 50000)// �����ϻ��龰����

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
			text = "#h0#,��ã����������ѡ������Ҫ�������Ʒ,���ͼƬ����\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# #t" + itemlist[i] + "# ��Ҫ "+itemlist[i][1]+"���\r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + itemlist[selects][1] + "���", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "���");
        } else if (a == 3) {
            if (cm.getChar().getCSPoints(1) >= buynum * itemlist[selects][1]) {
                cm.getChar().modifyCSPoints(1, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻�ĵ��");
                cm.dispose();
            }
        }
    }
}