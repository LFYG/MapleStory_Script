var status = -1;
var selectedType = 0;
var selectedMeso = 0;
var moneyMeso = 1;
var youxibi = 100000000;
var dianjuan = 10000;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 2) {
                cm.sendOk("����#r#h ##k�ټ���");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("����#r#h ##k���ã���ѡ������Ҫ��������Ŀ:\r\n\r\n��Ŀǰ������#r " + cm.getMeso() + " #k���\r\n����Maplewing���׵���Ϊ#r " + cm.getMaplewing() + " #k��\r\n#b#L0#����  #e#rMaplewing���׵���#n#l\r\n#L1##bʹ��MapleWing���׵�һ����#l\r\n#L2##b��ȡ #r#e���#n#l\r\n#L3##b��ȡ #r#e���#n#l");

        } else if (status == 1) {

            selectedType = selection;

            if (selectedType == 0) {
                cm.sendGetNumber("��������Ҫ���ӵ�Maplewing���׵���:\r\n", 1, 1, 9999999);
            } else if (selectedType == 1) {
                cm.sendGetNumber("��������Ҫ�һ��Ľ��(��λ: �� ):\r\n", 1, 1, 10);
            } else if (selectedType == 2) {
                cm.sendGetNumber("��������Ҫ��ȡ��#e#r���#n#k(��λ: #r��#k ):\r\n", 1, 1, 100);
            } else if (selectedType == 3) {
                cm.sendGetNumber("��������Ҫ��ȡ��#e#r���#n#k(��λ: #r��#k ):\r\n", 1, 1, 10);
            }


        } else if (status == 2) {

            selectedMeso = selection;

            if (selectedType == 0) {
                cm.sendYesNo("���Ƿ�Ҫ���ӵ�Maplewing���׵���#r " + selectedMeso + " #k��");
            } else if (selectedType == 1) {
                cm.sendYesNo("���Ƿ�Ҫȡ��#r " + selectedMeso + " #k��ң�");
            } else if (selectedType == 2) {
                cm.sendYesNo("���Ƿ�Ҫ��ȡ#r#e " + selectedMeso * dianjuan + " #n#k���");
            } else if (selectedType == 3) {
                cm.sendYesNo("���Ƿ�Ҫ��ȡ#r#e " + selectedMeso * youxibi + " #n#k��ң�");
            }


        } else if (status == 3) {

            if (selectedType == 0) {

                //if (cm.getMeso() >= selectedMeso * moneyMeso) {
                   // cm.sendNext("���Ľ�Ҳ�����"); //}else //�ж��Ƿ��������

                if (cm.addMaplewing(selectedMeso, 0) > 0) {
                    //cm.gainMeso( - selectedMeso * moneyMeso);
                    cm.sendOk("�õģ��Ѿ�����Maplewing���׵�����\r\n����Maplewing���׵���Ϊ#r " + cm.getMaplewing() + " #k��");
                } else {
                    cm.sendOk("����Maplewing���׵������ִ����뷴��������Ա��");
                }
                cm.dispose();

            } else if (selectedType == 1) {

                if (cm.getMaplewing() < selectedMeso) {
                    cm.sendOk("��û�д���ô��Ǯ��");
                } else if (cm.getMeso() > 1000000000) {
                    cm.sendOk("�����ϵĽ�ҳ����� 10 �ڣ���ȡʧ�ܡ��뽫��Ҵ���ֿ����������ȡ�ɣ�");
                } else if (cm.addMaplewing( - selectedMeso, 1) > 0) {
                    cm.gainMeso(selectedMeso * youxibi);
                    cm.sendOk("�õģ����պ�����Ǯ��");
                } else {
                    cm.sendOk("ȡ����ִ����뷴��������Ա��");
                }
                cm.dispose();

                } else if (selectedType == 2) {

                    cm.gainNX(selectedMeso * dianjuan);
                    cm.sendOk("�õģ�#r#e " + selectedMeso * dianjuan + " #n#k��� �Ѿ����������˻���\r\n��������#e#r������#nΪ��#r #e" + cm.getPlayer().getCSPoints(1) + " #n#k��");

                cm.dispose();

            } else if (selectedType == 3) {

                if (cm.getMeso() > 1000000000) {
                    cm.sendOk("�����ϵĽ�ҳ����� 10 �ڣ���ȡʧ�ܡ��뽫��Ҵ���ֿ����������ȡ�ɣ�");

                } else {
                    cm.gainMeso(selectedMeso * youxibi);
                    cm.sendOk("�õģ�#r#e " + selectedMeso * youxibi + " #n#k��� �Ѿ����������˻���\r\n��������#e#r������#nΪ��#r #e" + cm.getMeso() + " #n#k��");
                }
                cm.dispose();



            }

        } else {
            cm.dispose();
        }
    }
}