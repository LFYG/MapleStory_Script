var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
	switch (cm.getJob()) {
//һת
	case 0://����
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L100#սʿ#L200#ħ��ʦ#L300#������#L400#����#L500#����\r\n#L1100#����ʿ#L1200#����ʦ#L1300#����ʹ��#L1400#ҹ����#L1500#��Ϯ��\r\n#L2100#ս��1ת\r\n#L2200#����#L430#��Ӱ˫��#L3200#���鶷ʦ#L3300#��������#L3500#��еʦ\r\n#L2300#˫����#L501#������#L3100#��ħ����\r\n#L508#���Ĵ���#L5100#��֮��ʿ#L2400#�ֵ���Ӱ");
		break;
//��ת
	case 100:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L110#����\r\n#L120#׼��ʿ\r\n#L130#ǹսʿ");
	    //cm.openNpc(9000069,2);
		break;
	case 200:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L210#�𶾷�ʦ\r\n#L220#���׷�ʦ\r\n#L230#��ʦ");
		break;
	case 300:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L310#����\r\n#L320#����");
		break;
	case 400:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L410#�̿�\r\n#L420#����");
		break;
	case 500:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L510#ȭ��\r\n#L520#��ǹ��");
		break;

	case 1100:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1110#����ʿ2ת");
		break;
	case 1200:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1210#����ʦ2ת");
		break;
	case 1300:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1310#����ʹ��2ת");
		break;
	case 1400:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1410#ҹ����2ת");
		break;
	case 1500:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1510#��Ϯ��2ת");
		break;

	case 2100:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2110#ս��2ת");
		break;
	case 430:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L432#˫��2ת");
		break;
	case 3200:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3210#����2ת");
		break;
	case 3300:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3310#����2ת");
		break;
	case 3500:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3510#��е2ת");
		break;
	case 2300:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2310#����2ת");
		break;
	case 501:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L530#����2ת");
		break;
	case 3100:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3110#��ħ2ת");
		break;
	case 5100:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L5110#�׹���2ת");
		break;
	case 2400:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2410#��Ӱ2ת");
		break;
	case 508:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L570#���Ĵ���2ת");
		break;

//��ת
	case 110:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L111#��ʿ");
		break;
	case 120:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L121#��ʿ");
		break;
	case 130:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L131#����ʿ");
		break;
	case 210:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L211#����ʦ");
		break;
	case 220:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L221#������ʦ");
		break;
	case 230:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L231#����");
		break;
	case 310:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L311#����");
		break;
	case 320:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L321#����");
		break;
	case 410:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L411#��Ӱ��");
		break;
	case 420:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L421#���п�");
		break;
	case 510:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L511#��ʿ");
		break;
	case 520:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L521#���");
		break;
	
	case 1110:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1111#����ʿ3ת");
		break;
	case 1210:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1211#����ʦ3ת");
		break;
	case 1310:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1311#����ʹ��3ת");
		break;
	case 1410:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1411#ҹ����3ת");
		break;
	case 1510:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1511#��Ϯ��3ת");
		break;

	case 2110:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2111#ս��3ת");
		break;
	case 432:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L433#˫��3ת");
		break;
	case 3210:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3211#����3ת");
		break;
	case 3310:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3311#����3ת");
		break;
	case 3510:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3511#��еʦ3ת");
		break;
	case 2310:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2311#����3ת");
		break;
	case 530:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L531#������3ת");
		break;
	case 3110:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3111#��ħ3ת");
		break;
	case 5110:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L5111#�׹���3ת");
		break;
	case 2410:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2411#��Ӱ3ת");
		break;
	case 570:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L571#���Ĵ���3ת");
		break;

//��ת
	case 111:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L112#Ӣ��");
		break;
	case 121:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L122#ʥ��ʿ");
		break;
	case 131:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L132#����ʿ");
		break;
	case 211:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L212#��ħ��ʦ");
		break;
	case 221:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L222#����ħ��ʦ");
		break;
	case 231:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L232#����");
		break;
	case 311:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L312#������");
		break;
	case 321:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L322#����");
		break;
	case 411:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L412#��ʿ");
		break;
	case 421:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L422#����");
		break;
	case 511:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L512#���ӳ�");
		break;
	case 521:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L522#����");
		break;
	
	case 2111:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2112#ս��4ת");
		break;
	case 433:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L434#˫��4ת");
		break;
	case 3211:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3212#����4ת");
		break;
	case 3311:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3312#����4ת");
		break;
	case 3511:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3512#��еʦ4ת");
		break;
	case 2311:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2312#����4ת");
		break;
	case 531:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L532#������4ת");
		break;
	case 3111:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3112#��ħ4ת");
		break;
	case 5111:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L5112#�׹���4ת");
		break;
	case 2411:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2412#��Ӱ4ת");
		break;
	case 571:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L572#���Ĵ���4ת");
		break;

//����
	case 2200:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2210#����2ת");
		break;
	case 2210:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2211#����3ת");
		break;
	case 2211:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2212#����4ת");
		break;
	case 2212:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2213#����5ת");
		break;
	case 2213:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2214#����6ת");
		break;
	case 2214:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2215#����7ת");
		break;
	case 2215:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2216#����8ת");
		break;
	case 2216:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2217#����9ת");
		break;
	case 2217:
		cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2218#����10ת");
		break;
	
	default:
		cm.sendOk("�������Ҫתְ�Ļ��ǵ�����");
            	cm.dispose();
	}
    } else if (status == 1) {
        switch (selection) {
//��תְ
//һת
        case 200://ħ��ʦ
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 8) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("�㲻������ְҵ ����ĵȼ�û�дﵽ8");
            }
            cm.dispose();
            break;
        case 100:
        case 300:
        case 400:
        case 500:
        case 1100:
        case 1200:
        case 1300:
        case 1400:
        case 1500:
        case 2100:
        case 2200:
        case 430:
        case 3200:
        case 3300:
        case 3500:
        case 2300:
        case 501:
        case 3100:
        case 5100:
        case 2400:
        case 508:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("�㲻������ְҵ����ĵȼ�û�дﵽ10");
            }
            cm.dispose();
            break;
//��ת
	case 110:
	case 120:
	case 130:
	case 210:
	case 220:
	case 230:
	case 310:
	case 320:
	case 410:
	case 420:
	case 510:
	case 520:

	case 1110:
	case 1210:
	case 1310:
	case 1410:
	case 1510:
	
	case 2110:
	case 432:
	case 3210:
	case 3310:
	case 3510:
	case 2310:
	case 530:
	case 3110:
	case 5110:
	case 2410:
	case 570:
            if (cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ30");
            }
            cm.dispose();
            break;
//��ת
	case 111:
	case 121:
	case 131:
	case 211:
	case 221:
	case 231:
	case 311:
	case 321:
	case 411:
	case 421:
	case 511:
	case 521:

	case 1111:
	case 1211:
	case 1311:
	case 1411:
	case 1511:

	case 2111:
	case 433:
	case 3211:
	case 3311:
	case 3511:
	case 2311:
	case 531:
	case 3111:
	case 5111:
	case 2411:
	case 571:
            if (cm.getPlayer().getLevel() >= 70) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ70");
            }
            cm.dispose();
            break;
//��ת
	case 112:
	case 122:
	case 132:
	case 212:
	case 222:
	case 232:
	case 312:
	case 322:
	case 412:
	case 422:
	case 512:
	case 522:
	case 2112:
	case 434:
	case 3212:
	case 3312:
	case 3512:
	case 2312:
	case 532:
	case 3112:
	case 5112:
	case 2412:
	case 572:
            if (cm.getPlayer().getLevel() >= 120) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ120");
            }
            cm.dispose();
            break;
//����ר��
	case 2210:
            if (cm.getPlayer().getLevel() >= 20) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ20");
            }
            cm.dispose();
            break;
	case 2211:
            if (cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ30");
            }
            cm.dispose();
            break;
	case 2212:
            if (cm.getPlayer().getLevel() >= 40) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ40");
            }
            cm.dispose();
            break;
	case 2213:
            if (cm.getPlayer().getLevel() >= 50) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ50");
            }
            cm.dispose();
            break;
	case 2214:
            if (cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ60");
            }
            cm.dispose();
            break;
	case 2215:
            if (cm.getPlayer().getLevel() >= 70) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ70");
            }
            cm.dispose();
            break;
	case 2216:
            if (cm.getPlayer().getLevel() >= 80) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ80");
            }
            cm.dispose();
            break;
	case 2217:
            if (cm.getPlayer().getLevel() >= 120) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ120");
            }
            cm.dispose();
            break;
	case 2218:
            if (cm.getPlayer().getLevel() >= 160) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("��ĵȼ�û�дﵽ160");
            }
            cm.dispose();
            break;


        }
	cm.maxSkillsByJob();//�Ӽ���
    }
}