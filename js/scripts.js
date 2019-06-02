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


            // ajax method submit quote
            const quoteAuthor = $('#quote-author').val();
            if (quoteAuthor.length !== '') {
                $("#error").show('slow');
            }
            else {
                alert("Please enter name of Author.");
            }
            const quoteContent = $('#quote-content').val();
            if (quoteContent.length !== '') {
                $("#error").show('slow');
            }
            else {
                alert(" Please enter quote.");
            }
            const quoteSourceForm = $('#quote-source').val();
            if (quoteSourceForm.length !== '') {
                $("#error").show('slow');
            }
            else {
                alert(" Please enter source of quote, if known, or 'anonymous'.");
            }
            const quoteSourceUrlForm = $('#quote-source-url').val();
            if (quoteSourceUrlForm.length !== '') {
                $("#error").show('slow');
            }
            else {
                alert(" Please enter website link to quote, if available.");
            }
            $.ajax({
                method: 'post',
                url: api_vars.rest_url + 'wp/v2/posts',
                data: {

                    title: quoteAuthor,
                    content: quoteContent,
                    source: quoteSourceForm,
                    sourceUrl: quoteSourceUrlForm,
                    status: 'pending'

                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-WP-Nonce', api_vars.wpapi_nonce);
                }

            }).done(function () {
                alert('Thank you for your submission!');
                $('#quote-submission-form').slideUp(500);

            }).fail(function () {
                alert('Form submit failed');
            });
        } //end of postquote
    }); //end of doc ready

})(jQuery);

