function start() {
        im.gainItem(2431394, -1);
    var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // ����һ��Equip��                    
	toDrop.setStr(10); //װ������
	toDrop.setDex(10); //װ������
	toDrop.setInt(10); //װ������
	toDrop.setLuk(10); //װ������
	toDrop.setMatk(10); //������
	toDrop.setWatk(10); //ħ������ 
	toDrop.setAcc(10); //
	toDrop.setOwner("è��");
	im.addFromDrop(im.getC(), toDrop, false);
	im.sendOk("�ɹ���� #rŮ��ѫ��#k һ����");
	im.dispose(); 
}