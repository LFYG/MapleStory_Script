/*
���
�����콱
2015.1.30
*/

var status = -1;
var ok = -1;
var ca = java.util.Calendar.getInstance();
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var yesno;

function start() {
    return action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        var str = "�ϸ��µ�����ֱ�����Ѿ������ˣ����ڿ�ʼ�䷢ǰ20λ�񽱵���ң�����콱�ɣ���ϲ��ϲ��\r\nû�л񽱵����Ҳ��Ҫ���ģ�ÿ���¶��л���Ŷ!\r\n#rĿǰ�䷢���ǣ�#b\r\n";
		str += "���ڱ��µ�һ�ο��ŵ���ϵͳ����ʱû�����¼�¼.\r\n";
		str += "#L1##b���µ�������콱��[#r����콱#k]#l\r\n\r\n";
		if (cm.getPlayer().getGMLevel() >= 6) {			
		    //str += "#L1##b���µ�������콱��[#r����콱#k]#l\r\n\r\n";
			str += "\r\n#L3##r���ǹ���Ա ��ջ�����ּ�¼ ˢ������#l";
        }
        cm.sendSimple(str);
    } else if (status == 1) {
        if (selection == 1) {
			 var i = 0;
            var m ="����������У�ע�Ᵽ���ո񣬷����޷�������\r\n";
			 var pairs = cm.getConnection().prepareStatement("SELECT name,dyjf FROM dyjf order by dyjf desc limit 20").executeQuery();
			 var i = 0;
			 while (pairs.next()) {
                 i++;
                 m+="#L"+i+"##b��"+i+"��\t#r��ɫ��:"+pairs.getString("name")+"\t\t#d����:"+pairs.getString("dyjf")+"#l\r\n";
            }
		    if (i != 0) {
                   text = cm.sendOk(m);
            }else {
					text = cm.sendOk("����ϵ����Աˢ�»��棡!");
			}
    //     } else if (selection == 2) {
				// if(getWanJiaZt(cm.getChar().getId()) != 0){
				// 	 cm.sendOk("��� ���Ѿ���ȡ�����µĵ��㽱����");
				// 	cm.dispose();
				// }else if(getWanJiaZt(cm.getChar().getId()) == -1){
				// 	cm.sendOk("��� �������µ����� δ������� �޷���ȡ����");
				// 	cm.dispose();
				// }else if (getWanJiaZt(cm.getChar().getId()) == 0){
				// 	cm.sendSimple("#L"+getMc(cm.getChar().getName())+"##e��ȡ���㽱��!#l");
				// }
		
    //             cm.sendOk(getWanJiaZt(cm.getChar().getId()));
				// //cm.sendOk("#L"+getMc(cm.getChar().getName())+"��� �װ������ �������µĵ����л�õ�" +getMc(cm.getChar().getName())+"�� ����ȷ������ȡ��Ľ���#l"));
            
        } else if (selection == 3) {
			cm.sendYesNoS("ȷ��Ҫ��յ��������",2);
			yesno = 1;
        }

    } else if (status == 2) {
	if(yesno == 1){
	      clean();
	      cm.sendOk("����������б��������Ѿ����£������Ѿ���գ�");
		  cm.dispose();
		return;
		}
	    var jpm = getpaiming();
	if(selection!=jpm){        
          cm.sendOk("�Բ��������Ǹ���������");
          cm.dispose();
		return;
		}
	if(getLingqu() != 0){
					cm.sendOk("��� ���Ѿ���ȡ�����µĵ��㽱����");
					cm.dispose();
					return;
				}
    if(cm.getSpace(2) < 3 || cm.getSpace(3) < 1){
					cm.sendOk("�㱳���ո���");
					cm.dispose();
					return;
				}
	//�һ�����
		switch (selection) {
		case 1://��һ������
				// 		-�� 1 ��
				// 3994577,1  iPodtouch
				// 2430453,5  ��˵�챦ʯ��ͻ�������������޵���
				// 2340000,5  ף������
				// 2432971,2  �ļ�����������
				cm.gainItem(3994577,1);
				cm.gainItem(2430453,5);
				cm.gainItem(2340000,5);
				cm.gainItem(2432971,2);
				setLingqu();
				cm.getPlayer().getMap().startMapEffect("[����������б���]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����", 5121043);
				cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����");
				/*cm.getPlayer().getMap().startMapEffect("[����������б���]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����", 5121043);
				cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����");
				cm.getPlayer().getMap().startMapEffect("[����������б���]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����", 5121043);
				cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����");
				cm.getPlayer().getMap().startMapEffect("[����������б���]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����", 5121043);
				cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����1������ϲ��ϲ����");*/
				cm.sendOk("��ϲ�ɹ���ȡ����");
				cm.dispose();
            break;
		case 2:
		case 3:
		case 4://2-4������
				// 		-�� 2-4 ��
				// 99999���
				// 2430453,3   ��˵�챦ʯ��ͻ�������������޵���
				cm.gainNX(99999);
				cm.gainItem(2430453,3);
				cm.gainItem(2340000,3);
				setLingqu();
				cm.getPlayer().getMap().startMapEffect("[����������б���]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����2-4������ϲ��ϲ����", 5121043);
				cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����2-4������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����2-4������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����2-4������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����2-4������ϲ��ϲ����");
				cm.sendOk("��ϲ�ɹ���ȡ����");
				cm.dispose();
				break;
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10://5-10������
			// -�� 5-10 ��
			// 58888���
			// 2430453,2   ��˵�챦ʯ��ͻ�������������޵���
			// 4001680,108 ���ӱ�
				cm.gainNX(58888);
				cm.gainItem(2430453,2);
				cm.gainItem(2340000,2);
				setLingqu();
				cm.getPlayer().getMap().startMapEffect("[����������б���]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����5-10������ϲ��ϲ����", 5121043);
				cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����5-10������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����5-10������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����5-10������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����5-10������ϲ��ϲ����");
				cm.sendOk("��ϲ�ɹ���ȡ����");
				cm.dispose();
            break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
		case 20://11-20������
			// -�� 5-10 ��
			// 9999���
			// 2430453,1   ��˵�챦ʯ��ͻ�������������޵���
			// 4001680,58 ���ӱ�
				cm.gainNX(9999);
				cm.gainItem(2430453,1);
				cm.gainItem(2340000,1);
				setLingqu();
				cm.getPlayer().getMap().startMapEffect("[����������б���]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����11-20������ϲ��ϲ����", 5121043);
				cm.worldMessage(1,"[ȫ������]:��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����11-20������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����11-20������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����11-20������ϲ��ϲ����");
				cm.worldMessage(0x19,"[����������б���]" + " : " + "��"+ cm.getChar().getName() +"���ɹ���ȡ�˵������л��ֱ�����11-20������ϲ��ϲ����");
                cm.sendOk("��ϲ�ɹ���ȡ����");
                cm.dispose();
            break;
		default:
		   //�������������� ����ʾ��Ϣ���
		   	cm.sendOk("��Ǹ����û������ǰ20�������¸�����Ŭ������");
		   	cm.dispose();
		}
      setLingqu();//��Ҫ��������ȡ״̬
    }
}

function getJJPM() {
    var getjj = cm.getConnection().prepareStatement("SELECT id FROM dyjf WHERE name = ?");
    getjj.setString(1, cm.getName());
    getjj.executeQuery();
    var gg = 999;
    if (getjj.next()) {
        gg = getjj.getInt("id");
    }
    return gg;
}
function getpaiming() {
    var rs = 999;
    var getLQ = cm.getConnection().prepareStatement("SELECT id FROM dyjf where name = ?");
    getLQ.setString(1, cm.getName());
    getLQ = getLQ.executeQuery();
    if (getLQ.next()) {
        rs = getLQ.getInt("id");
    }
    return rs;
}


function getLingqu() {
    var rs = 999;
    var getLQ = cm.getConnection().prepareStatement("SELECT lingqu FROM dyjf where name = ?");
    getLQ.setString(1, cm.getName());
    getLQ = getLQ.executeQuery();
    if (getLQ.next()) {
        rs = getLQ.getInt("lingqu");
    }
    return rs;
}

function setLingqu() {
    var getLQ = cm.getConnection().prepareStatement("Update dyjf set lingqu = 1 where name = ?");
    getLQ.setString(1, cm.getName());
    getLQ = getLQ.executeUpdate();
}

function clean() {
    var qingkong = cm.getConnection().prepareStatement("TRUNCATE TABLE dyjf").executeUpdate();
    var baocun = cm.getConnection().prepareStatement("insert into dyjf (name,dyjf,lingqu) select name,dyjf,0 as lingqu from characters where gm<6 order by characters.dyjf desc limit 20").executeUpdate();
    var cleanmonth = cm.getConnection().prepareStatement("update characters set dyjf = 0").executeUpdate();
}