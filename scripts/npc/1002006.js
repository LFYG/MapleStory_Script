importPackage(net.sf.odinms.client);
var status = 0;
var totAp = 0;
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա
var newAp;
var newStr;
var newDex;
var newInt;
var newLuk;
var Strings = Array("","","","","");
var aplist;
var apnamelist = Array(1,2,3,4);//�������������
var statup;
var p;
var kou = 800;
var kou2 = 800;   //ת�����Ҫ�۵���������
var needMeso = 20000000;
var needLevel = 180;
var Skills = Array(1111002,11111001,5121003,5111005,15111002);  //��������ת��󲻱����ļ���
function start() {
	statup = new java.util.ArrayList();
	p = cm.c.getPlayer();
  	totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();  //��������	
  	newStr =  p.getStr();
	newDex =  p.getDex();	
	newInt =  p.getInt();
	newLuk =  p.getLuk();
	aplist= Array(p.getStr(), p.getDex(), p.getInt(), p.getLuk()); 	
	if(p.getVip() < 2){
		kou = 800;
		kou2 = 800;
	}else if(p.getVip() == 2){
		kou = 750;
		kou2 = 750;
	}else if(p.getVip() == 3){
		kou = 700;
		kou2 = 700;	
	}else if(p.getVip() == 4){
		kou = 650;
		kou2 = 650;
         }else if(p.getVip() == 5){
		kou = 600;
		kou2 = 600;
}else if(p.getVip() >= 6){
		kou = 550;
		kou2 = 550;
	}
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {//ExitChat
		cm.dispose();
  }else if (mode == 0){//No
		cm.sendOk("�õ�, ���������ȷ����Ҫ #bͶ̥ת��#k.");
		cm.dispose();
	}else{            //Regular Talk
		if (mode == 1)
    status++;
    else
    status--;    
    if (status == 0) {		
				if(cm.getChar().getVip() <= 0){
					var vipstr = "��ͨ���";					
				}else if(cm.getChar().getVip() == 1){
					var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
				}else if(cm.getChar().getVip() == 2){
					var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
				}else if(cm.getChar().getVip() == 3){
					var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";
                                }else if(cm.getChar().getVip() == 4){
					var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";
                                }else if(cm.getChar().getVip() == 5){
					var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";						
				}else{
					var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
				}
if(cm.getChar().getReborns() <= 50){
					var id = "2340000";var ids = "2";				
				}else if(cm.getChar().getReborns() >=51&&cm.getChar().getReborns() <= 100){
					var id = "2340000";var ids = "4";				
				}else if(cm.getChar().getReborns() >=101&&cm.getChar().getReborns() <= 200){
					var id = "4031065";var ids = "1";					
				}else if(cm.getChar().getReborns() >= 201){
					var id = "4031065";var ids = "2";			
				}else{
					var id = "4031065";var ids = "0";					
				}
			cm.sendOk("Hi~.[#h #]#k.���ȼ��ﵽLv.180 ,���Խ��з���.\r\n\r\nת����Ҫ:#b20,000,000#k��Һ�#b1��ʥ��#k\r\n#v4031454##r#b(�̵깺��,��������,�����,����)���.#k\r\n\r\nת����������Ϊ#b1#k����#b >>>> ����#k.\r\n��������#r"+vipstr+"#k�����۳����Ե�#b"+kou2+"#k��.\r\n#bȷ��Ҫ����#rת��#b��?"); 		
		}else if (status == 1) {
			if(cm.getChar().getLevel() < needLevel){
      	cm.sendOk("�ܱ�Ǹ������Ҫ" + needLevel + "�����ſ���Ͷ̥ת��.");
	      cm.dispose();
      }else if (totAp < (kou + 16)){ 
	    	cm.sendOk("��������ֵ�����쳣����!�����Ϸ���������!"); 
	      cm.dispose(); 
      }else if (cm.haveItem(4031454) == false){ 
	      cm.sendOk("��û�д���#bʥ��#k "); 
	      cm.dispose(); 
      }else if (cm.getMeso() < needMeso) {
	    	cm.sendOk("��û��2E���,�Ҳ��ܰ����æŶ."); 
	      cm.dispose();
      }else{	
      	var temp;
				for (var j = 0; j < 3; j++){   //������ð������˳������Ҫ������������apnamelist������ݡ�ʵ�ִӴ�С��������ֵ��
	 				for (var i = 0; i < 3 - j; i++){
						if(aplist[i] < aplist[i+1]){
							temp = aplist[i];
							aplist[i] = aplist[i+1];
							aplist[i+1] = temp;				
							temp = apnamelist[i];
							apnamelist[i] = apnamelist[i+1];
							apnamelist[i+1] = temp;
						}
	  			}
			 	} 
      	if(p.getRemainingAp() >= kou){
			 		newAp = p.getRemainingAp() - kou;
					Strings[0] = " APֵ����ȥ #r" + kou + " #k��";	
					kou = 0;
				}else{
					newAp =0;
					kou = kou - p.getRemainingAp();
					if (p.getRemainingAp() > 0){
					Strings[0] = " APֵ����ȥ #r" + p.getRemainingAp() + " #k��";
					}  
				}
				for(x = 0; x < 4; x++){
					if(kou > 0){
						if(apnamelist[x] == 1){					
							if(p.getStr() - 4 >= kou){
								newStr = p.getStr() - kou;
								Strings[1] = " ��������ȥ #r" + kou + "#k ��";
								kou = 0;			
							}else{
								newStr = 4;
								kou = kou - (p.getStr() - 4);
								Strings[1] = " ��������ȥ #r" + (p.getStr() - 4) + "#k ��";			
							}
						}else if(apnamelist[x] == 2){
							if(p.getDex() - 4 >= kou){
								newDex = p.getDex() - kou;
								Strings[2] = " ���ݽ���ȥ #r" + kou + "#k ��";			
								kou = 0;
							}else{
								newDex = 4;
								kou = kou - (p.getDex() - 4);
								Strings[2] = " ���ݽ���ȥ #r" + (p.getDex() - 4) + "#k ��";			
							}
						}else if(apnamelist[x] == 3){
							if(p.getInt() - 4 >= kou){
								newInt = p.getInt() - kou;
								Strings[3] = " ��������ȥ #r" + kou + "#k ��";
								kou = 0;
							}else{
								newInt = 4;
								kou = kou - (p.getInt() - 4);
								Strings[3] = " ��������ȥ #r" + (p.getInt() - 4) + "#k ��";
							}
						}else if(apnamelist[x] == 4){
							if(p.getLuk() - 4 >= kou){
								newLuk = p.getLuk() - kou;
								Strings[4] = " ��������ȥ #r" + kou + "#k ��";
								kou = 0;
							}else{
								newInt = 4;
								kou = kou - (p.getLuk() - 4);
								Strings[4] = " ��������ȥ #r" + (p.getLuk() - 4) + "#k ��";
							}
						}
						if (kou < 1) break;
					}	
				}
			var St = "";
			for(s = 0; s < 5; s++){
				if(Strings[s] != "") St = St + Strings[s] + "\r\n";
			}
	    cm.sendOk("��������#r5Ԫ��Ա" + cm.getChar().getVip() + "\r\n#k������������ֵ��۳�#r" + kou2 + "#k���Ե�.�۳���ϸ�������.#k\r\n\r\n" + St + "#n");
	    }
      }else if (status == 2){
					cm.sendSimple("��ϲ�������г�. ���������Ϊʲôְҵ��?#b\r\n#L0#����#l\r\n#L1#սͯ#l\r\n#L2#������#l#k");
			}else if (status == 3){	      
				if(cm.getChar().getReborns() <= 10 && cm.getChar().getReborns() >=0){
					var xx = "��������ʿ";					
				}else if(cm.getChar().getReborns() <= 30 && cm.getChar().getReborns() >=11){
					var xx = "��������ʿ";					
				}else if(cm.getChar().getReborns() <= 60 && cm.getChar().getReborns() >=31){
					var xx = "̥Ϣ����ʿ";					
				}else if(cm.getChar().getReborns() <= 80 && cm.getChar().getReborns() >=61){
					var xx = "�ٹ�����ʿ";					
				}else if(cm.getChar().getReborns() <= 100 && cm.getChar().getReborns() >=81){
					var xx = "������ʿ";
				}else if(cm.getChar().getReborns() <= 150 && cm.getChar().getReborns() >=101){
					var xx = "ԪӤ����ʿ";	
				}else if(cm.getChar().getReborns() <= 250 && cm.getChar().getReborns() >=151){
					var xx = "��������ʿ";	
				}else if(cm.getChar().getReborns() <= 400 && cm.getChar().getReborns() >=251){
					var xx = "��������ʿ";	
				}else if(cm.getChar().getReborns() <= 600 && cm.getChar().getReborns() >=401){
					var xx = "�������ʿ";	
				}else if(cm.getChar().getReborns() >= 601){
					var xx = "�ɽ��ڴ�Բ����ʿ";					
				}
				if(selection == 0)  {						
		    	cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
        }
				if(selection == 1){	
	        cm.changeJob(net.sf.odinms.client.MapleJob.Ares);
        }
				if(selection == 2){			
        	cm.changeJob(net.sf.odinms.client.MapleJob.KNIGHT);        	
	      }
				cm.gainMeso(-needMeso);
	      cm.gainItem(4031454,-1);
	      for(var n = 0; n < Skills.length; n++){
	      	cm.getPlayer().changeSkillLevel(SkillFactory.getSkill(Skills[n]),0,0); //���һЩ�������ļ���
	      } 
	      cm.gainReborns(1);
				//cm.unequipEverything(); //��װ����䣬��Ҫ��ȥ��ǰ��ġ�//��
        cm.sendNext("#e#b�����÷ǳ���#k, ���Ѿ��ɹ�������,�����ڵ����Ե�������£�\r\n" + "   ����: #r" + newStr + " #k��" + "\r\n   ����: #r" + newDex + " #k��" + "\r\n   ����: #r" + newInt + " #k��" + "\r\n   ����: #r" + newLuk + " #k��" + "\r\n   δ�����AP: #r" + newAp + " #k��");
        p.setRemainingAp(newAp);
				p.setStr(newStr);
				p.setDex(newDex);
				p.setInt(newInt);
				p.setLuk(newLuk);
				p.setLevel(1);		
				statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(newStr)));
				statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(newDex)));
				statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(newLuk)));
				statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(newInt)));
				statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
	      statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(1))); 
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(newAp)));
				p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));

if(cm.getChar().getReborns() <= 50){
					var id = "2340000";var ids = "2";				
				}else if(cm.getChar().getReborns() >=51&&cm.getChar().getReborns() <= 100){
					var id = "2340000";var ids = "4";				
				}else if(cm.getChar().getReborns() >=101&&cm.getChar().getReborns() <= 200){
					var id = "4031065";var ids = "1";					
				}else if(cm.getChar().getReborns() >= 201){
					var id = "4031065";var ids = "2";			
				}else{
					var id = "4031065";var ids = "0";					
				}
                         
				cm.getPlayer().saveToDB(true);  //����
				cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"5Ԫð�յ�" + " : " + "��ϲ [" + cm.getPlayer().getName() + "] �� " + cm.getChar().getReborns() + " ��ת��,��� O(��_��)O.",true).getBytes());
 				cm.dispose();           
		}
  }
}
 
    
