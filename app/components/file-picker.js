import Ember from 'ember';

export default Ember.Component.extend({
	filepicker: Ember.inject.service(),

	openPicker: null,

	pickerOptions: {
    imageMin: [600, 600],
    mimetypes: 'image/*',
    container: 'window',
    services: ['COMPUTER', 'IMAGE_SEARCH', 'WEBCAM', 'FACEBOOK', 'GMAIL', 'BOX', 'DROPBOX', 'FLICKR', 'PICASA', 'INSTAGRAM'],
  },

	actions: {
		pickWithFilepicker: function() {
      this.set('openPicker', true);
    },

    fileSelected: function(InkBlob){
      var model = this.get('model');
      console.log(InkBlob)
      this.set('model.image_url', InkBlob.url)
      console.log(this.get('model.image_url'))
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
