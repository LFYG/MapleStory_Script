/* Made by RedTape fixed by Marat */
var noAdvance = "#b�Բ��������㲻��תְ����ĵȼ������� ";
var advance = "���Ŷ������������ṩ����תְŶ~#r\r\n������һת���Ҳ���.˫����ת������20���Ҳ���.\r\nתְ�󣬻����͵��ߡ���ȷ����ĵ�����ÿ����2�����ϵĿո����תְ���򱳰������������ȡ�������ߣ����ָܻ���";
var unable = "�������Ѿ�ͨ����ȫ����תְ�ˣ����ð��������ô����������������ĵ��£�ЦЦ�͹��ˡ��Ժ��кܶ����������ȥ��ԡ�";
var noThanks = "\r\n\r\n#L1#лл��������������ʱ����תְ��#l";
var check = "��ȷ�������Ϊһ�� ";
var congrats = "�����Ϊһ�� ";
var jobDir;
var status;
var newJob;
var newJobName;
var Sp;
var a=1;
var jobData = Array(
"����", 0, 
"սʿ", 100, 
"����", 110, 
"��ʿ", 111, 
"Ӣ��", 112, 
"׼��ʿ", 120, 
"��ʿ", 121, 
"ʥ��ʿ", 122, 
"ǹսʿ", 130, 
"����ʿ", 131, 
"����ʿ", 132, 
"ħ��ʦ", 200, 
"�𶾷�ʦ", 210, 
"����ʦ", 211, 
"��ħ��ʿ", 212, 
"���׷�ʦ", 220, 
"������ʦ", 221, 
"����ħ��ʿ", 222, 
"��ʦ", 230, 
"��˾", 231, 
"����", 232, 
"������", 300, 
"����", 310, 
"����", 311, 
"������", 312, 
"����", 320, 
"����", 321, 
"����", 322, 
"����", 400, 
"�̿�", 410, 
"��Ӱ��", 411, 
"��ʿ", 412, 
"����", 420, 
"���п�", 421, 
"����", 422, 
"����", 500, 
"ȭ��", 510, 
"��ʿ", 511, 
"���ӳ�", 512, 
"��ǹ��", 520, 
"��", 521, 
"����", 522, 
"��Ϸ����Ա", 800, 
"��Ϸ����Ա", 900, 
"������Ϸ����Ա", 910, 
"������", 1000, 
"����ʿ��һת��", 1100, 
"����ʿ����ת��", 1110, 
"����ʿ����ת��", 1111, 
"����ʿ����ת��", 1112, 
"����ʿ��һת��", 1200, 
"����ʿ����ת��", 1210, 
"����ʿ����ת��", 1211, 
"����ʿ����ת��", 1212, 
"����ʹ�ߣ�һת��", 1300, 
"����ʹ�ߣ���ת��", 1310, 
"����ʹ�ߣ���ת��", 1311, 
"����ʹ�ߣ���ת��", 1312, 
"ҹ���ߣ�һת��", 1400, 
"ҹ���ߣ���ת��", 1410, 
"ҹ���ߣ���ת��", 1411, 
"ҹ���ߣ���ת��", 1412, 
"��Ϯ�ߣ�һת��", 1500, 
"��Ϯ�ߣ���ת��", 1510, 
"��Ϯ�ߣ���ת��", 1511, 
"��Ϯ�ߣ���ת��", 1512, 
"սͯ", 2000, 
"ս��һת��", 2100, 
"ս�񣨶�ת��", 2110, 
"ս����ת��", 2111, 
"ս����ת��", 2112, 
"Ԥ����", 3000, 
"���鷨ʦ��һת��", 3200, 
"���鷨ʦ����ת��", 3210, 
"���鷨ʦ����ת��", 3211, 
"���鷨ʦ����ת��", 3212, 
"����������һת��", 3300, 
"������������ת��", 3310, 
"������������ת��", 3311, 
"������������ת��", 3312, 
"��еʦ��һת��", 3500, 
"��еʦ����ת��", 3510, 
"��еʦ����ת��", 3511, 
"��еʦ����ת��", 3512
/*"��ħ����(һת) ", 3100,
"��ħ����(��ת) ", 3110,
"��ħ����(��ת) ", 3111,
"��ħ����(��ת) ", 3112,
"˫����(һת) ", 3200,
"˫����(��ת) ", 3210,
"˫����(��ת) ", 3211,
"˫����(��ת) ", 3212,
"��ǹ��(һת) ", 520,
"��ǹ��(��ת) ", 530,
"��ǹ��(��ת) ", 531,
"��ǹ��(��ת) ", 532*/);
var first;
var sd;
var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.dispose();
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
	cm.dispose();
    }
    if (status == 0) {
        if (cm.getJob() % 100 == 0) {
            noAdvance += cm.getJob() % 1000 == 0 ? "10": "30";
        } else {
            noAdvance += cm.getJob() % 10 == 0 ? "70": "120";
            noAdvance += " ������תְ.\r\n�����ڵĵȼ�Ϊ " + cm.getPlayerStat("LVL") + " ����" + "\r\n#r��ְҵ(��ħ��˫�󡢻���)�Ѿ��޸�Ϊ�Զ�תְ!#r\r\n������һת���Ҳ���.˫����ת������20���Ҳ���.";
        }
    }
    if ((cm.getJob() % 10 == 2 && !cm.getJob() >= 433 && !cm.getJob() <= 430) || cm.getJob() == 900 || cm.getJob() == 910 || cm.getJob() == 800 || (cm.getJob() > 1000 && cm.getJob() < 1500 && cm.getJob() % 10 == 1)) {
        cm.sendOk(unable);
        cm.dispose();
        return;
    } else {
        if (status == 0) {
            if (cm.getJob() % 1000 == 0 || cm.getJob() == 0 || cm.getJob() == 3000) {
                if ((cm.getPlayerStat("LVL") == 8 || cm.getPlayerStat("LVL") == 9) && cm.getJob() != 2000) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 2 == 0 && (jobData[i + 1] == (200 + cm.getJob()))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";
                } else if (cm.getPlayerStat("LVL") >= 10) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 2 == 0) if ((jobData[i + 1] % 100 == 0) && (jobData[i + 1] > cm.getJob()) && (jobData[i + 1] < (600 + cm.getJob()))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";
                } else {
                    cm.sendOk("" + noAdvance + " ����8������תְ�������ڵĵȼ�Ϊ " + cm.getPlayerStat("LVL") + " ����");
                    cm.dispose();
                    return;
                }
                first = true;
            } else if (cm.getJob() % 100 == 0) { //�ڶ���תְ
                if (cm.getPlayerStat("LVL") >= 30) {
                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 2 == 0 && (jobData[i + 1] % 10 == 0 && jobData[i + 1] % 100 != 0)) && (jobData[i + 1] > cm.getJob() && jobData[i + 1] <= (cm.getJob() + 30))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";
                } else {
                    cm.sendOk(noAdvance);
                    cm.dispose();
                    return;
                }
            } else if (cm.getJob() % 10 == 0 || cm.getJob() % 10 == 1) { // ������\4��תְ
                if (cm.getPlayerStat("LVL") >= (cm.getJob() % 10 == 1 ? 120 : 70)) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 2 == 0 && (jobData[i + 1] - 1 == cm.getJob())) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";
                } else {
                    cm.sendOk(noAdvance);
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk(unable);
                cm.dispose();
                return;
            }
            advance += noThanks;
            cm.sendSimple(advance);
        } else if (status == 1) {
            if (selection == 1) {
                cm.sendOk("�����ڲ���תְ���Ǻðɡ�������Ҫתְ���������ң���ʱʱ�̿������");
                cm.dispose();
            } else {
                if (a=1) {
                    newJob = selection;
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 2 == 0 && jobData[i + 1] == newJob) newJobName = jobData[i];
                    cm.sendNext("���Ѿ���Ϊһ�� #b" + newJobName + "#k ��\r\n\r\n#r - ��ħ�������֡�˫���Ѿ���Ϊ�Զ�תְ�������ɼ����쳣����ϵ����")
                } else {
                    cm.sendNext("����תְ�Ļ�������װ���������������ڳ��������ӡ�")
                    cm.dispose();
                }
            } //selection
        /*} else if (status == 2) {
            if (!cm.MissionStatus(cm.getPlayer().getId(),110414000, 0, 2)){//�鿴ʱ��������û
		cm.sendOk("#r�Ƿ��Ĳ�����Ϊ��ȷ��ע������������ϸ�ۿ�����5����ٵ����һ����")
		cm.MissionDelete(cm.getPlayer().getId(), 110414000);//�����������¼���
				cm.dispose();
		}else{
			*/
            cm.changeJob(newJob);
            // ��û�и���SP�ĺ�����giveSp()//T050 �����ȼ��͸����˵�Sp

            if (newJob == 2100) { //�����ս���һת
               // cm.teachSkill(21000000, 0, 10); //ì����ǿ��
                //cm.teachSkill(21001003, 0, 10); //����ì
            } else if (newJob == 2110) { //ս��ڶ�ת
               /* cm.teachSkill(21100000, 0, 10);
                cm.teachSkill(21100002, 0, 10);
                cm.teachSkill(21100004, 0, 10);
                cm.teachSkill(21100005, 0, 10);*/
            } else if (newJob == 2111) { //ս�����ת
              //  cm.teachSkill(21110002, 0, 10);
            } else if (newJob == 2112) { //ս�����ת
              /*  cm.teachSkill(21120001, 0, 10); //��������
                cm.teachSkill(21120002, 0, 10); //ս��֮��
                cm.teachSkill(21121003, 0, 10); //ս�����־
                cm.teachSkill(21121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(21120004, 0, 10); //2280014[���ܲ�]���ز���
                cm.teachSkill(21120005, 0, 10); //2280013[���ܲ�]��������
                cm.teachSkill(21120006, 0, 10); //2280015[���ܲ�]��ʯ�ǳ�
                cm.teachSkill(21120007, 0, 10); //2280016[���ܲ�]ս��֮��*/
            } else if (newJob == 431) {
               /* cm.teachSkill(4311003, 0, 10);*/
            } else if (newJob == 432) {
               /* cm.teachSkill(4321000, 0, 10);
                cm.teachSkill(4321001, 20, 20);*/
            } else if (newJob == 434) {
               /* cm.teachSkill(4331002, 0, 10);
                cm.teachSkill(4331005, 0, 10);*/
            } else if (newJob == 434) {
             /*   cm.teachSkill(4341000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(4340001, 0, 10); //�����ö�Һ
                cm.teachSkill(4341002, 0, 10); //2280030[���ܲ�]�ռ�ն 
                cm.teachSkill(4341003, 0, 10); //����ը��
                cm.teachSkill(4341004, 0, 10); //���߼���
                cm.teachSkill(4341005, 0, 10); //2280031[���ܲ�]��������
                cm.teachSkill(4341006, 0, 10); //�����ٻ�
                cm.teachSkill(4341007, 0, 10); //����*/
            } else if (newJob == 1111) { //����ʿ
               /* cm.teachSkill(11111004, 0, 10); //�������
                cm.teachSkill(11110005, 0, 10); //���׶���*/
            } else if (newJob == 1211) { //����ʿ
                /*cm.teachSkill(12111003, 0, 10); //�콵����
                cm.teachSkill(12111004, 0, 10); //��ħ��*/
            } else if (newJob == 1311) { //����ʹ��
               /* cm.teachSkill(13111002, 0, 10); //�������
                cm.teachSkill(13110003, 0, 10); //�����*/
            } else if (newJob == 1411) { //ҹ����
            /*    cm.teachSkill(14111005, 0, 10); //�����������
                cm.teachSkill(14110004, 0, 10); //�����ö�Һ*/
            } else if (newJob == 1511) { //��Ϯ��
              /*  cm.teachSkill(15111004, 0, 10); //����ȭ
                cm.teachSkill(15111005, 0, 10); //��������*/
            } else if (newJob == 412) { //��ʿ
              /*  cm.teachSkill(4120002, 0, 10); //�ٶ���
                cm.teachSkill(4120005, 0, 10); //�����ö�Һ
                cm.teachSkill(4121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(4121003, 0, 10); //2280006[���ܲ�]����
                cm.teachSkill(4121004, 0, 10); //���߷���
                cm.teachSkill(4121006, 0, 10); //��������
                cm.teachSkill(4121007, 0, 10); //2280010[���ܲ�]�����������
                cm.teachSkill(4121008, 0, 10); //���߳��*/
            } else if (newJob == 422) { //����
              /*  cm.teachSkill(4220002, 0, 10); //�ٶ���
                cm.teachSkill(4220005, 0, 10); //�����ö�Һ
                cm.teachSkill(4221000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(4221001, 0, 10); //��ɱ
                cm.teachSkill(4221003, 0, 10); //2280006[���ܲ�]����
                cm.teachSkill(4221004, 0, 10); //���߷���
                cm.teachSkill(4221006, 0, 10); //��Ļ��
                cm.teachSkill(4221007, 0, 10); //һ��˫��*/
            } else if (newJob == 312) { //������
               /* cm.teachSkill(3120005, 0, 10); //�����
                cm.teachSkill(3121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(3121002, 0, 10); //���۾���
                cm.teachSkill(3121003, 0, 10); //2280005[���ܲ�]���������
                cm.teachSkill(3121004, 0, 10); //�������
                cm.teachSkill(3121006, 0, 10); //����
                cm.teachSkill(3121007, 0, 10); //���˼�
                cm.teachSkill(3121008, 0, 10); //���о���*/
            } else if (newJob == 322) { //
               /* cm.teachSkill(3221003, 0, 10); //2280005[���ܲ�]���������
                cm.teachSkill(3220004, 0, 10); //������
                cm.teachSkill(3221000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(3221001, 0, 10); //��͸��
                cm.teachSkill(3221002, 0, 10); //���۽�
                cm.teachSkill(3221005, 0, 10); //�����
                cm.teachSkill(3221006, 0, 10); //���ۼ�
                cm.teachSkill(3221007, 0, 10); //һ��Ҫ����*/
            } else if (newJob == 212) { //��
             /*   cm.teachSkill(2121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(2121001, 0, 10); //����֮��
                cm.teachSkill(2121002, 0, 10); //ħ������
                cm.teachSkill(2121003, 0, 10); //�����
                cm.teachSkill(2121004, 0, 10); //2280004[���ܲ�]�ռ�����
                cm.teachSkill(2121005, 0, 10); //����ħ��
                cm.teachSkill(2121006, 0, 10); //��������
                cm.teachSkill(2121007, 0, 10); //�콵����*/
            } else if (newJob == 222) { //����
              /*  cm.teachSkill(2221000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(2221001, 0, 10); //����֮��
                cm.teachSkill(2221002, 0, 10); //ħ������
                cm.teachSkill(2221003, 0, 10); //������
                cm.teachSkill(2221004, 0, 10); //2280004[���ܲ�]�ռ�����
                cm.teachSkill(2221005, 0, 10); //��ħ��
                cm.teachSkill(2221006, 0, 10); //��������
                cm.teachSkill(2221007, 0, 10); //��˪����*/
            } else if (newJob == 232) { //����
               /* cm.teachSkill(2321000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(2321001, 0, 10); //����֮��
                cm.teachSkill(2321002, 0, 10); //ħ������
                cm.teachSkill(2321003, 0, 10); //ǿ��ʥ��
                cm.teachSkill(2321004, 0, 10); //2280004[���ܲ�]�ռ�����
                cm.teachSkill(2321005, 0, 10); //ʥ��֮��
                cm.teachSkill(2321006, 0, 10); //������
                cm.teachSkill(2321007, 0, 10); //2280009[���ܲ�]��â�ɼ�
                cm.teachSkill(2321008, 0, 10); //ʥ������*/
            } else if�� (newJob == 112) {
             /*   cm.teachSkill(1121001, 0, 10); //��ʯ
                cm.teachSkill(1121002, 0, 10); //����̩ɽ
                cm.teachSkill(1121006, 0, 10); //2280012[���ܲ�]ͻ��
                cm.teachSkill(1121008, 0, 10); //��������
                cm.teachSkill(1121010, 0, 10); //��������
                //cm.teachSkill(1121009,0,10);//Ӣ��֮��
                cm.teachSkill(1120003, 0, 10); //2280007[���ܲ�]����һ��
                cm.teachSkill(1120004, 0, 10); //������˹
                cm.teachSkill(1121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ*/
            } else if (newJob == 122) {
               /* cm.teachSkill(1220005, 0, 10); //������˹
                cm.teachSkill(1220006, 0, 10); //������
                cm.teachSkill(1220010, 0, 10); //2280008[���ܲ�]����һ��
                cm.teachSkill(1221000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(1221001, 0, 10); //��ʯ
                cm.teachSkill(1221002, 0, 10); //�ȶ���ɽ
                cm.teachSkill(1221003, 0, 10); //ʥ��֮��
                cm.teachSkill(1221004, 0, 10); //ʥ��֮��
                cm.teachSkill(1221007, 0, 10); //2280012[���ܲ�]ͻ��
                cm.teachSkill(1221009, 0, 10); //��������
                cm.teachSkill(1221011, 0, 10); //ʥ��*/
            } else if (newJob == 132) {
               /* cm.teachSkill(1320005, 0, 10); //������˹
                cm.teachSkill(1320006, 0, 10); //��������
                cm.teachSkill(1320008, 0, 10); //�������
                cm.teachSkill(1320009, 0, 10); //���ף��
                cm.teachSkill(1321000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(1321001, 0, 10); //��ʯ
                cm.teachSkill(1321002, 0, 10); //����̩ɽ
                cm.teachSkill(1321003, 0, 10); //2280012[���ܲ�]ͻ��
                cm.teachSkill(1321007, 0, 10); //�������*/
            } else if (newJob == 512) {
               /* cm.teachSkill(5121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(5121002, 0, 10); //������
                cm.teachSkill(5121003, 0, 10); //��������
                cm.teachSkill(5121004, 0, 10); //����ָ
                cm.teachSkill(5121005, 0, 10); //����
                // cm.teachSkill(5121006,0,10);
                cm.teachSkill(5121007, 0, 10); //����ȭ
                //cm.teachSkill(5121008,0,5);
                cm.teachSkill(5121009, 0, 10); //��������
                cm.teachSkill(5121010, 0, 10); //�Ż�����
                cm.teachSkill(5121001, 0, 10); //Ǳ����Ԩ*/
            } else if (newJob == 522) {
                /*cm.teachSkill(5220001, 0, 10); //����ǿ��
                cm.teachSkill(5220011, 0, 10); //��������
                cm.teachSkill(5220002, 0, 10); //����������̨
                cm.teachSkill(5221000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(5221003, 0, 10); //��̺ʽ��Ϯ
                cm.teachSkill(5221004, 0, 10); //�����籩
                cm.teachSkill(5221009, 0, 10); //�������
                cm.teachSkill(5221006, 0, 10); //��װ*/
                //cm.teachSkill(5221007, 0, 10); //������
                //cm.teachSkill(5221008, 0, 10); //�����ڻ�
            } //newjob
            if (first) {
                //cm.resetAp();
            } //�����һת������AP

            if (newJob == 100 || newJob == 1100) {
                cm.gainItem(1302007, 1)
            } else if (newJob == 110 || newJob == 1110) {
                cm.gainItem(1402002, 1)
            } else if (newJob == 111 || newJob == 1111) {
                cm.gainItem(1402003, 1)
            } else if (newJob == 112) {
                cm.gainItem(1402004, 1)
            } else if (newJob == 120) {
                cm.gainItem(1422004, 1)
            } else if (newJob == 121) {
                cm.gainItem(1422005, 1)
            } else if (newJob == 122) {
                cm.gainItem(1422027, 1)
            } else if (newJob == 130) {
                cm.gainItem(1432002, 1)
            } else if (newJob == 131) {
                cm.gainItem(1432004, 1)
            } else if (newJob == 132) {
                cm.gainItem(1432007, 1)
            } else if (newJob == 200 || newJob == 1200) {
                cm.gainItem(1372063, 1)
            } else if (newJob == 210 || newJob == 220 || newJob == 230 || newJob == 1210) {
                cm.gainItem(1372066, 1)
            } else if (newJob == 211 || newJob == 221 || newJob == 231 || newJob == 1211) {
                cm.gainItem(1372069, 1)
            } else if (newJob == 212 || newJob == 222 || newJob == 232) {
                cm.gainItem(1372072, 1)
            } else if (newJob == 300 || newJob == 1300 || newJob == 3300) {
                cm.gainItem(1452093, 1);
                cm.gainItem(1462078, 1);
            } else if (newJob == 310 || newJob == 1310 || newJob == 3310) {
                cm.gainItem(1452096, 1);
            } else if (newJob == 311 || newJob == 1311 || newJob == 3311) {
                cm.gainItem(1452099, 1);
            } else if (newJob == 312 || newJob == 3312) {
                cm.gainItem(1452101, 1);
            } else if (newJob == 320) {
                cm.gainItem(1462081, 1);
            } else if (newJob == 321) {
                cm.gainItem(1462084, 1);
            } else if (newJob == 322) {
                cm.gainItem(1462086, 1);
            } else if (newJob == 400 || newJob == 1400) {
                cm.gainItem(1332104, 1);
                cm.gainItem(1472104, 1);
            } else if (newJob == 410 || newJob == 1410) {
                cm.gainItem(1472107, 1);
            } else if (newJob == 411 || newJob == 1411) {
                cm.gainItem(1472110, 1);
            } else if (newJob == 412) {
                cm.gainItem(1472112, 1);
            } else if (newJob == 420) {
                cm.gainItem(1332107, 1);
            } else if (newJob == 421) {
                cm.gainItem(1332110, 1);
            } else if (newJob == 422) {
                cm.gainItem(1332115, 1);
            } else if (newJob == 500 || newJob == 1500 || newJob == 3500) {
                cm.gainItem(1482066, 1);
                cm.gainItem(1492066, 1)
            } else if (newJob == 510 || newJob == 1510 || newJob == 3510) {
                cm.gainItem(1482069, 1);
            } else if (newJob == 511 || newJob == 1511 || newJob == 3511) {
                cm.gainItem(1482072, 1);
            } else if (newJob == 512 || newJob == 3512) {
                cm.gainItem(1482074, 1);
            } else if (newJob == 520) {
                cm.gainItem(1492069, 1);
            } else if (newJob == 521) {
                cm.gainItem(1492072, 1);
            } else if (newJob == 522) {
                cm.gainItem(1492074, 1);
            } else if (newJob == 2100) {
                cm.gainItem(1442096, 1);
            } else if (newJob == 2110) {
                cm.gainItem(1442099, 1);
            } else if (newJob == 2111) {
                cm.gainItem(1442102, 1);
            } else if (newJob == 2112) {
                cm.gainItem(1442105, 1);
            } else if (newJob == 3200) {
                cm.gainItem(1382085, 1);
            } else if (newJob == 3210) {
                cm.gainItem(1382088, 1);
            } else if (newJob == 3211) {
                cm.gainItem(1382091, 1);
            } else if (newJob == 3212) {
                cm.gainItem(1382094, 1);
            }
            if (Sp) {
                cm.sendNext("����С���ֵ����������������ڿ�ʼ���Ѿ���#b" + newJobName + "#k�ˣ�\r\n�Ҹ�����һЩС����~�뵽����������~\r\n\r\nĿǰ��ĵȼ���" + cm.getPlayerStat("LVL") + "�������˵ȼ�תְ��ϵͳΪ�㲹����" + (cm.getPlayerStat("LVL") - 10) * 3 + "��SP��")
                cm.dispose();
            } else {
                cm.sendOk("����С���ֵ����������������ڿ�ʼ���Ѿ���#b" + newJobName + "#k�ˣ�\r\n�Ҹ�����һЩС����~�뵽����������~");
                cm.dispose();
            }
        }	
    }
}

function giveSp() { //Ҫ����תְְҵ���� ����
    if (cm.getJob() == 200 && cm.getPlayerStat("LVL") > 8) { //�����ħ��ʦ���ҳ�����תְ�ȼ� 8
        Sp = true;
        cm.setRemainingSp((cm.getPlayerStat("LVL") - 8) * 3)
    } else if (cm.getJob() % 1000 == 0 || cm.getJob() == 0 || cm.getJob() == 3000) { //��һ��תְ���ҳ�����תְ�ȼ� 10
        Sp = true
        cm.setRemainingSp((cm.getPlayerStat("LVL") - 10) * 3)
    }
}