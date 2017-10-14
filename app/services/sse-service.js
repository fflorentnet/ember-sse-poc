import Ember from 'ember';
import DS from 'ember-data';
import { subscribe } from 'sse-poc/utils/sse-utils';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    init() {
        this._super(...arguments);
    },
    continousFetch(path, modelName) {
        var unbind = subscribe(path, (data)=>{
            if (data === 'quit') {
                unbind();
            }
            this.get('store').push(this.get('store').normalize(modelName, JSON.parse(data)));
        });
    }
});
