var Petlist = new Array(); //���ڴ洢��װ����˵�ѷų����ĳ������Ϊ MaplePet�����ݡ�
var petname;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("�õġ��´��ټ���");
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("�õġ��´��ټ���");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {					
			cm.sendOk("#r"+cm.mxdmz()+"ð�յ�#k,�ҿ���Ϊ���ṩ���ǳ������.\r\n\r\n#b��ʾ:#k\r\n1.#b�޸ĳ�������ÿ������1000��������.#k\r\n2.#b�޸�ǰ�뽫���ĳ����ٻ�����#k.#b�����޷��޸�#k.\r\n3.#b����ʹ�÷Ƿ�����.�Լ��������.��Υ����Ŵ���.#k");			
		}else if (status == 1){
			for(i = 0; i < 3; i++){
				if(cm.getChar().getPet(i) != null){
					Petlist.push(cm.getChar().getPet(i)); //ѭ������ɫװ������������λ�ã������װ������ͰѸó������ѹ�� Petlist����
				}				
			}
			if(Petlist.length > 0){
				if(Petlist.length > 1){  //�ж�Petlist�ĳ��ȡ�Ҳ����˵�ų����ĳ��������
					cm.sendOk("#rֻ�зų�һֻ����ʱ������ȷ��ʶ��!");
					cm.dispose();
				}else{
					var petid = Petlist[0].getItemId();					
					var text = "#r����ҪΪ #v" + petid + "# �����֡� "
					text += "#r���������ǣ�#r" +  Petlist[0].getName() + "#k\r\n\r\n";				
					text += "#r��ȷ��Ҫ��������������";
					cm.sendYesNo(text);										
				}
			}else{
				cm.sendOk("#r���Ҫ�����ĳ���ų���!");
				cm.dispose();
			}			
		}else if (status == 2){			
			cm.sendGetText("#r�������µĳ������֣�\r\n#rע�⣺Ϊ�˱������,�뾡����Ҫʹ�ø��ӵķ��š������ĵ�\r\n ");
		}else if (status == 3){
			petname = cm.getText().trim();
			if(petname.getBytes("GBK").length > 12 || petname.getBytes("GBK").length < 2){			
				cm.sendOk("#r������ĳ������ֱ�����2-10���ַ�֮��,һ�������������ַ�!");
				cm.dispose();
			}else{			
				if(checktext(petname) == false){
					
					cm.sendOk("#r�Բ���,���ĳ��ﲻ��ʹ���������!");
					cm.dispose();
				}else{
					cm.sendYesNo("#r�˴γ��������Ҫ��ȡ1000������������\r\n#rȷ��Ҫ��#r " + Petlist[0].getName() + " #k�ĳ�#r " + petname + " #k��?");
				}							
			}
		}else if (status == 4){	
			if(cm.getRw15() >= 1000){
				cm.gainRw15(-1000);			
				Petlist[0].setName(petname);			
				cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.changePetName(cm.getChar(),petname,0));			
				cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePet(Petlist[0],true));
				Petlist[0].saveToDb();
				cm.sendOk("��������ɹ�!");
			}else{
				cm.sendOk("�Բ���,��û���㹻�������㽻��������,�Ҳ��ܰ����ĳ�������֡�");
			}
			cm.dispose();
		}
	}
}	

function checktext(text){    //�ַ������ǹ���
    var gl = new Array("�����","g-m","ɵB","GM","gm","5Ԫ","5Ԫ��","����","����Ա","����","��","SB");
    for(i=0; i<gl.length; i++){
	if(text.indexOf(gl[i]) >= 0){		
		return false;
		break;    
	}
    }    
    return true;    
}  


