/* ===========================================================
			ע��(cm.sendSimple\cm.itemQuantity())
	�ű�����: 		NPC
	���ڵ�ͼ:		
	�ű�����:		
==============================================================
����ʱ�䣺2010��9��22�� 17:19:48
������Ա����о
=============================================================
for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.startPopMessage(cm.getPlayer().getId(), "���������Լ��ı����ڳ�һ��");
					cm.dispose();
					return;
				}
			}
*/

var a = 0;
var ss = 0;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
 if (a >= 2 && mode != 1){
		cm.setNPC_Mode(18);
                    cm.openNpc(2101014);
                    cm.setNPC_Mode(0);
	}else{
    if (mode == -1) {
       cm.setNPC_Mode(18);
                    cm.openNpc(2101014);
                    cm.setNPC_Mode(0);
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1){
            cm.setNPC_Mode(18);
                    cm.openNpc(2101014);
                    cm.setNPC_Mode(0);
		}else if (a == 0) {
					if (ss == 1){
						cm.setNPC_Mode(18);
                    cm.openNpc(2101014);
                    cm.setNPC_Mode(0);
					}else{
						
					var rand = Math.floor(Math.random() * 3);
					if (rand == 1){
						cm.sendOk("�����1����Ϸ�ҡ�")
						cm.gainMeso(10000)
						cm.dispose();
					}else if (rand == 2){
						cm.sendOk("�����500��ȯ��")
						cm.gainNX(500)
						cm.dispose();
					}else{
						cm.sendOk("�Բ���,��ʲô��û�õ���")
					        cm.dispose();
					}
      }
				}else if (a == 1){
					cm.sendNext("#h #��ã���ǰʱ���� #b"+cm.getHour()+"��"+cm.getMin()+"��"+cm.getSec()+"��#k\r\n��Ϸ�ң�#r"+cm.getMeso()+"Ԫ#k�����#r"+cm.getNX()+"��#k\r\n��ʱ�䵽��#r15:00--23:59#k֮�䣬������������������\r\n����1����ʱ�䣬��˭��Ŀ죡");
				}else if (a == 2){
					if (cm.getHour() > 14 && cm.getMin() > 1){
						cm.sendYesNo("����ʱ���Ѿ����ˣ�ȷ��Ҫ��ȡ��")
					}else{
						a = -1;
						ss = 1;
	cm.sendOk("��Ǹ����ǰʱ���� #b"+cm.getHour()+"��"+cm.getMin()+"��"+cm.getSec()+"��#k����ʱ�䵽��#r15:00--23:59#k֮�䣬�����������������ɣ�")
	
					}
				}else if (a == 3){
					a = -1;
						ss = 1;
					var rand = Math.floor(Math.random() * 3);
					if (rand == 1){
						cm.sendOk("�����1����Ϸ�ҡ�")
						cm.gainMeso(10000)
						//cm.dispose();
					}else if (rand == 2){
						cm.sendOk("�����10��ȯ��")
						cm.gainNX(10)
						//cm.dispose();
					}else{
						cm.sendOk("�����2����Ϸ�ҡ�")
						cm.gainMeso(20000)
						//cm.dispose();
					}
						
					
	}//status
}
}
	}