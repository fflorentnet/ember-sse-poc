import Ember from 'ember';

export default Ember.Controller.extend({
    sorting: ['id:desc'],
    sortedDummies : Ember.computed.sort('model.dummies', 'sorting')
});
