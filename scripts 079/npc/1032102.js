/*
  ��������ڶ���

	by о������
		
		ת��ע����Ȩ

*/


var Petlist = new Array(); //���ڴ洢��װ����˵�ѷų����ĳ������Ϊ MaplePet�����ݡ�
var lpet = new Array(5000030,5000032,5000033,5000035);  //��������
var mpet = new Array(5000049,5000050,5000051,5000052);  //��������
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("�õġ��´��ټ���");
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("�õġ��´��ټ���");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {
		
			cm.sendNext(" ���ã����ǳ������NPC��ֻ�н������ͻ����˳����ܹ�����Ŷ.������ʱ��,��Ҫ��Ҫ�����ĳ���ų���.����ͬһ�ֳ���ֻ����һ����#b����ʱ��Ҫ�۳�������5000��.");
			
		}else if (status == 1){
			for(i = 0; i < 3; i++){
				if(cm.getChar().getPet(i) != null){
					Petlist.push(cm.getChar().getPet(i)); //ѭ������ɫװ������������λ�ã������װ������ͰѸó������ѹ�� Petlist����
				}				
			}
			if(Petlist.length > 0){
				if(Petlist.length > 1){  //�ж�Petlist�ĳ��ȡ�Ҳ����˵�ų����ĳ��������
					cm.sendOk("ֻ�зų�һֻ����ʱ������ȷ��ʶ��!");
					cm.dispose();
				}else{
					var petid = Petlist[0].getItemId();
					if(petid == 5000029 || petid == 5000030 || petid == 5000032 || petid == 5000033 || petid == 5000035 || petid == 5000048 || petid == 5000049 || petid == 5000050 || petid == 5000051 || petid == 5000052){			
						var text = "����Ҫ�����ĳ��� #v" + petid + "# ��ϸ��Ϣ: \r\n"
						text += "�������֣�" +  Petlist[0].getName() + "\r\n";
						text += "����ȼ���" +  Petlist[0].getLevel() + "��\r\n";
						text += "���ܶȣ�" + Petlist[0].getCloseness() + "\r\n";
						text += "�����У�" + Petlist[0].getFullness() + "\r\n";
						text += "��ȷ�����ڽ�����";
						cm.sendYesNo(text);					
					}else{
						cm.sendOk("���ĳ��� #v" + petid + "# �ǲ��ܽ�����");
						cm.dispose();
					}
				}
			}else{
				cm.sendOk("���Ҫ�����ĳ���ų���!");
				cm.dispose();
			}			
		}else if (status == 2){			
			if (cm.getChar().getRw15() >= 5000) {
				cm.gainrw15(-5000);
				var petid = Petlist[0].getItemId();  //��ý���ǰ�����ID
				//ȡ���Cash��
				var Inventory = cm.getPlayer().getInventory(net.sf.cherry.server.MapleItemInformationProvider.getInstance().getInventoryType(petid));
				var fjpetid; //���ڴ洢������ĳ���ID
				cm.getChar().unequipPet(cm.getChar().getPet(0),true);  //�ջط�Ҳ���ĳ�
				if(petid == 5000029 || petid == 5000030 || petid == 5000032 || petid == 5000033 || petid == 5000035){
					fjpetid = lpet[Math.floor(Math.random() * lpet.length)]; //���������
				}else{
					fjpetid = mpet[Math.floor(Math.random() * mpet.length)];//���������					
				}					
				var item = Inventory.findByUniqueId(Petlist[0].getUniqueId()); //�������ĳ�Ķ���					
				Inventory.removeItem(item.getPosition(), item.getQuantity(), false);  //����Ʒ������������ĳ�
				cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.moveInventoryItem(net.sf.cherry.server.MapleItemInformationProvider.getInstance().getInventoryType(petid),item.getPosition(),0));//����ֻ��ˢ����Ʒ����ʾ��״̬															
				var toDrop = new net.sf.cherry.client.Item(fjpetid,0,1); //����һ�����������Ϊ�������
				var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 30 * 24 * 60 * 60 * 1000);  //ʱ�����
				toDrop.setUniqueId(Petlist[0].getUniqueId());   //���ý�����ĳ��Uniqueid�ͽ���ǰ�ĳ��UnqueIdһ��,����������pets���в������������
				toDrop.setExpiration(temptime); //��ʱ����䡣 
				cm.getPlayer().getInventory(net.sf.cherry.server.MapleItemInformationProvider.getInstance().getInventoryType(petid)).addItem(toDrop); //�ѽ�����ĳ������Ž�������
				cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(net.sf.cherry.server.MapleItemInformationProvider.getInstance().getInventoryType(petid), toDrop));	//����ֻ��ˢ����Ʒ����ʾ��״̬,��д�Ļ�Ҫ���߲��ܿ���������ĳ�					
				cm.sendOk("���ѳɹ��� #v" + petid + "# ������Ϊ #v" + toDrop.getItemId() + "#");
				cm.dispose();		
			}else{
				cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
				cm.dispose();
			}
		}
	}
}	

