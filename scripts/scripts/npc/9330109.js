var status = 0;
var mh ="#fEffect/CharacterEff/1112908/0/1#";
var pass;
var choice;
var fish;
//���ѷ���
var fishid = Array("4031627","4031628","4031630","4031631","4031633","4031634","4031635","4031636","4031637","4031638","4031639","4031640","4031641","4031642","4031643","4031644","4031645","4031646","4031647");
var fishcl = Array("2","2","2","2","2","2","2","2","2","2","2","2","2","4","4","4","6","6","6","7");
//ѫ�¶һ�
var xunzhangid = Array("1142610","1142146","1142513","1112907");
var weizhiyusl = Array("70","30","50","99");
//������ĸ�׶һ�����
var yiziid  = Array("3010956","3010957","3010958","3010959","3010960","3010961","3010962","2432637");
var taozusl = Array("1","1","1","1","1","1","1","2");
var quest1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getBossLog("��������1") == 0) {
	quest1 = "#L1##r��#e����һ#n��#k#b�ռ�СС��~#k#v4001200#           #b��#k#eδ���#n#b��#k#l";
	} else {
	quest1 = " #r��#e����һ#n��#k#b�ռ�СС��~#k#v4001200#           #b��#k#g#e�����#n#k#b��#k";
	}
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#b#h ##k#k��ã�����#r���㳡��ʦ#k�������ѡ�����¹��ܣ�\r\n\r\n";
            selStr +="#e#d#L0#"+ mh +" ����ʱ�������#n#k#l#v1432039# ";		
			selStr +="#e#r#L1#"+ mh +" ÿ�յ�������#n#k#l#v4001200#\r\n\r\n";
			selStr +="#e#b#L4#"+ mh +" ��������#n#k#l#v2431055#     ";
			selStr +="#e#g#L2#"+ mh +" �һ�����ѫ��#n#k#l#v2431004#\r\n\r\n";
			selStr +="#e#b#L3#"+ mh +" �һ�ϡ���������#n#k#l#v3994641##v3994642##v3994643##v3994644##v3994645#\r\n";
		cm.sendSimple(selStr);
        } else if (status == 1) { 
       if (selection == 0) {
	   if (cm.getEventCount("ÿ�����") > 0) {
	        cm.sendOk("#r#e��ȡ������#n#k��������Сʱ #e#b10#k#n Сʱ\r\n\r\n#b#e��ý�����#n#k #v1432039#��1��Ȩ�� x #e#d1#k#n       #e#r��δ��ȡ��#k#n");
	        cm.dispose();
		} else {
            cm.sendSimple("#r#e��ȡ������#n#k��������Сʱ #e#b10#k#n Сʱ\r\n\r\n#b#e��ý�����#n#k #v1432039#��1��Ȩ�� x #e#d1#k#n       #e#b��δ��ȡ��#k#n");
			pass = 0;
		}
} else if (selection == 1) { 
        var peper  ="���ã�������#b#e�������񷢲�����#k#n������������鿴����\r\n\r\n";
		    peper +=""+ quest1 +"";
            cm.sendSimple(peper);
			pass = 1;
} else if (selection == 2) { 
            choices  ="���ã�������#b#e�����㷷���г�#k#n��������ѡ����������ࣺ\r\n\r\n";
		for (var i = 0; i < xunzhangid.length; i++) {
		    choices +="#L" + i + "##v" + xunzhangid[i] + "##z" + xunzhangid[i] + "#��#d���� #v2431004# x #r" + weizhiyusl[i] + "#k#l\r\n";
		}
            cm.sendSimple(choices);
			pass = 2;
} else if (selection == 3) { 
            choices  ="���ã�������#b#e������ӽ�������#k#n��������ѡ������ĵ��ߣ�\r\n\r\n";
			choices +="             #v3994641##v3994642##v3994643##v3994644##v3994645#\r\n";
		for (var i = 0; i < yiziid.length; i++) {
		    choices +="#L" + i + "##v" + yiziid[i] + "##z" + yiziid[i] + "#��#d���� #b#e������ĸ����#n#d x #r" + taozusl[i] + "#k#l\r\n";
		}
            cm.sendSimple(choices);
			pass = 3;
} else if (selection == 4) { 
            choices  ="���ã�������#b#e�����˹���������#k#n��������ѡ����������ࣺ\r\n\r\n";
		for (var i = 0; i < fishid.length; i++) {
		    choices +="#L" + i + "##v" + fishid[i] + "##z" + fishid[i] + "#��#d��Ҫ #v2431055# x #r" + fishcl[i] + "#k#l\r\n";
		}
            cm.sendSimple(choices);
			pass = 4;
		}
        } else if (status == 2) {
	   if (pass == 0) {
	   var sj = 600 - cm.getGamePoints();
	   if (cm.getGamePoints() >= 600 ){
	        cm.gainItem(1432039,1,1);
			cm.setEventCount("ÿ�����");
	        cm.playerMessage(1,"��ȡ�ɹ�");
			cm.dispose();
		} else {
		    cm.playerMessage(1,"����ʱ�䲻�㣬���� "+ sj +" ����");
			cm.dispose();
		}
} else if (pass == 1) {
       if (selection == 1) {
	   cm.sendSimple("#r#e����Ŀ�ģ�#n#k���� #v4001200#  x #e#b30#k#n ��\r\n\r\n#b#e��������#n#k #v2340000# x #e#d1#k#n �� #v5062010# x #e#d3#k#n �� ���� x #e#d8#k#n ��");
	   fish = 1;
	   }
} else if (pass == 2) {
       cm.sendYesNo("��ѡ�񻻹�����Ʒ��#v" + xunzhangid[selection] + "#����Ҫ�� #v2431004# Ϊ��" + weizhiyusl[selection] + " ��\r\nȷ��Ҫ�һ���");
	   choice = selection;
	   pass = 12;
} else if (pass == 3) {
       cm.sendYesNo("��ѡ�����ƷΪ��#v" + yiziid[selection] + "#����Ҫ�� #b#e������ĸ����#n#k Ϊ��" + taozusl[selection] + " ��\r\nȷ��Ҫ�һ���");
	   choice = selection;
	   pass = 13;
} else if (pass == 4) {
       cm.sendGetText("��ѡ��Ҫ����������Ϊ��#v" + fishid[selection] + "#����Ҫ�� #v2431055# Ϊ��" + fishcl[selection] + " ��\r\n���������������������");
	   choice = selection;
	   pass = 14;
       }
       } else if (status == 3) {
	   if (fish == 1) {
	   if (cm.haveItem(4001200,30)){
	        cm.gainItem(4001200,-30);
	        cm.gainItem(2340000,1);
			cm.gainItem(5062010,3);
			cm.gainFame(8,true);//����
			cm.getChar().updateFame();
			cm.setBossLog("��������1");
			cm.playerMessage(1,"�������");
			cm.dispose();
	   } else {
	        cm.playerMessage(1,"С����������");
			cm.dispose();
	   }
} else if (pass == 12) {
       if (cm.haveItem(2431004,weizhiyusl[choice])){
	        cm.gainItem(2431004,- weizhiyusl[choice]);
	        cm.gainItem(xunzhangid[choice], 1);
			cm.playerMessage(1,"�����ɹ�");
			cm.dispose();
	   } else {
	        cm.playerMessage(1,"δ֪����������");
			cm.dispose();
	   }
} else if (pass == 13) {
       if (cm.haveItem(3994641,taozusl[choice]) && cm.haveItem(3994642,taozusl[choice]) && cm.haveItem(3994643,taozusl[choice]) && cm.haveItem(3994644,taozusl[choice]) && cm.haveItem(3994645,taozusl[choice])){
	        cm.gainItem(3994641,- taozusl[choice]);
			cm.gainItem(3994642,- taozusl[choice]);
			cm.gainItem(3994643,- taozusl[choice]);
			cm.gainItem(3994644,- taozusl[choice]);
			cm.gainItem(3994645,- taozusl[choice]);
	        cm.gainItem(yiziid[choice], 1);
			cm.playerMessage(1,"�һ��ɹ�");
			cm.dispose();
	   } else {
	        cm.playerMessage(1,"������ĸ������������");
			cm.dispose();
	   }
} else if (pass == 14) {
       fee = cm.getText();
	   money = fee * fishcl[choice];
	   if (fee > 0 && fee != null) {
	   if (cm.haveItem(2431055,money)){
	        cm.gainItem(2431055,- money);
	        cm.gainItem(fishid[choice], fee);
			cm.playerMessage(1,"�����ɹ�");
			cm.dispose();
	   } else {
	        cm.playerMessage(1,"������������");
			cm.dispose();
	   }
	   } else {
	        cm.playerMessage(1,"����Ƿ�");
			cm.dispose();
	   }
	}
  }
}
