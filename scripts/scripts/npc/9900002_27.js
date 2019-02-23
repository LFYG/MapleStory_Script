/*
 ��ݹ���
 */

var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            text = "\t\t\t\t#e- ��ݹ��� -#n\r\n\r\n#b";
            text += "\t\t\t#L0#���հ�����ָ������#l\r\n";
            //text += "\t\t\t#L1#������հ����ڵ���#l\r\n";
            cm.sendSimple(text);
        } else {
            if (selstatus == -1) {
                selstatus = selection;
            }
            switch (selstatus) {
                case 0:
                    deleteItemBySlot(selection);
                    break;
                case 1:
                    deleteItemBySlotAll(selection);
					break;
            }
        }
    }
}

function deleteItemBySlot(selection) {
    if (status == 1) {
        text = "\t\t#e- ��ѡ��Ҫ���յĵ������� -#n\r\n\r\n#b";
        text += "\t\t\t\t#L1#װ����#l\r\n";
        text += "\t\t\t\t#L2#������#l\r\n";
        text += "\t\t\t\t#L4#������#l\r\n";
        text += "\t\t\t\t#L3#������#l\r\n";
        text += "\t\t\t\t#L5#������#l\r\n";
        cm.sendSimple(text);
    } else if (status == 2) {
        inventoryType = selection;
        itemList = cm.getInventory(inventoryType).list().iterator();
        text = "\t\t#e- ��ѡ��Ҫ���յĵ��� -#n\r\n\r\n#b";
        var indexof = 1;
        while (itemList.hasNext()) {
            var item = itemList.next();
            text += "#L" + item.getPosition() + "##v" + item.getItemId() + "#";
            if (indexof > 1 && indexof % 5 == 0) {
                text += "\r\n";
            }
            indexof++;
        }
        cm.sendSimple(text);
    } else if (status == 3) {
        var item = cm.getInventory(inventoryType).getItem(selection);
        deleteSlot = selection;
        deleteQuantity = item.getQuantity();
        text = "#eȷ��Ҫ����#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "�� #k��";
        cm.sendNextPrev(text);
    } else if (status == 4) {
        cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
        cm.sendOk("���ճɹ���ף����Ϸ���~");
        status = 0;
    }
}

function deleteItemBySlotAll(selection) {
        if (status == 1) {
            var text = "#e���,���������Ϊ������һ����ı���Ӵ,������Ҫע��,�������ɲ��ܸ�ԭ��Ӵ!\r\n";
            text += "#b#L1#��Ҫ��������װ����ȫ����װ��#l\r\n";
            text += "#r#L2#��Ҫ��������������ȫ����װ��#l\r\n";
            text += "#g#L3#��Ҫ��������������ȫ����װ��#l\r\n";
            text += "#r#L4#��Ҫ��������������ȫ����װ��#l\r\n";
            text += "#b#L5#��Ҫ��������������ȫ����װ��#l\r\n";
            cm.sendSimple(text);

        } else if (status == 2) {
            if (selection == 1 || selection == 2 || selection == 3 || selection == 4 || selection == 5) {
                fstype = selection;//��װ�����͸�ֵ��fstype����,��������ķ���
                cm.sendYesNo("��ȷ������Ϊ��ɾ��װ����?");
            }
        } else if (status == 3) {
		var item = cm.getInventory(fstype).getItem();
		 deleteQuantity = item.getQuantity();
		 itemList = cm.getInventory(fstype).list().iterator();
            cm.removeSlot(fstype, itemList, deleteQuantity);//���÷������ɾ��װ������
            cm.sendOk("���ճɹ���ף����Ϸ���~");
            status = 0;
        }
    }