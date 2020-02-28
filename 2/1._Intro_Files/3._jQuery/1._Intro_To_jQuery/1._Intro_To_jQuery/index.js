$("#teleport-btn").click(() => {
    const temp = $(".input-left").val();
    $(".input-left").val($(".input-right").val());
    $(".input-right").val(temp);
});