importPackage(java.util); 
importPackage(net.sf.odinms.client); 
importPackage(net.sf.odinms.server); 
var chance = Math.floor(Math.random()*4+1); 
var luk =0 ; 
var status = 0; 
var display; 
var beilv = 0.3; //��װ��������Ӻ���˵ı��� 
var needap = 1000; //��Ҫ�����Ե� 
var aver = needap*0.1 ; 
var needmon = 200000000 ; //��Ҫ�Ľ�Ǯ 
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
cm.sendNext("#d"+cm.mxdmz()+"ð�յ�,װ���ں�ǿ��#k \r\n#b����ǿ������Ҫ#k#r������ͬװ��! #k\r\n#k===================#k#dǿ��˵��#k#k===================#k\r\n#rÿ��ǿ����Ҫ#b [��Ǯ 2E] [���Ե� "+needap+"��]#k\r\nװ������һ�񣺸���ǿ��װ��B#r(ǿ�����Զ���ʧ)#k\r\nװ�����ڶ��񣺸���ǿ��װ��C#r(ǿ�����Զ���ʧ)#k \r\nװ������������Ҫǿ����װ��A \r\n#rע��װ������ǰ���񲻵�Ϊ�գ�������3����ͬ��װ��!#k \r\n#r����:λ�÷Ŵ����������ٺ���Ը�!#k\r\n#k===================#k#dǿ���㷨#k===================#k\r\nA���� = A���� + ( B���� + C���� ) * "+beilv*100+"% \r\n#k===================#k#dǿ������#k===================#k \r\nǿ������С��15,�ɹ��ʣ�#r90%#k\r\nǿ������С��25,�ɹ��ʣ�#r50%#k\r\nǿ������С��15,�ɹ��ʣ�#r30%#k "); 
} else if (status == 1) { 
if (cm.getMeso() <= needmon) { 

cm.sendOk("#b����ǿ����Ҫ#r"+needmon+"#k#b,��������!#k"); 
cm.dispose(); 

} 
else { 

if ( cm.getChar().getRemainingAp() <= needap) 
{ 
cm.sendOk("#b#b����ǿ����Ҫ#r"+needap+"������ֵ#k#b,��ʣ�������ֵ����!#k"); 

cm.dispose(); 
} else { 
var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy(); 
var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).copy(); 
var item3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy(); 
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId(); 
var newstr = (item1.getStr()+item2.getStr())* beilv; 


var newdex = (item1.getDex()+item2.getDex())* beilv; 
var newint = (item1.getInt()+item2.getInt())* beilv; 
var newluk = (item1.getLuk()+item2.getLuk())* beilv; 
var newspeed = (item1.getSpeed()+item2.getSpeed())* beilv; 
var newwatk = (item1.getWatk()+item2.getWatk())* beilv; 
var newmatk = (item1.getMatk()+item2.getMatk())* beilv; 
var newwdef = (item1.getWdef()+item2.getWdef())* beilv; 
var newmdef = (item1.getMdef()+item2.getMdef())* beilv; 
var newacc = (item1.getAcc()+item2.getAcc())* beilv; 
var newavoid = (item1.getAvoid()+item2.getAvoid())* beilv; 
var sumstr = item3.getStr() + newstr ; 
var sumdex = item3.getDex() + newdex ; 
var sumint = item3.getInt() + newint ; 
var sumluk = item3.getLuk() + newluk ; 
var sumspeed = item3.getSpeed() + newspeed ; 
var sumwatk = item3.getWatk() + newwatk ; 
var summatk = item3.getMatk() + newmatk ; 
var sumwdef = item3.getWdef() + newwdef ; 
var summdef = item3.getMdef() + newmdef ; 
var sumacc = item3.getAcc() + newacc ; 
var sumavoid = item3.getAvoid() + newavoid ; 


cm.sendNext("#b����ǰװ��#v"+itemId3+"#��ǿ������Ϊ��#k#r("+item3.getUpgradeSlots()+"��)#k\r\n#b��ǰ����ǿ���ɹ���Ϊ��#k#r60%#k\r\n#b��ǰ����ǿ��ʧ�ܴ���Ϊ��#k#r"+cm.getExt('wqqhfail')+" ��#k\r\n#d===================#b���ԶԱ�#k#d===================#k\r\n#r �� �� Ŀǰ���� �������� ǿ��������#k\r\n#d�� �� "+item3.getStr()+" "+newstr+" "+sumstr+"\r\n�� �� "+item3.getDex()+" "+newdex+" "+sumdex+"\r\n�� �� "+item3.getInt()+" "+newint+" "+sumint+"\r\n�� �� "+item3.getLuk()+" "+newluk+" "+sumluk+"\r\n�� �� "+item3.getSpeed()+" "+newspeed+" "+sumspeed+"\r\n�� �� �� "+item3.getAcc()+" "+newacc+" "+sumacc+"\r\n�� �� �� "+item3.getAvoid()+" "+newavoid+" "+sumavoid+"\r\n������ "+item3.getWatk()+" "+newwatk+" "+sumwatk+"\r\nħ������ "+item3.getMatk()+" "+newmatk+" "+summatk+"\r\n������� "+item3.getWdef()+" "+newwdef+" "+sumwdef+"\r\nĦ������ "+item3.getMdef()+" "+newmdef+" "+summdef+""); 
} 
} 
} else if (status == 2) { 



var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId(); 
var itemId2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId(); 
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId(); 
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy(); 

if ((itemId1 == itemId2)&&(itemId1 == itemId3)) { 

if (item.getUpgradeSlots() <= 15) { 
if (chance <= 1) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 

cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k"); 
cm.setBossLog('wqqhfail'); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.dispose(); 
} 
else if (chance >= 2) { 

cm.sendNext("#rȷ��Ҫ��ʼǿ������?"); 

luk = 1 ; 
} 

} 
else if ((item.getUpgradeSlots() >= 16)&&(item.getUpgradeSlots() <= 25)) 
{ 
if (chance <= 1) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k"); 
cm.setBossLog('wqqhfail'); 
cm.dispose(); 
} 
else if (chance == 2) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.setBossLog('wqqhfail'); 
cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k"); 
cm.dispose(); 
} 
else if (chance >= 3) { 

cm.sendNext("#rȷ��Ҫ��ʼǿ������?"); 
luk = 1 ; 
} 

} 
else if (item.getUpgradeSlots() > 25){ 
if (chance <= 1) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k"); 
cm.setBossLog('wqqhfail'); 
cm.dispose(); 
} 
else if (chance == 2) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k"); 
cm.setBossLog('wqqhfail'); 
cm.dispose(); 
} 
else if (chance == 3) { 

MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.setBossLog('wqqhfail'); 
cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k"); 
cm.dispose(); 
} 
else if (chance >= 4) { 

cm.sendNext("#rȷ��Ҫ��ʼǿ������?"); 
luk = 1 ; 
} 
} 

} 
else{ 

cm.sendOk("#r��Ǹ,��û���ռ�������ͬ����������������λ�ô���!"); 
cm.dispose(); 

} 
}else if ((status == 3)||(luk == 1)) { 
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId(); 
var itemId2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId(); 
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId(); 
var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy(); 
var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).copy(); 
var item3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy(); 
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId(); 
var newstr = (item1.getStr()+item2.getStr())* beilv; 


var newdex = (item1.getDex()+item2.getDex())* beilv; 
var newint = (item1.getInt()+item2.getInt())* beilv; 
var newluk = (item1.getLuk()+item2.getLuk())* beilv; 
var newspeed = (item1.getSpeed()+item2.getSpeed())* beilv; 
var newwatk = (item1.getWatk()+item2.getWatk())* beilv; 
var newmatk = (item1.getMatk()+item2.getMatk())* beilv; 
var newwdef = (item1.getWdef()+item2.getWdef())* beilv; 
var newmdef = (item1.getMdef()+item2.getMdef())* beilv; 
var newacc = (item1.getAcc()+item2.getAcc())* beilv; 
var newavoid = (item1.getAvoid()+item2.getAvoid())* beilv; 
var sumstr = item3.getStr() + newstr ; 
var sumdex = item3.getDex() + newdex ; 
var sumint = item3.getInt() + newint ; 
var sumluk = item3.getLuk() + newluk ; 
var sumspeed = item3.getSpeed() + newspeed ; 
var sumwatk = item3.getWatk() + newwatk ; 
var summatk = item3.getMatk() + newmatk ; 
var sumwdef = item3.getWdef() + newwdef ; 
var summdef = item3.getMdef() + newmdef ; 
var sumacc = item3.getAcc() + newacc ; 
var sumavoid = item3.getAvoid() + newavoid ; 


//if ((itemId1 == itemId2)&&(itemId1 == itemId3)) { 
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy(); 
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
item.setSpeed(item.getSpeed() + 5); // SPEED 
item.setUpgradeSlots((item.getUpgradeSlots() + 1)); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true); 
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 3,1, true); 
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin"); 

cm.sendOk("#r��ϲ��������ǿ���ɹ�\r\nǿ������+1��������ֵ����!#k"); 
var statup = new java.util.ArrayList(); 
cm.gainMeso(-needmon); 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 

cm.dispose(); 




//} 


} 

} 
} 