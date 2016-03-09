window.onload = function() {
  var addlink = $('#trAdd a');
  addlink.on('click', function() {
    $('#tbody').append(trHTML);
    //xxx.on('click', modifyFun);
    $('table a').one('click');
  });

  //var modifylink = $('table a');
  //$('table').on('click', 'a', function modifyFun() {
  $('table').one('click', 'a', function modifyFun() {
    var tdToMod = $(this).parent('td').siblings().first(); // 注意：修改第一个td
    tdToMod.after('<td><input type="text"></td>'); // 注意：添加为后一个td
    tdToMod.css('display', 'none');
    //$(this).text('确认');
    //$(this).off('click'); // $(document).on()冲突？
    var input = tdToMod.next().children();
    input.val(tdToMod.text());
    input.focus();

    $('table').one('click', 'a', function() {
      var modedText = input.val();
      //console.log(tdToMod.next()[0]);
      tdToMod.next().detach();
      tdToMod.text(modedText);
      tdToMod.css('display', 'table-cell');
      //$(this).text('修改');
      $('table').one('click', 'a', modifyFun); // !
    });
  });

  var formattedTr = '<tr><td>%data%</td><td>2</td><td><a href="javascript:;">修改</a></td></tr>'; // 插入table的元素一定要标准格式
  var trHTML = formattedTr.replace("%data%", "未命名");
};
