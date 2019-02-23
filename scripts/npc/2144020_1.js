importPackage(java.lang);

var status = 0;
var slot = Array();
var stats = Array("����", "����", "����", "����", "HP", "MP", "������", "ħ������", "�������", "ħ������", "������", "�ر���", "�ּ�", "�ƶ��ٶ�", "��Ծ��", "����������", "���Ӵ���", "����������", "�����ȼ�", "װ���Ǽ�", "Ǳ������ 1", "Ǳ������ 2", "Ǳ������ 3");
var selected;
var statsSel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getChar().getAccountID()==1) {
            cm.sendSimple("�װ���#d  MapleWING����Ա  #e#r#h ##k#n   ���ã�����ʲô������Ҫ�Ұ�æ����?#b\r\n#L2#�޸�װ������#l\r\n#L0#��������#l\r\n#L1#�������м���#l\r\n#L3#�鿴Ǳ������#l\r\n#L4#��ʼ��AP/SP#l\r\n#L5#�������#l\r\n#L6#����ְҵ����#l\r\n#L7#��ʼ������#k");
        } else if (cm.getPlayerStat("GM") == 1) {
            cm.sendSimple("�װ��Ĺ���Ա#r#h ##k���ã�����ʲô������Ҫ�Ұ�æ����?#b\r\n#L0#��������#l\r\n#L1#�������м���#l\r\n#L4#��ʼ��AP/SP#l\r\n#L7#��ʼ������#k");
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getChar().getAccountID()==1) {
                cm.maxStats();
                cm.sendOk("�������Ե�ӵ����ֵ��");
            }
            cm.dispose();
        } else if (selection == 7) {
            if (cm.getChar().getAccountID()==1) {
                cm.getPlayer().resetStats(4, 4, 4, 4);
                cm.sendOk("���Ե��Ѿ�����Ϊ4");
            }
            cm.dispose();
        } else if (selection == 1) {
            //Beginner
            if (cm.getChar().getAccountID()==1) {
                cm.maxAllSkills();
            }
            cm.dispose();
        } else if (selection == 2 && cm.getChar().getAccountID()==1) {
            var avail = "";
            for (var i = -1; i > -199; i--) {
                if (cm.getInventory( - 1).getItem(i) != null) {
                    avail += "#L" + Math.abs(i) + "##t" + cm.getInventory( - 1).getItem(i).getItemId() + "##l\r\n";
                }
                slot.push(i);
            }
            cm.sendSimple("��ѡ������Ҫ�޸����Ե�װ��:\r\n#b" + avail);
        } else if (selection == 3 && cm.getChar().getAccountID()==1) {
            var eek = cm.getAllPotentialInfo();
            var avail = "#L0#Search for potential item#l\r\n";
            for (var ii = 0; ii < eek.size(); ii++) {
                avail += "#L" + eek.get(ii) + "#Ǳ�� ID " + eek.get(ii) + "#l\r\n";
            }
            cm.sendSimple("����Ҫ�鿴�Ǹ�Ǳ��ID\r\n#b" + avail);
            status = 9;
        } else if (selection == 4) {
            cm.getPlayer().resetAPSP();
            cm.sendOk("AP��SP������Ϊ0");
            cm.dispose();
        } else if (selection == 5) {
            cm.clearSkills();
            cm.dispose();
        } else if (selection == 6) {
            cm.maxSkillsByJob();
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else if (status == 2 && cm.getChar().getAccountID()==1) {
        selected = selection - 1;
        var text = "";
        for (var i = 0; i < stats.length; i++) {
            text += "#L" + i + "#" + stats[i] + "#l\r\n";
        }
        cm.sendSimple("��ѡ�����޸� #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##k װ��������\r\n��ѡ���޸����װ���ľ�������\r\n#b" + text);
    } else if (status == 3 && cm.getChar().getAccountID()==1) {
        statsSel = selection;
        cm.playerMessage("��ǰѡ�� " + selection+"  "+slot[selected]);
        if (selection == 20) {
            cm.sendGetText("����������Ҫ�޸� #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "#    #e#r " + stats[statsSel] + "   #n����ֵ��\r\n#rע�⣺�������ֵ����ΪǱ�ܴ���.�磺Ȩ���Դ���Ϊ60002");
} else {
            cm.sendGetNumber("����������Ҫ�޸� #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "#     #e#r" + stats[statsSel] + " #n  ����ֵ��\r\n#rע�⣺�������ֵ���ܳ���32767\r\n", 0, 0, 32767);
        }
    } else if (status == 4 && cm.getChar().getAccountID()==1) {
        cm.changeStat(slot[selected], statsSel, selection);
        cm.playerMessage("��ǰѡ�� " + selection +"  "+slot[selected]+" "+ stats[statsSel]);
        cm.sendOk("��� #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "#     #e#d " + stats[statsSel] + " #n#r�Ѿ�����Ϊ " + selection + ".");
        cm.dispose();
    } else if (status == 10 && cm.getChar().getAccountID()==1) {
        if (selection == 0) {
            cm.sendGetText("What would you like to search for? (e.g. STR %)");
            return;
        }
        cm.sendSimple("#L3#" + cm.getPotentialInfo(selection) + "#l");
        status = 0;
    } else if (status == 11 && cm.getChar().getAccountID()==1) {
        var eek = cm.getAllPotentialInfoSearch(cm.getText());
        for (var ii = 0; ii < eek.size(); ii++) {
            avail += "#L" + eek.get(ii) + "#Potential ID " + eek.get(ii) + "#l\r\n";
        }
        cm.sendSimple("What would you like to learn about?\r\n#b" + avail);
        status = 9;
    } else {
        cm.dispose();
    }
}