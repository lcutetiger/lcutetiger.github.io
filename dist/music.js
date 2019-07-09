
//Thanks Meting and Aplayer
//�赥id:141998290
$(function() {
    $.ajax({
        url: "https://api.i-meto.com/meting/api?server=netease&type=playlist&id=3778678",
        success: function(e) {
            var aplayerList = new APlayer({
            element: document.getElementById('aplayer'),
            narrow: false,
            autoplay: false,
            showlrc: true,
			lrcType: 3,
            order: 'list',
            mutex: true,
            theme: '#FFF0',
            mode: 'random',
            preload: 'metadata',
			fixed: true,
            listmaxheight: '200px',
            music:JSON.parse(e)
            });
            window.aplayers || (window.aplayers = []),
            window.aplayers.push(aplayerList)
        }
    })
})