
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
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
	var lev = 200;
	switch (cm.getPlayer().getJob()){
	case 0:
	case 1100:
	case 1200:
	case 1300:
	case 1400:
	case 1500:
	case 1110:
	case 1210:
	case 1310:
	case 1410:
	case 1510:
	case 1111:
	case 1211:
	case 1311:
	case 1411:
	case 1511:
		lev = 180;
		break;
	}
	if (cm.getPlayer().getLevel()<lev){
		cm.sendOk("�Բ���ת����Ҫ��ɫ�ﵽ200������ʿ�ź�������Ҫ��ɫ�ﵽ180��");
		cm.dispose();
	} else {
		cm.sendYesNo("��ȷ��Ҫ����ת������Ҫһ��#v4031454##r" + ((getZScs(cm)>=400)?"\r\n����ת�������ﵽ��400������ת��Ҳ��������ת������":"") + "\r\nת�������ĵȼ���Ϊ��Ϊ1��");
	}
    } else if(status == 1) {
		if (cm.getSpace(4)<1){
			cm.sendOk("��������������1���ո�");
			cm.dispose();
			return;
		}
		if (cm.itemQuantity(4031454)<1){
			cm.sendOk("��Ҫһ��#v4031454#���ܽ���ת��");//ʥ��
			cm.dispose();
			return;
		}
		cm.gainItem(4031454,-1);//ɾ��1��ʥ��
		var z = getZScs(cm);//ת������
		var f = getFSdj(cm);//�����ȼ�
		if (getZScs(cm) < 400){
			if (cm.itemQuantity(4032515) >= 99) {//99�������Ƭ
				cm.gainItem(4032515,-99);//ɾ��99�������Ƭ
				cm.gainItem(4032516,1);//���һ���������
			} else {
				cm.gainItem(4032515,1);//���һ�������Ƭ
			}
			z++;//ת������+1
		}
		cm.getPlayer().changeJob(0);//����ְҵ
		cm.clearSkills();//ɾ������
      		cm.getPlayer().level = 2;//�ȼ�1
      		cm.getPlayer().exp = 0;//����ֵ0
		cm.getPlayer().getStat().setInfo(50,50,50,50);
		var ap = 0;
		switch (f){
		case 0:
			ap = z * 100;
			cm.resetStats(4,4,4,4);
			break;
		case 1:
			cm.resetStats(5000,5000,5000,5000);
			ap = z * 20;
			break;
		case 2:
			cm.resetStats(10000,10000,10000,10000);
			ap = z * 30;
			break;
		case 3:
			cm.resetStats(15000,15000,15000,15000);
			ap = z * 50;
			break;
		case 4:
			cm.resetStats(20000,20000,20000,20000);
			ap = z * 75;
			break;
		}
		cm.gainAp(ap-cm.getPlayer().getRemainingAp());
		cm.fakeRelog();//ˢ������
		//var v = getVIP(cm);
		//cm.worldMessage("�𾴵�" + ((v==0)?"":"VIP"+v) + "��� #h # �ɹ�������ð�յ����磬���Ϊ��λӢ�ۺȲʰ�);
		cm.dispose();
    }
}

//ת������
function getZScs(cm){
return (cm.itemQuantity(4032515) + cm.itemQuantity(4032516) * 100 + cm.itemQuantity(4032517) * 50 + cm.itemQuantity(4032518) * 100 + cm.itemQuantity(4032519) * 200 + cm.itemQuantity(4032520) * 400);
}

//�����ȼ�
function getFSdj(cm){
	var f_p = 4032516;
	for (var i = 4;i >= 1;i--){
		if (cm.itemQuantity(f_p + i)!=0) return i;
	}
	return 0;
}

//���VIP�ȼ�
function getVIP(cm){
	var v_p = 4031331;
	for (var i = 7;i >= 1;i--){
		if (cm.itemQuantity(v_p + i)!=0) return i;
	}
	return 0;
}
