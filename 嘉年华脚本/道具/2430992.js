/* 
 * 2430929 - ���ް�����(7��Ȩ) - ˫���������7����ʹ����˼���[���ް�����]�� 
 */
var period = 30;
var mountSkillId = 80001185;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}