/*
	VIP4 BOSS����NPC

	by о������
*/
importPackage(net.sf.odinms.server.life);
importPackage(net.sf.odinms.tools);
importPackage(java.awt);

var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//����!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա
var MAPID = 910000000;
var mobX = 933;
var mobY = -266;
var status;

 function start() {
 	status = -1;
 	action(1, 0, 0);
 }
 
 function action(mode, type, selection) {
 	if (mode == -1) {
 		cm.dispose();
 	} else {
 		if (mode == 0 && status == 0) {
			cm.sendOk("��Ҫ���г��ٻ�BOSS��������.");
 			cm.dispose();
 			return;
 		}
 		if (mode == 1)
 			status++;
 		else
 			status--;
 		if (status == 0) {
var cold =cm.getChar().getVip()*30;
var zhaohuan =cm.getBossLog("VIPzhaohuan");
var zhaohuanls =cold-zhaohuan;
			if(cm.getChar().getVip() >= 1){
			cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#b����ԱBoss�ٻ�.[Boss�������ɵ������ˢ��]\r\n�ٻ���δʹ��:#r"+zhaohuanls+"��#k,ÿ�տ���ʹ��:#r"+cold+"��\r\n#L0##k"+ttt+"�ٻ� >>>> �����[��Ҫ#r10��#k�ٻ�ֵ]#l  \r\n#L1#"+ttt+"�ٻ� >>>> ��ӥ[��Ҫ#r10��#k�ٻ�ֵ]#l \r\n#L2#"+ttt+"�ٻ� >>>> ����[��Ҫ#r15��#k�ٻ�ֵ]#l \r\n#L9#"+ttt+"�ٻ� >>>> ����������[��Ҫ#r20��#k�ٻ�ֵ]#l \r\n#L10#"+ttt+"�ٻ� >>>> �׿�[��Ҫ#r20��#k�ٻ�ֵ]#l \r\n#L11#"+ttt+"�ٻ� >>>> ����[��Ҫ#r20��#k�ٻ�ֵ]#l\r\n#L3#"+ttt+"�ٻ� >>>> ����(��)[��Ҫ#r40��#k�ٻ�ֵ]#l\r\n#L4#"+ttt+"�ٻ� >>>> ����(��)[��Ҫ#r40��#k�ٻ�ֵ] \r\n\r\n\r\n#L12##e"+ttt2+"�ٻ� >>>> ����[��Ҫ#r50��#k�ٻ�ֵ]#l\r\n\r\n#r             [���������ս����]\r\n");
			}else{
				cm.sendOk("����VIP,����ʹ���ٻ�ֵ.");
				cm.dispose();
			}
			
		}
		if (status == 1) {
var cold =cm.getChar().getVip()*30;
var zhaohuan =cm.getBossLog("VIPzhaohuan");
var zhaohuanls =cold-zhaohuan;	
			if(cm.getChar().getMap().countMobOnMap() > 0){
				cm.sendOk("ֻ�д����ͼ���йֺ�����ٻ�");
				cm.dispose();
				return;
			}
			if (selection == 0){
				if(zhaohuanls >= 10){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8130100,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("����ٻ�ֵ����!!")
					cm.dispose();
				}

			}else if (selection == 1){
				if(zhaohuanls >= 10){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8180001,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("����ٻ�ֵ����!!")
					cm.dispose();
				}

			}else if (selection == 2){
				if(zhaohuanls >= 15){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8500001,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("����ٻ�ֵ����!!")
					cm.dispose();
				}
}else if (selection == 4){
				if(zhaohuanls >= 40){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8520000,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("����ٻ�ֵ����!!")
					cm.dispose();
				}
}else if (selection == 3){
				if(zhaohuanls >= 40){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8510000,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("����ٻ�ֵ����!!")
					cm.dispose();
				}
			}else if (selection == 9){
				if(zhaohuanls >= 20){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8220005,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("����ٻ�ֵ����!!")
					cm.dispose();
				}

			}else if (selection == 10){
				if(zhaohuanls >= 20){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8220006,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("����ٻ�ֵ����!!")
					cm.dispose();
				}
			}else if (selection == 11){
				if(zhaohuanls >= 20){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8220003,1,MAPID);
					cm.dispose();	
				}else{
					cm.sendOk("����ٻ�ֵ����!!")
					cm.dispose();
				}
			}else if (selection == 12){								
				if(zhaohuanls >= 50){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.getC().getChannelServer().getMapFactory().getMap(MAPID).spawnFakeMonsterOnGroundBelow(MapleLifeFactory.getMonster(8800000),new Point(mobX,mobY));
					for (var i=8800003; i<8800011; i++){					
						xswzsMob(i,1,MAPID);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"�����" + " : " + "���" + cm.getPlayer().getName() +" ʹ���ٻ�ֵ���г�����������ս,��ҿ��������~.",true).getBytes());
					}				
					cm.dispose();
				}else{
					cm.sendOk("����ٻ�ֵ����!!")
					cm.dispose();
				}	
			}else if (selection == 13){
				if(cm.getzb() >= 3){																
					var youren = 0;
					var temp = 0;
					for (var i = 0 ; i < 15; i++){
						if(cm.getC().getChannelServer().getMapFactory().getMap(209000001 + i).playerCount() > 0){							
							youren = 1;
							
						}else{
							youren = 0;
							temp =i;
							break;
						}
					}
					if(youren == 1){
						cm.sendOk("������û��λ����,��������߽���!");				
					}else{						
						cm.getC().getChannelServer().getMapFactory().getMap(209000001 + temp).clearMapTimer();
						cm.getC().getChannelServer().getMapFactory().getMap(209000001 + temp).killAllMonsters();
						cm.getC().getChannelServer().getMapFactory().getMap(209000001 + temp).addMapTimer(3600,910000000);
						cm.warp(209000001 + temp,0);
						cm.setzb(-0);	
						cm.getChar().setzbLog("����ˢ����ÿ�ν��붼��Ҫ�ʺŻ���3Ԫ������ȥ����۵ģ�");					
					}
					cm.dispose();
				}else{
					cm.sendOk("����ˢ����ÿ�ν��붼��Ҫ�ʺŻ���3Ԫ������ȥ����۵ģ�");
					cm.sendOk();
				}								
			}else if (selection == 14){								
				cm.warp(910000000,0);
				cm.dispose();
			}
				
			
		}
	}
}


function xswzsMob(mobid,amount,mapid){    //о�����ӵĶ�ָ����ͼˢ�ֺ��������Է��ѹֿ����г���BUG	

	var pMap = cm.getC().getChannelServer().getMapFactory().getMap(mapid); 
//	var newStats = MapleMonsterStats();
//	newStats.setHp(mobhp);
//	newStats.setExp(mobexp);
	for(i = 0; i < amount; i++){
		var mob = MapleLifeFactory.getMonster(mobid);	
//		mob.setOverrideStats(newStats);
//        	mob.setHp(mob.getMaxHp());
	        //mobX += 10
		pMap.spawnMonsterOnGroudBelow(mob, mobX, mobY); 
	}
}
