var status = -1;

function start() {
	var menu = im.getSkillMenu(30);
	if (menu == "") {
		im.sendOkS("�����㲻��Ҫ�������ֲᰡ��", 4, 2080009);
		im.dispose();
	} else {
		im.sendSimpleS("����������ļ���Ŀ¼���¡�\r\n" + menu + "\r\n\r\n#r#L0# #fn����##fs14##eȡ��ʹ�����ֲᡣ#n#fs##fn##l", 5, 2080009);
	}
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;

	if (status == 0) {
		if (selection > 0 && im.canUseSkillBook(selection, 30) && im.used()) {
			im.useSkillBook(selection, 30);
		} else if (selection != 0) {
			im.sendOkS("�����㲻��Ҫ�������ֲᰡ��", 4, 2080009);
		}
		im.dispose();
	} else {
		im.dispose();
	}
}