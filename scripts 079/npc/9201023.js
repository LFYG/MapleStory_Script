importPackage(net.sf.odinms.client);
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
var textz = "#r"+cm.mxdmz()+"ð�յ�#k,����ϵͳ.\r\n   #b��ǰת������:#r" + cm.getChar().getReborns() + "#k#b ��\r\n";

textz += "#b#L1#"+ttt3+"  ���� >>>> #r[180������]             "+ttt3+"#l\r\n";

textz += "#b#L100#"+ttt3+"  תְ >>>> #r[10 ������]             "+ttt3+"#l\r\n";

textz += "#b#L2#"+ttt3+"  ��ȡ >>>> ��������"+ttt4+"              "+ttt3+"#l\r\n";

textz += "#b#L99#"+ttt3+"  �鿴 >>>> ��������"+ttt4+"              "+ttt3+"#l\r\n";

textz += "#L3##b"+ttt3+"  �ؼ� >>>> ���Ե���                "+ttt3+"#l\r\n";

textz += "#L4##b"+ttt3+"  ת�� >>>> ����[��ѡְҵ]          "+ttt3+"#l\r\n";

cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();


if(selection == 1){
cm.openNpc(1002006);

}else if(selection == 2){
cm.openNpc(9100000);

//cm.sendSimple("��ӭ��������5Ԫð�յ�,Ҳ�����Ѿ��ﵽҪ����,����ǵ���ô��������Ľ���,����Խ��,����Խ����.#k\r\n   #b��ǰת������:#r" + cm.getChar().getReborns() + "#k#b ��\r\n#L30#"+ttt+"#b���Ѿ�����[#r10ת#b],��Ҫ��ȡ[#r10����#b]#l\r\n#L31#"+ttt+"#b���Ѿ�����[#r20ת#b],��Ҫ��ȡ[#r+50����ͷ��#b]#l\r\n#L32#"+ttt+"#b���Ѿ�����[#r30ת#b],��Ҫ��ȡ[#r+50��������#b]#l\r\n#L33#"+ttt+"#b���Ѿ�����[#r40ת#b],��Ҫ��ȡ[#r����һ���#b]#l\r\n#L34#"+ttt+"#b���Ѿ�����[#r50ת#b],��Ҫ��ȡ[#rף������10��#b]#l\r\n#L35#"+ttt+"#b���Ѿ�����[#r60ת#b],��Ҫ��ȡ[#r+50ѫ��һö#b]#l\r\n#L36#"+ttt+"#b���Ѿ�����[#r70ת#b],��Ҫ��ȡ[#r10��Ԫ��#b]#l\r\n#L37#"+ttt+"#b���Ѿ�����[#r80ת#b],��Ҫ��ȡ[#r10��Ԫ��#b]#l\r\n#L38#"+ttt+"#b���Ѿ�����[#r100ת#b],��Ҫ��ȡ[#r+100������ñ#b]#l\r\n#L39#"+ttt+"#b���Ѿ�����[#r200ת#b],��Ҫ��ȡ[#r+200�İ�ʨñ#b]#l\r\n#L40#"+ttt+"#b���Ѿ�����[#r300ת#b],��Ҫ��ȡ[#r100%�س�10��#b]#l\r\n#L41#"+ttt+"#b���Ѿ�����[#r500ת#b],��Ҫ��ȡ[#r+300����һ��#b]#l\r\n#L42#"+ttt+"#b���Ѿ�����[#r600ת#b],��Ҫ��ȡ[#r+400����һ��#b]#l\r\n#L43#"+ttt+"#b���Ѿ�����[#r700ת#b],��Ҫ��ȡ[#r+500����һ��#b]#l\r\n#L44#"+ttt+"#b���Ѿ�����[#r888ת#b],��Ҫ��ȡ[#r+888����һ��#b]#l");

}else if(selection == 99){
cm.openNpc(9310073);

}else if(selection == 100){
cm.openNpc(9310057);


}else if(selection == 3){
var c ="��Ը���������������?\r\n#L19#"+ttt+" ����#r����#k#l\r\n#L20#"+ttt+" ����#r����#k#l\r\n#L21#"+ttt+" ����#r����#k#l\r\n#L22#"+ttt+" ����#r����#k#l\r\n#L23##k"+ttt+" ������������㵽#r����#k#l\r\n#L24#"+ttt+" ������������㵽#r����#k#l\r\n#L25#"+ttt+" ������������㵽#r����#k#l\r\n#L26#"+ttt+" ������������㵽#r����";
cm.sendSimple(c);

}else if(selection == 4){
cm.sendSimple("5Ԫð�յ�,����תְ.#k.\r\n   #b��ǰת������:#r" + cm.getChar().getReborns() + "#k#b ��\r\n#L5#"+ttt+"תְ��#b����#l#L6#"+ttt+" ������#l#L7#"+ttt+" սͯ[10������]#l");
}

}else if (selection == 5) {
if(cm.getChar().getLevel() > 10){ 
cm.sendOk("#b10��������Ҳ���ʹ��.."); 
cm.dispose(); 
}else {
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);//����
cm.dispose(); 
}

}else if (selection == 6) {
if(cm.getChar().getLevel() > 10){ 
cm.sendOk("#b10��������Ҳ���ʹ��.."); 
cm.dispose(); 
}else {
cm.changeJob(net.sf.odinms.client.MapleJob.KNIGHT);//������
cm.dispose(); 
}

}else if (selection == 7) {
if(cm.getChar().getLevel() > 10){ 
cm.sendOk("#b10��������Ҳ���ʹ��.."); 
cm.dispose(); 
}else {
cm.changeJob(net.sf.odinms.client.MapleJob.Ares);//սͯ 
cm.dispose(); 
}

//ϴ��

}else if (selection == 19) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getStr();
if (totAp < 30004) {
p.setStr(4);
p.setRemainingAp (totAp - 4);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õ�.��������Ѿ�������!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk("#b�Բ�������ʣ��AP����30004��������.");
cm.dispose();
}


}else if (selection == 20) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getDex();
if (totAp < 30004) {
p.setDex(4);
p.setRemainingAp (totAp - 4);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õ�.��������Ѿ�������!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("#b�Բ�������ʣ��AP����30004��������.");
cm.dispose();
}


}else if (selection == 21) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getInt();
if (totAp < 30004) {
p.setInt(4);
p.setRemainingAp (totAp - 4);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õģ���������Ѿ�����!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("#b�Բ�������ʣ��AP����30004��������.");
cm.dispose();
}


}else if (selection == 22) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getLuk();
if (totAp < 30004) {
p.setLuk(4);
p.setRemainingAp (totAp - 4);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õģ���������Ѿ�����!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("#b�Բ�������ʣ��AP����30004��������.");
cm.dispose();
}


}else if (selection == 23) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newStr = p.getRemainingAp() + p.getStr();
if (newStr < 30000) {
p.setStr(newStr);
p.setRemainingAp (0);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õģ���������Ѿ�����!");
cm.dispose();
} else if (newStr >= 30000) {
p.setStr(29999);
p.setRemainingAp (newStr - 29999);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õģ���������Ѿ�����!");
cm.dispose();
}


}else if (selection == 24) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newDex = p.getRemainingAp() + p.getDex();
if (newDex < 30000) {
p.setDex(newDex);
p.setRemainingAp (0);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õģ���������Ѿ�����!");
cm.dispose();
} else if (newDex >= 30000) {
p.setDex(29999);
p.setRemainingAp (newDex - 29999);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õģ���������Ѿ�����!");
cm.dispose();
}


}else if (selection == 25) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newInt = p.getRemainingAp() + p.getInt();
if (newInt < 30000) {
p.setInt(newInt);
p.setRemainingAp (0);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õģ���������Ѿ�����!");
cm.dispose();
} else if (newInt >= 30000) {
p.setInt(29999);
p.setRemainingAp (newInt - 29999);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õģ���������Ѿ�����!");
cm.dispose();
}


}else if (selection == 26) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newLuk = p.getRemainingAp() + p.getLuk();
if (newLuk < 30000) {
p.setLuk(newLuk);
p.setRemainingAp (0);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õģ���������Ѿ�����!");
cm.dispose();
} else if (newLuk >= 30000) {
p.setLuk(29999);
p.setRemainingAp (newLuk - 29999);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#b�õģ���������Ѿ�����!");
cm.dispose();
}





















}
}
}

