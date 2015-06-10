import Ember from 'ember';

export default Ember.View.extend({
  actions: {
    click: function() {
      filepicker.pick({
          mimetypes: ['image/*', 'text/plain'],
          container: 'modal',
          mobile: true
        },
        function(image){
          console.log(JSON.stringify(InkBlob));
        },
        function(FPError){
          console.log(FPError.toString());
        }
      );

    }
  }
});