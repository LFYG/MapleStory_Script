/* 
   ����������ע��
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendOk("��ӭ��������ð�յ�\r\n�����������£�\r\n���鱶��Ϊ:200.(��˫��1.5������=600)\r\nרҵ���ܡ�

ѧԺϵͳ�����桢����BOSS���Ѿ��޸�.\r\nתְ�����г��ı�³.�齱�뵽ת����.\r\n�����Ľ���ȺΪ

221978957.��վ:mxdhy.com\r\n������кõĽ��������ϵ����Ա.����BUG�ύ������Ա�кõĽ���Ӵ.

���ף����Ϸ���.лл֧�ֻ���ð�յ�!");
			cm.dispose();
		}
	}
}