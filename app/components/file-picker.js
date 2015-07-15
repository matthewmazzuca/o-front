import Ember from 'ember';

export default Ember.Component.extend({
	filepicker: Ember.inject.service(),

	openPicker: null,
  multipleImages: function() {
    var model = this.get('model');
    if (model.image_url) {
      return false
    } else {
      return true
    }
  },

	pickerOptions: {
    // imageMin: [375, 240],
    // imageMax: [1000,1000],
    // dimensions can be put back when subscription is paid for
    mimetype: 'image/*',
    container: 'window',
    services: ['COMPUTER', 'IMAGE_SEARCH', 'WEBCAM', 'FACEBOOK', 'GMAIL', 'BOX', 'DROPBOX', 'FLICKR', 'PICASA', 'INSTAGRAM'],
  },

	actions: {
		pickWithFilepicker: function() {
      this.set('openPicker', true);
    },

    fileSelected: function(InkBlob){
      var store = this.get('targetObject.store');
      var self = this;
      var model = this.get('model');

      if (model.image_url) { 

        this.set('model.image_url', InkBlob.url);
        console.log(this.get('model.image_url'));

      } else {
        InkBlob.forEach(function(item) {
          var image = store.createRecord('image', {
            image_url: item.url
          });
          model.get('images').addObject(image).then(function() {
            image.save();
          });
        })
      }
    },

    onClose: function () {
      this.set('openPicker',false);
    },

    clearErrors: function () {
      this.get('errors').clear();
    },

    setSelected: function (newSelection) {
      this.set('selectedImage', newSelection);
    }

	}
});
