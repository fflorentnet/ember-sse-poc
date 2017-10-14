import Ember from 'ember';

export default Ember.Route.extend({
    sseDummy: Ember.inject.service('sse-service'),
    model() {
        this.store.findAll('dummy');
        this.get('sseDummy').continousFetch('http://localhost:8181/events/', 'dummy');
        return {
            dummies: this.store.peekAll('dummy')
        };
    }
});
