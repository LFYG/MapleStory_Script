
var status = 0;  	
var itemS =  	
Array(
						Array(1132036,60000,"6W���"),
						Array(1003006,60000,"6W���"),
						Array(1003008,60000,"6W���"),
						Array(1003009,60000,"6W���"),
						Array(1003001,60000,"6W���"),
					        Array(1002998,60000,"6W���") 
);                                              
var StringS;                                    
function start() {                              
	status = -1;                            
	action(1, 0, 0);                        
}                                               
                                                
function action(mode, type, selection) {        
	if (mode == -1) {                       
		cm.dispose();                   
	} else {                                
		if (status >= 0 && mode == 0) { 
			cm.dispose();           
			return;                 
		}                               
		if (mode == 1)                  
			status++;
		else
			status--;
		if (status == 0) {
				  cm.sendNext("5Ԫð�յ�������̳�[���硤ñ�ӵ�][װ����������ӣ������ϸ�ĵȴ�]");   
		}else if (status == 1) {
				StringS = "����!����ǰ�ĵ��Ϊ#r " + cm.getPlayer().getCSPoints(0) + " #kѡ�������Ʒ.";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "#(��Ҫ#r" + itemS[i][1] + "#k���)#l"
				}
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			if (cm.getPlayer().getCSPoints(0) >= itemS[selection][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
						cm.sendOk("������Ӧ����װ�����ճ�����");
						cm.dospose();
				}
				//cm.getPlayer().modifyCSPoints(0,cm.getPlayer().getCSPoints(0) - itemS[selection][1]);
				cm.getChar().modifyCSPoints(0,-itemS[selection][1]);
				cm.gainItem(itemS[selection][0],1);
				cm.sendOk("����ɹ�����鿴������")
				cm.dispose();
			}else{
				cm.sendOk("�����û���㹻�ĵ����������");
				cm.dispose();
			}
		}
	}
}