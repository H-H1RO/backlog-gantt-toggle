import $ from 'jquery';

const renderToggleAllButton = () => {
  // グルーピングがされていなければ処理を終える
  if (!$('#groupingHidden').val() || $('#groupingHidden').val() === '0') {
    return;
  }
  const $expandAllButton = $(
    '<input type="button" class="button button--default _mg-b-5" value="expand all" />'
  );
  $('.result-set div:first').after($expandAllButton);

  const $collapseAllButton = $(
    '<input type="button" class="button button--default _mg-b-5" value="collapse all" />'
  );
  $expandAllButton.after($collapseAllButton);

  // 全て開く
  $expandAllButton.on('click', function () {
    $('#gantt .title-group__icon-collapsed:has(.icon--arrow-down)').trigger(
      'click'
    );
    $(this).trigger('blur');
  });

  // 全て閉じる
  $collapseAllButton.on('click', function () {
    $('#gantt .title-group__icon-collapsed:has(.icon--arrow-up)').trigger(
      'click'
    );
    $(this).trigger('blur');
  });
};

renderToggleAllButton();
