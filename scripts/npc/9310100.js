var Price = 10000000;               //���������ü۸��
var svrName = "��5Ԫð�յ�";       //�����������÷���������

//****����Ϊ��������,�����Ը��������Ҫ����*******//

var fee;
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
	cm.sendOk("��Ҫ����������ʱ������!!");
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("��Ҫ����������ʱ������!!");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("  #fUI/UIWindow.img/QuestIcon/6/0#\r\n  ���ã�����#b"+cm.mxdmz()+"ð�յ�#k�����̡�\r\n  ���������ļ۸�Ϊÿ�� #r" + Price + "#k ��Ϸ��\r\n  ���蹺��,�����һ��!");
        } else if (status == 1) {          	           	 
						cm.sendGetNumber("  #fUI/UIWindow.img/QuestIcon/6/0#\r\n  ��������Ҫ������ٵ�����?\r\n ",1,1,10000);		 				 
        } else if (status == 2) {  
        			fee = selection;
        			if ((cm.getPlayer().getFame() + fee) < 32767){
            		cm.sendYesNo("������ #r" + fee + "#k ������,����Ҫ֧�� #r" + fee * Price + "#k ��Ϸ��,��ȷ��Ҫ������" );  
            	}else{
            		cm.sendOk("���������������Ϊ32767�����Ѿ����ܹ�����ô��������!");
            		cm.dispose();
            	}
	    	
        } else if (status == 3) {
        			if (cm.getMeso() < (fee * Price)){
        				cm.sendOk("���ã������ϵ�Ǯֻ����#r" + Math.floor(cm.getMeso() / Price) + " #k��������");
        			}else{
								cm.gainFame(fee);
								cm.gainMeso(-fee * Price);
								cm.sendOk("���������ɹ�!������ǰ������ֵΪ #r" + cm.getPlayer().getFame() + "#k ��!" );
							}
							cm.dispose();
						
	   		}
          
  	 }
}

