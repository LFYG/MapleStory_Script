function start() {
        im.gainItem(2430241, -1);
		im.gainItem(3010180, 1);// HP����
		im.gainItem(3012003, 1);// ��������
		im.gainItem(3010583, 1);// ������
		im.gainItem(3010682, 1);// ����̨����
		im.gainItem(2000005, 300);// ����ҩˮ
		im.gainItem(1072407, 1);// HELLO������
		im.gainItem(1082170, 1);// ��ɫ���ӱ�
		im.gainItem(1042096, 1);// �����·�
		im.gainItem(1062098, 1);// ţ�п���
		im.gainItem(1112116, 1);
		im.gainItem(1112226, 1);
		im.gainItem(1002186, 1);
		im.gainItem(1012057, 1);
		im.gainItem(1022048, 1);
		im.gainItem(1032024, 1);
		im.gainItem(5150040, 3);// �ʼ���
		im.gainItem(5152053, 3);// �ʼ�����
		im.gainItem(5150052, 1);// ���ܸ߼�����
		im.gainItem(5153015, 1);// ���ܻ���
		im.gainItem(5152057, 1);// ���ܸ߼�����
		im.gainItem(5340000, 1, 3);
		im.gainItem(2300000, 200);
		im.gainItem(5211060, 1, 2 * 60 * 60 * 1000);// ��������
		im.gainItem(5360015, 1, 2 * 60 * 60 * 1000);// ˫��
		//im.gainItem(5050000, 100);// ϴѪ������ֵ
		im.gainItem(5072000, 10);// ���ʵ�����
		im.gainItem(5060000, 3);// װ������ X3
		im.gainItem(2431092, 1);//
		im.gainItem(1112164, 1, 2 * 60 * 60 * 1000);//����������Ƭ��ָ 24Сʱ
		im.gainItem(1112276, 1, 2 * 60 * 60 * 1000);//�������������ָ 24Сʱ
		im.gainItem(1102630, 1, 1);// ����������ʹ 24Сʱ
		im.gainItem(1102709, 1, 1);// ˫ɫ�ǹ���� 1��
		im.gainItem(1112918, 1, 1);// �ع��ָ X1 24Сʱ
		im.gainPet(5000054, im.getItemName(5000054), 1, 0, 100, 3*86400, 0); 
		var ii = im.getItemInfo();				
		var toDrop = ii.randomizeStats(ii.getEquipById(1112941)).copy(); // ����һ��Equip��                    
		toDrop.setStr(100); //װ������
		toDrop.setDex(100); //װ������
		toDrop.setInt(100); //װ������
		toDrop.setLuk(100); //װ������
		toDrop.setMatk(100); //������
		toDrop.setWatk(100); //ħ������ 
		var timeStamp = java.lang.System.currentTimeMillis();
		var expirationDate = timeStamp+3*86400*1000;
		toDrop.setExpiration(expirationDate);
		im.addFromDrop(im.getC(), toDrop, false);
		//im.gainItem(1302063, 1);// ��
		im.sendOk("��ϲ����� #r����Ա�ͳ�������#k ��");
		//im.worldSpouseMessage(0x20,"�����ּݵ�������ϲ��� "+ im.getChar().getName() +" �����˻���ð�յ�������ף����(��)�ɡ�");
		im.dispose(); 
}
