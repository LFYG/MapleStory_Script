importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//����!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա

//////////////////////////////////////////////////////////
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
if(cm.getChar().getVip() <= 0){
var vipstr = "��ͨ���";					
}else if(cm.getChar().getVip() == 1){
var vipstr = ""+ttt6+" 5Ԫ��Ա��";					
}else if(cm.getChar().getVip() == 2){
var vipstr = ""+ttt6+" 5Ԫ��Ա��";					
}else if(cm.getChar().getVip() == 3){
var vipstr = ""+ttt6+" 5Ԫ��Ա��";
}else if(cm.getChar().getVip() == 4){
var vipstr = ""+ttt6+" 5Ԫ��Ա��";	
}else if(cm.getChar().getVip() == 5){
var vipstr = ""+ttt6+" 5Ԫ��Ա��";					
}else{
var vipstr = ""+ttt6+" 5Ԫ��Ա��";					
}
var textz = "#r"+cm.mxdmz()+"ð�յ�#k,����ϵͳ.#b  \r\n";
//textz += "#r������һ�#r"+ttt6+"#b#l\r\n";

textz += "#L1#"+ttt3+"�鿴#e >>>> #n�� �� �� Ϣ#r["+ttt4+"]#b#l\r\n";

textz += "#L2#"+ttt3+"�鿴#e >>>> #n�� �� �� ��#r["+ttt4+"]#b#l\r\n";

textz += "#L3#"+ttt3+"�鿴#e >>>> #n�� �� �� ��#r["+ttt4+"]#b#l\r\n";

textz += "#L4#"+ttt3+"�鿴#e >>>> #n�� ɫ �� ��#r["+ttt4+"]#b#l\r\n";

textz += "#L5#"+ttt3+"�鿴#e >>>> #nװ �� �� ��#r["+ttt4+"]#b#l\r\n";

textz += "#L6#"+ttt3+"�ؼ�#e >>>> #n�� �� �� ��#r[hot]#l\r\n";

//textz += "#L7#"+ttt3+"ʹ�÷�Ҷ��ʥ����Ʊ#l\r\n";

//textz += "#L49#"+ttt2+"ʹ��Boss������Ʒ#r[����][�ɽ����������Ԫ��]#l\r\n";


cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if (selection == 1) {
cm.sendOk("#d====================================================\r\n                      #b�� �� �� Ϣ\r\n#d====================================================\r\n ID��" + cm.getChar().getId() +"\r\n �ȼ���" + cm.getChar().getLevel() + "��\r\n ת�������" + cm.getChar().getReborns() + "\r\n VIP�ȼ���" + viplevel + "\r\n �����㣺" + cm.getChar().getRw15() + "\r\n ��Ǯ������" + cm.getMeso() + "���\r\n Ԫ��������" + cm.getzb() + "��\r\n ��ȯ������" + cm.getChar().getCSPoints(0) + "��\r\n ����ȯ������" + cm.getChar().getCSPoints(1) + "��\r\n====================================================\r\n ������" + cm.getChar().getStr() + "  ���ݣ�" + cm.getChar().getDex() + "  ������" + cm.getChar().getInt() + "  ������" + cm.getChar().getLuk() + "\r\n �����ȣ�" + cm.getChar().getFame() + "��\r\n ���Ѫ����" +  cm.getChar().getMaxHp() + "     ���������" + cm.getChar().getMaxMp() + "\r\n ��ǰѪ����" + cm.getChar().getHp() + "     ��ǰ������" + cm.getChar().getMp() + "\r\n====================������������Ϣ==================\r\n ���������ƣ�"+cm.mxdmz()+"ð�յ�\r\n ��Ǯ���ʣ�100 ��\r\n ���鱶�ʣ�50000��\r\n ��Ʒ���ʣ�50 ��\r\n BOSS���ʣ�30 ��\r\n ���ﾭ�鱶�ʣ�20 ��\r\n  " );
cm.dispose();

}else if (selection == 2) {
cm.sendOk("#r"+cm.mxdmz()+"ð�յ�#k,�������ƹ�,�ƹ��ļ����ǰ������װ�����ԣ�VIP�ȼ���ת����������˵ȼ����ж�.�ƹ����������ޣ���ʹ����ͨ���ֻҪ�к�װ����ת�������������ţ�ˣ�\r\n\r\n#bת���������,װ�����ǽ���~");
cm.dispose();

}else if (selection == 49) {
cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#k,������ʹ��Boss������Ʒ�һ���Ʒ,����Boss����õ�#v4031549##v4031344#����������#r������#k��#rԪ��#k~\r\n#r[Hot]#k��NPCרΪ��ͨ��Ҵ��죡\r\n#L500#ʹ��8��#v4031549#����1Ԫ��\r\n#L510#ʹ��8��#v4031344#����980������\r\n#L520#ʹ��15��#v4031549#����2Ԫ��\r\n#L530#ʹ��15��#v4031344#����2000������\r\n#L540#ʹ��28��#v4031549#����3Ԫ��\r\n#L550#ʹ��28��#v4031344#����4000������");

}else if (selection == 4) {
cm.sendOk("#r"+cm.mxdmz()+"ð�յ�#k,��ɫ����.\r\n#d[��ɫһ]#kת����һ����������ȡ����\r\n#d[��ɫ��]#k���������ƹ����ƹ����Ƕ�ֵ��������\r\n#d[��ɫ��]#k�����޸���飬��ʵ��飬������\r\n#d[��ɫ��]#kװ��ǿ��ϵͳ,�����ḻ��������ǿ��\r\n#d[��ɫ��]#k���Ӹ����Դ��������ٷ�����Ʒ�����Բ�����������\r\n#d[��ɫ��]#k��������������ң����飬�̼�\r\n#d[��ɫ��]#k��ս����BOSS��#r#z4031549##k��#r#z4031344##k�ɵ������Ф����������һ�Ԫ����������\r\n#d[��ɫ��]#k����������ḻ,�߲�GMñ(ȫ��+2000)���ſ�������  ���������Լ������µ�װ\r\n#d[��ɫ��]#k�·����������ﱾ���ἰʱ���£����ھ��л\r\n#b�����������ϾŴ���ɫ�����Կ��ܣ���������ǰ�~~#k");
cm.dispose();

}else if (selection == 5) {
cm.sendOk("#r"+cm.mxdmz()+"ð�յ�#k,װ������.\r\n#d����װ��#k��1-70ת�������ս�����󹫸����ɻ�ô�������Ԥ�������������������,�ʺϳ��������ս\r\n#d糺�װ��#k����ս糺�Boss�м��ʱ���糺�װ��,�ʺ��н���Ҥ�����������ս\r\n#d����װ��#k������VIP�ɻ�ȡ�������,�ռ����������ɺϳ������������������,��ս糺�Boss�ռ�֤���ɶһ�����,�ҷ϶��Ĥ������������忪�������м��ʻ��,�μӳ齱Ҳ�ɻ���������������װ��,��սPB�ɻ������,�ʺϸ߽������ս\r\n#dԪ������#k��#b<<Ԫ��>>#k��ͨ����ֵ���,��ͨ����սBoss,��õ���������������Ʒ������Ԫ��,��ͨ���Ĳ����Ԫ��\r\n����������#b<<����>>#k���ͨ����Ԫ��������,���߹һ��ɻ������������,��ͨ����սBoss,��õ�����Ʒ������������,����������Ŀǰ�в�֧��������Ĳ�,�����ϸ�ĵȴ�");
cm.dispose();


}else if (selection == 6) {
cm.sendOk("��ӭ����#r"+cm.mxdmz()+"ð�յ�,���ֹ���.\r\n#k1.ת����һ���ܺõ�ѡ��,ת��Ľ����ǳ��ḻ,����ת��������� #r70#k �� #r80#k ��ʱ���ɻ�� #r20#k Ԫ��,��ȥ�򼸸�Boss�ú������ȡԪ������ #r30#k Ԫ���Ϳ�������Ϊǿ��� #dVIP2#k ���.\r\n\r\n2.�ǵ�ÿ������8�����μ� #r����̻#k ,�������ɾͿ��Ի��������.�������ô����Ժ�Ԫ��ƥ��Ŷ.\r\n\r\n3.���ø߼���Ʒװ������ҿ���ͨ�� #r����#k , #r����Boss#k , #r�ش�����#k �ȵ�,  #r�齱�Ĳ�#k Ҳ��������ҵĽݾ�֮·.��Ȼÿ��GMҲ���½��Ϸ,���˵����Ҳ���ü�Ʒ����,������δ�ϼܵ� #r���� #k .");
cm.dispose();


}else if (selection == 7) {
cm.sendSimple("#r5Ԫð�յ�#k,������ʹ�÷�Ҷ�һ�ʥ����Ʊ����,��Ҷ��Ҫ���;��,�κι��ﶼ�б�.\r\n#L43##b����Ҫʹ��1000����Ҷ�һ�[#r��������#b]��#l\r\n#L44##b����Ҫʹ��2000����Ҷ�һ�[#rľ����Ʊ#b]#l");

}else if (selection == 3) {
cm.sendOk("#r5Ԫð�յ�#k,�����.\r\n#d����7��-12����#k����ҿɲμ������.\r\n#d����1��-7 ����#k����ҿ���ս����BOSS�򸱱�.\r\n#d����8��-10����#k������Ա�����ѡȡʱ�����߾ٰ���ɫ��������������������������������벻����");
cm.dispose();
}

}else if (selection == 10) {
if (cm.getChar().getRw15() >= 800) {
cm.gainItem(4002002,1);
cm.gainrw15(-800);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 11) {
if (cm.getChar().getRw15() >= 4000) {
cm.gainItem(4002002,5);
cm.gainrw15(-4000);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 12) {
if (cm.getChar().getRw15() >= 100) {
cm.gainItem(4031454,1);
cm.gainrw15(-100);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 13) {
if (cm.getChar().getRw15() >= 500) {
cm.gainItem(4031454,5);
cm.gainrw15(-500);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 14) {
if (cm.getChar().getRw15() >= 200) {
cm.gainNX(10000);
cm.gainrw15(-200);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 15) {
if (cm.getChar().getRw15() >= 800) {
cm.gainNX(10000);
cm.gainrw15(-800);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 16) {
if (cm.getChar().getRw15() >= 1500) {
cm.gainNX(200000);
cm.gainrw15(-1500);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 17) {
if (cm.getChar().getRw15() >= 3000) {
cm.gainNX(500000);
cm.gainrw15(-3000);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 18) {
if (cm.getChar().getRw15() >= 1000) {
cm.gainItem(1142003,1);
cm.gainrw15(-1000);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 19) {
if (cm.getChar().getRw15() >= 2400) {
cm.gainItem(1142007,1);
cm.gainrw15(-2400);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 20) {
if (cm.getChar().getRw15() >= 6000) {
cm.gainItem(1142008,1);
cm.gainrw15(-6000);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 21) {
if (cm.getChar().getRw15() >= 10000) {
cm.gainItem(1142014,1);
cm.gainrw15(-10000);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 22) {
if (cm.getChar().getRw15() >= 10000) {
cm.gainItem(1142141,1);
cm.gainrw15(-10000);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 23) {
if (cm.getChar().getRw15() >= 20000) {
cm.gainItem(1142078,1);
cm.gainrw15(-20000);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 24) {
if (cm.getChar().getRw15() >= 50000) {
cm.gainItem(1142077,1);
cm.gainrw15(-50000);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 25) {
if (cm.getChar().getRw15() >= 100000) {
cm.gainItem(1142080,1);
cm.gainrw15(-100000);
cm.sendOk("#b�ɹ���");
cm.dispose();
} else {
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}






}else if (selection == 26) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 1600) {
cm.gainrw15(-1600);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
}else{
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 27) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 7200) {
cm.gainrw15(-7200);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setUpgradeSlots((item.getUpgradeSlots() + 5));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
}else{
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 28) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("���װ�������������㣬���ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 30000) {
cm.gainrw15(-30000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setWatk(item.getWatk() + 100);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
}else{
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

}else if (selection == 29) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("���װ�������������㣬���ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 292000) {
cm.gainrw15(-292000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setWatk(item.getWatk() + 1000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
}else{
cm.sendOk("#b��Ǹ����û�㹻�������㣡.");
cm.dispose();
}




}else if (selection == 30) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b��û���㹻�����Ե�."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002894,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose(); 
} 

}else if (selection == 31) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b��û���㹻�����Ե�."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002895,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose(); 
} 

}else if (selection == 32) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b��û���㹻�����Ե�."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002896,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose(); 
}

}else if (selection == 33) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b��û���㹻�����Ե�."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002897,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose(); 
}

}else if (selection == 34) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b��û���㹻�����Ե�."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002898,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose(); 
}

}else if (selection == 35) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b��û���㹻�����Ե�."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002899,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose(); 
}

}else if (selection == 36) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b��û���㹻�����Ե�."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002900,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose(); 
}

}else if (selection == 37) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b��û���㹻�����Ե�."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002901,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose(); 
}

}else if (selection == 38) { 
if (cm.getChar().getRemainingAp() < 3000) { 
cm.sendOk("#b��û���㹻�����Ե�."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - 3000); 
cm.gainItem(1002902,1); 
var statup = new java.util.ArrayList(); 
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
}


}else if(selection == 39){
if(cm.haveItem(4001126, 200)) {
cm.sendOk("#b�һ��ɹ���")
cm.gainItem(4001126,-200);
cm.gainNX(500);
cm.modifyNX(500, 0);
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��200��#v4001126#��")
cm.dispose();    
}

}else if(selection == 40){
if(cm.haveItem(4001126, 500)) {
cm.sendOk("#b�һ��ɹ���")
cm.gainItem(4001126,-500);
cm.gainNX(1000);
cm.modifyNX(1000, 0);
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��500��#v4001126#��")
cm.dispose();    
}

}else if(selection == 41){
if(cm.haveItem(4001126, 1000)) {
cm.sendOk("#b�һ��ɹ���")
cm.gainItem(4001126,-1000);
cm.gainNX(2000);
cm.modifyNX(2000, 0);
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��1000��#v4001126#��")
cm.dispose();    
}


}else if(selection == 45){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("���װ�������������㣬���ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 8000) {
cm.gainrw15(-8000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 2000);
item.setDex(item.getDex() + 2000);
item.setInt(item.getInt() + 2000);
item.setLuk(item.getLuk() + 2000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û���㹻��������~")
cm.dispose();    
}


}else if(selection == 46){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("���װ�������������㣬���ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 30000) {
cm.gainrw15(-30000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 5000);
item.setDex(item.getDex() + 5000);
item.setInt(item.getInt() + 5000);
item.setLuk(item.getLuk() + 5000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û���㹻��������~")
cm.dispose();   
}


}else if(selection == 47){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("���װ�������������㣬���ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 60000) {
cm.gainrw15(-60000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 10000);
item.setDex(item.getDex() + 10000);
item.setInt(item.getInt() + 10000);
item.setLuk(item.getLuk() + 10000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û���㹻��������~")
cm.dispose();     
}


}else if(selection == 48){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("���װ�������������㣬���ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 170000) {
cm.gainrw15(-170000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 30000);
item.setDex(item.getDex() + 30000);
item.setInt(item.getInt() + 30000);
item.setLuk(item.getLuk() + 30000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û���㹻��������~")
cm.dispose();    
}

}else if(selection == 49){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("���װ�������������㣬���ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 8000) {
cm.gainrw15(-8000);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 1000);
item.setDex(item.getDex() + 1000);
item.setInt(item.getInt() + 1000);
item.setLuk(item.getLuk() + 1000);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û���㹻��������~")
cm.dispose();    
}

}else if(selection == 50){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("���װ�������������㣬���ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 4200) {
cm.gainrw15(-4200);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 500);
item.setDex(item.getDex() + 500);
item.setInt(item.getInt() + 500);
item.setLuk(item.getLuk() + 500);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û���㹻��������~")
cm.dispose();    
}

}else if(selection == 51){
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==null){
cm.sendOk("���װ������һ��û��װ�������ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()<= 0){
cm.sendOk("���װ�������������㣬���ܽ��д˲���!..");
cm.dispose();
return;
}
if (cm.getChar().getRw15() >= 900) {
cm.gainrw15(-900);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setStr(item.getStr() + 100);
item.setDex(item.getDex() + 100);
item.setInt(item.getInt() + 100);
item.setLuk(item.getLuk() + 100);
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û���㹻��������~")
cm.dispose();    
}




}else if(selection == 42){
if(cm.haveItem(4001126, 5000)) {
cm.sendOk("#b�һ��ɹ���")
cm.gainItem(4001126,-5000);
cm.gainNX(10000);
cm.modifyNX(10000, 0);
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��5000��#v4001126#��")
cm.dispose();    
}

}else if(selection == 43){
if(cm.haveItem(4001126, 1000)) {
cm.sendOk("#b�һ��ɹ���")
cm.gainItem(4001126,-1000);
cm.gainItem(4031454, 1); 
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��1000��#v4001126#��")
cm.dispose();    
}

}else if(selection == 44){
if(cm.haveItem(4001126, 2000)) {
cm.sendOk("#b�һ��ɹ���")
cm.gainItem(4001126,-2000);
cm.gainItem(4002002, 1); 
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��2000��#v4001126#��")
cm.dispose();    
}

}else if(selection == 500){
if(cm.haveItem(4031549, 8)) {
cm.sendOk("#b�һ��ɹ���\r\n#bʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��")
cm.gainItem(4031549,-8);
cm.setzb(1); 
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��8��#v4031549#��")
cm.dispose();    
}

}else if(selection == 510){
if(cm.haveItem(4031344, 8)) {
cm.sendOk("#b�һ��ɹ���#b����:#r" + cm.getChar().getRw15() + "#k#b ��")
cm.gainItem(4031344,-8);
cm.gainrw15(980); 
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��8��#v4031344#��")
cm.dispose();    
}

}else if(selection == 520){
if(cm.haveItem(4031549, 15)) {
cm.sendOk("#b�һ��ɹ���\r\n#bʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��")
cm.gainItem(4031549,-15);
cm.setzb(2); 
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��15��#v4031549#��")
cm.dispose();    
}

}else if(selection == 530){
if(cm.haveItem(4031344, 15)) {
cm.sendOk("#b�һ��ɹ���#b����:#r" + cm.getChar().getRw15() + "#k#b ��")
cm.gainItem(4031344,-15);
cm.gainrw15(2000); 
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��15��#v4031344#��")
cm.dispose();    
}

}else if(selection == 540){
if(cm.haveItem(4031549, 28)) {
cm.sendOk("#b�һ��ɹ���\r\n#bʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��")
cm.gainItem(4031549,-28);
cm.setzb(3); 
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��28��#v4031549#��")
cm.dispose();    
}

}else if(selection == 550){
if(cm.haveItem(4031344, 28)) {
cm.sendOk("#b�һ��ɹ���#b����:#r" + cm.getChar().getRw15() + "#k#b ��")
cm.gainItem(4031344,-28);
cm.gainrw15(4000); 
cm.dispose();
} else {
cm.sendOk("#b�Բ���,��û��28��#v4031344#��")
cm.dispose();    
}

















}
}
}