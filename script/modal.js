 $('#exampleModal').on('show.bs.modal', function (event) {
     var button = $(event.relatedTarget) // Button that triggered the modal
     var recipient = button.data('whatever');
     var price = button.data('price');
     var tittle = button.data('tittle');
     var color = button.data('color');
     var p1 = button.data('p1');
     var p2 = button.data('p2');
     var p3 = button.data('p3');
     var p4 = button.data('p4');
     var circle = button.data('circle');
     var num = button.data('num') // Extract info from data-* attributes
     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
     var modal = $(this)
     modal.find('.modalBox .planBox .h1').text(recipient);
     modal.find('.modalBox .priceBox p').text('$' + price);
     modal.find('.modalBox .num').text(num);
     modal.find('.modalBox .tittleS').text(tittle);
     modal.find('.modalBox .planBox').css({
         backgroundColor: color
     });
     modal.find('.modalBox .btnCircle').css({
         backgroundColor: circle
     });
     modal.find('.modalBox .p1').text(p1);
     modal.find('.modalBox .p2').text(p2);
     modal.find('.modalBox .p3').text(p3);
     modal.find('.modalBox .p4').css({
         display: p4
     });


     if (num == '03') {
         $('.priceBox').addClass('zeroThree');
         $('.two').addClass('zeroThree');
     } else {
         $('.priceBox').removeClass('zeroThree');
         $('.two').removeClass('zeroThree');
     };

     if (num == '04') {
         $('.priceBox p').css({
             'border-bottom': '0.22vw solid white'
         });
         $('.circleL').css({
             'background-color': '#C2E9F5'
         })
     } else {
         $('.priceBox p').css({
             'border-bottom': '0.22vw solid #FF40B1'
         })
         $('.circleL').css({
             'background-color': '#FF40B1'
         })
     };


 })
