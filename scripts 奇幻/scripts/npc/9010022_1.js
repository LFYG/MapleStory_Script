/*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ������ͼ
 */

var status = 0;
var aaa ="#fEffect/CharacterEff/1082565/2/0#";
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
function start() 
	{
    status = -1;
    action(1, 0, 0);}
function action(mode, type, selection) 
	{
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;}
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���  #r#h ##k  ���ã��봫�͵�ʲô�ط�:\r\n";
		selStr += "#L1#" + eff + "#b �����#l"
        selStr += "#L2#" + eff + "#b ���ִ�#l"
		selStr += "#L3#" + eff + "#b ħ������#l"
		selStr += "#L4#" + eff + "#b ��ʿ����#l"

		selStr += "#L5#" + eff + "#b ��߳�#l"
		selStr += "#L6#" + eff + "#b ��ľ��#l"
		selStr += "#L7#" + eff + "#b ����֮��#l"
		selStr += "#L8#" + eff + "#b ��������#l"

		selStr += "#L9#" + eff + "#b ��̲#l"
		selStr += "#L10#" + eff + "#b ��ŷ��#l"
		selStr += "#L11#" + eff + "#b ŵ����˹#l"
		selStr += "#L12#" + eff + "#b ˮ������#l"

		selStr += "#L13#" + eff + "#b �����#l"
		selStr += "#L14#" + eff + "#b �ٲ���#l"
		selStr += "#L15#" + eff + "#b ���ﰲ��#l"
		selStr += "#L16#" + eff + "#b �������#l"

		selStr += "#L17#" + eff + "#b �����#l"
		selStr += "#L18#" + eff + "#b ���¶�#l"
		selStr += "#L19#" + eff + "#b ���֮��#l"
		selStr += "#L20#" + eff + "#b ʱ�����#l"

		selStr += "#L21#" + eff + "#b ������#l"
		selStr += "#L22#" + eff + "#b ����̩#l"
		selStr += "#L23#" + eff + "#b ����ѩ��#l"
		selStr += "#L24#" + eff + "#b ����ϣ��#l"
		//selStr += "#L25#" + eff + "#b ���¶�˹̹#l"
	
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
                cm.warp(104000000);
		        cm.sendOk("��ӭ����������ۣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 2:
                cm.warp(100000000);
		        cm.sendOk("��ӭ���������ִ壬ף����Ϸ��죡");
				cm.dispose();
            break;
		case 3:
                cm.warp(101000000);
		        cm.sendOk("��ӭ������ħ�����֣�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 4:
                cm.warp(102000000);
		        cm.sendOk("��ӭ��������ʿ���䣬ף����Ϸ��죡");
				cm.dispose();
            break;
		case 5:
                cm.warp(220000000);
		        cm.sendOk("��ӭ��������߳ǣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 6:
                cm.warp(240000000);
		        cm.sendOk("��ӭ��������ľ�壬ף����Ϸ��죡");
				cm.dispose();
            break;
		case 7:
                cm.warp(105000000);
		        cm.sendOk("��ӭ����������֮�ǣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 8:
                cm.warp(103000000);
		        cm.sendOk("��ӭ�������������У�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 9:
                cm.warp(120040000);
		        cm.sendOk("��ӭ��������̲��ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 10:
                cm.warp(101050000);
		        cm.sendOk("��ӭ��������ŷ�ף�ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 11:
                cm.warp(120000000);
		        cm.sendOk("��ӭ������ŵ����˹��ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 12:
                cm.warp(230000000);
		        cm.sendOk("��ӭ������ˮ�����磬ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 13:
                cm.warp(400000000);
		        cm.sendOk("��ӭ����������ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 14:
                cm.warp(251000000);
		        cm.sendOk("��ӭ�������ٲ��ã�ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 15:
                cm.warp(260000000);
		        cm.sendOk("��ӭ���������ﰲ�أ�ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 16:
                cm.warp(261000000);
		        cm.sendOk("��ӭ������������ǣ�ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 17:
                cm.warp(140000000);
		        cm.sendOk("��ӭ�������������ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 18:
                cm.warp(325090010);
		        cm.sendOk("��ӭ���������¶�˹̹��ף����Ϸ��죡");
				cm.dispose();
			break;
		case 19:
                cm.warp(200000000);
		        cm.sendOk("��ӭ���������֮�ǣ�ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 20:
                cm.warp(270000000);
		        cm.sendOk("��ӭ������ʱ����ף����Ϸ��죡");
				cm.dispose();
            break;			
		
            			
		case 21:
                cm.warp(250000000);
		        cm.sendOk("��ӭ���������꣬ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 22:
                cm.warp(300000000);
		        cm.sendOk("��ӭ����������̩Ӫ�أ�ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 23:
                cm.warp(211000000);
		        cm.sendOk("��ӭ����������ѩ��ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 24:
                cm.warp(401000000);
		        cm.sendOk("��ӭ����������ϣ�������ܲ���ף����Ϸ��죡");
				cm.dispose();
            break;			
		case 25:
                cm.warp(310000000);
				cm.dispose();
            break;
        
        }
    }
}
