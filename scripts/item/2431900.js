/*
10������
*/
function start() {
    if (im.getJob() == 3101) {//��ħ������
		im.gainItem(1232000,1);
		im.gainItem(2431900, -1);
        im.dispose();
	}else if (im.getJob() == 2002 || im.getJob() == 2310){//˫����
		im.gainItem(1352000, 1);
		im.gainItem(2431900, -1);
        im.dispose();
	} else if (im.getJob() == 2004 || im.getJob() == 2700){//ҹ��
		im.gainItem(1352400, 1);
		im.gainItem(2431900, -1);
        im.dispose();
	}else if (im.getJob() == 6001){//��ʹ
		im.getPlayer().changeJob(6500);
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.getChar().levelUp();
		im.gainItem(2431900, -1);
        im.dispose();
	}else if (im.getJob() == 6000 || im.getJob() ==  6100){//����
		im.gainItem(1352500, 1);
		im.gainItem(2431900, -1);
        im.dispose();
	}else {
     im.sendOk("�㲻����Ե�ˣ������޷��򿪡�");
    }
    im.dispose();
}