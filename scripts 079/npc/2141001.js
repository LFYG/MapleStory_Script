importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);



var status = 0;  



	
function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {   
    if (mode == -1) {  
        cm.dispose();  
    }  
    else {   
        if (mode == 0) {      
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
		var pbMap = cm.getC().getChannelServer().getMapFactory().getMap(270050100);
			if (pbMap.getCharacters().size() == 0) {
				cm.sendYesNo("Ʒ��������Ϣ,����������û��������ս.\r\n��ÿ����Խ���Ĵ���Ϊ#r3#k��[Ŀǰ�Ѿ�����#r" + cm.getBossLog('PB') + "#k��]\r\nΪ����ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��,ÿ���賿��ˢ����Ϸ����.\r\n[������Ҫ�ȼ��ﵽLv.150����,ְҵ����]\r\n��ȷ������,Ҫ������ս #bʱ��ĳ��-Ʒ���� #k��");


			} else { // ����������
				for (var i = 0; i < 5; i++) {
					if (pbMap.getMonsterById(8820002 + 1) != null) {  //Ҫ�������򻻵�ͼ
						cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
						cm.dispose();

					}

				}

				for (var i = 0; i < 4; i++) {
					if (pbMap.getMonsterById(8820015 + 1) != null) {
						cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
						cm.dispose();
					}
				}
					if (pbMap.getMonsterById(8820001) != null) {
						cm.getPlayer().dropMessage("ս���Ѿ���ʼ��,�����ܽ���.");
						cm.dispose();
					}
				else
				cm.sendYesNo("Ʒ��������Ϣ,����������û��������ս.\r\n��ÿ����Խ���Ĵ���Ϊ#r3#k��[Ŀǰ�Ѿ�����#r" + cm.getBossLog('PB') + "#k��]\r\nΪ����ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��,ÿ���賿��ˢ����Ϸ����.\r\n[������Ҫ�ȼ��ﵽLv.150����,ְҵ����]\r\n��ȷ������,Ҫ������ս #bʱ��ĳ��-Ʒ���� #k��");
}
       
        } else if (status == 1  && cm.getLevel() >= 150) {
                if (cm.getBossLog('PB') < 3)
                {
                    cm.gainItem(4008000,1);
                  cm.warp(270050100);
                    cm.setBossLog('PB');
cm.serverNotice("[BossƵ��]:���"+cm.getChar().getName()+"���ž޴������,ȥ��Ʒ������.���ΪTA���Ͱ�.");
                    cm.dispose();
                }
                else
                {
                    cm.sendOk("#r��ÿ��ֻ���������3�� ! ʱ��δ��.");
                   mode = 1;
                   status = -1;
                }
                
            }
            else{
                cm.sendOk("��ĵȼ�����120�������Բ��ܽ���!");
               mode = 1;
               status = -1;
			
        }
    }
}