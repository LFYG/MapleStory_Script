function enter(pi) { 
         if (pi.getPlayer().getJob().getId() >= 1000) { 
                 pi.warp(130010000, "east00"); 
         } else { 
                 pi.playerMessage("������ð�յ���ʾ��ֻ����ʿ��ְҵ�ſ����볡!"); 
                 return false; 
         } 
         return true; 
} 
