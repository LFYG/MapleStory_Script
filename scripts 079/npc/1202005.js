
var status = 0;  	
var itemS =  	
Array(
						Array(1132036,60000,"6W点卷"),
						Array(1003006,60000,"6W点卷"),
						Array(1003008,60000,"6W点卷"),
						Array(1003009,60000,"6W点卷"),
						Array(1003001,60000,"6W点卷"),
					        Array(1002998,60000,"6W点卷") 
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
				  cm.sendNext("5元冒险岛，点卷商场[披风·帽子店][装备会慢慢添加，请玩家细心等待]");   
		}else if (status == 1) {
				StringS = "您好!您当前的点卷为#r " + cm.getPlayer().getCSPoints(0) + " #k选择你的物品.";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "#(需要#r" + itemS[i][1] + "#k点卷)#l"
				}
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			if (cm.getPlayer().getCSPoints(0) >= itemS[selection][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
						cm.sendOk("您至少应该让装备栏空出两格");
						cm.dospose();
				}
				//cm.getPlayer().modifyCSPoints(0,cm.getPlayer().getCSPoints(0) - itemS[selection][1]);
				cm.getChar().modifyCSPoints(0,-itemS[selection][1]);
				cm.gainItem(itemS[selection][0],1);
				cm.sendOk("购买成功！请查看背包！")
				cm.dispose();
			}else{
				cm.sendOk("穷鬼，你没有足够的点卷用来购买！");
				cm.dispose();
			}
		}
	}
}