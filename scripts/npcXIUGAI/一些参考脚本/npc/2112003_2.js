
var status = 0;

var fsName = Array(
"",
"ʥ��",
"����",
"����",
"�ս���"
)

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var f = getFSdj(cm);
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
	var selStr = "�𾴵�" + ((f==0)?"���":"#r"+fsName[f]+":#k") + "#r#h ##k����,��ѡ��������Ҫ�Ĺ���\r\nԪ����#r" + cm.getHyPay(1) + " #kת��������#r" + getZScs(cm) + "\r\n#b#L1#���س�ʥ" + "\r\n#L2#���س���" + "\r\n#L3#���س���" + "\r\n#L4##b�����ս���";
	cm.sendSimple(selStr);
    } else if(status == 1) {
	for (var i = 1;i <= 4;i++){
		if (cm.getSpace(i)<1){
			cm.sendOk("����װ�������ġ��������������и���1���ո�");
			cm.dispose();
			return;
		}
	}
	var z = getZScs(cm);
	switch (selection){
	case 1:
		if (f!=0) {
			cm.sendOk("ֻ�з��˲��ܷ�����ʥ��");
		} else if (z < 50) {
			cm.sendOk("��ɫ��Ҫ�ﵽ50ת֮����ܷ�����ʥ��");
		} else {
			if (cm.itemQuantity(4032515) >= 50) {
				cm.gainItem(4032515,-50);//ɾ��50�������Ƭ
			} else {
				cm.gainItem(4032516,-1);//ɾ��1���������
				cm.gainItem(4032515,50);//���50�������Ƭ
			}
			cm.gainItem(4032517,1);//���ʥ�˵Ļ���
			//����
			cm.gainItem(2450022,1);//1Сʱ����ֵ2��
			cm.gainNX(2,100000);//10W���þ�
			setZS(cm);
		}
		break;
	case 2:
		if (f!=1) {
			cm.sendOk("ֻ��ʥ�˲��ܷ���������");
		} else if (z < 100) {
			cm.sendOk("��ɫ��Ҫ�ﵽ100ת֮����ܷ���������");
		} else {
			if (cm.itemQuantity(4032515) >= 50) {
				cm.gainItem(4032515,-50);//ɾ��50�������Ƭ
			} else {
				cm.gainItem(4032516,-1);//ɾ��1���������
				cm.gainItem(4032515,50);//���50�������Ƭ
			}
			cm.gainItem(4032517,-1);//ɾ��ʥ�˵Ļ���
			cm.gainItem(4032518,1);//������˵Ļ���
			//����
			cm.gainItem(2450022,1);//1Сʱ����ֵ2��
			cm.addHyPay(-2000);//2000Ԫ��
			cm.gainItem(1102368,1);//��Ӣ����˿��
			setZS(cm);
		}
		break;
	case 3:
		if (f!=2) {
			cm.sendOk("ֻ�����˲��ܷ���������");
		} else if (z < 200) {
			cm.sendOk("��ɫ��Ҫ�ﵽ200ת֮����ܷ���������");
		} else {
			cm.gainItem(4032516,-1);//ɾ��1���������
			cm.gainItem(4032518,-1);//ɾ�����˵Ļ���
			cm.gainItem(4032519,1);//��������Ļ���
			//����
			cm.gainItem(2450023,1);//1Сʱ����ֵ3��
			cm.addHyPay(-5000);//5000Ԫ��
			cm.gainItem(3010307,1);//Ʒ��������
	    //10000���Ե�װ
	    cm.gainItem(1032024,1);//͸������
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1032024){//͸������
				cm.setLock(cm.getInventory(1).getItem(i));//����
				cm.getInventory(1).getItem(i).str = 10000;
				cm.getInventory(1).getItem(i).dex = 10000;
				cm.getInventory(1).getItem(i).setInt(10000);
				cm.getInventory(1).getItem(i).luk = 10000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				break;
			}
		}
            }
			setZS(cm);
		}
		break;
	case 4:
		if (f!=3) {
			cm.sendOk("ֻ���������ܷ������ս���");
		} else if (z < 400) {
			cm.sendOk("��ɫ��Ҫ�ﵽ400ת֮����ܷ������ս���");
		} else {
			cm.gainItem(4032516,-2);//ɾ��2���������
			cm.gainItem(4032519,-1);//ɾ�������Ļ���
			cm.gainItem(4032520,1);//����ս��ߵĻ���
			//����
			cm.gainItem(2450023,1);//1Сʱ����ֵ3��
			cm.addHyPay(-10000);//1wԪ��
			cm.gainItem(3010070,1);//���ް�Ʒ��������
	    //20000���Ե�װ
	    cm.gainItem(1022048,1);//͸������
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1022048){//͸������
				cm.setLock(cm.getInventory(1).getItem(i));//����
				cm.getInventory(1).getItem(i).str = 20000;
				cm.getInventory(1).getItem(i).dex = 20000;
				cm.getInventory(1).getItem(i).setInt(20000);
				cm.getInventory(1).getItem(i).luk = 20000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				break;
			}
		}
            }
			setZS(cm);
		}
		break;
	}
	cm.dispose();
    }
}

function setZS(cm){
		var z = getZScs(cm);//ת������
		var f = getFSdj(cm);//�����ȼ�
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
			ap = z * 40;
			break;
		case 3:
			cm.resetStats(15000,15000,15000,15000);
			ap = z * 60;
			break;
		case 4:
			cm.resetStats(20000,20000,20000,20000);
			ap = z * 80;
			break;
		}
		cm.gainAp(ap-cm.getPlayer().getRemainingAp());
		cm.fakeRelog();//ˢ������
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
