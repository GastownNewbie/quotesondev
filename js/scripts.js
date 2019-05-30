// (function ($) {

//     $('#toggle-status').on('click', function (event) {
//         event.preventDefault();

//         $.ajax({
//             method: 'post',

//             url: api_vars.rest_url + `http://localhost:8888/quotesondev/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1`,



//             // +  get rid of wp etc change end to random quote url

//             // data: {
//             //     get: 
//             // get request here
//             // grab input values of fields


//             // },
//             // beforeSend: function (xhr) {
//             //
//             // }



//         }).done(function (response) {
//             //console log the response
//             alert('Success! The status had been changed.');

//         });

//     });

// })(jQuery);