/*�� ������.��Ҫ�ű�����,����ϵQQ��237253995.*/

importPackage(net.sf.odinms.client);

var status;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
		return;
	} else {
		if (mode == 1)
			status++; 
		else
			status--;
		if (status == 0) {
		if (cm.getPlayer().getMapId() == 541010010){
var text = "No1.������Ӧ����������������ط�.ȥ��!\r\n#L0#������һ��#l\r\n\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��";
cm.sendSimple(text);
}else if (cm.getPlayer().getMapId() == 541010040){
var text = "No2.������,�������Ĺ���!!\r\n#L1#������һ��#l\r\n\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��";
cm.sendSimple(text);
}else if (cm.getPlayer().getMapId() == 541010050){
var text = "��������,��Ӧ���д��BOSS�Ŀ���!\r\n#L2#������һ��#l\r\n\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��";
cm.sendSimple(text);
}else if (cm.getPlayer().getMapId() == 541010100){
var text = "�ܸ���������������,�������BOSS�����ܽ��뽱����.��ʹ��#v4001117#�ٻ�Boss.\r\n#b#L3#�ٻ����鴬��#l\r\n\r\n#k����BOSS��,ѡ�����ȡ��BOSS�������Ʒ,���н���.#b\r\n#L4##v4001035#��ħ��ʶ#l\r\n\r\n#L7#���������г�#l";
cm.sendSimple(text);
}else {//vip1����
var text = "��Ը��������������Ĺ���.�ҵ���";
cm.sendOk(text);
cm.dispose();
}
		}
		else if(status == 1) {
			if (selection == 0) {
if (cm.getHour() < 16) {

cm.warp(910000000,0);
cm.sendOk("�����ʱ��,�����ж�,�㽫������.\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();
}else if (cm.haveItem(4000379,200)) {
cm.gainItem(4000379,-200);
cm.gainItem(4031344,1);
cm.warp(541010040,0);
cm.sendOk("��Ը���ܼ������.���ռ�300��#v4000382#.#r��Ȼ,�벻Ҫ����#k.��ע��ʱ��!!!����22��,������Ϊ����.!");
cm.dispose();

}else {	
cm.sendOk("��Ը���ܴ�����鴬��,����չ�������ʵ����~�ռ�200��#v4000379#.��ע��ʱ��!!!����22��,������Ϊ����.!");
cm.dispose();
}

//
}else if (selection == 1) {
if (cm.getHour() < 16) {
cm.sendOk("�����ʱ��,�����ж�,�㽫������.\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.warp(910000000,0);
cm.dispose();
}else if (cm.haveItem(4000382,300)) {
cm.gainItem(4000382,-300);cm.gainItem(4031344,1);
cm.warp(541010050,0);
cm.sendOk("��Ը���ܼ������.��������,��һ���ҽ�����ȥ��ս#b����#k!~���ռ��ռ�500��#v4000383#���ұ���.");
cm.dispose();

}else {	
cm.sendOk("��Ը���ܴ�����鴬��,����չ�������ʵ����~�ռ�300��#v4000382#.��ע��ʱ��!!!����22��,������Ϊ����.!");
cm.dispose();
}

}else if (selection == 2) {
if (cm.getHour() < 16) {
cm.sendOk("�����ʱ��,�����ж�,�㽫������.\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.warp(910000000,0);
cm.dispose();
}else if (cm.haveItem(4000383,500)) {
cm.gainItem(4000383,-500);cm.gainItem(4031344,1);
 cm.gainItem(4001117,1); 
cm.warp(541010100,0);
cm.sendOk("��Ը���ܴ����~");
cm.dispose();
}else {	
cm.sendOk("��Ը���ܴ�����鴬��,����չ�������ʵ����~�ռ�500��#v4000383#.��ע��ʱ��!!!����22��,������Ϊ����.!");
cm.dispose();
}



}else if (selection == 3) {
  var map =cm.getChar().getMap();
    if(map.countMobOnMap() >= 1){
cm.sendOk("�����ͼ�����е�#b����#k���ܽ����ٴ��ٻ�.!");
cm.dispose();
}else if (!cm.haveItem(4001117,1)) {
cm.sendOk("��ò���Ѿ��ٻ����˰�?");
cm.dispose();
}else {
  cm.summonMob(9420513, 800000000, 10000, 1);//����5EѪ
 cm.gainItem(4001117,-1);
cm.serverNotice("[����]: ��� [" + cm.getPlayer() + "] �ɹ��ٻ��˴���,���ܷ��ܴ���,��ý�����?");

cm.dispose();


}
}else if (selection == 4) {

            cm.serverNotice(" ���:" + cm.c.getPlayer().getName() + " ��ܴ�����,��������Ķ�ħ��ʶ!");
cm.warp(910000000,0);
cm.sendOk("��ħ��ʶ���Կ�����һ�׶ε�·��,����������,��ʿ.");
            cm.dispose(); 

}else if (selection == 5) {
 var party = cm.getPlayer().getParty();
            if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("���㿪��һ������,��֤��һ���������������.");
   cm.dispose(); 
    }else  if (!cm.haveItem(3994034,1)) {
cm.sendOk("������ѡ����������ؿ�.!");
cm.dispose();
 }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() > 6){  
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("wgquestitemdrop2");  
                if (em == null) { 
                    cm.sendOk("�ű�����,����ϵGM."); 
                } else {  
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers(); 
                } 
            cm.serverNotice(" ���:" + cm.c.getPlayer().getName() + " ��ܴ�����,��ʼ�����ֽ����ؿ�!");
cm.gainItem(3994034,-1);
            cm.dispose(); 
} 
}
}else if (selection == 6)  {
 var party = cm.getPlayer().getParty();
            if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("���㿪��һ������,��֤��һ���������������.");
   cm.dispose(); 
    }else  if (!cm.haveItem(3994027,1)) {
cm.sendOk("������ѡ����������ؿ�.!");
cm.dispose();
 }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() > 6){  
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("wgquestitemdrop3");  
                if (em == null) { 
                    cm.sendOk("�ű�����,����ϵGM."); 
                } else {  
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers(); 
                } 
            cm.serverNotice(" ���:" + cm.c.getPlayer().getName() + " ��ܴ�����,��ʼ�����ֽ����ؿ�!");
cm.gainItem(3994027,-1);
            cm.dispose(); 
} 
}
}else if (selection == 7) {
cm.warp(910000000,0);

            cm.dispose(); 

}}}}