importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);
var chance = Math.floor(Math.random()*10+1);
var luk =0 ;
var status = 0;
var display;
var jilv;
var needap = 0
var beilv = 0.02;   //��װ��������Ӻ���˵ı���
var needmon = 1 ;  //��Ҫ��Ԫ��
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		if (status == 0) {
			cm.sendNext("#b"+cm.mxdmz()+"ð�յ�#k����ǿ������.#k\r\n#rǿ��˵��#k:\r\nÿ��ǿ����Ҫ����:#b"+needmon+"#kԪ��.\r\n#rע��װ������ǰһ�񲻵�Ϊ�գ�ǿ��װ����+0��+10�������𻵣�+10�ٶ�������𻵣�����ʿ����������׼����#k #k\r\n����ǰ��Ԫ����#e��" + cm.getzb() + "��");
		} else if (status == 1) {
		    if (cm.getzb() < needmon) {
		            
		            cm.sendOk("#b����ǿ����Ҫ#r"+needmon+"Ԫ��#k#b,��������!#k");
					cm.dispose();
				    
		    } else if (cm.getChar().getRemainingAp() < 0)  {
		            cm.sendOk("#b#b����ǿ����Ҫ#r"+needap+"������ֵ#k#b,��ʣ�������ֵ����!#k");
				    cm.dispose();
		  
} else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null)  {
		            cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
				    cm.dispose();
} else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
		            cm.sendOk("����װ�����ܽ���ǿ��.");
				    cm.dispose();
} else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) != null) {
		   var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* beilv;
		   
		   
		   var newdex = Math.floor((item1.getDex())* beilv);
		   var newint = Math.floor((item1.getInt())* beilv);
		   var newluk = Math.floor((item1.getLuk())* beilv);
		   var newspeed = Math.floor((item1.getSpeed())* beilv);
		   var newwatk = Math.floor((item1.getWatk())* beilv);
		   var newmatk = Math.floor((item1.getMatk())* beilv);
		   var newwdef = Math.floor((item1.getWdef())* beilv);
		   var newmdef = Math.floor((item1.getMdef())* beilv);
		   var newacc = Math.floor((item1.getAcc())* beilv);
		   var newavoid = Math.floor((item1.getAvoid())* beilv);
		   var sumstr = Math.floor(item1.getStr() + newstr);
		   var sumdex = Math.floor(item1.getDex() + newdex);
		   var sumint = Math.floor(item1.getInt() + newint);
		   var sumluk = Math.floor(item1.getLuk() + newluk);
		   var sumspeed = Math.floor(item1.getSpeed() + newspeed);
		   var sumwatk = Math.floor(item1.getWatk() + newwatk);
		   var summatk = Math.floor(item1.getMatk() + newmatk);
		   var sumwdef = Math.floor(item1.getWdef() + newwdef);
		   var summdef = Math.floor(item1.getMdef() + newmdef);
		   var sumacc = Math.floor(item1.getAcc() + newacc);
		   var sumavoid = Math.floor(item1.getAvoid() + newavoid);

		   var mek ="";
                       if (item1.getStr() != 0) {
                       mek+="\r\n     >> ����:"+item1.getStr();
                       }
                       if (item1.getDex() != 0) {
                       mek+="\r\n     >> ����:"+item1.getDex();
                       }
                       if (item1.getInt() != 0) {
                       mek+="\r\n     >> ����:"+item1.getInt();
                       }
                       if (item1.getLuk() != 0) {
                       mek+="\r\n     >> ����:"+item1.getLuk();
                       }
                       if (item1.getSpeed() != 0) {
                       mek+="\r\n     >> �ƶ��ٶ�:+"+item1.getSpeed();
                       }
                       if (item1.getAcc() != 0) {
                       mek+="\r\n     >> ������:"+item1.getAcc();
                       }
                       if (item1.getAvoid() != 0) {
                       mek+="\r\n     >> �ر���:"+item1.getAvoid();
                       }
                       if (item1.getWatk() != 0) {
                       mek+="\r\n     >> ��������:"+item1.getWatk();
                       }
                       if (item1.getMatk() != 0) {
                       mek+="\r\n     >> ħ��������:"+item1.getMatk();
                       }
                       if (item1.getWdef() != 0) {
                       mek+="\r\n     >> ���������:"+item1.getWdef();
                       }
                       if (item1.getStr() != 0) {
                       mek+="\r\nħ��������:"+item1.getMdef();
                       }
                   var pai ="";
                       if (newstr >= 1) {
                       pai+="\r\n     >> ��������:"+newstr;
                       }
                       if (newdex >= 1) {
                       pai+="\r\n     >> ��������:"+newdex;
                       }
                       if (newint >= 1) {
                       pai+="\r\n     >> ��������:"+newint;
                       }
                       if (newluk >= 1) {
                       pai+="\r\n     >> ��������:"+newluk;
                       }
                       if (newspeed >= 1) {
                       pai+="\r\n     >> �ƶ��ٶ�����:"+newspeed;
                       }
                       if (newacc >= 1) {
                       pai+="\r\n     >> ����������:"+newacc;
                       }
                       if (newavoid >= 1) {
                       pai+="\r\n     >> �ر�������:"+newavoid;
                       }
                       if (newwatk >= 1) {
                       pai+="\r\n     >> ������������:"+newwatk;
                       }
                       if (newmatk >= 1) {
                       pai+="\r\n     >> ħ������������:"+newwatk;
                       }
                       if (newwdef >= 1) {
                       pai+="\r\n     >> �������������:"+newwdef;
                       }
                       if (newmdef >= 1) {
                       pai+="\r\n     >> ħ������������:"+newmdef;
                       }
                   var paiid ="";
                       if (sumstr >= 1) {
                       paiid+="\r\n     >> ����:"+sumstr;
                       }
                       if (sumdex >= 1) {
                       paiid+="\r\n     >> ����:"+sumdex;
                       }
                       if (sumint >= 1) {
                       paiid+="\r\n     >> ����:"+sumint;
                       }
                       if (sumluk >= 1) {
                       paiid+="\r\n     >> ����:"+sumluk;
                       }
                       if (sumspeed >= 1) {
                       paiid+="\r\n     >> �ƶ��ٶ�:"+sumspeed;
                       }
                       if (sumacc >= 1) {
                       paiid+="\r\n     >> ������:"+sumacc;
                       }
                       if (sumavoid >= 1) {
                       paiid+="\r\n     >> �ر���:"+sumavoid;
                       }
                       if (sumwatk >= 1) {
                       paiid+="\r\n     >> ��������:"+sumwatk;
                       }
                       if (summatk >= 1) {
                       paiid+="\r\n     >> ħ��������:"+summatk;
                       }
                       if (sumwdef >= 1) {
                       paiid+="\r\n     >> ���������:"+sumwdef;
                       }
                       if (summdef >= 1) {
                       paiid+="\r\n     >> ħ��������:"+summdef;
                       }

		   var add="#rǿ��ǰ���ԣ�#k"+mek;

		       add+="\r\n#rǿ���������ԣ�#k"+pai;

		       add+="\r\n#rǿ�����ۺ����ԣ�#k"+paiid;
                  cm.sendNext("#b����ǰװ��#v"+itemId1+"#��ǿ������Ϊ��#k#r("+item1.getLevel()+"��)#k\r\n#b���ܹ�ǿ���������Ϊ��#k#r"+cm.getwqqhfail()+" ��#k\r\n#b���ܹ�ǿ���ɹ�����Ϊ��#k#r"+cm.getwqqhok()+" ��#k\r\n#b����ǿ���ܺ�Ϊ��#k#r"+cm.getwqqhfull()+" ��#k\r\n\r\n"+add,2);
if(item1.getUniqueId() == 0)

item1.setUniqueId(1); 
 
	  } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
	
if(item1.getUniqueId() == 0)

item1.setUniqueId(1); 
			   			  cm.sendOk("�뽫Ҫǿ�����������ڵ�һ����ܽ���!");
				cm.dispose();  
			}
		} else if (status == 2) {
		    var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
         if (item.getLevel() <= 3) {
			   if (chance <= 0) {
					cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " ǿ��ʧ���ˣ��ϼƳɹ�������"+cm.getwqqhok()+"�����������"+(cm.getwqqhfail() +1)+"���ܺϣ�"+(cm.getwqqhfull() +1)+"�� ��ʹ��Ԫ����"+(cm.getwqqhfull() * (""+needmon+""))+".",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.dispose();
                }
                else if (chance >= 1) {
                       cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
                    luk = 1 ;
                }
}
		  else if ((item.getLevel() >= 4)&&(item.getLevel() <= 7))
           {
           if (chance <= 3) {
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
			 var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* 0.17;
		   
		   
		   var newdex = (item1.getDex())* 0.17;
		   var newint = (item1.getInt())* 0.17;
		   var newluk = (item1.getLuk())* 0.17;
		   var newspeed = (item1.getSpeed())* 0.17;
		   var newwatk = (item1.getWatk())* 0.17;
		   var newmatk = (item1.getMatk())* 0.17;
		   var newwdef = (item1.getWdef())* 0.17;
		   var newmdef = (item1.getMdef())* 0.17;
		   var newacc = (item1.getAcc())* 0.17;
		   var newavoid = (item1.getAvoid())* 0.17;
		   var sumstr = item1.getStr() - newstr;
		   var sumdex = item1.getDex() - newdex;
		   var sumint = item1.getInt() - newint;
		   var sumluk = item1.getLuk() - newluk;
		   var sumspeed = item1.getSpeed() - newspeed;
		   var sumwatk = item1.getWatk() - newwatk;
		   var summatk = item1.getMatk() - newmatk;
		   var sumwdef = item1.getWdef() - newwdef;
		   var summdef = item1.getMdef() - newmdef;
		   var sumacc = item1.getAcc() - newacc;
		   var sumavoid = item1.getAvoid() - newavoid;
		   
			
			//if ((itemId1 == itemId1)&&(itemId1 == itemId1)) {
		            var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() - 1); // SPEED 
item.setJump(item.getJump() - 1);
					item.setLevel((item.getLevel() - 1));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
					cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " ǿ��ʧ���ˣ��ϼƳɹ�������"+cm.getwqqhok()+"�����������"+(cm.getwqqhfail() +1)+"���ܺϣ�"+(cm.getwqqhfull() +1)+"�� ��ʹ��Ԫ����"+(cm.getwqqhfull() * (""+needmon+""))+"",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.dispose();
                }
                 else if (chance >= 4) {
                   
                    cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
                    luk = 1 ;
                }
           
           }
           else if (item.getLevel() == 8)
           {
           if (chance <= 4) {
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
			 var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* 0.765;
		   var newdex = (item1.getDex())* 0.765;
		   var newint = (item1.getInt())* 0.765;
		   var newluk = (item1.getLuk())* 0.765;
		   var newspeed = (item1.getSpeed())* 0.765;
		   var newwatk = (item1.getWatk())* 0.765;
		   var newmatk = (item1.getMatk())* 0.765;
		   var newwdef = (item1.getWdef())* 0.765;
		   var newmdef = (item1.getMdef())* 0.765;
		   var newacc = (item1.getAcc())* 0.765;
		   var newavoid = (item1.getAvoid())* 0.765;
		   var sumstr = item1.getStr() - newstr;
		   var sumdex = item1.getDex() - newdex;
		   var sumint = item1.getInt() - newint;
		   var sumluk = item1.getLuk() - newluk;
		   var sumspeed = item1.getSpeed() - newspeed;
		   var sumwatk = item1.getWatk() - newwatk;
		   var summatk = item1.getMatk() - newmatk;
		   var sumwdef = item1.getWdef() - newwdef;
		   var summdef = item1.getMdef() - newmdef;
		   var sumacc = item1.getAcc() - newacc;
		   var sumavoid = item1.getAvoid() - newavoid;
		            var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() - 8); // SPEED 
item.setJump(item.getJump() - 8);
					item.setLevel((item.getLevel() - 8));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
					cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " ǿ��ʧ�ܹ�0�ˣ��ϼƳɹ�������"+cm.getwqqhok()+"�����������"+(cm.getwqqhfail() +1)+"���ܺϣ�"+(cm.getwqqhfull() +1)+"�� ��ʹ��Ԫ����"+(cm.getwqqhfull() * (""+needmon+""))+"",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.dispose();
                }
                 else if (chance >= 5) {
                    cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
                    luk = 1 ;
                }
           
           }
           else if (item.getLevel() == 9)
           {
           if (chance <= 5) {
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
			 var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* 0.805;
		   var newdex = (item1.getDex())* 0.805;
		   var newint = (item1.getInt())* 0.805;
		   var newluk = (item1.getLuk())* 0.805;
		   var newspeed = (item1.getSpeed())* 0.805;
		   var newwatk = (item1.getWatk())* 0.805;
		   var newmatk = (item1.getMatk())* 0.805;
		   var newwdef = (item1.getWdef())* 0.805;
		   var newmdef = (item1.getMdef())* 0.805;
		   var newacc = (item1.getAcc())* 0.805;
		   var newavoid = (item1.getAvoid())* 0.805;
		   var sumstr = item1.getStr() - newstr;
		   var sumdex = item1.getDex() - newdex;
		   var sumint = item1.getInt() - newint;
		   var sumluk = item1.getLuk() - newluk;
		   var sumspeed = item1.getSpeed() - newspeed;
		   var sumwatk = item1.getWatk() - newwatk;
		   var summatk = item1.getMatk() - newmatk;
		   var sumwdef = item1.getWdef() - newwdef;
		   var summdef = item1.getMdef() - newmdef;
		   var sumacc = item1.getAcc() - newacc;
		   var sumavoid = item1.getAvoid() - newavoid;
		   
			
			//if ((itemId1 == itemId1)&&(itemId1 == itemId1)) {
		            var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() - 9); // SPEED 
item.setJump(item.getJump() - 9);
					item.setLevel((item.getLevel() - 9));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
					cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " ǿ��ʧ�ܹ�0�ˣ��ϼƳɹ�������"+cm.getwqqhok()+"�����������"+(cm.getwqqhfail() +1)+"���ܺϣ�"+(cm.getwqqhfull() +1)+"�� ��ʹ��Ԫ����"+(cm.getwqqhfull() * (""+needmon+""))+"",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.dispose();
                }
                 else if (chance >= 6) {
                    cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
                    luk = 1 ;
                }
           
           }
           else if (item.getLevel() == 10)
           {
           if (chance <= 5) {
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
			 var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* 0.837;
		   var newdex = (item1.getDex())* 0.837;
		   var newint = (item1.getInt())* 0.837;
		   var newluk = (item1.getLuk())* 0.837;
		   var newspeed = (item1.getSpeed())* 0.837;
		   var newwatk = (item1.getWatk())* 0.837;
		   var newmatk = (item1.getMatk())* 0.837;
		   var newwdef = (item1.getWdef())* 0.837;
		   var newmdef = (item1.getMdef())* 0.837;
		   var newacc = (item1.getAcc())* 0.837;
		   var newavoid = (item1.getAvoid())* 0.837;
		   var sumstr = item1.getStr() - newstr;
		   var sumdex = item1.getDex() - newdex;
		   var sumint = item1.getInt() - newint;
		   var sumluk = item1.getLuk() - newluk;
		   var sumspeed = item1.getSpeed() - newspeed;
		   var sumwatk = item1.getWatk() - newwatk;
		   var summatk = item1.getMatk() - newmatk;
		   var sumwdef = item1.getWdef() - newwdef;
		   var summdef = item1.getMdef() - newmdef;
		   var sumacc = item1.getAcc() - newacc;
		   var sumavoid = item1.getAvoid() - newavoid;
		   
			
			//if ((itemId1 == itemId1)&&(itemId1 == itemId1)) {
		            var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() - 10); // SPEED 
item.setJump(item.getJump() - 10);
					item.setLevel((item.getLevel() - 10));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
					cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " ǿ��ʧ�ܹ�0�ˣ��ϼƳɹ�������"+cm.getwqqhok()+"�����������"+(cm.getwqqhfail() +1)+"���ܺϣ�"+(cm.getwqqhfull() +1)+"�� ��ʹ��Ԫ����"+(cm.getwqqhfull() * (""+needmon+""))+"",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.dispose();
                }
                 else if (chance >= 6) {
                    cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
                    luk = 1 ;
                }
           
           }
           else if (item.getLevel() >= 11){
           if (chance <= 7) {
          MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
				    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
					cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " ��ǿ���ˣ��ϼƳɹ�������"+cm.getwqqhok()+"�����������"+(cm.getwqqhfail() +1)+"���ܺϣ�"+(cm.getwqqhfull() +1)+"�� ��ʹ��Ԫ����"+(cm.getwqqhfull() * (""+needmon+""))+"",item, true).getBytes());
					cm.gainwqqhfail(1);
cm.gainwqqhfull(1);
				    cm.dispose();
                }
                else if (chance >= 8) {
                    cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
                    luk = 1 ;
                }
}
			}else if ((status == 3)||(luk == 1)) {
			var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
			 var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
		   var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
		   var newstr = (item1.getStr())* beilv;
		   
		   
		   var newdex = (item1.getDex())* beilv;
		   var newint = (item1.getInt())* beilv;
		   var newluk = (item1.getLuk())* beilv;
		   var newspeed = (item1.getSpeed())* beilv;
		   var newwatk = (item1.getWatk())* beilv;
		   var newmatk = (item1.getMatk())* beilv;
		   var newwdef = (item1.getWdef())* beilv;
		   var newmdef = (item1.getMdef())* beilv;
		   var newacc = (item1.getAcc())* beilv;
		   var newavoid = (item1.getAvoid())* beilv;
		   var sumstr = item1.getStr() + newstr;
		   var sumdex = item1.getDex() + newdex;
		   var sumint = item1.getInt() + newint;
		   var sumluk = item1.getLuk() + newluk;
		   var sumspeed = item1.getSpeed() + newspeed;
		   var sumwatk = item1.getWatk() + newwatk;
		   var summatk = item1.getMatk() + newmatk;
		   var sumwdef = item1.getWdef() + newwdef;
		   var summdef = item1.getMdef() + newmdef;
		   var sumacc = item1.getAcc() + newacc;
		   var sumavoid = item1.getAvoid() + newavoid;
		            var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setStr(sumstr+0.4); // STR     
item.setDex(sumdex+0.4); // DEX     
item.setInt(sumint+0.4); // INT 
item.setLuk(sumluk+0.4); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() + 1); // SPEED 
item.setJump(item.getJump() + 1); // Jump
					item.setLevel((item.getLevel() + 1));
					MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
					cm.sendOk("#r��ϲ��������#v"+itemId1+"#�ɹ�\r\nǿ������+1��������ֵ����!#k");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + " +"+(item1.getLevel() +1) +" �ɹ�!�ϼƳɹ�������"+(cm.getwqqhok() +1)+"�����������"+cm.getwqqhfail()+"���ܺϣ�"+(cm.getwqqhfull() +1)+"�� ��ʹ��Ԫ����"+(cm.getwqqhfull() * (""+needmon+""))+"�� ���. " + cm.getzb() + "",item, true).getBytes());
          cm.gainwqqhok(1);
cm.gainwqqhfull(1);
				    var statup = new java.util.ArrayList();
				    cm.setzb(-needmon);
				    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));

				
				    cm.dispose();
		}
		
	}
}