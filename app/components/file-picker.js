import Ember from 'ember';

export default Ember.Component.extend({
	filepicker: Ember.inject.service(),

	openPicker: null,

	pickerOptions: {
    mimetypes: 'image/*',
    container: 'window',
    services: ['COMPUTER', 'IMAGE_SEARCH', 'WEBCAM', 'FACEBOOK', 'GMAIL', 'BOX', 'DROPBOX', 'FLICKR', 'PICASA', 'INSTAGRAM']
  },

	actions: {
		pickWithFilepicker: function() {
      this.set('openPicker', true);
    },

    fileSelected: function(InkBlob){
      console.log("wow");
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
