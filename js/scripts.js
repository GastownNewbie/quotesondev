// Idoc ready shorthand
(function ($) {

    $(function ($) {
        let lastPage = '';
        $('#quote-submission-form').on('submit', postQuote);
        $('#new-quote-button').on('click', function (event) {

            event.preventDefault();
            lastPage = document.URL;
            $.ajax({
                method: 'get',

                url: api_vars.rest_url + "wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1",

            })
                .done(function (data) {
                    const $title = data[0].title.rendered;
                    const $content = data[0].content.rendered;
                    const $quoteSource = data[0]._qod_quote_source;
                    const $quoteSourceUrl = data[0]._qod_quote_source_url;


                    $(".entry-content").html($content);
                    $(".entry-title").html($title);
                    $(".source").html('<a href="' + $quoteSourceUrl + '">' + $quoteSource + '</a>');

                    history.pushState(null, null, data[0].slug);
                })

                .fail(function (error) {
                    console.log(error);
                });

            $(window).on('popstate', function () {
                window.location.replace(lastPage);

            });

        }); //end of ONCLICK

        //Start of Post method

        function postQuote(event) {
            event.preventDefault();
            console.log('form submitted');

            //TODO write ajax method
            const quoteAuthor = $('#quote-author').val();
            if (quoteAuthor.length !== '') {
                // call function postAjax(); below after checking value not empty - need to write else
            }
            $.ajax({
                method: 'post',
                url: api_vars.rest_url + 'wp/v2/posts',
                data: {
                    // TODO use the form input .val() for the title , content
                    title: 'A new post from the rest api :)',
                    content: 'The most amazing quote from ',
                    status: 'pending'
                    // _qod_quote_source:
                    //_qod_quote_source_url:
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-WP-Nonce', api_vars.wpapi_nonce);
                }

            }).done(function () {
                console.log('Great success');
                $('#quote-submission-form').slideUp(500);

            }).fail(function () {
                console.log('Form submit failed');
            });
        } //end of postquote
    }); //end of doc ready

})(jQuery);

