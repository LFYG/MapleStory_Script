var itemid = 1482189; //Ĭ��װ��ID
function start() {
	im.remove(1);
	var ii = im.getItemInfo();
	var toDrop = null;
	
	
	
	/*��������*/
	itemid = 1482189; //װ��ID
	var toDrop = ii.randomizeStats(ii.getEquipById(itemid)).copy(); //װ��              
    toDrop.setStr(70); //װ������
	toDrop.setDex(70); //װ������
	toDrop.setInt(70); //װ������
	toDrop.setLuk(70); //װ������
	toDrop.setMatk(240); //ħ������
	toDrop.setWatk(240); //������
	toDrop.setUpgradeSlots(20);  //��������20��
	toDrop.setBossDamage(100);  //BOSS�˺�100%
	toDrop.setIgnorePDR(70);  //���ӷ���70%
	toDrop.setTotalDamage(30); //���˺�30%
	toDrop.setAllStat(20);  //��������20%
	toDrop.setLimitBreak(2100000000); //�ƹ�
	toDrop.setOwner("�桤����ϵ��");  //����װ����������
	im.addFromDrop(im.getC(),toDrop,false);
	/*������������*/
	
	
	/*��������*/
	itemid = 1242060;
	toDrop = ii.randomizeStats(ii.getEquipById(itemid)).copy(); //װ��              
    toDrop.setStr(70); //װ������
	toDrop.setDex(70); //װ������
	toDrop.setInt(70); //װ������
	toDrop.setLuk(70); //װ������
	toDrop.setMatk(240); //ħ������
	toDrop.setWatk(240); //������
	toDrop.setUpgradeSlots(20);  //��������20��
	toDrop.setBossDamage(100);  //BOSS�˺�100%
	toDrop.setIgnorePDR(70);  //���ӷ���70%
	toDrop.setTotalDamage(30); //���˺�30%
	toDrop.setAllStat(20);  //��������20%
	toDrop.setLimitBreak(2100000000); //�ƹ�
	toDrop.setOwner("�桤����ϵ��");  //����װ����������
	im.addFromDrop(im.getC(),toDrop,false);
	/*������������*/
	
	
	
	im.sendOk("�����������ϵ��������");
	im.dispose();
}