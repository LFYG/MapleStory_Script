var status = -1;
var typed;
var pot = new Array();
var EquipStat = Array();
var position;
var EquipStat = new Array();
var toDrop;
var Already = false;
var keep = Array(false, false, false);
var itemid;
var ii;
var PotList = Array(
        1, // "����" +#incSTR
        2, // "����" +#incDEX
        3, // "����" +#incINT
        4, // "����" +#incLUK
        5, // "MaxHP" +#incMHP
        6, // "MaxMP" +#incMMP
        7, // "����ֵ" +#incACC
        8, // "�ر�ֵ" +#incEVA
        9, // "�ƶ��ٶ�" +#incSpeed
        10, // "��Ծ��" +#incJump
        11, // "������" +#incPAD
        12, // "ħ��������" +#incMAD
        13, // "���������" +#incPDD
        14, // "ħ��������" +#incMDD
        901, // "�ܵ�����ʱ����#prop%�ĸ�����#time���ڸо�����ŭ�� 
        902, // "�ܵ�����ʱ����#prop%�ĸ�����#time���ڸо����Ҹ��� 
        903, // "�ܵ�����ʱ����#prop%�ĸ�����#time���ڸо������顣 
        904, // "�ܵ�����ʱ����#prop%�ĸ�����#time���ڸо�����ŭ�� 
        905, // "�ܵ�����ʱ����#prop%�ĸ�����#time���ڸо����ж��� 
        10001, // "����" +#incSTR
        10002, // "����" +#incDEX
        10003, // "����" +#incINT
        10004, // "����" +#incLUK
        10005, // "MaxHP" +#incMHP
        10006, // "MaxMP" +#incMMP
        10007, // "����ֵ" +#incACC
        10008, // "�ر�ֵ" +#incEVA
        10009, // "�ƶ��ٶ�" +#incSpeed
        10010, // "��Ծ��" +#incJump
        10011, // "������" +#incPAD
        10012, // "ħ��������" +#incMAD
        10013, // "���������" +#incPDD
        10014, // "ħ��������" +#incMDD
        10041, // "����" +#incSTRr%
        10042, // "����" +#incDEXr%
        10043, // "����" +#incINTr%
        10044, // "����" +#incLUKr%
        10045, // "MaxHP" +#incMHPr%
        10046, // "MaxMP" +#incMMPr%
        10047, // "����ֵ" +#incACCr%
        10048, // "�ر�ֵ" +#incEVAr%
        10051, // "������" +#incPADr%
        10052, // "ħ��������" +#incMADr%
        10053, // "���������" +#incPDDr%
        10054, // "ħ��������" +#incMDDr%
        10055, // "������" +#incCr%
        10070, // "���˺�" +#incDAMr%
        10081, // "��������" +#incSTR
        10151, // "ÿ4��ָ�#RecoveryHP��HP 
        10156, // "ÿ4��ָ�#RecoveryMP��MP 
        10201, // "����ʱ����#prop%�ĸ��ʻָ�#HP��HP 
        10206, // "����ʱ����#prop%�ĸ��ʻָ�#MP��MP 
        10221, // "����ʱ����#prop%�ĸ������#level���ж�Ч�� 
        10226, // "����ʱ����#prop%�ĸ������#level��ѣ��Ч�� 
        10231, // "����ʱ����#prop%�ĸ������#level������Ч�� 
        10236, // "����ʱ����#prop%�ĸ������#level������Ч�� 
        10241, // "����ʱ����#prop%�ĸ������#level������Ч�� 
        10246, // "����ʱ����#prop%�ĸ������#level����ӡЧ�� 
        10291, // "����ʱ�����ӹ���ķ�����#ignoreTargetDEF% 
        20001, // "����" +#incSTR
        20002, // "����" +#incDEX
        20003, // "����" +#incINT
        20004, // "����" +#incLUK
        20005, // "MaxHP" +#incMHP
        20006, // "MaxMP" +#incMMP
        20007, // "����ֵ" +#incACC
        20008, // "�ر�ֵ" +#incEVA
        20009, // "�ƶ��ٶ�" +#incSpeed
        20010, // "��Ծ��" +#incJump
        20011, // "������" +#incPAD
        20012, // "ħ��������" +#incMAD
        20013, // "���������" +#incPDD
        20014, // "ħ��������" +#incMDD
        20041, // "����" +#incSTRr%
        20042, // "����" +#incDEXr%
        20043, // "����" +#incINTr%
        20044, // "����" +#incLUKr%
        20045, // "MaxHP" +#incMHPr%
        20046, // "MaxMP" +#incMMPr%
        20047, // "����ֵ" +#incACCr%
        20048, // "�ر�ֵ" +#incEVAr%
        20051, // "������" +#incPADr%
        20052, // "ħ��������" +#incMADr%
        20053, // "���������" +#incPDDr%
        20054, // "ħ��������" +#incMDDr%
        20055, // "������" +#incCr%
        20070, // "���˺�" +#incDAMr%
        20086, // "��������" +#incSTRr%
        20201, // "����ʱ����#prop%�ĸ��ʻָ�#HP��HP 
        20206, // "����ʱ����#prop%�ĸ��ʻָ�#MP��MP 
        20291, // "����ʱ�����ӹ���ķ�����#ignoreTargetDEF% 
        20351, // "�ܵ�����ʱ����#prop%�ĸ�������#ignoreDAM���˺� 
        20352, // "�ܵ�����ʱ����#prop%�ĸ�������#ignoreDAM���˺� 
        20353, // "�ܵ�����ʱ����#prop%�ĸ�������#ignoreDAM���˺� 
        20366, // "�ܵ��������޵�ʱ��")//+#time��
        40603, //����BOSSʱ�˺���+40%
        40292, //���ӹ���40%�ķ�����
        42051, //��������+12%
        40055 //������ 12%
        )
//�����趨����
var salaryList = Array(1000, 1000, 1000); //�����ң�Ԫ��
var WeaponLimit = 1000; //����ͻ������
var EvResetList = Array(
        Array("Ʒ�˱�", "pinkebin"),
        Array("��߳�", "pinkebin"),
        Array("����", "LudiPQ")
        ); //��ʾ����bosslog�ַ���
var npcid = 9900000; //ר��������NPCID
var mode = 0; //ר��������npcmode
var Ringitemid = 1112785; //��ʯ��ָ
var Allstats = 100; //���͵�װ��ȫ����
var upgradeTimes = 1; //װ�������Ĵ���
var upgradeNeedItem = 4310104; //װ����������Ҫ�ĵ���
var needNX = 1000;//ϴǱ������Ҫ�ĵ�ȯ
var PotNeedItem = 4001485;//Ԫ��
var PotNeedItemQty = 3;//����Ǳ����Ҫ��Ԫ������



function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        im.sendOk("ף����Ϸ���!!!");
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var text = "#e#r#h0##n#d���𾴵���ʯ�����ã�\r\n������������鵽���б���������#r����Ż�#d��������ʲô��\r\n#b"
        text += "#L0# ÿ�չ��� #L1# ÿ��ͻ�� #L2# ���ø���\r\n";
        text += "#L3# ר������ #L4# ר����ָ #L5# װ������\r\n"
        text += "#L6# һ��Ǳ�� "
        im.sendSimple(text);
    } else if (status == 1) {
        typed = selection;
        switch (selection) {
            case 6://һ��Ǳ��
                im.sendYesNo("�ù���ʹ��һ����Ҫ1000��ȯ����ȷ����\r\n #r - ��ѡ���߱�����SS��������ʾ��\r\n - ϴ��֮���ѡ�������߷����������ɼ�������1000��ȯ����ִ�С�")
                break;
            case 0://ÿ�չ���
                if (im.getBossLog("��ʯÿ�չ���") >= 1) {
                    im.sendOk("������˼���������Ѿ���ȡ�������ˣ�");
                    status = -1;
                } else {
                    im.sendYesNo("��ȷ����Ҫ��ȡ����Ĺ�����")
                }
                break;
            case 1:
                if (im.getBossLog("��ʯÿ��ͻ��") >= 1) {
                    im.sendOk("������˼���������Ѿ�Ϊ��������ͻ�������ˣ�");
                    status = -1;
                } else {
                    im.sendYesNo("��ȷ����Ϊ������������#r" + WeaponLimit + "#k���ͻ��������")
                }
                break;
            case 2:
                if (im.getBossLog("��ʯÿ������") >= 1) {
                    im.sendOk("������˼���������Ѿ������˸���������");
                    status = -1;
                } else {
                    im.sendYesNo("��ȷ�������ø���������")
                }
                break;
            case 3:
                im.openNpc(npcid, mode);
                break;
            case 4:
                if (im.getBossLogAcc("��ʯר����ָ") == -1) {
                    im.sendOk("��ʯר����ָֻ����ȡһ�Σ���ȷ�ϡ�")
                    status = -1;
                } else {
                    im.sendYesNo("����������ȡ��ʯVIP���е�ȫ����100�Ľ�ָ��\r\n #r- ȷ����ȡ�󣬽������ٴ���ȡ�ˣ�");
                }
                break;
            case 5:
                if (im.getItemQuantity(upgradeNeedItem) >= 1) {
                    var i = 0;
                    var list = im.getInventory(1).list();
                    var itemList = list.iterator();
                    var text = "��ѡ������Ҫ����װ��������������\r\n #r- ѡ�м��ɽ�������������������������Ϊ:" + upgradeTimes + "��#b\r\n";
                    position = -1;
                    newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (im.isCash(item.getItemId()) == false) {
                            newItemList[item.getPosition()] = item.getItemId();
                            i++;
                        }

                    }
                    if (i == 0) {
                        im.sendOk("�Բ�������ѡ������Ŀ����û����Ʒ���޷�������");
                        im.dispose();
                    } else {
                        for (var key in newItemList) {
                            text += "#L" + key + "# #v" + newItemList[key] + "# #t" + newItemList[key] + "#\r\n";
                        }
                        im.sendSimple(text);
                    }
                } else {
                    im.sendOk("����װ��������Ҫ1��#i" + upgradeNeedItem + "# #t" + upgradeNeedItem + "#����ȷ�ϡ�")
                    status = -1;
                }
                break;
        }
    } else if (status == 2) {
        switch (typed) {
            case 6:
                var i = 0;
                var list = im.getInventory(1).list();
                var itemList = list.iterator();
                var text = "��ѡ����Ҫ����һ��Ǳ�ܵĵ��ߣ� \r\n#r - ֻ��ʾ����SS�������ϵĵ��ߡ�#b\r\n";
                position = -1;
                newItemList = Array();
                while (itemList.hasNext()) {
                    var item = itemList.next();
                    if (item.getState() <= 20) {//����ҪSS������
                        if (im.isCash(item.getItemId()) == false) {
                            newItemList[item.getPosition()] = item.getItemId();
                            i++;
                        }
                    }

                }
                if (i == 0) {
                    im.sendOk("����ѡ������Ŀ����û����Ʒ����û��#bSS��#k�����ϵĵ��ߣ��޷�������");
                    im.dispose();
                } else {
                    for (var key in newItemList) {
                        text += "#L" + key + "# #v" + newItemList[key] + "# #t" + newItemList[key] + "#\r\n";
                    }
                    im.sendSimple(text);
                }
                break;
            case 5:
                if (position == -1) {
                    position = selection;
                }
                if (im.getEquipBySlot(position).getExpiration() > 0) {
                    im.sendOk("�Բ�����ʱ�����Ƶĵ��߲�����������������");
                    im.dispose();
                    return;
                }
                getEquipStatToArray(); //��¼ԭ������
                var ii = im.getItemInfo();
                toDrop = ii.randomizeStats(ii.getEquipById(im.getEquipBySlot(position).getItemId())).copy(); // ����һ��Equip��(�������װ��)
                for (var i = 0; i < EquipStat.length; i++) {
                    setEquipStatRandom(i, EquipStat[i]); //����������������
                }
                im.removeSlot(1, position, 1); //ɾ����ԭʼ����
                im.addFromDrop(im.getC(), toDrop, false);
                im.sendOk("�����������������ɹ��ˣ�\r\n - ������1��#i" + upgradeNeedItem + "# #t" + upgradeNeedItem + "#");
                im.gainItem(upgradeNeedItem, -1);
                status = -1;
                break;
            case 0:
                im.gainNX(1, salaryList[0]);
                im.gainMeso(salaryList[1]);
                im.gainItem(4001485, salaryList[2]);
                im.setBossLog("��ʯÿ�չ���");
                im.sendOk("��ϲ����ȡ����Ĺ��ʳɹ���!");
                //im.getPlayer().dropMessage(-1, "���" + salaryList[0] + " ��ȯ��");
                im.getPlayer().dropMessage(-1, "���" + salaryList[1] + " ��ҡ�");
                im.getPlayer().dropMessage(-1, "���" + salaryList[2] + " Ԫ����");
                status = -1;
                break;
            case 1:
                if (im.changeLimitBreak(WeaponLimit)) {
                    im.setBossLog("��ʯÿ��ͻ��");
                    im.sendOk("��ϲ������ͻ������" + WeaponLimit + "��ɹ�����");
                    im.getPlayer().dropMessage(-1, "���" + WeaponLimit + " ������ͻ�����ޡ�");
                    status = -1;
                } else {
                    im.sendOk("�Բ�������ʧ�ܣ�����ȷ�ϣ�\r\n1�����Ƿ�װ����������\r\n2����������ͻ�������Ƿ񳬳������ֵ��")
                    im.dispose();
                }
                break;
            case 2:
                var text = "��ϲ�㣡�Ѿ��ɹ�Ϊ�����������¸����� \r\n#r "
                for (var i = 0; i < EvResetList.length; i++) {
                    im.resetBossLog(EvResetList[i][1]);
                    text += EvResetList[i][0] + "��"
                }
                im.setBossLog("��ʯÿ������");
                im.sendOk(text);
                status = -1;
                break;
            case 4:
                MakeEquip(Ringitemid, Allstats);
                im.setBossLogAcc("��ʯר����ָ", -2);
                im.sendOk("��ϲ������ȡ��ʯר����ָ�ɹ��ˣ�");
                status = -1;
                break;
        }
    } else if (status == 3) {
        switch (typed) {
            case 6:
                if (position == -1) {
                    position = selection;
                }
                if (im.getEquipBySlot(position).getExpiration() > 0) {
                    im.sendOk("�Բ�����ʱ�����Ƶĵ��߲��ܽ���һ��ϴǱ�ܡ�");
                    im.dispose();
                    return;
                }
                /* if (im.getEquipBySlot(position).getState() != 0x14 || im.getEquipBySlot(position) == null) {
                 im.sendOk("�Բ�����ѡ��ĵ���û��SS������ѡ�������Ϊ�ա�")
                 im.dispose();
                 return;
                 }*/
                if (im.getNX(1) < needNX) {
                    im.sendOk("�Բ������ĵ�ȯ���㣡�������Ƿ���1000��ȯ��")
                    im.dispose();
                    return;
                }

                //������
                if (!keep[0]) {
                    pot[0] = Math.floor(Math.random() * PotList.length);
                }
                if (!keep[1]) {
                    pot[1] = Math.floor(Math.random() * PotList.length);
                }
                if (!keep[2]) {
                    pot[2] = Math.floor(Math.random() * PotList.length);
                }
                if (!Already) {
                    im.gainNX(2, -2000);//�۳�2000����ȯ
                    Already = true;
                    itemid = im.getEquipBySlot(position).getItemId();
                }
                var text = "#e#d��ϲ�����Ǳ�ܳɹ���#n#k\r\n���������Ǳ������Ϊ��\r\n#b";
                ii = im.getItemInfo();
                if (keep[0]) {//���������Ǳ������
                    text += "#r 1��" + ii.resolvePotentialId(itemid, PotList[pot[0]]) + " \r\n�� - �Ѿ�����)\r\n#b";
                } else {
                    text += "#L0# 1��" + ii.resolvePotentialId(im.getEquipBySlot(position).getItemId(), PotList[pot[0]]) + " \r\n������������������� - ����1000��ȯ)#l\r\n";
                }
                if (keep[1]) {//���������Ǳ������
                    text += "#r\r\n\r\n 2��" + ii.resolvePotentialId(itemid, PotList[pot[1]]) + "\r\n�� - �Ѿ�����)\r\n#b";
                } else {
                    text += "#L1# 2��" + ii.resolvePotentialId(im.getEquipBySlot(position).getItemId(), PotList[pot[1]]) + " \r\n������������������� - ����1000��ȯ)#l\r\n";
                }
                if (keep[2]) {//���������Ǳ������
                    text += "#r\r\n\r\n 3��" + ii.resolvePotentialId(itemid, PotList[pot[2]]) + "\r\n�� - �Ѿ�����)\r\n#b";
                } else {
                    text += "#L2# 3��" + ii.resolvePotentialId(im.getEquipBySlot(position).getItemId(), PotList[pot[2]]) + "\r\n������������������� - ����1000��ȯ)#l\r\n";
                }
                text += "#b#r#e#L4# ȷ������Ǳ�ܣ���\r\n#d#L5# �������У�������2000����ȯ���������\r\n#l"
                im.sendSimple(text);
                break;
        }
    } else if (status == 4) {//����Ǳ������
        switch (selection) {
            case 4://ȷ�ϲ���
                if (im.changePotential(position, 1, PotList[pot[0]], true) && im.changePotential(position, 2, PotList[pot[1]], true) && im.changePotential(position, 3, PotList[pot[2]], true)) { //[װ��λ��] [Ǳ��λ��] [Ǳ��ID] [�Ƿ񹫸�]
                    im.sendOk("��ϲ�㣡һ��Ǳ�ܳɹ���");
                    im.dispose();
                }
                break;
            case 5:
                Already = false;
                keep = Array(false, false, false);
                status = 2;
                im.sendNext("�����ɹ���������һ��������")
                break;
            case 0://
            case 1:
            case 2:
                if (im.getNX(1) < 1000) {
                    status = 2;
                    im.sendNext("�Բ�����û���㹻��Ԫ����\r\n�����һ������Ǳ�ܱ������档")
                } else {
                    keep[selection] = true;
                    im.gainNX(1, -1000)
                    im.sendNextNoESC("�����ɹ����밴��һ������ѡ��");
                    status = 2;
                }
                break;
        }
    }
}

function MakeEquip(Ringitemid, v) {//����װ��
    var ii = im.getItemInfo();
    toDrop = ii.randomizeStats(ii.getEquipById(Ringitemid)).copy(); // ����һ��Equip��(�������װ��)
    toDrop.setStr(v);
    toDrop.setDex(v);
    toDrop.setInt(v);
    toDrop.setLuk(v);
    toDrop.setWatk(v);
    toDrop.setMatk(v);
    im.addFromDrop(im.getC(), toDrop, false);
}


function getEquipStatToArray() {//�õ�װ������
    EquipStat[0] = im.getEquipBySlot(position).getStr(); //����
    EquipStat[1] = im.getEquipBySlot(position).getDex(); //����
    EquipStat[2] = im.getEquipBySlot(position).getInt(); //����
    EquipStat[3] = im.getEquipBySlot(position).getLuk(); //����
    EquipStat[4] = im.getEquipBySlot(position).getHp();
    EquipStat[5] = im.getEquipBySlot(position).getMp();
    EquipStat[6] = im.getEquipBySlot(position).getWatk();
    EquipStat[7] = im.getEquipBySlot(position).getMatk();
    EquipStat[8] = im.getEquipBySlot(position).getWdef();
    EquipStat[9] = im.getEquipBySlot(position).getMdef();
    EquipStat[10] = im.getEquipBySlot(position).getAcc();
    EquipStat[11] = im.getEquipBySlot(position).getAvoid();
    EquipStat[12] = im.getEquipBySlot(position).getSpeed();
    EquipStat[13] = im.getEquipBySlot(position).getJump();
    EquipStat[14] = im.getEquipBySlot(position).getUpgradeSlots();
    EquipStat[15] = im.getEquipBySlot(position).getLimitBreak();
    EquipStat[16] = im.getEquipBySlot(position).getPotential1();
    EquipStat[17] = im.getEquipBySlot(position).getPotential2();
    EquipStat[18] = im.getEquipBySlot(position).getPotential3();
    EquipStat[19] = im.getEquipBySlot(position).getPotential4();
    EquipStat[20] = im.getEquipBySlot(position).getPotential5();
    EquipStat[21] = im.getEquipBySlot(position).getPotential6();
    EquipStat[22] = im.getEquipBySlot(position).getEnhance();
    EquipStat[23] = im.getEquipBySlot(position).getReqLevel();
    EquipStat[24] = im.getEquipBySlot(position).getYggdrasilWisdom();
    EquipStat[25] = im.getEquipBySlot(position).getBossDamage();
    EquipStat[26] = im.getEquipBySlot(position).getIgnorePDR();
    EquipStat[27] = im.getEquipBySlot(position).getTotalDamage();
    EquipStat[28] = im.getEquipBySlot(position).getAllStat();
    // EquipStat[29] = im.getEquipBySlot(1).getFinalStrike();
    EquipStat[29] = im.getEquipBySlot(position).getKarmaCount();
    //�������Բ���
    EquipStat[30] = im.getEquipBySlot(position).getHands();
    EquipStat[31] = im.getEquipBySlot(position).getViciousHammer();
    EquipStat[32] = im.getEquipBySlot(position).getItemEXP();
    EquipStat[33] = im.getEquipBySlot(position).getSealedLevel();
    EquipStat[34] = im.getEquipBySlot(position).getSealedExp();
    EquipStat[35] = im.getEquipBySlot(position).getOwner();
    EquipStat[36] = im.getEquipBySlot(position).getLevel();
    EquipStat[37] = im.getEquipBySlot(position).getExpiration();
    EquipStat[38] = im.getEquipBySlot(position).getFlag();
}


function setEquipStatRandom(i, v) {//����װ������
    switch (i) {
        case 0:
            toDrop.setStr(v);
            break;
        case 1:
            toDrop.setDex(v);
            break;
        case 2:
            toDrop.setInt(v);
            break;
        case 3:
            toDrop.setLuk(v);
            break;
        case 4:
            toDrop.setHp(v);
            break;
        case 5:
            toDrop.setMp(v);
            break;
        case 6:
            toDrop.setWatk(v);
            break;
        case 7:
            toDrop.setMatk(v);
            break;
        case 8:
            toDrop.setWdef(v);
            break;
        case 9:
            toDrop.setMdef(v);
            break;
        case 10:
            toDrop.setAcc(v);
            break;
        case 11:
            toDrop.setAvoid(v);
            break;
        case 12:
            toDrop.setSpeed(v);
            break;
        case 13:
            toDrop.setJump(v);
            break;
        case 14:
            toDrop.setUpgradeSlots(v + upgradeTimes); //��������+1
            break;
        case 15:
            toDrop.setLimitBreak(v);
            break;
        case 16:
            toDrop.setPotential1(v);
            break;
        case 17:
            toDrop.setPotential2(v);
            break;
        case 18:
            toDrop.setPotential3(v);
            break;
        case 19:
            toDrop.setPotential4(v);
            break;
        case 20:
            toDrop.setPotential5(v);
            break;
        case 21:
            toDrop.setPotential6(v);
            break;
        case 22:
            toDrop.setEnhance(v);
            break;
        case 23:
            toDrop.setReqLevel(v);
            break;
        case 24:
            toDrop.setYggdrasilWisdom(v);
            break;
        case 25:
            toDrop.setBossDamage(v);
            break;
        case 26:
            toDrop.setIgnorePDR(v);
            break;
        case 27:
            toDrop.setTotalDamage(v);
            break;
        case 28:
            toDrop.setAllStat(v);
            break;
        case 29:
            toDrop.setKarmaCount(v);
            break;
        case 30:
            toDrop.setHands(v);
            break;
        case 31:
            toDrop.setViciousHammer(v);
            break;
        case 32:
            toDrop.setItemEXP(v);
            break;
        case 33:
            toDrop.setSealedLevel(v);
            break;
        case 34:
            toDrop.setSealedExp(v);
            break;
        case 35:
            toDrop.setOwner(v);
            break;
        case 36:
            toDrop.setLevel(v);
            break;
        case 37:
            toDrop.setExpiration(v);
            break;
        case 38:
            toDrop.setFlag(v);
            break;
    }
}