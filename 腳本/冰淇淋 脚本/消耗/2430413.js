/* 
 * 2430413 - ���ް�����(7��Ȩ) - ˫���������7����ʹ����˼���[���ް�����]�� 
 */
var period = 7;
var mountSkillId = 80001073;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}