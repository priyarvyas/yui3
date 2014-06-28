YUI().use('node', 'event', function (Y) {
   var img = Y.one('#img'),
       input = Y.one('#input');      
     
    Y.one('.btn-set').on('click', function(e) {
        var value = input.get('value'),
            width = img.get('offsetWidth');
        if (value == '') {
            input.set('value', width);
        } else if (!isNaN(parseInt(value))) { // if the value in the input is a number
            img.set('offsetWidth', value);           
        }
    });
});