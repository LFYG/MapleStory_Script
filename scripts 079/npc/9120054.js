importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//����!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա
function start() {
	if (cm.getChar().getMapId() == 803001200 && cm.haveItem(4001126) >= 1){
	    if(cm.countMonster()>10){
		 cm.sendSimple ("��������ս��BOSS��Ŀ����,���Ȱ��������������ٻ�.������������ս,�ҿ��԰����ͻ��г�! \r\n \r\n    #L8##r�ص��г�#l");
	    }else{
   		 cm.sendSimple ("#b\r\n"+cm.mxdmz()+"ð�յ���糺츱��.\r\n#bÿ�ٻ�һ��BOSS#r[��Ҫ80����Ҷ]#b 糺�BOSS��������Ʒ��#d\r\n#z1382060# #z1442068# #z1452060# #z1432056# #z1102207# \r\n#z1102206# #z4031861# #z4031549# #z4001035##b\r\n\r\n#L0#��ս��ħ��#l  #L1#��սѪ�潫��#l  #L2#��ս��������#l\r\n#L6#��ս��֮ħŮ#l#L7#��ս��Ӱɱ��#l\r\n\r\n#L3#�һ�ͨ��֤#l  #L4#ȥͨ���콱#l    #L5##r�鿴��������#l      #L8##r�ص��г�#l");
	    }
	} else {
	    cm.sendOk("û���㹻�ķ�Ҷ����ħ��!")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
       if(cm.haveItem(4001126) >= 1) {
        cm.gainItem(4001126,-80);
        cm.summonMob(9400592, 800000000, 100000, 1);//��ħ��     
cm.serverNotice("��糺���ʿ�Ź��桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս糺���ʿ���ռ�BOSS����ħ�ˡ���"); 
        }else{
        cm.sendOk("��Ǹ��û��80����Ҷ���Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 1) {
       if(cm.haveItem(4001126) >= 1) {
        cm.gainItem(4001126,-80);
cm.serverNotice("��糺���ʿ�Ź��桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս糺���ʿ���ռ�BOSS��Ѫ�潫�� ����");  
        cm.summonMob(9400591, 800000000, 100000, 1);//Ѫ�潫��     
        }else{
        cm.sendOk("��Ǹ��û��80����Ҷ���Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 2) {
       if(cm.haveItem(4001126) >= 1) {
        cm.gainItem(4001126,-80);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս糺���ʿ���ռ�BOSS����������  ����"); 
        cm.summonMob(9400589, 800000000, 100000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��80����Ҷ���Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 3) { 
        if (!cm.haveItem(4001009,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001009#�޷�Ϊ�㿪��");
        } else if (!cm.haveItem(4001010,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001010#�޷�Ϊ�㿪��"); 
        } else if (!cm.haveItem(4001011,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001011#�޷�Ϊ�㿪��"); 
        } else if (!cm.haveItem(4001012,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001012#�޷�Ϊ�㿪��"); 
        } else if (!cm.haveItem(4001013,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001013#�޷�Ϊ�㿪��"); 
        }else{
	cm.gainItem(4001009,-1);
	cm.gainItem(4001010,-1);
	cm.gainItem(4001011,-1);
	cm.gainItem(4001012,-1);
	cm.gainItem(4001013,-1);
	cm.gainItem(4021010,1);
	cm.dispose();
}
} else if (selection == 4) {
        if (!cm.haveItem(4021010,1)) {
        cm.sendOk("��Ǹ����û��#v4021010#�޷�Ϊ�㿪��");
cm.dispose();
    } else {
cm.warp(803001400, 0);
cm.dispose();
}
}else if (selection == 8) {
    cm.warp(910000000, 0);
    cm.dispose();
}else if (selection == 5) {
cm.sendOk("���������������е�BOSS����ÿһ��BOSS���ᱬ��һ��ƾ֤#r��ƾ֤����90%��#k���ռ�5��ƾ֤�����������Ҷһ�ͨ��֤����Ȼ���ڵ��ң��ҽ������Ǵ��͵��콱��ͼ��\r\n#d[�� ħ ��]��#rѪ��:#d�������������������� [8E]\r\n#r            ����:#d����������\r\n[Ѫ�潫��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[��������]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[��֮ħŮ]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������\r\n[��Ӱɱ��]��#rѪ��:#d�������������������� \r\n#r            ����:#d����������");      
cm.dispose();
} else if (selection == 6) {
       if(cm.haveItem(4001126) >= 1) {
        cm.gainItem(4001126,-80);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս糺���ʿ���ռ�BOSS����֮ħŮ  ����"); 
        cm.summonMob(9400590, 800000000, 100000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��80����Ҷ���Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 7) {
       if(cm.haveItem(4001126) >= 1) {
        cm.gainItem(4001126,-80);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս糺���ʿ���ռ�BOSS����Ӱɱ��  ����"); 
        cm.summonMob(9400593, 800000000, 100000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��80����Ҷ���Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 8) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("��Ǹ��û��5000���Ҳ���Ϊ���ٻ�"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400300, 100000000, 175000000, 1);//��ɮ
	cm.dispose(); } 
} else if (selection == 9) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("��Ǹ��û��5000���Ҳ���Ϊ���ٻ�"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400549, 1, 200300000, 1);//����
	cm.dispose(); } 
} 
}