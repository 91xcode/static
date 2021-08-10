wy_title = $('title').text()

function loading() {
    $.ajax({
        /*      header: 'Content-Type:text/html;charset=UTF-8',
                date_default_timezone_set: 'PRC',
                type: 'GET',
                url: 'https://api.uomg.com/api/comments.163', 
        */
        type: 'GET',
        url: 'https://api.uomg.com/api/rand.music',
        data: 'sort=抖音榜&format=json',
        dataType: 'json',
        success: function(baoguo) {
            if (baoguo['code'] == 1) {
                $('#pic').html('<img src="' + baoguo['data']['picurl'] + '">');
                $("#info_song").html(baoguo['data']['name']);
                $("#info_song_auther").html('歌手-' + baoguo['data']['artistsname']);
                $('.baoguo_loading_frame').hide();
                $(".bg_image").css({
                    "background": "url(" + baoguo['data']['picurl'] + ") no-repeat center"
                });

                //如果歌曲链接失效则不显示播放按钮
                if (baoguo['data']['url'] !== null) {
                    $("#music").html('<audio id="player" src="' + baoguo['data']['url'] + '" controls="controls"></audio>');
                    $('#player_btn').html('<img src="images/play.png">');

                    fetch('https://v1.hitokoto.cn')
                        .then(response => response.json())
                        .then(data => {
                            const hitokoto = document.getElementById('info_tag')
                            hitokoto.innerText = data.hitokoto
                            const from = document.getElementById('info_tag1')
                            from.innerText = "来自:" + data.from
                        })
                }
            }
        }
    });



}
loading();

/**
 * cookie播放
 */

setTimeout(function() {
    is_player();
}, 500);


/**
 * 切换下一条
 */
$('#next').on('click', function() {
    next()
});

function next() {
    $('title').text(wy_title)
    $('.baoguo_loading_frame').show();
    $("#info_song").html('Loding...');
    $("#info_content").remove()
    $("#music").html('Player-Loding...');
    loading()

    setTimeout(function() {
        is_player();
    }, 500);

}

/**
 * 返回首页
 */
$('#back').on('click', function() {
    back()
});

function back() {
    window.location.href = "http://li-feng.xyz"
}
/**
 * 播放音乐
 */
$('#player_btn').on('click', function() {
    is_player()
});

function is_player() {
    var player = $("#player")[0];
    /*如果已经暂停*/
    if (player.paused) {
        /*播放*/
        player.play();
        var title = $("#info_song").text();
        $('title').text('正在播放-♫' + title)
        $("#pic img").css({
            "-webkit-animation": "baoguo infinite 5s linear",
            "animation": "baoguo infinite 5s linear"
        });
        $('#player_btn').html('<img src="images/pause.png">');
    } else {
        /*暂停*/
        player.pause();
        $('title').text(wy_title)
        $("#pic img").removeAttr("style", "");
        $('#player_btn').html('<img src="images/play.png">');
    }

    //判断是否播放完毕
    player.loop = false;
    player.addEventListener('ended', function() {
        next()
    }, false);
}