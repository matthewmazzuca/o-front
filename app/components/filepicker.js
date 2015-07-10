import Ember from 'ember';

export default Ember.Component.extend({
	filepicker: Ember.inject.service(),
 
    someFunction: function(){
        //Use the promise in case you are not sure that your component will be surly initialized after filepicker has been loaded
        this.get('filepicker.promise').then(function(filepicker){
            //do something with filepicker
        });
 
        //OR if you are sure filepicker has already been loaded use:
        this.get('filepicker.instance')
    }
});
