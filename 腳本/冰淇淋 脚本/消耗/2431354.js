var itemList = Array(2613000, // �ǻ����������������� // Ϊ���������������������������ԡ�
2613001, // �ǻ�������ħ�������� // Ϊ����������������ħ�������ԡ�
2612010 // �ǻ�˫���������������� // Ϊ˫�������������������������ԡ�
);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (status == 0) {
		im.sendYesNo("�����ӿ�������#r�ǻ���������#k���ڴ�����ǰ����ȷ������������������һ���λ�ã��Ƿ�򿪣�");
	} else if (status == 1) {
		var itemid = itemList[Math.floor(Math.random() * itemList.length)];
		im.gainItem(itemid, 1);
		im.gainItem(2431354, -1);
		var ii = im.getItemInfo();
		im.sendOk("��ϲ������#b#t"+itemid+"##k.");
		im.worldSpouseMessage(0x20,"���ǻ��������ӡ� ����ϲ��� "+ im.getChar().getName() +" ����ˡ�"+ii.getName(itemid)+"��");
		im.dispose();
	}
}