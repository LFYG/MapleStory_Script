var status = 0; 
var types=new Array("װ����[����]","������[����]","������[����]","������[����]","�ֽ���[����]"); 
var selectedMap = -1; 
function start() { 
    status = -1; 
    action(1, 0, 0); 
} 
function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (status >= 3 && mode == 0) { 
            cm.dispose(); 
            return; 
        } 
        if (mode == 1) 
            status++; 
        else { 
            cm.dispose(); 
            return; 
        } if (status == 0) { 
if (cm.getPlayer().getMapId() == 105050400 &&cm.haveItem(4001035)>=1){
cm.summonMob(8830000, 800000000, 10000, 1);//����5EѪ
 cm.gainItem(4001035,-1);
cm.serverNotice("[����]: ��� [" + cm.getPlayer() + "] �ҵ��˷�ŭ�������,���Ƿ��ܻ�ý�һ��ͻ����?");
cm.sendOk("���ò�˵���ٶȺܿ�!"); 
cm.dispose();
}else if (cm.getPlayer().getMapId() == 677000013){
cm.sendOk("���ò�˵���ٶȺܿ�!"); 
cm.dispose();
}else  {
   var a="����ı�������ʱ.ȴ������������ʱ��,�������Ұ�.\r\n\r\n       ����һ�з���,��(��(��)��)��\r\n#b" 
   for(var i=0;i<types.length;i++){ 
    a+= "\r\n#L" + i + "#" + types[ i ]+""; 
   } 
           cm.sendSimple(a); }
        } else if (status == 1) { 
           cm.deleteItem(selection+1); 
           cm.sendOk("����ɹ�!"); 
     cm.dispose(); 
        } 
        
        
    } 
} 
