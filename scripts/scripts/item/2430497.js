function start() {
    if (im.getSpace(2) < 1 && im.getSpace(1) < 10 && im.getSpace(5) < 3) {
        im.sendOk("�����㱳��װ�����ڳ�10���ո�");
		im.dispose();
    } else {
        im.gainItem(2430241,-1)
        im.gainItem(2000005, 300);//����ҩˮ
        im.gainItem(1012057, 1 ,7);//͸�����
        im.gainItem(1022048, 1 ,7);//͸������
        im.gainItem(1002186, 1 ,7);//͸��ñ
        im.gainItem(1072153, 1 ,7);//͸��Ь
        im.gainItem(1082102, 1 ,7);//͸������
		cm.gainItem(1032024, 1 ,7);//͸������
        im.gainItem(1042096, 1);//����T��
        im.gainItem(1062098, 1);//ˮ����ţ�п�
        im.gainItem(5151036, 1);//���ܸ߼�Ⱦ����	
        im.gainItem(5152057, 1);//���ܸ߼����ο�	
        im.gainItem(5150052, 1);//���ܸ߼�������	
        im.gainItem(1112116, 1);//������Ƭ��ָ	
        im.gainItem(1112226, 1);//���������ָ	
        im.gainItem(1142263, 1);//�ɰ�������	
        im.gainItem(3700012, 1);//����ɰ�	
        im.sendOk("���װ�����������������������ա�");
		im.dispose();
    }
}