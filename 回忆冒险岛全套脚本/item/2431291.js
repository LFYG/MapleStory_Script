function start(){
	if (im.getSpace(1) < 2) {
		im.dispose();
		return;
	}
	im.remove(1);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1112164)).copy(); // ����һ��Equip��                    
	toDrop.setStr(30); //װ������
	toDrop.setDex(30); //װ������
	toDrop.setInt(30); //װ������
	toDrop.setLuk(30); //װ������
	toDrop.setMatk(30); //������
	toDrop.setWatk(30); //ħ������ 
	toDrop.setAcc(30); //
	toDrop.setOwner("������װ");
	im.addFromDrop(im.getC(), toDrop, false);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1112276)).copy(); // ����һ��Equip��                    
	toDrop.setStr(15); //װ������
	toDrop.setDex(15); //װ������
	toDrop.setInt(15); //װ������
	toDrop.setLuk(15); //װ������
	toDrop.setMatk(15); //������
	toDrop.setWatk(15); //ħ������ 
	toDrop.setAcc(15); //
	toDrop.setOwner("�񼶾���");
	im.addFromDrop(im.getC(), toDrop, false);
	im.getPlayer().dropMessage(1, "����˺�����װ");
	im.dispose();
}